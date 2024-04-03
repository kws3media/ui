var t=Object.freeze,p=Object.defineProperty;var a=(s,o)=>t(p(s,"raw",{value:t(o||s.slice())}));import{j as e,M as c}from"./version-4e36a9d9.js";import{M as u,C as m,d as f,e as r}from"./index-cb88d0be.js";import{d as i}from"./index-356e4a49.js";import{S as h}from"./FileUpload.stories-0620a1c5.js";import{u as d}from"./index-bf7d46a3.js";import"./iframe-b83abd24.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";import"./index-349dcf19.js";import"./_getTag-7fd90005.js";import"./uniq-8956f76d.js";import"./index-9bc519a8.js";import"./RadialChart-8a9389a1.js";import"./index-c009752d.js";import"./index-87030aea.js";import"./index-8cc5c1ab.js";import"./spread-8a54911c.js";import"./index-af29543d.js";import"./index-5da554f5.js";import"./frameworkTypes-60e558cb.js";var l;function n(s){const o=Object.assign({h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5"},d(),s.components);return e.jsxs(e.Fragment,{children:[e.jsx(c,{}),`
`,e.jsx(o.h1,{id:"fileupload",children:"FileUpload"}),`
`,e.jsx(o.h2,{id:"custom-file-upload-control",children:"Custom file upload control"}),`
`,e.jsx(u,{of:h}),`
`,e.jsx(m,{}),`
`,e.jsx(f,{}),`
`,e.jsx(o.h3,{id:"usage",children:"Usage"}),`
`,e.jsx(o.h4,{id:"import-the-component",children:"Import the component:"}),`
`,e.jsx(r,{language:"javascript",code:i`import { FileUpload } from '@kws3/ui';`}),`
`,e.jsx(o.h5,{id:"import-the-scss",children:"Import the SCSS:"}),`
`,e.jsx(r,{language:"javascript",code:i`@import '@kws3/ui/styles/FileUpload.scss';`}),`
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
`,e.jsx(r,{language:"html",code:i(l||(l=a([`
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
  `])))})]})}function L(s={}){const{wrapper:o}=Object.assign({},d(),s.components);return o?e.jsx(o,Object.assign({},s,{children:e.jsx(n,s)})):n(s)}export{L as default};
