<!--
  @component


  @param {Array|?string} [value=undefined] - Value of the Input

This property can be bound to, to fetch the current value, Default: `undefined`
  @param {object} [max=null] - Maximum number of selectable items from dropdown list.

Accepts a `null` value for unlimited selected items.
Or a number value, Default: `null`
  @param {string} [placeholder="Please select..."] - Placeholder text for the input, Default: `"Please select..."`
  @param {array} [options=[]] - Array of strings, or objects.
Used to populate the list of options in the dropdown, Default: `[]`
  @param {string} [search_key="name"] - If `options` is an array of objects,
this property of each object will be searched, Default: `"name"`
  @param {string} [value_key="id"] - If `options` is an array of objects,
this property of each object will be returned as the value, Default: `"id"`
  @param {function|null} [search=null] - Async function to fetch options

Only send this prop if you want to fetch `options` asynchronously.
`options` prop will be ignored if this prop is set., Default: `null`
  @param {string|'fuzzy'|'strict'} [search_strategy="fuzzy"] - Filtered options to be displayed strictly based on search text or perform a fuzzy match.
Fuzzy match will not work if `search` function is set, as the backend service is meant to do the matching., Default: `"fuzzy"`
  @param {number} [scoreThreshold=3] - Score threshold for fuzzy search strategy, setting high score gives more fuzzy matches., Default: `3`
  @param {string|''|'small'|'medium'|'large'} [size=""] - Size of the input, Default: `""`
  @param {string|''|'primary'|'success'|'warning'|'info'|'danger'|'dark'|'light'} [color=""] - Color of the input, Default: `""`
  @param {string} [style=""] - Inline CSS for input container, Default: `""`
  @param {boolean} [readonly=false] - Marks component as read-only, Default: `false`
  @param {boolean} [disabled=false] - Disables the component, Default: `false`
  @param {string} [selected_icon="check"] - Icon used to mark selected items in dropdown list, Default: `"check"`
  @param {boolean} [summary_mode=false] - Shows only the number of items selected, instead of listing all the selected items in the input., Default: `false`
  @param {string} [no_options_msg="No matching options"] - Message to display when no matching options are found, Default: `"No matching options"`
  @param {string} [async_search_prompt="Start typing to search..."] - Message to display in dropdown when async search can be performed, Default: `"Start typing to search..."`
  @param {string} [remove_btn_tip="Remove"] - Tooltip text for Remove Item button. This `string` will precede the selected Item Name in the tooltip., Default: `"Remove"`
  @param {string} [remove_all_tip="Remove all"] - Tooltip text for the Clear All button, Default: `"Remove all"`
  @param {HTMLElement|string} [dropdown_portal=undefined] - Where to render the dropdown list.
Can be a DOM element or a `string` with the CSS selector of the element.

By default it renders in a custom container appended to `document.body`., Default: `undefined`
  @param {string} [class=""] - CSS classes for input container, Default: `""`

  ### Events
  - `change` - Triggered when the value changes
  - `add` - Triggered when an item is added from dropdown list
  - `remove` - Triggered when an item is removed from selected Items
  - `blur` - Triggered when the input loses focus

  ### Slots
  - `<slot name="default" {search_key} {option} />` - Slot containing text for each selectable item

Default value: `<span>{option[search_key] || option}</span>`

