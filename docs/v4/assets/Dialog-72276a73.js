import{j as e,M as r}from"./version-8579e5b6.js";import{M as a,C as s,d as l,e as m}from"./index-8a78b23d.js";import{d as c}from"./index-356e4a49.js";import{S as p}from"./Dialog.stories-cb11838d.js";import{u as n}from"./index-af723c2c.js";import"./iframe-47ba6b62.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";import"./index-349dcf19.js";import"./_getTag-7fd90005.js";import"./uniq-8956f76d.js";import"./RadialChart-f10ed086.js";import"./index-9bc519a8.js";import"./index-c009752d.js";import"./index-87030aea.js";import"./index-8cc5c1ab.js";import"./spread-8a54911c.js";import"./index-af29543d.js";import"./index-5da554f5.js";import"./index-20f5e828.js";import"./frameworkTypes-60e558cb.js";function i(o){const t=Object.assign({h1:"h1",h2:"h2",p:"p",ol:"ol",li:"li",code:"code",h3:"h3"},n(),o.components);return e.jsxs(e.Fragment,{children:[e.jsx(r,{}),`
`,e.jsx(t.h1,{id:"dialog",children:"Dialog"}),`
`,e.jsx(t.h2,{id:"message-components-for-showing-alerts",children:"Message components for showing alerts."}),`
`,e.jsx(a,{of:p}),`
`,e.jsx(s,{}),`
`,e.jsx(l,{}),`
`,e.jsx(t.p,{children:"The signature of the helper functions are almost identical to their native counterparts."}),`
`,e.jsx(t.p,{children:"The main differences are:"}),`
`,e.jsxs(t.ol,{children:[`
`,e.jsxs(t.li,{children:["They return a ",e.jsx(t.code,{children:"Promise"}),". The ",e.jsx(t.code,{children:"Promise"})," fulfils with the same values as the native functions."]}),`
`,e.jsx(t.li,{children:"They accept an extra argument with a configuration object"}),`
`]}),`
`,e.jsx(t.p,{children:"Valid values for the configuration object are in the table above."}),`
`,e.jsx(t.h3,{id:"usage",children:"Usage"}),`
`,e.jsx(m,{language:"javascript",code:c`
  import { Dialog } from '@kws3/ui';
  //---
  //alert example
  let alert_done = await Dialog.alert('This is an alert', {title: "someTitle"});
  //---
  //confirm example
  let accepted = await Dialog.confirm("Agree with everything?", {ok_button_text: "Yes", cancel_button_text: "No"})
  //---
  //prompt example
  let age = await Dialog.prompt("How old are you?");
  `})]})}function A(o={}){const{wrapper:t}=Object.assign({},n(),o.components);return t?e.jsx(t,Object.assign({},o,{children:e.jsx(i,o)})):i(o)}export{A as default};
