<!-- z-index: 2 when showOptions is ture ensures the ul.tokens of one <MultiSelect /> display above those of another following shortly after it -->
<div
  bind:this={el}
  class="searchableselect input is-shadowless {outerDivClass}"
  class:readonly
  class:single
  style={showOptions ? `z-index: 2;` : ``}
  on:click|stopPropagation={() => setOptionsVisible(true)}>
  <ul class="tokens tags {ulTokensClass}">
    {#if single}
      <span on:click|self|stopPropagation={() => setOptionsVisible(true)}>
        {value[searchKey] || value}
      </span>
    {:else if value && value.length > 0}
      {#each value as tag}
        <li
          class="tag is-primary is-light {liTokenClass}"
          on:click|self|stopPropagation={() => setOptionsVisible(true)}>
          {tag[searchKey] || tag}
          {#if !readonly}
            <button
              on:click|self|stopPropagation={() => remove(tag)}
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
      on:click|self|stopPropagation={() => setOptionsVisible(true)}
      on:keydown={handleKeydown}
      on:focus={() => setOptionsVisible(true)}
      on:blur={() => fire(`blur`)}
      on:blur={() => setOptionsVisible(false)}
      placeholder={value.length ? `` : placeholder} />
  </ul>
  {#if !readonly}
    <button
      type="button"
      class="remove-all delete is-small"
      title={removeAllTitle}
      on:click|stopPropagation={removeAll}
      style={value.length === 0 ? `display: none;` : ``} />
  {/if}

  <ul
    bind:this={dropdown}
    class="options {ulOptionsClass}"
    class:hidden={!showOptions}>
    {#each filteredOptions as option}
      <li
        on:mousedown|preventDefault|stopPropagation={() =>
          isSelected(option) ? remove(option) : add(option)}
        class:selected={isSelected(option)}
        class:active={activeOption === option}
        class={liOptionClass}>
        {option[searchKey] || option}
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

  export let searchKey = "name";
  export let valueKey = "id";

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

  const fire = createEventDispatcher();

  let activeOption = "",
    searchText = "",
    showOptions = false,
    filteredOptions = [];

  $: data, searchText, searchKey, valueKey, prepareItems();

  $: if (
    (activeOption && !filteredOptions.includes(activeOption)) ||
    (!activeOption && searchText)
  )
    activeOption = filteredOptions[0];

  $: isSelected = (option) => {
    if (single) return matchAlter(value, option);
    if (!(value && value.length > 0)) return false;
    // nothing is selected if `value` is the empty array or string
    else return value.some((v) => matchAlter(v, option));
  };

  function prepareItems() {
    let filter = searchText.toLowerCase(),
      _items = data || [];

    if (!_items || !(_items instanceof Array)) {
      filteredOptions = null;
      return;
    }
    filteredOptions = _items.slice().filter((item) => {
      // filter out items that don't match `filter`
      if (typeof item === "object") {
        if (searchKey) {
          if (
            typeof item[searchKey] === "string" &&
            item[searchKey].toLowerCase().indexOf(filter) > -1
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
      !isSelected(token) &&
      // (... || single) because in single mode, we always replace current token with new selection
      (maxSelect === null || value.length < maxSelect || single)
    ) {
      searchText = ``; // reset search string on selection
      value = single ? token : [...value, token];
      if ((Array.isArray(value) && value.length === maxSelect) || single) {
        input && input.blur();
        setOptionsVisible(false);
      }
      fire(`add`, { token });
      fire(`change`, { token, type: `add` });
    }
  }

  function remove(token) {
    if (readonly || typeof value === `string`) return;
    value = value.filter
      ? value.filter((item) => !matchAlter(item, token))
      : value;
    fire(`remove`, { token });
    fire(`change`, { token, type: `remove` });
  }

  function setOptionsVisible(show) {
    // nothing to do if visibility is already as intended
    if (readonly || show === showOptions) return;
    showOptions = show;
    if (show) {
      input && input.focus();
      updateBounds();
    }
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
      if ((value[searchKey] || value).length > 0 && searchText.length === 0) {
        value = (value[searchKey] || value).slice(
          0,
          (value[searchKey] || value).length - 1
        );
      }
    }
  }

  const removeAll = () => {
    fire(`remove`, { token: value });
    fire(`change`, { token: value, type: `remove` });
    value = single ? `` : [];
    searchText = ``;
  };

  const matchAlter = (_value, _option) =>
    (_value[searchKey] || _value) === (_option[searchKey] || _option);
</script>
