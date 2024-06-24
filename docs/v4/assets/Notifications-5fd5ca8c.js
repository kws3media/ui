import{j as o,M as c}from"./version-2dc044ef.js";import{u as r}from"./index-a1362516.js";import{M as a,C as l,e as m,f as e}from"./index-4853277e.js";import{d as n}from"./index-356e4a49.js";import{S as p}from"./Notifications.stories-f177d805.js";import"./iframe-e9535448.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-75890171.js";import"./index-ae6f3512.js";import"./RadialChart-bca8d5a9.js";import"./index-4339844e.js";import"./index-ce0c298e.js";import"./index-8cc5c1ab.js";import"./spread-8a54911c.js";import"./index-af29543d.js";import"./index-5da554f5.js";import"./frameworkTypes-9ac02643.js";function i(s){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",h5:"h5",p:"p",pre:"pre",...r(),...s.components};return o.jsxs(o.Fragment,{children:[o.jsx(c,{}),`
`,o.jsx(t.h1,{id:"notifications",children:"Notifications"}),`
`,o.jsx(t.h2,{id:"notifications-components-for-showing-floating-alerts",children:"Notifications components for showing floating alerts."}),`
`,o.jsx(a,{of:p}),`
`,o.jsx(l,{}),`
`,o.jsx(m,{}),`
`,o.jsxs("div",{className:"columns",children:[o.jsxs("div",{className:"column is-6",children:[o.jsx(t.h3,{id:"usage",children:"Usage"}),o.jsx(t.pre,{children:o.jsx(t.code,{className:"language-js",children:`import { Notifications } from '@kws3/ui';

// Push notification like this
let {props, destroy} = Notifications.create({
  title: "Test Title",
  message: "I am a customized Floating notification...",
  persistent: true,
  dismissable: false,
  position: "top",
  color: "info",
  beforeClose: (props) => {
    //do something here before close
  },
  afterClose: (props) => {
    //do something here after close
  },
});

// notification will close after duration expires
// or you can close it manually like this:
destroy();

//you can also close it like this:
Notifications.remove(props);
//where \`props\` is the from the output of Notifications.create()
`})})]}),o.jsxs("div",{className:"column is-6",children:[o.jsx(t.h3,{id:"usage-with-custom-component",children:"Usage with custom component"}),o.jsx(t.pre,{children:o.jsx(t.code,{className:"language-js",children:`import { Notifications } from '@kws3/ui';
import CustomComponent from "YourCustomComponent.svelte";

let {props, destroy} = Notifications.create({
  conmponent: CustomComponent,
  ...other_opts
});
`})}),o.jsxs(t.p,{children:["Your custom component has to dispatch an event called ",o.jsx(t.code,{children:"destroy"}),`
with `,o.jsx(t.code,{children:"$$props"}),` as an argument, so that it can close itself.
Example:`]}),o.jsx(t.pre,{children:o.jsx(t.code,{className:"language-html",children:`<!--YourCustomComponent.svelte-->
<div>This is custom notification</div>
<button on:click={closeMyself}>close</button>

<script>
import { createEventDispatcher } from "svelte";
const fire = createEventDispatcher();

const closeMyself = () => fire("destroy", $$props);
<\/script>
`})})]})]}),`
`,o.jsx(t.h5,{id:"import-the-css",children:"Import the CSS:"}),`
`,o.jsx(e,{code:n`@import 'path/to/node_modules/@kws3/ui/styles/FloatingUI.scss';`}),`
`,o.jsx(t.h5,{id:"scss-customization-variables-with-default-values",children:"SCSS customization variables with default values:"}),`
`,o.jsx(e,{language:"css",code:n`
    $kws-theme-colors: $colors;
    $kws3-floating-item-width: 30rem;
  `})]})}function E(s={}){const{wrapper:t}={...r(),...s.components};return t?o.jsx(t,{...s,children:o.jsx(i,{...s})}):i(s)}export{E as default};
