import{j as e}from"./jsx-runtime-593b36f9.js";import{u as n}from"./index-a6b36cb5.js";import{M as c,C as i,e as l,f as t}from"./index-5adacd09.js";import{d as r}from"./index-356e4a49.js";import{M as d}from"./version-69ab0678.js";import{S as m}from"./AutoCompleteAsync.stories-e6b0619b.js";import"./iframe-649ff2ef.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";import"./index-5a8fdfec.js";import"./index-ae6f3512.js";import"./RadialChart-a46fe6c5.js";import"./index-4339844e.js";import"./index-ce0c298e.js";import"./index-8cc5c1ab.js";import"./spread-8a54911c.js";import"./index-af29543d.js";import"./index-5da554f5.js";import"./data-f8fd5438.js";import"./utils-92f6f0d7.js";import"./index-b7fffc4c.js";import"./frameworkTypes-6fa5738f.js";function a(o){const s={em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",...n(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{}),`
`,e.jsx(s.h1,{id:"autocomplete-async",children:"AutoComplete (Async)"}),`
`,e.jsx(s.h2,{id:"an-input-component-that-supports-auto-complete-tips",children:"An Input component that supports auto complete tips."}),`
`,e.jsx(c,{of:m}),`
`,e.jsx(i,{}),`
`,e.jsx(l,{}),`
`,e.jsx("div",{className:"notification is-primary is-light sb-unstyled",children:e.jsxs("div",{className:"columns",children:[e.jsxs("div",{className:"column",children:[e.jsx("h3",{className:"subtitle",children:e.jsxs(s.p,{children:["Input format ",e.jsx("code",{children:"options"})]})}),e.jsx("p",{className:"",children:e.jsxs(s.p,{children:["Can send either an array of strings, or an array of objects.",e.jsx("br",{}),`Always
ensure the shape of the array items are consistent.`]})}),e.jsx("p",{className:"",children:"See supported data formats in example story above."}),e.jsxs("p",{className:"",children:["Note: ",e.jsx("code",{children:"option.label"})," contains matched characters wrapped inside ",e.jsx("code",{children:'<span class="h">'})," tags. "]}),e.jsxs("p",{className:"",children:["Note: Highlighted results can be turned off by setting ",e.jsx("code",{children:"highlighted_results"})," property to ",e.jsx("code",{children:"false"})]})]}),e.jsxs("div",{className:"column",children:[e.jsx("h3",{className:"subtitle",children:"Customising dropdown text items"}),e.jsx("p",{className:"",children:"See documentation for default slot."}),e.jsx("h4",{className:"subtitle",children:"Example:"}),e.jsx(t,{language:"jsx",code:r`<AutoComplete
      ...other_options
      let:option>
      <span class="has-text-danger">
        {@html option.label}
      </span>
    </AutoComplete>`})]})]})}),`
`,e.jsx(s.h3,{id:"usage",children:"Usage"}),`
`,e.jsx(s.h4,{id:"import-the-component",children:"Import the component:"}),`
`,e.jsx(t,{code:r`import { AutoComplete } from '@kws3/ui';`}),`
`,e.jsx(s.h4,{id:"import-the-scss",children:"Import the SCSS:"}),`
`,e.jsx(s.p,{children:e.jsx(s.em,{children:"Default values shown as example"})}),`
`,e.jsx(t,{code:r`
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
    `})]})}function X(o={}){const{wrapper:s}={...n(),...o.components};return s?e.jsx(s,{...o,children:e.jsx(a,{...o})}):a(o)}export{X as default};
