var t=Object.freeze,p=Object.defineProperty;var l=(s,o)=>t(p(s,"raw",{value:t(o||s.slice())}));import{j as e,M as u}from"./version-b0b5f48d.js";import{u as d}from"./index-41ab6891.js";import{M as c,C as m,e as f,f as r}from"./index-045aef30.js";import{d as i}from"./index-356e4a49.js";import{S as h}from"./FileUpload.stories-a5fc785d.js";import"./iframe-0d8aea47.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-75890171.js";import"./index-ae6f3512.js";import"./RadialChart-0c9d9241.js";import"./index-4339844e.js";import"./index-ce0c298e.js";import"./index-8cc5c1ab.js";import"./spread-8a54911c.js";import"./index-af29543d.js";import"./index-5da554f5.js";import"./frameworkTypes-9ac02643.js";var a;function n(s){const o={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",...d(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(u,{}),`
`,e.jsx(o.h1,{id:"fileupload",children:"FileUpload"}),`
`,e.jsx(o.h2,{id:"custom-file-upload-control",children:"Custom file upload control"}),`
`,e.jsx(c,{of:h}),`
`,e.jsx(m,{}),`
`,e.jsx(f,{}),`
`,e.jsx(o.h3,{id:"usage",children:"Usage"}),`
`,e.jsx(o.h4,{id:"import-the-component",children:"Import the component:"}),`
`,e.jsx(r,{code:i`import { FileUpload } from '@kws3/ui';`}),`
`,e.jsx(o.h5,{id:"import-the-scss",children:"Import the SCSS:"}),`
`,e.jsx(r,{code:i`@import '@kws3/ui/styles/FileUpload.scss';`}),`
`,e.jsx(o.h4,{id:"scss-customization-variables-with-default-values",children:"SCSS customization variables with default values:"}),`
`,e.jsx(r,{language:"css",code:i`
      $kws-theme-colors: $colors;
      $kws-fileupload-bg-color: $input-background-color;
      $kws-fileupload-border-color: $input-border-color;
      $kws-fileupload-shadow: $input-shadow;
      $kws-fileupload-radius: $radius;
      $kws-fileupload-text-color: $text;
      $kws-fileupload-disabled-bg-color: $input-disabled-background-color;
      $kws-fileupload-disabled-border-color: $input-disabled-border-color;
      $kws-fileupload-progress-bg-color: $success-light;
      $kws-fileupload-progress-text-color: $success-dark;
      $kws-fileupload-progress-anim-easing: $easeOutCustom;
    `}),`
`,e.jsx(o.h4,{id:"example",children:"Example:"}),`
`,e.jsx(r,{language:"html",code:i(a||(a=l([`
    <FileUpload
      on:file_chosen={(event) => onFileChosen(event)}
      on:file_uploaded
      on:file_upload_error
      max="1048579"
      allowed={["png", "jpg", "jpeg"]}
      message="Upload new avatar..."
      {disabled}
      classes="" />
    <script>
      import { FileUpload } from "@kws3/ui";
      function onFileChosen(event){
        let {getFile, progress, uploaded, error} = event.detail;
        var {name, key, size, file} = getFile();
        progress(0);
        uploadImage(
          file,
          function(e){
            progress(e.loaded);
          }
        ).then(function(r){
          data = r.response
          uploaded();
        })
        .catch(function(r){
          var user_message = "Failed to upload!";
          if (typeof r != 'undefined' && typeof r.response != 'undefined' && typeof r.response.records != 'undefined'){
              user_message = r.response.records.userMessage;
          }
          error(user_message);
        });
      }
    <\/script>
  `])))})]})}function E(s={}){const{wrapper:o}={...d(),...s.components};return o?e.jsx(o,{...s,children:e.jsx(n,{...s})}):n(s)}export{E as default};
