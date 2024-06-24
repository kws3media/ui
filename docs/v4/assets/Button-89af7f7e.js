var r=Object.freeze,d=Object.defineProperty;var n=(o,t)=>r(d(o,"raw",{value:r(t||o.slice())}));import{j as e,M as p}from"./version-2dc044ef.js";import{u as m}from"./index-a1362516.js";import{M as x,C as u,e as h,f as i}from"./index-4853277e.js";import{B as f}from"./Button.stories-28de8f3d.js";import{d as a}from"./index-356e4a49.js";import"./iframe-e9535448.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-75890171.js";import"./RadialChart-bca8d5a9.js";import"./index-ae6f3512.js";import"./index-4339844e.js";import"./index-ce0c298e.js";import"./index-8cc5c1ab.js";import"./spread-8a54911c.js";import"./index-af29543d.js";import"./index-5da554f5.js";import"./index-b7fffc4c.js";import"./frameworkTypes-9ac02643.js";var s,c;function l(o){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",...m(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(p,{}),`
`,e.jsx(t.h1,{id:"deletebutton",children:"DeleteButton"}),`
`,e.jsx(t.h2,{id:"delete-button-with-built-in-confirmation",children:"Delete Button with built-in confirmation."}),`
`,e.jsx(x,{of:f}),`
`,e.jsx(u,{}),`
`,e.jsx(h,{}),`
`,e.jsx(t.h3,{id:"usage",children:"Usage"}),`
`,e.jsx(i,{language:"html",code:a(s||(s=n([`
    <DeleteButton
      {text}
      {icon}
      {doing_icon}
      {done_icon}
      {doing_text}
      {done_text}
      {color}
      {size}
      {icon_only}
      {disabled}
      on:erase={eraseDo}
    />
    <script>
      import { DeleteButton } from '@kws3/ui';
      export let color = "primary";
      export let disabled = false;
      export let size="";
      export let icon_only = false;
      export let text = "Delete";
      export let icon = "minus-circle";
      export let done_icon = "check";
      export let done_text = "Deleted";
      export let context = "_context_delete";
      function eraseDo(event){
        let { doing, done, error, context } = event.detail;
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
        })
      }
    <\/script>`])))}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"done()"})," and ",e.jsx(t.code,{children:"error()"})," can take an optional callback function, and an extra ",e.jsx(t.code,{children:"timeout"})," parameter that overrides the ",e.jsx(t.code,{children:"completion_timeout"})," property."]}),`
`,e.jsx(i,{language:"html",code:a(c||(c=n([`
    <script>
      function eraseDo(event){
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
    <\/script>`])))})]})}function U(o={}){const{wrapper:t}={...m(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(l,{...o})}):l(o)}export{U as default};
