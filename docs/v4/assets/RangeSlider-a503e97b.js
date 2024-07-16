import{j as r}from"./jsx-runtime-f9e34c97.js";import{u as n}from"./index-e985353b.js";import{M as i,C as d,e as m,f as e}from"./index-2a9cb901.js";import{d as s}from"./index-356e4a49.js";import{M as c}from"./version-42e95f6f.js";import"./chunk-MZXVCX43-9b3ada54.js";import{S as u,M as p}from"./RangeSlider.stories-d407aa19.js";import"./iframe-6714d91b.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";import"./index-5a8fdfec.js";import"./RadialChart-80400b1c.js";import"./index-ae6f3512.js";import"./index-4339844e.js";import"./index-ce0c298e.js";import"./index-8cc5c1ab.js";import"./spread-8a54911c.js";import"./index-af29543d.js";import"./index-5da554f5.js";import"./frameworkTypes-6fa5738f.js";function a(o){const t={em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(c,{}),`
`,r.jsx(t.h1,{id:"range-slider",children:"Range Slider"}),`
`,r.jsx(t.h2,{id:"custom-range-slider",children:"Custom Range Slider"}),`
`,r.jsx(i,{of:u}),`
`,r.jsx(d,{of:p,layout:"padded"}),`
`,r.jsx(m,{}),`
`,r.jsx(t.h3,{id:"usage",children:"Usage"}),`
`,r.jsx(t.h4,{id:"import-the-component",children:"Import the component:"}),`
`,r.jsx(e,{code:s`import { RangeSlider } from '@kws3/ui';`}),`
`,r.jsx(t.h4,{id:"import-the-scss",children:"Import the SCSS:"}),`
`,r.jsx(t.p,{children:r.jsx(t.em,{children:"Default values shown as example"})}),`
`,r.jsx(e,{code:s`
      @use '@kws3/ui/styles/RangeSlider.scss' with(
        $theme-colors: dv.$colors,
        $radius: cv.getVar("radius"),
        $track-background: cv.getVar("border"),
        $track-radius: cv.getVar("radius"),
        $track-border: 0px solid cv.getVar("border"),
        $track-shadow: cv.getVar("input-shadow"),
        $thumb-background: cv.getVar("text-invert"),
        $thumb-radius: cv.getVar("radius"),
        $thumb-border: 1px solid cv.getVar("border"),
        $thumb-shadow: none,
        $thumb-to-track-ratio: 2,
        $output-width: 3rem,
        $output-background: cv.getVar("border-weak"),
        $output-color: cv.getVar("text"),
        $output-radius: cv.getVar("radius"),
      );
    `})]})}function _(o={}){const{wrapper:t}={...n(),...o.components};return t?r.jsx(t,{...o,children:r.jsx(a,{...o})}):a(o)}export{_ as default};
