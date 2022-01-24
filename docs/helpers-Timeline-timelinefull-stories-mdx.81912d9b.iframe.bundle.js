(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{"./src/stories/helpers/Timeline/timelinefull.stories.mdx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"args",(function(){return timelinefull_stories_args})),__webpack_require__.d(__webpack_exports__,"timelineFullExample",(function(){return timelinefull_stories_timelineFullExample}));__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/react/index.js");var esm=__webpack_require__("./node_modules/@mdx-js/react/dist/esm.js"),dist_esm=__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/index.js"),ts_dedent_esm=__webpack_require__("./node_modules/ts-dedent/esm/index.js"),version=__webpack_require__("./src/version.mdx"),ui=__webpack_require__("./packages/@kws3/ui/index.js"),internal=__webpack_require__("./node_modules/svelte/internal/index.mjs");function create_default_slot_8(ctx){let span;return{c(){span=Object(internal.A)("span"),span.textContent="2022",Object(internal.k)(span,"class","tag is-primary is-medium")},m(target,anchor){Object(internal.O)(target,span,anchor)},d(detaching){detaching&&Object(internal.z)(span)}}}function create_default_slot_7(ctx){let t;return{c(){t=Object(internal.kb)("The year started")},m(target,anchor){Object(internal.O)(target,t,anchor)},d(detaching){detaching&&Object(internal.z)(t)}}}function create_default_slot_6(ctx){let t;return{c(){t=Object(internal.kb)("Something happened")},m(target,anchor){Object(internal.O)(target,t,anchor)},d(detaching){detaching&&Object(internal.z)(t)}}}function create_below_slot_3(ctx){let small;return{c(){small=Object(internal.A)("small"),small.textContent="and we rejoiced",Object(internal.k)(small,"slot","below")},m(target,anchor){Object(internal.O)(target,small,anchor)},d(detaching){detaching&&Object(internal.z)(small)}}}function create_default_slot_5(ctx){let t;return{c(){t=Object(internal.kb)("Something else happened")},m(target,anchor){Object(internal.O)(target,t,anchor)},d(detaching){detaching&&Object(internal.z)(t)}}}function create_above_slot(ctx){let small;return{c(){small=Object(internal.A)("small"),small.textContent="a few days later...",Object(internal.k)(small,"slot","above")},m(target,anchor){Object(internal.O)(target,small,anchor)},d(detaching){detaching&&Object(internal.z)(small)}}}function create_below_slot_2(ctx){let small;return{c(){small=Object(internal.A)("small"),small.textContent="and we didnt like it",Object(internal.k)(small,"slot","below")},m(target,anchor){Object(internal.O)(target,small,anchor)},d(detaching){detaching&&Object(internal.z)(small)}}}function create_default_slot_4(ctx){let t;return{c(){t=Object(internal.kb)("Nothing happened")},m(target,anchor){Object(internal.O)(target,t,anchor)},d(detaching){detaching&&Object(internal.z)(t)}}}function create_below_slot_1(ctx){let small;return{c(){small=Object(internal.A)("small"),small.innerHTML="but we filled <code>thumbnail</code> slot in\n        <code>TimelineItem</code>",Object(internal.k)(small,"slot","below")},m(target,anchor){Object(internal.O)(target,small,anchor)},d(detaching){detaching&&Object(internal.z)(small)}}}function create_thumbnail_slot(ctx){let img,img_src_value;return{c(){img=Object(internal.A)("img"),Object(internal.k)(img,"slot","thumbnail"),Object(internal.hb)(img.src,img_src_value="https://bulma.io/images/placeholders/64x64.png")||Object(internal.k)(img,"src","https://bulma.io/images/placeholders/64x64.png"),Object(internal.k)(img,"alt","")},m(target,anchor){Object(internal.O)(target,img,anchor)},d(detaching){detaching&&Object(internal.z)(img)}}}function create_default_slot_3(ctx){let span;return{c(){span=Object(internal.A)("span"),span.textContent="2023",Object(internal.k)(span,"class","tag is-info is-medium")},m(target,anchor){Object(internal.O)(target,span,anchor)},d(detaching){detaching&&Object(internal.z)(span)}}}function create_default_slot_2(ctx){let t;return{c(){t=Object(internal.kb)("The year 2023 started")},m(target,anchor){Object(internal.O)(target,t,anchor)},d(detaching){detaching&&Object(internal.z)(t)}}}function create_default_slot_1(ctx){let t;return{c(){t=Object(internal.kb)("Nothing happened")},m(target,anchor){Object(internal.O)(target,t,anchor)},d(detaching){detaching&&Object(internal.z)(t)}}}function create_below_slot(ctx){let small;return{c(){small=Object(internal.A)("small"),small.innerHTML="but we filled <code>marker_image</code> prop in\n        <code>TimelineItem</code>",Object(internal.k)(small,"slot","below")},m(target,anchor){Object(internal.O)(target,small,anchor)},d(detaching){detaching&&Object(internal.z)(small)}}}function create_default_slot(ctx){let kwstimelineheader0,t0,kwstimelineitem0,t1,kwstimelineitem1,t2,kwstimelineitem2,t3,kwstimelineitem3,t4,kwstimelineheader1,t5,kwstimelineitem4,t6,kwstimelineitem5,current;return kwstimelineheader0=new ui.X({props:{$$slots:{default:[create_default_slot_8]},$$scope:{ctx:ctx}}}),kwstimelineitem0=new ui.Y({props:{color:"success",$$slots:{default:[create_default_slot_7]},$$scope:{ctx:ctx}}}),kwstimelineitem1=new ui.Y({props:{color:"success",marker_icon:"thumbs-up",$$slots:{below:[create_below_slot_3],default:[create_default_slot_6]},$$scope:{ctx:ctx}}}),kwstimelineitem2=new ui.Y({props:{color:"warning",marker_icon:"thumbs-down",$$slots:{below:[create_below_slot_2],above:[create_above_slot],default:[create_default_slot_5]},$$scope:{ctx:ctx}}}),kwstimelineitem3=new ui.Y({props:{color:"warning",$$slots:{thumbnail:[create_thumbnail_slot],below:[create_below_slot_1],default:[create_default_slot_4]},$$scope:{ctx:ctx}}}),kwstimelineheader1=new ui.X({props:{$$slots:{default:[create_default_slot_3]},$$scope:{ctx:ctx}}}),kwstimelineitem4=new ui.Y({props:{color:"success",$$slots:{default:[create_default_slot_2]},$$scope:{ctx:ctx}}}),kwstimelineitem5=new ui.Y({props:{color:"danger",marker_image:"https://bulma.io/images/placeholders/64x64.png",$$slots:{below:[create_below_slot],default:[create_default_slot_1]},$$scope:{ctx:ctx}}}),{c(){Object(internal.u)(kwstimelineheader0.$$.fragment),t0=Object(internal.gb)(),Object(internal.u)(kwstimelineitem0.$$.fragment),t1=Object(internal.gb)(),Object(internal.u)(kwstimelineitem1.$$.fragment),t2=Object(internal.gb)(),Object(internal.u)(kwstimelineitem2.$$.fragment),t3=Object(internal.gb)(),Object(internal.u)(kwstimelineitem3.$$.fragment),t4=Object(internal.gb)(),Object(internal.u)(kwstimelineheader1.$$.fragment),t5=Object(internal.gb)(),Object(internal.u)(kwstimelineitem4.$$.fragment),t6=Object(internal.gb)(),Object(internal.u)(kwstimelineitem5.$$.fragment)},m(target,anchor){Object(internal.R)(kwstimelineheader0,target,anchor),Object(internal.O)(target,t0,anchor),Object(internal.R)(kwstimelineitem0,target,anchor),Object(internal.O)(target,t1,anchor),Object(internal.R)(kwstimelineitem1,target,anchor),Object(internal.O)(target,t2,anchor),Object(internal.R)(kwstimelineitem2,target,anchor),Object(internal.O)(target,t3,anchor),Object(internal.R)(kwstimelineitem3,target,anchor),Object(internal.O)(target,t4,anchor),Object(internal.R)(kwstimelineheader1,target,anchor),Object(internal.O)(target,t5,anchor),Object(internal.R)(kwstimelineitem4,target,anchor),Object(internal.O)(target,t6,anchor),Object(internal.R)(kwstimelineitem5,target,anchor),current=!0},p(ctx,dirty){const kwstimelineheader0_changes={};2&dirty&&(kwstimelineheader0_changes.$$scope={dirty:dirty,ctx:ctx}),kwstimelineheader0.$set(kwstimelineheader0_changes);const kwstimelineitem0_changes={};2&dirty&&(kwstimelineitem0_changes.$$scope={dirty:dirty,ctx:ctx}),kwstimelineitem0.$set(kwstimelineitem0_changes);const kwstimelineitem1_changes={};2&dirty&&(kwstimelineitem1_changes.$$scope={dirty:dirty,ctx:ctx}),kwstimelineitem1.$set(kwstimelineitem1_changes);const kwstimelineitem2_changes={};2&dirty&&(kwstimelineitem2_changes.$$scope={dirty:dirty,ctx:ctx}),kwstimelineitem2.$set(kwstimelineitem2_changes);const kwstimelineitem3_changes={};2&dirty&&(kwstimelineitem3_changes.$$scope={dirty:dirty,ctx:ctx}),kwstimelineitem3.$set(kwstimelineitem3_changes);const kwstimelineheader1_changes={};2&dirty&&(kwstimelineheader1_changes.$$scope={dirty:dirty,ctx:ctx}),kwstimelineheader1.$set(kwstimelineheader1_changes);const kwstimelineitem4_changes={};2&dirty&&(kwstimelineitem4_changes.$$scope={dirty:dirty,ctx:ctx}),kwstimelineitem4.$set(kwstimelineitem4_changes);const kwstimelineitem5_changes={};2&dirty&&(kwstimelineitem5_changes.$$scope={dirty:dirty,ctx:ctx}),kwstimelineitem5.$set(kwstimelineitem5_changes)},i(local){current||(Object(internal.ob)(kwstimelineheader0.$$.fragment,local),Object(internal.ob)(kwstimelineitem0.$$.fragment,local),Object(internal.ob)(kwstimelineitem1.$$.fragment,local),Object(internal.ob)(kwstimelineitem2.$$.fragment,local),Object(internal.ob)(kwstimelineitem3.$$.fragment,local),Object(internal.ob)(kwstimelineheader1.$$.fragment,local),Object(internal.ob)(kwstimelineitem4.$$.fragment,local),Object(internal.ob)(kwstimelineitem5.$$.fragment,local),current=!0)},o(local){Object(internal.pb)(kwstimelineheader0.$$.fragment,local),Object(internal.pb)(kwstimelineitem0.$$.fragment,local),Object(internal.pb)(kwstimelineitem1.$$.fragment,local),Object(internal.pb)(kwstimelineitem2.$$.fragment,local),Object(internal.pb)(kwstimelineitem3.$$.fragment,local),Object(internal.pb)(kwstimelineheader1.$$.fragment,local),Object(internal.pb)(kwstimelineitem4.$$.fragment,local),Object(internal.pb)(kwstimelineitem5.$$.fragment,local),current=!1},d(detaching){Object(internal.x)(kwstimelineheader0,detaching),detaching&&Object(internal.z)(t0),Object(internal.x)(kwstimelineitem0,detaching),detaching&&Object(internal.z)(t1),Object(internal.x)(kwstimelineitem1,detaching),detaching&&Object(internal.z)(t2),Object(internal.x)(kwstimelineitem2,detaching),detaching&&Object(internal.z)(t3),Object(internal.x)(kwstimelineitem3,detaching),detaching&&Object(internal.z)(t4),Object(internal.x)(kwstimelineheader1,detaching),detaching&&Object(internal.z)(t5),Object(internal.x)(kwstimelineitem4,detaching),detaching&&Object(internal.z)(t6),Object(internal.x)(kwstimelineitem5,detaching)}}}function create_fragment(ctx){let div,kwstimeline,current;return kwstimeline=new ui.W({props:{align:ctx[0],$$slots:{default:[create_default_slot]},$$scope:{ctx:ctx}}}),{c(){div=Object(internal.A)("div"),Object(internal.u)(kwstimeline.$$.fragment),Object(internal.k)(div,"class","p-4"),Object(internal.fb)(div,"width","500px"),Object(internal.fb)(div,"margin","0 auto")},m(target,anchor){Object(internal.O)(target,div,anchor),Object(internal.R)(kwstimeline,div,null),current=!0},p(ctx,[dirty]){const kwstimeline_changes={};1&dirty&&(kwstimeline_changes.align=ctx[0]),2&dirty&&(kwstimeline_changes.$$scope={dirty:dirty,ctx:ctx}),kwstimeline.$set(kwstimeline_changes)},i(local){current||(Object(internal.ob)(kwstimeline.$$.fragment,local),current=!0)},o(local){Object(internal.pb)(kwstimeline.$$.fragment,local),current=!1},d(detaching){detaching&&Object(internal.z)(div),Object(internal.x)(kwstimeline)}}}function instance($$self,$$props,$$invalidate){let{align:align=""}=$$props;return $$self.$$set=$$props=>{"align"in $$props&&$$invalidate(0,align=$$props.align)},[align]}class Timeline_svelte_Timeline extends internal.b{constructor(options){super(),Object(internal.N)(this,options,instance,create_fragment,internal.Z,{align:0})}}var Timeline_svelte=Timeline_svelte_Timeline;Timeline_svelte_Timeline.__docgen={version:3,name:"Timeline.svelte",data:[{visibility:"public",description:null,keywords:[],name:"align",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};__webpack_require__("./node_modules/@storybook/addon-actions/dist/esm/index.js");var _templateObject,_templateObject2,_templateObject3,_templateObject4,_excluded=["components"];function _extends(){return _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function _taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var timelinefull_stories_args={align:"left",class:""},layoutProps={args:timelinefull_stories_args};function MDXContent(_ref){var components=_ref.components,props=_objectWithoutProperties(_ref,_excluded);return Object(esm.b)("wrapper",_extends({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(esm.b)(version.a,{mdxType:"Version"}),Object(esm.b)(dist_esm.e,{title:"Helpers/Timeline/Timeline Full Example",component:ui.W,args:timelinefull_stories_args,argTypes:{align:{control:"select"}},mdxType:"Meta"}),Object(esm.b)(dist_esm.d,{markdown:Object(ts_dedent_esm.a)(_templateObject||(_templateObject=_taggedTemplateLiteralLoose(["\n# Timeline Full Example\n## Contains combined usage of Timeline, TimelineItem and TimelineHeader components.\n"]))),mdxType:"Description"}),Object(esm.b)(dist_esm.c,{mdxType:"Canvas"},Object(esm.b)(dist_esm.g,{name:"Timeline Full Example",args:timelinefull_stories_args,mdxType:"Story"},(function(args){return{Component:Timeline_svelte,props:args}}))),Object(esm.b)(dist_esm.b,{story:"Timeline Full Example",mdxType:"ArgsTable"}),Object(esm.b)("h3",{id:"usage-example"},"Usage Example"),Object(esm.b)(dist_esm.f,{language:"javascript",code:Object(ts_dedent_esm.a)(_templateObject2||(_templateObject2=_taggedTemplateLiteralLoose(['\n  <Timeline {align}>\n    <TimelineHeader\n      ><span class="tag is-primary is-medium">2022</span></TimelineHeader>\n    <TimelineItem color="success">The year started</TimelineItem>\n    <TimelineItem color="success" marker_icon="thumbs-up">\n      Something happened\n      <small slot="below">and we rejoiced</small>\n    </TimelineItem>\n    <TimelineItem color="warning" marker_icon="thumbs-down">\n      <small slot="above">a few days later...</small>\n      Something else happened\n      <small slot="below">and we didnt like it</small>\n    </TimelineItem>\n    <TimelineItem color="warning">\n      Nothing happened\n      <small slot="below"\n        >but we filled <code>thumbnail</code> slot in\n        <code>TimelineItem</code></small>\n      <img\n        slot="thumbnail"\n        src="https://bulma.io/images/placeholders/64x64.png"\n        alt="" />\n    </TimelineItem>\n    <TimelineHeader\n      ><span class="tag is-info is-medium">2023</span></TimelineHeader>\n    <TimelineItem color="success">The year 2023 started</TimelineItem>\n    <TimelineItem\n      color="danger"\n      marker_image="https://bulma.io/images/placeholders/64x64.png">\n      Nothing happened\n      <small slot="below"\n        >but we filled <code>marker_image</code> prop in\n        <code>TimelineItem</code></small>\n    </TimelineItem>\n  </Timeline>\n  <script>\n    import { Timeline, TimelineItem, TimelineHeader } from \'@kws3/ui\';\n  <\/script>\n  ']))),mdxType:"Source"}),Object(esm.b)("h5",{id:"import-the-css"},"Import the CSS:"),Object(esm.b)(dist_esm.f,{language:"javascript",code:Object(ts_dedent_esm.a)(_templateObject3||(_templateObject3=_taggedTemplateLiteralLoose(["@import '@kws3/ui/styles/Timeline.scss';"]))),mdxType:"Source"}),Object(esm.b)("h5",{id:"scss-customization-variables-with-default-values"},"SCSS customization variables with default values:"),Object(esm.b)(dist_esm.f,{language:"css",code:Object(ts_dedent_esm.a)(_templateObject4||(_templateObject4=_taggedTemplateLiteralLoose(["\n    $kws-timeline-default-color: $grey;\n    $kws-timeline-default-color-invert: $light;\n  "]))),mdxType:"Source"}))}MDXContent.isMDXComponent=!0;var timelinefull_stories_timelineFullExample=function timelineFullExample(args){return{Component:Timeline_svelte,props:args}};timelinefull_stories_timelineFullExample.storyName="Timeline Full Example",timelinefull_stories_timelineFullExample.args=timelinefull_stories_args,timelinefull_stories_timelineFullExample.parameters={storySource:{source:"args => ({\n  Component: FullDecorator,\n  props: args\n})"}};var componentMeta={title:"Helpers/Timeline/Timeline Full Example",component:ui.W,args:timelinefull_stories_args,argTypes:{align:{control:"select"}},includeStories:["timelineFullExample"]},mdxStoryNameToKey={"Timeline Full Example":"timelineFullExample"};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs=Object.assign({},componentMeta.parameters.docs||{},{page:function page(){return Object(esm.b)(dist_esm.a,{mdxStoryNameToKey:mdxStoryNameToKey,mdxComponentAnnotations:componentMeta},Object(esm.b)(MDXContent,null))}});__webpack_exports__.default=componentMeta}}]);