<!--
  @component


  @param {string} [value=""] - Value of the Input

This property can be bound to, to fetch the current value, Default: `""`
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
  @param {''|'small'|'medium'|'large'} [size=""] - Size of the input, Default: `""`
  @param {''|'primary'|'success'|'warning'|'info'|'danger'|'dark'|'light'} [color=""] - Color of the input, Default: `""`
  @param {string} [style=""] - Inline CSS for input container, Default: `""`
  @param {boolean} [readonly=false] - Marks component as read-only, Default: `false`
  @param {boolean} [disabled=false] - Disables the component, Default: `false`
  @param {string} [no_options_msg="No matching options"] - Message to display when no matching options are found, Default: `"No matching options"`
  @param {string} [remove_btn_tip="Remove"] - Hover text for Remove item button, Default: `"Remove"`
  @param {string} [remove_all_tip="Remove all"] - Hover text for Remove All button, Default: `"Remove all"`
  @param {string} [class=""] - CSS classes for input container, Default: `""`

  ### Events
  - `add` - Triggered when an item is added from dropdown list
  - `change` - Triggered when value changes
  - `remove` - Triggered when an item is removed from selected options
  - `blur` - Triggered when input looses focus

  ### Slots
  - `<slot name="default" {search_key} {option} />` - Slot containing text for each selectable item

Default value: `<span>{option[search_key] || option}</span>`

