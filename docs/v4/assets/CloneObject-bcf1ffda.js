import{j as n,M as s}from"./version-d179474b.js";import{u as r}from"./index-e8df77e3.js";import{M as c,d as i}from"./index-23db0581.js";import{S as j,M as m}from"./CloneObject.stories-0b6ca5b6.js";import"./iframe-c2c5aa08.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-75890171.js";import"./index-356e4a49.js";import"./index-ae6f3512.js";import"./index-8cc5c1ab.js";function t(o){const e={code:"code",h3:"h3",p:"p",pre:"pre",strong:"strong",...r(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{}),`
`,n.jsx(c,{of:j}),`
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
`,n.jsx(i,{of:m})]})}function C(o={}){const{wrapper:e}={...r(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(t,{...o})}):t(o)}export{C as default};
