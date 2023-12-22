import{j as n,M as a}from"./version-1ebd099f.js";import{M as i,b as s}from"./index-ed8b7af3.js";import{S as c,M as m}from"./rAF.stories-047f2504.js";import{u as o}from"./index-71d4d6da.js";import"./iframe-d0aba181.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";import"./index-349dcf19.js";import"./_getTag-7fd90005.js";import"./uniq-8956f76d.js";import"./index-356e4a49.js";import"./index-1914c206.js";import"./index-81505e0c.js";function r(t){const e=Object.assign({h3:"h3",p:"p",code:"code",strong:"strong",pre:"pre"},o(),t.components);return n.jsxs(n.Fragment,{children:[n.jsx(a,{}),`
`,n.jsx(i,{of:c}),`
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
`,n.jsx(s,{of:m})]})}function F(t={}){const{wrapper:e}=Object.assign({},o(),t.components);return e?n.jsx(e,Object.assign({},t,{children:n.jsx(r,t)})):r(t)}export{F as default};
