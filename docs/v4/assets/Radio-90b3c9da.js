import{j as o,M as c}from"./version-8c81c218.js";import{u as i}from"./index-88e578b6.js";import{M as a,C as m,e as h,f as s}from"./index-4d8b0680.js";import{d as r}from"./index-356e4a49.js";import"./chunk-MZXVCX43-9b3ada54.js";import{S as d,M as p}from"./Radio.stories-af88c6d2.js";import"./iframe-81bb656e.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-75890171.js";import"./RadialChart-9a800552.js";import"./index-ae6f3512.js";import"./index-4339844e.js";import"./index-ce0c298e.js";import"./index-8cc5c1ab.js";import"./spread-8a54911c.js";import"./index-af29543d.js";import"./index-5da554f5.js";import"./frameworkTypes-6fa5738f.js";function n(e){const t={em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",...i(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(c,{}),`
`,o.jsx(t.h1,{id:"radio",children:"Radio"}),`
`,o.jsx(t.h2,{id:"custom-radio-control",children:"Custom Radio control"}),`
`,o.jsx(a,{of:d}),`
`,o.jsx(m,{of:p}),`
`,o.jsx(h,{}),`
`,o.jsx(t.h3,{id:"usage",children:"Usage"}),`
`,o.jsx(t.h4,{id:"import-the-component",children:"Import the component:"}),`
`,o.jsx(s,{code:r`import { Radio } from '@kws3/ui';`}),`
`,o.jsx(t.h4,{id:"import-the-scss",children:"Import the SCSS:"}),`
`,o.jsx(t.p,{children:o.jsx(t.em,{children:"Default values shown as example"})}),`
`,o.jsx(s,{code:r`
      @use '@kws3/ui/styles/CheckRadio.scss' with (
        $theme-colors: dv.$colors,
        $check-color: cv.getVar("text"),
        $check-color-invert: cv.getVar("text-invert"),
        $border-color: cv.getVar("text"),
        $focus-box-shadow-size: cv.getVar("focus-shadow-size"),
        $focus-box-shadow-color: hsla(
          cv.getVar("focus-h"),
          cv.getVar("focus-s"),
          cv.getVar("focus-l"),
          cv.getVar("focus-shadow-alpha")
        ),
      );
    `})]})}function z(e={}){const{wrapper:t}={...i(),...e.components};return t?o.jsx(t,{...e,children:o.jsx(n,{...e})}):n(e)}export{z as default};
