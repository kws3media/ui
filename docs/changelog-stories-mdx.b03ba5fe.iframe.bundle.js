(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"./node_modules/@storybook/addon-docs/dist/esm/index.js":function(module,__webpack_exports__,__webpack_require__){"use strict";var _blocks__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/blocks/index.js");__webpack_require__.d(__webpack_exports__,"a",(function(){return _blocks__WEBPACK_IMPORTED_MODULE_0__.AddContext})),__webpack_require__.d(__webpack_exports__,"b",(function(){return _blocks__WEBPACK_IMPORTED_MODULE_0__.ArgsTable})),__webpack_require__.d(__webpack_exports__,"c",(function(){return _blocks__WEBPACK_IMPORTED_MODULE_0__.Canvas})),__webpack_require__.d(__webpack_exports__,"d",(function(){return _blocks__WEBPACK_IMPORTED_MODULE_0__.Description})),__webpack_require__.d(__webpack_exports__,"e",(function(){return _blocks__WEBPACK_IMPORTED_MODULE_0__.Meta})),__webpack_require__.d(__webpack_exports__,"f",(function(){return _blocks__WEBPACK_IMPORTED_MODULE_0__.Source})),__webpack_require__.d(__webpack_exports__,"g",(function(){return _blocks__WEBPACK_IMPORTED_MODULE_0__.Story}))},"./node_modules/core-js/modules/es.array.for-each.js":function(module,exports,__webpack_require__){"use strict";var $=__webpack_require__("./node_modules/core-js/internals/export.js"),forEach=__webpack_require__("./node_modules/core-js/internals/array-for-each.js");$({target:"Array",proto:!0,forced:[].forEach!=forEach},{forEach:forEach})},"./node_modules/core-js/modules/es.array.index-of.js":function(module,exports,__webpack_require__){"use strict";var $=__webpack_require__("./node_modules/core-js/internals/export.js"),$indexOf=__webpack_require__("./node_modules/core-js/internals/array-includes.js").indexOf,arrayMethodIsStrict=__webpack_require__("./node_modules/core-js/internals/array-method-is-strict.js"),nativeIndexOf=[].indexOf,NEGATIVE_ZERO=!!nativeIndexOf&&1/[1].indexOf(1,-0)<0,STRICT_METHOD=arrayMethodIsStrict("indexOf");$({target:"Array",proto:!0,forced:NEGATIVE_ZERO||!STRICT_METHOD},{indexOf:function indexOf(searchElement){return NEGATIVE_ZERO?nativeIndexOf.apply(this,arguments)||0:$indexOf(this,searchElement,arguments.length>1?arguments[1]:void 0)}})},"./node_modules/core-js/modules/web.timers.js":function(module,exports,__webpack_require__){var $=__webpack_require__("./node_modules/core-js/internals/export.js"),global=__webpack_require__("./node_modules/core-js/internals/global.js"),isCallable=__webpack_require__("./node_modules/core-js/internals/is-callable.js"),userAgent=__webpack_require__("./node_modules/core-js/internals/engine-user-agent.js"),slice=[].slice,wrap=function(scheduler){return function(handler,timeout){var boundArgs=arguments.length>2,args=boundArgs?slice.call(arguments,2):void 0;return scheduler(boundArgs?function(){(isCallable(handler)?handler:Function(handler)).apply(this,args)}:handler,timeout)}};$({global:!0,bind:!0,forced:/MSIE .\./.test(userAgent)},{setTimeout:wrap(global.setTimeout),setInterval:wrap(global.setInterval)})},"./packages/@kws3/ui/package.json":function(module){module.exports=JSON.parse('{"name":"@kws3/ui","version":"1.8.0","description":"UI components for use with Svelte v3 applications.","main":"index.js","scripts":{"test":"echo \\"Error: no test specified\\" && exit 1"},"repository":"github:kws3media/storybooks-frontend","demo_url":"https://ui.kws3.media/","keywords":["components","svelte3","ui"],"author":"Khaled Ahmed <me.khaled@gmail.com>","contributors":["Sharif Ahmed <me.sharifahmed@gmail.com>","Sabir <sabirveli@gmail.com>","Suneesh S K <suneeshsk3@gmail.com>"],"publishConfig":{"access":"public"},"dependencies":{"apexcharts":"3.33.2","flatpickr":"^4.5.2","fuzzysearch":"^1.0.3","svelte-portal":"^2.1.2","text-mask-core":"^5.1.2","tippy.js":"^6.3.1"}}')},"./src/stories/_index/changelog.stories.mdx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"__page",(function(){return __page}));__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/react/index.js");var esm=__webpack_require__("./node_modules/@mdx-js/react/dist/esm.js"),dist_esm=__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/index.js"),version=__webpack_require__("./src/version.mdx"),_excluded=["components"];function _extends(){return _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var layoutProps={};function MDXContent(_ref){var components=_ref.components,props=_objectWithoutProperties(_ref,_excluded);return Object(esm.b)("wrapper",_extends({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(esm.b)("h2",{id:"180"},"1.8.0"),Object(esm.b)("ul",null,Object(esm.b)("li",{parentName:"ul"},Object(esm.b)("inlineCode",{parentName:"li"},"Modal"),", ",Object(esm.b)("inlineCode",{parentName:"li"},"CardModal")," and ",Object(esm.b)("inlineCode",{parentName:"li"},"ActionSheet")," components now play an outro transition instead of abruptly disappearing."),Object(esm.b)("li",{parentName:"ul"},"Usability fixes for ",Object(esm.b)("inlineCode",{parentName:"li"},"SearchableSelect")," and ",Object(esm.b)("inlineCode",{parentName:"li"},"MultiSelect"),"."),Object(esm.b)("li",{parentName:"ul"},Object(esm.b)("inlineCode",{parentName:"li"},"SearchableSelect")," and ",Object(esm.b)("inlineCode",{parentName:"li"},"MultiSelect")," now support loading options via an async function."),Object(esm.b)("li",{parentName:"ul"},Object(esm.b)("inlineCode",{parentName:"li"},"SearchableSelect")," and ",Object(esm.b)("inlineCode",{parentName:"li"},"MultiSelect")," now match results using a fuzzy ",Object(esm.b)("inlineCode",{parentName:"li"},"search_strategy"),". This can be changed to old behaviour by specifying ",Object(esm.b)("inlineCode",{parentName:"li"},'search_strategy="strict"'),".")),Object(esm.b)("h2",{id:"174"},"1.7.4"),Object(esm.b)("ul",null,Object(esm.b)("li",{parentName:"ul"},"Update ApexCharts to version 3.33.2"),Object(esm.b)("li",{parentName:"ul"},"Added support for subscribing to chart events"),Object(esm.b)("li",{parentName:"ul"},"Added support for distributed bar charts using new ",Object(esm.b)("inlineCode",{parentName:"li"},"distributed")," prop on ",Object(esm.b)("inlineCode",{parentName:"li"},"BarChart")," component"),Object(esm.b)("li",{parentName:"ul"},"Added examples for leveraging advanced chart features")),Object(esm.b)("h2",{id:"173"},"1.7.3"),Object(esm.b)("ul",null,Object(esm.b)("li",{parentName:"ul"},"Fix docs for ",Object(esm.b)("inlineCode",{parentName:"li"},"Popover")),Object(esm.b)("li",{parentName:"ul"},"Increase performance for ",Object(esm.b)("inlineCode",{parentName:"li"},"SlidingPane")," by using ResizeObserver when available")),Object(esm.b)("h2",{id:"172"},"1.7.2"),Object(esm.b)("ul",null,Object(esm.b)("li",{parentName:"ul"},Object(esm.b)("inlineCode",{parentName:"li"},"DatePicker")," component: fix initialisation bug on mobile"),Object(esm.b)("li",{parentName:"ul"},Object(esm.b)("inlineCode",{parentName:"li"},"Pagination")," component: rename property ",Object(esm.b)("inlineCode",{parentName:"li"},"breakThreshold")," -> ",Object(esm.b)("inlineCode",{parentName:"li"},"maxVisiblePages")," plus bugfix and documentation update")),Object(esm.b)("h2",{id:"171"},"1.7.1"),Object(esm.b)("ul",null,Object(esm.b)("li",{parentName:"ul"},Object(esm.b)("inlineCode",{parentName:"li"},"Skeleton")," component: Illustrate in example the use of empty string for ",Object(esm.b)("inlineCode",{parentName:"li"},"color")," prop."),Object(esm.b)("li",{parentName:"ul"},Object(esm.b)("inlineCode",{parentName:"li"},"Pagination")," component: Deprecate ",Object(esm.b)("inlineCode",{parentName:"li"},"meta")," prop. And use separate props for ",Object(esm.b)("inlineCode",{parentName:"li"},"offset"),", ",Object(esm.b)("inlineCode",{parentName:"li"},"limit"),", ",Object(esm.b)("inlineCode",{parentName:"li"},"count")," and ",Object(esm.b)("inlineCode",{parentName:"li"},"total")," instead."),Object(esm.b)("li",{parentName:"ul"},Object(esm.b)("inlineCode",{parentName:"li"},"Pagination")," component: Add methods ",Object(esm.b)("inlineCode",{parentName:"li"},"prev()"),", ",Object(esm.b)("inlineCode",{parentName:"li"},"next()"),", ",Object(esm.b)("inlineCode",{parentName:"li"},"first()"),", ",Object(esm.b)("inlineCode",{parentName:"li"},"last()")," and ",Object(esm.b)("inlineCode",{parentName:"li"},"goto(page)"),"."),Object(esm.b)("li",{parentName:"ul"},"New ",Object(esm.b)("inlineCode",{parentName:"li"},"Divider")," component."),Object(esm.b)("li",{parentName:"ul"},Object(esm.b)("inlineCode",{parentName:"li"},"Modal")," component can now be opened and closed programatically via ",Object(esm.b)("inlineCode",{parentName:"li"},"open()")," and ",Object(esm.b)("inlineCode",{parentName:"li"},"close()")," methods."),Object(esm.b)("li",{parentName:"ul"},"Added linting rules for ESLint. And corrected all resulting issues.")),Object(esm.b)("h2",{id:"170"},"1.7.0"),Object(esm.b)("ul",null,Object(esm.b)("li",{parentName:"ul"},"Ensure uniform usage of ",Object(esm.b)("inlineCode",{parentName:"li"},"$kws-theme-colors")," across all components, this means ",Object(esm.b)("inlineCode",{parentName:"li"},"$kws-theme-colors")," can be independent of the global ",Object(esm.b)("inlineCode",{parentName:"li"},"$colors")," SCSS variable."),Object(esm.b)("li",{parentName:"ul"},Object(esm.b)("inlineCode",{parentName:"li"},"DataSearch")," component: Expand filters to fill area when main search input is not present."),Object(esm.b)("li",{parentName:"ul"},Object(esm.b)("inlineCode",{parentName:"li"},"DataSort")," component: Increase click area for activating dropdown, and provide visual segementation between label and dropdown."),Object(esm.b)("li",{parentName:"ul"},"New ",Object(esm.b)("inlineCode",{parentName:"li"},"Skeleton")," component.")),Object(esm.b)("h2",{id:"169"},"1.6.9"),Object(esm.b)("ul",null,Object(esm.b)("li",{parentName:"ul"},"New ",Object(esm.b)("inlineCode",{parentName:"li"},"Timeline"),", ",Object(esm.b)("inlineCode",{parentName:"li"},"TimelineItem")," and ",Object(esm.b)("inlineCode",{parentName:"li"},"TimelineHeader")," components.")),Object(esm.b)("h2",{id:"168"},"1.6.8"),Object(esm.b)("ul",null,Object(esm.b)("li",{parentName:"ul"},"Vertically align ",Object(esm.b)("inlineCode",{parentName:"li"},"is-icon")," cells in ",Object(esm.b)("inlineCode",{parentName:"li"},"Grid"))),Object(esm.b)("h2",{id:"167"},"1.6.7"),Object(esm.b)("ul",null,Object(esm.b)("li",{parentName:"ul"},"Added granular events ",Object(esm.b)("inlineCode",{parentName:"li"},"showing"),", ",Object(esm.b)("inlineCode",{parentName:"li"},"shown"),", ",Object(esm.b)("inlineCode",{parentName:"li"},"hiding")," and ",Object(esm.b)("inlineCode",{parentName:"li"},"hidden")," for ",Object(esm.b)("inlineCode",{parentName:"li"},"Popover"),"."),Object(esm.b)("li",{parentName:"ul"},"Added ",Object(esm.b)("inlineCode",{parentName:"li"},"is-checked")," class on ",Object(esm.b)("inlineCode",{parentName:"li"},"Grid")," when a row is checked using the multiselect checkboxes."),Object(esm.b)("li",{parentName:"ul"},"New colors for ",Object(esm.b)("inlineCode",{parentName:"li"},"is-checked")," class on ",Object(esm.b)("inlineCode",{parentName:"li"},"Grid"))),Object(esm.b)("h2",{id:"166"},"1.6.6"),Object(esm.b)("ul",null,Object(esm.b)("li",{parentName:"ul"},"Enhance ",Object(esm.b)("inlineCode",{parentName:"li"},"Popover")," with native ",Object(esm.b)("inlineCode",{parentName:"li"},"show")," ",Object(esm.b)("inlineCode",{parentName:"li"},"hide")," ",Object(esm.b)("inlineCode",{parentName:"li"},"enable")," ",Object(esm.b)("inlineCode",{parentName:"li"},"disable")," methods")),Object(esm.b)("h2",{id:"165"},"1.6.5"),Object(esm.b)("ul",null,Object(esm.b)("li",{parentName:"ul"},"Filter fix on ",Object(esm.b)("inlineCode",{parentName:"li"},"DataSearch"))),Object(esm.b)("h2",{id:"164"},"1.6.4"),Object(esm.b)("ul",null,Object(esm.b)("li",{parentName:"ul"},"Add support for ",Object(esm.b)("inlineCode",{parentName:"li"},"dropdown_portal")," prop in ",Object(esm.b)("inlineCode",{parentName:"li"},"SearchableSelect"))),Object(esm.b)("h2",{id:"163"},"1.6.3"),Object(esm.b)("ul",null,Object(esm.b)("li",{parentName:"ul"},"Prevent submit call on ",Object(esm.b)("inlineCode",{parentName:"li"},"MultiSelect")," when ",Object(esm.b)("inlineCode",{parentName:"li"},"Enter")," key is pressed while searching"),Object(esm.b)("li",{parentName:"ul"},"Fix filter items going blank after search is initiated in ",Object(esm.b)("inlineCode",{parentName:"li"},"DataSearch"))),Object(esm.b)("h2",{id:"162"},"1.6.2"),Object(esm.b)("ul",null,Object(esm.b)("li",{parentName:"ul"},"Add ",Object(esm.b)("inlineCode",{parentName:"li"},"dropdown_portal")," prop on ",Object(esm.b)("inlineCode",{parentName:"li"},"MultiSelect")," to allow rendering dropdown in alternative locations")),Object(esm.b)("h2",{id:"161"},"1.6.1"),Object(esm.b)("ul",null,Object(esm.b)("li",{parentName:"ul"},"New ",Object(esm.b)("inlineCode",{parentName:"li"},"Portal")," component"),Object(esm.b)("li",{parentName:"ul"},"Use ",Object(esm.b)("inlineCode",{parentName:"li"},"Portal")," for ",Object(esm.b)("inlineCode",{parentName:"li"},"MultiSelect")," and ",Object(esm.b)("inlineCode",{parentName:"li"},"SearchableSelect")," components")),Object(esm.b)("h2",{id:"160"},"1.6.0"),Object(esm.b)("ul",null,Object(esm.b)("li",{parentName:"ul"},"Fix ",Object(esm.b)("inlineCode",{parentName:"li"},"DataSearch")," responsiveness for mobile"),Object(esm.b)("li",{parentName:"ul"},"Fix ",Object(esm.b)("inlineCode",{parentName:"li"},"Pagination")," CSS for mobile"),Object(esm.b)("li",{parentName:"ul"},"Fix ",Object(esm.b)("inlineCode",{parentName:"li"},"DataSort"),"  responsiveness for mobile"),Object(esm.b)("li",{parentName:"ul"},"Fix functionality of ",Object(esm.b)("inlineCode",{parentName:"li"},"DataSearch"))),Object(esm.b)("h2",{id:"159"},"1.5.9"),Object(esm.b)("ul",null,Object(esm.b)("li",{parentName:"ul"},"Fix ",Object(esm.b)("inlineCode",{parentName:"li"},"z-index")," issue with ",Object(esm.b)("inlineCode",{parentName:"li"},"SearchableSelect"))),Object(esm.b)("h2",{id:"158"},"1.5.8"),Object(esm.b)("ul",null,Object(esm.b)("li",{parentName:"ul"},"Showing ",Object(esm.b)("inlineCode",{parentName:"li"},"undefined")," on total in ",Object(esm.b)("inlineCode",{parentName:"li"},"Pagination"))),Object(esm.b)("h2",{id:"157"},"1.5.7"),Object(esm.b)("ul",null,Object(esm.b)("li",{parentName:"ul"},"Width calculation on ",Object(esm.b)("inlineCode",{parentName:"li"},"DataSearch")),Object(esm.b)("li",{parentName:"ul"},"More ",Object(esm.b)("inlineCode",{parentName:"li"},"text")," validation ",Object(esm.b)("inlineCode",{parentName:"li"},"Nl2br"))),Object(esm.b)("h2",{id:"156"},"1.5.6"),Object(esm.b)("ul",null,Object(esm.b)("li",{parentName:"ul"},"Fix attribute of ",Object(esm.b)("inlineCode",{parentName:"li"},"MultiSelect")),Object(esm.b)("li",{parentName:"ul"},"Fix ",Object(esm.b)("inlineCode",{parentName:"li"},"text")," checking on ",Object(esm.b)("inlineCode",{parentName:"li"},"Nl2br"))),Object(esm.b)("h2",{id:"155"},"1.5.5"),Object(esm.b)("ul",null,Object(esm.b)("li",{parentName:"ul"},"Added ",Object(esm.b)("inlineCode",{parentName:"li"},"BarChart")),Object(esm.b)("li",{parentName:"ul"},"Added ",Object(esm.b)("inlineCode",{parentName:"li"},"LineChart")),Object(esm.b)("li",{parentName:"ul"},"Added ",Object(esm.b)("inlineCode",{parentName:"li"},"AreaChart")),Object(esm.b)("li",{parentName:"ul"},"Added ",Object(esm.b)("inlineCode",{parentName:"li"},"RadialChart")),Object(esm.b)("li",{parentName:"ul"},"Support ",Object(esm.b)("inlineCode",{parentName:"li"},"sparklines")," in ",Object(esm.b)("inlineCode",{parentName:"li"},"Charts")),Object(esm.b)("li",{parentName:"ul"},"Add ",Object(esm.b)("inlineCode",{parentName:"li"},"yAxisOptions")," and ",Object(esm.b)("inlineCode",{parentName:"li"},"horizontal")," bar for ",Object(esm.b)("inlineCode",{parentName:"li"},"Charts")),Object(esm.b)("li",{parentName:"ul"},"Fix attribute of ",Object(esm.b)("inlineCode",{parentName:"li"},"ConfirmButton")),Object(esm.b)("li",{parentName:"ul"},"Fix error Handling in ",Object(esm.b)("inlineCode",{parentName:"li"},"MixedChart"))),Object(esm.b)("h2",{id:"151"},"1.5.1"),Object(esm.b)("ul",null,Object(esm.b)("li",{parentName:"ul"},"Chart bugfixes"),Object(esm.b)("li",{parentName:"ul"},"Fix attribute of ",Object(esm.b)("inlineCode",{parentName:"li"},"NumberInput")," for UI testing")),Object(esm.b)("h2",{id:"150"},"1.5.0"),Object(esm.b)("ul",null,Object(esm.b)("li",{parentName:"ul"},"Added ",Object(esm.b)("inlineCode",{parentName:"li"},"DonutChart")),Object(esm.b)("li",{parentName:"ul"},"Added ",Object(esm.b)("inlineCode",{parentName:"li"},"MixedChart")),Object(esm.b)("li",{parentName:"ul"},"Added ",Object(esm.b)("inlineCode",{parentName:"li"},"PieChart"))),Object(esm.b)("h2",{id:"147"},"1.4.7"),Object(esm.b)("ul",null,Object(esm.b)("li",{parentName:"ul"},"Fix value mismatch on ",Object(esm.b)("inlineCode",{parentName:"li"},"NumberInput"))),Object(esm.b)("h2",{id:"146"},"1.4.6"),Object(esm.b)("ul",null,Object(esm.b)("li",{parentName:"ul"},"Fix Typing bug on ",Object(esm.b)("inlineCode",{parentName:"li"},"NumberInput"))),Object(esm.b)("h2",{id:"145"},"1.4.5"),Object(esm.b)("ul",null,Object(esm.b)("li",{parentName:"ul"},"Fix ",Object(esm.b)("strong",{parentName:"li"},"on:change")," event on ",Object(esm.b)("inlineCode",{parentName:"li"},"NumberInput"))),Object(esm.b)("h2",{id:"144"},"1.4.4"),Object(esm.b)("ul",null,Object(esm.b)("li",{parentName:"ul"},"import  ",Object(esm.b)("inlineCode",{parentName:"li"},"Floatie"),", ",Object(esm.b)("inlineCode",{parentName:"li"},"FloatingUIOutput"),", ",Object(esm.b)("inlineCode",{parentName:"li"},"FloatiesStore")," from ",Object(esm.b)("inlineCode",{parentName:"li"},"@kws3/ui")," for ",Object(esm.b)("inlineCode",{parentName:"li"},"FloatingUIOutput"))),Object(esm.b)("h2",{id:"143"},"1.4.3"),Object(esm.b)("ul",null,Object(esm.b)("li",{parentName:"ul"},"Rename ",Object(esm.b)("inlineCode",{parentName:"li"},"completion_timeout")," to ",Object(esm.b)("inlineCode",{parentName:"li"},"error_timeout")," in ",Object(esm.b)("inlineCode",{parentName:"li"},"Buttons"))))}MDXContent.isMDXComponent=!0;var changelog_stories_excluded=["components"];function changelog_stories_extends(){return changelog_stories_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},changelog_stories_extends.apply(this,arguments)}function changelog_stories_objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function changelog_stories_objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var changelog_stories_layoutProps={};function changelog_stories_MDXContent(_ref){var components=_ref.components,props=changelog_stories_objectWithoutProperties(_ref,changelog_stories_excluded);return Object(esm.b)("wrapper",changelog_stories_extends({},changelog_stories_layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(esm.b)(version.a,{mdxType:"Version"}),Object(esm.b)(dist_esm.e,{title:"Changelog",parameters:{previewTabs:{canvas:{hidden:!0}}},mdxType:"Meta"}),Object(esm.b)("h2",{id:"changelog"},"Changelog"),Object(esm.b)(MDXContent,{mdxType:"Changelog"}))}changelog_stories_MDXContent.isMDXComponent=!0;var __page=function __page(){throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};var componentMeta={title:"Changelog",parameters:{previewTabs:{canvas:{hidden:!0}}},includeStories:["__page"]},mdxStoryNameToKey={};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs=Object.assign({},componentMeta.parameters.docs||{},{page:function page(){return Object(esm.b)(dist_esm.a,{mdxStoryNameToKey:mdxStoryNameToKey,mdxComponentAnnotations:componentMeta},Object(esm.b)(changelog_stories_MDXContent,null))}});__webpack_exports__.default=componentMeta},"./src/version.mdx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return MDXContent}));__webpack_require__("./node_modules/core-js/modules/es.string.split.js"),__webpack_require__("./node_modules/core-js/modules/es.regexp.exec.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.timers.js"),__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/react/index.js");var _mdx_js_react__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/@mdx-js/react/dist/esm.js"),_packages_kws3_ui_package_json__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./packages/@kws3/ui/package.json"),_excluded=["components"];function _extends(){return _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var cmd="npm i -D @kws3/ui",copied=!1;function ctc(e){if(e&&e.currentTarget&&e.currentTarget.blur(),!copied&&navigator&&navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(cmd),copied=!0;var target=document.querySelector("#npm-command-copier"),classes="is-success".split(" ");target.value="✅ Copied!",classes.forEach((function(c){return target.classList.add(c)})),setTimeout((function(){target.value=cmd,copied=!1,classes.forEach((function(c){return target.classList.remove(c)}))}),1e3)}}var layoutProps={cmd:cmd};function MDXContent(_ref){var components=_ref.components,props=_objectWithoutProperties(_ref,_excluded);return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_9__.b)("wrapper",_extends({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_9__.b)("div",{className:"page-top-right-artifacts box"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_9__.b)("div",{className:"artifact-item-block"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_9__.b)("a",{className:"artifact-item",href:"https://github.com/kws3media/ui/tree/master/packages/%40kws3/ui",target:"_blank"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_9__.b)("span",{class:"icon-text"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_9__.b)("span",{className:"icon"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_9__.b)("i",{className:"fa fa-github"})),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_9__.b)("span",null,"Github"))),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_9__.b)("span",{className:"artifact-item tags has-addons"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_9__.b)("span",{className:"tag"},"Version"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_9__.b)("span",{className:"tag is-primary"},_packages_kws3_ui_package_json__WEBPACK_IMPORTED_MODULE_10__.version))),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_9__.b)("div",{className:"artifact-item-block is-hidden-mobile"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_9__.b)("div",{className:"field has-addons"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_9__.b)("span",{className:"control"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_9__.b)("input",{id:"npm-command-copier",className:"input is-small has-background-light is-family-monospace",readOnly:!0,value:cmd})),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_9__.b)("span",{className:"control"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_9__.b)("button",{className:"button is-small",title:"Copy to clipboard",onClick:ctc},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_9__.b)("span",{className:"icon"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_9__.b)("i",{className:"fa fa-copy"}))))))))}MDXContent.isMDXComponent=!0}}]);