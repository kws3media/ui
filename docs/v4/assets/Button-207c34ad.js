var r=Object.freeze,d=Object.defineProperty;var n=(o,e)=>r(d(o,"raw",{value:r(e||o.slice())}));import{j as t,M as p}from"./version-8579e5b6.js";import{M as x,C as u,d as h,e as i}from"./index-8a78b23d.js";import{B as j}from"./Button.stories-a028caee.js";import{d as a}from"./index-356e4a49.js";import{u as m}from"./index-af723c2c.js";import"./iframe-47ba6b62.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";import"./index-349dcf19.js";import"./_getTag-7fd90005.js";import"./uniq-8956f76d.js";import"./RadialChart-f10ed086.js";import"./index-9bc519a8.js";import"./index-c009752d.js";import"./index-87030aea.js";import"./index-8cc5c1ab.js";import"./spread-8a54911c.js";import"./index-af29543d.js";import"./index-5da554f5.js";import"./index-e13a698e.js";import"./index-150b40f0.js";import"./index-03bbf7d1.js";import"./index-d38bc732.js";import"./frameworkTypes-60e558cb.js";var c,l;function s(o){const e=Object.assign({h1:"h1",h2:"h2",h3:"h3",p:"p",code:"code"},m(),o.components);return t.jsxs(t.Fragment,{children:[t.jsx(p,{}),`
`,t.jsx(e.h1,{id:"deletebutton",children:"DeleteButton"}),`
`,t.jsx(e.h2,{id:"delete-button-with-built-in-confirmation",children:"Delete Button with built-in confirmation."}),`
`,t.jsx(x,{of:j}),`
`,t.jsx(u,{}),`
`,t.jsx(h,{}),`
`,t.jsx(e.h3,{id:"usage",children:"Usage"}),`
`,t.jsx(i,{language:"html",code:a(c||(c=n([`
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
`,t.jsxs(e.p,{children:[t.jsx(e.code,{children:"done()"})," and ",t.jsx(e.code,{children:"error()"})," can take an optional callback function, and an extra ",t.jsx(e.code,{children:"timeout"})," parameter that overrides the ",t.jsx(e.code,{children:"completion_timeout"})," property."]}),`
`,t.jsx(i,{language:"html",code:a(l||(l=n([`
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
    <\/script>`])))})]})}function G(o={}){const{wrapper:e}=Object.assign({},m(),o.components);return e?t.jsx(e,Object.assign({},o,{children:t.jsx(s,o)})):s(o)}export{G as default};
