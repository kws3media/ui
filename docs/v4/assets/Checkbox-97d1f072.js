import{j as o}from"./jsx-runtime-822190ba.js";import{u as n}from"./index-67f97c62.js";import{M as i,C as m,e as h,f as s}from"./index-990f178a.js";import{d as r}from"./index-356e4a49.js";import{M as a}from"./version-847f8cc0.js";import{S as p}from"./Checkbox.stories-5074f8c6.js";import"./iframe-4b7f32ad.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";import"./index-5a8fdfec.js";import"./RadialChart-5b1df549.js";import"./index-ae6f3512.js";import"./index-4339844e.js";import"./index-ce0c298e.js";import"./index-8cc5c1ab.js";import"./spread-8a54911c.js";import"./index-af29543d.js";import"./index-5da554f5.js";import"./frameworkTypes-6fa5738f.js";function c(e){const t={em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",...n(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(a,{}),`
`,o.jsx(t.h1,{id:"checkbox",children:"Checkbox"}),`
`,o.jsx(t.h2,{id:"custom-checkbox-control",children:"Custom checkbox control"}),`
`,o.jsx(i,{of:p}),`
`,o.jsx(m,{}),`
`,o.jsx(h,{}),`
`,o.jsx(t.h3,{id:"usage",children:"Usage"}),`
`,o.jsx(t.h4,{id:"import-the-component",children:"Import the component:"}),`
`,o.jsx(s,{code:r`import { Checkbox } from '@kws3/ui';`}),`
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
    `})]})}function z(e={}){const{wrapper:t}={...n(),...e.components};return t?o.jsx(t,{...e,children:o.jsx(c,{...e})}):c(e)}export{z as default};
