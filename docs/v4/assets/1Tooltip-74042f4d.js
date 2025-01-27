import{j as e}from"./jsx-runtime-f80f9341.js";import{u as n}from"./index-e7737f15.js";import{ae as i,ai as a}from"./index-0d96c106.js";import{d as r}from"./index-356e4a49.js";import{M as l}from"./version-6fdd0533.js";import"./iframe-508739bf.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";import"./index-65ec3394.js";function s(o){const t={a:"a",code:"code",em:"em",h2:"h2",h4:"h4",hr:"hr",p:"p",pre:"pre",...n(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{}),`
`,e.jsx(i,{title:"Helpers/Tooltips/1. Overview"}),`
`,e.jsx(t.h2,{id:"tooltips",children:"Tooltips"}),`
`,e.jsx(t.p,{children:"Tooltips can be applied application-wide from a single place. Ideally in the entry file of your app."}),`
`,e.jsx(t.h4,{id:"usage",children:"Usage"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-js",children:`import {activateTooltips} from '@kws3/ui';
activateTooltips(container, { ...options });

//also need to import css, see below
`})}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"container"}),` is the CSS selector of the root container of your app.
For example: `,e.jsx(t.code,{children:"#mainApp"})," or ",e.jsx(t.code,{children:"html>body"}),"."]}),`
`,e.jsx("div",{className:"notification is-info is-light sb-unstyled",children:e.jsxs("p",{className:"",children:["Tooltips work via event delegation. So all events get attached to the root container.",e.jsx("br",{}),`
Tooltips can also be attached via the tooltip action, see: `,e.jsx("a",{href:"./?path=/docs/helpers-tooltips-3-tooltip-action--docs",children:"Tooltip Action"})]})}),`
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
`,e.jsx(a,{code:r`
    @use '@kws3/ui/styles/Tooltip.scss' with (
      $theme-colors: $colors,
      $background: cv.getVar("scheme-invert"),
      $color: cv.getVar("text-invert"),
      $arrow-size: 8px,
      $padding: 0.5rem,
      $radius: cv.getVar("radius-small"),
      $shadow: 0 5px 10px -5px hsla(cv.getVar("shadow-h"), cv.getVar("shadow-s"), cv.getVar("shadow-l"), 0.4)
    );
    `})]})}function g(o={}){const{wrapper:t}={...n(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(s,{...o})}):s(o)}export{g as default};
