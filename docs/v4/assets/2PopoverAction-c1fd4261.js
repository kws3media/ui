import{j as e,M as r}from"./version-b520517b.js";import{u as s}from"./index-45417e07.js";import{M as i,f as a}from"./index-bebc8d91.js";import{d as c}from"./index-356e4a49.js";import"./iframe-c20f7db4.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-75890171.js";function t(o){const n={a:"a",br:"br",code:"code",em:"em",h3:"h3",p:"p",pre:"pre",...s(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{}),`
`,e.jsx(i,{title:"Helpers/Popover/2. Popover Action"}),`
`,e.jsx(n.h3,{id:"usage-via-svelte-actions",children:"Usage via Svelte actions"}),`
`,e.jsx(n.p,{children:"Popovers can also initialised using Svelte actions, instead of using the component."}),`
`,e.jsxs("div",{className:"columns",children:[e.jsxs("div",{className:"column",children:[e.jsxs(n.p,{children:["The action accepts an object of parameters.",e.jsx(n.br,{}),`
`,"The most important of which is ",e.jsx(n.code,{children:"content"}),"."]}),e.jsxs(n.p,{children:[e.jsx(n.code,{children:"content"})," needs to be, either a reference to a dom node, or a string.",e.jsx(n.br,{}),`
`,"When a string is provided, the string will be displayed as the popover content."]}),e.jsxs(n.p,{children:["For a list of other supported parameters, see: ",e.jsx(n.a,{href:"https://atomiks.github.io/tippyjs/v6/all-props/",rel:"nofollow",children:"https://atomiks.github.io/tippyjs/v6/all-props/"})]})]}),e.jsx("div",{className:"column",children:e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<div use:popover={{content: popoverContent}}>
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
`,e.jsx(n.h3,{id:"do-not-forget-to-import-the-scss",children:"Do not forget to Import the SCSS:"}),`
`,e.jsx(n.p,{children:e.jsx(n.em,{children:"Default values shown as example"})}),`
`,e.jsx(a,{code:c`
    @use '@kws3/ui/styles/Tooltip.scss' with (
      $popover-background: cv.getVar("background"),
      $popover-color: cv.getVar("text"),
      $popover-arrow-color: cv.getVar("background"),
      $popover-shadow: 0 5px 10px -5px hsla(cv.getVar("shadow-h"), cv.getVar("shadow-s"), cv.getVar("shadow-l"), 0.4),
      $popover-radius: cv.getVar("radius-small")
    );
    `})]})}function j(o={}){const{wrapper:n}={...s(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(t,{...o})}):t(o)}export{j as default};
