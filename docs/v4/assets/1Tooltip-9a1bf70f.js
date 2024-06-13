import{j as t,M as i}from"./version-0f749014.js";import{u as s}from"./index-0fa0a3da.js";import{M as a}from"./index-08c8c852.js";import"./iframe-43c2c643.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-75890171.js";import"./index-356e4a49.js";function n(o){const e={a:"a",code:"code",h2:"h2",h4:"h4",h5:"h5",hr:"hr",p:"p",pre:"pre",...s(),...o.components};return t.jsxs(t.Fragment,{children:[t.jsx(i,{}),`
`,t.jsx(a,{title:"Helpers/Tooltips/1. Overview"}),`
`,t.jsx(e.h2,{id:"tooltips",children:"Tooltips"}),`
`,t.jsx(e.p,{children:"Tooltips can be applied application-wide from a single place. Ideally in the entry file of your app."}),`
`,t.jsx(e.h4,{id:"usage",children:"Usage"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-js",children:`import {activateTooltips} from '@kws3/ui';
activateTooltips(container, { ...options });

//also need to import css, see below
`})}),`
`,t.jsxs(e.p,{children:[t.jsx(e.code,{children:"container"}),` is the CSS selector of the root container of your app.
For example: `,t.jsx(e.code,{children:"#mainApp"})," or ",t.jsx(e.code,{children:"html>body"}),"."]}),`
`,t.jsx("div",{className:"notification is-info is-light",children:t.jsxs(e.p,{children:["Tooltips work via event delegation. So all events get attached to the root container.",t.jsx("br",{}),`
Tooltips can also be attached via the tooltip action, see: `,t.jsx("a",{href:"/docs/helpers-tooltips-3-tooltip-action--page",children:"Tooltip Action"})]})}),`
`,t.jsx(e.hr,{}),`
`,t.jsxs(e.p,{children:[t.jsx(e.code,{children:"options"})," is an object, and it mirrors all the options listed here: ",t.jsx(e.a,{href:"https://atomiks.github.io/tippyjs/v6/all-props/",rel:"nofollow",children:"https://atomiks.github.io/tippyjs/v6/all-props/"}),`
Default values of the options object:`]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-js",children:`{
  target: "[data-tooltip]", //CSS selector of elements that will trigger a tooltip
  animation: "scale", //can also use "fade"
  content(el) {
    return el.getAttribute("data-tooltip"); //displays the content of the attribute as tooltip
  },
  allowHTML: true, //can place HTML in the tooltip
  inertia: true, //inertia on animation
  offset: [0, 15], //placement offsets
  touch: true, //works on mobile, activated on touch
}
`})}),`
`,t.jsx(e.h4,{id:"import-the-css",children:"Import the CSS:"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-js",children:`@import '@kws3/ui/styles/Tooltip.scss';
`})}),`
`,t.jsx(e.h5,{id:"scss-customization-variables-with-default-values",children:"SCSS customization variables with default values:"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-css",children:`$kws-theme-colors: $colors;
$kws-tt-background-color: $scheme-invert-ter;
$kws-tt-foreground-color: $scheme-main;
$kws-tt-arrow-size: 8px;
$kws-tt-padding: 0.5rem;
$kws-tt-radius: $radius-small;
$kws-tt-shadow: 0 5px 15px -5px rgba(0, 0, 0, 0.65);
`})})]})}function j(o={}){const{wrapper:e}={...s(),...o.components};return e?t.jsx(e,{...o,children:t.jsx(n,{...o})}):n(o)}export{j as default};
