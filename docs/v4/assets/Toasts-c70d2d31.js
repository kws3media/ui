import{j as o,M as a}from"./version-8579e5b6.js";import{M as m,C as c,d as l,e}from"./index-8a78b23d.js";import{d as n}from"./index-356e4a49.js";import{S as p}from"./Toasts.stories-a8676bfb.js";import{u as i}from"./index-af723c2c.js";import"./iframe-47ba6b62.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";import"./index-349dcf19.js";import"./_getTag-7fd90005.js";import"./uniq-8956f76d.js";import"./index-9bc519a8.js";import"./RadialChart-f10ed086.js";import"./index-c009752d.js";import"./index-87030aea.js";import"./index-8cc5c1ab.js";import"./spread-8a54911c.js";import"./index-af29543d.js";import"./index-5da554f5.js";import"./frameworkTypes-60e558cb.js";function r(t){const s=Object.assign({h1:"h1",h2:"h2",h3:"h3",pre:"pre",code:"code",h5:"h5"},i(),t.components);return o.jsxs(o.Fragment,{children:[o.jsx(a,{}),`
`,o.jsx(s.h1,{id:"toasts",children:"Toasts"}),`
`,o.jsx(s.h2,{id:"toasts-components-for-showing-floating-alerts",children:"Toasts components for showing floating alerts."}),`
`,o.jsx(m,{of:p}),`
`,o.jsx(c,{}),`
`,o.jsx(l,{}),`
`,o.jsx(s.h3,{id:"usage",children:"Usage"}),`
`,o.jsx(s.pre,{children:o.jsx(s.code,{className:"language-js",children:`import { Toasts } from '@kws3/ui';

// Push toast like this
let {props, destroy} = Toasts.create({
  message: "I am a toast, butter me!...",
  position: "top",
  color: "info",
  beforeClose: (props) => {
    //do something here before close
  },
  afterClose: (props) => {
    //do something here after close
  },
});

// toast will close after duration expires
// or you can close it manually like this:
destroy();

//you can also close it like this:
Toasts.remove(props);
//where \`props\` is the from the output of Toasts.create()
`})}),`
`,o.jsx(s.h5,{id:"import-the-css",children:"Import the CSS:"}),`
`,o.jsx(e,{language:"javascript",code:n`@import 'path/to/node_modules/@kws3/ui/styles/FloatingUI.scss';`}),`
`,o.jsx(s.h5,{id:"scss-customization-variables-with-default-values",children:"SCSS customization variables with default values:"}),`
`,o.jsx(e,{language:"css",code:n`
    $kws-theme-colors: $colors;
    $kws3-floating-item-width: 30rem;
  `})]})}function O(t={}){const{wrapper:s}=Object.assign({},i(),t.components);return s?o.jsx(s,Object.assign({},t,{children:o.jsx(r,t)})):r(t)}export{O as default};
