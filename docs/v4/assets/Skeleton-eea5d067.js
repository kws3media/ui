import{j as t,M as i}from"./version-b0b5f48d.js";import{u as a}from"./index-41ab6891.js";import{M as l,P as m,e as p,f as s}from"./index-045aef30.js";import{d as n}from"./index-356e4a49.js";import{S as c}from"./Skeleton.stories-3844c4a9.js";import"./iframe-0d8aea47.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-75890171.js";import"./RadialChart-0c9d9241.js";import"./index-ae6f3512.js";import"./index-4339844e.js";import"./index-ce0c298e.js";import"./index-8cc5c1ab.js";import"./spread-8a54911c.js";import"./index-af29543d.js";import"./index-5da554f5.js";import"./frameworkTypes-9ac02643.js";function r(e){const o={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",p:"p",...a(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(i,{}),`
`,t.jsx(o.h1,{id:"skeleton",children:"Skeleton"}),`
`,t.jsx(o.h2,{id:"component-to-display-a-loading-status-as-a-skeleton-of-the-content-to-load",children:"Component to display a loading status as a skeleton of the content to load."}),`
`,t.jsx(l,{of:c}),`
`,t.jsx(m,{}),`
`,t.jsx(p,{}),`
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
`,t.jsx(o.h4,{id:"import-the-scss",children:"Import the SCSS:"}),`
`,t.jsx(o.p,{children:t.jsx(o.em,{children:"Default values shown as example"})}),`
`,t.jsx(s,{code:n`
    @use '@kws3/ui/styles/DataSort.scss' with (
      $theme-colors: $colors !default;
      $color: cv.getVar("text-90");
      $hilight-color: cv.getVar("text-100") !default;
    );
    `})]})}function I(e={}){const{wrapper:o}={...a(),...e.components};return o?t.jsx(o,{...e,children:t.jsx(r,{...e})}):r(e)}export{I as default};
