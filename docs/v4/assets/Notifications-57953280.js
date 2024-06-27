import{j as s,M as i}from"./version-8c81c218.js";import{u as n}from"./index-88e578b6.js";import{M as a,C as r,e as c,f as h}from"./index-4d8b0680.js";import{d as l}from"./index-356e4a49.js";import{S as d}from"./Notifications.stories-351a2592.js";import"./iframe-81bb656e.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-75890171.js";import"./index-ae6f3512.js";import"./RadialChart-9a800552.js";import"./index-4339844e.js";import"./index-ce0c298e.js";import"./index-8cc5c1ab.js";import"./spread-8a54911c.js";import"./index-af29543d.js";import"./index-5da554f5.js";import"./frameworkTypes-6fa5738f.js";function e(t){const o={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...n(),...t.components};return s.jsxs(s.Fragment,{children:[s.jsx(i,{}),`
`,s.jsx(o.h1,{id:"notifications",children:"Notifications"}),`
`,s.jsx(o.h2,{id:"notifications-components-for-showing-floating-alerts",children:"Notifications components for showing floating alerts."}),`
`,s.jsx(a,{of:d}),`
`,s.jsx(r,{}),`
`,s.jsx(c,{}),`
`,s.jsxs("div",{className:"columns",children:[s.jsxs("div",{className:"column is-6",children:[s.jsx(o.h3,{id:"usage",children:"Usage"}),s.jsx(o.pre,{children:s.jsx(o.code,{className:"language-js",children:`import { Notifications } from '@kws3/ui';

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
`})})]}),s.jsxs("div",{className:"column is-6",children:[s.jsx(o.h3,{id:"usage-with-custom-component",children:"Usage with custom component"}),s.jsx(o.pre,{children:s.jsx(o.code,{className:"language-js",children:`import { Notifications } from '@kws3/ui';
import CustomComponent from "YourCustomComponent.svelte";

let {props, destroy} = Notifications.create({
  conmponent: CustomComponent,
  ...other_opts
});
`})}),s.jsxs(o.p,{children:["Your custom component has to dispatch an event called ",s.jsx(o.code,{children:"destroy"}),`
with `,s.jsx(o.code,{children:"$$props"}),` as an argument, so that it can close itself.
Example:`]}),s.jsx(o.pre,{children:s.jsx(o.code,{className:"language-html",children:`<!--YourCustomComponent.svelte-->
<div>This is custom notification</div>
<button on:click={closeMyself}>close</button>

<script>
import { createEventDispatcher } from "svelte";
const fire = createEventDispatcher();

const closeMyself = () => fire("destroy", $$props);
<\/script>
`})})]})]}),`
`,s.jsx(o.h4,{id:"import-the-scss",children:"Import the SCSS:"}),`
`,s.jsx(o.p,{children:s.jsx(o.em,{children:"Default values shown as example"})}),`
`,s.jsx(h,{code:l`
    @use '@kws3/ui/styles/FloatingUI.scss' with(
      $theme-colors: dv.$colors,
      $item-width: 25rem,
      $progressbar-radius: 0 cv.getVar("radius") cv.getVar("radius")
        cv.getVar("radius"),
      $notification-radius: cv.getVar("radius"),
      $notification-shadow:
        0 1px 4px
          hsla(
            cv.getVar("shadow-h"),
            cv.getVar("shadow-s"),
            cv.getVar("shadow-l"),
            0.12
          ),
        0 0 6px
          hsla(
            cv.getVar("shadow-h"),
            cv.getVar("shadow-s"),
            cv.getVar("shadow-l"),
            0.04
          ),
      $snackbar-radius: cv.getVar("radius"),
      $snackbar-shadow:
        0 1px 4px
          hsla(
            cv.getVar("shadow-h"),
            cv.getVar("shadow-s"),
            cv.getVar("shadow-l"),
            0.12
          ),
        0 0 6px
          hsla(
            cv.getVar("shadow-h"),
            cv.getVar("shadow-s"),
            cv.getVar("shadow-l"),
            0.04
          ),
      $toast-radius: 1.5em,
      $toast-shadow:
        0 1px 4px
          hsla(
            cv.getVar("shadow-h"),
            cv.getVar("shadow-s"),
            cv.getVar("shadow-l"),
            0.12
          ),
        0 0 6px
          hsla(
            cv.getVar("shadow-h"),
            cv.getVar("shadow-s"),
            cv.getVar("shadow-l"),
            0.04
          ),
    );
  `})]})}function S(t={}){const{wrapper:o}={...n(),...t.components};return o?s.jsx(o,{...t,children:s.jsx(e,{...t})}):e(t)}export{S as default};
