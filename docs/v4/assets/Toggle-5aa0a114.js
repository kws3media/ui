import{j as t,M as m}from"./version-d179474b.js";import{u as i}from"./index-e8df77e3.js";import{M as c,C as a,e as p,f as r}from"./index-23db0581.js";import{d as n}from"./index-356e4a49.js";import{S as h,M as l}from"./Toggle.stories-34eb7bad.js";import"./iframe-c2c5aa08.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-75890171.js";import"./RadialChart-af010aa6.js";import"./index-ae6f3512.js";import"./index-4339844e.js";import"./index-ce0c298e.js";import"./index-8cc5c1ab.js";import"./spread-8a54911c.js";import"./index-af29543d.js";import"./index-5da554f5.js";import"./frameworkTypes-6fa5738f.js";function s(e){const o={em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",...i(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(m,{}),`
`,t.jsx(o.h1,{id:"toggle",children:"Toggle"}),`
`,t.jsx(o.h2,{id:"toggle-button-with-text-supports",children:"Toggle button with text supports"}),`
`,t.jsx(c,{of:h}),`
`,t.jsx(a,{of:l}),`
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
    `})]})}function y(e={}){const{wrapper:o}={...i(),...e.components};return o?t.jsx(o,{...e,children:t.jsx(s,{...e})}):s(e)}export{y as default};
