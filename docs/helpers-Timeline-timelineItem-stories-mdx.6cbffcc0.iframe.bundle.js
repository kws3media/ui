(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{"./src/stories/helpers/Timeline/timelineItem.stories.mdx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"args",(function(){return timelineItem_stories_args})),__webpack_require__.d(__webpack_exports__,"timelineItem",(function(){return timelineItem_stories_timelineItem}));__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/react/index.js");var esm=__webpack_require__("./node_modules/@mdx-js/react/dist/esm.js"),dist_esm=__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/index.js"),ts_dedent_esm=__webpack_require__("./node_modules/ts-dedent/esm/index.js"),version=__webpack_require__("./src/version.mdx"),ui=__webpack_require__("./packages/@kws3/ui/index.js"),internal=__webpack_require__("./node_modules/svelte/internal/index.mjs");function create_default_slot(ctx){let t;return{c(){t=Object(internal.kb)("Something Great has happened.. yay!!!!")},m(target,anchor){Object(internal.O)(target,t,anchor)},d(detaching){detaching&&Object(internal.z)(t)}}}function create_above_slot(ctx){let small;return{c(){small=Object(internal.A)("small"),small.textContent="Heading",Object(internal.k)(small,"slot","above")},m(target,anchor){Object(internal.O)(target,small,anchor)},d(detaching){detaching&&Object(internal.z)(small)}}}function create_below_slot(ctx){let small;return{c(){small=Object(internal.A)("small"),small.textContent="Rejoice in merriment",Object(internal.k)(small,"slot","below")},m(target,anchor){Object(internal.O)(target,small,anchor)},d(detaching){detaching&&Object(internal.z)(small)}}}function create_thumbnail_slot(ctx){let img,img_src_value;return{c(){img=Object(internal.A)("img"),Object(internal.k)(img,"slot","thumbnail"),Object(internal.hb)(img.src,img_src_value="https://bulma.io/images/placeholders/64x64.png")||Object(internal.k)(img,"src","https://bulma.io/images/placeholders/64x64.png"),Object(internal.k)(img,"alt","")},m(target,anchor){Object(internal.O)(target,img,anchor)},d(detaching){detaching&&Object(internal.z)(img)}}}function create_fragment(ctx){let kwstimelineitem,current;return kwstimelineitem=new ui.cb({props:{color:ctx[0],marker_image:ctx[1],marker_icon:ctx[2],class:ctx[3],$$slots:{thumbnail:[create_thumbnail_slot],below:[create_below_slot],above:[create_above_slot],default:[create_default_slot]},$$scope:{ctx:ctx}}}),{c(){Object(internal.u)(kwstimelineitem.$$.fragment)},m(target,anchor){Object(internal.R)(kwstimelineitem,target,anchor),current=!0},p(ctx,[dirty]){const kwstimelineitem_changes={};1&dirty&&(kwstimelineitem_changes.color=ctx[0]),2&dirty&&(kwstimelineitem_changes.marker_image=ctx[1]),4&dirty&&(kwstimelineitem_changes.marker_icon=ctx[2]),8&dirty&&(kwstimelineitem_changes.class=ctx[3]),16&dirty&&(kwstimelineitem_changes.$$scope={dirty:dirty,ctx:ctx}),kwstimelineitem.$set(kwstimelineitem_changes)},i(local){current||(Object(internal.ob)(kwstimelineitem.$$.fragment,local),current=!0)},o(local){Object(internal.pb)(kwstimelineitem.$$.fragment,local),current=!1},d(detaching){Object(internal.x)(kwstimelineitem,detaching)}}}function instance($$self,$$props,$$invalidate){let{color:color="",marker_image:marker_image=null,marker_icon:marker_icon=null}=$$props,{class:klass=""}=$$props;return $$self.$$set=$$props=>{"color"in $$props&&$$invalidate(0,color=$$props.color),"marker_image"in $$props&&$$invalidate(1,marker_image=$$props.marker_image),"marker_icon"in $$props&&$$invalidate(2,marker_icon=$$props.marker_icon),"class"in $$props&&$$invalidate(3,klass=$$props.class)},[color,marker_image,marker_icon,klass]}class TimelineItem_svelte_TimelineItem extends internal.b{constructor(options){super(),Object(internal.N)(this,options,instance,create_fragment,internal.Z,{color:0,marker_image:1,marker_icon:2,class:3})}}var TimelineItem_svelte=TimelineItem_svelte_TimelineItem;TimelineItem_svelte_TimelineItem.__docgen={version:3,name:"TimelineItem.svelte",data:[{keywords:[{name:"type",description:"{import('"},{name:"kws3",description:""}],visibility:"public",description:"Color of marker and border",name:"color",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""},{visibility:"public",description:null,keywords:[],name:"marker_image",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"object",type:"object"},defaultValue:null},{visibility:"public",description:null,keywords:[],name:"marker_icon",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"object",type:"object"},defaultValue:null},{visibility:"public",description:null,keywords:[],name:"class",kind:"const",static:!1,readonly:!0,type:{kind:"type",text:"string",type:"string"},localName:"klass",defaultValue:""}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};__webpack_require__("./node_modules/@storybook/addon-actions/dist/esm/index.js");var _templateObject,_templateObject2,_templateObject3,_templateObject4,_excluded=["components"];function _extends(){return _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function _taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var timelineItem_stories_args={marker_icon:null,marker_image:null,color:""},layoutProps={args:timelineItem_stories_args};function MDXContent(_ref){var components=_ref.components,props=_objectWithoutProperties(_ref,_excluded);return Object(esm.b)("wrapper",_extends({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(esm.b)(version.a,{mdxType:"Version"}),Object(esm.b)(dist_esm.e,{title:"Helpers/Timeline/TimelineItem",component:ui.cb,args:timelineItem_stories_args,argTypes:{color:{control:"select"}},mdxType:"Meta"}),Object(esm.b)(dist_esm.d,{markdown:Object(ts_dedent_esm.a)(_templateObject||(_templateObject=_taggedTemplateLiteralLoose(["\n# TimelineItem\n## A TimelineItem component.\n"]))),mdxType:"Description"}),Object(esm.b)(dist_esm.c,{mdxType:"Canvas"},Object(esm.b)(dist_esm.g,{name:"TimelineItem",args:timelineItem_stories_args,mdxType:"Story"},(function(args){return{Component:TimelineItem_svelte,props:args}}))),Object(esm.b)(dist_esm.b,{story:"TimelineItem",mdxType:"ArgsTable"}),Object(esm.b)("h3",null,"Usage"),Object(esm.b)("h5",null,"Import the component:"),Object(esm.b)(dist_esm.f,{language:"javascript",code:Object(ts_dedent_esm.a)(_templateObject2||(_templateObject2=_taggedTemplateLiteralLoose(["import { TimelineItem } from '@kws3/ui';"]))),mdxType:"Source"}),Object(esm.b)("h5",null,"Import the CSS:"),Object(esm.b)(dist_esm.f,{language:"javascript",code:Object(ts_dedent_esm.a)(_templateObject3||(_templateObject3=_taggedTemplateLiteralLoose(["@import '@kws3/ui/styles/Timeline.scss';"]))),mdxType:"Source"}),Object(esm.b)("h5",null,"SCSS customization variables with default values:"),Object(esm.b)(dist_esm.f,{language:"css",code:Object(ts_dedent_esm.a)(_templateObject4||(_templateObject4=_taggedTemplateLiteralLoose(["\n    $kws-theme-colors: $colors;\n    $kws-timeline-default-color: $grey;\n    $kws-timeline-default-color-invert: $light;\n  "]))),mdxType:"Source"}))}MDXContent.isMDXComponent=!0;var timelineItem_stories_timelineItem=function timelineItem(args){return{Component:TimelineItem_svelte,props:args}};timelineItem_stories_timelineItem.storyName="TimelineItem",timelineItem_stories_timelineItem.args=timelineItem_stories_args,timelineItem_stories_timelineItem.parameters={storySource:{source:"args => ({\n  Component: ItemDecorator,\n  props: args\n})"}};var componentMeta={title:"Helpers/Timeline/TimelineItem",component:ui.cb,args:timelineItem_stories_args,argTypes:{color:{control:"select"}},includeStories:["timelineItem"]},mdxStoryNameToKey={TimelineItem:"timelineItem"};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs=Object.assign({},componentMeta.parameters.docs||{},{page:function page(){return Object(esm.b)(dist_esm.a,{mdxStoryNameToKey:mdxStoryNameToKey,mdxComponentAnnotations:componentMeta},Object(esm.b)(MDXContent,null))}});__webpack_exports__.default=componentMeta}}]);