import{j as e,M as a}from"./version-f6a9f08d.js";import{u as n}from"./index-5b876d48.js";import{M as c,C as l,e as d,f as t}from"./index-564c5f40.js";import{d as r}from"./index-356e4a49.js";import{S as h}from"./SearchableSelect.stories-230fb777.js";import"./iframe-6387451d.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-75890171.js";import"./RadialChart-d4ecf1af.js";import"./index-ae6f3512.js";import"./index-4339844e.js";import"./index-ce0c298e.js";import"./index-8cc5c1ab.js";import"./spread-8a54911c.js";import"./index-af29543d.js";import"./index-5da554f5.js";import"./data-cc1f5330.js";import"./utils-92f6f0d7.js";import"./index-b7fffc4c.js";import"./frameworkTypes-9ac02643.js";function i(o){const s={h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",...n(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{}),`
`,e.jsx(s.h1,{id:"searchableselect",children:"SearchableSelect"}),`
`,e.jsx(s.h2,{id:"a-select-component-that-allows-you-to-search-by-typing-into-it",children:"A select component that allows you to search by typing into it."}),`
`,e.jsx(c,{of:h}),`
`,e.jsx(l,{}),`
`,e.jsx(d,{}),`
`,e.jsx("div",{className:"notification is-primary is-light",children:e.jsxs("div",{className:"columns",children:[e.jsxs("div",{className:"column",children:[e.jsx("h3",{children:e.jsxs(s.p,{children:["Input format ",e.jsx("code",{children:"options"})]})}),e.jsx("div",{children:e.jsxs(s.p,{children:["Can send either an array of strings, or an array of objects.",e.jsx("br",{}),`Always
ensure the shape of the array items are consistent.`]})}),e.jsx("div",{children:e.jsxs(s.p,{children:["When an array of objects is sent, ",e.jsx("br",{}),`
`,e.jsx("code",{children:"array_item[search_key]"})," is used for search-as-you-type, ",e.jsx("br",{}),`
and `,e.jsx("code",{children:"array_item[value_key]"}),` is returned as the value once an
item is selected.`]})}),e.jsx("div",{children:"See supported data formats in example story above."})]}),e.jsxs("div",{className:"column",children:[e.jsx("h3",{children:"Customising dropdown text items"}),e.jsx("div",{children:"See documentation for default slot."}),e.jsx("h4",{children:"Example:"}),e.jsx(t,{language:"jsx",code:r`<SearchableSelect
      ...other_options
      let:search_key 
      let:option>
      <span class="has-text-danger">
        {option[search_key]}
      </span>
    </SearchableSelect>`})]})]})}),`
`,e.jsx(s.h3,{id:"usage",children:"Usage"}),`
`,e.jsx(s.h4,{id:"import-the-component",children:"Import the component:"}),`
`,e.jsx(t,{code:r`import { SearchableSelect } from '@kws3/ui';`}),`
`,e.jsx(s.h4,{id:"import-the-scss",children:"Import the SCSS:"}),`
`,e.jsx(t,{code:r`@import '@kws3/ui/styles/Select.scss';`}),`
`,e.jsx(s.h4,{id:"scss-customization-variables-with-default-values",children:"SCSS customization variables with default values:"}),`
`,e.jsx(t,{language:"css",code:r`
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
    `})]})}function I(o={}){const{wrapper:s}={...n(),...o.components};return s?e.jsx(s,{...o,children:e.jsx(i,{...o})}):i(o)}export{I as default};
