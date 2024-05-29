import{j as e,M as c}from"./version-1e8f9454.js";import{u as r}from"./index-323c8e7a.js";import{M as l,C as a,e as d,f as i}from"./index-b6c8336d.js";import{d as t}from"./index-356e4a49.js";import{S as h}from"./SearchableSelectAsync.stories-f5da2d37.js";import"./iframe-74ccf227.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-75890171.js";import"./RadialChart-db2a7349.js";import"./index-ae6f3512.js";import"./index-4339844e.js";import"./index-ce0c298e.js";import"./index-8cc5c1ab.js";import"./spread-8a54911c.js";import"./index-af29543d.js";import"./index-5da554f5.js";import"./data-cc1f5330.js";import"./utils-92f6f0d7.js";import"./index-b7fffc4c.js";function n(o){const s={h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",...r(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{}),`
`,e.jsx(s.h1,{id:"searchableselect-async",children:"SearchableSelect (Async)"}),`
`,e.jsx(s.h2,{id:"example-of-async-loading-options",children:"Example of Async loading options."}),`
`,e.jsx(l,{of:h}),`
`,e.jsx(a,{}),`
`,e.jsx(d,{}),`
`,e.jsx("div",{className:"notification is-primary is-light",children:e.jsxs("div",{className:"columns",children:[e.jsxs("div",{className:"column",children:[e.jsx("h3",{children:e.jsxs(s.p,{children:["Async filter function ",e.jsx("code",{children:"search"})]})}),e.jsx("div",{children:e.jsx(s.p,{children:`This function is called when the user types in the search field.
It is passed the search string and should return a promise that
resolves to an array of options.`})}),e.jsx("div",{children:e.jsx(s.p,{children:`This function is not called every keydown while the user is typing.
It is called only when user finishes typing.`})}),e.jsx("div",{children:e.jsx(s.p,{children:"Note:"})}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Only send this prop if you want to fetch ",e.jsx("code",{children:"options"})," asynchronously."]}),e.jsxs("li",{children:[e.jsx("code",{children:"options"})," prop will be ignored if this prop is set."]}),e.jsx("li",{children:"To improve rendering performance, slice down the options if items array contains a large dataset on a single match."})]}),e.jsx(i,{language:"jsx",code:t`<SearchableSelect
      ...other_options
      search={async ()...... items.map(...).slice(0, 20);}
    
    </SearchableSelect>`})]}),e.jsxs("div",{className:"column",children:[e.jsx("h3",{children:"Example:"}),e.jsx(i,{language:"jsx",code:t`<SearchableSelect
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
    
    </SearchableSelect>`})]})]})}),`
`,e.jsx(s.h3,{id:"usage",children:"Usage"}),`
`,e.jsx(s.h4,{id:"import-the-component",children:"Import the component:"}),`
`,e.jsx(i,{code:t`import { SearchableSelect } from '@kws3/ui';`}),`
`,e.jsx(s.h4,{id:"import-the-scss",children:"Import the SCSS:"}),`
`,e.jsx(i,{code:t`@import '@kws3/ui/styles/Select.scss';`}),`
`,e.jsx(s.h4,{id:"scss-customization-variables-with-default-values",children:"SCSS customization variables with default values:"}),`
`,e.jsx(i,{language:"css",code:t`
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
    `})]})}function X(o={}){const{wrapper:s}={...r(),...o.components};return s?e.jsx(s,{...o,children:e.jsx(n,{...o})}):n(o)}export{X as default};
