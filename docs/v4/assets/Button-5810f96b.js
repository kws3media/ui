var i=Object.freeze,a=Object.defineProperty;var r=(o,n)=>i(a(o,"raw",{value:i(n||o.slice())}));import{j as t}from"./jsx-runtime-395e6f4a.js";import{u as e}from"./index-f84756d5.js";import{ae as u,af as c,ah as p,ai as h}from"./index-36797c46.js";import{B as f}from"./Button.stories-e93537d2.js";import{d as T}from"./index-356e4a49.js";import{M as l}from"./version-80223c14.js";import"./iframe-bc6190dd.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";import"./index-65ec3394.js";import"./RadialChart-ecf50d11.js";import"./index-ae6f3512.js";import"./index-4339844e.js";import"./index-ce0c298e.js";import"./index-8cc5c1ab.js";import"./spread-8a54911c.js";import"./index-af29543d.js";import"./index-5da554f5.js";import"./index-8f8201f3.js";import"./index-8d1e987c.js";import"./frameworkTypes-6fa5738f.js";var s;function m(o){const n={h1:"h1",h2:"h2",h3:"h3",...e(),...o.components};return t.jsxs(t.Fragment,{children:[t.jsx(l,{}),`
`,t.jsx(n.h1,{id:"submitbutton",children:"SubmitButton"}),`
`,t.jsx(n.h2,{id:"submit-button-with-built-in-confirmation",children:"Submit Button with built-in confirmation."}),`
`,t.jsx(u,{of:f}),`
`,t.jsx(c,{}),`
`,t.jsx(p,{}),`
`,t.jsx(n.h3,{id:"usage",children:"Usage"}),`
`,t.jsx(h,{language:"html",code:T(s||(s=r([`<form on:submit|preventDefault={save}>
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
    `])))})]})}function L(o={}){const{wrapper:n}={...e(),...o.components};return n?t.jsx(n,{...o,children:t.jsx(m,{...o})}):m(o)}export{L as default};
