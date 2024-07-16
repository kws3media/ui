var r=Object.freeze,d=Object.defineProperty;var n=(o,t)=>r(d(o,"raw",{value:r(t||o.slice())}));import{j as e}from"./jsx-runtime-822190ba.js";import{u as m}from"./index-67f97c62.js";import{M as p,C as x,e as u,f as i}from"./index-990f178a.js";import{B as h}from"./Button.stories-2000def9.js";import{d as a}from"./index-356e4a49.js";import{M as f}from"./version-847f8cc0.js";import"./iframe-4b7f32ad.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";import"./index-5a8fdfec.js";import"./RadialChart-5b1df549.js";import"./index-ae6f3512.js";import"./index-4339844e.js";import"./index-ce0c298e.js";import"./index-8cc5c1ab.js";import"./spread-8a54911c.js";import"./index-af29543d.js";import"./index-5da554f5.js";import"./index-b7fffc4c.js";import"./frameworkTypes-6fa5738f.js";var s,c;function l(o){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",...m(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(f,{}),`
`,e.jsx(t.h1,{id:"deletebutton",children:"DeleteButton"}),`
`,e.jsx(t.h2,{id:"delete-button-with-built-in-confirmation",children:"Delete Button with built-in confirmation."}),`
`,e.jsx(p,{of:h}),`
`,e.jsx(x,{}),`
`,e.jsx(u,{}),`
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
    <\/script>`])))})]})}function $(o={}){const{wrapper:t}={...m(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(l,{...o})}):l(o)}export{$ as default};
