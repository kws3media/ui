var i=Object.freeze,a=Object.defineProperty;var r=(o,n)=>i(a(o,"raw",{value:i(n||o.slice())}));import{j as t,M as u}from"./version-36e7533e.js";import{u as e}from"./index-106c01c9.js";import{M as c,C as p,e as h,f as T}from"./index-cb4e5ec9.js";import{B as f}from"./Button.stories-610752d5.js";import{d as l}from"./index-356e4a49.js";import"./iframe-bdeabeba.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-75890171.js";import"./RadialChart-19f46828.js";import"./index-ae6f3512.js";import"./index-4339844e.js";import"./index-ce0c298e.js";import"./index-8cc5c1ab.js";import"./spread-8a54911c.js";import"./index-af29543d.js";import"./index-5da554f5.js";import"./index-b7fffc4c.js";import"./frameworkTypes-60e558cb.js";var m;function s(o){const n={h1:"h1",h2:"h2",h3:"h3",...e(),...o.components};return t.jsxs(t.Fragment,{children:[t.jsx(u,{}),`
`,t.jsx(n.h1,{id:"submitbutton",children:"SubmitButton"}),`
`,t.jsx(n.h2,{id:"submit-button-with-built-in-confirmation",children:"Submit Button with built-in confirmation."}),`
`,t.jsx(c,{of:f}),`
`,t.jsx(p,{}),`
`,t.jsx(h,{}),`
`,t.jsx(n.h3,{id:"usage",children:"Usage"}),`
`,t.jsx(T,{language:"html",code:l(m||(m=r([`<form on:submit|preventDefault={save}>
      <SubmitButton bind:this={BUTTON_STATE} />
    </form>
    <script>
      import { SubmitButton } from '@kws3/buttons';
      let BUTTON_STATE;
      function save(e){
        BUTTON_STATE.saving();
        somepromise.then((r) => {
          BUTTON_STATE.saved(() => {
            //some callback function
          }, 1000);
        })
        .catch((r) => {
          BUTTON_STATE.error(() => {
            //some callback function
          }, 1000);
        })
      }
    <\/script>
    `])))})]})}function y(o={}){const{wrapper:n}={...e(),...o.components};return n?t.jsx(n,{...o,children:t.jsx(s,{...o})}):s(o)}export{y as default};
