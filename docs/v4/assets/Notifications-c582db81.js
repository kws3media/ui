import{j as o,M as a}from"./version-1ebd099f.js";import{M as c,C as l,d as m,e}from"./index-ed8b7af3.js";import{d as n}from"./index-356e4a49.js";import{S as p}from"./Notifications.stories-0e8cde4b.js";import{u as r}from"./index-71d4d6da.js";import"./iframe-d0aba181.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";import"./index-349dcf19.js";import"./_getTag-7fd90005.js";import"./uniq-8956f76d.js";import"./index-1914c206.js";import"./RadialChart-31c1923f.js";import"./index-f0c04adc.js";import"./index-8a90618b.js";import"./spread-8a54911c.js";import"./index-af29543d.js";import"./index-81505e0c.js";import"./index-5da554f5.js";import"./frameworkTypes-60e558cb.js";function i(s){const t=Object.assign({h1:"h1",h2:"h2",h3:"h3",pre:"pre",code:"code",p:"p",h5:"h5"},r(),s.components);return o.jsxs(o.Fragment,{children:[o.jsx(a,{}),`
`,o.jsx(t.h1,{id:"notifications",children:"Notifications"}),`
`,o.jsx(t.h2,{id:"notifications-components-for-showing-floating-alerts",children:"Notifications components for showing floating alerts."}),`
`,o.jsx(c,{of:p}),`
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
`,o.jsx(e,{language:"javascript",code:n`@import 'path/to/node_modules/@kws3/ui/styles/FloatingUI.scss';`}),`
`,o.jsx(t.h5,{id:"scss-customization-variables-with-default-values",children:"SCSS customization variables with default values:"}),`
`,o.jsx(e,{language:"css",code:n`
    $kws-theme-colors: $colors;
    $kws3-floating-item-width: 30rem;
  `})]})}function _(s={}){const{wrapper:t}=Object.assign({},r(),s.components);return t?o.jsx(t,Object.assign({},s,{children:o.jsx(i,s)})):i(s)}export{_ as default};
