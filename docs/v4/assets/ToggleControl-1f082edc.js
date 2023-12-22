import{j as o,M as r}from"./version-1ebd099f.js";import{D as i,M as m,C as g,d as c,e as s}from"./index-ed8b7af3.js";import{d as n}from"./index-356e4a49.js";import{S as p,M as d}from"./ToggleControl.stories-966f6e8c.js";import{u as a}from"./index-71d4d6da.js";import"./iframe-d0aba181.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";import"./index-349dcf19.js";import"./_getTag-7fd90005.js";import"./uniq-8956f76d.js";import"./RadialChart-31c1923f.js";import"./index-1914c206.js";import"./index-f0c04adc.js";import"./index-8a90618b.js";import"./spread-8a54911c.js";import"./index-af29543d.js";import"./index-81505e0c.js";import"./index-5da554f5.js";function l(t){const e=Object.assign({h3:"h3",h4:"h4",code:"code"},a(),t.components);return o.jsxs(o.Fragment,{children:[o.jsx(r,{}),`
`,o.jsx(i,{markdown:n`
# ToggleControl
## To be used when using Toggle within a form
#### To be used with &lt;Toggle&gt; & &lt;ToggleButtons&gt; components, so that they can be lined up with a &lt;label class="label"&gt; in existing forms.
#### It is a wrapper component with no functionality of it's own.
`}),`
`,o.jsx(m,{of:p}),`
`,o.jsx(g,{of:d}),`
`,o.jsx(c,{}),`
`,o.jsx(e.h3,{id:"usage",children:"Usage"}),`
`,o.jsx(e.h4,{id:"import-the-component",children:"Import the component:"}),`
`,o.jsx(s,{language:"javascript",code:n`import { ToggleControl  } from '@kws3/ui';`}),`
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
    `})]})}function O(t={}){const{wrapper:e}=Object.assign({},a(),t.components);return e?o.jsx(e,Object.assign({},t,{children:o.jsx(l,t)})):l(t)}export{O as default};
