(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{"./src/stories/canvas/ESignature/esignature.stories.mdx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"args",(function(){return esignature_stories_args})),__webpack_require__.d(__webpack_exports__,"eSignature",(function(){return esignature_stories_eSignature}));__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/react/index.js");var esm=__webpack_require__("./node_modules/@mdx-js/react/dist/esm.js"),dist_esm=__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/index.js"),ts_dedent_esm=__webpack_require__("./node_modules/ts-dedent/esm/index.js"),version=__webpack_require__("./src/version.mdx"),ui=__webpack_require__("./packages/@kws3/ui/index.js"),internal=__webpack_require__("./node_modules/svelte/internal/index.mjs");function create_fragment(ctx){let div1,div0,label,t1,kwsesignature,current;return kwsesignature=new ui.s({props:{width:ctx[0],height:ctx[1],background_image:ctx[2],readonly:ctx[3],disabled:ctx[5],control_position:ctx[4]}}),{c(){div1=Object(internal.B)("div"),div0=Object(internal.B)("div"),label=Object(internal.B)("label"),label.textContent="Please sign here",t1=Object(internal.ib)(),Object(internal.v)(kwsesignature.$$.fragment),Object(internal.k)(label,"for",""),Object(internal.k)(label,"class","label"),Object(internal.k)(div0,"class","column has-text-centered"),Object(internal.k)(div1,"class","columns mb-6")},m(target,anchor){Object(internal.Q)(target,div1,anchor),Object(internal.h)(div1,div0),Object(internal.h)(div0,label),Object(internal.h)(div0,t1),Object(internal.T)(kwsesignature,div0,null),current=!0},p(ctx,[dirty]){const kwsesignature_changes={};1&dirty&&(kwsesignature_changes.width=ctx[0]),2&dirty&&(kwsesignature_changes.height=ctx[1]),4&dirty&&(kwsesignature_changes.background_image=ctx[2]),8&dirty&&(kwsesignature_changes.readonly=ctx[3]),32&dirty&&(kwsesignature_changes.disabled=ctx[5]),16&dirty&&(kwsesignature_changes.control_position=ctx[4]),kwsesignature.$set(kwsesignature_changes)},i(local){current||(Object(internal.rb)(kwsesignature.$$.fragment,local),current=!0)},o(local){Object(internal.sb)(kwsesignature.$$.fragment,local),current=!1},d(detaching){detaching&&Object(internal.A)(div1),Object(internal.y)(kwsesignature)}}}function instance($$self,$$props,$$invalidate){let{width:width="520px",height:height="170px",background_image:background_image="",readonly:readonly=!1,control_position:control_position="center",disabled:disabled=!1}=$$props;return $$self.$$set=$$props=>{"width"in $$props&&$$invalidate(0,width=$$props.width),"height"in $$props&&$$invalidate(1,height=$$props.height),"background_image"in $$props&&$$invalidate(2,background_image=$$props.background_image),"readonly"in $$props&&$$invalidate(3,readonly=$$props.readonly),"control_position"in $$props&&$$invalidate(4,control_position=$$props.control_position),"disabled"in $$props&&$$invalidate(5,disabled=$$props.disabled)},[width,height,background_image,readonly,control_position,disabled]}class ESignature_svelte_ESignature extends internal.b{constructor(options){super(),Object(internal.O)(this,options,instance,create_fragment,internal.bb,{width:0,height:1,background_image:2,readonly:3,control_position:4,disabled:5})}}var ESignature_svelte=ESignature_svelte_ESignature;ESignature_svelte_ESignature.__docgen={version:3,name:"ESignature.svelte",data:[{visibility:"public",description:null,keywords:[],name:"width",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"520px"},{visibility:"public",description:null,keywords:[],name:"height",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"170px"},{visibility:"public",description:null,keywords:[],name:"background_image",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""},{visibility:"public",description:null,keywords:[],name:"readonly",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1},{keywords:[{name:"type",description:"{Extract<import('kws3/ui/types').Positions, 'start'|'center'|'end'>}"}],visibility:"public",description:"Default position of controls",name:"control_position",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"center"},{visibility:"public",description:null,keywords:[],name:"disabled",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};__webpack_require__("./node_modules/@storybook/addon-actions/dist/esm/index.js");var _templateObject,_templateObject2,_templateObject3,_templateObject4,_excluded=["components"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function _taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var esignature_stories_args={width:"520px",height:"170px",background_image:"",readonly:!1,disabled:!1,control_position:"center",expand_from:"center",expand_to:"center",expand_scale:50,actions:["undo","redo","reset"]},layoutProps={args:esignature_stories_args};function MDXContent(_ref){var components=_ref.components,props=_objectWithoutProperties(_ref,_excluded);return Object(esm.b)("wrapper",_extends({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(esm.b)(version.a,{mdxType:"Version"}),Object(esm.b)(dist_esm.e,{title:"Canvas/ESignature",component:ui.s,args:esignature_stories_args,argTypes:{control_position:{control:"select"}},mdxType:"Meta"}),Object(esm.b)(dist_esm.d,{markdown:Object(ts_dedent_esm.a)(_templateObject||(_templateObject=_taggedTemplateLiteralLoose(["\n# ESignature\n## ESignature component for taking user pen input.\n"]))),mdxType:"Description"}),Object(esm.b)(dist_esm.c,{mdxType:"Canvas"},Object(esm.b)(dist_esm.g,{name:"ESignature",args:esignature_stories_args,mdxType:"Story"},(function(args){return{Component:ESignature_svelte,props:args}}))),Object(esm.b)(dist_esm.b,{story:"ESignature",mdxType:"ArgsTable"}),Object(esm.b)("h3",null,"Usage"),Object(esm.b)(dist_esm.f,{language:"javascript",code:Object(ts_dedent_esm.a)(_templateObject2||(_templateObject2=_taggedTemplateLiteralLoose(["import { ESignature } from '@kws3/ui';"]))),mdxType:"Source"}),Object(esm.b)("h5",null,"Import the CSS:"),Object(esm.b)(dist_esm.f,{language:"javascript",code:Object(ts_dedent_esm.a)(_templateObject3||(_templateObject3=_taggedTemplateLiteralLoose(["@import '@kws3/ui/styles/Canvas.scss';"]))),mdxType:"Source"}),Object(esm.b)("h3",null,"Usage Example"),Object(esm.b)(dist_esm.f,{language:"html",code:Object(ts_dedent_esm.a)(_templateObject4||(_templateObject4=_taggedTemplateLiteralLoose(['\n    <ESignature\n      bind:image\n      bind:is_touched\n      {width}\n      {height}\n      {readonly}\n      {disabled}\n      {expand_from}\n      {expand_to}\n      {expand_scale}\n      {actions}\n    />\n    \n  <script>\n    import { ESignature } from \'@kws3/ui\';\n    export let width = "520px",\n      height = "170px",\n      background_image = "",\n      readonly = false,\n      disabled = false,\n      image = "",\n      is_touched = false;\n      expand_from = "center",  \n      expand_to = "center",\n      expand_scale = 50,\n      actions = [\n        "undo",\n        "redo",\n        "reset",\n      ];  \n  <\/script>\n  ']))),mdxType:"Source"}))}MDXContent.isMDXComponent=!0;var esignature_stories_eSignature=function eSignature(args){return{Component:ESignature_svelte,props:args}};esignature_stories_eSignature.storyName="ESignature",esignature_stories_eSignature.args=esignature_stories_args,esignature_stories_eSignature.parameters={storySource:{source:"args => ({\n  Component: ESignatureDecorator,\n  props: args\n})"}};var componentMeta={title:"Canvas/ESignature",component:ui.s,args:esignature_stories_args,argTypes:{control_position:{control:"select"}},includeStories:["eSignature"]},mdxStoryNameToKey={ESignature:"eSignature"};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs=Object.assign({},componentMeta.parameters.docs||{},{page:function page(){return Object(esm.b)(dist_esm.a,{mdxStoryNameToKey:mdxStoryNameToKey,mdxComponentAnnotations:componentMeta},Object(esm.b)(MDXContent,null))}});__webpack_exports__.default=componentMeta}}]);