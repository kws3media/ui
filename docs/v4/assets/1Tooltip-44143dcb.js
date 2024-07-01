import{j as e,M as i}from"./version-b520517b.js";import{u as s}from"./index-45417e07.js";import{M as a,f as r}from"./index-bebc8d91.js";import{d as l}from"./index-356e4a49.js";import"./iframe-c20f7db4.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-75890171.js";function n(o){const t={a:"a",code:"code",em:"em",h2:"h2",h4:"h4",hr:"hr",p:"p",pre:"pre",...s(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{}),`
`,e.jsx(a,{title:"Helpers/Tooltips/1. Overview"}),`
`,e.jsx(t.h2,{id:"tooltips",children:"Tooltips"}),`
`,e.jsx(t.p,{children:"Tooltips can be applied application-wide from a single place. Ideally in the entry file of your app."}),`
`,e.jsx(t.h4,{id:"usage",children:"Usage"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-js",children:`import {activateTooltips} from '@kws3/ui';
activateTooltips(container, { ...options });

//also need to import css, see below
`})}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"container"}),` is the CSS selector of the root container of your app.
For example: `,e.jsx(t.code,{children:"#mainApp"})," or ",e.jsx(t.code,{children:"html>body"}),"."]}),`
`,e.jsx("div",{className:"notification is-info is-light",children:e.jsxs(t.p,{children:["Tooltips work via event delegation. So all events get attached to the root container.",e.jsx("br",{}),`
Tooltips can also be attached via the tooltip action, see: `,e.jsx("a",{href:"/docs/helpers-tooltips-3-tooltip-action--page",children:"Tooltip Action"})]})}),`
`,e.jsx(t.hr,{}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"options"})," is an object, and it mirrors all the options listed here: ",e.jsx(t.a,{href:"https://atomiks.github.io/tippyjs/v6/all-props/",rel:"nofollow",children:"https://atomiks.github.io/tippyjs/v6/all-props/"}),`
Default values of the options object:`]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-js",children:`{
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
`,e.jsx(t.h4,{id:"import-the-scss",children:"Import the SCSS:"}),`
`,e.jsx(t.p,{children:e.jsx(t.em,{children:"Default values shown as example"})}),`
`,e.jsx(r,{code:l`
    @use '@kws3/ui/styles/Tooltip.scss' with (
      $theme-colors: $colors,
      $background: cv.getVar("scheme-invert"),
      $color: cv.getVar("text-invert"),
      $arrow-size: 8px,
      $padding: 0.5rem,
      $radius: cv.getVar("radius-small"),
      $shadow: 0 5px 10px -5px hsla(cv.getVar("shadow-h"), cv.getVar("shadow-s"), cv.getVar("shadow-l"), 0.4)
    );
    `})]})}function f(o={}){const{wrapper:t}={...s(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(n,{...o})}):n(o)}export{f as default};
