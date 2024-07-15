import{j as t}from"./jsx-runtime-b9f2f282.js";import{u as i}from"./index-99bc58a8.js";import{M as m,C as c,e as p,f as r}from"./index-59a8ee7e.js";import{d as n}from"./index-356e4a49.js";import{M as a}from"./version-ea14a979.js";import{S as h,M as l}from"./Toggle.stories-35fac595.js";import"./iframe-55e7f7a7.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";import"./index-5a8fdfec.js";import"./RadialChart-08c37f4d.js";import"./index-ae6f3512.js";import"./index-4339844e.js";import"./index-ce0c298e.js";import"./index-8cc5c1ab.js";import"./spread-8a54911c.js";import"./index-af29543d.js";import"./index-5da554f5.js";import"./frameworkTypes-6fa5738f.js";function s(e){const o={em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",...i(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(a,{}),`
`,t.jsx(o.h1,{id:"toggle",children:"Toggle"}),`
`,t.jsx(o.h2,{id:"toggle-button-with-text-supports",children:"Toggle button with text supports"}),`
`,t.jsx(m,{of:h}),`
`,t.jsx(c,{of:l}),`
`,t.jsx(p,{}),`
`,t.jsx(o.h3,{id:"usage",children:"Usage"}),`
`,t.jsx(o.h4,{id:"import-the-component",children:"Import the component:"}),`
`,t.jsx(r,{code:n`import { Toggle } from '@kws3/ui';`}),`
`,t.jsx(o.h4,{id:"import-the-scss",children:"Import the SCSS:"}),`
`,t.jsx(o.p,{children:t.jsx(o.em,{children:"Default values shown as example"})}),`
`,t.jsx(r,{code:n`
      @use '@kws3/ui/styles/Toggle.scss' with(
        $theme-colors: dv.$colors,
        $off-bg-color: cv.getVar("border-weak"),
        $handle-bg-color: cv.getVar("text-40-invert"),
        $track-bg-color: cv.getVar("text"),
        $track-bg-color-invert: cv.getVar("text-invert"),
        $border-color: cv.getVar("border"),
      );
    `})]})}function I(e={}){const{wrapper:o}={...i(),...e.components};return o?t.jsx(o,{...e,children:t.jsx(s,{...e})}):s(e)}export{I as default};
