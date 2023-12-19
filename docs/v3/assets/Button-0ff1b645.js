var a=Object.freeze,d=Object.defineProperty;var n=(e,o)=>a(d(e,"raw",{value:a(o||e.slice())}));import{j as t,M as p}from"./version-6bd470a9.js";import{M as x,C as u,d as h,e as r}from"./index-b35ce1a0.js";import{B as f}from"./Button.stories-bed36191.js";import{d as i}from"./index-356e4a49.js";import{u as l}from"./index-f20201d2.js";import"./iframe-6321bde4.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";import"./index-349dcf19.js";import"./_getTag-7fd90005.js";import"./uniq-8956f76d.js";import"./RadialChart-07c156ff.js";import"./index-1914c206.js";import"./index-f0c04adc.js";import"./index-8a90618b.js";import"./spread-8a54911c.js";import"./index-af29543d.js";import"./index-81505e0c.js";import"./index-5da554f5.js";import"./index-e13a698e.js";import"./index-150b40f0.js";import"./index-03bbf7d1.js";import"./index-d38bc732.js";import"./frameworkTypes-60e558cb.js";var s,m;function c(e){const o=Object.assign({h1:"h1",h2:"h2",h3:"h3",p:"p",code:"code"},l(),e.components);return t.jsxs(t.Fragment,{children:[t.jsx(p,{}),`
`,t.jsx(o.h1,{id:"confirmbutton",children:"ConfirmButton"}),`
`,t.jsx(o.h2,{id:"confirm-button-with-built-in-confirmation",children:"Confirm Button with built-in confirmation."}),`
`,t.jsx(x,{of:f}),`
`,t.jsx(u,{}),`
`,t.jsx(h,{}),`
`,t.jsx(o.h3,{id:"example-source-code",children:"Example source code"}),`
`,t.jsx(r,{language:"html",code:i`<ConfirmButton text="Do It?" color="primary" size="small" icon_only="true" disabled="false" />`}),`
`,t.jsx(o.h3,{id:"usage-example",children:"Usage Example"}),`
`,t.jsx(r,{language:"html",code:i(s||(s=n([`
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
`,t.jsxs(o.p,{children:[t.jsx(o.code,{children:"done()"})," and ",t.jsx(o.code,{children:"error()"})," can take an optional callback function, and an extra ",t.jsx(o.code,{children:"timeout"})," parameter that overrides the ",t.jsx(o.code,{children:"completion_timeout"})," property."]}),`
`,t.jsx(r,{language:"html",code:i(m||(m=n([`
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
    <\/script>`])))})]})}function A(e={}){const{wrapper:o}=Object.assign({},l(),e.components);return o?t.jsx(o,Object.assign({},e,{children:t.jsx(c,e)})):c(e)}export{A as default};
