import{j as n}from"./jsx-runtime-15806eb5.js";import{u as r}from"./index-0b532f45.js";import{ae as s,ag as c}from"./index-3f41c45d.js";import{M as i}from"./version-fd7ab27b.js";import{S as j,M as m}from"./CloneObject.stories-0370bbae.js";import"./iframe-d03f20d9.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";import"./index-65ec3394.js";import"./index-356e4a49.js";import"./index-ae6f3512.js";import"./index-8cc5c1ab.js";function t(o){const e={code:"code",h3:"h3",p:"p",pre:"pre",strong:"strong",...r(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{}),`
`,n.jsx(s,{of:j}),`
`,n.jsx(e.h3,{id:"cloneobject",children:"CloneObject"}),`
`,n.jsxs(e.p,{children:["The ",n.jsx(e.code,{children:"cloneObject"})," function is used to clone any js object."]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Parameter:"}),`
`,n.jsx(e.code,{children:"object"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`import { cloneObject } from "@kws3/ui/utils";
let obj = {
  title: "Mr",
  name: "User",
};

$: clone = cloneObject(obj);
`})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Example:"})}),`
`,n.jsx(c,{of:m})]})}function D(o={}){const{wrapper:e}={...r(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(t,{...o})}):t(o)}export{D as default};
