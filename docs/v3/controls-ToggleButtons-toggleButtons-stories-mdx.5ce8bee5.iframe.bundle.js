(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{"./src/stories/controls/ToggleButtons/toggleButtons.stories.mdx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"args",(function(){return args})),__webpack_require__.d(__webpack_exports__,"toggleButtons",(function(){return toggleButtons}));__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/react/index.js");var _templateObject,_templateObject2,_templateObject3,_templateObject4,_mdx_js_react__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@mdx-js/react/dist/esm.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/index.js"),ts_dedent__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/ts-dedent/esm/index.js"),_version_mdx__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./src/version.mdx"),_kws3_ui__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./packages/@kws3/ui/index.js"),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./node_modules/@storybook/addon-actions/dist/esm/index.js"),_excluded=["components"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function _taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var args={value:"",disabled:!1,options:[{name:"Yes",value:1,icon:"check-circle",subtitle:"Affirmative"},{name:"No",value:0,icon:"ban",subtitle:"Negative"},{name:"Maybe",value:null,icon:"question",subtitle:"¯_(ツ)_/¯"}],class:"",inner_class:"",active_class:"is-primary",inactive_class:"is-outlined",size:"",fullwidth:!1},layoutProps={args:args};function MDXContent(_ref){var components=_ref.components,props=_objectWithoutProperties(_ref,_excluded);return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_7__.b)("wrapper",_extends({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_7__.b)(_version_mdx__WEBPACK_IMPORTED_MODULE_10__.a,{mdxType:"Version"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_7__.b)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_8__.e,{title:"Forms/Controls/ToggleButtons",component:_kws3_ui__WEBPACK_IMPORTED_MODULE_11__.mb,args:args,argTypes:{size:{control:"select"}},mdxType:"Meta"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_7__.b)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_8__.d,{markdown:Object(ts_dedent__WEBPACK_IMPORTED_MODULE_9__.a)(_templateObject||(_templateObject=_taggedTemplateLiteralLoose(["\n# ToggleButtons\n## Segmented ToggleButtons Buttons\n"]))),mdxType:"Description"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_7__.b)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_8__.c,{mdxType:"Canvas"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_7__.b)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_8__.g,{name:"ToggleButtons",args:args,mdxType:"Story"},(function(args){return{Component:_kws3_ui__WEBPACK_IMPORTED_MODULE_11__.mb,props:args,on:{change:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_12__.action)("Changed")}}}))),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_7__.b)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_8__.b,{story:"ToggleButtons",mdxType:"ArgsTable"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_7__.b)("h3",null,"Usage"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_7__.b)("h4",null,"Import the component:"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_7__.b)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_8__.f,{language:"javascript",code:Object(ts_dedent__WEBPACK_IMPORTED_MODULE_9__.a)(_templateObject2||(_templateObject2=_taggedTemplateLiteralLoose(["import { ToggleButtons  } from '@kws3/ui';"]))),mdxType:"Source"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_7__.b)("h4",null,"Import the SCSS:"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_7__.b)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_8__.f,{language:"javascript",code:Object(ts_dedent__WEBPACK_IMPORTED_MODULE_9__.a)(_templateObject3||(_templateObject3=_taggedTemplateLiteralLoose(["@import '@kws3/ui/styles/Toggle.scss';"]))),mdxType:"Source"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_7__.b)("h4",null,"Custom Active and Inactive classes"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_7__.b)("p",null,"Each button can have a custom ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_7__.b)("inlineCode",{parentName:"p"},"active_class")," or ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_7__.b)("inlineCode",{parentName:"p"},"inactive_class"),"."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_7__.b)("p",null,"This class will override the main active/inactive class of the component, ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_7__.b)("strong",{parentName:"p"},"Example:")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_7__.b)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_8__.f,{language:"jsx",code:Object(ts_dedent__WEBPACK_IMPORTED_MODULE_9__.a)(_templateObject4||(_templateObject4=_taggedTemplateLiteralLoose(['\n    <ToggleButtons\n      ...\n      options=\'{[\n        {..., active_class:"is-success", inactive_class:"is-outlined is-success"},\n        {..., active_class:"is-danger", inactive_class:"is-outlined is-danger"},\n        {..., active_class:"is-info", inactive_class:"is-outlined is-info"}\n      ]}\'\n    />\n    ']))),mdxType:"Source"}))}MDXContent.isMDXComponent=!0;var toggleButtons=function toggleButtons(args){return{Component:_kws3_ui__WEBPACK_IMPORTED_MODULE_11__.mb,props:args,on:{change:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_12__.action)("Changed")}}};toggleButtons.storyName="ToggleButtons",toggleButtons.args=args,toggleButtons.parameters={storySource:{source:'args => ({\n  Component: ToggleButtons,\n  props: args,\n  on: {\n    change: action("Changed")\n  }\n})'}};var componentMeta={title:"Forms/Controls/ToggleButtons",component:_kws3_ui__WEBPACK_IMPORTED_MODULE_11__.mb,args:args,argTypes:{size:{control:"select"}},includeStories:["toggleButtons"]},mdxStoryNameToKey={ToggleButtons:"toggleButtons"};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs=Object.assign({},componentMeta.parameters.docs||{},{page:function page(){return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_7__.b)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_8__.a,{mdxStoryNameToKey:mdxStoryNameToKey,mdxComponentAnnotations:componentMeta},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_7__.b)(MDXContent,null))}}),__webpack_exports__.default=componentMeta}}]);