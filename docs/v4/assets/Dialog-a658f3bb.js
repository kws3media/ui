import{j as e,M as r}from"./version-0f749014.js";import{u as i}from"./index-0fa0a3da.js";import{M as a,C as s,e as l,f as m}from"./index-08c8c852.js";import{d as c}from"./index-356e4a49.js";import{S as h}from"./Dialog.stories-3890aa68.js";import"./iframe-43c2c643.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-75890171.js";import"./RadialChart-5195f56d.js";import"./index-ae6f3512.js";import"./index-4339844e.js";import"./index-ce0c298e.js";import"./index-8cc5c1ab.js";import"./spread-8a54911c.js";import"./index-af29543d.js";import"./index-5da554f5.js";import"./index-a879be0d.js";import"./frameworkTypes-60e558cb.js";function n(o){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",...i(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{}),`
`,e.jsx(t.h1,{id:"dialog",children:"Dialog"}),`
`,e.jsx(t.h2,{id:"message-components-for-showing-alerts",children:"Message components for showing alerts."}),`
`,e.jsx(a,{of:h}),`
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
`,e.jsx(m,{code:c`
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
  `})]})}function P(o={}){const{wrapper:t}={...i(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(n,{...o})}):n(o)}export{P as default};
