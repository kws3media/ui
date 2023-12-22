(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{"./src/stories/helpers/Tooltip/3tooltip-examples-init.stories.mdx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"_2Variations",(function(){return _3tooltip_examples_init_stories_2Variations}));__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/react/index.js");var esm=__webpack_require__("./node_modules/@mdx-js/react/dist/esm.js"),dist_esm=__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/index.js"),version=(__webpack_require__("./node_modules/ts-dedent/esm/index.js"),__webpack_require__("./src/version.mdx")),internal=__webpack_require__("./node_modules/svelte/internal/index.mjs"),ui=__webpack_require__("./packages/@kws3/ui/index.js"),svelte=__webpack_require__("./node_modules/svelte/index.mjs");function create_fragment(ctx){let div6;return{c(){div6=Object(internal.B)("div"),div6.innerHTML='<h1 class="title is-5 has-text-centered">Hover over the code snippets</h1> \n\n  <h2 class="subtitle is-5">Different containers, different variations</h2> \n  <div class="columns is-multiline"><div class="column is-6" id="dt-1"><pre data-tooltip="This is a tooltip">activateTooltips(&quot;#dt-1&quot;);\n      </pre></div> \n    <div class="column is-6" id="dt-2"><pre data-tooltip="This is a tooltip">activateTooltips(&quot;#dt-2&quot;, {\n  theme: &#39;light&#39;\n});\n      </pre></div></div> \n  <hr class="is-small"/> \n  <h2 class="subtitle is-5">Same container, different target selector</h2> \n  <div class="columns is-multiline" id="an-1"><div class="column is-6"><pre data-tooltip="This is a tooltip">activateTooltips(&quot;#an-1&quot;, {\n  animation: &#39;fade&#39;,\n  theme: &quot;light&quot;,\n});\n      </pre></div> \n    <div class="column is-6"><pre data-scaled-tooltip="This is a tooltip">activateTooltips(&quot;#an-1&quot;, {\n  target: &quot;[data-scaled-tooltip]&quot;,\n  content: (el) =&gt; el.getAttribute(&quot;data-scaled-tooltip&quot;),\n  animation: &quot;scale&quot;,\n});\n      </pre></div></div>',Object(internal.k)(div6,"id","tooltip-example-container-1")},m(target,anchor){Object(internal.Q)(target,div6,anchor)},p:internal.U,i:internal.U,o:internal.U,d(detaching){detaching&&Object(internal.A)(div6)}}}function instance($$self){return Object(svelte.c)((()=>{Object(ui.pb)("#dt-1"),Object(ui.pb)("#dt-2",{theme:"light"}),Object(ui.pb)("#an-1",{animation:"fade",theme:"light"}),Object(ui.pb)("#an-1",{target:"[data-scaled-tooltip]",content:el=>el.getAttribute("data-scaled-tooltip"),animation:"scale"})})),[]}class InitVariations_svelte_InitVariations extends internal.b{constructor(options){super(),Object(internal.O)(this,options,instance,create_fragment,internal.bb,{})}}var InitVariations_svelte=InitVariations_svelte_InitVariations;InitVariations_svelte_InitVariations.__docgen={version:3,name:"InitVariations.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};var _excluded=["components"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var layoutProps={};function MDXContent(_ref){var components=_ref.components,props=_objectWithoutProperties(_ref,_excluded);return Object(esm.b)("wrapper",_extends({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(esm.b)(version.a,{mdxType:"Version"}),Object(esm.b)(dist_esm.e,{title:"Helpers/Tooltips/2. Examples/2. Variations",mdxType:"Meta"}),Object(esm.b)("h3",null,"Variations"),Object(esm.b)("p",null,"You can also initialise multiple variations of tooltips within the same app.",Object(esm.b)("br",{parentName:"p"}),"\n","Each variation either needs a common parent, or a different target selector."),Object(esm.b)("p",null,"Each variation's initialisation options will determine how the tooltips look and behave.",Object(esm.b)("br",{parentName:"p"}),"\n",Object(esm.b)("strong",{parentName:"p"},"Examples:")),Object(esm.b)(dist_esm.g,{name:"2. Variations",args:{},mdxType:"Story"},(function(args){return{Component:InitVariations_svelte}})))}MDXContent.isMDXComponent=!0;var _3tooltip_examples_init_stories_2Variations=function _2Variations(args){return{Component:InitVariations_svelte}};_3tooltip_examples_init_stories_2Variations.storyName="2. Variations",_3tooltip_examples_init_stories_2Variations.args={},_3tooltip_examples_init_stories_2Variations.parameters={storySource:{source:"args => ({\n  Component: InitVariations\n})"}};var componentMeta={title:"Helpers/Tooltips/2. Examples/2. Variations",includeStories:["_2Variations"]},mdxStoryNameToKey={"2. Variations":"_2Variations"};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs=Object.assign({},componentMeta.parameters.docs||{},{page:function page(){return Object(esm.b)(dist_esm.a,{mdxStoryNameToKey:mdxStoryNameToKey,mdxComponentAnnotations:componentMeta},Object(esm.b)(MDXContent,null))}});__webpack_exports__.default=componentMeta}}]);