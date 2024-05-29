var r=Object.freeze,p=Object.defineProperty;var n=(o,e)=>r(p(o,"raw",{value:r(e||o.slice())}));import{j as t,M as d}from"./version-1e8f9454.js";import{u as m}from"./index-323c8e7a.js";import{M as x,C as u,e as h,f as i}from"./index-b6c8336d.js";import{B as j}from"./Button.stories-940c4b6e.js";import{d as s}from"./index-356e4a49.js";import"./iframe-74ccf227.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-75890171.js";import"./RadialChart-db2a7349.js";import"./index-ae6f3512.js";import"./index-4339844e.js";import"./index-ce0c298e.js";import"./index-8cc5c1ab.js";import"./spread-8a54911c.js";import"./index-af29543d.js";import"./index-5da554f5.js";import"./index-b7fffc4c.js";import"./frameworkTypes-60e558cb.js";var a,l;function c(o){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",...m(),...o.components};return t.jsxs(t.Fragment,{children:[t.jsx(d,{}),`
`,t.jsx(e.h1,{id:"processbutton",children:"ProcessButton"}),`
`,t.jsx(e.h2,{id:"process-button-with-properties",children:"Process Button with properties."}),`
`,t.jsx(x,{of:j}),`
`,t.jsx(u,{}),`
`,t.jsx(h,{}),`
`,t.jsx(e.h3,{id:"usage",children:"Usage"}),`
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
`,t.jsxs(e.p,{children:[t.jsx(e.code,{children:"done()"})," and ",t.jsx(e.code,{children:"error()"})," can take an optional callback function, and an extra ",t.jsx(e.code,{children:"timeout"})," parameter that overrides the ",t.jsx(e.code,{children:"completion_timeout"})," property."]}),`
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
    <\/script>`])))})]})}function U(o={}){const{wrapper:e}={...m(),...o.components};return e?t.jsx(e,{...o,children:t.jsx(c,{...o})}):c(o)}export{U as default};
