var n=Object.freeze,p=Object.defineProperty;var r=(e,s)=>n(p(e,"raw",{value:n(s||e.slice())}));import{j as t}from"./jsx-runtime-b9f2f282.js";import{u as m}from"./index-99bc58a8.js";import{M as h,d as u,f as o,e as d}from"./index-59a8ee7e.js";import{d as i}from"./index-356e4a49.js";import{M as x}from"./version-ea14a979.js";import{S as f,M as c}from"./ActionSheet.stories-5fead165.js";import"./iframe-55e7f7a7.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";import"./index-5a8fdfec.js";import"./RadialChart-08c37f4d.js";import"./index-ae6f3512.js";import"./index-4339844e.js";import"./index-ce0c298e.js";import"./index-8cc5c1ab.js";import"./spread-8a54911c.js";import"./index-af29543d.js";import"./index-5da554f5.js";var l;function a(e){const s={em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",...m(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(x,{}),`
`,t.jsx(s.h1,{id:"actionsheet",children:"ActionSheet"}),`
`,t.jsx(s.h2,{id:"actionsheet-components-for-showing-popups",children:"ActionSheet components for showing popups."}),`
`,t.jsx(h,{of:f}),`
`,t.jsx(u,{of:c}),`
`,t.jsx(o,{of:c}),`
`,t.jsx(d,{}),`
`,t.jsx(s.h3,{id:"usage",children:"Usage"}),`
`,t.jsx(s.h4,{id:"import-the-component",children:"Import the component:"}),`
`,t.jsx(o,{code:i`import { ActionSheet } from '@kws3/ui';`}),`
`,t.jsx(s.h4,{id:"import-the-scss",children:"Import the SCSS:"}),`
`,t.jsx(s.p,{children:t.jsx(s.em,{children:"Default values shown as example"})}),`
`,t.jsx(o,{code:i`
      @use '@kws3/ui/styles/ActionSheet.scss' with(
        $background: cv.getVar("background"),
        $box-shadow: cv.getVar("shadow"),
        $box-radius: cv.getVar("radius")
      );`}),`
`,t.jsx(s.h3,{id:"example",children:"Example"}),`
`,t.jsx(o,{language:"html",code:i(l||(l=r([`
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
  `])))})]})}function F(e={}){const{wrapper:s}={...m(),...e.components};return s?t.jsx(s,{...e,children:t.jsx(a,{...e})}):a(e)}export{F as default};
