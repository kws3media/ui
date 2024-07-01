import{j as e,M as c}from"./version-6f0519c4.js";import{u as a}from"./index-f60da153.js";import{M as i,C as d,e as l,f as s}from"./index-541e97f1.js";import{d as r}from"./index-356e4a49.js";import{S as p}from"./AutoCompleteAsync.stories-cd752a6b.js";import"./iframe-2486359f.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-75890171.js";import"./index-ae6f3512.js";import"./RadialChart-0ae793e3.js";import"./index-4339844e.js";import"./index-ce0c298e.js";import"./index-8cc5c1ab.js";import"./spread-8a54911c.js";import"./index-af29543d.js";import"./index-5da554f5.js";import"./data-f8fd5438.js";import"./utils-92f6f0d7.js";import"./index-b7fffc4c.js";import"./frameworkTypes-6fa5738f.js";function n(t){const o={em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",...a(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{}),`
`,e.jsx(o.h1,{id:"autocomplete-async",children:"AutoComplete (Async)"}),`
`,e.jsx(o.h2,{id:"an-input-component-that-supports-auto-complete-tips",children:"An Input component that supports auto complete tips."}),`
`,e.jsx(i,{of:p}),`
`,e.jsx(d,{}),`
`,e.jsx(l,{}),`
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
`,e.jsx(o.p,{children:e.jsx(o.em,{children:"Default values shown as example"})}),`
`,e.jsx(s,{code:r`
      @use '@kws3/ui/styles/AutoComplete.scss' with (
        $theme-colors: dv.$colors,
        $radius: cv.getVar("radius"),
        $border-color: cv.getVar("border"),
        $box-shadow: cv.getVar("shadow"),
        $focus-border-color: cv.getVar("input-focus-border-color"),
        $focus-box-shadow-size: cv.getVar("focus-shadow-size"),
        $focus-box-shadow-color: hsl(
          cv.getVar("focus-h"),
          cv.getVar("focus-s"),
          cv.getVar("focus-l"),
          cv.getVar("focus-shadow-alpha")
        ),
        $disabled-background-color: cv.getVar("input-disabled-background-color"),
        $disabled-border-color: cv.getVar("input-disabled-border-color"),
        $disabled-color: cv.getVar("input-disabled-color"),
        $selecting-color: cv.getVar("primary-invert"),
        $selecting-background: cv.getVar("primary"),
        $text-matches-color: currentColor,
        $text-matches-background: transparent,
        $text-matches-font-weight: cv.getVar("weight-bold"),
        $options-background: cv.getVar("scheme-main-ter"),
        $__modal-z: 41,
      );
    `})]})}function I(t={}){const{wrapper:o}={...a(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(n,{...t})}):n(t)}export{I as default};