-->
<div
  bind:this={el}
  class="
    searchableselect input
    {disabled ? 'is-disabled' : ''}
    {readonly ? 'is-readonly' : ''}
    is-{size} is-{color} {klass}
  "
  class:readonly
  class:single
  {style}
  on:click|stopPropagation={() => setOptionsVisible(true)}>
  <ul class="tokens tags">
    {#if single && selectedOptions && selectedOptions.length && selectedOptions[0]}
      <span
        class="single-value"
        on:click|self|stopPropagation={() => setOptionsVisible(true)}>
        {selectedOptions[0][used_search_key]}
      </span>
    {:else if selectedOptions && selectedOptions.length > 0}
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
  {#if !readonly && !disabled}
    <button
      type="button"
      class="remove-all delete is-small"
      data-tooltip={remove_all_tip}
      on:click|stopPropagation={removeAll}
      style={value.length === 0 ? `display: none;` : ``} />
  {/if}

  <ul
    bind:this={dropdown}
    class="options {single ? '' : 'is-multi'}"
    class:hidden={!showOptions}>
    {#each filteredOptions as option}
      <li
        on:mousedown|preventDefault|stopPropagation={() =>
          isSelected(option) ? remove(option) : add(option)}
        on:mouseenter|preventDefault|stopPropagation={() => {
          activeOption = option;
        }}
        class:selected={isSelected(option)}
        class:active={activeOption === option}>
        <!--
          Slot containing text for each selectable item

          Default value: `<span>{option[search_key] || option}</span>`
        --><slot
          search_key={used_search_key}
          {option}>{option[used_search_key] || option}</slot>
      </li>
    {:else}
      <li class="no-options">{no_options_msg}</li>
    {/each}
  </ul>
</div>

<script>
  //TODO: optimise isSelected function
  //TODO: input behaviour when single selected item is clicked
  //TODO: fix width of dorpdown for narrow controls
  //TODO: fix width of dropdown for long options

  import { createEventDispatcher, onMount } from "svelte";
  import { createPopper } from "@popperjs/core";

  const sameWidthPopperModifier = {
    name: "sameWidth",
    enabled: true,
    phase: "beforeWrite",
    requires: ["computeStyles"],
    fn: ({ state }) => {
      state.styles.popper.width = `${state.rects.reference.width}px`;
    },
    effect: ({ state }) => {
      state.elements.popper.style.width = `${state.elements.reference.offsetWidth}px`;
    },
  };

  /**
   * Value of the Input
   *
   * This property can be bound to, to fetch the current value
   */
  export let value = "";
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
   * Hover text for Remove item button
   * */
  export let remove_btn_tip = "Remove";
  /**
   * Hover text for Remove All button
   */
  export let remove_all_tip = "Remove all";

  /**
   * CSS classes for input container
   */
  let klass = "";
  export { klass as class };

  if (!options || !options.length) console.error(`Missing options`);

  if (max !== null && max < 0) {
    throw new TypeError(`max must be null or positive integer, got ${max}`);
  }

  const fire = createEventDispatcher();

  let el, //whole wrapping element
    dropdown, //dropdown ul
    input, //the textbox to type in
    POPPER,
    activeOption = "",
    searchText = "",
    showOptions = false,
    filteredOptions = [], //list of options filtered by search query
    normalisedOptions = [], //list of options normalised
    selectedOptions = []; //list of options that are selected

  $: single = max === 1;
  $: _placeholder = single
    ? value
      ? ""
      : placeholder
    : value.length
    ? ""
    : placeholder;

  //ensure search_key and value_key are no empty strings
  $: used_search_key = search_key && search_key != "" ? search_key : "name";
  $: used_value_key = value_key && value_key != "" ? value_key : "id";

  $: options, normaliseOptions();
  $: normalisedOptions,
    searchText,
    used_search_key,
    used_value_key,
    updateFilteredOptions();

  $: value, single, fillSelectedOptions();

  $: if (
    (activeOption && !filteredOptions.includes(activeOption)) ||
    (!activeOption && searchText)
  )
    activeOption = filteredOptions[0];

  $: isSelected = (option) => {
    if (single) return matchesValue(value, option);
    if (!(value && value.length > 0) || value == "") return false;
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
    let filter = searchText.toLowerCase();

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

  function fillSelectedOptions() {
    if (single) {
      selectedOptions = normalisedOptions.filter(
        (v) => v[used_value_key] == value
      );
    } else {
      selectedOptions = normalisedOptions.filter((v) =>
        value.some((vl) => v[used_value_key] == vl)
      );
    }
  }

  onMount(() => {
    POPPER = createPopper(el, dropdown, {
      strategy: "fixed",
      modifiers: [
        sameWidthPopperModifier,
        {
          name: "offset",
          options: {
            offset: [0, 0],
          },
        },
      ],
    });

    //normalize value for single versus multiselect
    if (!value) value = single ? "" : [];

    return () => {
      POPPER.destroy();
    };
  });

  function add(token) {
    if (
      !readonly &&
      !disabled &&
      !isSelected(token) &&
      // (... || single) because in single mode, we always replace current token with new selection
      (max === null || value.length < max || single)
    ) {
      searchText = ""; // reset search string on selection
      if (single) {
        value = token[used_value_key];
      } else {
        //attach to value array while filtering out invalid values
        value = [...value, token[used_value_key]].filter((v) => {
          return normalisedOptions.filter((nv) => nv[used_value_key] == v)
            .length;
        });
      }

      if ((Array.isArray(value) && value.length === max) || single) {
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
    if (readonly || disabled || typeof value === `string`) return;
    value = value.filter
      ? value.filter((item) => !matchesValue(item, token))
      : value;
    /**
     * Triggered when an item is removed from selected options
     */
    fire("remove", { token });
    /**
     * Triggered when value changes
     */
    fire("change", { token, type: `remove` });
  }

  function blurEvent() {
    /**
     * Triggered when input looses focus
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
    POPPER.update();
  }

  function handleKeydown(event) {
    if (event.key === `Escape`) {
      setOptionsVisible(false);
      searchText = ``;
    } else if (event.key === `Enter`) {
      if (activeOption) {
        isSelected(activeOption) ? remove(activeOption) : add(activeOption);
        searchText = ``;
      } // no active option means the options are closed in which case enter means open
      else setOptionsVisible(true);
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
      // only remove selected tags on backspace if if there are any and no searchText characters remain
      if (
        (value[used_search_key] || value).length > 0 &&
        searchText.length === 0
      ) {
        value = (value[used_search_key] || value).slice(
          0,
          (value[used_search_key] || value).length - 1
        );
      }
    }
  }

  const removeAll = () => {
    fire("remove", { token: value });
    fire("change", { token: value, type: `remove` });
    value = single ? `` : [];
    searchText = ``;
  };

  const matchesValue = (_value, _option) =>
    (_value[used_value_key] || _value) === (_option[used_value_key] || _option);
</script>
