(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{"./src/stories/controls/FileUpload/fileupload.stories.mdx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"args",(function(){return fileupload_stories_args})),__webpack_require__.d(__webpack_exports__,"fileUpload",(function(){return fileupload_stories_fileUpload}));__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/react/index.js");var esm=__webpack_require__("./node_modules/@mdx-js/react/dist/esm.js"),dist_esm=__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/index.js"),ts_dedent_esm=__webpack_require__("./node_modules/ts-dedent/esm/index.js"),version=__webpack_require__("./src/version.mdx"),ui=__webpack_require__("./packages/@kws3/ui/index.js"),internal=__webpack_require__("./node_modules/svelte/internal/index.mjs"),svelte=__webpack_require__("./node_modules/svelte/index.mjs");function create_if_block(ctx){let div2,div1,div0,figure,img,img_src_value;return{c(){div2=Object(internal.A)("div"),div1=Object(internal.A)("div"),div0=Object(internal.A)("div"),figure=Object(internal.A)("figure"),img=Object(internal.A)("img"),Object(internal.hb)(img.src,img_src_value=ctx[10]||"")||Object(internal.k)(img,"src",img_src_value),Object(internal.k)(img,"alt",""),Object(internal.k)(figure,"class","image is-128x128"),Object(internal.fb)(figure,"margin","0 auto 20px auto"),Object(internal.k)(div0,"class","is-text-centered"),Object(internal.k)(div1,"class","column"),Object(internal.k)(div2,"class","columns")},m(target,anchor){Object(internal.O)(target,div2,anchor),Object(internal.h)(div2,div1),Object(internal.h)(div1,div0),Object(internal.h)(div0,figure),Object(internal.h)(figure,img)},p(ctx,dirty){1024&dirty&&!Object(internal.hb)(img.src,img_src_value=ctx[10]||"")&&Object(internal.k)(img,"src",img_src_value)},d(detaching){detaching&&Object(internal.z)(div2)}}}function create_fragment(ctx){let div2,div0,kwsfileupload0,t0,p0,t2,div1,kwsfileupload1,t3,p1,t5,if_block_anchor,current;kwsfileupload0=new ui.r({props:{allowed:ctx[4],disabled:ctx[5],message:ctx[1],key:ctx[0],info:ctx[2],max:ctx[3],class:ctx[9],color:ctx[7],size:ctx[6],info_color:ctx[8]}}),kwsfileupload0.$on("file_chosen",ctx[12]),kwsfileupload0.$on("file_uploaded",ctx[13]),kwsfileupload0.$on("file_upload_error",ctx[14]),kwsfileupload1=new ui.r({props:{allowed:ctx[4],disabled:ctx[5],message:ctx[1],key:ctx[0],info:ctx[2],max:ctx[3],class:ctx[9],color:ctx[7],size:ctx[6],info_color:ctx[8]}}),kwsfileupload1.$on("file_chosen",ctx[15]),kwsfileupload1.$on("file_uploaded",ctx[16]),kwsfileupload1.$on("file_upload_error",ctx[17]);let if_block=ctx[10]&&create_if_block(ctx);return{c(){div2=Object(internal.A)("div"),div0=Object(internal.A)("div"),Object(internal.u)(kwsfileupload0.$$.fragment),t0=Object(internal.gb)(),p0=Object(internal.A)("p"),p0.textContent="This will succeed.",t2=Object(internal.gb)(),div1=Object(internal.A)("div"),Object(internal.u)(kwsfileupload1.$$.fragment),t3=Object(internal.gb)(),p1=Object(internal.A)("p"),p1.textContent="This will fail.",t5=Object(internal.gb)(),if_block&&if_block.c(),if_block_anchor=Object(internal.B)(),Object(internal.k)(p0,"class","is-block mt-2 has-text-success"),Object(internal.k)(div0,"class","column"),Object(internal.fb)(div0,"width","400px"),Object(internal.k)(p1,"class","is-block mt-2 has-text-danger"),Object(internal.k)(div1,"class","column"),Object(internal.fb)(div1,"width","400px"),Object(internal.k)(div2,"class","columns")},m(target,anchor){Object(internal.O)(target,div2,anchor),Object(internal.h)(div2,div0),Object(internal.R)(kwsfileupload0,div0,null),Object(internal.h)(div0,t0),Object(internal.h)(div0,p0),Object(internal.h)(div2,t2),Object(internal.h)(div2,div1),Object(internal.R)(kwsfileupload1,div1,null),Object(internal.h)(div1,t3),Object(internal.h)(div1,p1),Object(internal.O)(target,t5,anchor),if_block&&if_block.m(target,anchor),Object(internal.O)(target,if_block_anchor,anchor),current=!0},p(ctx,[dirty]){const kwsfileupload0_changes={};16&dirty&&(kwsfileupload0_changes.allowed=ctx[4]),32&dirty&&(kwsfileupload0_changes.disabled=ctx[5]),2&dirty&&(kwsfileupload0_changes.message=ctx[1]),1&dirty&&(kwsfileupload0_changes.key=ctx[0]),4&dirty&&(kwsfileupload0_changes.info=ctx[2]),8&dirty&&(kwsfileupload0_changes.max=ctx[3]),512&dirty&&(kwsfileupload0_changes.class=ctx[9]),128&dirty&&(kwsfileupload0_changes.color=ctx[7]),64&dirty&&(kwsfileupload0_changes.size=ctx[6]),256&dirty&&(kwsfileupload0_changes.info_color=ctx[8]),kwsfileupload0.$set(kwsfileupload0_changes);const kwsfileupload1_changes={};16&dirty&&(kwsfileupload1_changes.allowed=ctx[4]),32&dirty&&(kwsfileupload1_changes.disabled=ctx[5]),2&dirty&&(kwsfileupload1_changes.message=ctx[1]),1&dirty&&(kwsfileupload1_changes.key=ctx[0]),4&dirty&&(kwsfileupload1_changes.info=ctx[2]),8&dirty&&(kwsfileupload1_changes.max=ctx[3]),512&dirty&&(kwsfileupload1_changes.class=ctx[9]),128&dirty&&(kwsfileupload1_changes.color=ctx[7]),64&dirty&&(kwsfileupload1_changes.size=ctx[6]),256&dirty&&(kwsfileupload1_changes.info_color=ctx[8]),kwsfileupload1.$set(kwsfileupload1_changes),ctx[10]?if_block?if_block.p(ctx,dirty):(if_block=create_if_block(ctx),if_block.c(),if_block.m(if_block_anchor.parentNode,if_block_anchor)):if_block&&(if_block.d(1),if_block=null)},i(local){current||(Object(internal.ob)(kwsfileupload0.$$.fragment,local),Object(internal.ob)(kwsfileupload1.$$.fragment,local),current=!0)},o(local){Object(internal.pb)(kwsfileupload0.$$.fragment,local),Object(internal.pb)(kwsfileupload1.$$.fragment,local),current=!1},d(detaching){detaching&&Object(internal.z)(div2),Object(internal.x)(kwsfileupload0),Object(internal.x)(kwsfileupload1),detaching&&Object(internal.z)(t5),if_block&&if_block.d(detaching),detaching&&Object(internal.z)(if_block_anchor)}}}function onFileUploaded(){console.log("File uploaded successfully")}function onFileUploadError(){console.log("File uploaded successfully")}function instance($$self,$$props,$$invalidate){const fire=Object(svelte.a)();let{key:key="",message:message="Choose File...",info:info="",max:max=5e6,allowed:allowed="*",disabled:disabled=!1,size:size="",color:color="",info_color:info_color="grey"}=$$props,{class:klass=""}=$$props,image="";function onFileChosen(event,error_state=!1){fire("file_chosen");let{getFile:getFile,progress:progress,uploaded:uploaded,error:error}=event.detail;var file=getFile(),size=file.size;let progrss=0;progress(progrss);let inter_val=setInterval((()=>{if(progrss>size){if(error_state)error("Error on Upload"),$$invalidate(10,image="");else{uploaded();var reader=new FileReader;reader.readAsDataURL(file.file.get("userfile")),reader.onload=()=>{$$invalidate(10,image=String(reader.result))}}return progrss=0,void clearInterval(inter_val)}progrss+=~~(size/100),progress(progrss)}),50)}return $$self.$$set=$$props=>{"key"in $$props&&$$invalidate(0,key=$$props.key),"message"in $$props&&$$invalidate(1,message=$$props.message),"info"in $$props&&$$invalidate(2,info=$$props.info),"max"in $$props&&$$invalidate(3,max=$$props.max),"allowed"in $$props&&$$invalidate(4,allowed=$$props.allowed),"disabled"in $$props&&$$invalidate(5,disabled=$$props.disabled),"size"in $$props&&$$invalidate(6,size=$$props.size),"color"in $$props&&$$invalidate(7,color=$$props.color),"info_color"in $$props&&$$invalidate(8,info_color=$$props.info_color),"class"in $$props&&$$invalidate(9,klass=$$props.class)},[key,message,info,max,allowed,disabled,size,color,info_color,klass,image,onFileChosen,event=>onFileChosen(event,!1),()=>onFileUploaded(),()=>onFileUploadError(),event=>onFileChosen(event,!0),()=>onFileUploaded(),()=>onFileUploadError()]}class FileUpload_svelte_FileUpload extends internal.b{constructor(options){super(),Object(internal.N)(this,options,instance,create_fragment,internal.Z,{key:0,message:1,info:2,max:3,allowed:4,disabled:5,size:6,color:7,info_color:8,class:9})}}var FileUpload_svelte=FileUpload_svelte_FileUpload;FileUpload_svelte_FileUpload.__docgen={version:3,name:"FileUpload.svelte",data:[{visibility:"public",description:null,keywords:[],name:"key",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""},{visibility:"public",description:null,keywords:[],name:"message",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"Choose File..."},{visibility:"public",description:null,keywords:[],name:"info",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""},{visibility:"public",description:null,keywords:[],name:"max",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"number",type:"number"},defaultValue:5e6},{visibility:"public",description:null,keywords:[],name:"allowed",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"*"},{visibility:"public",description:null,keywords:[],name:"disabled",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1},{keywords:[{name:"type",description:"{import('"},{name:"kws3",description:""}],visibility:"public",description:"@type {import('",name:"size",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""},{keywords:[{name:"type",description:"{import('"},{name:"kws3",description:""}],visibility:"public",description:"@type {import('",name:"color",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""},{keywords:[{name:"type",description:"{import('"},{name:"kws3",description:""}],visibility:"public",description:"@type {import('",name:"info_color",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"grey"},{visibility:"public",description:null,keywords:[],name:"class",kind:"const",static:!1,readonly:!0,type:{kind:"type",text:"string",type:"string"},localName:"klass",defaultValue:""}],computed:[],methods:[],components:[],description:null,keywords:[],events:[{keywords:[],visibility:"public",description:"refire handled event for sotrybook to pick up in actions",name:"file_chosen"}],slots:[],refs:[]};var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,addon_actions_dist_esm=__webpack_require__("./node_modules/@storybook/addon-actions/dist/esm/index.js"),_excluded=["components"];function _extends(){return _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function _taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var fileupload_stories_args={info:"",key:"",message:"Choose File...",max:5e6,allowed:"*",color:"",info_color:"grey",class:"",disabled:!1},layoutProps={args:fileupload_stories_args};function MDXContent(_ref){var components=_ref.components,props=_objectWithoutProperties(_ref,_excluded);return Object(esm.b)("wrapper",_extends({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(esm.b)(version.a,{mdxType:"Version"}),Object(esm.b)(dist_esm.e,{title:"Forms/Controls/FileUpload",component:ui.r,args:fileupload_stories_args,argTypes:{color:{control:"select"},size:{control:"select"},info_color:{control:"select"}},mdxType:"Meta"}),Object(esm.b)(dist_esm.d,{markdown:Object(ts_dedent_esm.a)(_templateObject||(_templateObject=_taggedTemplateLiteralLoose(["\n# FileUpload\n## Custom file upload control\n"]))),mdxType:"Description"}),Object(esm.b)(dist_esm.c,{mdxType:"Canvas"},Object(esm.b)(dist_esm.g,{name:"FileUpload",args:fileupload_stories_args,mdxType:"Story"},(function(args){return{Component:FileUpload_svelte,props:args,on:{file_uploaded:Object(addon_actions_dist_esm.action)("file_uploaded"),file_upload_error:Object(addon_actions_dist_esm.action)("file_upload_error"),file_chosen:Object(addon_actions_dist_esm.action)("file_chosen")}}}))),Object(esm.b)(dist_esm.b,{story:"FileUpload",mdxType:"ArgsTable"}),Object(esm.b)("h3",null,"Usage"),Object(esm.b)("h4",null,"Import the component:"),Object(esm.b)(dist_esm.f,{language:"javascript",code:Object(ts_dedent_esm.a)(_templateObject2||(_templateObject2=_taggedTemplateLiteralLoose(["import { FileUpload } from '@kws3/ui';"]))),mdxType:"Source"}),Object(esm.b)("h5",null,"Import the SCSS:"),Object(esm.b)(dist_esm.f,{language:"javascript",code:Object(ts_dedent_esm.a)(_templateObject3||(_templateObject3=_taggedTemplateLiteralLoose(["@import '@kws3/ui/styles/FileUpload.scss';"]))),mdxType:"Source"}),Object(esm.b)("h4",null,"SCSS customization variables with default values:"),Object(esm.b)(dist_esm.f,{language:"css",code:Object(ts_dedent_esm.a)(_templateObject4||(_templateObject4=_taggedTemplateLiteralLoose(["\n      $kws-theme-colors: $colors;\n      $kws-fileupload-bg-color: $input-background-color;\n      $kws-fileupload-border-color: $input-border-color;\n      $kws-fileupload-shadow: $input-shadow;\n      $kws-fileupload-radius: $radius;\n      $kws-fileupload-text-color: $text;\n      $kws-fileupload-disabled-bg-color: $input-disabled-background-color;\n      $kws-fileupload-disabled-border-color: $input-disabled-border-color;\n      $kws-fileupload-progress-bg-color: $success-light;\n      $kws-fileupload-progress-text-color: $success-dark;\n      $kws-fileupload-progress-anim-easing: $easeOutCustom;\n    "]))),mdxType:"Source"}),Object(esm.b)("h4",null,"Example:"),Object(esm.b)(dist_esm.f,{language:"html",code:Object(ts_dedent_esm.a)(_templateObject5||(_templateObject5=_taggedTemplateLiteralLoose(['\n    <FileUpload\n      on:file_chosen={(event) => onFileChosen(event)}\n      on:file_uploaded\n      on:file_upload_error\n      max="1048579"\n      allowed={["png", "jpg", "jpeg"]}\n      message="Upload new avatar..."\n      {disabled}\n      classes="" />\n    <script>\n      import { FileUpload } from "@kws3/ui";\n      function onFileChosen(event){\n        let {getFile, progress, uploaded, error} = event.detail;\n        var {name, key, size, file} = getFile();\n        progress(0);\n        uploadImage(\n          file,\n          function(e){\n            progress(e.loaded);\n          }\n        ).then(function(r){\n          data = r.response\n          uploaded();\n        })\n        .catch(function(r){\n          var user_message = "Failed to upload!";\n          if (typeof r != \'undefined\' && typeof r.response != \'undefined\' && typeof r.response.records != \'undefined\'){\n              user_message = r.response.records.userMessage;\n          }\n          error(user_message);\n        });\n      }\n    <\/script>\n  ']))),mdxType:"Source"}))}MDXContent.isMDXComponent=!0;var fileupload_stories_fileUpload=function fileUpload(args){return{Component:FileUpload_svelte,props:args,on:{file_uploaded:Object(addon_actions_dist_esm.action)("file_uploaded"),file_upload_error:Object(addon_actions_dist_esm.action)("file_upload_error"),file_chosen:Object(addon_actions_dist_esm.action)("file_chosen")}}};fileupload_stories_fileUpload.storyName="FileUpload",fileupload_stories_fileUpload.args=fileupload_stories_args,fileupload_stories_fileUpload.parameters={storySource:{source:"args => ({\n  Component: FileUploadDecorator,\n  props: args,\n  on: {\n    'file_uploaded': action('file_uploaded'),\n    'file_upload_error': action('file_upload_error'),\n    'file_chosen': action('file_chosen')\n  }\n})"}};var componentMeta={title:"Forms/Controls/FileUpload",component:ui.r,args:fileupload_stories_args,argTypes:{color:{control:"select"},size:{control:"select"},info_color:{control:"select"}},includeStories:["fileUpload"]},mdxStoryNameToKey={FileUpload:"fileUpload"};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs=Object.assign({},componentMeta.parameters.docs||{},{page:function page(){return Object(esm.b)(dist_esm.a,{mdxStoryNameToKey:mdxStoryNameToKey,mdxComponentAnnotations:componentMeta},Object(esm.b)(MDXContent,null))}});__webpack_exports__.default=componentMeta}}]);