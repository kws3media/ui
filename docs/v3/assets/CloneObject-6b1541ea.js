import{j as n,M as r}from"./version-6bd470a9.js";import{M as c,b as i}from"./index-b35ce1a0.js";import{S as j,M as m}from"./CloneObject.stories-86b11114.js";import{u as s}from"./index-f20201d2.js";import"./iframe-6321bde4.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";import"./index-349dcf19.js";import"./_getTag-7fd90005.js";import"./uniq-8956f76d.js";import"./index-356e4a49.js";import"./index-1914c206.js";import"./index-81505e0c.js";function t(o){const e=Object.assign({h3:"h3",p:"p",code:"code",strong:"strong",pre:"pre"},s(),o.components);return n.jsxs(n.Fragment,{children:[n.jsx(r,{}),`
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
`,n.jsx(i,{of:m})]})}function D(o={}){const{wrapper:e}=Object.assign({},s(),o.components);return e?n.jsx(e,Object.assign({},o,{children:n.jsx(t,o)})):t(o)}export{D as default};
