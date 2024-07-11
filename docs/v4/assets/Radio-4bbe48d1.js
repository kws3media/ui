import{j as o}from"./jsx-runtime-593b36f9.js";import{u as i}from"./index-a6b36cb5.js";import{M as c,C as a,e as m,f as e}from"./index-5adacd09.js";import{d as s}from"./index-356e4a49.js";import{M as h}from"./version-69ab0678.js";import"./chunk-MZXVCX43-9b3ada54.js";import{S as p,M as d}from"./Radio.stories-d1b79573.js";import"./iframe-649ff2ef.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";import"./index-5a8fdfec.js";import"./RadialChart-a46fe6c5.js";import"./index-ae6f3512.js";import"./index-4339844e.js";import"./index-ce0c298e.js";import"./index-8cc5c1ab.js";import"./spread-8a54911c.js";import"./index-af29543d.js";import"./index-5da554f5.js";import"./frameworkTypes-6fa5738f.js";function n(r){const t={em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",...i(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(h,{}),`
`,o.jsx(t.h1,{id:"radio",children:"Radio"}),`
`,o.jsx(t.h2,{id:"custom-radio-control",children:"Custom Radio control"}),`
`,o.jsx(c,{of:p}),`
`,o.jsx(a,{of:d}),`
`,o.jsx(m,{}),`
`,o.jsx(t.h3,{id:"usage",children:"Usage"}),`
`,o.jsx(t.h4,{id:"import-the-component",children:"Import the component:"}),`
`,o.jsx(e,{code:s`import { Radio } from '@kws3/ui';`}),`
`,o.jsx(t.h4,{id:"import-the-scss",children:"Import the SCSS:"}),`
`,o.jsx(t.p,{children:o.jsx(t.em,{children:"Default values shown as example"})}),`
`,o.jsx(e,{code:s`
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
    `})]})}function I(r={}){const{wrapper:t}={...i(),...r.components};return t?o.jsx(t,{...r,children:o.jsx(n,{...r})}):n(r)}export{I as default};
