import{j as e}from"./jsx-runtime-593b36f9.js";import{u as n}from"./index-a6b36cb5.js";import{M as c,C as a,e as l,f as t}from"./index-5adacd09.js";import{d as o}from"./index-356e4a49.js";import{M as d}from"./version-69ab0678.js";import{S as h}from"./MultiSelectAsync.stories-60650f49.js";import"./iframe-649ff2ef.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";import"./index-5a8fdfec.js";import"./RadialChart-a46fe6c5.js";import"./index-ae6f3512.js";import"./index-4339844e.js";import"./index-ce0c298e.js";import"./index-8cc5c1ab.js";import"./spread-8a54911c.js";import"./index-af29543d.js";import"./index-5da554f5.js";import"./data-cc1f5330.js";import"./utils-92f6f0d7.js";import"./index-b7fffc4c.js";import"./frameworkTypes-6fa5738f.js";function r(i){const s={em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",...n(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{}),`
`,e.jsx(s.h1,{id:"multiselect-async",children:"MultiSelect (Async)"}),`
`,e.jsx(s.h2,{id:"example-of-async-loading-options",children:"Example of Async loading options."}),`
`,e.jsx(c,{of:h}),`
`,e.jsx(a,{}),`
`,e.jsx(l,{}),`
`,e.jsx("div",{className:"notification is-primary is-light sb-unstyled",children:e.jsxs("div",{className:"columns",children:[e.jsxs("div",{className:"column",children:[e.jsx("h3",{className:"subtitle",children:e.jsxs(s.p,{children:["Async filter function ",e.jsx("code",{children:"search"})]})}),e.jsx("div",{className:"",children:e.jsx(s.p,{children:`This function is called when the user types in the search field.
It is passed the search string and should return a promise that
resolves to an array of options.`})}),e.jsx("div",{className:"",children:e.jsx(s.p,{children:`This function is not called every keydown while the user is typing.
It is called only when user finishes typing.`})}),e.jsx("div",{className:"",children:e.jsx(s.p,{children:"Note:"})}),e.jsxs("ul",{className:"",children:[e.jsxs("li",{children:["Only send this prop if you want to fetch ",e.jsx("code",{children:"options"})," asynchronously."]}),e.jsxs("li",{children:[e.jsx("code",{children:"options"})," prop will be ignored if this prop is set."]}),e.jsx("li",{children:"To improve rendering performance, slice down the options if items array contains a large dataset on a single match."})]}),e.jsx(t,{language:"jsx",code:o`<MultiSelect
      ...other_options
      search={async ()...... items.map(...).slice(0, 20);}
    
    </MultiSelect>`})]}),e.jsxs("div",{className:"column",children:[e.jsx("h3",{className:"subtitle",children:"Example:"}),e.jsx(t,{language:"jsx",code:o`<MultiSelect
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
`,e.jsx(s.h3,{id:"usage",children:"Usage"}),`
`,e.jsx(s.h4,{id:"import-the-component",children:"Import the component:"}),`
`,e.jsx(t,{code:o`import { MultiSelect } from '@kws3/ui';`}),`
`,e.jsx(s.h4,{id:"import-the-scss",children:"Import the SCSS:"}),`
`,e.jsx(s.p,{children:e.jsx(s.em,{children:"Default values shown as example"})}),`
`,e.jsx(t,{code:o`
      @use '@kws3/ui/styles/Select.scss with(
        $theme-colors: dv.$colors,
        $radius: cv.getVar("radius"),
        $focus-border-color: hsl(
          cv.getVar("input-focus-h"),
          cv.getVar("input-focus-s"),
          cv.getVar("input-focus-l")
        ),
        $focus-box-shadow-size: cv.getVar("input-focus-shadow-size"),
        $focus-box-shadow-color: hsl(
          cv.getVar("input-focus-h"),
          cv.getVar("input-focus-s"),
          cv.getVar("input-focus-l"),
          cv.getVar("input-focus-shadow-alpha")
        ),
        $disabled-background-color: cv.getVar(
          "input-disabled-background-color"
        ),
        $disabled-border-color: cv.getVar("input-disabled-border-color"),
        $disabled-color: cv.getVar("input-disabled-color"),
        $selecting-color: cv.getVar("primary-invert"),
        $selecting-background: cv.getVar("primary"),
        $selected-color: cv.getVar("primary-dark"),
        $selected-background: cv.getVar("primary-light"),
        $options-background: cv.getVar("scheme-main-ter"),
        $__modal-z: 41,
      )
    `})]})}function z(i={}){const{wrapper:s}={...n(),...i.components};return s?e.jsx(s,{...i,children:e.jsx(r,{...i})}):r(i)}export{z as default};