-->
<div
  bind:this={el}
  class="
    kws-searchableselect input
    {disabled ? 'is-disabled' : ''}
    {readonly ? 'is-readonly' : ''}
    is-{size} is-{color} {klass}
  "
  class:readonly
  class:single
  {style}
  on:click|stopPropagation={() => setOptionsVisible(true)}>
  <ul class="tokens tags {summary_mode ? 'has-addons' : ''}">
    {#if !single && selectedOptions && selectedOptions.length > 0}
      {#if summary_mode}
        <li class="tag summary-count is-{size} is-{color || 'primary'}">
          {selectedOptions.length}
        </li>
        <li
          class="tag is-{size} summary-text  is-{color || 'primary'} is-light">
          Item{selectedOptions.length === 1 ? "" : "s"} selected
        </li>
      {:else}
        {#each selectedOptions as tag}
          <li
            class="tag is-{size} is-{color || 'primary'} is-light"
            on:click|self|stopPropagation={() => setOptionsVisible(true)}>
            {tag[used_search_key]}
            {#if !readonly && !disabled}
              <button
                on:click|self|stopPropagation={() => remove(tag)}
                type="button"
                class="delete is-small"
                data-tooltip="{remove_btn_tip} {tag[used_search_key]}" />
            {/if}
          </li>
        {/each}
      {/if}
    {/if}
    {#if single}<span>{singleVisibleValue}</span>{/if}
    <input
      class="input is-{size}"
      bind:this={input}
      autocomplete="off"
      {disabled}
      {readonly}
      bind:value={searchText}
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
    <div
      class="kws-searchableselect is-{color || 'primary'}"
      use:portal={dropdown_portal}>
      <ul
        bind:this={dropdown}
        class="options {single ? 'is-single' : 'is-multi'}"
        class:hidden={!showOptions}>
        {#each filteredOptions as option}
          <li
            on:mousedown|preventDefault|stopPropagation={() =>
              handleOptionMouseDown(option)}
            on:mouseenter|preventDefault|stopPropagation={() => {
              if (mouseTracker.preventSelect) return;
              activeOption = option;
            }}
            on:mousemove|preventDefault|stopPropagation={(e) => {
              let { preventSelect, lastX, lastY } = mouseTracker;
              if (
                preventSelect &&
                (lastX !== e.clientX || lastY !== e.clientY)
              ) {
                mouseTracker.preventSelect = false;
                activeOption = option;
              }
              // mouse x,y is not in same position after the scrolling
              mouseTracker.lastX = e.clientX;
              mouseTracker.lastY = e.clientY;
            }}
            class="is-size-{list_text_size[size]}"
            class:selected={isSelected(option)}
            class:active={activeOption === option}>
            <span class="kws-selected-icon"
              ><Icon icon={selected_icon} size="small" /></span
            ><!--
              Slot containing text for each selectable item

              Default value: `<span>{option[search_key] || option}</span>`
            --><slot
              search_key={used_search_key}
              {option}>{option[used_search_key] || option}</slot>
          </li>
        {:else}
          {#if !options_loading}
            <li class="no-options is-size-{list_text_size[size]}">
              {searchText ? no_options_msg : async_search_prompt}
            </li>
          {/if}
        {/each}
      </ul>
    </div>
  {/if}
</div>

<script>
  import { Icon, portal } from "@kws3/ui";
  import { debounce } from "@kws3/ui/utils";
  import { createEventDispatcher, onMount, tick } from "svelte";
  import { createPopper } from "@popperjs/core";
  import { makeSearchEngine } from "@kws3/ui/search";
  import { scrollIntoActiveElement } from "../../internal";

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
   * @type {Array|?string}
   */
  export let value = [];
  /**
   * Maximum number of selectable items from dropdown list.
   *
   * Accepts a `null` value for unlimited selected items.
   * Or a number value
   */
  export let max = null;
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
   * If `options` is an array of objects,
   * this property of each object will be searched
   */
  export let search_key = "name";
  /**
   * If `options` is an array of objects,
   * this property of each object will be returned as the value
   */
  export let value_key = "id";
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
   * @type {string|'fuzzy'|'strict'}
   */
  export let search_strategy = "fuzzy";

  /**
   * Score threshold for fuzzy search strategy, setting high score gives more fuzzy matches.
   */
  export let scoreThreshold = 3;
  /**
   * Size of the input
   *  @type {string|''|'small'|'medium'|'large'}
   */
  export let size = "";
  /**
   * Color of the input
   * @type {string|''|'primary'|'success'|'warning'|'info'|'danger'|'dark'|'light'}
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
   * Icon used to mark selected items in dropdown list
   */
  export let selected_icon = "check";
  /**
   * Shows only the number of items selected, instead of listing all the selected items in the input.
   */
  export let summary_mode = false;
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
  export let remove_btn_tip = "Remove";
  /**
   * Tooltip text for the Clear All button
   */
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

  if (max !== null && max < 0) {
    throw new TypeError(`max must be null or positive integer, got ${max}`);
  }

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
    searchText = "",
    searching = false,
    showOptions = false,
    mouseTracker = {
      lastX: 0,
      lastY: 0, //  to check actual mouse is moving or not, for WebKit compatibility,
      preventSelect: false, //prevent select by mouse when up or down key is pressed
    },
    fuzzysearch = null,
    filteredOptions = [], //list of options filtered by search query
    normalisedOptions = [], //list of options normalised
    selectedOptions = [], //list of options that are selected
    options_loading = false; //indictaes whether async search function is running

  let list_text_size = {
    small: "7",
    medium: "5",
    large: "4",
  };

  $: single = max === 1;
  $: asyncMode = search && typeof search === "function";
  $: hasValue = single
    ? value !== null && typeof value != "undefined"
      ? true
      : false
    : value && value.length
    ? true
    : false;
  $: _placeholder = hasValue ? "" : placeholder;

  //ensure search_key and value_key are no empty strings
  $: used_search_key = search_key && search_key !== "" ? search_key : "name";
  $: used_value_key = value_key && value_key !== "" ? value_key : "id";

  // eslint-disable-next-line no-redeclare
  $: shouldShowClearAll = hasValue;

  $: options, normaliseOptions();
  $: normalisedOptions,
    searchText,
    searching,
    used_search_key,
    used_value_key,
    updateFilteredOptions();

  $: value, single, fillSelectedOptions();

  $: activeOption, searchText, filteredOptions, updateActiveOption();

  //TODO: optimise isSelected function
  /** @type {(option: array)=> boolean}*/
  $: isSelected = (option) => {
    if (single) return matchesValue(value, option);
    if (!(value && value.length > 0) || value === "") return false;
    // nothing is selected if `value` is the empty array or string
    else
      return Array.isArray(value)
        ? value.some((v) => matchesValue(v, option))
        : false;
  };

  $: singleVisibleValue =
    !searching && single && hasValue && selectedOptions && selectedOptions[0]
      ? selectedOptions[0][used_search_key]
      : "";

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
    let filter;

    //when in single mode, searchText contains the selected value
    //so we need to check if we are actually searching
    if (single && !searching) {
      filter = "";
    } else {
      filter = searchText.toLowerCase();
    }
    if (asyncMode && searching) {
      debouncedTriggerSearch(filter);
    } else {
      if (allow_fuzzy_match) {
        fuzzySearch(filter, [...normalisedOptions]);
      } else {
        filteredOptions = strictSearch(filter, [...normalisedOptions]);
      }
    }
  }

  function updateActiveOption() {
    if (
      (activeOption &&
        searching &&
        !filteredOptions.some(
          (fo) => fo[used_value_key] === activeOption[used_value_key]
        )) ||
      (!activeOption && searchText)
    ) {
      activeOption = filteredOptions[0];
    } else {
      if (allow_fuzzy_match) {
        activeOption = filteredOptions.find((opts) =>
          matchesValue(activeOption, opts)
        );
      }
    }
  }

  function fillSelectedOptions() {
    if (single) {
      selectedOptions = normalisedOptions.filter(
        (v) => `${v[used_value_key]}` === `${value}`
      );
    } else {
      let _normalisedOptions = asyncMode
        ? [...selectedOptions, ...normalisedOptions].filter(
            //de-dupe by `used_value_key` when in asyncMode
            (value, idx, self) =>
              idx ===
              self.findIndex((v) => v[used_value_key] === value[used_value_key])
          )
        : normalisedOptions;

      selectedOptions = _normalisedOptions
        .filter(
          (v) =>
            Array.isArray(value) &&
            value.some((vl) => `${v[used_value_key]}` === `${vl}`)
        )
        .sort(
          (a, b) =>
            // tweak for 'value is nullable' type error
            (value ? value.indexOf(a[used_value_key]) : 0) -
            (value ? value.indexOf(b[used_value_key]) : 0)
        );
    }

    POPPER && POPPER.update();
  }

  function triggerSearch(filter) {
    if (filter === "") {
      //do not trigger async search if filter is empty
      options = [];
      searching = false;
      return;
    }
    options_loading = true;
    if (search !== null) {
      search(filter).then((_options) => {
        options = _options;
        searching = false;
        options_loading = false;
      });
    }
  }

  const debouncedTriggerSearch = debounce(triggerSearch, 150, false);

  onMount(() => {
    POPPER = createPopper(el, dropdown, {
      strategy: "fixed",
      placement: "bottom-start",
      // @ts-ignore
      modifiers: [sameWidthPopperModifier],
    });

    let fuzzyOpts = null;
    if (allow_fuzzy_match) {
      fuzzyOpts = {
        analyzeSubTerms: true,
        analyzeSubTermDepth: 10,
        highlighting: {
          after: "",
          before: "",
        },
      };
      let searchOptions = {
        search_key: used_search_key,
        scoreThreshold,
        fuzzyOpts,
      };
      fuzzysearch = makeSearchEngine(searchOptions);
    }

    //normalize value for single versus multiselect
    if (value === null || typeof value == "undefined") {
      value = single ? null : [];
    }

    if (asyncMode) {
      // initally on async mode options are empty
      // so we need to fill selectedOptions with value if value is avaliable
      options = value ? [...(single ? [value] : [...value])] : [];
      searching = false;
      tick().then(() => {
        normaliseOptions();
        value = normaliseArraysToObjects(options).map((v) => v[used_value_key]);
        if (single && Array.isArray(value)) {
          value = value[0];
        }
        fillSelectedOptions();
        clearDropDownResults();
      });
    }

    return () => {
      POPPER.destroy();
    };
  });

  function add(token) {
    if (readonly || disabled) {
      return;
    }

    let isAlreadySelected = isSelected(token);

    if (single) {
      if (!isAlreadySelected) {
        value = token[used_value_key];
        fire("change", { token, type: `add` });
        //clear dropdown results in asyncMode
        if (asyncMode) {
          clearDropDownResults();
        }
      }
      setOptionsVisible(false);
    }

    if (
      !isAlreadySelected &&
      !single &&
      (max === null || (value && value.length < max))
    ) {
      if (asyncMode) {
        //Do not filter invalid options, as they are async and might not be invalid
        //but ensure they are unique
        value = [...(value ? value : []), token[used_value_key]].filter(
          (v, i, a) => a.indexOf(v) === i
        );
      } else {
        //attach to value array while filtering out invalid values
        value = [...(value ? value : []), token[used_value_key]].filter((v) => {
          return normalisedOptions.filter((nv) => nv[used_value_key] === v)
            .length;
        });
      }

      searchText = ""; // reset search string on selection

      //clear dropdown results in asyncMode
      if (asyncMode) {
        clearDropDownResults();
      }

      if (value && value.length && value.length === max) {
        input && input.blur();
        setOptionsVisible(false);
      }
      /**
       * Triggered when an item is added from dropdown list
       */
      fire("add", { token });

      fire("change", { token, type: `add` });
    }
  }

  function remove(token) {
    if (readonly || disabled || single) return;
    value = Array.isArray(value)
      ? value.filter((item) => !matchesValue(item, token))
      : value;

    //clear dropdown results in asyncMode
    if (asyncMode) {
      clearDropDownResults();
    }
    /**
     * Triggered when an item is removed from selected Items
     */
    fire("remove", { token });
    /**
     * Triggered when the value changes
     */
    fire("change", { token, type: `remove` });
  }

  function blurEvent() {
    /**
     * Triggered when the input loses focus
     */
    fire("blur");
  }

  function setOptionsVisible(show) {
    // nothing to do if visibility is already as intended
    if (readonly || disabled || show === showOptions) return;
    showOptions = show;
    if (show) {
      input && input.focus();
    } else {
      searchText = "";
      searching = false;
    }
    POPPER && POPPER.update();
  }

  function handleKeydown(event) {
    if (event.key === `Escape`) {
      searchText = "";
    } else {
      setOptionsVisible(true);
    }

    if (event.key === `Enter`) {
      event.preventDefault();
      if (activeOption) {
        handleOptionMouseDown(activeOption);
      } else {
        // no active option means the options are closed in which case enter means open
        setOptionsVisible(true);
      }
    } else if ([`ArrowDown`, `ArrowUp`].includes(event.key)) {
      showOptions && event.preventDefault();
      const increment = event.key === `ArrowUp` ? -1 : 1;
      const newActiveIdx = filteredOptions.indexOf(activeOption) + increment;

      if (newActiveIdx < 0) {
        activeOption = filteredOptions[filteredOptions.length - 1];
      } else {
        if (newActiveIdx === filteredOptions.length)
          activeOption = filteredOptions[0];
        else activeOption = filteredOptions[newActiveIdx];
      }

      tick().then(() => {
        if (dropdown) {
          mouseTracker.preventSelect = true;
          let activeElem = dropdown.querySelector(".active");
          scrollIntoActiveElement(dropdown, activeElem);
        }
      });
    } else if (event.key === `Backspace`) {
      if (single && hasValue) {
        //for a single select
        //if a value is already selected, backspace will clear the value
        value = null;
        searchText = "";
      } else if (!single && searchText.length === 0) {
        //for a multi select
        // only remove selected tags on backspace if there are any and no searchText characters remain
        if (value && value.length > 0) {
          value = value.slice(0, value.length - 1);
        }
      } else {
        searching = true;
      }
    } else {
      //for a single select
      //if a value is already selected,
      //ignore keys other than navigation, enter and backspace
      if (single) {
        if (hasValue) {
          event.preventDefault();
        } else {
          searching = true;
        }
      } else {
        searching = true;
      }
    }
  }

  function handleOptionMouseDown(option) {
    if (single) {
      add(option);
    } else {
      isSelected(option) ? remove(option) : add(option);
    }
  }

  const removeAll = () => {
    fire("remove", { token: value });
    fire("change", { token: value, type: `remove` });
    value = single ? null : [];
    searchText = "";
    if (asyncMode) {
      clearDropDownResults();
    }
  };

  const matchesValue = (_value, _option) => {
    if (_value === null || typeof _value == "undefined") {
      return false;
    }
    let value =
      typeof _value === "object" && `${used_value_key}` in _value
        ? _value[used_value_key]
        : _value;
    return `${value}` === `${_option[used_value_key]}`;
  };

  const match = (needle, haystack) => {
    return haystack.toLowerCase().indexOf(needle) > -1;
  };

  const normaliseArraysToObjects = (arr) => {
    return arr.slice().map((item) => {
      if (typeof item === "object") {
        return item;
      }
      let __obj = {};
      __obj[used_search_key] = item;
      __obj[used_value_key] = item;
      return __obj;
    });
  };

  const clearDropDownResults = () => {
    tick().then(() => {
      options = [];
      searching = false;
    });
  };

  const fuzzySearch = debounce(searchInFuzzyMode, 200, false);

  function searchInFuzzyMode(filter, options) {
    if (!filter) {
      filteredOptions = options;
      return;
    }
    if (options.length) {
      let result = fuzzysearch(filter, options);
      filteredOptions = result;
    }
  }

  function strictSearch(filter, options) {
    return options.filter((item) => {
      // filter out items that don't match `filter`
      if (typeof item === "object") {
        if (used_search_key) {
          return (
            typeof item[used_search_key] === "string" &&
            match(filter, item[used_search_key])
          );
        } else {
          for (var key in item) {
            return typeof item[key] === "string" && match(filter, item[key]);
          }
        }
      } else {
        return match(filter, item);
      }
    });
  }
</script>
