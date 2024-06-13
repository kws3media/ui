import{j as o,M as a}from"./version-f6a9f08d.js";import{u as i}from"./index-5b876d48.js";import{M as m,C as l,e as c,f as e}from"./index-564c5f40.js";import{d as n}from"./index-356e4a49.js";import{S as p}from"./Toasts.stories-f6fea191.js";import"./iframe-6387451d.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-75890171.js";import"./index-ae6f3512.js";import"./RadialChart-d4ecf1af.js";import"./index-4339844e.js";import"./index-ce0c298e.js";import"./index-8cc5c1ab.js";import"./spread-8a54911c.js";import"./index-af29543d.js";import"./index-5da554f5.js";import"./frameworkTypes-9ac02643.js";function r(t){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",h5:"h5",pre:"pre",...i(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(a,{}),`
`,o.jsx(s.h1,{id:"toasts",children:"Toasts"}),`
`,o.jsx(s.h2,{id:"toasts-components-for-showing-floating-alerts",children:"Toasts components for showing floating alerts."}),`
`,o.jsx(m,{of:p}),`
`,o.jsx(l,{}),`
`,o.jsx(c,{}),`
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
`,o.jsx(e,{code:n`@import 'path/to/node_modules/@kws3/ui/styles/FloatingUI.scss';`}),`
`,o.jsx(s.h5,{id:"scss-customization-variables-with-default-values",children:"SCSS customization variables with default values:"}),`
`,o.jsx(e,{language:"css",code:n`
    $kws-theme-colors: $colors;
    $kws3-floating-item-width: 30rem;
  `})]})}function $(t={}){const{wrapper:s}={...i(),...t.components};return s?o.jsx(s,{...t,children:o.jsx(r,{...t})}):r(t)}export{$ as default};
