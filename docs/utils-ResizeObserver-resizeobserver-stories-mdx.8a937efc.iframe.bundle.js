(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{"./node_modules/@storybook/addon-docs/dist/esm/index.js":function(module,__webpack_exports__,__webpack_require__){"use strict";var _blocks__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/blocks/index.js");__webpack_require__.d(__webpack_exports__,"a",(function(){return _blocks__WEBPACK_IMPORTED_MODULE_0__.AddContext})),__webpack_require__.d(__webpack_exports__,"b",(function(){return _blocks__WEBPACK_IMPORTED_MODULE_0__.ArgsTable})),__webpack_require__.d(__webpack_exports__,"c",(function(){return _blocks__WEBPACK_IMPORTED_MODULE_0__.Canvas})),__webpack_require__.d(__webpack_exports__,"d",(function(){return _blocks__WEBPACK_IMPORTED_MODULE_0__.Description})),__webpack_require__.d(__webpack_exports__,"e",(function(){return _blocks__WEBPACK_IMPORTED_MODULE_0__.Meta})),__webpack_require__.d(__webpack_exports__,"f",(function(){return _blocks__WEBPACK_IMPORTED_MODULE_0__.Source})),__webpack_require__.d(__webpack_exports__,"g",(function(){return _blocks__WEBPACK_IMPORTED_MODULE_0__.Story}))},"./node_modules/core-js/modules/es.array.index-of.js":function(module,exports,__webpack_require__){"use strict";var $=__webpack_require__("./node_modules/core-js/internals/export.js"),uncurryThis=__webpack_require__("./node_modules/core-js/internals/function-uncurry-this-clause.js"),$indexOf=__webpack_require__("./node_modules/core-js/internals/array-includes.js").indexOf,arrayMethodIsStrict=__webpack_require__("./node_modules/core-js/internals/array-method-is-strict.js"),nativeIndexOf=uncurryThis([].indexOf),NEGATIVE_ZERO=!!nativeIndexOf&&1/nativeIndexOf([1],1,-0)<0;$({target:"Array",proto:!0,forced:NEGATIVE_ZERO||!arrayMethodIsStrict("indexOf")},{indexOf:function indexOf(searchElement){var fromIndex=arguments.length>1?arguments[1]:void 0;return NEGATIVE_ZERO?nativeIndexOf(this,searchElement,fromIndex)||0:$indexOf(this,searchElement,fromIndex)}})},"./node_modules/core-js/modules/es.date.to-string.js":function(module,exports,__webpack_require__){var uncurryThis=__webpack_require__("./node_modules/core-js/internals/function-uncurry-this.js"),defineBuiltIn=__webpack_require__("./node_modules/core-js/internals/define-built-in.js"),DatePrototype=Date.prototype,nativeDateToString=uncurryThis(DatePrototype.toString),thisTimeValue=uncurryThis(DatePrototype.getTime);"Invalid Date"!=String(new Date(NaN))&&defineBuiltIn(DatePrototype,"toString",(function toString(){var value=thisTimeValue(this);return value==value?nativeDateToString(this):"Invalid Date"}))},"./node_modules/core-js/modules/web.set-interval.js":function(module,exports,__webpack_require__){var $=__webpack_require__("./node_modules/core-js/internals/export.js"),global=__webpack_require__("./node_modules/core-js/internals/global.js"),setInterval=__webpack_require__("./node_modules/core-js/internals/schedulers-fix.js")(global.setInterval,!0);$({global:!0,bind:!0,forced:global.setInterval!==setInterval},{setInterval:setInterval})},"./node_modules/core-js/modules/web.set-timeout.js":function(module,exports,__webpack_require__){var $=__webpack_require__("./node_modules/core-js/internals/export.js"),global=__webpack_require__("./node_modules/core-js/internals/global.js"),setTimeout=__webpack_require__("./node_modules/core-js/internals/schedulers-fix.js")(global.setTimeout,!0);$({global:!0,bind:!0,forced:global.setTimeout!==setTimeout},{setTimeout:setTimeout})},"./node_modules/core-js/modules/web.timers.js":function(module,exports,__webpack_require__){__webpack_require__("./node_modules/core-js/modules/web.set-interval.js"),__webpack_require__("./node_modules/core-js/modules/web.set-timeout.js")},"./packages/@kws3/ui/package.json":function(module){module.exports=JSON.parse('{"name":"@kws3/ui","version":"2.1.0","description":"UI components for use with Svelte v3 applications.","main":"index.js","svelte":"index.js","scripts":{"test":"echo \\"Error: no test specified\\" && exit 1"},"repository":"github:kws3media/storybooks-frontend","demo_url":"https://ui.kws3.media/","keywords":["components","svelte3","ui"],"author":"Khaled Ahmed <me.khaled@gmail.com>","contributors":["Sharif Ahmed <me.sharifahmed@gmail.com>","Sabir <sabirveli@gmail.com>","Suneesh S K <suneeshsk3@gmail.com>","Nikeeta <nikeetaa231@gmail.com>"],"publishConfig":{"access":"public"},"types":"./index.d.ts","dependencies":{"apexcharts":"3.33.2","flatpickr":"^4.5.2","svelte-portal":"^2.1.2","text-mask-core":"^5.1.2","tippy.js":"^6.3.1"},"devDependencies":{"typescript":"^5.0.4"}}')},"./packages/@kws3/ui/resizeObserver/index.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return hasResizeObserver})),__webpack_require__.d(__webpack_exports__,"b",(function(){return resizeObserver}));var hasResizeObserver="undefined"!=typeof window&&void 0!==window.ResizeObserver;function resizeObserver(node){var ro;return hasResizeObserver&&(ro=new ResizeObserver((function(){var e=new CustomEvent("resize",{bubbles:!1});node.dispatchEvent(e)}))).observe(node),{destroy:function destroy(){hasResizeObserver&&ro.disconnect()}}}},"./packages/@kws3/ui/utils/index.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"l",(function(){return truncate})),__webpack_require__.d(__webpack_exports__,"h",(function(){return nl2br})),__webpack_require__.d(__webpack_exports__,"b",(function(){return cloneObject})),__webpack_require__.d(__webpack_exports__,"i",(function(){return rAF})),__webpack_require__.d(__webpack_exports__,"f",(function(){return debounce})),__webpack_require__.d(__webpack_exports__,"a",(function(){return capitaliseFirstLetter})),__webpack_require__.d(__webpack_exports__,"c",(function(){return createDate})),__webpack_require__.d(__webpack_exports__,"d",(function(){return currency})),__webpack_require__.d(__webpack_exports__,"e",(function(){return dateToOrdinal})),__webpack_require__.d(__webpack_exports__,"j",(function(){return randomIntegerFromInterval})),__webpack_require__.d(__webpack_exports__,"k",(function(){return randomPercent})),__webpack_require__.d(__webpack_exports__,"g",(function(){return fileDownloader}));__webpack_require__("./node_modules/core-js/modules/es.string.replace.js"),__webpack_require__("./node_modules/core-js/modules/es.regexp.exec.js"),__webpack_require__("./node_modules/core-js/modules/web.timers.js"),__webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("./node_modules/core-js/modules/es.date.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.number.constructor.js"),__webpack_require__("./node_modules/core-js/modules/es.number.to-fixed.js"),__webpack_require__("./node_modules/core-js/modules/web.url.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js");function truncate(){var str=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",len=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return str&&str.length>=len+3?str.substr(0,len)+"...":str}function nl2br(){var input=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return input?(input+"").replace(/\n/g,"<br/>"):""}function cloneObject(obj){return JSON.parse(JSON.stringify(obj))}var rAF="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(callback){window.setTimeout(callback,1e3/60)}:function(){};function debounce(){var timeout,result,fn=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){},threshold=arguments.length>1?arguments[1]:void 0,isAsap=arguments.length>2?arguments[2]:void 0;function debounced(){var args=arguments,context=this;return timeout?clearTimeout(timeout):isAsap&&(result=fn.apply(context,args)),timeout=setTimeout((function delayed(){isAsap||(result=fn.apply(context,args)),timeout=null}),threshold||100),result}return debounced.cancel=function(){clearTimeout(timeout)},debounced}function capitaliseFirstLetter(){var string=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return string.charAt(0).toUpperCase()+string.toLowerCase().slice(1)}function createDate(strDate){return strDate?new Date(strDate.replace(/-/g,"/")):null}function currency(n){var nn=Number(n);return(isNaN(nn)?0:nn).toFixed(2)}function dateToOrdinal(n){return(n=Number(n))+(n>0?["th","st","nd","rd"][n>3&&n<21||n%10>3?0:n%10]:"")}function randomIntegerFromInterval(){var min=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,max=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1/0;return min=Math.ceil(min),max=Math.floor(max),Math.floor(Math.random()*(max-min+1))+min}function randomPercent(){return randomIntegerFromInterval(arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,arguments.length>1&&void 0!==arguments[1]?arguments[1]:100)+"%"}function fileDownloader(data){var fileName=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"file_name",a=document.createElement("a");document.body.appendChild(a),a.setAttribute("style","display: none");var blob=new Blob([data],{type:"octet/stream"}),url=window.URL.createObjectURL(blob);a.href=url,a.download=fileName,a.click(),window.URL.revokeObjectURL(url)}},"./src/stories/utils/ResizeObserver/resizeobserver.stories.mdx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"resizeObserver",(function(){return resizeobserver_stories_resizeObserver}));__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/react/index.js");var esm=__webpack_require__("./node_modules/@mdx-js/react/dist/esm.js"),dist_esm=__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/index.js"),version=(__webpack_require__("./node_modules/ts-dedent/esm/index.js"),__webpack_require__("./src/version.mdx")),internal=__webpack_require__("./node_modules/svelte/internal/index.mjs"),ui_resizeObserver=__webpack_require__("./packages/@kws3/ui/resizeObserver/index.js"),utils=__webpack_require__("./packages/@kws3/ui/utils/index.js");function add_css(target){Object(internal.i)(target,"svelte-13yfofx",".kws-scrollable-list.svelte-13yfofx{overflow:auto;-webkit-overflow-scrolling:touch;position:relative;height:100%}")}function get_each_context(ctx,list,i){const child_ctx=ctx.slice();return child_ctx[6]=list[i],child_ctx}function create_each_block(ctx){let li,t0,t1,t2,t3,t0_value=ctx[6].name+"",t2_value=ctx[6].surname+"";return{c(){li=Object(internal.B)("li"),t0=Object(internal.nb)(t0_value),t1=Object(internal.ib)(),t2=Object(internal.nb)(t2_value),t3=Object(internal.ib)(),Object(internal.k)(li,"class","row")},m(target,anchor){Object(internal.Q)(target,li,anchor),Object(internal.h)(li,t0),Object(internal.h)(li,t1),Object(internal.h)(li,t2),Object(internal.h)(li,t3)},p(ctx,dirty){4&dirty&&t0_value!==(t0_value=ctx[6].name+"")&&Object(internal.fb)(t0,t0_value),4&dirty&&t2_value!==(t2_value=ctx[6].surname+"")&&Object(internal.fb)(t2,t2_value)},d(detaching){detaching&&Object(internal.A)(li)}}}function create_fragment(ctx){let div7,div6,div3,h20,t1,div0,input0,t2,br0,t3,div1,input1,t4,br1,t5,div2,button,t7,div5,h21,t9,div4,mounted,dispose,if_block=ui_resizeObserver.a&&function create_if_block(ctx){let ul,resizeObserver_action,mounted,dispose,each_value=ctx[2],each_blocks=[];for(let i=0;i<each_value.length;i+=1)each_blocks[i]=create_each_block(get_each_context(ctx,each_value,i));return{c(){ul=Object(internal.B)("ul");for(let i=0;i<each_blocks.length;i+=1)each_blocks[i].c();Object(internal.k)(ul,"class","kws-scrollable-list with-resize-observer svelte-13yfofx")},m(target,anchor){Object(internal.Q)(target,ul,anchor);for(let i=0;i<each_blocks.length;i+=1)each_blocks[i]&&each_blocks[i].m(ul,null);mounted||(dispose=Object(internal.c)(resizeObserver_action=ui_resizeObserver.b.call(null,ul)),mounted=!0)},p(ctx,dirty){if(4&dirty){let i;for(each_value=ctx[2],i=0;i<each_value.length;i+=1){const child_ctx=get_each_context(ctx,each_value,i);each_blocks[i]?each_blocks[i].p(child_ctx,dirty):(each_blocks[i]=create_each_block(child_ctx),each_blocks[i].c(),each_blocks[i].m(ul,null))}for(;i<each_blocks.length;i+=1)each_blocks[i].d(1);each_blocks.length=each_value.length}},d(detaching){detaching&&Object(internal.A)(ul),Object(internal.z)(each_blocks,detaching),mounted=!1,dispose()}}}(ctx);return{c(){div7=Object(internal.B)("div"),div6=Object(internal.B)("div"),div3=Object(internal.B)("div"),h20=Object(internal.B)("h2"),h20.textContent="Add to list",t1=Object(internal.ib)(),div0=Object(internal.B)("div"),input0=Object(internal.B)("input"),t2=Object(internal.ib)(),br0=Object(internal.B)("br"),t3=Object(internal.ib)(),div1=Object(internal.B)("div"),input1=Object(internal.B)("input"),t4=Object(internal.ib)(),br1=Object(internal.B)("br"),t5=Object(internal.ib)(),div2=Object(internal.B)("div"),button=Object(internal.B)("button"),button.textContent="Add",t7=Object(internal.ib)(),div5=Object(internal.B)("div"),h21=Object(internal.B)("h2"),h21.textContent="Users List",t9=Object(internal.ib)(),div4=Object(internal.B)("div"),if_block&&if_block.c(),Object(internal.k)(h20,"class","subtitle is-5"),Object(internal.k)(input0,"class","input"),Object(internal.k)(input0,"type","text"),Object(internal.k)(input1,"class","input"),Object(internal.k)(input1,"type","text"),Object(internal.k)(button,"class","button"),Object(internal.k)(button,"type","button"),Object(internal.k)(div3,"class","column is-6"),Object(internal.k)(h21,"class","subtitle is-5"),Object(internal.k)(div5,"class","column is-6"),Object(internal.k)(div6,"class","columns is-multiline"),Object(internal.k)(div7,"id","tooltip-example-container-1")},m(target,anchor){Object(internal.Q)(target,div7,anchor),Object(internal.h)(div7,div6),Object(internal.h)(div6,div3),Object(internal.h)(div3,h20),Object(internal.h)(div3,t1),Object(internal.h)(div3,div0),Object(internal.h)(div0,input0),Object(internal.gb)(input0,ctx[0]),Object(internal.h)(div3,t2),Object(internal.h)(div3,br0),Object(internal.h)(div3,t3),Object(internal.h)(div3,div1),Object(internal.h)(div1,input1),Object(internal.gb)(input1,ctx[1]),Object(internal.h)(div3,t4),Object(internal.h)(div3,br1),Object(internal.h)(div3,t5),Object(internal.h)(div3,div2),Object(internal.h)(div2,button),Object(internal.h)(div6,t7),Object(internal.h)(div6,div5),Object(internal.h)(div5,h21),Object(internal.h)(div5,t9),Object(internal.h)(div5,div4),if_block&&if_block.m(div4,null),mounted||(dispose=[Object(internal.S)(input0,"input",ctx[4]),Object(internal.S)(input1,"input",ctx[5]),Object(internal.S)(button,"click",ctx[3])],mounted=!0)},p(ctx,[dirty]){1&dirty&&input0.value!==ctx[0]&&Object(internal.gb)(input0,ctx[0]),2&dirty&&input1.value!==ctx[1]&&Object(internal.gb)(input1,ctx[1]),ui_resizeObserver.a&&if_block.p(ctx,dirty)},i:internal.U,o:internal.U,d(detaching){detaching&&Object(internal.A)(div7),if_block&&if_block.d(),mounted=!1,Object(internal.ab)(dispose)}}}function instance($$self,$$props,$$invalidate){let name="User",surname="B",_items=[{name:"User",surname:"A"}];return[name,surname,_items,function addItem(){let newItems=Object(utils.b)(_items);newItems.push({name:name,surname:surname}),$$invalidate(2,_items=newItems)},function input0_input_handler(){name=this.value,$$invalidate(0,name)},function input1_input_handler(){surname=this.value,$$invalidate(1,surname)}]}class ResizeObserver_svelte_ResizeObserver extends internal.b{constructor(options){super(),Object(internal.O)(this,options,instance,create_fragment,internal.bb,{},add_css)}}var ResizeObserver_svelte=ResizeObserver_svelte_ResizeObserver;ResizeObserver_svelte_ResizeObserver.__docgen={version:3,name:"ResizeObserver.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};var _excluded=["components"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var layoutProps={};function MDXContent(_ref){var components=_ref.components,props=_objectWithoutProperties(_ref,_excluded);return Object(esm.b)("wrapper",_extends({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(esm.b)(version.a,{mdxType:"Version"}),Object(esm.b)(dist_esm.e,{title:"Utils/2. Examples/ResizeObserver",mdxType:"Meta"}),Object(esm.b)("h3",null,"ResizeObserver"),Object(esm.b)("p",null,"The ",Object(esm.b)("inlineCode",{parentName:"p"},"resizeObserver")," is used to handle window resizing."),Object(esm.b)("p",null,Object(esm.b)("strong",{parentName:"p"},"Example:")),Object(esm.b)("pre",null,Object(esm.b)("code",{parentName:"pre",className:"language-html"},'{#if hasResizeObserver}\n  <div use:resizeObserver on:resize={resizeHandler}>\n{/if}\n\n<script>\n  import { hasResizeObserver, resizeObserver } from "@kws3/ui/resizeObserver";\n<\/script>\n')),Object(esm.b)(dist_esm.g,{name:"ResizeObserver",args:{},mdxType:"Story"},(function(args){return{Component:ResizeObserver_svelte}})))}MDXContent.isMDXComponent=!0;var resizeobserver_stories_resizeObserver=function resizeObserver(args){return{Component:ResizeObserver_svelte}};resizeobserver_stories_resizeObserver.storyName="ResizeObserver",resizeobserver_stories_resizeObserver.args={},resizeobserver_stories_resizeObserver.parameters={storySource:{source:"args => ({\n  Component: ResizeObserver\n})"}};var componentMeta={title:"Utils/2. Examples/ResizeObserver",includeStories:["resizeObserver"]},mdxStoryNameToKey={ResizeObserver:"resizeObserver"};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs=Object.assign({},componentMeta.parameters.docs||{},{page:function page(){return Object(esm.b)(dist_esm.a,{mdxStoryNameToKey:mdxStoryNameToKey,mdxComponentAnnotations:componentMeta},Object(esm.b)(MDXContent,null))}});__webpack_exports__.default=componentMeta},"./src/version.mdx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return MDXContent}));__webpack_require__("./node_modules/core-js/modules/es.string.split.js"),__webpack_require__("./node_modules/core-js/modules/es.regexp.exec.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.timers.js"),__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/react/index.js");var _mdx_js_react__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/@mdx-js/react/dist/esm.js"),_packages_kws3_ui_package_json__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./packages/@kws3/ui/package.json"),_excluded=["components"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var cmd="npm i -D @kws3/ui",copied=!1;function ctc(e){if(e&&e.currentTarget&&e.currentTarget.blur(),!copied&&navigator&&navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(cmd),copied=!0;var target=document.querySelector("#npm-command-copier"),classes="is-success".split(" ");target.value="✅ Copied!",classes.forEach((function(c){return target.classList.add(c)})),setTimeout((function(){target.value=cmd,copied=!1,classes.forEach((function(c){return target.classList.remove(c)}))}),1e3)}}var layoutProps={cmd:cmd},MDXLayout="wrapper";function MDXContent(_ref){var components=_ref.components,props=_objectWithoutProperties(_ref,_excluded);return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_10__.b)(MDXLayout,_extends({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_10__.b)("div",{className:"page-top-right-artifacts box"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_10__.b)("div",{className:"artifact-item-block"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_10__.b)("a",{className:"artifact-item",href:"https://github.com/kws3media/ui/tree/master/packages/%40kws3/ui",target:"_blank"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_10__.b)("span",{class:"icon-text"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_10__.b)("span",{className:"icon"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_10__.b)("i",{className:"fa fa-github"})),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_10__.b)("span",null,"Github"))),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_10__.b)("span",{className:"artifact-item tags has-addons"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_10__.b)("span",{className:"tag"},"Version"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_10__.b)("span",{className:"tag is-primary"},_packages_kws3_ui_package_json__WEBPACK_IMPORTED_MODULE_11__.version))),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_10__.b)("div",{className:"artifact-item-block is-hidden-mobile"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_10__.b)("div",{className:"field has-addons"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_10__.b)("span",{className:"control"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_10__.b)("input",{id:"npm-command-copier",className:"input is-small has-background-light is-family-monospace",readOnly:!0,value:cmd})),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_10__.b)("span",{className:"control"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_10__.b)("button",{className:"button is-small",title:"Copy to clipboard",onClick:ctc},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_10__.b)("span",{className:"icon"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_10__.b)("i",{className:"fa fa-copy"}))))))))}MDXContent.isMDXComponent=!0}}]);