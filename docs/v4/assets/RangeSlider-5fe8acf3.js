import{j as r}from"./jsx-runtime-395e6f4a.js";import{u as i}from"./index-f84756d5.js";import{ae as n,af as d,ah as m,ai as e}from"./index-36797c46.js";import{d as s}from"./index-356e4a49.js";import{M as c}from"./version-80223c14.js";import"./chunk-454WOBUV-9b3ada54.js";import{S as u,M as p}from"./RangeSlider.stories-7cdceb79.js";import"./iframe-bc6190dd.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";import"./index-65ec3394.js";import"./RadialChart-ecf50d11.js";import"./index-ae6f3512.js";import"./index-4339844e.js";import"./index-ce0c298e.js";import"./index-8cc5c1ab.js";import"./spread-8a54911c.js";import"./index-af29543d.js";import"./index-5da554f5.js";import"./frameworkTypes-6fa5738f.js";function a(o){const t={em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",...i(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(c,{}),`
`,r.jsx(t.h1,{id:"range-slider",children:"Range Slider"}),`
`,r.jsx(t.h2,{id:"custom-range-slider",children:"Custom Range Slider"}),`
`,r.jsx(n,{of:u}),`
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
    `})]})}function _(o={}){const{wrapper:t}={...i(),...o.components};return t?r.jsx(t,{...o,children:r.jsx(a,{...o})}):a(o)}export{_ as default};
