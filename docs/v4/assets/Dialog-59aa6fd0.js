import{j as e}from"./jsx-runtime-7ced2cd4.js";import{u as n}from"./index-1e098026.js";import{ae as r,af as a,ah as s,ai as l}from"./index-ea933ae1.js";import{d as m}from"./index-356e4a49.js";import{M as c}from"./version-31399cf6.js";import{S as h}from"./Dialog.stories-618cc9c5.js";import"./iframe-54810192.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";import"./index-65ec3394.js";import"./RadialChart-fd6d98ed.js";import"./index-ae6f3512.js";import"./index-4339844e.js";import"./index-ce0c298e.js";import"./index-8cc5c1ab.js";import"./spread-8a54911c.js";import"./index-af29543d.js";import"./index-5da554f5.js";import"./index-c72382a4.js";import"./frameworkTypes-6fa5738f.js";function i(o){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",...n(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{}),`
`,e.jsx(t.h1,{id:"dialog",children:"Dialog"}),`
`,e.jsx(t.h2,{id:"message-components-for-showing-alerts",children:"Message components for showing alerts."}),`
`,e.jsx(r,{of:h}),`
`,e.jsx(a,{}),`
`,e.jsx(s,{}),`
`,e.jsx(t.p,{children:"The signature of the helper functions are almost identical to their native counterparts."}),`
`,e.jsx(t.p,{children:"The main differences are:"}),`
`,e.jsxs(t.ol,{children:[`
`,e.jsxs(t.li,{children:["They return a ",e.jsx(t.code,{children:"Promise"}),". The ",e.jsx(t.code,{children:"Promise"})," fulfils with the same values as the native functions."]}),`
`,e.jsx(t.li,{children:"They accept an extra argument with a configuration object"}),`
`]}),`
`,e.jsx(t.p,{children:"Valid values for the configuration object are in the table above."}),`
`,e.jsx(t.h3,{id:"usage",children:"Usage"}),`
`,e.jsx(l,{code:m`
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
  `})]})}function A(o={}){const{wrapper:t}={...n(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(i,{...o})}):i(o)}export{A as default};
