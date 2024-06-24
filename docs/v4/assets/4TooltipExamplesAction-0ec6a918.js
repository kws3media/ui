import{j as t,M as i}from"./version-2dc044ef.js";import{u as s}from"./index-a1362516.js";import{M as a}from"./index-4853277e.js";import"./iframe-e9535448.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-75890171.js";import"./index-356e4a49.js";function n(o){const e={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",...s(),...o.components};return t.jsxs(t.Fragment,{children:[t.jsx(i,{}),`
`,t.jsx(a,{title:"Helpers/Tooltips/3. Tooltip Action"}),`
`,t.jsx(e.h3,{id:"tooltip-action",children:"Tooltip Action"}),`
`,t.jsxs(e.p,{children:["If you do not have a lot of tooltips in your app, you can use the ",t.jsx(e.code,{children:"tooltip"})," action to sprinkle tooltips on selected nodes."]}),`
`,t.jsx("div",{className:"notification is-warning",children:t.jsxs(e.p,{children:["Tooltip Action does not use event delegation. ",t.jsx("br",{}),"Therefore, it can affect performance if there are a large number of tooltips.",t.jsx("br",{}),t.jsx("br",{}),`
The recommended way is to use tooltips via event delegation, see: `,t.jsx("a",{href:"/docs/helpers-tooltips-1-overview--page",children:"Tooltip Overview"})]})}),`
`,t.jsxs("div",{className:"columns",children:[t.jsxs("div",{className:"column",children:[t.jsx(e.p,{children:"The action accepts an object of parameters."}),t.jsxs(e.p,{children:["For a list of other supported parameters, see:  ",t.jsx(e.a,{href:"https://atomiks.github.io/tippyjs/v6/all-props/",rel:"nofollow",children:"https://atomiks.github.io/tippyjs/v6/all-props/"})]}),t.jsxs(e.p,{children:["By default, it tries to use the content of ",t.jsx(e.code,{children:"data-tooltip"}),` attribute as the tooltip content.
However, you can also send a string as a parameter to the action.
And that will be used instead of the attribute value.`]})]}),t.jsx("div",{className:"column",children:t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-html",children:`<!--send content as parameter-->
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
`,t.jsxs(e.p,{children:["Parameters can be sent during action initialisation, or as ",t.jsx(e.code,{children:"data-tippy-*"}),` attributes.
The following examples are functionally indentical:`]}),`
`,t.jsxs("div",{className:"columns",children:[t.jsx("div",{className:"column",children:t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-html",children:`<div
  data-tooltip="Some text in tooltip"
  use:tooltip={{
    placement: 'bottom',
    offset: [0, 10]
  }}>
  Some Content
</div>
`})})}),t.jsx("div",{className:"column",children:t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-html",children:`<div
  data-tooltip="Some text in tooltip"
  use:tooltip
  data-tippy-placement="bottom"
  data-tippy-offset="[0, 10]"
  >
  Some Content
</div>
`})})})]}),`
`,t.jsx(e.h3,{id:"do-not-forget-to-import-the-css",children:"Do not forget to Import the CSS:"}),`
`,t.jsxs(e.p,{children:["This also requires css from ",t.jsx(e.code,{children:"Tooltip"})," component."]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-js",children:`@import '@kws3/ui/styles/Tooltip.scss';
`})})]})}function x(o={}){const{wrapper:e}={...s(),...o.components};return e?t.jsx(e,{...o,children:t.jsx(n,{...o})}):n(o)}export{x as default};
