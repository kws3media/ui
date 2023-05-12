(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{"./src/stories/helpers/FloatingUI/snackbars.stories.mdx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"args",(function(){return snackbars_stories_args})),__webpack_require__.d(__webpack_exports__,"snackbars",(function(){return snackbars_stories_snackbars}));__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/react/index.js");var esm=__webpack_require__("./node_modules/@mdx-js/react/dist/esm.js"),dist_esm=__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/index.js"),ts_dedent_esm=__webpack_require__("./node_modules/ts-dedent/esm/index.js"),version=__webpack_require__("./src/version.mdx"),internal=__webpack_require__("./node_modules/svelte/internal/index.mjs"),ui=__webpack_require__("./packages/@kws3/ui/index.js");function create_fragment(ctx){let div2,div0,button0,t1,div1,button1,mounted,dispose;return{c(){div2=Object(internal.B)("div"),div0=Object(internal.B)("div"),button0=Object(internal.B)("button"),button0.textContent="Create Snackbar",t1=Object(internal.ib)(),div1=Object(internal.B)("div"),button1=Object(internal.B)("button"),button1.textContent="Create Snackbar With Custom Buttons",Object(internal.k)(button0,"class","button is-primary"),Object(internal.k)(button0,"type","button"),Object(internal.k)(div0,"class","column has-text-centered"),Object(internal.k)(button1,"class","button is-primary"),Object(internal.k)(button1,"type","button"),Object(internal.k)(div1,"class","column has-text-centered"),Object(internal.k)(div2,"class","columns")},m(target,anchor){Object(internal.Q)(target,div2,anchor),Object(internal.h)(div2,div0),Object(internal.h)(div0,button0),Object(internal.h)(div2,t1),Object(internal.h)(div2,div1),Object(internal.h)(div1,button1),mounted||(dispose=[Object(internal.S)(button0,"click",ctx[0]),Object(internal.S)(button1,"click",ctx[1])],mounted=!0)},p:internal.U,i:internal.U,o:internal.U,d(detaching){detaching&&Object(internal.A)(div2),mounted=!1,Object(internal.ab)(dispose)}}}function instance($$self,$$props,$$invalidate){let{message:message="",duration:duration=3e3,color:color="primary",position:position="bottom-right",light:light=!1,persistent:persistent=!1,context:context=1}=$$props;let count=1;return $$self.$$set=$$props=>{"message"in $$props&&$$invalidate(2,message=$$props.message),"duration"in $$props&&$$invalidate(3,duration=$$props.duration),"color"in $$props&&$$invalidate(4,color=$$props.color),"position"in $$props&&$$invalidate(5,position=$$props.position),"light"in $$props&&$$invalidate(6,light=$$props.light),"persistent"in $$props&&$$invalidate(7,persistent=$$props.persistent),"context"in $$props&&$$invalidate(8,context=$$props.context)},[()=>{let{props:props,destroy:destroy}=ui.cb.create({duration:duration,color:color,position:position,persistent:persistent,context:context,light:light,message:count+" - "+message});count++},()=>{let{props:props,destroy:destroy}=ui.cb.create({duration:duration,color:color,position:position,persistent:persistent,context:context,light:light,message:count+" - "+message,buttons:[{text:"Undo",color:"danger",click:()=>alert("Undo clicked")},"Ok"]});count++},message,duration,color,position,light,persistent,context,["Ok"]]}class Snackbars_svelte_Snackbars extends internal.b{constructor(options){super(),Object(internal.O)(this,options,instance,create_fragment,internal.bb,{message:2,duration:3,color:4,position:5,light:6,persistent:7,context:8,buttons:9})}get buttons(){return this.$$.ctx[9]}}var Snackbars_svelte=Snackbars_svelte_Snackbars;Snackbars_svelte_Snackbars.__docgen={version:3,name:"Snackbars.svelte",data:[{keywords:[],visibility:"public",description:"Message in the snackbar",name:"message",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""},{keywords:[],visibility:"public",description:"Duration of the snackbar",name:"duration",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"number",type:"number"},defaultValue:3e3},{keywords:[{name:"type",description:"{import('kws3/ui/types').ColorOptions}"}],visibility:"public",description:"Toast snackbar background color",name:"color",kind:"let",static:!1,readonly:!1,type:{kind:"union",text:" ColorOptions:| ''|'primary'|'success'|'warning'|'info'|'danger'|'dark'|'light'|'link'",type:[{kind:"const",text:"''",type:"string",value:""},{kind:"const",text:"'primary'",type:"string",value:"primary"},{kind:"const",text:"'success'",type:"string",value:"success"},{kind:"const",text:"'warning'",type:"string",value:"warning"},{kind:"const",text:"'info'",type:"string",value:"info"},{kind:"const",text:"'danger'",type:"string",value:"danger"},{kind:"const",text:"'dark'",type:"string",value:"dark"},{kind:"const",text:"'light'",type:"string",value:"light"},{kind:"const",text:"'link'",type:"string",value:"link"}],importPath:"kws3/ui/types"},defaultValue:"primary"},{keywords:[{name:"type",description:"{import('kws3/ui/types').FloatiePositions}"}],visibility:"public",description:'Position of the snackbar. `""` defaults to `bottom-right`. Can be modified globally in framework settings',name:"position",kind:"let",static:!1,readonly:!1,type:{kind:"union",text:" FloatiePositions:| ''|'top'|'bottom'|'top-left'|'top-right'|'bottom-left'|'bottom-right'",type:[{kind:"const",text:"''",type:"string",value:""},{kind:"const",text:"'top'",type:"string",value:"top"},{kind:"const",text:"'bottom'",type:"string",value:"bottom"},{kind:"const",text:"'top-left'",type:"string",value:"top-left"},{kind:"const",text:"'top-right'",type:"string",value:"top-right"},{kind:"const",text:"'bottom-left'",type:"string",value:"bottom-left"},{kind:"const",text:"'bottom-right'",type:"string",value:"bottom-right"}],importPath:"kws3/ui/types"},defaultValue:"bottom-right"},{keywords:[],visibility:"public",description:"Light color variant for snackbar box and contents",name:"light",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1},{keywords:[],visibility:"public",description:"A persistent snackbar without duration, does not auto-dismiss after `duration` has elapsed",name:"persistent",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1},{keywords:[],visibility:"public",description:"A Custom value that can be passed in to the Snackbar, useful for identification purposes.",name:"context",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"number",type:"number"},defaultValue:1},{keywords:[],visibility:"public",description:"List of buttons to show in snackbar, can be an array of objects or array of strings\n\nIf objects are used, the shape is:  `{text: <string>, color: <string>, click: <function>}`",name:"buttons",kind:"const",static:!1,readonly:!0,type:{kind:"type",text:"array",type:"array"}}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};__webpack_require__("./node_modules/@storybook/addon-actions/dist/esm/index.js");var _templateObject,_templateObject2,_templateObject3,_excluded=["components"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function _taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var snackbars_stories_args={message:"I am a Snackbar...",duration:3e3,color:"primary",light:!1,position:"bottom-right",persistent:!1,buttons:["Ok"],context:1},layoutProps={args:snackbars_stories_args};function MDXContent(_ref){var components=_ref.components,props=_objectWithoutProperties(_ref,_excluded);return Object(esm.b)("wrapper",_extends({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(esm.b)(version.a,{mdxType:"Version"}),Object(esm.b)(dist_esm.e,{title:"Helpers/Floating UI/Snackbars",component:Snackbars_svelte,args:snackbars_stories_args,argTypes:{color:{control:"select"},position:{control:"select"}},mdxType:"Meta"}),Object(esm.b)(dist_esm.d,{markdown:Object(ts_dedent_esm.a)(_templateObject||(_templateObject=_taggedTemplateLiteralLoose(["\n# Snackbars\n## Snackbars components for showing floating alerts.\n"]))),mdxType:"Description"}),Object(esm.b)(dist_esm.c,{mdxType:"Canvas"},Object(esm.b)(dist_esm.g,{name:"Snackbars",args:snackbars_stories_args,mdxType:"Story"},(function(args){return{Component:Snackbars_svelte,props:args}}))),Object(esm.b)(dist_esm.b,{story:"Snackbars",mdxType:"ArgsTable"}),Object(esm.b)("div",{class:"notification is-danger is-light"},Object(esm.b)("b",null,"This is not a declarative component."),Object(esm.b)("br",null),Object(esm.b)("small",null,"It can only be used programatically.")),Object(esm.b)("div",{class:"columns"},Object(esm.b)("div",{class:"column is-6"},Object(esm.b)("h3",null,"Usage"),Object(esm.b)("pre",null,Object(esm.b)("code",{parentName:"pre",className:"language-js"},'import { Snackbars } from \'@kws3/ui\';\n\n// Push snackbar like this\nlet {props, destroy} = Snackbars.create({\n  message: "I am a snackbar...",\n  persistent: true,\n  position: "top",\n  color: "info",\n  beforeClose: (props) => {\n    //do something here before close\n  },\n  afterClose: (props) => {\n    //do something here after close\n  },\n});\n\n// snackbar will close after duration expires\n// or you can close it manually like this:\ndestroy();\n\n//you can also close it like this:\nSnackbars.remove(props);\n//where `props` is the from the output of Snackbars.create() \n'))),Object(esm.b)("div",{class:"column is-6"},Object(esm.b)("h3",null,"Usage with custom buttons"),Object(esm.b)("p",null,Object(esm.b)("inlineCode",{parentName:"p"},"buttons")," accept an array of objects or array of strings"),Object(esm.b)("p",null,"If objects are used, the shape is:\n",Object(esm.b)("inlineCode",{parentName:"p"},"{\n  text: <string>, \n  color: <string>, \n  click: <function>\n}"),"\nExample:"),Object(esm.b)("pre",null,Object(esm.b)("code",{parentName:"pre",className:"language-js"},'  let {props, destroy} = Snackbars.create({\n    ...other_opts,\n    buttons:[\n      {\n        text: "Undo", //button text\n        color: "warning", //button text color\n        click: () => {alert("Undo clicked")} //click handler\n      },\n      "Ok" //just a string\n    ]\n  });\n')),Object(esm.b)("div",{class:"notification is-info is-light"},"All button clicks will close the Snackbar.",Object(esm.b)("br",null),"If there is a custom click handler, Snackbar will close after running the click handler."))),Object(esm.b)("h5",null,"Import the CSS:"),Object(esm.b)(dist_esm.f,{language:"javascript",code:Object(ts_dedent_esm.a)(_templateObject2||(_templateObject2=_taggedTemplateLiteralLoose(["@import 'path/to/node_modules/@kws3/ui/styles/FloatingUI.scss';"]))),mdxType:"Source"}),Object(esm.b)("h5",null,"SCSS customization variables with default values:"),Object(esm.b)(dist_esm.f,{language:"css",code:Object(ts_dedent_esm.a)(_templateObject3||(_templateObject3=_taggedTemplateLiteralLoose(["\n    $kws-theme-colors: $colors;\n    $kws3-floating-item-width: 30rem;\n  "]))),mdxType:"Source"}))}MDXContent.isMDXComponent=!0;var snackbars_stories_snackbars=function snackbars(args){return{Component:Snackbars_svelte,props:args}};snackbars_stories_snackbars.storyName="Snackbars",snackbars_stories_snackbars.args=snackbars_stories_args,snackbars_stories_snackbars.parameters={storySource:{source:"args => ({\n  Component: Snackbars,\n  props: args\n})"}};var componentMeta={title:"Helpers/Floating UI/Snackbars",component:Snackbars_svelte,args:snackbars_stories_args,argTypes:{color:{control:"select"},position:{control:"select"}},includeStories:["snackbars"]},mdxStoryNameToKey={Snackbars:"snackbars"};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs=Object.assign({},componentMeta.parameters.docs||{},{page:function page(){return Object(esm.b)(dist_esm.a,{mdxStoryNameToKey:mdxStoryNameToKey,mdxComponentAnnotations:componentMeta},Object(esm.b)(MDXContent,null))}});__webpack_exports__.default=componentMeta}}]);