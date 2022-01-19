(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{"./src/stories/helpers/FloatingUI/notifications.stories.mdx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"args",(function(){return notifications_stories_args})),__webpack_require__.d(__webpack_exports__,"notifications",(function(){return notifications_stories_notifications}));__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/react/index.js");var esm=__webpack_require__("./node_modules/@mdx-js/react/dist/esm.js"),dist_esm=__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/index.js"),ts_dedent_esm=__webpack_require__("./node_modules/ts-dedent/esm/index.js"),version=__webpack_require__("./src/version.mdx"),internal=__webpack_require__("./node_modules/svelte/internal/index.mjs"),ui=__webpack_require__("./packages/@kws3/ui/index.js"),svelte=__webpack_require__("./node_modules/svelte/index.mjs");function create_if_block(ctx){let h4,t;return{c(){h4=Object(internal.z)("h4"),t=Object(internal.jb)(ctx[0]),Object(internal.k)(h4,"class","title is-5 is-marginless")},m(target,anchor){Object(internal.N)(target,h4,anchor),Object(internal.h)(h4,t)},p(ctx,dirty){1&dirty&&Object(internal.cb)(t,ctx[0])},d(detaching){detaching&&Object(internal.y)(h4)}}}function create_fragment(ctx){let div3,div0,icon,t0,div1,t1,p,t2,div2,button,current,mounted,dispose;icon=new ui.u({props:{icon:"car",size:"medium"}});let if_block=ctx[0]&&create_if_block(ctx);return{c(){div3=Object(internal.z)("div"),div0=Object(internal.z)("div"),Object(internal.t)(icon.$$.fragment),t0=Object(internal.fb)(),div1=Object(internal.z)("div"),if_block&&if_block.c(),t1=Object(internal.fb)(),p=Object(internal.z)("p"),t2=Object(internal.fb)(),div2=Object(internal.z)("div"),button=Object(internal.z)("button"),button.textContent="Close",Object(internal.k)(div0,"class","control"),Object(internal.k)(div1,"class","control is-expanded"),Object(internal.k)(button,"class","button is-danger is-small"),Object(internal.k)(button,"type","button"),Object(internal.k)(div2,"class","control"),Object(internal.k)(div3,"class","field is-grouped is-marginless"),Object(internal.eb)(div3,"align-items","center")},m(target,anchor){Object(internal.N)(target,div3,anchor),Object(internal.h)(div3,div0),Object(internal.Q)(icon,div0,null),Object(internal.h)(div3,t0),Object(internal.h)(div3,div1),if_block&&if_block.m(div1,null),Object(internal.h)(div1,t1),Object(internal.h)(div1,p),p.innerHTML=ctx[1],Object(internal.h)(div3,t2),Object(internal.h)(div3,div2),Object(internal.h)(div2,button),current=!0,mounted||(dispose=Object(internal.P)(button,"click",ctx[4]),mounted=!0)},p(ctx,[dirty]){ctx[0]?if_block?if_block.p(ctx,dirty):(if_block=create_if_block(ctx),if_block.c(),if_block.m(div1,t1)):if_block&&(if_block.d(1),if_block=null),(!current||2&dirty)&&(p.innerHTML=ctx[1])},i(local){current||(Object(internal.nb)(icon.$$.fragment,local),current=!0)},o(local){Object(internal.ob)(icon.$$.fragment,local),current=!1},d(detaching){detaching&&Object(internal.y)(div3),Object(internal.w)(icon),if_block&&if_block.d(),mounted=!1,dispose()}}}function instance($$self,$$props,$$invalidate){const fire=Object(svelte.a)();let{title:title="",message:message=""}=$$props;return $$self.$$set=$$new_props=>{$$invalidate(3,$$props=Object(internal.j)(Object(internal.j)({},$$props),Object(internal.B)($$new_props))),"title"in $$new_props&&$$invalidate(0,title=$$new_props.title),"message"in $$new_props&&$$invalidate(1,message=$$new_props.message)},$$props=Object(internal.B)($$props),[title,message,fire,$$props,()=>fire("destroy",$$props)]}class CustomNotification_svelte_CustomNotification extends internal.b{constructor(options){super(),Object(internal.M)(this,options,instance,create_fragment,internal.Y,{title:0,message:1})}}var CustomNotification_svelte=CustomNotification_svelte_CustomNotification;function Notifications_svelte_create_fragment(ctx){let div2,div0,button0,t1,div1,button1,mounted,dispose;return{c(){div2=Object(internal.z)("div"),div0=Object(internal.z)("div"),button0=Object(internal.z)("button"),button0.textContent="Create Notification",t1=Object(internal.fb)(),div1=Object(internal.z)("div"),button1=Object(internal.z)("button"),button1.textContent="Custom Component Notification",Object(internal.k)(button0,"class","button is-primary"),Object(internal.k)(button0,"type","button"),Object(internal.k)(div0,"class","column has-text-centered"),Object(internal.k)(button1,"class","button is-primary"),Object(internal.k)(button1,"type","button"),Object(internal.k)(div1,"class","column has-text-centered"),Object(internal.k)(div2,"class","columns")},m(target,anchor){Object(internal.N)(target,div2,anchor),Object(internal.h)(div2,div0),Object(internal.h)(div0,button0),Object(internal.h)(div2,t1),Object(internal.h)(div2,div1),Object(internal.h)(div1,button1),mounted||(dispose=[Object(internal.P)(button0,"click",ctx[0]),Object(internal.P)(button1,"click",ctx[1])],mounted=!0)},p:internal.R,i:internal.R,o:internal.R,d(detaching){detaching&&Object(internal.y)(div2),mounted=!1,Object(internal.X)(dispose)}}}function Notifications_svelte_instance($$self,$$props,$$invalidate){let{title:title="",message:message="",duration:duration=3e3,color:color="primary",position:position="top-right",light:light=!1,dismissable:dismissable=!0,persistent:persistent=!1,context:context=1}=$$props;let count=1;return $$self.$$set=$$props=>{"title"in $$props&&$$invalidate(2,title=$$props.title),"message"in $$props&&$$invalidate(3,message=$$props.message),"duration"in $$props&&$$invalidate(4,duration=$$props.duration),"color"in $$props&&$$invalidate(5,color=$$props.color),"position"in $$props&&$$invalidate(6,position=$$props.position),"light"in $$props&&$$invalidate(7,light=$$props.light),"dismissable"in $$props&&$$invalidate(8,dismissable=$$props.dismissable),"persistent"in $$props&&$$invalidate(9,persistent=$$props.persistent),"context"in $$props&&$$invalidate(10,context=$$props.context)},[()=>{let{props:props,destroy:destroy}=ui.E.create({title:title,duration:duration,color:color,position:position,dismissable:dismissable,persistent:persistent,context:context,light:light,message:count+" - "+message});count++},()=>{let{props:props,destroy:destroy}=ui.E.create({component:CustomNotification_svelte,title:title,message:"I am a customized Notification...",persistent:!0,dismissable:!1,position:position,color:color,light:light,beforeClose:props=>{console.log("before close")},afterClose:props=>{console.log("after close")}});setTimeout((()=>{destroy()}),5e3)},title,message,duration,color,position,light,dismissable,persistent,context,null]}CustomNotification_svelte_CustomNotification.__docgen={version:3,name:"CustomNotification.svelte",data:[{visibility:"public",description:null,keywords:[],name:"title",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""},{visibility:"public",description:null,keywords:[],name:"message",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""}],computed:[],methods:[],components:[],description:null,keywords:[],events:[{visibility:"public",description:null,keywords:[],name:"destroy"}],slots:[],refs:[]};class Notifications_svelte_Notifications extends internal.b{constructor(options){super(),Object(internal.M)(this,options,Notifications_svelte_instance,Notifications_svelte_create_fragment,internal.Y,{title:2,message:3,duration:4,color:5,position:6,light:7,dismissable:8,persistent:9,context:10,component:11})}get component(){return this.$$.ctx[11]}}var Notifications_svelte=Notifications_svelte_Notifications;Notifications_svelte_Notifications.__docgen={version:3,name:"Notifications.svelte",data:[{keywords:[],visibility:"public",description:"Title/Heading of the notification",name:"title",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""},{keywords:[],visibility:"public",description:"Message in the notification\n\nRenders as HTML, so can use `<br>` tags for line breaks",name:"message",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""},{keywords:[],visibility:"public",description:"Duration of the notification",name:"duration",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"number",type:"number"},defaultValue:3e3},{keywords:[{name:"type",description:"{''|'primary'|'success'|'warning'|'info'|'danger'|'dark'|'light'}"}],visibility:"public",description:"Toast notification background color",name:"color",kind:"let",static:!1,readonly:!1,type:{kind:"union",text:"''|'primary'|'success'|'warning'|'info'|'danger'|'dark'|'light'",type:[{kind:"const",text:"''",type:"string",value:""},{kind:"const",text:"'primary'",type:"string",value:"primary"},{kind:"const",text:"'success'",type:"string",value:"success"},{kind:"const",text:"'warning'",type:"string",value:"warning"},{kind:"const",text:"'info'",type:"string",value:"info"},{kind:"const",text:"'danger'",type:"string",value:"danger"},{kind:"const",text:"'dark'",type:"string",value:"dark"},{kind:"const",text:"'light'",type:"string",value:"light"}]},defaultValue:"primary"},{keywords:[{name:"type",description:"{''|'top'|'bottom'|'top-left'|'top-right'|'bottom-left'|'bottom-right'}"}],visibility:"public",description:'Position of the notification. `""` defaults to `top-right`. Can be modified globally in framework settings',name:"position",kind:"let",static:!1,readonly:!1,type:{kind:"union",text:"''|'top'|'bottom'|'top-left'|'top-right'|'bottom-left'|'bottom-right'",type:[{kind:"const",text:"''",type:"string",value:""},{kind:"const",text:"'top'",type:"string",value:"top"},{kind:"const",text:"'bottom'",type:"string",value:"bottom"},{kind:"const",text:"'top-left'",type:"string",value:"top-left"},{kind:"const",text:"'top-right'",type:"string",value:"top-right"},{kind:"const",text:"'bottom-left'",type:"string",value:"bottom-left"},{kind:"const",text:"'bottom-right'",type:"string",value:"bottom-right"}]},defaultValue:"top-right"},{keywords:[],visibility:"public",description:"Light color variant for notification box and contents",name:"light",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1},{keywords:[],visibility:"public",description:"Determines if notification is dismissable by user",name:"dismissable",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!0},{keywords:[],visibility:"public",description:"A persistent notification without duration, does not auto-dismiss after `duration` has elapsed",name:"persistent",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1},{keywords:[],visibility:"public",description:"A Custom value that can be passed in to the Notification, useful for identification purposes.",name:"context",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"number",type:"number"},defaultValue:1},{keywords:[],visibility:"public",description:"This allows you to pass in a whole component, to be shown in the notification area",name:"component",kind:"const",static:!1,readonly:!0,type:{kind:"type",text:"object",type:"object"},defaultValue:null}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};__webpack_require__("./node_modules/@storybook/addon-actions/dist/esm/index.js");var _templateObject,_templateObject2,_templateObject3,_excluded=["components"];function _extends(){return _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function _taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var notifications_stories_args={title:"Heading",message:"I am a Notification...",duration:3e3,color:"primary",light:!1,position:"top-right",dismissable:!0,persistent:!1,context:1},layoutProps={args:notifications_stories_args};function MDXContent(_ref){var components=_ref.components,props=_objectWithoutProperties(_ref,_excluded);return Object(esm.b)("wrapper",_extends({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(esm.b)(version.a,{mdxType:"Version"}),Object(esm.b)(dist_esm.e,{title:"Helpers/Floating UI/Notifications",component:Notifications_svelte,args:notifications_stories_args,argTypes:{color:{control:"select"},position:{control:"select"}},mdxType:"Meta"}),Object(esm.b)(dist_esm.d,{markdown:Object(ts_dedent_esm.a)(_templateObject||(_templateObject=_taggedTemplateLiteralLoose(["\n# Notifications\n## Notifications components for showing floating alerts.\n"]))),mdxType:"Description"}),Object(esm.b)(dist_esm.c,{mdxType:"Canvas"},Object(esm.b)(dist_esm.g,{name:"Notifications",args:notifications_stories_args,mdxType:"Story"},(function(args){return{Component:Notifications_svelte,props:args}}))),Object(esm.b)(dist_esm.b,{story:"Notifications",mdxType:"ArgsTable"}),Object(esm.b)("div",{class:"columns"},Object(esm.b)("div",{class:"column is-6"},Object(esm.b)("h3",{id:"usage"},"Usage"),Object(esm.b)("pre",null,Object(esm.b)("code",{parentName:"pre",className:"language-js"},'import { Notifications } from \'@kws3/ui\';\n\n// Push notification like this\nlet {props, destroy} = Notifications.create({\n  title: "Test Title",\n  message: "I am a customized Floating notification...",\n  persistent: true,\n  dismissable: false,\n  position: "top",\n  color: "info",\n  beforeClose: (props) => {\n    //do something here before close\n  },\n  afterClose: (props) => {\n    //do something here after close\n  },\n});\n\n// notification will close after duration expires\n// or you can close it manually like this:\ndestroy();\n\n//you can also close it like this:\nNotifications.remove(props);\n//where `props` is the from the output of Notifications.create() \n'))),Object(esm.b)("div",{class:"column is-6"},Object(esm.b)("h3",{id:"usage-with-custom-component"},"Usage with custom component"),Object(esm.b)("pre",null,Object(esm.b)("code",{parentName:"pre",className:"language-js"},"import { Notifications } from '@kws3/ui';\nimport CustomComponent from \"YourCustomComponent.svelte\";\n\nlet {props, destroy} = Notifications.create({\n  conmponent: CustomComponent,\n  ...other_opts\n});\n")),Object(esm.b)("p",null,"Your custom component has to dispatch an event called ",Object(esm.b)("inlineCode",{parentName:"p"},"destroy"),"\nwith ",Object(esm.b)("inlineCode",{parentName:"p"},"$$props")," as an argument, so that it can close itself.\nExample:"),Object(esm.b)("pre",null,Object(esm.b)("code",{parentName:"pre",className:"language-html"},'\x3c!--YourCustomComponent.svelte--\x3e\n<div>This is custom notification</div>\n<button on:click={closeMyself}>close</button>\n\n<script>\nimport { createEventDispatcher } from "svelte";\nconst fire = createEventDispatcher();\n\nconst closeMyself = () => fire("destroy", $$props);\n<\/script>\n')))),Object(esm.b)("h5",{id:"import-the-css"},"Import the CSS:"),Object(esm.b)(dist_esm.f,{language:"javascript",code:Object(ts_dedent_esm.a)(_templateObject2||(_templateObject2=_taggedTemplateLiteralLoose(["@import 'path/to/node_modules/@kws3/ui/styles/FloatingUI.scss';"]))),mdxType:"Source"}),Object(esm.b)("h5",{id:"scss-customization-variables-with-default-values"},"SCSS customization variables with default values:"),Object(esm.b)(dist_esm.f,{language:"css",code:Object(ts_dedent_esm.a)(_templateObject3||(_templateObject3=_taggedTemplateLiteralLoose(["\n    $kws-theme-colors: $colors;\n    $kws3-floating-item-width: 30rem;\n  "]))),mdxType:"Source"}))}MDXContent.isMDXComponent=!0;var notifications_stories_notifications=function notifications(args){return{Component:Notifications_svelte,props:args}};notifications_stories_notifications.storyName="Notifications",notifications_stories_notifications.args=notifications_stories_args,notifications_stories_notifications.parameters={storySource:{source:"args => ({\n  Component: Notifications,\n  props: args\n})"}};var componentMeta={title:"Helpers/Floating UI/Notifications",component:Notifications_svelte,args:notifications_stories_args,argTypes:{color:{control:"select"},position:{control:"select"}},includeStories:["notifications"]},mdxStoryNameToKey={Notifications:"notifications"};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs=Object.assign({},componentMeta.parameters.docs||{},{page:function page(){return Object(esm.b)(dist_esm.a,{mdxStoryNameToKey:mdxStoryNameToKey,mdxComponentAnnotations:componentMeta},Object(esm.b)(MDXContent,null))}});__webpack_exports__.default=componentMeta}}]);