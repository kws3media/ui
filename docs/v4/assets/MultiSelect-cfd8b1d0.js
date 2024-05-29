import{j as e,M as c}from"./version-86b1272d.js";import{u as n}from"./index-beec74fd.js";import{M as a,C as l,e as d,f as o}from"./index-f5d408b8.js";import{d as i}from"./index-356e4a49.js";import{S as m}from"./MultiSelect.stories-5e63ded9.js";import"./iframe-8c41e289.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-75890171.js";import"./RadialChart-071af029.js";import"./index-ae6f3512.js";import"./index-4339844e.js";import"./index-ce0c298e.js";import"./index-8cc5c1ab.js";import"./spread-8a54911c.js";import"./index-af29543d.js";import"./index-5da554f5.js";import"./data-cc1f5330.js";import"./utils-92f6f0d7.js";import"./index-b7fffc4c.js";import"./frameworkTypes-60e558cb.js";function r(t){const s={h1:"h1",h2:"h2",h3:"h3",h4:"h4",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{}),`
`,e.jsx(s.h1,{id:"multiselect",children:"MultiSelect"}),`
`,e.jsx(s.h2,{id:"a-select-component-that-allows-you-to-search-and-select-multiple-items-by-typing-into-it",children:"A select component that allows you to search and select multiple items by typing into it."}),`
`,e.jsx(a,{of:m}),`
`,e.jsx(l,{}),`
`,e.jsx(d,{}),`
`,e.jsx("div",{className:"notification is-primary is-light",children:e.jsxs("div",{className:"columns",children:[e.jsxs("div",{className:"column",children:[e.jsxs("h3",{children:["Input format ",e.jsx("code",{children:"options"})]}),e.jsx("div",{children:"Can send either an array of strings, or an array of objects."}),e.jsx("div",{children:"Always ensure the shape of the array items are consistent."}),e.jsx("div",{children:"When an array of objects is sent, "}),e.jsxs("div",{children:[e.jsx("code",{children:"array_item[search_key]"})," is used for search-as-you-type, "]}),e.jsxs("div",{children:["and ",e.jsx("code",{children:"array_item[value_key]"})," is returned as the value once an item is selected."]}),e.jsx("div",{children:"See supported data formats in example story above."}),e.jsxs("h3",{children:["Output format ",e.jsx("code",{children:"value"})]}),e.jsxs("div",{children:["The output in ",e.jsx("code",{children:"value"})," will always be an array, even if a single item is selected."]})]}),e.jsxs("div",{className:"column",children:[e.jsx("h3",{children:"Customising dropdown text items"}),e.jsx("div",{children:"See documentation for default slot."}),e.jsx("h4",{children:"Example:"}),e.jsx(o,{language:"jsx",code:i`<MultiSelect
      ...other_options
      let:search_key 
      let:option>
      <span class="has-text-danger">
        {option[search_key]}
      </span>
    </MultiSelect>`})]})]})}),`
`,e.jsx(s.h3,{id:"usage",children:"Usage"}),`
`,e.jsx(s.h4,{id:"import-the-component",children:"Import the component:"}),`
`,e.jsx(o,{code:i`import { MultiSelect } from '@kws3/ui';`}),`
`,e.jsx(s.h4,{id:"import-the-scss",children:"Import the SCSS:"}),`
`,e.jsx(o,{code:i`@import '@kws3/ui/styles/Select.scss';`}),`
`,e.jsx(s.h4,{id:"scss-customization-variables-with-default-values",children:"SCSS customization variables with default values:"}),`
`,e.jsx(o,{language:"css",code:i`
      $kws-theme-colors: $colors;
      $kws-select-radius: $radius;
      $kws-select-focus-border-color: $input-focus-border-color;
      $kws-select-focus-box-shadow-size: $input-focus-box-shadow-size;
      $kws-select-focus-box-shadow-color: $input-focus-box-shadow-color;
      $kws-select-disabled-background-color: $input-disabled-background-color;
      $kws-select-disabled-border-color: $input-disabled-border-color;
      $kws-select-disabled-color: $input-disabled-color;
      $kws-select-selecting-color: $primary-invert;
      $kws-select-selecting-background: $primary;
      $kws-select-selected-color: $primary-dark;
      $kws-select-selected-background: $primary-light;
      $kws-select-options-background: $scheme-main-ter;
      $kws-select-options-z-index: $modal-z + 1;
    `})]})}function I(t={}){const{wrapper:s}={...n(),...t.components};return s?e.jsx(s,{...t,children:e.jsx(r,{...t})}):r(t)}export{I as default};
