import{j as t,M as m}from"./version-d179474b.js";import{u as n}from"./index-e8df77e3.js";import{M as c,C as a,e as p,f as o}from"./index-23db0581.js";import{d as i}from"./index-356e4a49.js";import{S as h}from"./TimePicker.stories-b0b72018.js";import"./iframe-c2c5aa08.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-75890171.js";import"./RadialChart-af010aa6.js";import"./index-ae6f3512.js";import"./index-4339844e.js";import"./index-ce0c298e.js";import"./index-8cc5c1ab.js";import"./spread-8a54911c.js";import"./index-af29543d.js";import"./index-5da554f5.js";import"./frameworkTypes-6fa5738f.js";function r(s){const e={em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",...n(),...s.components};return t.jsxs(t.Fragment,{children:[t.jsx(m,{}),`
`,t.jsx(e.h1,{id:"timepicker",children:"Timepicker"}),`
`,t.jsx(e.h2,{id:"timepicker-component-that-allows-you-to-select-time",children:"Timepicker component that allows you to select time."}),`
`,t.jsx(c,{of:h}),`
`,t.jsx(a,{}),`
`,t.jsx(p,{}),`
`,t.jsx(e.h3,{id:"usage",children:"Usage"}),`
`,t.jsx(e.h4,{id:"import-the-scss",children:"Import the SCSS:"}),`
`,t.jsxs("div",{className:"notification is-warning",children:[t.jsx("strong",{children:"Note:"}),t.jsx("em",{children:" Need to import flatpicker SCSS file first"})]}),`
`,t.jsx(o,{code:i`
    @use 'flatpickr/dist/flatpickr';`}),`
`,t.jsx(e.h4,{id:"import-the-scss-1",children:"Import the SCSS:"}),`
`,t.jsx(e.p,{children:t.jsx(e.em,{children:"Default values shown as example"})}),`
`,t.jsx(o,{code:i`
      @use '@kws3/ui/styles/Timepicker.scss' with (
        $theme-colors: dv.$colors,
        $background: cv.getVar("scheme-main-ter"),
        $text: cv.getVar("text"),
        $shadow: cv.getVar("shadow"),
        $radius: cv.getVar("radius"),
      );
    `})]})}function N(s={}){const{wrapper:e}={...n(),...s.components};return e?t.jsx(e,{...s,children:t.jsx(r,{...s})}):r(s)}export{N as default};
