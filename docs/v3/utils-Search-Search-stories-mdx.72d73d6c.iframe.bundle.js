(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{"./node_modules/@storybook/addon-docs/dist/esm/index.js":function(module,__webpack_exports__,__webpack_require__){"use strict";var _blocks__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/blocks/index.js");__webpack_require__.d(__webpack_exports__,"a",(function(){return _blocks__WEBPACK_IMPORTED_MODULE_0__.AddContext})),__webpack_require__.d(__webpack_exports__,"b",(function(){return _blocks__WEBPACK_IMPORTED_MODULE_0__.ArgsTable})),__webpack_require__.d(__webpack_exports__,"c",(function(){return _blocks__WEBPACK_IMPORTED_MODULE_0__.Canvas})),__webpack_require__.d(__webpack_exports__,"d",(function(){return _blocks__WEBPACK_IMPORTED_MODULE_0__.Description})),__webpack_require__.d(__webpack_exports__,"e",(function(){return _blocks__WEBPACK_IMPORTED_MODULE_0__.Meta})),__webpack_require__.d(__webpack_exports__,"f",(function(){return _blocks__WEBPACK_IMPORTED_MODULE_0__.Source})),__webpack_require__.d(__webpack_exports__,"g",(function(){return _blocks__WEBPACK_IMPORTED_MODULE_0__.Story}))},"./node_modules/core-js/modules/es.array.index-of.js":function(module,exports,__webpack_require__){"use strict";var $=__webpack_require__("./node_modules/core-js/internals/export.js"),uncurryThis=__webpack_require__("./node_modules/core-js/internals/function-uncurry-this-clause.js"),$indexOf=__webpack_require__("./node_modules/core-js/internals/array-includes.js").indexOf,arrayMethodIsStrict=__webpack_require__("./node_modules/core-js/internals/array-method-is-strict.js"),nativeIndexOf=uncurryThis([].indexOf),NEGATIVE_ZERO=!!nativeIndexOf&&1/nativeIndexOf([1],1,-0)<0;$({target:"Array",proto:!0,forced:NEGATIVE_ZERO||!arrayMethodIsStrict("indexOf")},{indexOf:function indexOf(searchElement){var fromIndex=arguments.length>1?arguments[1]:void 0;return NEGATIVE_ZERO?nativeIndexOf(this,searchElement,fromIndex)||0:$indexOf(this,searchElement,fromIndex)}})},"./node_modules/core-js/modules/web.set-interval.js":function(module,exports,__webpack_require__){var $=__webpack_require__("./node_modules/core-js/internals/export.js"),global=__webpack_require__("./node_modules/core-js/internals/global.js"),setInterval=__webpack_require__("./node_modules/core-js/internals/schedulers-fix.js")(global.setInterval,!0);$({global:!0,bind:!0,forced:global.setInterval!==setInterval},{setInterval:setInterval})},"./node_modules/core-js/modules/web.set-timeout.js":function(module,exports,__webpack_require__){var $=__webpack_require__("./node_modules/core-js/internals/export.js"),global=__webpack_require__("./node_modules/core-js/internals/global.js"),setTimeout=__webpack_require__("./node_modules/core-js/internals/schedulers-fix.js")(global.setTimeout,!0);$({global:!0,bind:!0,forced:global.setTimeout!==setTimeout},{setTimeout:setTimeout})},"./node_modules/core-js/modules/web.timers.js":function(module,exports,__webpack_require__){__webpack_require__("./node_modules/core-js/modules/web.set-interval.js"),__webpack_require__("./node_modules/core-js/modules/web.set-timeout.js")},"./src/stories/utils/Search/Search.stories.mdx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"search",(function(){return Search_stories_search}));__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/react/index.js");var esm=__webpack_require__("./node_modules/@mdx-js/react/dist/esm.js"),dist_esm=__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/index.js"),version=(__webpack_require__("./node_modules/ts-dedent/esm/index.js"),__webpack_require__("./src/version.mdx")),internal=__webpack_require__("./node_modules/svelte/internal/index.mjs"),ui_search=__webpack_require__("./packages/@kws3/ui/search/index.js");function create_fragment(ctx){let div5,div4,div0,h20,t1,pre0,t3,div3,h21,t5,div1,input,t6,pre1,t7,t8,div2,mounted,dispose,t7_value=JSON.stringify(ctx[1],null,4)+"";return{c(){div5=Object(internal.B)("div"),div4=Object(internal.B)("div"),div0=Object(internal.B)("div"),h20=Object(internal.B)("h2"),h20.textContent="Data object",t1=Object(internal.ib)(),pre0=Object(internal.B)("pre"),pre0.textContent=`${JSON.stringify(ctx[2],null,4)}`,t3=Object(internal.ib)(),div3=Object(internal.B)("div"),h21=Object(internal.B)("h2"),h21.textContent="Search any name here",t5=Object(internal.ib)(),div1=Object(internal.B)("div"),input=Object(internal.B)("input"),t6=Object(internal.ib)(),pre1=Object(internal.B)("pre"),t7=Object(internal.nb)(t7_value),t8=Object(internal.ib)(),div2=Object(internal.B)("div"),Object(internal.k)(h20,"class","subtitle is-5"),Object(internal.k)(div0,"class","column is-6"),Object(internal.k)(h21,"class","subtitle is-5"),Object(internal.k)(input,"type","text"),Object(internal.k)(input,"class","input"),Object(internal.k)(div3,"class","column is-6"),Object(internal.k)(div4,"class","columns is-multiline"),Object(internal.k)(div5,"id","tooltip-example-container-1")},m(target,anchor){Object(internal.Q)(target,div5,anchor),Object(internal.h)(div5,div4),Object(internal.h)(div4,div0),Object(internal.h)(div0,h20),Object(internal.h)(div0,t1),Object(internal.h)(div0,pre0),Object(internal.h)(div4,t3),Object(internal.h)(div4,div3),Object(internal.h)(div3,h21),Object(internal.h)(div3,t5),Object(internal.h)(div3,div1),Object(internal.h)(div1,input),Object(internal.gb)(input,ctx[0]),Object(internal.h)(div3,t6),Object(internal.h)(div3,pre1),Object(internal.h)(pre1,t7),Object(internal.h)(div3,t8),Object(internal.h)(div3,div2),mounted||(dispose=Object(internal.S)(input,"input",ctx[3]),mounted=!0)},p(ctx,[dirty]){1&dirty&&input.value!==ctx[0]&&Object(internal.gb)(input,ctx[0]),2&dirty&&t7_value!==(t7_value=JSON.stringify(ctx[1],null,4)+"")&&Object(internal.fb)(t7,t7_value)},i:internal.U,o:internal.U,d(detaching){detaching&&Object(internal.A)(div5),mounted=!1,dispose()}}}function instance($$self,$$props,$$invalidate){let filter="",data=[{id:1,name:"AAA"},{id:2,name:"BBB"},{id:3,name:"CCC"},{id:4,name:"DDAA"},{id:5,name:"EEBB"}],newData=[],searchOptions={search_key:"name",scoreThreshold:5,fuzzyOpts:{analyzeSubTerms:!0,analyzeSubTermDepth:10,highlighting:{after:"",before:""}}};const fuzzysearch=Object(ui_search.a)(searchOptions);return $$self.$$.update=()=>{1&$$self.$$.dirty&&function search(){$$invalidate(1,newData=fuzzysearch(filter,data))}()},[filter,newData,data,function input_input_handler(){filter=this.value,$$invalidate(0,filter)}]}class Search_svelte_Search extends internal.b{constructor(options){super(),Object(internal.O)(this,options,instance,create_fragment,internal.bb,{})}}var Search_svelte=Search_svelte_Search;Search_svelte_Search.__docgen={version:3,name:"Search.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};var _excluded=["components"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var layoutProps={};function MDXContent(_ref){var components=_ref.components,props=_objectWithoutProperties(_ref,_excluded);return Object(esm.b)("wrapper",_extends({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(esm.b)(version.a,{mdxType:"Version"}),Object(esm.b)(dist_esm.e,{title:"Utils/2. Examples/Search",mdxType:"Meta"}),Object(esm.b)("h3",null,"makeSearchEngine"),Object(esm.b)("p",null,"The ",Object(esm.b)("inlineCode",{parentName:"p"},"makeSearchEngine")," is a factory helper to create a search engine with options."),Object(esm.b)("p",null,Object(esm.b)("strong",{parentName:"p"},"Parameters:"),"\nsearchOptions : ",Object(esm.b)("inlineCode",{parentName:"p"},"type: Object")),Object(esm.b)("p",null,Object(esm.b)("strong",{parentName:"p"},"Returns:"),"\nFunction take params, needle : ",Object(esm.b)("inlineCode",{parentName:"p"},"type: String")," and haystack : ",Object(esm.b)("inlineCode",{parentName:"p"},"type: Array"),"."),Object(esm.b)("p",null,Object(esm.b)("strong",{parentName:"p"},"Example:")),Object(esm.b)("pre",null,Object(esm.b)("code",{parentName:"pre",className:"language-html"},'<div>\n  <input type="text" bind:value={needle} class="input" />\n</div>\n<pre>{JSON.stringify(filtered_data, null, 4)}</pre>\n\n<script>\n  import { makeSearchEngine } from "@kws3/ui/search";\n\n  let needle = "";\n  let haystack = [\n    { id: 1, name: "AAA" },\n    { id: 2, name: "BBB" },\n    { id: 3, name: "CCC" },\n    { id: 4, name: "DDAA" },\n    { id: 5, name: "EEBB" },\n  ];\n  let filtered_data = [];\n\n  let searchOptions = {\n    search_key: "name", // optional, default \'value\'\n    scoreThreshold: 5, // optional, default 5\n    fuzzyOpts : {\n      analyzeSubTerms: true, // Whether or not analyze sub-terms, default false\n      analyzeSubTermDepth: 10, //How many sub terms should be analyzed , default 10,\n      highlighting: {\n        before: "", // markup to add before mattched charectar, default \'<em>\'\n        after: "", // markup to add after mattched charectar, default \'</em>\'\n      },\n    }\n  }\n\n  const fuzzysearch = makeSearchEngine(searchOptions);\n\n  $: search();\n\n  function search() {\n    filtered_data = fuzzysearch(needle, haystack);\n  }\n<\/script>\n')),Object(esm.b)(dist_esm.g,{name:"Search",args:{},mdxType:"Story"},(function(args){return{Component:Search_svelte}})))}MDXContent.isMDXComponent=!0;var Search_stories_search=function search(args){return{Component:Search_svelte}};Search_stories_search.storyName="Search",Search_stories_search.args={},Search_stories_search.parameters={storySource:{source:"args => ({\n  Component: Search\n})"}};var componentMeta={title:"Utils/2. Examples/Search",includeStories:["search"]},mdxStoryNameToKey={Search:"search"};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs=Object.assign({},componentMeta.parameters.docs||{},{page:function page(){return Object(esm.b)(dist_esm.a,{mdxStoryNameToKey:mdxStoryNameToKey,mdxComponentAnnotations:componentMeta},Object(esm.b)(MDXContent,null))}});__webpack_exports__.default=componentMeta}}]);