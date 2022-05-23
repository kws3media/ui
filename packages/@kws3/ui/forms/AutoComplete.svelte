<!--
  @component


  @param {string} [value=""] - Value of the Input

This property can be bound to, to fetch the current value, Default: `""`
  @param {string} [placeholder="Please select..."] - Placeholder text for the input, Default: `"Please select..."`
  @param {array} [options=[]] - Array of strings, or objects.
Used to populate the list of options in the dropdown, Default: `[]`
  @param {function|null} [search=null] - Async function to fetch options

Only send this prop if you want to fetch `options` asynchronously.
`options` prop will be ignored if this prop is set., Default: `null`
  @param {'fuzzy'|'strict'} [search_strategy="fuzzy"] - Filtered options to be displayed strictly based on search text or perform a fuzzy match.
Fuzzy match will not work if `search` function is set, as the backend service is meant to do the matching., Default: `"fuzzy"`
  @param {''|'small'|'medium'|'large'} [size=""] - Size of the input, Default: `""`
  @param {''|'primary'|'success'|'warning'|'info'|'danger'|'dark'|'light'} [color=""] - Color of the input, Default: `""`
  @param {string} [style=""] - Inline CSS for input container, Default: `""`
  @param {boolean} [readonly=false] - Marks component as read-only, Default: `false`
  @param {boolean} [disabled=false] - Disables the component, Default: `false`
  @param {string} [no_options_msg="No options"] - Message to display when no matching options are found, Default: `"No options"`
  @param {HTMLElement|string} [dropdown_portal=undefined] - Where to render the dropdown list.
Can be a DOM element or a `string` with the CSS selector of the element.

By default it renders in a custom container appended to `document.body`., Default: `undefined`
  @param {string} [class=""] - CSS classes for input container, Default: `""`

  ### Events
  - `change`
  - `blur` - Triggered when the input loses focus

  ### Slots
  - `<slot name="default" {option} />` - Slot containing text for each selectable item

Default value: `<span>{option.label}</span>`

