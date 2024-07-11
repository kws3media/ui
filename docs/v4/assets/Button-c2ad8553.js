var r=Object.freeze,p=Object.defineProperty;var n=(e,o)=>r(p(e,"raw",{value:r(o||e.slice())}));import{j as t}from"./jsx-runtime-593b36f9.js";import{u as m}from"./index-a6b36cb5.js";import{M as d,C as x,e as u,f as i}from"./index-5adacd09.js";import{B as h}from"./Button.stories-7605848f.js";import{d as s}from"./index-356e4a49.js";import{M as f}from"./version-69ab0678.js";import"./iframe-649ff2ef.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";import"./index-5a8fdfec.js";import"./RadialChart-a46fe6c5.js";import"./index-ae6f3512.js";import"./index-4339844e.js";import"./index-ce0c298e.js";import"./index-8cc5c1ab.js";import"./spread-8a54911c.js";import"./index-af29543d.js";import"./index-5da554f5.js";import"./index-b7fffc4c.js";import"./frameworkTypes-6fa5738f.js";var a,l;function c(e){const o={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",...m(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(f,{}),`
`,t.jsx(o.h1,{id:"processbutton",children:"ProcessButton"}),`
`,t.jsx(o.h2,{id:"process-button-with-properties",children:"Process Button with properties."}),`
`,t.jsx(d,{of:h}),`
`,t.jsx(x,{}),`
`,t.jsx(u,{}),`
`,t.jsx(o.h3,{id:"usage",children:"Usage"}),`
`,t.jsx(i,{language:"html",code:s(a||(a=n([`
    <ProcessButton
      {text}
      {icon}
      {done_icon}
      {done_text}
      {color}
      {size}
      {icon_only}
      {disabled}
      on:doing={onDoing}
    />
    <script>
      import { ProcessButton } from '@kws3/ui';
      export let color = "primary";
      export let disabled = false;
      export let size="";
      export let icon_only = false;
      export let text = "Click Me";
      export let icon = "check";
      export let done_icon = "check";
      export let done_text = "Done";
      function onDoing(event){
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
        })
      }
    <\/script>`])))}),`
`,t.jsxs(o.p,{children:[t.jsx(o.code,{children:"done()"})," and ",t.jsx(o.code,{children:"error()"})," can take an optional callback function, and an extra ",t.jsx(o.code,{children:"timeout"})," parameter that overrides the ",t.jsx(o.code,{children:"completion_timeout"})," property."]}),`
`,t.jsx(i,{language:"html",code:s(l||(l=n([`
    <script>
      function onDoing(event){
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
    <\/script>`])))})]})}function $(e={}){const{wrapper:o}={...m(),...e.components};return o?t.jsx(o,{...e,children:t.jsx(c,{...e})}):c(e)}export{$ as default};
