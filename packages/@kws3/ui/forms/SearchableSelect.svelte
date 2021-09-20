<!-- z-index: 2 when showOptions is ture ensures the ul.tokens of one <MultiSelect /> display above those of another following shortly after it -->
<div
  bind:this={el}
  class="searchableselect input is-shadowless {outerDivClass}"
  class:readonly
  class:single
  style={showOptions ? `z-index: 2;` : ``}
  on:mouseup|stopPropagation={() => setOptionsVisible(true)}>
  <ul class="tokens tags {ulTokensClass}">
    {#if single}
      <span on:mouseup|self|stopPropagation={() => setOptionsVisible(true)}>
        {value}
      </span>
    {:else if value && value.length > 0}
      {#each value as tag}
        <li
          class="tag {liTokenClass}"
          on:mouseup|self|stopPropagation={() => setOptionsVisible(true)}>
          {tag}
          {#if !readonly}
            <button
              on:mouseup|stopPropagation={() => remove(tag)}
              type="button"
              class="delete is-small"
              title="{removeBtnTitle} {tag}" />
          {/if}
        </li>
      {/each}
    {/if}
    <input
      bind:this={input}
      autocomplete="off"
      bind:value={searchText}
      on:mouseup|self|stopPropagation={() => setOptionsVisible(true)}
      on:keydown={handleKeydown}
      on:focus={() => setOptionsVisible(true)}
      on:blur={() => dispatch(`blur`)}
      on:blur={() => setOptionsVisible(false)}
      placeholder={value.length ? `` : placeholder} />
  </ul>
  {#if !readonly}
    <button
      type="button"
      class="remove-all delete is-small"
      title={removeAllTitle}
      on:mouseup|stopPropagation={removeAll}
      style={value.length === 0 ? `display: none;` : ``} />
  {/if}

  <ul
    bind:this={dropdown}
    class="options {ulOptionsClass}"
    class:hidden={!showOptions}>
    {#each filteredOptions as option}
      <li
        on:mouseup|preventDefault|stopPropagation
        on:mousedown|preventDefault|stopPropagation={() =>
          isSelected(option) ? remove(option) : add(option)}
        class:selected={isSelected(option)}
        class:active={activeOption === option}
        class={liOptionClass}>
        {option}
      </li>
    {:else}
      {noOptionsMsg}
    {/each}
  </ul>
</div>

<script>
  import { createEventDispatcher, onMount } from "svelte";

  export let value = "";
  export let maxSelect = 1; // null means any number of options are selectable
  export let readonly = false;
  export let placeholder = ``;
  export let data = [];
  export let input = null;
  export let noOptionsMsg = `No matching options`;

  export let outerDivClass = ``;
  export let ulTokensClass = ``;
  export let liTokenClass = ``;
  export let ulOptionsClass = ``;
  export let liOptionClass = ``;

  export let removeBtnTitle = `Remove`;
  export let removeAllTitle = `Remove all`;

  let el, //whole wrapping element
    dropdown, //dropdown ul
    dropdownId = "searchableselect-dropdown-container";

  if (maxSelect !== null && maxSelect < 0) {
    throw new TypeError(
      `maxSelect must be null or positive integer, got ${maxSelect}`
    );
  }
  $: single = maxSelect === 1;
  if (!value) value = single ? `` : [];

  if (!data || !data.length) console.error(`MultiSelect missing options`);

  const dispatch = createEventDispatcher();
  let activeOption = "",
    searchText = "";
  let showOptions = false;

  $: filteredOptions = searchText
    ? data.filter((option) =>
        option.toLowerCase().includes(searchText.toLowerCase())
      )
    : data;
  $: if (
    (activeOption && !filteredOptions.includes(activeOption)) ||
    (!activeOption && searchText)
  )
    activeOption = filteredOptions[0];

  $: isSelected = (option) => {
    if (!(value && value.length > 0)) return false; // nothing is selected if `value` is the empty array or string
    if (single) return value === option;
    else return value.includes(option);
  };

  onMount(init);

  function init() {
    let container = document.getElementById(dropdownId);
    if (!container) {
      container = document.createElement("div");
      container.id = dropdownId;
      container.className = "searchableselect-container";
      document.body.appendChild(container);
    }
    container.appendChild(dropdown);
    updateBounds();

    return () => {
      container.removeChild(dropdown);
    };
  }

  function add(token) {
    if (
      !readonly &&
      !value.includes(token) &&
      // (... || single) because in single mode, we always replace current token with new selection
      (maxSelect === null || value.length < maxSelect || single)
    ) {
      searchText = ``; // reset search string on selection
      value = single ? token : [token, ...value];
      if (
        (Array.isArray(value) && value.length === maxSelect) ||
        typeof value === `string`
      ) {
        setOptionsVisible(false);
        input && input.blur();
      }
      dispatch(`add`, { token });
      dispatch(`change`, { token, type: `add` });
    }
  }

  function remove(token) {
    if (readonly || typeof value === `string`) return;
    value = value.filter((item) => item !== token);
    dispatch(`remove`, { token });
    dispatch(`change`, { token, type: `remove` });
  }

  function setOptionsVisible(show) {
    // nothing to do if visibility is already as intended
    if (readonly || show === showOptions) return;
    showOptions = show;
    if (show) input && input.focus();
    updateBounds();
  }

  function updateBounds() {
    let bounds = el.getBoundingClientRect();
    dropdown.style.width = bounds.width + "px";

    dropdown.style.left = bounds.left + "px";
    let top = bounds.bottom,
      inht = window.innerHeight;
    if (top + dropdown.offsetHeight > inht) {
      //not enough space to render drop down below input,
      //render it above
      dropdown.style.bottom = inht - (bounds.top - 3) + "px";
      dropdown.style.top = "auto";
    } else {
      dropdown.style.top = top + "px";
      dropdown.style.bottom = "auto";
    }
  }

  function handleKeydown(event) {
    if (event.key === `Escape`) {
      setOptionsVisible(false);
      searchText = ``;
    } else if (event.key === `Enter`) {
      if (activeOption) {
        value.includes(activeOption) ? remove(activeOption) : add(activeOption);
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
      if (value.length > 0 && searchText.length === 0) {
        value = value.slice(0, value.length - 1);
      }
    }
  }

  const removeAll = () => {
    dispatch(`remove`, { token: value });
    dispatch(`change`, { token: value, type: `remove` });
    value = single ? `` : [];
    searchText = ``;
  };
</script>
