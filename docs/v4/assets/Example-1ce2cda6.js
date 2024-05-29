import{j as n,M as i}from"./version-86b1272d.js";import{u as a}from"./index-beec74fd.js";import{M as r,d as o}from"./index-f5d408b8.js";import{S as l,M as c}from"./Example.stories-0f3c52bc.js";import"./iframe-8c41e289.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-75890171.js";import"./index-356e4a49.js";import"./index-ae6f3512.js";import"./spread-8a54911c.js";import"./RadialChart-071af029.js";import"./index-4339844e.js";import"./index-ce0c298e.js";import"./index-8cc5c1ab.js";import"./index-af29543d.js";import"./index-5da554f5.js";function s(t){const e={code:"code",h1:"h1",h2:"h2",h4:"h4",pre:"pre",...a(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{}),`
`,n.jsx(r,{of:l}),`
`,n.jsx(e.h1,{id:"datagrid",children:"Datagrid"}),`
`,n.jsx(e.h2,{id:"this-shows-an-example-of-all-datagrid-components-work-together",children:"This shows an example of all datagrid components work together."}),`
`,n.jsx(o,{of:c}),`
`,n.jsx(e.h4,{id:"import-below-scss-for-datasort-styles",children:"Import below SCSS for DataSort styles"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`@import '@kws3/ui/styles/DataSort.scss';
`})}),`
`,n.jsx(e.h4,{id:"example-usage-of-datagrid-components",children:"Example usage of datagrid components"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`{#if data}
  <div className="columns">
    <div className="column">
      <DataSearch
        {hasSearch}
        {hasFilters}
        {placeholder}
        {filters}
        {q}
        {filter_in_use_class}
        {filter_not_in_use_class}
        {filterComponent}
        {filter_label_map}
        on:search={search}
        on:resetSearch={resetSearch} />
      <DataSort {options} {sort_by} on:sort={sort} />
    </div>
  </div>

  <div className="columns">
    <div className="column">      
      <GridView
        {iteration_key}
        {data}
        {columns}
        {transition}
        {is_striped}
        {clickableRows}
        {bulk_actions}
        {selectAll}
        {selectedIds}
        {selectAllCheckboxColor}
        {selectCheckboxColor}
        {selectCheckboxSize}
        {valueTransformers}
        {classTransformers}
        {styleTransformers}
        {visibilityMap}
        {cellComponentMap} />      
    </div>
  </div>

  {#if has_pagination}
    <div className="columns">
      <div className="column">
        <Pagination {meta} {perPageOptions} on:paginate={paginate} />
      </div>
    </div>
  {/if}
{/if}

<script>
  import {
    DataSearch,
    DataSort,
    GridView,
    TileView,
    Pagination
  } from "@kws3/ui";
  import { response } from "./users.js";

  let hasSearch = true,
    hasFilters = true,
    placeholder = "Search by name or surname",
    filters = response.filters,
    options = response.options,
    data = [],
    columns = {
      id: "ID",
      name: "Name",
      surname: "Surname",
      role: "Role",
      status: "Status",
    },
    meta = response.meta,
    q = "",
    filter_in_use_class = "is-in-use",
    filter_not_in_use_class = "is-not-in-use",
    filterComponent = null,
    filter_label_map = {},
    sort_by = "",
    iteration_key = "id",
    transition = false,
    is_striped = true,
    clickableRows = false,
    bulk_actions = false,
    selectAll = false,
    selectedIds = [],
    selectAllCheckboxColor = "primary",
    selectCheckboxColor = "info",
    selectCheckboxSize = "medium",
    classTransformers = {},
    styleTransformers = {},
    visibilityMap = {},
    cellComponentMap = {},
    tileItemComponent = null,
    per_row = 3,
    perPageOptions = [5];

  let is_loading = false;
  let original_data = response.records;
  let is_tile_view = false;
  let limit = meta.limit;
  let page_number = 1;

  let valueTransformers = {
    role(v, row) {
      switch (row.role) {
        case "A":
          return "Administrator";
          break;
        case "U":
          return "User";
          break;
      }
    },
    status(v, row) {
      return v == 1 ? "Active" : "Inactive";
    },
  };

  $: data = original_data.slice((page_number - 1) * limit, page_number * limit);
  $: has_pagination = original_data.length > limit;

  function search({ detail }) {
    //Write functionality for custom search
  }

  function resetSearch() {
    //Write functionality for custom reset search
  }  

  function paginate({ detail }) {
    //Write functionality for custom paginate
  }

  function sort({ detail }) {
    //Write functionality for custom sort
  }
<\/script>

`})})]})}function M(t={}){const{wrapper:e}={...a(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(s,{...t})}):s(t)}export{M as default};
