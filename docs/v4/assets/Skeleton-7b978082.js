import{j as t,M as r}from"./version-5c76052d.js";import{u as a}from"./index-a0b883bb.js";import{M as l,P as m,e as c,f as s}from"./index-37ed338a.js";import{d as n}from"./index-356e4a49.js";import{S as p}from"./Skeleton.stories-8b6dfa39.js";import"./iframe-88f54f4e.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-75890171.js";import"./RadialChart-efdf549e.js";import"./index-ae6f3512.js";import"./index-4339844e.js";import"./index-ce0c298e.js";import"./index-8cc5c1ab.js";import"./spread-8a54911c.js";import"./index-af29543d.js";import"./index-5da554f5.js";import"./frameworkTypes-9ac02643.js";function i(e){const o={code:"code",h1:"h1",h2:"h2",h3:"h3",h5:"h5",p:"p",...a(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(r,{}),`
`,t.jsx(o.h1,{id:"skeleton",children:"Skeleton"}),`
`,t.jsx(o.h2,{id:"component-to-display-a-loading-status-as-a-skeleton-of-the-content-to-load",children:"Component to display a loading status as a skeleton of the content to load."}),`
`,t.jsx(l,{of:p}),`
`,t.jsx(m,{}),`
`,t.jsx(c,{}),`
`,t.jsx(o.h3,{id:"usage",children:"Usage"}),`
`,t.jsx(o.h5,{id:"import-the-component",children:"Import the component:"}),`
`,t.jsx(s,{code:n`import { Skeleton } from '@kws3/ui';`}),`
`,t.jsxs(o.p,{children:["It is possible to let this component mimic the appearance of Bulma elements if you attach an appropriate CSS class to the ",t.jsx(o.code,{children:"class"}),` property.
For example:`]}),`
`,t.jsx(s,{language:"html",code:n`
  <!--Displays like a button-->
  <Skeleton class="button" color="primary" />
  <!--Displays like a input-->
  <Skeleton class="input" />
  <!--Displays like a box-->
  <Skeleton class="box" />
  `}),`
`,t.jsx(o.h5,{id:"import-the-css",children:"Import the CSS:"}),`
`,t.jsx(s,{code:n`@import '@kws3/ui/styles/Skeleton.scss';`}),`
`,t.jsx(o.h5,{id:"scss-customization-variables-with-default-values",children:"SCSS customization variables with default values:"}),`
`,t.jsx(s,{language:"css",code:n`
    $kws-theme-colors: $colors;
    $kws-skeleton-color: lighten($text, 60%);
    $kws-skeleton-hilight-color: lighten($text, 65%);
  `})]})}function I(e={}){const{wrapper:o}={...a(),...e.components};return o?t.jsx(o,{...e,children:t.jsx(i,{...e})}):i(e)}export{I as default};
