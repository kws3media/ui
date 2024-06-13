import{j as s,M as c}from"./version-f6a9f08d.js";import{u as r}from"./index-5b876d48.js";import{M as l,C as a,e as d,f as i}from"./index-564c5f40.js";import{d as t}from"./index-356e4a49.js";import{S as h}from"./MultiSelectAsync.stories-3a3a67e3.js";import"./iframe-6387451d.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-75890171.js";import"./RadialChart-d4ecf1af.js";import"./index-ae6f3512.js";import"./index-4339844e.js";import"./index-ce0c298e.js";import"./index-8cc5c1ab.js";import"./spread-8a54911c.js";import"./index-af29543d.js";import"./index-5da554f5.js";import"./data-cc1f5330.js";import"./utils-92f6f0d7.js";import"./index-b7fffc4c.js";import"./frameworkTypes-9ac02643.js";function n(o){const e={h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",...r(),...o.components};return s.jsxs(s.Fragment,{children:[s.jsx(c,{}),`
`,s.jsx(e.h1,{id:"multiselect-async",children:"MultiSelect (Async)"}),`
`,s.jsx(e.h2,{id:"example-of-async-loading-options",children:"Example of Async loading options."}),`
`,s.jsx(l,{of:h}),`
`,s.jsx(a,{}),`
`,s.jsx(d,{}),`
`,s.jsx("div",{className:"notification is-primary is-light",children:s.jsxs("div",{className:"columns",children:[s.jsxs("div",{className:"column",children:[s.jsx("h3",{children:s.jsxs(e.p,{children:["Async filter function ",s.jsx("code",{children:"search"})]})}),s.jsx("div",{children:s.jsx(e.p,{children:`This function is called when the user types in the search field.
It is passed the search string and should return a promise that
resolves to an array of options.`})}),s.jsx("div",{children:s.jsx(e.p,{children:`This function is not called every keydown while the user is typing.
It is called only when user finishes typing.`})}),s.jsx("div",{children:s.jsx(e.p,{children:"Note:"})}),s.jsxs("ul",{children:[s.jsxs("li",{children:["Only send this prop if you want to fetch ",s.jsx("code",{children:"options"})," asynchronously."]}),s.jsxs("li",{children:[s.jsx("code",{children:"options"})," prop will be ignored if this prop is set."]}),s.jsx("li",{children:"To improve rendering performance, slice down the options if items array contains a large dataset on a single match."})]}),s.jsx(i,{language:"jsx",code:t`<MultiSelect
      ...other_options
      search={async ()...... items.map(...).slice(0, 20);}
    
    </MultiSelect>`})]}),s.jsxs("div",{className:"column",children:[s.jsx("h3",{children:"Example:"}),s.jsx(i,{language:"jsx",code:t`<MultiSelect
      ...other_options
      search={async (filter) => {
        const response = await fetch(
          "https://api.github.com/search/users?q=" + filter
        );
        const json = await response.json();
        return json.items.map((item) => ({
          id: item.id,
          name: item.name,
        }));
      }}
    
    </MultiSelect>`})]})]})}),`
`,s.jsx(e.h3,{id:"usage",children:"Usage"}),`
`,s.jsx(e.h4,{id:"import-the-component",children:"Import the component:"}),`
`,s.jsx(i,{code:t`import { MultiSelect } from '@kws3/ui';`}),`
`,s.jsx(e.h4,{id:"import-the-scss",children:"Import the SCSS:"}),`
`,s.jsx(i,{code:t`@import '@kws3/ui/styles/Select.scss';`}),`
`,s.jsx(e.h4,{id:"scss-customization-variables-with-default-values",children:"SCSS customization variables with default values:"}),`
`,s.jsx(i,{language:"css",code:t`
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
    `})]})}function _(o={}){const{wrapper:e}={...r(),...o.components};return e?s.jsx(e,{...o,children:s.jsx(n,{...o})}):n(o)}export{_ as default};
