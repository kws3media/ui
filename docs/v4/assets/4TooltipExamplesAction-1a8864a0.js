import{j as e}from"./jsx-runtime-822190ba.js";import{u as s}from"./index-67f97c62.js";import{M as i}from"./index-990f178a.js";import{M as a}from"./version-847f8cc0.js";import"./iframe-4b7f32ad.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";import"./index-5a8fdfec.js";import"./index-356e4a49.js";function n(o){const t={a:"a",code:"code",em:"em",h3:"h3",p:"p",pre:"pre",...s(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{}),`
`,e.jsx(i,{title:"Helpers/Tooltips/3. Tooltip Action"}),`
`,e.jsx(t.h3,{id:"tooltip-action",children:"Tooltip Action"}),`
`,e.jsxs(t.p,{children:["If you do not have a lot of tooltips in your app, you can use the ",e.jsx(t.code,{children:"tooltip"})," action to sprinkle tooltips on selected nodes."]}),`
`,e.jsx("div",{className:"notification is-warning sb-unstyled",children:e.jsxs("p",{className:"",children:["Tooltip Action does not use event delegation. ",e.jsx("br",{}),"Therefore, it can affect performance if there are a large number of tooltips.",e.jsx("br",{}),e.jsx("br",{}),"The recommended way is to use tooltips via event delegation, see: ",e.jsx("a",{href:"./?path=/docs/helpers-tooltips-1-overview--docs",children:"Tooltip Overview"})]})}),`
`,e.jsxs("div",{className:"columns",children:[e.jsxs("div",{className:"column",children:[e.jsx(t.p,{children:"The action accepts an object of parameters."}),e.jsxs(t.p,{children:["For a list of other supported parameters, see:  ",e.jsx(t.a,{href:"https://atomiks.github.io/tippyjs/v6/all-props/",rel:"nofollow",children:"https://atomiks.github.io/tippyjs/v6/all-props/"})]}),e.jsxs(t.p,{children:["By default, it tries to use the content of ",e.jsx(t.code,{children:"data-tooltip"}),` attribute as the tooltip content.
However, you can also send a string as a parameter to the action.
And that will be used instead of the attribute value.`]})]}),e.jsx("div",{className:"column",children:e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<!--send content as parameter-->
<div use:tooltip={{content: "Some Text"}}>
  Some Content
</div>

<!--send content as data-tooltip attribute-->
<div
  use:tooltip
  data-tooltip="Some Text">
  Some Content
</div>

<script>
  import { tooltip } from '@kws3/ui'; //notice lowercase import name
<\/script>
`})})})]}),`
`,e.jsxs(t.p,{children:["Parameters can be sent during action initialisation, or as ",e.jsx(t.code,{children:"data-tippy-*"}),` attributes.
The following examples are functionally indentical:`]}),`
`,e.jsxs("div",{className:"columns",children:[e.jsx("div",{className:"column",children:e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<div
  data-tooltip="Some text in tooltip"
  use:tooltip={{
    placement: 'bottom',
    offset: [0, 10]
  }}>
  Some Content
</div>
`})})}),e.jsx("div",{className:"column",children:e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<div
  data-tooltip="Some text in tooltip"
  use:tooltip
  data-tippy-placement="bottom"
  data-tippy-offset="[0, 10]"
  >
  Some Content
</div>
`})})})]}),`
`,e.jsx(t.h3,{id:"do-not-forget-to-import-the-scss",children:"Do not forget to Import the SCSS:"}),`
`,e.jsx(t.p,{children:e.jsx(t.em,{children:"Default values shown as example"})}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-css",children:`@use '@kws3/ui/styles/Tooltip.scss' with(
  $theme-colors: dv.$colors,
  $background: cv.getVar("scheme-invert"),
  $color: cv.getVar("text-invert"),
  $arrow-size: 8px,
  $padding: 0.5rem,
  $radius: cv.getVar("radius-small"),
  $shadow: 0 5px 10px -5px hsla(cv.getVar("shadow-h"), cv.getVar("shadow-s"), cv.getVar("shadow-l"), 0.4)
);
`})})]})}function j(o={}){const{wrapper:t}={...s(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(n,{...o})}):n(o)}export{j as default};
