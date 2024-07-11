import{j as e}from"./jsx-runtime-593b36f9.js";import{u as i}from"./index-a6b36cb5.js";import{M as p,C as l,e as c,f as s}from"./index-5adacd09.js";import{d as r}from"./index-356e4a49.js";import{M as a}from"./version-69ab0678.js";import{S as d}from"./Popover.stories-03fbeee2.js";import"./iframe-649ff2ef.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";import"./index-5a8fdfec.js";import"./RadialChart-a46fe6c5.js";import"./index-ae6f3512.js";import"./index-4339844e.js";import"./index-ce0c298e.js";import"./index-8cc5c1ab.js";import"./spread-8a54911c.js";import"./index-af29543d.js";import"./index-5da554f5.js";import"./index-b6377b69.js";import"./frameworkTypes-6fa5738f.js";function t(n){const o={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",p:"p",pre:"pre",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{}),`
`,e.jsx(o.h1,{id:"popover",children:"Popover"}),`
`,e.jsx(o.h2,{id:"display-contextual-popovers",children:"Display contextual popovers"}),`
`,e.jsx(p,{of:d}),`
`,e.jsx(l,{}),`
`,e.jsx(c,{}),`
`,e.jsx(o.h3,{id:"usage",children:"Usage"}),`
`,e.jsx(o.h5,{id:"import-the-component",children:"Import the component:"}),`
`,e.jsx(s,{code:r`import { Popover } from '@kws3/ui';`}),`
`,e.jsxs("div",{className:"columns is-multiline",children:[e.jsxs("div",{className:"column is-4",children:[e.jsx(o.h4,{id:"default",children:"Default"}),e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-html",children:`<Popover>
  Click me to see popover
  <svelte:fragment
    slot="popover">
    This is the popover content
  </svelte:fragment>
</Popover>

<script>
import {Popover} from '@kws3/ui';
<\/script>
`})})]}),e.jsxs("div",{className:"column is-4",children:[e.jsxs(o.h4,{id:"component-in-popover-slot",children:["Component in ",e.jsx(o.code,{children:"popover"})," slot"]}),e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-html",children:`<Popover>
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
`})})]}),e.jsxs("div",{className:"column is-4",children:[e.jsxs(o.h4,{id:"usage-of-external_target",children:["Usage of ",e.jsx(o.code,{children:"external_target"})]}),e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-html",children:`<Popover
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
`})})]}),e.jsxs("div",{className:"column is-6",children:[e.jsx(o.h4,{id:"manual-control",children:"Manual Control"}),e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-html",children:`<Popover bind:this={pop1}>
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
`})})]}),e.jsxs("div",{className:"column is-6",children:[e.jsx(o.h4,{id:"events",children:"Events"}),e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-html",children:`<Popover
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
`,e.jsx(o.h4,{id:"import-the-scss",children:"Import the SCSS:"}),`
`,e.jsx(o.p,{children:e.jsx(o.em,{children:"Default values shown as example"})}),`
`,e.jsx(s,{code:r`
    @use '@kws3/ui/styles/Tooltip.scss' with (
      $popover-background: cv.getVar("background"),
      $popover-color: cv.getVar("text"),
      $popover-arrow-color: cv.getVar("border"),
      $popover-shadow: 0 5px 10px -5px hsla(cv.getVar("shadow-h"), cv.getVar("shadow-s"), cv.getVar("shadow-l"), 0.4),
      $popover-radius: cv.getVar("radius-small")
    );
    `})]})}function _(n={}){const{wrapper:o}={...i(),...n.components};return o?e.jsx(o,{...n,children:e.jsx(t,{...n})}):t(n)}export{_ as default};