-->
<div
  bind:this={el}
  class="
     kws-autocomplete input
    {disabled ? 'is-disabled' : ''}
    {readonly ? 'is-readonly' : ''}
    is-{size} is-{color} {klass}
  "
  class:readonly
  {style}>
  <input
    class="input is-{size}"
    bind:this={input}
    autocomplete="off"
    {disabled}
    {readonly}
    bind:value
    on:keydown={handleKeydown}
    on:focus={() => setOptionsVisible(true)}
    on:blur={blurEvent}
    on:blur={() => setOptionsVisible(false)}
    {placeholder} />
  {#if search && options_loading}
    <button
      type="button"
      style="border: none;"
      class="button is-paddingless delete is-medium is-loading" />
  {/if}
  {#if rootContainer}
    <div class="kws-autocomplete" use:portal={dropdown_portal}>
      <ul bind:this={dropdown} class="options" class:hidden={!showOptions}>
        {#each filteredOptions as option}
          <li
            on:mousedown|preventDefault|stopPropagation={() =>
              handleOptionMouseDown(option)}
            class:active={activeOption === option}>
            <!--
              Slot containing text for each selectable item

              Default value: `<span>{option.label}</span>`
            -->
            <slot {option}>
              <!-- eslint-disable-next-line @ota-meshi/svelte/no-at-html-tags -->
              {@html option.label}
            </slot>
          </li>
        {:else}
          {#if !options_loading && value}
            <li class="no-options">
              {no_options_msg}
            </li>
          {/if}
        {/each}
      </ul>
    </div>
  {/if}
</div>

<script>
  import { portal } from "@kws3/ui";
  import { debounce } from "@kws3/ui/utils";
  import { createEventDispatcher, onMount, tick } from "svelte";
  import { createPopper } from "@popperjs/core";
  import fuzzysearch from "@kws3/ui/utils/fuzzysearch";

  const sameWidthPopperModifier = {
    name: "sameWidth",
    enabled: true,
    phase: "beforeWrite",
    requires: ["computeStyles"],
    fn: ({ state }) => {
      state.styles.popper.width = `${Math.max(
        200,
        state.rects.reference.width
      )}px`;
    },
    effect: ({ state }) => {
      state.elements.popper.style.width = `${state.elements.reference.offsetWidth}px`;
    },
  };

  const rootContainerId = "kws-overlay-root";

  /**
   * Value of the Input
   *
   * This property can be bound to, to fetch the current value
   */
  export let value = "";

  /**
   * Placeholder text for the input
   */
  export let placeholder = "Please select...";
  /**
   * Array of strings, or objects.
   * Used to populate the list of options in the dropdown
   */
  export let options = [];
  /**
   * Async function to fetch options
   *
   * Only send this prop if you want to fetch `options` asynchronously.
   * `options` prop will be ignored if this prop is set.
   *
   * @type {function|null}
   */
  export let search = null;

  /**
   * Filtered options to be displayed strictly based on search text or perform a fuzzy match.
   * Fuzzy match will not work if `search` function is set, as the backend service is meant to do the matching.
   * @type {'fuzzy'|'strict'}
   */
  export let search_strategy = "fuzzy";
  /**
   * Size of the input
   *  @type {''|'small'|'medium'|'large'}
   */
  export let size = "";
  /**
   * Color of the input
   * @type {''|'primary'|'success'|'warning'|'info'|'danger'|'dark'|'light'}
   */
  export let color = "";
  /**
   * Inline CSS for input container
   */
  export let style = "";
  /**
   * Marks component as read-only
   */
  export let readonly = false;
  /**
   * Disables the component
   */
  export let disabled = false;
  /**
   * Message to display when no matching options are found
   */
  export let no_options_msg = "No options";

  /**
   * Where to render the dropdown list.
   * Can be a DOM element or a `string` with the CSS selector of the element.
   *
   * By default it renders in a custom container appended to `document.body`.
   *
   * @type { HTMLElement|string}
   */
  export let dropdown_portal = "#" + rootContainerId;

  /**
   * CSS classes for input container
   */
  let klass = "";
  export { klass as class };

  if (!search && (!options || !options.length))
    console.error(`Missing options`);

  //ensure we have a root container for all our hoisitng related stuff

  let rootContainer = document.getElementById(rootContainerId);
  if (!rootContainer) {
    rootContainer = document.createElement("div");
    rootContainer.id = rootContainerId;
    document.body.appendChild(rootContainer);
  }

  const fire = createEventDispatcher();

  let el, //whole wrapping element
    dropdown, //dropdown ul
    input, //the textbox to type in
    POPPER,
    activeOption = "",
    searching = false,
    showOptions = false,
    filteredOptions = [], //list of options filtered by search query
    normalisedOptions = [], //list of options normalised
    options_loading = false; //indictaes whether async search function is running

  $: asyncMode = search && typeof search === "function";

  $: options, normaliseOptions();
  $: normalisedOptions, value, searching, updateFilteredOptions();

  $: allow_fuzzy_match = !search && search_strategy === "fuzzy";

  //convert arrays of strings into normalised arrays of objects
  function normaliseOptions() {
    let _items = options || [];
    if (!_items || !(_items instanceof Array)) {
      normalisedOptions = [];
      return;
    }

    normalisedOptions = normaliseArraysToObjects(_items);
  }

  function updateFilteredOptions() {
    let filters = [];

    //so we need to check if we are actually searching
    if (!searching && value) {
      filters = [];
    } else {
      filters = sanitizeFilters(value);
      setOptionsVisible(true);
    }
    console.log("updateFilteredOptions", { filters, value });
    if (asyncMode && searching) {
      debouncedTriggerSearch(filters);
    } else {
      let cache = {};
      //TODO - can optimize more for very long lists
      filters.forEach((word, idx) => {
        // iterate over each word in the search query
        let opts = [];
        if (word) {
          opts = [...normalisedOptions].filter((item) => {
            // filter out items that don't match `filter`
            if (typeof item === "object" && item.value) {
              return typeof item.value === "string" && match(word, item.value);
            }
          });
        }

        cache[idx] = opts; // storing options to current index on cache
      });

      filteredOptions = Object.values(cache) // get values from cache
        .flat() // flatten array
        .filter((v, i, self) => self.indexOf(v) === i); // remove duplicates

      filteredOptions = highlightMatches(filteredOptions, filters);
    }
  }

  function triggerSearch(filters) {
    if (!filters.length) {
      //do not trigger async search if filters are empty
      filteredOptions = [];
      searching = false;
      return;
    }
    options_loading = true;
    search(filters).then((_options) => {
      searching = false;
      options_loading = false;
      tick().then(() => {
        filteredOptions = normaliseArraysToObjects(_options);
        filteredOptions = highlightMatches(filteredOptions, filters);
      });
    });
  }

  const debouncedTriggerSearch = debounce(triggerSearch, 150, false);

  onMount(() => {
    POPPER = createPopper(el, dropdown, {
      strategy: "fixed",
      placement: "bottom-start",
      modifiers: [sameWidthPopperModifier],
    });

    //normalize value for single
    if (value === null || typeof value == "undefined") {
      value = null;
    }

    return () => {
      POPPER.destroy();
    };
  });

  function add(token) {
    if (readonly || disabled) {
      return;
    }

    value = token.value;
    fire("change", { token, type: `add` });

    //clear dropdown results in asyncMode
    if (asyncMode) {
      clearDropDownResults();
    }
    setOptionsVisible(false);
  }

  function blurEvent() {
    /**
     * Triggered when the input loses focus
     */
    fire("blur");
  }

  function setOptionsVisible(show) {
    // nothing to do if visibility is already as intended

    console.log("options visible", show);

    if (!value || !filteredOptions.length) {
      show = false;
    }
    if (readonly || disabled || show === showOptions) return;
    showOptions = show;
    if (show) {
      console.log("focused");
      input && input.focus();
    } else {
      searching = false;
    }
    POPPER && POPPER.update();
  }

  function handleKeydown(event) {
    //BUG - arrow left/right triggering search call
    if (event.key === `Enter`) {
      event.preventDefault();

      if (activeOption) {
        handleOptionMouseDown(activeOption);
      } else {
        // no active option means no option is selected and the actual value should be what typed in input.
        setOptionsVisible(false);
      }
    } else if ([`ArrowDown`, `ArrowUp`].includes(event.key)) {
      const increment = event.key === `ArrowUp` ? -1 : 1;
      const newActiveIdx = filteredOptions.indexOf(activeOption) + increment;

      if (newActiveIdx < 0) {
        activeOption = filteredOptions[filteredOptions.length - 1];
      } else {
        if (newActiveIdx === filteredOptions.length)
          activeOption = filteredOptions[0];
        else activeOption = filteredOptions[newActiveIdx];
      }
    } else {
      searching = true;
    }
  }

  function handleOptionMouseDown(option) {
    add(option);
  }

  const match = (needle, haystack) => {
    let _hayStack = haystack.toLowerCase();
    return allow_fuzzy_match
      ? fuzzysearch(needle, _hayStack)
      : _hayStack.indexOf(needle) > -1;
  };

  const normaliseArraysToObjects = (arr) =>
    [...arr].map((item) =>
      typeof item === "object" ? item : { label: item, value: item }
    );

  const highlightMatches = (options, filters) => {
    if (!filters.length) return options;
    // join all filter parts and split into chars and filter out duplicates
    let common_chars = [...filters.join("")].filter(
      (v, i, self) => self.indexOf(v) === i
    );
    let common_chars_regex = common_chars.join("|");
    let regex = new RegExp(common_chars_regex, "gi");
    return options.map((item) => {
      return {
        ...item,
        label: item.value.replace(regex, (match) => `<span>${match}</span>`),
      };
    });
  };

  const clearDropDownResults = () => {
    tick().then(() => {
      options = [];
      searching = false;
    });
  };
  function sanitizeFilters() {
    return value && value.trim() ? value.toLowerCase().trim().split(/\s+/) : [];
  }
</script>
