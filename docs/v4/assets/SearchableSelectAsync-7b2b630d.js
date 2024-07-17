import{j as e}from"./jsx-runtime-7ced2cd4.js";import{u as n}from"./index-1e098026.js";import{ae as c,af as a,ah as l,ai as r}from"./index-ea933ae1.js";import{d as i}from"./index-356e4a49.js";import{M as d}from"./version-31399cf6.js";import{S as h}from"./SearchableSelectAsync.stories-72f40d1b.js";import"./iframe-54810192.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";import"./index-65ec3394.js";import"./RadialChart-fd6d98ed.js";import"./index-ae6f3512.js";import"./index-4339844e.js";import"./index-ce0c298e.js";import"./index-8cc5c1ab.js";import"./spread-8a54911c.js";import"./index-af29543d.js";import"./index-5da554f5.js";import"./data-cc1f5330.js";import"./utils-92f6f0d7.js";import"./index-8f8201f3.js";import"./index-8d1e987c.js";function t(o){const s={em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",...n(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{}),`
`,e.jsx(s.h1,{id:"searchableselect-async",children:"SearchableSelect (Async)"}),`
`,e.jsx(s.h2,{id:"example-of-async-loading-options",children:"Example of Async loading options."}),`
`,e.jsx(c,{of:h}),`
`,e.jsx(a,{}),`
`,e.jsx(l,{}),`
`,e.jsx("div",{className:"notification is-primary is-light",children:e.jsxs("div",{className:"columns",children:[e.jsxs("div",{className:"column",children:[e.jsx("h3",{children:e.jsxs(s.p,{children:["Async filter function ",e.jsx("code",{children:"search"})]})}),e.jsx("div",{children:e.jsx(s.p,{children:`This function is called when the user types in the search field.
It is passed the search string and should return a promise that
resolves to an array of options.`})}),e.jsx("div",{children:e.jsx(s.p,{children:`This function is not called every keydown while the user is typing.
It is called only when user finishes typing.`})}),e.jsx("div",{children:e.jsx(s.p,{children:"Note:"})}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Only send this prop if you want to fetch ",e.jsx("code",{children:"options"})," asynchronously."]}),e.jsxs("li",{children:[e.jsx("code",{children:"options"})," prop will be ignored if this prop is set."]}),e.jsx("li",{children:"To improve rendering performance, slice down the options if items array contains a large dataset on a single match."})]}),e.jsx(r,{language:"jsx",code:i`<SearchableSelect
      ...other_options
      search={async ()...... items.map(...).slice(0, 20);}
    
    </SearchableSelect>`})]}),e.jsxs("div",{className:"column",children:[e.jsx("h3",{children:"Example:"}),e.jsx(r,{language:"jsx",code:i`<SearchableSelect
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
`,e.jsx(r,{code:i`import { SearchableSelect } from '@kws3/ui';`}),`
`,e.jsx(s.h4,{id:"import-the-scss",children:"Import the SCSS:"}),`
`,e.jsx(s.p,{children:e.jsx(s.em,{children:"Default values shown as example"})}),`
`,e.jsx(r,{code:i`
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
    `})]})}function z(o={}){const{wrapper:s}={...n(),...o.components};return s?e.jsx(s,{...o,children:e.jsx(t,{...o})}):t(o)}export{z as default};
