var n=Object.freeze,p=Object.defineProperty;var r=(e,o)=>n(p(e,"raw",{value:n(o||e.slice())}));import{j as t}from"./jsx-runtime-395e6f4a.js";import{u as m}from"./index-f84756d5.js";import{ae as d,af as x,ah as h,ai as i}from"./index-36797c46.js";import{B as u}from"./Button.stories-fe03ca62.js";import{d as s}from"./index-356e4a49.js";import{M as f}from"./version-80223c14.js";import"./iframe-bc6190dd.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";import"./index-65ec3394.js";import"./RadialChart-ecf50d11.js";import"./index-ae6f3512.js";import"./index-4339844e.js";import"./index-ce0c298e.js";import"./index-8cc5c1ab.js";import"./spread-8a54911c.js";import"./index-af29543d.js";import"./index-5da554f5.js";import"./index-8f8201f3.js";import"./index-8d1e987c.js";import"./frameworkTypes-6fa5738f.js";var c,l;function a(e){const o={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",...m(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(f,{}),`
`,t.jsx(o.h1,{id:"processbutton",children:"ProcessButton"}),`
`,t.jsx(o.h2,{id:"process-button-with-properties",children:"Process Button with properties."}),`
`,t.jsx(d,{of:u}),`
`,t.jsx(x,{}),`
`,t.jsx(h,{}),`
`,t.jsx(o.h3,{id:"usage",children:"Usage"}),`
`,t.jsx(i,{language:"html",code:s(c||(c=r([`
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
`,t.jsx(i,{language:"html",code:s(l||(l=r([`
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
    <\/script>`])))})]})}function q(e={}){const{wrapper:o}={...m(),...e.components};return o?t.jsx(o,{...e,children:t.jsx(a,{...e})}):a(e)}export{q as default};
