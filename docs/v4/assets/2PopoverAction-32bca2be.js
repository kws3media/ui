import{j as e,M as i}from"./version-858a7250.js";import{M as r}from"./index-d858fea5.js";import{u as s}from"./index-f9328ec3.js";import"./iframe-16f5c175.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";import"./index-349dcf19.js";import"./_getTag-7fd90005.js";import"./uniq-8956f76d.js";import"./index-356e4a49.js";function o(t){const n=Object.assign({h3:"h3",p:"p",br:"br",code:"code",pre:"pre"},s(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(i,{}),`
`,e.jsx(r,{title:"Helpers/Popover/2. Popover Action"}),`
`,e.jsx(n.h3,{id:"usage-via-svelte-actions",children:"Usage via Svelte actions"}),`
`,e.jsx(n.p,{children:"Popovers can also initialised using Svelte actions, instead of using the component."}),`
`,e.jsxs("div",{className:"columns",children:[e.jsxs("div",{className:"column",children:[e.jsxs(n.p,{children:["The action accepts an object of parameters.",e.jsx(n.br,{}),`
`,"The most important of which is ",e.jsx(n.code,{children:"content"}),"."]}),e.jsxs(n.p,{children:[e.jsx(n.code,{children:"content"})," needs to be, either a reference to a dom node, or a string.",e.jsx(n.br,{}),`
`,"When a string is provided, the string will be displayed as the popover content."]}),e.jsx(n.p,{children:"For a list of other supported parameters, see: https://atomiks.github.io/tippyjs/v6/all-props/"})]}),e.jsx("div",{className:"column",children:e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<div use:popover={{content: popoverContent}}>
  Some Content
</div>

<div bind:this={popoverContent}>
  Content of popover
</div>

<script>
  import { popover } from '@kws3/ui'; //notice lowercase import name

  let popoverContent;
<\/script>
`})})})]}),`
`,e.jsxs(n.p,{children:["Parameters can be sent during action initialisation, or as ",e.jsx(n.code,{children:"data-tippy-*"})," attributes.",e.jsx(n.br,{}),`
`,"The following examples are functionally identical:"]}),`
`,e.jsxs("div",{className:"columns",children:[e.jsx("div",{className:"column",children:e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<div 
  use:popover={{
    content: popoverContent,
    placement: 'bottom',
    offset: [0, 10],
    maxWidth: '500px'
  }}>
  Some Content
</div>
`})})}),e.jsx("div",{className:"column",children:e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<div 
  use:popover={{content: popoverContent}}
  data-tippy-placement="bottom"
  data-tippy-offset="[0, 10]"
  data-tippy-maxWidth="500px"
  >
  Some Content
</div>
`})})})]}),`
`,e.jsx(n.h3,{id:"do-not-forget-to-import-the-css",children:"Do not forget to Import the CSS:"}),`
`,e.jsxs(n.p,{children:["This also requires css from ",e.jsx(n.code,{children:"Tooltip"})," component."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`@import '@kws3/ui/styles/Tooltip.scss';
`})})]})}function u(t={}){const{wrapper:n}=Object.assign({},s(),t.components);return n?e.jsx(n,Object.assign({},t,{children:e.jsx(o,t)})):o(t)}export{u as default};
