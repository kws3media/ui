import{j as r,M as e}from"./version-1ebd099f.js";import{M as a,b as i}from"./index-ed8b7af3.js";import{S as d,M as m}from"./CustomForms.stories-0ea679fd.js";import{u as t}from"./index-71d4d6da.js";import"./iframe-d0aba181.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";import"./index-349dcf19.js";import"./_getTag-7fd90005.js";import"./uniq-8956f76d.js";import"./index-356e4a49.js";import"./index-1914c206.js";import"./index-1c3b7081.js";import"./index-81505e0c.js";import"./index-f0c04adc.js";function o(n){const s=Object.assign({h3:"h3",p:"p",code:"code",strong:"strong",pre:"pre"},t(),n.components);return r.jsxs(r.Fragment,{children:[r.jsx(e,{}),`
`,r.jsx(a,{of:d}),`
`,r.jsx(s.h3,{id:"custom-validator-example",children:"Custom Validator Example"}),`
`,r.jsxs(s.p,{children:["The ",r.jsx(s.code,{children:"isPasswordConfirmed"})," compares the password entered in two different fields to ensure that they are similar."]}),`
`,r.jsx(s.p,{children:r.jsx(s.strong,{children:"Example:"})}),`
`,r.jsx(s.pre,{children:r.jsx(s.code,{className:"language-html",children:`<form>
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
`,r.jsx(i,{of:m})]})}function k(n={}){const{wrapper:s}=Object.assign({},t(),n.components);return s?r.jsx(s,Object.assign({},n,{children:r.jsx(o,n)})):o(n)}export{k as default};
