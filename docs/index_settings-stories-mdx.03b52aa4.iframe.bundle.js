(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"./node_modules/@storybook/addon-docs/dist/esm/index.js":function(module,__webpack_exports__,__webpack_require__){"use strict";var _blocks__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/blocks/index.js");__webpack_require__.d(__webpack_exports__,"a",(function(){return _blocks__WEBPACK_IMPORTED_MODULE_0__.AddContext})),__webpack_require__.d(__webpack_exports__,"b",(function(){return _blocks__WEBPACK_IMPORTED_MODULE_0__.ArgsTable})),__webpack_require__.d(__webpack_exports__,"c",(function(){return _blocks__WEBPACK_IMPORTED_MODULE_0__.Canvas})),__webpack_require__.d(__webpack_exports__,"d",(function(){return _blocks__WEBPACK_IMPORTED_MODULE_0__.Description})),__webpack_require__.d(__webpack_exports__,"e",(function(){return _blocks__WEBPACK_IMPORTED_MODULE_0__.Meta})),__webpack_require__.d(__webpack_exports__,"f",(function(){return _blocks__WEBPACK_IMPORTED_MODULE_0__.Source})),__webpack_require__.d(__webpack_exports__,"g",(function(){return _blocks__WEBPACK_IMPORTED_MODULE_0__.Story}))},"./node_modules/core-js/modules/es.array.index-of.js":function(module,exports,__webpack_require__){"use strict";var $=__webpack_require__("./node_modules/core-js/internals/export.js"),$indexOf=__webpack_require__("./node_modules/core-js/internals/array-includes.js").indexOf,arrayMethodIsStrict=__webpack_require__("./node_modules/core-js/internals/array-method-is-strict.js"),nativeIndexOf=[].indexOf,NEGATIVE_ZERO=!!nativeIndexOf&&1/[1].indexOf(1,-0)<0,STRICT_METHOD=arrayMethodIsStrict("indexOf");$({target:"Array",proto:!0,forced:NEGATIVE_ZERO||!STRICT_METHOD},{indexOf:function indexOf(searchElement){return NEGATIVE_ZERO?nativeIndexOf.apply(this,arguments)||0:$indexOf(this,searchElement,arguments.length>1?arguments[1]:void 0)}})},"./node_modules/core-js/modules/web.timers.js":function(module,exports,__webpack_require__){var $=__webpack_require__("./node_modules/core-js/internals/export.js"),global=__webpack_require__("./node_modules/core-js/internals/global.js"),isCallable=__webpack_require__("./node_modules/core-js/internals/is-callable.js"),userAgent=__webpack_require__("./node_modules/core-js/internals/engine-user-agent.js"),slice=[].slice,wrap=function(scheduler){return function(handler,timeout){var boundArgs=arguments.length>2,args=boundArgs?slice.call(arguments,2):void 0;return scheduler(boundArgs?function(){(isCallable(handler)?handler:Function(handler)).apply(this,args)}:handler,timeout)}};$({global:!0,bind:!0,forced:/MSIE .\./.test(userAgent)},{setTimeout:wrap(global.setTimeout),setInterval:wrap(global.setInterval)})},"./packages/@kws3/ui/package.json":function(module){module.exports=JSON.parse('{"name":"@kws3/ui","version":"2.0.0","description":"UI components for use with Svelte v3 applications.","main":"index.js","svelte":"index.js","scripts":{"test":"echo \\"Error: no test specified\\" && exit 1"},"repository":"github:kws3media/storybooks-frontend","demo_url":"https://ui.kws3.media/","keywords":["components","svelte3","ui"],"author":"Khaled Ahmed <me.khaled@gmail.com>","contributors":["Sharif Ahmed <me.sharifahmed@gmail.com>","Sabir <sabirveli@gmail.com>","Suneesh S K <suneeshsk3@gmail.com>","Nikeeta <nikeetaa231@gmail.com>"],"publishConfig":{"access":"public"},"types":"types/index.d.ts","dependencies":{"apexcharts":"3.33.2","flatpickr":"^4.5.2","svelte-portal":"^2.1.2","text-mask-core":"^5.1.2","tippy.js":"^6.3.1"}}')},"./src/stories/_index/index_settings.stories.mdx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"__page",(function(){return __page}));__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/react/index.js");var _mdx_js_react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mdx-js/react/dist/esm.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/index.js"),_version_mdx__WEBPACK_IMPORTED_MODULE_8__=(__webpack_require__("./node_modules/ts-dedent/esm/index.js"),__webpack_require__("./src/version.mdx")),_excluded=["components"];function _extends(){return _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var layoutProps={};function MDXContent(_ref){var components=_ref.components,props=_objectWithoutProperties(_ref,_excluded);return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("wrapper",_extends({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(_version_mdx__WEBPACK_IMPORTED_MODULE_8__.a,{mdxType:"Version"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_6__.e,{title:"Framework Settings",parameters:{previewTabs:{canvas:{hidden:!0}}},mdxType:"Meta"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("h2",null,"Framework Settings"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("p",null,"Framework wide settings can be applied in one place.\nIdeally in the entry file of your app."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("h3",null,"Usage"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("pre",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("code",{parentName:"pre",className:"language-js"},'import {applySettings} from \'@kws3/ui\';\n\napplySettings({\n  defaultIconFamily: \'fa\',\n  defaultToastPlacement: \'bottom\',\n  defaultSnackbarPlacement:\'bottom-right\',\n  defaultNotificationPlacement:\'top-right\'\n  hasTransitions: true,\n  defaultChartColors: [\n    "#284BED",\n    "#ED6134",\n    "#1DAFEC",\n    "#EDB405",\n    "#11EDB7",\n    "#77ED11",\n  ]\n});\n\n//you can also apply just one setting:\napplySettings({\n  hasTransitions: false\n});\n')),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("h3",null,"Available Settings"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("table",{class:"table is-fullwidth"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("tbody",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("tr",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("th",null,"Setting Name"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("th",null,"Description"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("th",null,"Default Value")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("tr",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("th",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("code",null,"defaultIconFamily")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("td",null,"Default icon family used by all Icon components"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("td",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("code",null,'"fa"'))),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("tr",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("th",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("code",null,"defaultToastPlacement")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("td",null,"Default placement of toast notifications used by the Toast component.",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("br",null),"When ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("code",null,"Toasts.create()")," is used"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("td",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("code",null,'"bottom"'))),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("tr",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("th",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("code",null,"defaultSnackbarPlacement")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("td",null,"Default placement of snackbar notifications used by the Snackbars component.",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("br",null),"When ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("code",null,"Snackbar.create()")," is used"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("td",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("code",null,'"bottom-right"'))),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("tr",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("th",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("code",null,"defaultNotificationPlacement")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("td",null,"Default placement of floating notifications used by the Notifications component.",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("br",null),"When ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("code",null,"Notifications.create()")," is used"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("td",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("code",null,'"top-right"'))),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("tr",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("th",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("code",null,"hasTransitions")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("td",null,"All components that have transitions, use this setting.",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("br",null),"When turned off, no transitions will take place"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("td",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("code",null,"true"))),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("tr",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("th",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("code",null,"defaultChartColors")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("td",null,"Default array of colors for chart visualisations shared by all charts.",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("br",null),"The order of colors matter, they will be used in sequence for each series of data."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("td",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("pre",null,'[ "#284BED", "#ED6134", "#1DAFEC", "#EDB405", "#11EDB7", "#77ED11", ]'))))))}MDXContent.isMDXComponent=!0;var __page=function __page(){throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};var componentMeta={title:"Framework Settings",parameters:{previewTabs:{canvas:{hidden:!0}}},includeStories:["__page"]},mdxStoryNameToKey={};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs=Object.assign({},componentMeta.parameters.docs||{},{page:function page(){return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_6__.a,{mdxStoryNameToKey:mdxStoryNameToKey,mdxComponentAnnotations:componentMeta},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(MDXContent,null))}}),__webpack_exports__.default=componentMeta},"./src/version.mdx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return MDXContent}));__webpack_require__("./node_modules/core-js/modules/es.string.split.js"),__webpack_require__("./node_modules/core-js/modules/es.regexp.exec.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.timers.js"),__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/react/index.js");var _mdx_js_react__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/@mdx-js/react/dist/esm.js"),_packages_kws3_ui_package_json__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./packages/@kws3/ui/package.json"),_excluded=["components"];function _extends(){return _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var cmd="npm i -D @kws3/ui",copied=!1;function ctc(e){if(e&&e.currentTarget&&e.currentTarget.blur(),!copied&&navigator&&navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(cmd),copied=!0;var target=document.querySelector("#npm-command-copier"),classes="is-success".split(" ");target.value="✅ Copied!",classes.forEach((function(c){return target.classList.add(c)})),setTimeout((function(){target.value=cmd,copied=!1,classes.forEach((function(c){return target.classList.remove(c)}))}),1e3)}}var layoutProps={cmd:cmd};function MDXContent(_ref){var components=_ref.components,props=_objectWithoutProperties(_ref,_excluded);return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_9__.b)("wrapper",_extends({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_9__.b)("div",{className:"page-top-right-artifacts box"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_9__.b)("div",{className:"artifact-item-block"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_9__.b)("a",{className:"artifact-item",href:"https://github.com/kws3media/ui/tree/master/packages/%40kws3/ui",target:"_blank"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_9__.b)("span",{class:"icon-text"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_9__.b)("span",{className:"icon"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_9__.b)("i",{className:"fa fa-github"})),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_9__.b)("span",null,"Github"))),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_9__.b)("span",{className:"artifact-item tags has-addons"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_9__.b)("span",{className:"tag"},"Version"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_9__.b)("span",{className:"tag is-primary"},_packages_kws3_ui_package_json__WEBPACK_IMPORTED_MODULE_10__.version))),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_9__.b)("div",{className:"artifact-item-block is-hidden-mobile"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_9__.b)("div",{className:"field has-addons"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_9__.b)("span",{className:"control"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_9__.b)("input",{id:"npm-command-copier",className:"input is-small has-background-light is-family-monospace",readOnly:!0,value:cmd})),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_9__.b)("span",{className:"control"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_9__.b)("button",{className:"button is-small",title:"Copy to clipboard",onClick:ctc},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_9__.b)("span",{className:"icon"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_9__.b)("i",{className:"fa fa-copy"}))))))))}MDXContent.isMDXComponent=!0}}]);