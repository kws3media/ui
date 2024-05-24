import{j as e,M as i}from"./version-36e7533e.js";import{u as n}from"./index-106c01c9.js";import{M as l,C as c,e as d,f as s}from"./index-cb4e5ec9.js";import{d as r}from"./index-356e4a49.js";import{S as p}from"./AutoCompleteAsync.stories-feafd6cb.js";import"./iframe-bdeabeba.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-75890171.js";import"./index-ae6f3512.js";import"./RadialChart-19f46828.js";import"./index-4339844e.js";import"./index-ce0c298e.js";import"./index-8cc5c1ab.js";import"./spread-8a54911c.js";import"./index-af29543d.js";import"./index-5da554f5.js";import"./data-f8fd5438.js";import"./utils-92f6f0d7.js";import"./index-b7fffc4c.js";function a(t){const o={h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{}),`
`,e.jsx(o.h1,{id:"autocomplete-async",children:"AutoComplete (Async)"}),`
`,e.jsx(o.h2,{id:"an-input-component-that-supports-auto-complete-tips",children:"An Input component that supports auto complete tips."}),`
`,e.jsx(l,{of:p}),`
`,e.jsx(c,{}),`
`,e.jsx(d,{}),`
`,e.jsx("div",{className:"notification is-primary is-light",children:e.jsxs("div",{className:"columns",children:[e.jsxs("div",{className:"column",children:[e.jsx("h3",{children:e.jsxs(o.p,{children:["Input format ",e.jsx("code",{children:"options"})]})}),e.jsx("p",{children:e.jsxs(o.p,{children:["Can send either an array of strings, or an array of objects.",e.jsx("br",{}),`Always
ensure the shape of the array items are consistent.`]})}),e.jsx("p",{children:"See supported data formats in example story above."}),e.jsxs("p",{children:["Note: ",e.jsx("code",{children:"option.label"})," contains matched characters wrapped inside ",e.jsx("code",{children:'<span class="h">'})," tags. "]}),e.jsxs("p",{children:["Note: Highlighted results can be turned off by setting ",e.jsx("code",{children:"highlighted_results"})," property to ",e.jsx("code",{children:"false"})]})]}),e.jsxs("div",{className:"column",children:[e.jsx("h3",{children:"Customising dropdown text items"}),e.jsx("p",{children:"See documentation for default slot."}),e.jsx("h4",{children:"Example:"}),e.jsx(s,{language:"jsx",code:r`<AutoComplete
      ...other_options
      let:option>
      <span class="has-text-danger">
        {@html option.label}
      </span>
    </AutoComplete>`})]})]})}),`
`,e.jsx(o.h3,{id:"usage",children:"Usage"}),`
`,e.jsx(o.h4,{id:"import-the-component",children:"Import the component:"}),`
`,e.jsx(s,{code:r`import { AutoComplete } from '@kws3/ui';`}),`
`,e.jsx(o.h4,{id:"import-the-scss",children:"Import the SCSS:"}),`
`,e.jsx(s,{code:r`@import '@kws3/ui/styles/AutoComplete.scss';`}),`
`,e.jsx(o.h4,{id:"scss-customization-variables-with-default-values",children:"SCSS customization variables with default values:"}),`
`,e.jsx(s,{language:"css",code:r`
      $kws-theme-colors: $colors !default;
      $kws-autocomplete-radius: $radius !default;
      $kws-autocomplete-border-color: $input-border-color !default;
      $kws-autocomplete-box-shadow: 0 0.5em 1em -0.125em rgb(10 10 10 / 10%),
        0 0px 0 1px rgb(10 10 10 / 2%) !default;
      $kws-autocomplete-focus-border-color: $input-focus-border-color !default;
      $kws-autocomplete-focus-box-shadow-size: $input-focus-box-shadow-size !default;
      $kws-autocomplete-focus-box-shadow-color: $input-focus-box-shadow-color !default;
      $kws-autocomplete-disabled-background-color: $input-disabled-background-color !default;
      $kws-autocomplete-disabled-border-color: $input-disabled-border-color !default;
      $kws-autocomplete-disabled-color: $input-disabled-color !default;
      $kws-autocomplete-selecting-color: $primary-invert !default;
      $kws-autocomplete-selecting-background: $primary !default;
      $kws-autocomplete-text-matches-color: currentColor !default;
      $kws-autocomplete-text-matches-background: transparent !default;
      $kws-autocomplete-text-matches-font-weight: $weight-bold !default;
      $kws-autocomplete-options-background: $scheme-main-ter !default;
    `})]})}function I(t={}){const{wrapper:o}={...n(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(a,{...t})}):a(t)}export{I as default};
