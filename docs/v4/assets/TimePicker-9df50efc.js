import{j as t}from"./jsx-runtime-7ced2cd4.js";import{u as n}from"./index-1e098026.js";import{ae as m,af as a,ah as c,ai as o}from"./index-ea933ae1.js";import{d as i}from"./index-356e4a49.js";import{M as p}from"./version-31399cf6.js";import{S as h}from"./TimePicker.stories-58ea2b18.js";import"./iframe-54810192.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";import"./index-65ec3394.js";import"./RadialChart-fd6d98ed.js";import"./index-ae6f3512.js";import"./index-4339844e.js";import"./index-ce0c298e.js";import"./index-8cc5c1ab.js";import"./spread-8a54911c.js";import"./index-af29543d.js";import"./index-5da554f5.js";import"./frameworkTypes-6fa5738f.js";function r(s){const e={em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",...n(),...s.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{}),`
`,t.jsx(e.h1,{id:"timepicker",children:"Timepicker"}),`
`,t.jsx(e.h2,{id:"timepicker-component-that-allows-you-to-select-time",children:"Timepicker component that allows you to select time."}),`
`,t.jsx(m,{of:h}),`
`,t.jsx(a,{}),`
`,t.jsx(c,{}),`
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
    `})]})}function T(s={}){const{wrapper:e}={...n(),...s.components};return e?t.jsx(e,{...s,children:t.jsx(r,{...s})}):r(s)}export{T as default};
