import{j as t,M as a}from"./version-6f0519c4.js";import{u as n}from"./index-f60da153.js";import{M as h,C as m,e as d,f as e}from"./index-541e97f1.js";import{d as i}from"./index-356e4a49.js";import{S as c,M as p}from"./Loader.stories-782b6660.js";import"./iframe-2486359f.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-75890171.js";import"./RadialChart-0ae793e3.js";import"./index-ae6f3512.js";import"./index-4339844e.js";import"./index-ce0c298e.js";import"./index-8cc5c1ab.js";import"./spread-8a54911c.js";import"./index-af29543d.js";import"./index-5da554f5.js";import"./frameworkTypes-6fa5738f.js";function r(s){const o={h1:"h1",h2:"h2",h3:"h3",h5:"h5",...n(),...s.components};return t.jsxs(t.Fragment,{children:[t.jsx(a,{}),`
`,t.jsx(o.h1,{id:"loader",children:"Loader"}),`
`,t.jsx(o.h2,{id:"graphic-to-display-a-loading-status-to-users",children:"Graphic to display a loading status to users."}),`
`,t.jsx(h,{of:c}),`
`,t.jsx(m,{of:p}),`
`,t.jsx(d,{}),`
`,t.jsx(o.h3,{id:"usage",children:"Usage"}),`
`,t.jsx(o.h5,{id:"import-the-component",children:"Import the component:"}),`
`,t.jsx(e,{code:i`import { Loader } from '@kws3/ui';`}),`
`,t.jsx(o.h5,{id:"import-the-css",children:"Import the CSS:"}),`
`,t.jsx(e,{code:i`@use '@kws3/ui/styles/Loader.scss';`}),`
`,t.jsx(o.h5,{id:"scss-customization-variables-with-default-values",children:"SCSS customization variables with default values:"}),`
`,t.jsx(e,{code:i`
    @use '@kws3/ui/styles/Loader.scss' with(
      $theme-colors: dv.$colors,
      $width: 2rem,
      $height: 2rem,
      $width-medium: ($width * 1.5),
      $height-medium: ($height * 1.5),
      $width-large: ($width * 3),
      $height-large: ($height * 3),
      $color: cv.getVar("text"),
      $overlay-background: rgba(0, 0, 0, 0.15),
    );
  `})]})}function z(s={}){const{wrapper:o}={...n(),...s.components};return o?t.jsx(o,{...s,children:t.jsx(r,{...s})}):r(s)}export{z as default};
