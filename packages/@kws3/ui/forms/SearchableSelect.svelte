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
    {#if single}
      <span
        class="single-value"
        on:click|self|stopPropagation={() => setOptionsVisible(true)}>
        {value[search_key] || value}
      </span>
    {:else if value && value.length > 0}
      {#each value as tag}
        <li
          class="tag is-{size} is-{color || 'primary'} is-light"
          on:click|self|stopPropagation={() => setOptionsVisible(true)}>
          {tag[search_key] || tag}
          {#if !readonly && !disabled}
            <button
              on:click|self|stopPropagation={() => remove(tag)}
              type="button"
              class="delete is-small"
              data-tooltip="{remove_btn_tip} {tag[search_key] || tag}" />
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
      on:blur={() => fire("blur")}
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

  <ul bind:this={dropdown} class="options" class:hidden={!showOptions}>
    {#each filteredOptions as option}
      <li
        on:mousedown|preventDefault|stopPropagation={() =>
          isSelected(option) ? remove(option) : add(option)}
        class:selected={isSelected(option)}
        class:active={activeOption === option}>
        {option[search_key] || option}
      </li>
    {:else}
      <li class="no-options">{no_options_msg}</li>
    {/each}
  </ul>
</div>

<script>
  //TODO: make clearAll button optional
  //TODO: abstract out Multiselect to separate component
  //TODO: data bug

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
   * `null` means unlimited
   */
  export let max = null;
  /**
   * Placeholder text for the input
   */
  export let placeholder = "";
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
   * Hover text for Remove button
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

  $: single = max === 1;
  $: _placeholder = single
    ? value
      ? ""
      : placeholder
    : value.length
    ? ""
    : placeholder;

  if (!value) value = single ? `` : [];

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
    filteredOptions = [];

  $: options, searchText, search_key, value_key, prepareItems();

  $: if (
    (activeOption && !filteredOptions.includes(activeOption)) ||
    (!activeOption && searchText)
  )
    activeOption = filteredOptions[0];

  $: isSelected = (option) => {
    if (single) return matchAlter(value, option);
    if (!(value && value.length > 0) || value == "") return false;
    // nothing is selected if `value` is the empty array or string
    else return value.some((v) => matchAlter(v, option));
  };

  function prepareItems() {
    let filter = searchText.toLowerCase(),
      _items = options || [];

    if (!_items || !(_items instanceof Array)) {
      filteredOptions = null;
      return;
    }
    filteredOptions = _items.slice().filter((item) => {
      // filter out items that don't match `filter`
      if (typeof item === "object") {
        if (search_key) {
          if (
            typeof item[search_key] === "string" &&
            item[search_key].toLowerCase().indexOf(filter) > -1
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

  onMount(() => {
    POPPER = createPopper(el, dropdown, {
      strategy: "fixed",
      modifiers: [
        sameWidthPopperModifier,
        {
          name: "offset",
          options: {
            offset: [0, 5],
          },
        },
      ],
    });
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
      searchText = ``; // reset search string on selection
      value = single ? token : [...value, token];
      if ((Array.isArray(value) && value.length === max) || single) {
        input && input.blur();
        setOptionsVisible(false);
      }
      fire("add", { token });
      fire("change", { token, type: `add` });
    }
  }

  function remove(token) {
    if (readonly || disabled || typeof value === `string`) return;
    value = value.filter
      ? value.filter((item) => !matchAlter(item, token))
      : value;
    fire("remove", { token });
    fire("change", { token, type: `remove` });
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
      if ((value[search_key] || value).length > 0 && searchText.length === 0) {
        value = (value[search_key] || value).slice(
          0,
          (value[search_key] || value).length - 1
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

  const matchAlter = (_value, _option) =>
    (_value[search_key] || _value) === (_option[search_key] || _option);
</script>
