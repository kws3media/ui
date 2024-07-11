var a=Object.freeze,d=Object.defineProperty;var n=(e,t)=>a(d(e,"raw",{value:a(t||e.slice())}));import{j as o}from"./jsx-runtime-593b36f9.js";import{u as m}from"./index-a6b36cb5.js";import{M as p,C as x,e as u,f as r}from"./index-5adacd09.js";import{B as h}from"./Button.stories-14d2110b.js";import{d as i}from"./index-356e4a49.js";import{M as f}from"./version-69ab0678.js";import"./iframe-649ff2ef.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";import"./index-5a8fdfec.js";import"./RadialChart-a46fe6c5.js";import"./index-ae6f3512.js";import"./index-4339844e.js";import"./index-ce0c298e.js";import"./index-8cc5c1ab.js";import"./spread-8a54911c.js";import"./index-af29543d.js";import"./index-5da554f5.js";import"./index-b7fffc4c.js";import"./frameworkTypes-6fa5738f.js";var s,l;function c(e){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",...m(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(f,{}),`
`,o.jsx(t.h1,{id:"confirmbutton",children:"ConfirmButton"}),`
`,o.jsx(t.h2,{id:"confirm-button-with-built-in-confirmation",children:"Confirm Button with built-in confirmation."}),`
`,o.jsx(p,{of:h}),`
`,o.jsx(x,{}),`
`,o.jsx(u,{}),`
`,o.jsx(t.h3,{id:"example-source-code",children:"Example source code"}),`
`,o.jsx(r,{language:"html",code:i`<ConfirmButton text="Do It?" color="primary" size="small" icon_only="true" disabled="false" />`}),`
`,o.jsx(t.h3,{id:"usage-example",children:"Usage Example"}),`
`,o.jsx(r,{language:"html",code:i(s||(s=n([`
    <ConfirmButton
      {color}
      {disabled}
      {size}
      {icon_only}
      {text}
      {icon}
      {doing_icon}
      {done_icon}
      {doing_text}
      {done_text}
      on:do={confirmDo}
    />
    <script>
      import { ConfirmButton } from '@kws3/buttons';
      export let color = "primary";
      export let disabled = false;
      export let size = "";
      export let icon_only = false;
      export let text = "Do it?";
      export let icon = "minus-circle";
      export let doing_icon = "hourglass";
      export let done_icon = "check";
      export let doing_text = "Doing";
      export let done_text = "Done";
      function confirmDo(event){
        let {doing, done, error} = event.detail;
        doing();
        somePromise().then(() => {
          //set visual state to Done
          //it will autmatically revert back to
          //normal state after "completion_timeout"
          done();
        })
        .catch(() => {
          //set visual state to Error
          //it will autmatically revert back to
          //normal state after "completion_timeout"
          error();
        });        
      }
    <\/script>`])))}),`
`,o.jsxs(t.p,{children:[o.jsx(t.code,{children:"done()"})," and ",o.jsx(t.code,{children:"error()"})," can take an optional callback function, and an extra ",o.jsx(t.code,{children:"timeout"})," parameter that overrides the ",o.jsx(t.code,{children:"completion_timeout"})," property."]}),`
`,o.jsx(r,{language:"html",code:i(l||(l=n([`
    <script>
      function confirmDo(event){
        let {doing, done, error} = event.detail;
        doing();
        somePromise().then(() => {
          done(() => {
            //some callback
          }, 500);
        })
        .catch(() => {
          error(() => {
            //some callback
          }, 500);
        });
      }
    <\/script>`])))})]})}function U(e={}){const{wrapper:t}={...m(),...e.components};return t?o.jsx(t,{...e,children:o.jsx(c,{...e})}):c(e)}export{U as default};
