var i=Object.freeze,a=Object.defineProperty;var r=(o,n)=>i(a(o,"raw",{value:i(n||o.slice())}));import{j as t,M as u}from"./version-6bd470a9.js";import{M as c,C as p,d as T,e as h}from"./index-b35ce1a0.js";import{B as b}from"./Button.stories-3a619488.js";import{d as f}from"./index-356e4a49.js";import{u as e}from"./index-f20201d2.js";import"./iframe-6321bde4.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";import"./index-349dcf19.js";import"./_getTag-7fd90005.js";import"./uniq-8956f76d.js";import"./RadialChart-07c156ff.js";import"./index-1914c206.js";import"./index-f0c04adc.js";import"./index-8a90618b.js";import"./spread-8a54911c.js";import"./index-af29543d.js";import"./index-81505e0c.js";import"./index-5da554f5.js";import"./index-e13a698e.js";import"./index-150b40f0.js";import"./index-03bbf7d1.js";import"./index-d38bc732.js";import"./frameworkTypes-60e558cb.js";var m;function s(o){const n=Object.assign({h1:"h1",h2:"h2",h3:"h3"},e(),o.components);return t.jsxs(t.Fragment,{children:[t.jsx(u,{}),`
`,t.jsx(n.h1,{id:"submitbutton",children:"SubmitButton"}),`
`,t.jsx(n.h2,{id:"submit-button-with-built-in-confirmation",children:"Submit Button with built-in confirmation."}),`
`,t.jsx(c,{of:b}),`
`,t.jsx(p,{}),`
`,t.jsx(T,{}),`
`,t.jsx(n.h3,{id:"usage",children:"Usage"}),`
`,t.jsx(h,{language:"javascript",code:f(m||(m=r([`<form on:submit|preventDefault={save}>
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
    `])))})]})}function q(o={}){const{wrapper:n}=Object.assign({},e(),o.components);return n?t.jsx(n,Object.assign({},o,{children:t.jsx(s,o)})):s(o)}export{q as default};
