<!--
  @component


  @param {array} [value=[]] - Value of the Input

This property can be bound to, to fetch the current value, Default: `[]`
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
  @param {object} [hotFilter=null] - Async function to filter the options from external source, Default: `null`
  @param {boolean} [options_loading=false] - Options loading state, Default: `false`
  @param {''|'small'|'medium'|'large'} [size=""] - Size of the input, Default: `""`
  @param {''|'primary'|'success'|'warning'|'info'|'danger'|'dark'|'light'} [color=""] - Color of the input, Default: `""`
  @param {string} [style=""] - Inline CSS for input container, Default: `""`
  @param {boolean} [readonly=false] - Marks component as read-only, Default: `false`
  @param {boolean} [disabled=false] - Disables the component, Default: `false`
  @param {string} [selected_icon="check"] - Icon used to mark selected items in dropdown list, Default: `"check"`
  @param {boolean} [summary_mode=false] - Shows only the number of items selected, instead of listing all the selected items in the input., Default: `false`
  @param {string} [no_options_msg="No matching options"] - Message to display when no matching options are found, Default: `"No matching options"`
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
                role="button"
                type="button"
                class="delete is-small"
                data-tooltip="{remove_btn_tip} {tag[used_search_key]}" />
            {/if}
          </li>
        {/each}
      {/if}
    {/if}
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
  {#if hotFilter && options_loading}
    <button
      role="button"
      type="button"
      style="border: none;"
      class="button is-paddingless delete is-small is-loading" />
  {:else if !readonly && !disabled}
    <button
      role="button"
      type="button"
      class="remove-all delete is-small"
      data-tooltip={remove_all_tip}
      on:click|stopPropagation={removeAll}
      style={shouldShowClearAll ? "" : "display: none;"} />
  {/if}
  {#if rootContainer}
    <div class="kws-searchableselect" use:portal={dropdown_portal}>
      <ul
        bind:this={dropdown}
        class="options {single ? 'is-single' : 'is-multi'}"
        class:hidden={!showOptions}>
        {#each filteredOptions as option}
          <li
            on:mousedown|preventDefault|stopPropagation={() =>
              handleOptionMouseDown(option)}
            on:mouseenter|preventDefault|stopPropagation={() => {
              activeOption = option;
            }}
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
  import { Icon, portal } from "@kws3/ui";
  import { createEventDispatcher, onMount } from "svelte";
  import { createPopper } from "@popperjs/core";

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
   * Async function to filter the options from external source
   */
  export let hotFilter = null;
  /**
   * Options loading state
   */
  export let options_loading = false;

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

  if (!options || !options.length) console.error(`Missing options`);

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
    filteredOptions = [], //list of options filtered by search query
    normalisedOptions = [], //list of options normalised
    selectedOptions = [], //list of options that are selected
    typingTimeout;

  $: single = max === 1;
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

  $: if (
    (activeOption && !filteredOptions.includes(activeOption)) ||
    (!activeOption && searchText)
  )
    activeOption = filteredOptions[0];

  //TODO: optimise isSelected function
  $: isSelected = (option) => {
    if (single) return matchesValue(value, option);
    if (!(value && value.length > 0) || value === "") return false;
    // nothing is selected if `value` is the empty array or string
    else return value.some((v) => matchesValue(v, option));
  };

  //convert arrays of strings into normalised arrays of objects
  function normaliseOptions() {
    let _items = options || [];
    if (!_items || !(_items instanceof Array)) {
      normalisedOptions = [];
      return;
    }

    normalisedOptions = _items.slice().map((item) => {
      if (typeof item === "object") {
        return item;
      }
      let __obj = {};
      __obj[used_search_key] = item;
      __obj[used_value_key] = item;
      return __obj;
    });
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
    if (typeof hotFilter === "function") {
      triggerHotFilter(filter);
    } else {
      filteredOptions = normalisedOptions.slice().filter((item) => {
        // filter out items that don't match `filter`
        if (typeof item === "object") {
          if (used_search_key) {
            if (
              typeof item[used_search_key] === "string" &&
              item[used_search_key].toLowerCase().indexOf(filter) > -1
            )
              return true;
          } else {
            for (var key in item) {
              if (
                typeof item[key] === "string" &&
                item[key].toLowerCase().indexOf(filter) > -1
              )
                return true;
            }
          }
        } else {
          return item.toLowerCase().indexOf(filter) > -1;
        }
      });
    }
  }

  function fillSelectedOptions() {
    if (single) {
      selectedOptions = normalisedOptions.filter(
        (v) => `${v[used_value_key]}` === `${value}`
      );
      setSingleVisibleValue();
    } else {
      selectedOptions = normalisedOptions
        .filter(
          (v) => value && value.some((vl) => `${v[used_value_key]}` === `${vl}`)
        )
        .sort(
          (a, b) =>
            value.indexOf(a[used_value_key]) - value.indexOf(b[used_value_key])
        );
    }

    POPPER && POPPER.update();
  }

  function triggerHotFilter(filter) {
    clearTimeout(typingTimeout);
    typingTimeout = setTimeout(async () => {
      let options = await hotFilter(filter);
      filteredOptions = options;
    }, 500);
  }

  onMount(() => {
    POPPER = createPopper(el, dropdown, {
      strategy: "fixed",
      placement: "bottom-start",
      modifiers: [sameWidthPopperModifier],
    });

    //normalize value for single versus multiselect
    if (value === null || typeof value == "undefined")
      value = single ? null : [];

    setSingleVisibleValue();

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
      if (isAlreadySelected) {
        setSingleVisibleValue();
      } else {
        value = token[used_value_key];
        input && input.blur();
        setOptionsVisible(false);
        fire("change", { token, type: `add` });
      }
    }

    if (!isAlreadySelected && !single && (max === null || value.length < max)) {
      //attach to value array while filtering out invalid values
      value = [...value, token[used_value_key]].filter((v) => {
        return normalisedOptions.filter((nv) => nv[used_value_key] === v)
          .length;
      });
      searchText = ""; // reset search string on selection

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
    value = value.filter
      ? value.filter((item) => !matchesValue(item, token))
      : value;
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
    }
    POPPER && POPPER.update();
  }

  function setSingleVisibleValue() {
    if (single && hasValue) {
      searchText =
        selectedOptions && selectedOptions[0]
          ? selectedOptions[0][used_search_key]
          : "";
      searching = false;
    }
  }

  function handleKeydown(event) {
    if (event.key === `Escape`) {
      if (!single) {
        searchText = "";
      }
    } else {
      setOptionsVisible(true);
    }

    if (event.key === `Enter`) {
      event.preventDefault();
      if (activeOption) {
        handleOptionMouseDown(activeOption);
        if (!single) {
          searchText = "";
        }
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
    } else if (event.key === `Backspace`) {
      // only remove selected tags on backspace if there are any and no searchText characters remain
      if (searchText.length === 0) {
        if (single) {
          if (value) {
            value = null;
          }
        } else {
          if (value && value.length > 0) {
            value = value.slice(0, value.length - 1);
          }
        }
      } else {
        if (single) {
          searching = true;
        }
      }
    } else {
      if (single) {
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
  };

  const matchesValue = (_value, _option) => {
    if (_value === null || typeof _value == "undefined") {
      return false;
    }
    return (
      `${_value[used_value_key] || _value}` === `${_option[used_value_key]}`
    );
  };
</script>
