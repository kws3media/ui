(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{"./src/stories/utils/RandomInteger/randomInteger.stories.mdx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"randomInteger",(function(){return randomInteger_stories_randomInteger}));__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/react/index.js");var esm=__webpack_require__("./node_modules/@mdx-js/react/dist/esm.js"),dist_esm=__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/index.js"),version=(__webpack_require__("./node_modules/ts-dedent/esm/index.js"),__webpack_require__("./src/version.mdx")),internal=__webpack_require__("./node_modules/svelte/internal/index.mjs"),utils=__webpack_require__("./packages/@kws3/ui/utils/index.js"),ui=__webpack_require__("./packages/@kws3/ui/index.js"),svelte=__webpack_require__("./node_modules/svelte/index.mjs");function create_fragment(ctx){let div6,div0,pre,t0,t1,t2,t3,div5,div2,div1,label0,t5,input0,t6,div4,div3,label1,t8,input1,t9,button,icon,t10,span,current,mounted,dispose;return icon=new ui.y({props:{icon:"refresh"}}),{c(){div6=Object(internal.B)("div"),div0=Object(internal.B)("div"),pre=Object(internal.B)("pre"),t0=Object(internal.nb)("      Random Integer within the range: "),t1=Object(internal.nb)(ctx[0]),t2=Object(internal.nb)("\n    "),t3=Object(internal.ib)(),div5=Object(internal.B)("div"),div2=Object(internal.B)("div"),div1=Object(internal.B)("div"),label0=Object(internal.B)("label"),label0.textContent="Min Range Value",t5=Object(internal.ib)(),input0=Object(internal.B)("input"),t6=Object(internal.ib)(),div4=Object(internal.B)("div"),div3=Object(internal.B)("div"),label1=Object(internal.B)("label"),label1.textContent="Max Range Value",t8=Object(internal.ib)(),input1=Object(internal.B)("input"),t9=Object(internal.ib)(),button=Object(internal.B)("button"),Object(internal.v)(icon.$$.fragment),t10=Object(internal.ib)(),span=Object(internal.B)("span"),span.textContent="Re-generate",Object(internal.k)(div0,"class","column is-8"),Object(internal.k)(label0,"for",""),Object(internal.k)(label0,"class","label"),Object(internal.k)(input0,"class","input"),Object(internal.k)(input0,"type","text"),Object(internal.k)(div1,"class","control"),Object(internal.k)(div2,"class","field"),Object(internal.k)(label1,"for",""),Object(internal.k)(label1,"class","label"),Object(internal.k)(input1,"class","input"),Object(internal.k)(input1,"type","text"),Object(internal.k)(div3,"class","control"),Object(internal.k)(div4,"class","field"),Object(internal.k)(button,"type","button"),Object(internal.k)(button,"class","button is-success is-pulled-right"),Object(internal.k)(div5,"class","column is-4"),Object(internal.k)(div6,"class","columns")},m(target,anchor){Object(internal.Q)(target,div6,anchor),Object(internal.h)(div6,div0),Object(internal.h)(div0,pre),Object(internal.h)(pre,t0),Object(internal.h)(pre,t1),Object(internal.h)(pre,t2),Object(internal.h)(div6,t3),Object(internal.h)(div6,div5),Object(internal.h)(div5,div2),Object(internal.h)(div2,div1),Object(internal.h)(div1,label0),Object(internal.h)(div1,t5),Object(internal.h)(div1,input0),Object(internal.gb)(input0,ctx[1]),Object(internal.h)(div5,t6),Object(internal.h)(div5,div4),Object(internal.h)(div4,div3),Object(internal.h)(div3,label1),Object(internal.h)(div3,t8),Object(internal.h)(div3,input1),Object(internal.gb)(input1,ctx[2]),Object(internal.h)(div5,t9),Object(internal.h)(div5,button),Object(internal.T)(icon,button,null),Object(internal.h)(button,t10),Object(internal.h)(button,span),current=!0,mounted||(dispose=[Object(internal.S)(input0,"input",ctx[4]),Object(internal.S)(input1,"input",ctx[5]),Object(internal.S)(button,"click",ctx[6])],mounted=!0)},p(ctx,[dirty]){(!current||1&dirty)&&Object(internal.fb)(t1,ctx[0]),2&dirty&&input0.value!==ctx[1]&&Object(internal.gb)(input0,ctx[1]),4&dirty&&input1.value!==ctx[2]&&Object(internal.gb)(input1,ctx[2])},i(local){current||(Object(internal.rb)(icon.$$.fragment,local),current=!0)},o(local){Object(internal.sb)(icon.$$.fragment,local),current=!1},d(detaching){detaching&&Object(internal.A)(div6),Object(internal.y)(icon),mounted=!1,Object(internal.ab)(dispose)}}}function instance($$self,$$props,$$invalidate){let randomNumber=0,min=0,max=100;function regenerateNumber(){$$invalidate(0,randomNumber=Object(utils.j)(min,max))}Object(svelte.c)((()=>{regenerateNumber()}));return[randomNumber,min,max,regenerateNumber,function input0_input_handler(){min=this.value,$$invalidate(1,min)},function input1_input_handler(){max=this.value,$$invalidate(2,max)},()=>{regenerateNumber()}]}class RandomInteger_svelte_RandomInteger extends internal.b{constructor(options){super(),Object(internal.O)(this,options,instance,create_fragment,internal.bb,{})}}var RandomInteger_svelte=RandomInteger_svelte_RandomInteger;RandomInteger_svelte_RandomInteger.__docgen={version:3,name:"RandomInteger.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};var _excluded=["components"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var layoutProps={};function MDXContent(_ref){var components=_ref.components,props=_objectWithoutProperties(_ref,_excluded);return Object(esm.b)("wrapper",_extends({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(esm.b)(version.a,{mdxType:"Version"}),Object(esm.b)(dist_esm.e,{title:"Utils/2. Examples/RandomInteger",mdxType:"Meta"}),Object(esm.b)("h2",null,"randomIntegerFromInterval"),Object(esm.b)("p",null,"The ",Object(esm.b)("inlineCode",{parentName:"p"},"randomIntegerFromInterval")," returns a random integer."),Object(esm.b)("p",null,Object(esm.b)("strong",{parentName:"p"},"Parameters:")," "),Object(esm.b)("ol",null,Object(esm.b)("li",{parentName:"ol"},"min : ",Object(esm.b)("inlineCode",{parentName:"li"},"type: Number")),Object(esm.b)("li",{parentName:"ol"},"max : ",Object(esm.b)("inlineCode",{parentName:"li"},"type: Number"))),Object(esm.b)("h4",null,"Usage"),Object(esm.b)("pre",null,Object(esm.b)("code",{parentName:"pre",className:"language-js"},'import { randomIntegerFromInterval } from "@kws3/ui/utils";\nrandomIntegerFromInterval(min, max);\n')),Object(esm.b)(dist_esm.g,{name:"RandomInteger",args:{},mdxType:"Story"},(function(args){return{Component:RandomInteger_svelte}})))}MDXContent.isMDXComponent=!0;var randomInteger_stories_randomInteger=function randomInteger(args){return{Component:RandomInteger_svelte}};randomInteger_stories_randomInteger.storyName="RandomInteger",randomInteger_stories_randomInteger.args={},randomInteger_stories_randomInteger.parameters={storySource:{source:"args => ({\n  Component: RandomInteger\n})"}};var componentMeta={title:"Utils/2. Examples/RandomInteger",includeStories:["randomInteger"]},mdxStoryNameToKey={RandomInteger:"randomInteger"};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs=Object.assign({},componentMeta.parameters.docs||{},{page:function page(){return Object(esm.b)(dist_esm.a,{mdxStoryNameToKey:mdxStoryNameToKey,mdxComponentAnnotations:componentMeta},Object(esm.b)(MDXContent,null))}});__webpack_exports__.default=componentMeta}}]);