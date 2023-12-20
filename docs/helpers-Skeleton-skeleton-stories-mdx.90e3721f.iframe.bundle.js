(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{"./src/stories/helpers/Skeleton/skeleton.stories.mdx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"args",(function(){return args})),__webpack_require__.d(__webpack_exports__,"skeleton",(function(){return skeleton}));__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/react/index.js");var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_mdx_js_react__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@mdx-js/react/dist/esm.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/index.js"),ts_dedent__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/ts-dedent/esm/index.js"),_version_mdx__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./src/version.mdx"),_kws3_ui__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./packages/@kws3/ui/index.js"),_excluded=(__webpack_require__("./node_modules/@storybook/addon-actions/dist/esm/index.js"),["components"]);function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function _taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var args={class:"",lines:1,width:"100%",height:"auto",radius:"0px",circle:!1,color:""},layoutProps={args:args};function MDXContent(_ref){var components=_ref.components,props=_objectWithoutProperties(_ref,_excluded);return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_7__.b)("wrapper",_extends({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_7__.b)(_version_mdx__WEBPACK_IMPORTED_MODULE_10__.a,{mdxType:"Version"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_7__.b)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_8__.e,{title:"Helpers/Skeleton",component:_kws3_ui__WEBPACK_IMPORTED_MODULE_11__.ab,args:args,argTypes:{color:{control:"select"}},mdxType:"Meta"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_7__.b)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_8__.d,{markdown:Object(ts_dedent__WEBPACK_IMPORTED_MODULE_9__.a)(_templateObject||(_templateObject=_taggedTemplateLiteralLoose(["\n# Skeleton\n## Component to display a loading status as a skeleton of the content to load.\n"]))),mdxType:"Description"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_7__.b)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_8__.c,{mdxType:"Canvas"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_7__.b)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_8__.g,{name:"Skeleton",args:args,mdxType:"Story"},(function(args){return{Component:_kws3_ui__WEBPACK_IMPORTED_MODULE_11__.ab,props:args}}))),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_7__.b)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_8__.b,{story:"Skeleton",mdxType:"ArgsTable"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_7__.b)("h3",null,"Usage"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_7__.b)("h5",null,"Import the component:"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_7__.b)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_8__.f,{language:"javascript",code:Object(ts_dedent__WEBPACK_IMPORTED_MODULE_9__.a)(_templateObject2||(_templateObject2=_taggedTemplateLiteralLoose(["import { Skeleton } from '@kws3/ui';"]))),mdxType:"Source"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_7__.b)("p",null,"It is possible to let this component mimic the appearance of Bulma elements if you attach an appropriate CSS class to the ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_7__.b)("inlineCode",{parentName:"p"},"class")," property.",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_7__.b)("br",{parentName:"p"}),"\n","For example:"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_7__.b)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_8__.f,{language:"html",code:Object(ts_dedent__WEBPACK_IMPORTED_MODULE_9__.a)(_templateObject3||(_templateObject3=_taggedTemplateLiteralLoose(['\n  \x3c!--Displays like a button--\x3e\n  <Skeleton class="button" color="primary" />\n  \x3c!--Displays like a input--\x3e\n  <Skeleton class="input" />\n  \x3c!--Displays like a box--\x3e\n  <Skeleton class="box" />\n  ']))),mdxType:"Source"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_7__.b)("h5",null,"Import the CSS:"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_7__.b)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_8__.f,{language:"javascript",code:Object(ts_dedent__WEBPACK_IMPORTED_MODULE_9__.a)(_templateObject4||(_templateObject4=_taggedTemplateLiteralLoose(["@import '@kws3/ui/styles/Skeleton.scss';"]))),mdxType:"Source"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_7__.b)("h5",null,"SCSS customization variables with default values:"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_7__.b)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_8__.f,{language:"css",code:Object(ts_dedent__WEBPACK_IMPORTED_MODULE_9__.a)(_templateObject5||(_templateObject5=_taggedTemplateLiteralLoose(["\n    $kws-theme-colors: $colors;\n    $kws-skeleton-color: lighten($text, 60%);\n    $kws-skeleton-hilight-color: lighten($text, 65%);\n  "]))),mdxType:"Source"}))}MDXContent.isMDXComponent=!0;var skeleton=function skeleton(args){return{Component:_kws3_ui__WEBPACK_IMPORTED_MODULE_11__.ab,props:args}};skeleton.storyName="Skeleton",skeleton.args=args,skeleton.parameters={storySource:{source:"args => ({\n  Component: Skeleton,\n  props: args\n})"}};var componentMeta={title:"Helpers/Skeleton",component:_kws3_ui__WEBPACK_IMPORTED_MODULE_11__.ab,args:args,argTypes:{color:{control:"select"}},includeStories:["skeleton"]},mdxStoryNameToKey={Skeleton:"skeleton"};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs=Object.assign({},componentMeta.parameters.docs||{},{page:function page(){return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_7__.b)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_8__.a,{mdxStoryNameToKey:mdxStoryNameToKey,mdxComponentAnnotations:componentMeta},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_7__.b)(MDXContent,null))}}),__webpack_exports__.default=componentMeta}}]);