import{j as t}from"./jsx-runtime-593b36f9.js";import{u as a}from"./index-a6b36cb5.js";import{M as i,C as m,e as d,f as o}from"./index-5adacd09.js";import{d as s}from"./index-356e4a49.js";import{M as c}from"./version-69ab0678.js";import"./chunk-MZXVCX43-9b3ada54.js";import{S as u,M as p}from"./RangeSlider.stories-637c043e.js";import"./iframe-649ff2ef.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";import"./index-5a8fdfec.js";import"./RadialChart-a46fe6c5.js";import"./index-ae6f3512.js";import"./index-4339844e.js";import"./index-ce0c298e.js";import"./index-8cc5c1ab.js";import"./spread-8a54911c.js";import"./index-af29543d.js";import"./index-5da554f5.js";import"./frameworkTypes-6fa5738f.js";function n(e){const r={em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",...a(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(c,{}),`
`,t.jsx(r.h1,{id:"range-slider",children:"Range Slider"}),`
`,t.jsx(r.h2,{id:"custom-range-slider",children:"Custom Range Slider"}),`
`,t.jsx(i,{of:u}),`
`,t.jsx(m,{of:p,layout:"padded"}),`
`,t.jsx(d,{}),`
`,t.jsx(r.h3,{id:"usage",children:"Usage"}),`
`,t.jsx(r.h4,{id:"import-the-component",children:"Import the component:"}),`
`,t.jsx(o,{code:s`import { RangeSlider } from '@kws3/ui';`}),`
`,t.jsx(r.h4,{id:"import-the-scss",children:"Import the SCSS:"}),`
`,t.jsx(r.p,{children:t.jsx(r.em,{children:"Default values shown as example"})}),`
`,t.jsx(o,{code:s`
      @use '@kws3/ui/styles/RangeSlider.scss' with(
        $theme-colors: dv.$colors,
        $radius: cv.getVar("radius"),
        $track-background: cv.getVar("border"),
        $track-radius: cv.getVar("radius"),
        $track-border: 0px solid cv.getVar("border"),
        $track-shadow: cv.getVar("input-shadow"),
        $thumb-background: cv.getVar("text-invert"),
        $thumb-radius: cv.getVar("radius-small"),
        $thumb-border: 1px solid cv.getVar("border"),
        $thumb-shadow: none,
        $thumb-to-track-ratio: 2,
        $output-width: 3rem,
        $output-background: cv.getVar("scheme-invert-ter"),
        $output-color: cv.getVar("text-invert"),
        $output-radius: cv.getVar("radius-small"),
      );
    `})]})}function _(e={}){const{wrapper:r}={...a(),...e.components};return r?t.jsx(r,{...e,children:t.jsx(n,{...e})}):n(e)}export{_ as default};
