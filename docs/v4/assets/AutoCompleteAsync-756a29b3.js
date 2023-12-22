import{j as e,M as i}from"./version-46c3a277.js";import{M as c,C as l,d,e as s}from"./index-022903f7.js";import{d as r}from"./index-356e4a49.js";import{S as p}from"./AutoCompleteAsync.stories-ec4bdd9d.js";import{u as n}from"./index-7fbbac9d.js";import"./iframe-437dea7a.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";import"./index-349dcf19.js";import"./_getTag-7fd90005.js";import"./uniq-8956f76d.js";import"./index-1914c206.js";import"./RadialChart-d7ee443d.js";import"./index-f0c04adc.js";import"./index-8a90618b.js";import"./spread-8a54911c.js";import"./index-af29543d.js";import"./index-81505e0c.js";import"./index-5da554f5.js";import"./data-f8fd5438.js";import"./utils-92f6f0d7.js";import"./index-e13a698e.js";import"./index-150b40f0.js";import"./index-03bbf7d1.js";import"./index-d38bc732.js";function a(t){const o=Object.assign({h1:"h1",h2:"h2",p:"p",h3:"h3",h4:"h4"},n(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(i,{}),`
`,e.jsx(o.h1,{id:"autocomplete-async",children:"AutoComplete (Async)"}),`
`,e.jsx(o.h2,{id:"an-input-component-that-supports-auto-complete-tips",children:"An Input component that supports auto complete tips."}),`
`,e.jsx(c,{of:p}),`
`,e.jsx(l,{}),`
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
`,e.jsx(s,{language:"javascript",code:r`import { AutoComplete } from '@kws3/ui';`}),`
`,e.jsx(o.h4,{id:"import-the-scss",children:"Import the SCSS:"}),`
`,e.jsx(s,{language:"javascript",code:r`@import '@kws3/ui/styles/AutoComplete.scss';`}),`
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
    `})]})}function F(t={}){const{wrapper:o}=Object.assign({},n(),t.components);return o?e.jsx(o,Object.assign({},t,{children:e.jsx(a,t)})):a(t)}export{F as default};
