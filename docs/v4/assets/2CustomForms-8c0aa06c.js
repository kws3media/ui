import{j as r,M as e}from"./version-2dc044ef.js";import{u as t}from"./index-a1362516.js";import{M as a,d as i}from"./index-4853277e.js";import{S as d,M as m}from"./CustomForms.stories-fc7a5dba.js";import"./iframe-e9535448.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-75890171.js";import"./index-356e4a49.js";import"./index-ae6f3512.js";import"./index-6b22eff6.js";import"./index-8cc5c1ab.js";import"./index-4339844e.js";function s(o){const n={code:"code",h3:"h3",p:"p",pre:"pre",strong:"strong",...t(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e,{}),`
`,r.jsx(a,{of:d}),`
`,r.jsx(n.h3,{id:"custom-validator-example",children:"Custom Validator Example"}),`
`,r.jsxs(n.p,{children:["The ",r.jsx(n.code,{children:"isPasswordConfirmed"})," compares the password entered in two different fields to ensure that they are similar."]}),`
`,r.jsx(n.p,{children:r.jsx(n.strong,{children:"Example:"})}),`
`,r.jsx(n.pre,{children:r.jsx(n.code,{className:"language-html",children:`<form>
  <input class="{$errors.password ? 'is-danger' : ''}" bind:value={$data.password} />
  <input class="{$errors.confirm_password ? 'is-danger' : ''}" bind:value={$data.confirm_password} />
  <button disabled={!$isValid}>Submit</button>
</form>

<script>
  import { makeForms, notEmpty, withMsg } from "@kws3/ui/form";


  let isPasswordConfirmed = (v, { password }) => v && v === password;
  let form;
  let data;
  let errors;
  let isValid;
  let isTouched;
  let tracker;
  let validators = {
    password: withMsg("Password should not be empty", notEmpty),
    confirm_password: withMsg("Password is not confirm", isPasswordConfirmed),
  };

  $: load();

  function load() {
    form = makeForms({
      data: {
        password: "",
        confirm_password: "",
      },
      validators,
    });
    data = form.formData;
    errors = form.errors;
    isValid = form.isValid;
    isTouched = form.isTouched;
    tracker = form.tracker;
  }
<\/script>
`})}),`
`,r.jsx(i,{of:m})]})}function b(o={}){const{wrapper:n}={...t(),...o.components};return n?r.jsx(n,{...o,children:r.jsx(s,{...o})}):s(o)}export{b as default};
