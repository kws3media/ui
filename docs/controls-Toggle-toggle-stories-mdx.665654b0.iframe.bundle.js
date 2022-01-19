(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{"./src/stories/controls/Toggle/toggle.stories.mdx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"args",(function(){return args})),__webpack_require__.d(__webpack_exports__,"toggle",(function(){return toggle}));__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/react/index.js");var _templateObject,_templateObject2,_templateObject3,_templateObject4,_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@mdx-js/react/dist/esm.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/index.js"),ts_dedent__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/ts-dedent/esm/index.js"),_version_mdx__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./src/version.mdx"),_kws3_ui__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./packages/@kws3/ui/index.js"),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./node_modules/@storybook/addon-actions/dist/esm/index.js"),_excluded=["components"];function _extends(){return _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function _taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var args={on:!1,disabled:!1,color:"",class:"",on_text:"",off_text:"",size:"",cy:""},layoutProps={args:args};function MDXContent(_ref){var components=_ref.components,props=_objectWithoutProperties(_ref,_excluded);return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("wrapper",_extends({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)(_version_mdx__WEBPACK_IMPORTED_MODULE_9__.a,{mdxType:"Version"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_7__.e,{title:"Forms/Controls/Toggle",component:_kws3_ui__WEBPACK_IMPORTED_MODULE_10__.Y,args:args,argTypes:{color:{control:"select"},size:{control:"select"}},mdxType:"Meta"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_7__.d,{markdown:Object(ts_dedent__WEBPACK_IMPORTED_MODULE_8__.a)(_templateObject||(_templateObject=_taggedTemplateLiteralLoose(["\n# Toggle\n## Toggle button with text supports\n"]))),mdxType:"Description"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_7__.c,{mdxType:"Canvas"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_7__.g,{name:"Toggle",args:args,mdxType:"Story"},(function(args){return{Component:_kws3_ui__WEBPACK_IMPORTED_MODULE_10__.Y,props:args,on:{change:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_11__.action)("Changed")}}}))),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_7__.b,{story:"Toggle",mdxType:"ArgsTable"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("h3",{id:"usage"},"Usage"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("h4",{id:"import-the-component"},"Import the component:"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_7__.f,{language:"javascript",code:Object(ts_dedent__WEBPACK_IMPORTED_MODULE_8__.a)(_templateObject2||(_templateObject2=_taggedTemplateLiteralLoose(["import { Toggle } from '@kws3/ui';"]))),mdxType:"Source"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("h4",{id:"import-the-scss"},"Import the SCSS:"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_7__.f,{language:"javascript",code:Object(ts_dedent__WEBPACK_IMPORTED_MODULE_8__.a)(_templateObject3||(_templateObject3=_taggedTemplateLiteralLoose(["@import '@kws3/ui/styles/Toggle.scss';"]))),mdxType:"Source"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("h4",{id:"scss-customization-variables-with-default-values"},"SCSS customization variables with default values:"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_7__.f,{language:"css",code:Object(ts_dedent__WEBPACK_IMPORTED_MODULE_8__.a)(_templateObject4||(_templateObject4=_taggedTemplateLiteralLoose(["\n      $kws-theme-colors: $colors;\n      $kws-toggle-off-bg-color: $background;\n      $kws-toggle-handle-bg-color: $white;\n      $kws-toggle-track-bg-color: $text;\n      $kws-toggle-track-bg-color-invert: findColorInvert($kws-toggle-track-bg-color);\n      $kws-toggle-border-color: $input-border-color;\n    "]))),mdxType:"Source"}))}MDXContent.isMDXComponent=!0;var toggle=function toggle(args){return{Component:_kws3_ui__WEBPACK_IMPORTED_MODULE_10__.Y,props:args,on:{change:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_11__.action)("Changed")}}};toggle.storyName="Toggle",toggle.args=args,toggle.parameters={storySource:{source:'args => ({\n  Component: Toggle,\n  props: args,\n  on: {\n    change: action("Changed")\n  }\n})'}};var componentMeta={title:"Forms/Controls/Toggle",component:_kws3_ui__WEBPACK_IMPORTED_MODULE_10__.Y,args:args,argTypes:{color:{control:"select"},size:{control:"select"}},includeStories:["toggle"]},mdxStoryNameToKey={Toggle:"toggle"};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs=Object.assign({},componentMeta.parameters.docs||{},{page:function page(){return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_7__.a,{mdxStoryNameToKey:mdxStoryNameToKey,mdxComponentAnnotations:componentMeta},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)(MDXContent,null))}}),__webpack_exports__.default=componentMeta}}]);