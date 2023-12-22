(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{"./src/stories/helpers/Notification/notification.stories.mdx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"args",(function(){return notification_stories_args})),__webpack_require__.d(__webpack_exports__,"notification",(function(){return notification_stories_notification}));__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/react/index.js");var esm=__webpack_require__("./node_modules/@mdx-js/react/dist/esm.js"),dist_esm=__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/index.js"),ts_dedent_esm=__webpack_require__("./node_modules/ts-dedent/esm/index.js"),version=__webpack_require__("./src/version.mdx"),ui=__webpack_require__("./packages/@kws3/ui/index.js"),internal=__webpack_require__("./node_modules/svelte/internal/index.mjs");function create_default_slot(ctx){let t;return{c(){t=Object(internal.nb)("Your have 41 notifications")},m(target,anchor){Object(internal.Q)(target,t,anchor)},d(detaching){detaching&&Object(internal.A)(t)}}}function create_fragment(ctx){let kwsnotification,current;return kwsnotification=new ui.I({props:{color:ctx[0],style:ctx[1],light:ctx[2],dismissable:ctx[3],active:ctx[4],class:ctx[5],$$slots:{default:[create_default_slot]},$$scope:{ctx:ctx}}}),{c(){Object(internal.v)(kwsnotification.$$.fragment)},m(target,anchor){Object(internal.T)(kwsnotification,target,anchor),current=!0},p(ctx,[dirty]){const kwsnotification_changes={};1&dirty&&(kwsnotification_changes.color=ctx[0]),2&dirty&&(kwsnotification_changes.style=ctx[1]),4&dirty&&(kwsnotification_changes.light=ctx[2]),8&dirty&&(kwsnotification_changes.dismissable=ctx[3]),16&dirty&&(kwsnotification_changes.active=ctx[4]),32&dirty&&(kwsnotification_changes.class=ctx[5]),64&dirty&&(kwsnotification_changes.$$scope={dirty:dirty,ctx:ctx}),kwsnotification.$set(kwsnotification_changes)},i(local){current||(Object(internal.rb)(kwsnotification.$$.fragment,local),current=!0)},o(local){Object(internal.sb)(kwsnotification.$$.fragment,local),current=!1},d(detaching){Object(internal.y)(kwsnotification,detaching)}}}function instance($$self,$$props,$$invalidate){let{color:color="info",style:style="",light:light=!1,dismissable:dismissable=!1,active:active=!0}=$$props,{class:klass=""}=$$props;return $$self.$$set=$$props=>{"color"in $$props&&$$invalidate(0,color=$$props.color),"style"in $$props&&$$invalidate(1,style=$$props.style),"light"in $$props&&$$invalidate(2,light=$$props.light),"dismissable"in $$props&&$$invalidate(3,dismissable=$$props.dismissable),"active"in $$props&&$$invalidate(4,active=$$props.active),"class"in $$props&&$$invalidate(5,klass=$$props.class)},[color,style,light,dismissable,active,klass]}class Notification_svelte_Notification extends internal.b{constructor(options){super(),Object(internal.O)(this,options,instance,create_fragment,internal.bb,{color:0,style:1,light:2,dismissable:3,active:4,class:5})}}var Notification_svelte=Notification_svelte_Notification;Notification_svelte_Notification.__docgen={version:3,name:"Notification.svelte",data:[{keywords:[{name:"type",description:"{import('kws3/ui/types').ColorOptions}"}],visibility:"public",description:"Color of the Notification box",name:"color",kind:"let",static:!1,readonly:!1,type:{kind:"union",text:" ColorOptions:| ''|'primary'|'success'|'warning'|'info'|'danger'|'dark'|'light'|'white'|'black'|'link'",type:[{kind:"const",text:"''",type:"string",value:""},{kind:"const",text:"'primary'",type:"string",value:"primary"},{kind:"const",text:"'success'",type:"string",value:"success"},{kind:"const",text:"'warning'",type:"string",value:"warning"},{kind:"const",text:"'info'",type:"string",value:"info"},{kind:"const",text:"'danger'",type:"string",value:"danger"},{kind:"const",text:"'dark'",type:"string",value:"dark"},{kind:"const",text:"'light'",type:"string",value:"light"},{kind:"const",text:"'white'",type:"string",value:"white"},{kind:"const",text:"'black'",type:"string",value:"black"},{kind:"const",text:"'link'",type:"string",value:"link"}],importPath:"kws3/ui/types"},defaultValue:"info"},{visibility:"public",description:null,keywords:[],name:"style",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""},{visibility:"public",description:null,keywords:[],name:"light",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1},{visibility:"public",description:null,keywords:[],name:"dismissable",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1},{visibility:"public",description:null,keywords:[],name:"active",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!0},{visibility:"public",description:null,keywords:[],name:"class",kind:"const",static:!1,readonly:!0,type:{kind:"type",text:"string",type:"string"},localName:"klass",defaultValue:""}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};__webpack_require__("./node_modules/@storybook/addon-actions/dist/esm/index.js");var _templateObject,_templateObject2,_excluded=["components"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function _taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var notification_stories_args={color:"info",class:"",style:"",light:!1,dismissable:!1,active:!0},layoutProps={args:notification_stories_args};function MDXContent(_ref){var components=_ref.components,props=_objectWithoutProperties(_ref,_excluded);return Object(esm.b)("wrapper",_extends({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(esm.b)(version.a,{mdxType:"Version"}),Object(esm.b)(dist_esm.e,{title:"Helpers/Notification",component:ui.I,args:notification_stories_args,argTypes:{color:{control:"select"}},mdxType:"Meta"}),Object(esm.b)(dist_esm.d,{markdown:Object(ts_dedent_esm.a)(_templateObject||(_templateObject=_taggedTemplateLiteralLoose(["\n# Notification\n## Notification components.\n"]))),mdxType:"Description"}),Object(esm.b)(dist_esm.c,{mdxType:"Canvas"},Object(esm.b)(dist_esm.g,{name:"Notification",args:notification_stories_args,mdxType:"Story"},(function(args){return{Component:Notification_svelte,props:args}}))),Object(esm.b)(dist_esm.b,{story:"Notification",mdxType:"ArgsTable"}),Object(esm.b)("h3",null,"Usage"),Object(esm.b)(dist_esm.f,{language:"javascript",code:Object(ts_dedent_esm.a)(_templateObject2||(_templateObject2=_taggedTemplateLiteralLoose(["import { Notification } from '@kws3/ui';"]))),mdxType:"Source"}))}MDXContent.isMDXComponent=!0;var notification_stories_notification=function notification(args){return{Component:Notification_svelte,props:args}};notification_stories_notification.storyName="Notification",notification_stories_notification.args=notification_stories_args,notification_stories_notification.parameters={storySource:{source:"args => ({\n  Component: NotificationDecorator,\n  props: args\n})"}};var componentMeta={title:"Helpers/Notification",component:ui.I,args:notification_stories_args,argTypes:{color:{control:"select"}},includeStories:["notification"]},mdxStoryNameToKey={Notification:"notification"};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs=Object.assign({},componentMeta.parameters.docs||{},{page:function page(){return Object(esm.b)(dist_esm.a,{mdxStoryNameToKey:mdxStoryNameToKey,mdxComponentAnnotations:componentMeta},Object(esm.b)(MDXContent,null))}});__webpack_exports__.default=componentMeta}}]);