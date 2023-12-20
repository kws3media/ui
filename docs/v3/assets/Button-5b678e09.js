var r=Object.freeze,p=Object.defineProperty;var n=(e,o)=>r(p(e,"raw",{value:r(o||e.slice())}));import{j as t,M as d}from"./version-6bd470a9.js";import{M as x,C as u,d as h,e as i}from"./index-b35ce1a0.js";import{B as j}from"./Button.stories-6ebff7e9.js";import{d as s}from"./index-356e4a49.js";import{u as m}from"./index-f20201d2.js";import"./iframe-6321bde4.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";import"./index-349dcf19.js";import"./_getTag-7fd90005.js";import"./uniq-8956f76d.js";import"./RadialChart-07c156ff.js";import"./index-1914c206.js";import"./index-f0c04adc.js";import"./index-8a90618b.js";import"./spread-8a54911c.js";import"./index-af29543d.js";import"./index-81505e0c.js";import"./index-5da554f5.js";import"./index-e13a698e.js";import"./index-150b40f0.js";import"./index-03bbf7d1.js";import"./index-d38bc732.js";import"./frameworkTypes-60e558cb.js";var a,l;function c(e){const o=Object.assign({h1:"h1",h2:"h2",h3:"h3",p:"p",code:"code"},m(),e.components);return t.jsxs(t.Fragment,{children:[t.jsx(d,{}),`
`,t.jsx(o.h1,{id:"processbutton",children:"ProcessButton"}),`
`,t.jsx(o.h2,{id:"process-button-with-properties",children:"Process Button with properties."}),`
`,t.jsx(x,{of:j}),`
`,t.jsx(u,{}),`
`,t.jsx(h,{}),`
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
    <\/script>`])))})]})}function G(e={}){const{wrapper:o}=Object.assign({},m(),e.components);return o?t.jsx(o,Object.assign({},e,{children:t.jsx(c,e)})):c(e)}export{G as default};