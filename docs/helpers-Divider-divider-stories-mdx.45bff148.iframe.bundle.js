(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{"./src/stories/helpers/Divider/divider.stories.mdx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"args",(function(){return divider_stories_args})),__webpack_require__.d(__webpack_exports__,"divider",(function(){return divider_stories_divider}));__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/react/index.js");var esm=__webpack_require__("./node_modules/@mdx-js/react/dist/esm.js"),dist_esm=__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/index.js"),ts_dedent_esm=__webpack_require__("./node_modules/ts-dedent/esm/index.js"),version=__webpack_require__("./src/version.mdx"),ui=__webpack_require__("./packages/@kws3/ui/index.js"),internal=__webpack_require__("./node_modules/svelte/internal/index.mjs");function add_css(target){Object(internal.i)(target,"svelte-h84du6",".wrap.svelte-h84du6{height:130px;display:flex;align-items:center;justify-content:center;flex-direction:column}.wrap.is-vertical.svelte-h84du6{flex-direction:row}")}function create_default_slot_10(ctx){let div,p0,t1,kwsdivider,t2,p1,current;return kwsdivider=new ui.q({props:{color:ctx[0],light:ctx[1],vertical:ctx[2],alignment:ctx[3],style:ctx[4],class:ctx[5]}}),{c(){div=Object(internal.B)("div"),p0=Object(internal.B)("p"),p0.textContent="Divider with",t1=Object(internal.ib)(),Object(internal.v)(kwsdivider.$$.fragment),t2=Object(internal.ib)(),p1=Object(internal.B)("p"),p1.textContent="No text in between",Object(internal.k)(div,"class","wrap svelte-h84du6"),Object(internal.qb)(div,"is-vertical",ctx[2])},m(target,anchor){Object(internal.Q)(target,div,anchor),Object(internal.h)(div,p0),Object(internal.h)(div,t1),Object(internal.T)(kwsdivider,div,null),Object(internal.h)(div,t2),Object(internal.h)(div,p1),current=!0},p(ctx,dirty){const kwsdivider_changes={};1&dirty&&(kwsdivider_changes.color=ctx[0]),2&dirty&&(kwsdivider_changes.light=ctx[1]),4&dirty&&(kwsdivider_changes.vertical=ctx[2]),8&dirty&&(kwsdivider_changes.alignment=ctx[3]),16&dirty&&(kwsdivider_changes.style=ctx[4]),32&dirty&&(kwsdivider_changes.class=ctx[5]),kwsdivider.$set(kwsdivider_changes),(!current||4&dirty)&&Object(internal.qb)(div,"is-vertical",ctx[2])},i(local){current||(Object(internal.rb)(kwsdivider.$$.fragment,local),current=!0)},o(local){Object(internal.sb)(kwsdivider.$$.fragment,local),current=!1},d(detaching){detaching&&Object(internal.A)(div),Object(internal.y)(kwsdivider)}}}function create_default_slot_9(ctx){let t;return{c(){t=Object(internal.nb)("Divider Text")},m(target,anchor){Object(internal.Q)(target,t,anchor)},d(detaching){detaching&&Object(internal.A)(t)}}}function create_default_slot_8(ctx){let div,p0,t1,kwsdivider,t2,p1,current;return kwsdivider=new ui.q({props:{color:ctx[0],light:ctx[1],vertical:ctx[2],alignment:ctx[3],style:ctx[4],class:ctx[5],$$slots:{default:[create_default_slot_9]},$$scope:{ctx:ctx}}}),{c(){div=Object(internal.B)("div"),p0=Object(internal.B)("p"),p0.textContent="There is some text here",t1=Object(internal.ib)(),Object(internal.v)(kwsdivider.$$.fragment),t2=Object(internal.ib)(),p1=Object(internal.B)("p"),p1.textContent="In between the Divider lines",Object(internal.k)(div,"class","wrap svelte-h84du6"),Object(internal.qb)(div,"is-vertical",ctx[2])},m(target,anchor){Object(internal.Q)(target,div,anchor),Object(internal.h)(div,p0),Object(internal.h)(div,t1),Object(internal.T)(kwsdivider,div,null),Object(internal.h)(div,t2),Object(internal.h)(div,p1),current=!0},p(ctx,dirty){const kwsdivider_changes={};1&dirty&&(kwsdivider_changes.color=ctx[0]),2&dirty&&(kwsdivider_changes.light=ctx[1]),4&dirty&&(kwsdivider_changes.vertical=ctx[2]),8&dirty&&(kwsdivider_changes.alignment=ctx[3]),16&dirty&&(kwsdivider_changes.style=ctx[4]),32&dirty&&(kwsdivider_changes.class=ctx[5]),64&dirty&&(kwsdivider_changes.$$scope={dirty:dirty,ctx:ctx}),kwsdivider.$set(kwsdivider_changes),(!current||4&dirty)&&Object(internal.qb)(div,"is-vertical",ctx[2])},i(local){current||(Object(internal.rb)(kwsdivider.$$.fragment,local),current=!0)},o(local){Object(internal.sb)(kwsdivider.$$.fragment,local),current=!1},d(detaching){detaching&&Object(internal.A)(div),Object(internal.y)(kwsdivider)}}}function create_default_slot_7(ctx){let span;return{c(){span=Object(internal.B)("span"),span.textContent="Another color",Object(internal.k)(span,"class","has-text-success-dark")},m(target,anchor){Object(internal.Q)(target,span,anchor)},p:internal.U,d(detaching){detaching&&Object(internal.A)(span)}}}function create_default_slot_6(ctx){let div,p0,t1,kwsdivider,t2,p1,current;return kwsdivider=new ui.q({props:{color:ctx[0],light:ctx[1],vertical:ctx[2],alignment:ctx[3],style:ctx[4],class:ctx[5],$$slots:{default:[create_default_slot_7]},$$scope:{ctx:ctx}}}),{c(){div=Object(internal.B)("div"),p0=Object(internal.B)("p"),p0.textContent="Oh Look!",t1=Object(internal.ib)(),Object(internal.v)(kwsdivider.$$.fragment),t2=Object(internal.ib)(),p1=Object(internal.B)("p"),p1.textContent="We used a different color text",Object(internal.k)(div,"class","wrap svelte-h84du6"),Object(internal.qb)(div,"is-vertical",ctx[2])},m(target,anchor){Object(internal.Q)(target,div,anchor),Object(internal.h)(div,p0),Object(internal.h)(div,t1),Object(internal.T)(kwsdivider,div,null),Object(internal.h)(div,t2),Object(internal.h)(div,p1),current=!0},p(ctx,dirty){const kwsdivider_changes={};1&dirty&&(kwsdivider_changes.color=ctx[0]),2&dirty&&(kwsdivider_changes.light=ctx[1]),4&dirty&&(kwsdivider_changes.vertical=ctx[2]),8&dirty&&(kwsdivider_changes.alignment=ctx[3]),16&dirty&&(kwsdivider_changes.style=ctx[4]),32&dirty&&(kwsdivider_changes.class=ctx[5]),64&dirty&&(kwsdivider_changes.$$scope={dirty:dirty,ctx:ctx}),kwsdivider.$set(kwsdivider_changes),(!current||4&dirty)&&Object(internal.qb)(div,"is-vertical",ctx[2])},i(local){current||(Object(internal.rb)(kwsdivider.$$.fragment,local),current=!0)},o(local){Object(internal.sb)(kwsdivider.$$.fragment,local),current=!1},d(detaching){detaching&&Object(internal.A)(div),Object(internal.y)(kwsdivider)}}}function create_default_slot_5(ctx){let icon,current;return icon=new ui.y({props:{icon:"user",size:"medium",color:"danger"}}),{c(){Object(internal.v)(icon.$$.fragment)},m(target,anchor){Object(internal.T)(icon,target,anchor),current=!0},p:internal.U,i(local){current||(Object(internal.rb)(icon.$$.fragment,local),current=!0)},o(local){Object(internal.sb)(icon.$$.fragment,local),current=!1},d(detaching){Object(internal.y)(icon,detaching)}}}function create_default_slot_4(ctx){let div,p0,t1,kwsdivider,t2,p1,current;return kwsdivider=new ui.q({props:{color:ctx[0],light:ctx[1],vertical:ctx[2],alignment:ctx[3],style:ctx[4],class:ctx[5],$$slots:{default:[create_default_slot_5]},$$scope:{ctx:ctx}}}),{c(){div=Object(internal.B)("div"),p0=Object(internal.B)("p"),p0.textContent="Can do...",t1=Object(internal.ib)(),Object(internal.v)(kwsdivider.$$.fragment),t2=Object(internal.ib)(),p1=Object(internal.B)("p"),p1.textContent="Icons too",Object(internal.k)(div,"class","wrap svelte-h84du6"),Object(internal.qb)(div,"is-vertical",ctx[2])},m(target,anchor){Object(internal.Q)(target,div,anchor),Object(internal.h)(div,p0),Object(internal.h)(div,t1),Object(internal.T)(kwsdivider,div,null),Object(internal.h)(div,t2),Object(internal.h)(div,p1),current=!0},p(ctx,dirty){const kwsdivider_changes={};1&dirty&&(kwsdivider_changes.color=ctx[0]),2&dirty&&(kwsdivider_changes.light=ctx[1]),4&dirty&&(kwsdivider_changes.vertical=ctx[2]),8&dirty&&(kwsdivider_changes.alignment=ctx[3]),16&dirty&&(kwsdivider_changes.style=ctx[4]),32&dirty&&(kwsdivider_changes.class=ctx[5]),64&dirty&&(kwsdivider_changes.$$scope={dirty:dirty,ctx:ctx}),kwsdivider.$set(kwsdivider_changes),(!current||4&dirty)&&Object(internal.qb)(div,"is-vertical",ctx[2])},i(local){current||(Object(internal.rb)(kwsdivider.$$.fragment,local),current=!0)},o(local){Object(internal.sb)(kwsdivider.$$.fragment,local),current=!1},d(detaching){detaching&&Object(internal.A)(div),Object(internal.y)(kwsdivider)}}}function create_default_slot_3(ctx){let p,icon,t,current;return icon=new ui.y({props:{icon:"check",size:"small",color:"success"}}),{c(){p=Object(internal.B)("p"),Object(internal.v)(icon.$$.fragment),t=Object(internal.nb)(" Some Text")},m(target,anchor){Object(internal.Q)(target,p,anchor),Object(internal.T)(icon,p,null),Object(internal.h)(p,t),current=!0},p:internal.U,i(local){current||(Object(internal.rb)(icon.$$.fragment,local),current=!0)},o(local){Object(internal.sb)(icon.$$.fragment,local),current=!1},d(detaching){detaching&&Object(internal.A)(p),Object(internal.y)(icon)}}}function create_default_slot_2(ctx){let div,p0,t1,kwsdivider,t2,p1,current;return kwsdivider=new ui.q({props:{color:ctx[0],light:ctx[1],vertical:ctx[2],alignment:ctx[3],style:ctx[4],class:ctx[5],$$slots:{default:[create_default_slot_3]},$$scope:{ctx:ctx}}}),{c(){div=Object(internal.B)("div"),p0=Object(internal.B)("p"),p0.textContent="Even those",t1=Object(internal.ib)(),Object(internal.v)(kwsdivider.$$.fragment),t2=Object(internal.ib)(),p1=Object(internal.B)("p"),p1.textContent="Icons with text next to them",Object(internal.k)(div,"class","wrap svelte-h84du6"),Object(internal.qb)(div,"is-vertical",ctx[2])},m(target,anchor){Object(internal.Q)(target,div,anchor),Object(internal.h)(div,p0),Object(internal.h)(div,t1),Object(internal.T)(kwsdivider,div,null),Object(internal.h)(div,t2),Object(internal.h)(div,p1),current=!0},p(ctx,dirty){const kwsdivider_changes={};1&dirty&&(kwsdivider_changes.color=ctx[0]),2&dirty&&(kwsdivider_changes.light=ctx[1]),4&dirty&&(kwsdivider_changes.vertical=ctx[2]),8&dirty&&(kwsdivider_changes.alignment=ctx[3]),16&dirty&&(kwsdivider_changes.style=ctx[4]),32&dirty&&(kwsdivider_changes.class=ctx[5]),64&dirty&&(kwsdivider_changes.$$scope={dirty:dirty,ctx:ctx}),kwsdivider.$set(kwsdivider_changes),(!current||4&dirty)&&Object(internal.qb)(div,"is-vertical",ctx[2])},i(local){current||(Object(internal.rb)(kwsdivider.$$.fragment,local),current=!0)},o(local){Object(internal.sb)(kwsdivider.$$.fragment,local),current=!1},d(detaching){detaching&&Object(internal.A)(div),Object(internal.y)(kwsdivider)}}}function create_default_slot_1(ctx){let span;return{c(){span=Object(internal.B)("span"),span.textContent="A tag",Object(internal.k)(span,"class","tag is-success")},m(target,anchor){Object(internal.Q)(target,span,anchor)},p:internal.U,d(detaching){detaching&&Object(internal.A)(span)}}}function create_default_slot(ctx){let div,p0,t1,kwsdivider,t2,p1,current;return kwsdivider=new ui.q({props:{color:ctx[0],light:ctx[1],vertical:ctx[2],alignment:ctx[3],style:ctx[4],class:ctx[5],$$slots:{default:[create_default_slot_1]},$$scope:{ctx:ctx}}}),{c(){div=Object(internal.B)("div"),p0=Object(internal.B)("p"),p0.textContent="Tags?",t1=Object(internal.ib)(),Object(internal.v)(kwsdivider.$$.fragment),t2=Object(internal.ib)(),p1=Object(internal.B)("p"),p1.textContent="Oh Yes!!!",Object(internal.k)(div,"class","wrap svelte-h84du6"),Object(internal.qb)(div,"is-vertical",ctx[2])},m(target,anchor){Object(internal.Q)(target,div,anchor),Object(internal.h)(div,p0),Object(internal.h)(div,t1),Object(internal.T)(kwsdivider,div,null),Object(internal.h)(div,t2),Object(internal.h)(div,p1),current=!0},p(ctx,dirty){const kwsdivider_changes={};1&dirty&&(kwsdivider_changes.color=ctx[0]),2&dirty&&(kwsdivider_changes.light=ctx[1]),4&dirty&&(kwsdivider_changes.vertical=ctx[2]),8&dirty&&(kwsdivider_changes.alignment=ctx[3]),16&dirty&&(kwsdivider_changes.style=ctx[4]),32&dirty&&(kwsdivider_changes.class=ctx[5]),64&dirty&&(kwsdivider_changes.$$scope={dirty:dirty,ctx:ctx}),kwsdivider.$set(kwsdivider_changes),(!current||4&dirty)&&Object(internal.qb)(div,"is-vertical",ctx[2])},i(local){current||(Object(internal.rb)(kwsdivider.$$.fragment,local),current=!0)},o(local){Object(internal.sb)(kwsdivider.$$.fragment,local),current=!1},d(detaching){detaching&&Object(internal.A)(div),Object(internal.y)(kwsdivider)}}}function create_fragment(ctx){let message0,t0,message1,t1,message2,t2,message3,t3,message4,t4,message5,current;return message0=new ui.C({props:{color:"",inner_class:"p-1",$$slots:{default:[create_default_slot_10]},$$scope:{ctx:ctx}}}),message1=new ui.C({props:{color:"",inner_class:"p-1",$$slots:{default:[create_default_slot_8]},$$scope:{ctx:ctx}}}),message2=new ui.C({props:{color:"",inner_class:"p-1",$$slots:{default:[create_default_slot_6]},$$scope:{ctx:ctx}}}),message3=new ui.C({props:{color:"",inner_class:"p-1",$$slots:{default:[create_default_slot_4]},$$scope:{ctx:ctx}}}),message4=new ui.C({props:{color:"",inner_class:"p-1",$$slots:{default:[create_default_slot_2]},$$scope:{ctx:ctx}}}),message5=new ui.C({props:{color:"",inner_class:"p-1",$$slots:{default:[create_default_slot]},$$scope:{ctx:ctx}}}),{c(){Object(internal.v)(message0.$$.fragment),t0=Object(internal.ib)(),Object(internal.v)(message1.$$.fragment),t1=Object(internal.ib)(),Object(internal.v)(message2.$$.fragment),t2=Object(internal.ib)(),Object(internal.v)(message3.$$.fragment),t3=Object(internal.ib)(),Object(internal.v)(message4.$$.fragment),t4=Object(internal.ib)(),Object(internal.v)(message5.$$.fragment)},m(target,anchor){Object(internal.T)(message0,target,anchor),Object(internal.Q)(target,t0,anchor),Object(internal.T)(message1,target,anchor),Object(internal.Q)(target,t1,anchor),Object(internal.T)(message2,target,anchor),Object(internal.Q)(target,t2,anchor),Object(internal.T)(message3,target,anchor),Object(internal.Q)(target,t3,anchor),Object(internal.T)(message4,target,anchor),Object(internal.Q)(target,t4,anchor),Object(internal.T)(message5,target,anchor),current=!0},p(ctx,[dirty]){const message0_changes={};127&dirty&&(message0_changes.$$scope={dirty:dirty,ctx:ctx}),message0.$set(message0_changes);const message1_changes={};127&dirty&&(message1_changes.$$scope={dirty:dirty,ctx:ctx}),message1.$set(message1_changes);const message2_changes={};127&dirty&&(message2_changes.$$scope={dirty:dirty,ctx:ctx}),message2.$set(message2_changes);const message3_changes={};127&dirty&&(message3_changes.$$scope={dirty:dirty,ctx:ctx}),message3.$set(message3_changes);const message4_changes={};127&dirty&&(message4_changes.$$scope={dirty:dirty,ctx:ctx}),message4.$set(message4_changes);const message5_changes={};127&dirty&&(message5_changes.$$scope={dirty:dirty,ctx:ctx}),message5.$set(message5_changes)},i(local){current||(Object(internal.rb)(message0.$$.fragment,local),Object(internal.rb)(message1.$$.fragment,local),Object(internal.rb)(message2.$$.fragment,local),Object(internal.rb)(message3.$$.fragment,local),Object(internal.rb)(message4.$$.fragment,local),Object(internal.rb)(message5.$$.fragment,local),current=!0)},o(local){Object(internal.sb)(message0.$$.fragment,local),Object(internal.sb)(message1.$$.fragment,local),Object(internal.sb)(message2.$$.fragment,local),Object(internal.sb)(message3.$$.fragment,local),Object(internal.sb)(message4.$$.fragment,local),Object(internal.sb)(message5.$$.fragment,local),current=!1},d(detaching){Object(internal.y)(message0,detaching),detaching&&Object(internal.A)(t0),Object(internal.y)(message1,detaching),detaching&&Object(internal.A)(t1),Object(internal.y)(message2,detaching),detaching&&Object(internal.A)(t2),Object(internal.y)(message3,detaching),detaching&&Object(internal.A)(t3),Object(internal.y)(message4,detaching),detaching&&Object(internal.A)(t4),Object(internal.y)(message5,detaching)}}}function instance($$self,$$props,$$invalidate){let{color:color="",light:light=!1,vertical:vertical=!1,alignment:alignment="center",style:style=""}=$$props,{class:klass=""}=$$props;return $$self.$$set=$$props=>{"color"in $$props&&$$invalidate(0,color=$$props.color),"light"in $$props&&$$invalidate(1,light=$$props.light),"vertical"in $$props&&$$invalidate(2,vertical=$$props.vertical),"alignment"in $$props&&$$invalidate(3,alignment=$$props.alignment),"style"in $$props&&$$invalidate(4,style=$$props.style),"class"in $$props&&$$invalidate(5,klass=$$props.class)},[color,light,vertical,alignment,style,klass]}class Divider_svelte_Divider extends internal.b{constructor(options){super(),Object(internal.O)(this,options,instance,create_fragment,internal.bb,{color:0,light:1,vertical:2,alignment:3,style:4,class:5},add_css)}}var Divider_svelte=Divider_svelte_Divider;Divider_svelte_Divider.__docgen={version:3,name:"Divider.svelte",data:[{keywords:[{name:"type",description:"{ColorOptions}"}],visibility:"public",description:"Color of the Divider lines",name:"color",kind:"let",static:!1,readonly:!1,type:{kind:"union",text:" ColorOptions:| ''|'primary'|'success'|'warning'|'info'|'danger'|'dark'|'light'|'link'",type:[{kind:"const",text:"''",type:"string",value:""},{kind:"const",text:"'primary'",type:"string",value:"primary"},{kind:"const",text:"'success'",type:"string",value:"success"},{kind:"const",text:"'warning'",type:"string",value:"warning"},{kind:"const",text:"'info'",type:"string",value:"info"},{kind:"const",text:"'danger'",type:"string",value:"danger"},{kind:"const",text:"'dark'",type:"string",value:"dark"},{kind:"const",text:"'light'",type:"string",value:"light"},{kind:"const",text:"'link'",type:"string",value:"link"}]},defaultValue:""},{visibility:"public",description:null,keywords:[],name:"light",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1},{visibility:"public",description:null,keywords:[],name:"vertical",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1},{keywords:[{name:"type",description:"{Exclude<import('kws3/ui/types').Positions, 'start'|'end'>}"}],visibility:"public",description:"Alignment of the Divider text. `top`/`left` and `bottom`/`right` are analogous for vertical Dividers",name:"alignment",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"center"},{visibility:"public",description:null,keywords:[],name:"style",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""},{visibility:"public",description:null,keywords:[],name:"class",kind:"const",static:!1,readonly:!0,type:{kind:"type",text:"string",type:"string"},localName:"klass",defaultValue:""}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};__webpack_require__("./node_modules/@storybook/addon-actions/dist/esm/index.js");var _templateObject,_templateObject2,_templateObject3,_templateObject4,_excluded=["components"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function _taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var divider_stories_args={color:"",light:!1,vertical:!1,alignment:"center",class:"",style:""},layoutProps={args:divider_stories_args};function MDXContent(_ref){var components=_ref.components,props=_objectWithoutProperties(_ref,_excluded);return Object(esm.b)("wrapper",_extends({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(esm.b)(version.a,{mdxType:"Version"}),Object(esm.b)(dist_esm.e,{title:"Helpers/Divider",component:ui.q,args:divider_stories_args,argTypes:{color:{control:"select"},alignment:{control:"select"}},mdxType:"Meta"}),Object(esm.b)(dist_esm.d,{markdown:Object(ts_dedent_esm.a)(_templateObject||(_templateObject=_taggedTemplateLiteralLoose(["\n# Divider\n## Component to display a horizontal or vertical divider with optional text.\n"]))),mdxType:"Description"}),Object(esm.b)(dist_esm.c,{mdxType:"Canvas"},Object(esm.b)(dist_esm.g,{name:"Divider",args:divider_stories_args,mdxType:"Story"},(function(args){return{Component:Divider_svelte,props:args}}))),Object(esm.b)(dist_esm.b,{story:"Divider",mdxType:"ArgsTable"}),Object(esm.b)("h3",null,"Usage"),Object(esm.b)("h5",null,"Import the component:"),Object(esm.b)(dist_esm.f,{language:"javascript",code:Object(ts_dedent_esm.a)(_templateObject2||(_templateObject2=_taggedTemplateLiteralLoose(["import { Divider } from '@kws3/ui';"]))),mdxType:"Source"}),Object(esm.b)("div",{class:"notification is-light is-info"},"Use ",Object(esm.b)("code",null,"m-*")," helper classes from Bulma to precisely control the spacing around the divider."),Object(esm.b)("h5",null,"Import the CSS:"),Object(esm.b)(dist_esm.f,{language:"javascript",code:Object(ts_dedent_esm.a)(_templateObject3||(_templateObject3=_taggedTemplateLiteralLoose(["@import '@kws3/ui/styles/Divider.scss';"]))),mdxType:"Source"}),Object(esm.b)("h5",null,"SCSS customization variables with default values:"),Object(esm.b)(dist_esm.f,{language:"css",code:Object(ts_dedent_esm.a)(_templateObject4||(_templateObject4=_taggedTemplateLiteralLoose(["\n    $kws-theme-colors: $colors;\n    $kws-divider-color: $border;\n    $kws-divider-font-size: $size-7;\n    $kws-divider-gap: 0.25em;\n    $kws-divider-margin: 1.25rem;\n  "]))),mdxType:"Source"}))}MDXContent.isMDXComponent=!0;var divider_stories_divider=function divider(args){return{Component:Divider_svelte,props:args}};divider_stories_divider.storyName="Divider",divider_stories_divider.args=divider_stories_args,divider_stories_divider.parameters={storySource:{source:"args => ({\n  Component: DividerDecorator,\n  props: args\n})"}};var componentMeta={title:"Helpers/Divider",component:ui.q,args:divider_stories_args,argTypes:{color:{control:"select"},alignment:{control:"select"}},includeStories:["divider"]},mdxStoryNameToKey={Divider:"divider"};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs=Object.assign({},componentMeta.parameters.docs||{},{page:function page(){return Object(esm.b)(dist_esm.a,{mdxStoryNameToKey:mdxStoryNameToKey,mdxComponentAnnotations:componentMeta},Object(esm.b)(MDXContent,null))}});__webpack_exports__.default=componentMeta}}]);