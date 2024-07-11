import{j as e}from"./jsx-runtime-593b36f9.js";import{u as a}from"./index-a6b36cb5.js";import{M as n,C as c,e as l,f as o}from"./index-5adacd09.js";import{d as r}from"./index-356e4a49.js";import{M as d}from"./version-69ab0678.js";import{S as m}from"./MultiSelect.stories-cb173370.js";import"./iframe-649ff2ef.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";import"./index-5a8fdfec.js";import"./RadialChart-a46fe6c5.js";import"./index-ae6f3512.js";import"./index-4339844e.js";import"./index-ce0c298e.js";import"./index-8cc5c1ab.js";import"./spread-8a54911c.js";import"./index-af29543d.js";import"./index-5da554f5.js";import"./data-cc1f5330.js";import"./utils-92f6f0d7.js";import"./index-b7fffc4c.js";import"./frameworkTypes-6fa5738f.js";function i(t){const s={em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",...a(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{}),`
`,e.jsx(s.h1,{id:"multiselect",children:"MultiSelect"}),`
`,e.jsx(s.h2,{id:"a-select-component-that-allows-you-to-search-and-select-multiple-items-by-typing-into-it",children:"A select component that allows you to search and select multiple items by typing into it."}),`
`,e.jsx(n,{of:m}),`
`,e.jsx(c,{}),`
`,e.jsx(l,{}),`
`,e.jsx("div",{className:"notification is-primary is-light sb-unstyled",children:e.jsxs("div",{className:"columns",children:[e.jsxs("div",{className:"column",children:[e.jsxs("h3",{className:"subtitle",children:["Input format ",e.jsx("code",{children:"options"})]}),e.jsx("div",{children:"Can send either an array of strings, or an array of objects."}),e.jsx("div",{children:"Always ensure the shape of the array items are consistent."}),e.jsx("div",{children:"When an array of objects is sent, "}),e.jsxs("div",{children:[e.jsx("code",{children:"array_item[search_key]"})," is used for search-as-you-type, "]}),e.jsxs("div",{children:["and ",e.jsx("code",{children:"array_item[value_key]"})," is returned as the value once an item is selected."]}),e.jsx("div",{children:"See supported data formats in example story above."}),e.jsxs("h3",{className:"subtitle",children:["Output format ",e.jsx("code",{children:"value"})]}),e.jsxs("div",{children:["The output in ",e.jsx("code",{children:"value"})," will always be an array, even if a single item is selected."]})]}),e.jsxs("div",{className:"column",children:[e.jsx("h3",{className:"subtitle",children:"Customising dropdown text items"}),e.jsx("div",{children:"See documentation for default slot."}),e.jsx("h4",{className:"subtitle",children:"Example:"}),e.jsx(o,{language:"jsx",code:r`<MultiSelect
      ...other_options
      let:search_key 
      let:option>
      <span class="has-text-danger">
        {option[search_key]}
      </span>
    </MultiSelect>`})]})]})}),`
`,e.jsx(s.h3,{id:"usage",children:"Usage"}),`
`,e.jsx(s.h4,{id:"import-the-component",children:"Import the component:"}),`
`,e.jsx(o,{code:r`import { MultiSelect } from '@kws3/ui';`}),`
`,e.jsx(s.h4,{id:"import-the-scss",children:"Import the SCSS:"}),`
`,e.jsx(s.p,{children:e.jsx(s.em,{children:"Default values shown as example"})}),`
`,e.jsx(o,{code:r`
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
    `})]})}function I(t={}){const{wrapper:s}={...a(),...t.components};return s?e.jsx(s,{...t,children:e.jsx(i,{...t})}):i(t)}export{I as default};
