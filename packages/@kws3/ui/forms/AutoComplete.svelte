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
  @param {string} [no_options_msg="No matching options"] - Message to display when no matching options are found, Default: `"No matching options"`
  @param {string} [async_search_prompt="Start typing to search..."] - Message to display in dropdown when async search can be performed, Default: `"Start typing to search..."`
  @param {string} [remove_all_tip="Remove all"] - Tooltip text for Remove Item button. This `string` will precede the selected Item Name in the tooltip., Default: `"Remove all"`
  @param {HTMLElement|string} [dropdown_portal=undefined] - Where to render the dropdown list.
Can be a DOM element or a `string` with the CSS selector of the element.

By default it renders in a custom container appended to `document.body`., Default: `undefined`
  @param {string} [class=""] - CSS classes for input container, Default: `""`

  ### Events
  - `change`
  - `blur` - Triggered when the input loses focus
  - `remove`

  ### Slots
  - `<slot name="default" {option} />` - Slot containing text for each selectable item

Default value: `<span>{option.label|| option}</span>`

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
  <ul class="tokens">
    <input
      class="input is-{size}"
      bind:this={input}
      autocomplete="off"
      {disabled}
      {readonly}
      bind:value
      on:click|self|stopPropagation={() => setOptionsVisible(true)}
      on:keydown={handleKeydown}
      on:focus={() => setOptionsVisible(true)}
      on:blur={blurEvent}
      on:blur={() => setOptionsVisible(false)}
      placeholder={_placeholder} />
  </ul>
  {#if search && options_loading}
    <button
      type="button"
      style="border: none;"
      class="button is-paddingless delete is-medium is-loading" />
  {:else if !readonly && !disabled}
    <button
      type="button"
      class="remove-all delete is-small"
      data-tooltip={remove_all_tip}
      on:click|stopPropagation={removeAll}
      style={shouldShowClearAll ? "" : "display: none;"} />
  {/if}
  {#if rootContainer}
    <div class="kws-autocomplete" use:portal={dropdown_portal}>
      <ul bind:this={dropdown} class="options" class:hidden={!showOptions}>
        {#each filteredOptions as option}
          <li
            on:mousedown|preventDefault|stopPropagation={() =>
              handleOptionMouseDown(option)}
            on:mouseenter|preventDefault|stopPropagation={() => {
              activeOption = option;
            }}
            class:active={activeOption === option}>
            <!--
              Slot containing text for each selectable item

              Default value: `<span>{option.label|| option}</span>`
            --><slot
              {option}>{option.label || option}</slot>
          </li>
        {:else}
          {#if !options_loading}
            <li class="no-options">
              {value ? no_options_msg : async_search_prompt}
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
  export let no_options_msg = "No matching options";
  /**
   * Message to display in dropdown when async search can be performed
   */
  export let async_search_prompt = "Start typing to search...";
  /**
   * Tooltip text for Remove Item button. This `string` will precede the selected Item Name in the tooltip.
   * */

  export let remove_all_tip = "Remove all";
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
  $: hasValue = value !== null && typeof value != "undefined";
  $: _placeholder = hasValue ? "" : placeholder;

  // eslint-disable-next-line no-redeclare
  $: shouldShowClearAll = hasValue;

  $: options, normaliseOptions();
  $: normalisedOptions, value, searching, updateFilteredOptions();

  // // TODO - verufy that this is not needed anymore
  // $: if (
  //   (activeOption && !filteredOptions.includes(activeOption)) ||
  //   (!activeOption && value)
  // )
  //   activeOption = filteredOptions[0];

  // //TODO: optimise isSelected function
  // $: isSelected = (option) => matchesValue(value, option);

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
      filters = value.toLowerCase().split(" ");
      setOptionsVisible(true);
    }
    if (asyncMode && searching) {
      debouncedTriggerSearch(filters);
    } else {
      let cache = {};
      filters.forEach((word, idx) => {
        let Opts = normalisedOptions.slice().filter((item) => {
          // filter out items that don't match `filter`
          if (typeof item === "object") {
            if (item.value) {
              return typeof item.value === "string" && match(word, item.value);
            } else {
              for (var key in item) {
                return typeof item[key] === "string" && match(word, item[key]);
              }
            }
          } else {
            return match(word, item);
          }
        });

        delete cache[idx + 1];
        cache[idx] = Opts;
      });
      //TODO CAUTION: used modern js api to flatten array
      filteredOptions = Object.values(cache).flat();
    }
  }

  //TODO - Fix async search
  function triggerSearch(filter) {
    if (filter === "") {
      //do not trigger async search if filter is empty
      options = [];
      searching = false;
      return;
    }
    options_loading = true;
    search(filter).then((_options) => {
      options = _options;
      searching = false;
      options_loading = false;
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
    //TODO  fix async mode
    if (asyncMode) {
      // initally on async mode options are empty
      // so we need to fill selectedOptions with value if value is avaliable
      options = value && [value];
      searching = false;
      // tick().then(() => {
      //   normaliseOptions();
      //   value = normaliseArraysToObjects(options).map((v) => v.value);
      //   if (single && Array.isArray(value)) {
      //     value = value[0];
      //   }
      //   clearDropDownResults();
      // });
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
    console.log(show);
    if (readonly || disabled || show === showOptions) return;
    showOptions = show;
    if (show) {
      input && input.focus();
    } else {
      searching = false;
    }
    POPPER && POPPER.update();
  }

  function handleKeydown(event) {
    if (event.key === `Enter`) {
      event.preventDefault();

      if (activeOption) {
        handleOptionMouseDown(activeOption);
      } else {
        // no active option means the options are closed in which case enter means open
        setOptionsVisible(true);
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

  const removeAll = () => {
    fire("remove", { token: value });
    fire("change", { token: value, type: `remove` });
    value = "";
    if (asyncMode) {
      clearDropDownResults();
    }
  };

  // const matchesValue = (_value, _option) => {
  //   if (_value === null || _value === "" || typeof _value == "undefined") {
  //     return false;
  //   }
  //   return `${_value.value || _value}` === `${_option.value}`;
  // };

  const match = (needle, haystack) => {
    let _hayStack = haystack.toLowerCase();
    return allow_fuzzy_match
      ? fuzzysearch(needle, _hayStack)
      : _hayStack.indexOf(needle) > -1;
  };

  const normaliseArraysToObjects = (arr) => {
    return arr.slice().map((item) => {
      if (typeof item === "object") {
        return item;
      }
      let __obj = {};
      __obj.label = item;
      __obj.value = item;
      return __obj;
    });
  };

  const clearDropDownResults = () => {
    tick().then(() => {
      options = [];
      searching = false;
    });
  };
</script>
