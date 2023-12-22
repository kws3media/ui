import{j as e,M as p}from"./version-46c3a277.js";import{M as l,C as c,d as a,e as s}from"./index-022903f7.js";import{d as t}from"./index-356e4a49.js";import{S as d}from"./Popover.stories-f9a30e19.js";import{u as i}from"./index-7fbbac9d.js";import"./iframe-437dea7a.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";import"./index-349dcf19.js";import"./_getTag-7fd90005.js";import"./uniq-8956f76d.js";import"./RadialChart-d7ee443d.js";import"./index-1914c206.js";import"./index-f0c04adc.js";import"./index-8a90618b.js";import"./spread-8a54911c.js";import"./index-af29543d.js";import"./index-81505e0c.js";import"./index-5da554f5.js";import"./index-c046be0f.js";import"./frameworkTypes-60e558cb.js";function r(o){const n=Object.assign({h1:"h1",h2:"h2",h3:"h3",h5:"h5",h4:"h4",pre:"pre",code:"code",p:"p"},i(),o.components);return e.jsxs(e.Fragment,{children:[e.jsx(p,{}),`
`,e.jsx(n.h1,{id:"popover",children:"Popover"}),`
`,e.jsx(n.h2,{id:"display-contextual-popovers",children:"Display contextual popovers"}),`
`,e.jsx(l,{of:d}),`
`,e.jsx(c,{}),`
`,e.jsx(a,{}),`
`,e.jsx(n.h3,{id:"usage",children:"Usage"}),`
`,e.jsx(n.h5,{id:"import-the-component",children:"Import the component:"}),`
`,e.jsx(s,{language:"javascript",code:t`import { Popover } from '@kws3/ui';`}),`
`,e.jsxs("div",{className:"columns is-multiline",children:[e.jsxs("div",{className:"column is-4",children:[e.jsx(n.h4,{id:"default",children:"Default"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<Popover>
  Click me to see popover
  <svelte:fragment
    slot="popover">
    This is the popover content
  </svelte:fragment>
</Popover>

<script>
import {Popover} from '@kws3/ui';
<\/script>
`})})]}),e.jsxs("div",{className:"column is-4",children:[e.jsxs(n.h4,{id:"component-in-popover-slot",children:["Component in ",e.jsx(n.code,{children:"popover"})," slot"]}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<Popover>
  Click me to see popover
  <svelte:fragment
    slot="popover">
    <Message color="success">
      This is the popover content
    </Message>
  </svelte:fragment>
</Popover>

<script>
import {
  Popover,
  Message
} from '@kws3/ui';
<\/script>
`})})]}),e.jsxs("div",{className:"column is-4",children:[e.jsxs(n.h4,{id:"usage-of-external_target",children:["Usage of ",e.jsx(n.code,{children:"external_target"})]}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<Popover
  external_target={aNode}>
  Click me to see popover
</Popover>

<div bind:this={aNode}>
  This is the popover content
</div>

<script>
import {Popover} from '@kws3/ui';

let aNode;

<\/script>
`})})]}),e.jsxs("div",{className:"column is-4",children:[e.jsx(n.h4,{id:"manual-control",children:"Manual Control"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<Popover bind:this={pop1}>
  Popover Anchor
  <svelte:fragment
    slot="popover">
    This is the popover content
  </svelte:fragment>
</Popover>

<script>
import {Popover} from '@kws3/ui';
let pop1;

function showPopover(e){
  pop1.show();
}

function hidePopover(e){
  pop1.hide();
}
<\/script>
`})})]}),e.jsxs("div",{className:"column is-4",children:[e.jsx(n.h4,{id:"events",children:"Events"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<Popover
  on:opening={({detail}) => {
    console.log(detail.instance)
  }}
  on:open={({detail}) => {
    console.log(detail.instance)
  }}
  on:closing={({detail}) => {
    console.log(detail.instance)
  }}
  on:close={({detail}) => {
    console.log(detail.instance)
  }}
  on:trigger={({detail}) => {
    console.log(detail.instance)
  }}
>
  Click me to see popover
  <svelte:fragment
    slot="popover">
    This is the popover content
  </svelte:fragment>
</Popover>

<script>
import {Popover} from '@kws3/ui';
<\/script>
`})})]})]}),`
`,e.jsx(n.h5,{id:"import-the-css",children:"Import the CSS:"}),`
`,e.jsxs(n.p,{children:["This requires css from ",e.jsx(n.code,{children:"Tooltip"})," component."]}),`
`,e.jsx(s,{language:"javascript",code:t`@import '@kws3/ui/styles/Tooltip.scss';`}),`
`,e.jsx(n.h5,{id:"scss-customization-variables-with-default-values",children:"SCSS customization variables with default values:"}),`
`,e.jsx(s,{language:"css",code:t`
    $kws-popover-background-color: $background;
    $kws-popover-foreground-color: $text;
    $kws-popover-arrow-color: $background;
    $kws-popover-radius: $kws-tt-radius;
  `})]})}function X(o={}){const{wrapper:n}=Object.assign({},i(),o.components);return n?e.jsx(n,Object.assign({},o,{children:e.jsx(r,o)})):r(o)}export{X as default};
