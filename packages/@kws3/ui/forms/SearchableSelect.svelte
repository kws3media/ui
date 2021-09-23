<!--
  @component


  @param {string} [value=""] - Bind value, Default: `""`
  @param {string} [filter=""] - Filter, Default: `""`
  @param {string} [style=""] - Inline CSS for the displayed text, Default: `""`
  @param {string} [dd_class=""] - CSS classes for the dropdown, Default: `""`
  @param {string} [cy=""] - data-cy attribute for cypress, Default: `""`
  @param {object} [searchKey=null] - Key to be searched in each data object, Default: `null`
  @param {object} [searchValue=null] - Value to be searched in each data object, Default: `null`
  @param {array} [data=[]] - All searchable options as objects in an array, Default: `[]`
  @param {boolean} [open=false] - Determines whether the dropdown is currently open, Default: `false`
  @param {boolean} [disabled=false] - Disables the component, Default: `false`
  @param {string} [placeholder=""] - Placeholder string, Default: `""`
  @param {string} [class=""] - CSS classes for the component, Default: `""`

-->
<svelte:window on:resize={close} />
<div
  bind:this={searchableselect}
  class="searchableselect input is-shadowless {disabled
    ? ' is-disabled '
    : ' '} {klass}"
  on:click={openDropdown}
  {style}
  data-cy="select-container">
  <span class="name-wrapper">
    <span class="name"> {_name || placeholder} </span>
  </span>

  <input
    type="text"
    use:keyboardEvents
    bind:value={filter}
    on:focus={openDropdown}
    on:enter={onEnter}
    on:uparrow={onUparrow}
    on:downarrow={onDownarrow}
    on:escape={onEscape} />

  <ul
    bind:this={dropdown}
    class="dropdown {open ? ' open ' : ' '} {dd_class}"
    data-cy={cy}>
    <li
      class={selected && highlighted < 0 ? "selected" : ""}
      on:click={() => select(null)}>
      {placeholder}
    </li>
    {#if items && items.length}
      {#each items as item, i}
        <li
          class="{highlighted == i ? ' selecting ' : ' '} {selected == i
            ? 'selected '
            : ' '}"
          on:click={() => select(item, i)}>
          {item[searchKey]}
        </li>
      {/each}
    {/if}
  </ul>
</div>

<script>
  import { onMount, onDestroy, tick } from "svelte";
  import { keyboardEvents } from "../utils/keyboard-events";

  let dropdownId = "searchableselect-dropdown-container";

  let searchableselect, el, dropdown, _dropdown, input_el, selected_el;

  /**
   * Bind value
   */
  export let value = "",
    /**
     * Filter
     */
    filter = "",
    /**
     * Inline CSS for the displayed text
     */
    style = "",
    /**
     * CSS classes for the dropdown
     */
    dd_class = "",
    /**
     * data-cy attribute for cypress
     */
    cy = "",
    /**
     * Key to be searched in each data object
     */
    searchKey = null,
    /**
     * Value to be searched in each data object
     */
    searchValue = null,
    /**
     * All searchable options as objects in an array
     */
    data = [],
    /**
     * Determines whether the dropdown is currently open
     */
    open = false,
    /**
     * Disables the component
     */
    disabled = false,
    /**
     * Placeholder string
     */
    placeholder = "";

  /**
   * CSS classes for the component
   */
  let klass = "";
  export { klass as class };

  let _name = "",
    scrollTarget = null,
    highlighted = -1, // for dropdown
    selected = -1, // for selected items
    items;

  function prepareItems(_data, _filter) {
    _filter = _filter.toLowerCase();
    let _items = _data || [];

    if (!_items || !(_items instanceof Array)) return null;

    items = _items.slice().filter(function (item) {
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

    console.log(items);
  }

  let clickHandler = function (e) {
    e.stopImmediatePropagation();
    let el = searchableselect;
    if (!el) {
      return;
    }
    let dropdown = el.querySelector(".dropdown");

    let target = e.target;

    if (el.contains(target) || target === dropdown) return;

    open = false;
  };

  let scrollHandler = function (e) {
    e.stopImmediatePropagation();
    e.stopPropagation();

    console.log(e);

    if (!scrollTarget) {
      scrollTarget = window;
    } else if (typeof scrollTarget === "string") {
      scrollTarget = document.getElementById(scrollTarget);
    }
    if (open && e.target == scrollTarget) {
      close();
    }
  };

  function onUparrow(e) {
    e.stopPropagation();
    e.stopImmediatePropagation();
    e.preventDefault();

    selected = -1;
    if (highlighted <= -1) return;

    // increase highlighted until we find a non group
    do {
      highlighted--;
    } while (highlighted == -1);

    highlighted = Math.max(-1, highlighted);

    updateBounds();
  }

  function onDownarrow(e) {
    e.stopPropagation();
    e.stopImmediatePropagation();
    e.preventDefault();

    selected = -1;

    if (highlighted >= items.length - 1) return;

    if (!open) {
      openDropdown();
    }

    do {
      highlighted++;
    } while (highlighted == items.length);

    highlighted = Math.min(items.length, highlighted);

    updateBounds();
  }

  function onEnter(e) {
    e.stopPropagation();
    e.stopImmediatePropagation();
    e.preventDefault();

    if (highlighted !== -1) {
      if (open) {
        select(items[highlighted], highlighted);
      }
    }

    if (highlighted < 0) {
      select(null);
    }
  }

  function onEscape(e) {
    e.stopPropagation();
    e.stopImmediatePropagation();
    e.preventDefault();

    close();
  }

  function openDropdown() {
    console.log("openDropdown");
    if (!disabled) {
      open = true;
    }
    updateBounds();
  }

  function close() {
    open = false;
  }

  function select(item, i) {
    if (!item) {
      (value = ""), (_name = ""), (selected = null);
    } else {
      (value = item[searchValue]),
        (_name = item[searchKey]),
        (selected = +i),
        (highlighted = +i);
    }
    filter = "";
    close();
    updateBounds();
  }

  function updateName(_value) {
    if (_value === "") {
      _name = "";
      filter = "";
      highlighted = -1;
      selected = -1;
    } else {
      for (let i in data) {
        if (data[i][searchValue] == _value) {
          _name = data[i][searchKey];
          selected = i;
          highlighted = i;
          break;
        }
      }
    }
  }

  function updateHandler(_open) {
    if (!scrollTarget) {
      scrollTarget = window;
    } else if (typeof scrollTarget === "string") {
      scrollTarget = document.getElementById(scrollTarget);
    }

    updateBounds();
    console.log(scrollTarget);
    if (_open) {
      document.addEventListener("click", clickHandler);
      scrollTarget.addEventListener("scroll", scrollHandler);
    } else {
      document.removeEventListener("click", clickHandler);
      scrollTarget.removeEventListener("scroll", scrollHandler);
    }
  }

  async function updateElementState() {
    await tick();
    if (!open) {
      input_el.style.display = "none";
      selected_el.style.display = "block";

      if (value === "") {
        (highlighted = -1), (selected = -1);
      }
    } else {
      input_el.style.display = "block";
      selected_el.style.display = "none";
      input_el.focus();
      input_el.select();
    }
  }

  function updateBounds() {
    if (!dropdown) {
      return;
    }

    let highlightedElement = dropdown.querySelector(".selecting");
    let selectedElement = dropdown.querySelector(".selected");

    let bounds = el.getBoundingClientRect();

    // match dropdown width with el width
    _dropdown.style.width = bounds.width + "px";

    dropdown = _dropdown;

    // console.log(bounds);

    if (open) {
      if (highlightedElement != null) {
        if (highlightedElement.offsetTop > 358) {
          dropdown.scrollTop = highlightedElement.offsetTop - 358;
        } else {
          dropdown.scrollTop = 0;
        }
      }

      if (selectedElement != null) {
        if (selectedElement.offsetTop > 358) {
          dropdown.scrollTop = selectedElement.offsetTop - 358;
        } else {
          dropdown.scrollTop = 0;
        }
      }

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
    } else {
      dropdown.style.left = "-9999px";
    }
  }

  function init() {
    input_el.style.display = "none";
    selected_el.style.display = "block";

    if (!data) {
      data = [];
    }

    //hoist the dropdowns into a container on the body
    dropdown = searchableselect.querySelector(".dropdown");

    _dropdown = dropdown; // cache for later

    let container = document.getElementById(dropdownId);

    if (!container) {
      container = document.createElement("div");
      container.id = dropdownId;
      container.className = "searchableselect";
      document.body.appendChild(container);
    }
    container.appendChild(dropdown);
    updateBounds();
  }

  $: data, prepareItems(data, filter);
  $: value, updateName(value);
  $: open, updateHandler(open), updateBounds(), updateElementState();

  onMount(() => {
    el = searchableselect;
    selected_el = el.querySelector(".name");
    input_el = el.querySelector("input");
    init();
  });

  onDestroy(() => {
    searchableselect.removeEventListener("click", clickHandler);
    window.removeEventListener("click", clickHandler);
    document.removeEventListener("scroll", scrollHandler);

    //have to manually clean this up since we hoisted it from under svelte's nose
    if (_dropdown) {
      _dropdown.parentNode.removeChild(_dropdown);
    }

    let container = document.getElementById(dropdownId);

    if (container && container.childNodes.length == 0) {
      container.parentNode.removeChild(container);
    }
  });
</script>
