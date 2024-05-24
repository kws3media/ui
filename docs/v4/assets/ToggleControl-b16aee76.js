import{j as o,M as r}from"./version-36e7533e.js";import{u as a}from"./index-106c01c9.js";import{D as i,M as m,C as c,e as g,f as s}from"./index-cb4e5ec9.js";import{d as n}from"./index-356e4a49.js";import{S as p,M as d}from"./ToggleControl.stories-de34dc03.js";import"./iframe-bdeabeba.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-75890171.js";import"./RadialChart-19f46828.js";import"./index-ae6f3512.js";import"./index-4339844e.js";import"./index-ce0c298e.js";import"./index-8cc5c1ab.js";import"./spread-8a54911c.js";import"./index-af29543d.js";import"./index-5da554f5.js";function l(t){const e={code:"code",h3:"h3",h4:"h4",...a(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(r,{}),`
`,o.jsx(i,{markdown:n`
# ToggleControl
## To be used when using Toggle within a form
#### To be used with &lt;Toggle&gt; & &lt;ToggleButtons&gt; components, so that they can be lined up with a &lt;label class="label"&gt; in existing forms.
#### It is a wrapper component with no functionality of it's own.
`}),`
`,o.jsx(m,{of:p}),`
`,o.jsx(c,{of:d}),`
`,o.jsx(g,{}),`
`,o.jsx(e.h3,{id:"usage",children:"Usage"}),`
`,o.jsx(e.h4,{id:"import-the-component",children:"Import the component:"}),`
`,o.jsx(s,{code:n`import { ToggleControl  } from '@kws3/ui';`}),`
`,o.jsxs(e.h4,{id:"example-with-toggle",children:["Example with ",o.jsx(e.code,{children:"<Toggle>"})]}),`
`,o.jsx(s,{language:"jsx",code:n`
    <ToggleControl>
      <label for="some-primary-text" class="label">
        Primary Label
        <small class="is-block help">Some secondary Text</small>
      </label>
      <Toggle  />
    </ToggleControl>
    `}),`
`,o.jsxs(e.h4,{id:"example-with-togglebuttons",children:["Example with ",o.jsx(e.code,{children:"<ToggleButtons>"})]}),`
`,o.jsx(s,{language:"jsx",code:n`
    <ToggleControl>
      <label for="some-secondary-text" class="label">
        Secondary Label
        <small class="is-block help">Some secondary Text</small>
      </label>
      <ToggleButtons
        options='{[
          {"name": "Yes", "value": 1},
          {"name": "No", "value": 0},
          {"name": "Maybe", "value": null}
        ]}'
      />
    </ToggleControl>
    `})]})}function E(t={}){const{wrapper:e}={...a(),...t.components};return e?o.jsx(e,{...t,children:o.jsx(l,{...t})}):l(t)}export{E as default};
