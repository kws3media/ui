import{j as n}from"./jsx-runtime-2af955ec.js";import{u as o}from"./index-a6a89ff5.js";import{M as a,d as i}from"./index-d36baa79.js";import{M as s}from"./version-d3dfd908.js";import{S as c,M as m}from"./rAF.stories-e417a7f2.js";import"./iframe-ea13b5b9.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";import"./index-5a8fdfec.js";import"./index-356e4a49.js";import"./index-ae6f3512.js";import"./index-8cc5c1ab.js";function r(t){const e={code:"code",h3:"h3",p:"p",pre:"pre",strong:"strong",...o(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{}),`
`,n.jsx(a,{of:c}),`
`,n.jsx(e.h3,{id:"raf",children:"rAF"}),`
`,n.jsxs(e.p,{children:["The ",n.jsx(e.code,{children:"rAF"})," method tells the browser that you wish to perform an animation and requests that the browser calls a specified function to update an animation before the next repaint. The method takes a callback as an argument to be invoked before the repaint."]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Parameter:"}),`
`,n.jsx(e.code,{children:"call back function"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<div id="animatedDiv" />

<script>
  import { rAF } from "@kws3/ui/utils";

  let globalID;

  function repeatOften() {
    var div = document.getElementById("animatedDiv");
    div.innerHTML += \`<div class="orange"></div>\`;
    globalID = rAF(repeatOften);
  }
  
  globalID = rAF(repeatOften);

  function start() {
    globalID = rAF(repeatOften);
  }

  function stop() {
    cancelAnimationFrame(globalID);
  }
<\/script>
`})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Example:"})}),`
`,n.jsx(i,{of:m})]})}function v(t={}){const{wrapper:e}={...o(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(r,{...t})}):r(t)}export{v as default};
