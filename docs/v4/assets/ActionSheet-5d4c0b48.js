var n=Object.freeze,u=Object.defineProperty;var a=(e,t)=>n(u(e,"raw",{value:n(t||e.slice())}));import{j as s,M as m}from"./version-006acd3a.js";import{M as p,b as d,e as i,d as x}from"./index-2f8575b5.js";import{d as o}from"./index-356e4a49.js";import{S as j,M as c}from"./ActionSheet.stories-ea988880.js";import{u as h}from"./index-19db5137.js";import"./iframe-3cfa3624.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";import"./index-349dcf19.js";import"./_getTag-7fd90005.js";import"./uniq-8956f76d.js";import"./RadialChart-a276cee1.js";import"./index-9bc519a8.js";import"./index-c009752d.js";import"./index-87030aea.js";import"./index-8cc5c1ab.js";import"./spread-8a54911c.js";import"./index-af29543d.js";import"./index-5da554f5.js";var l;function r(e){const t=Object.assign({h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5"},h(),e.components);return s.jsxs(s.Fragment,{children:[s.jsx(m,{}),`
`,s.jsx(t.h1,{id:"actionsheet",children:"ActionSheet"}),`
`,s.jsx(t.h2,{id:"actionsheet-components-for-showing-popups",children:"ActionSheet components for showing popups."}),`
`,s.jsx(p,{of:j}),`
`,s.jsx(d,{of:c}),`
`,s.jsx(i,{of:c}),`
`,s.jsx(x,{}),`
`,s.jsx(t.h3,{id:"usage",children:"Usage"}),`
`,s.jsx(i,{language:"javascript",code:o`import { ActionSheet } from '@kws3/ui';`}),`
`,s.jsx(t.h4,{id:"import-the-scss",children:"Import the SCSS:"}),`
`,s.jsx(i,{language:"javascript",code:o`@import '@kws3/ui/styles/ActionSheet.scss';`}),`
`,s.jsx(t.h5,{id:"scss-customization-variables-with-default-values",children:"SCSS customization variables with default values:"}),`
`,s.jsx(i,{language:"css",code:o`
    $kws-actionsheet-background: $background;
    $kws-actionsheet-box-shadow: $card-shadow;
    $kws-actionsheet-box-radius: $radius;
  `}),`
`,s.jsx(t.h3,{id:"example",children:"Example"}),`
`,s.jsx(i,{language:"html",code:o(l||(l=a([`
    <div class="columns">
      <div class="column">
        <ActionSheet
          bind:is_active
          {closable}
          {close_on_click_outside}
          {style}
          class={klass}>
          <h1 class="title">This is a Heading</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <ul class="menu-list">
            <li><a href={"javascript:void(0)"}>Menu 1</a></li>
            <li><a href={"javascript:void(0)"}>Menu 2</a></li>
          </ul>
          <hr class="is-small" />
          <button
            class="button is-danger is-fullwidth"
            type="button"
            on:click={() => (is_active = false)}>Close Action Sheet</button>
        </ActionSheet>
      </div>
    </div>
    <button
      class="button is-primary"
      type="button"
      on:click={() => (is_active = true)}>Open Action Sheet</button>
    <script>
      import { ActionSheet } from "@kws3/ui";
      export let is_active = false,
        closable = true,
        close_on_click_outside = true,
        style = "";
      let klass = "";
      export { klass as class };
    <\/script>
  `])))})]})}function H(e={}){const{wrapper:t}=Object.assign({},h(),e.components);return t?s.jsx(t,Object.assign({},e,{children:s.jsx(r,e)})):r(e)}export{H as default};
