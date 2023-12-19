import{j as t,M as r}from"./version-6bd470a9.js";import{M as l,P as c,d as p,e as s}from"./index-b35ce1a0.js";import{d as n}from"./index-356e4a49.js";import{S as m}from"./Skeleton.stories-869beca5.js";import{u as a}from"./index-f20201d2.js";import"./iframe-6321bde4.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";import"./index-349dcf19.js";import"./_getTag-7fd90005.js";import"./uniq-8956f76d.js";import"./RadialChart-07c156ff.js";import"./index-1914c206.js";import"./index-f0c04adc.js";import"./index-8a90618b.js";import"./spread-8a54911c.js";import"./index-af29543d.js";import"./index-81505e0c.js";import"./index-5da554f5.js";import"./frameworkTypes-60e558cb.js";function i(e){const o=Object.assign({h1:"h1",h2:"h2",h3:"h3",h5:"h5",p:"p",code:"code"},a(),e.components);return t.jsxs(t.Fragment,{children:[t.jsx(r,{}),`
`,t.jsx(o.h1,{id:"skeleton",children:"Skeleton"}),`
`,t.jsx(o.h2,{id:"component-to-display-a-loading-status-as-a-skeleton-of-the-content-to-load",children:"Component to display a loading status as a skeleton of the content to load."}),`
`,t.jsx(l,{of:m}),`
`,t.jsx(c,{}),`
`,t.jsx(p,{}),`
`,t.jsx(o.h3,{id:"usage",children:"Usage"}),`
`,t.jsx(o.h5,{id:"import-the-component",children:"Import the component:"}),`
`,t.jsx(s,{language:"javascript",code:n`import { Skeleton } from '@kws3/ui';`}),`
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
`,t.jsx(s,{language:"javascript",code:n`@import '@kws3/ui/styles/Skeleton.scss';`}),`
`,t.jsx(o.h5,{id:"scss-customization-variables-with-default-values",children:"SCSS customization variables with default values:"}),`
`,t.jsx(s,{language:"css",code:n`
    $kws-theme-colors: $colors;
    $kws-skeleton-color: lighten($text, 60%);
    $kws-skeleton-hilight-color: lighten($text, 65%);
  `})]})}function z(e={}){const{wrapper:o}=Object.assign({},a(),e.components);return o?t.jsx(o,Object.assign({},e,{children:t.jsx(i,e)})):i(e)}export{z as default};
