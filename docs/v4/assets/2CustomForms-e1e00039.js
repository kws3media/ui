import{j as r}from"./jsx-runtime-3fcd980c.js";import{u as t}from"./index-8b4f4e69.js";import{M as e,d as a}from"./index-13487d6d.js";import{M as i}from"./version-b4edb0a0.js";import{S as d,M as m}from"./CustomForms.stories-fc7a5dba.js";import"./iframe-b8547dc1.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";import"./index-5a8fdfec.js";import"./index-356e4a49.js";import"./index-ae6f3512.js";import"./index-6b22eff6.js";import"./index-8cc5c1ab.js";import"./index-4339844e.js";function s(n){const o={code:"code",h3:"h3",p:"p",pre:"pre",strong:"strong",...t(),...n.components};return r.jsxs(r.Fragment,{children:[r.jsx(i,{}),`
`,r.jsx(e,{of:d}),`
`,r.jsx(o.h3,{id:"custom-validator-example",children:"Custom Validator Example"}),`
`,r.jsxs(o.p,{children:["The ",r.jsx(o.code,{children:"isPasswordConfirmed"})," compares the password entered in two different fields to ensure that they are similar."]}),`
`,r.jsx(o.p,{children:r.jsx(o.strong,{children:"Example:"})}),`
`,r.jsx(o.pre,{children:r.jsx(o.code,{className:"language-html",children:`<form>
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
`,r.jsx(a,{of:m})]})}function $(n={}){const{wrapper:o}={...t(),...n.components};return o?r.jsx(o,{...n,children:r.jsx(s,{...n})}):s(n)}export{$ as default};
