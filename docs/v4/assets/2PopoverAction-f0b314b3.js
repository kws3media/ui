import{j as e}from"./jsx-runtime-2af955ec.js";import{u as s}from"./index-a6a89ff5.js";import{M as r,f as i}from"./index-d36baa79.js";import{d as a}from"./index-356e4a49.js";import{M as p}from"./version-d3dfd908.js";import"./iframe-ea13b5b9.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";import"./index-5a8fdfec.js";function t(n){const o={a:"a",br:"br",code:"code",em:"em",h3:"h3",p:"p",pre:"pre",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(p,{}),`
`,e.jsx(r,{title:"Helpers/Popover/2. Popover Action"}),`
`,e.jsx(o.h3,{id:"usage-via-svelte-actions",children:"Usage via Svelte actions"}),`
`,e.jsx(o.p,{children:"Popovers can also initialised using Svelte actions, instead of using the component."}),`
`,e.jsxs("div",{className:"columns",children:[e.jsxs("div",{className:"column",children:[e.jsxs(o.p,{children:["The action accepts an object of parameters.",e.jsx(o.br,{}),`
`,"The most important of which is ",e.jsx(o.code,{children:"content"}),"."]}),e.jsxs(o.p,{children:[e.jsx(o.code,{children:"content"})," needs to be, either a reference to a dom node, or a string.",e.jsx(o.br,{}),`
`,"When a string is provided, the string will be displayed as the popover content."]}),e.jsxs(o.p,{children:["For a list of other supported parameters, see: ",e.jsx(o.a,{href:"https://atomiks.github.io/tippyjs/v6/all-props/",rel:"nofollow",children:"https://atomiks.github.io/tippyjs/v6/all-props/"})]})]}),e.jsx("div",{className:"column",children:e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-html",children:`<div use:popover={{content: popoverContent}}>
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
`,e.jsxs(o.p,{children:["Parameters can be sent during action initialisation, or as ",e.jsx(o.code,{children:"data-tippy-*"})," attributes.",e.jsx(o.br,{}),`
`,"The following examples are functionally identical:"]}),`
`,e.jsxs("div",{className:"columns",children:[e.jsx("div",{className:"column",children:e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-html",children:`<div 
  use:popover={{
    content: popoverContent,
    placement: 'bottom',
    offset: [0, 10],
    maxWidth: '500px'
  }}>
  Some Content
</div>
`})})}),e.jsx("div",{className:"column",children:e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-html",children:`<div 
  use:popover={{content: popoverContent}}
  data-tippy-placement="bottom"
  data-tippy-offset="[0, 10]"
  data-tippy-maxWidth="500px"
  >
  Some Content
</div>
`})})})]}),`
`,e.jsx(o.h3,{id:"do-not-forget-to-import-the-scss",children:"Do not forget to Import the SCSS:"}),`
`,e.jsx(o.p,{children:e.jsx(o.em,{children:"Default values shown as example"})}),`
`,e.jsx(i,{code:a`
    @use '@kws3/ui/styles/Tooltip.scss' with (
      $popover-background: cv.getVar("background"),
      $popover-color: cv.getVar("text"),
      $popover-arrow-color: cv.getVar("border"),
      $popover-shadow: 0 5px 10px -5px hsla(cv.getVar("shadow-h"), cv.getVar("shadow-s"), cv.getVar("shadow-l"), 0.4),
      $popover-radius: cv.getVar("radius-small")
    );
    `})]})}function g(n={}){const{wrapper:o}={...s(),...n.components};return o?e.jsx(o,{...n,children:e.jsx(t,{...n})}):t(n)}export{g as default};
