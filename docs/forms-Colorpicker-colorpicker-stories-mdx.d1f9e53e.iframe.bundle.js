(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{"./src/stories/forms/Colorpicker/colorpicker.stories.mdx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"args",(function(){return args})),__webpack_require__.d(__webpack_exports__,"colorpicker",(function(){return colorpicker}));__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/react/index.js");var _templateObject,_templateObject2,_templateObject3,_templateObject4,_mdx_js_react__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@mdx-js/react/dist/esm.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/index.js"),ts_dedent__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/ts-dedent/esm/index.js"),_version_mdx__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./src/version.mdx"),_kws3_ui__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./packages/@kws3/ui/index.js"),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./node_modules/@storybook/addon-actions/dist/esm/index.js"),_excluded=["components"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function _taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var args={color:"000000",typeable:!0,readonly:!1,mini:!1,disabled:!1},layoutProps={args:args};function MDXContent(_ref){var components=_ref.components,props=_objectWithoutProperties(_ref,_excluded);return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_7__.b)("wrapper",_extends({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_7__.b)(_version_mdx__WEBPACK_IMPORTED_MODULE_10__.a,{mdxType:"Version"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_7__.b)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_8__.e,{title:"Forms/Colorpicker",component:_kws3_ui__WEBPACK_IMPORTED_MODULE_11__.j,args:args,argTypes:{size:{control:"select"}},mdxType:"Meta"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_7__.b)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_8__.d,{markdown:Object(ts_dedent__WEBPACK_IMPORTED_MODULE_9__.a)(_templateObject||(_templateObject=_taggedTemplateLiteralLoose(["\n# Colorpicker\n## Colorpicker component that allows you to select a colour.\n"]))),mdxType:"Description"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_7__.b)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_8__.c,{mdxType:"Canvas"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_7__.b)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_8__.g,{name:"Colorpicker",args:args,mdxType:"Story"},(function(args){return{Component:_kws3_ui__WEBPACK_IMPORTED_MODULE_11__.j,props:args,on:{change:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_12__.action)("change")}}}))),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_7__.b)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_8__.b,{story:"Colorpicker",mdxType:"ArgsTable"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_7__.b)("h3",null,"Usage"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_7__.b)("h4",null,"Import the component:"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_7__.b)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_8__.f,{language:"javascript",code:Object(ts_dedent__WEBPACK_IMPORTED_MODULE_9__.a)(_templateObject2||(_templateObject2=_taggedTemplateLiteralLoose(["import { Colorpicker } from '@kws3/ui';"]))),mdxType:"Source"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_7__.b)("h4",null,"Import the SCSS:"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_7__.b)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_8__.f,{language:"javascript",code:Object(ts_dedent__WEBPACK_IMPORTED_MODULE_9__.a)(_templateObject3||(_templateObject3=_taggedTemplateLiteralLoose(["@import '@kws3/ui/styles/Colorpicker.scss';"]))),mdxType:"Source"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_7__.b)("div",{class:"notification is-info is-light"},"This component supports HTML5 drag and drop.",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_7__.b)("p",null,"  Use ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_7__.b)("inlineCode",{parentName:"p"},"event.dataTransfer.setData('text', <new_color>)")," on the draggable element.\nThen once you drop the draggable element into this component, it picks up the data from the ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_7__.b)("inlineCode",{parentName:"p"},"text")," value."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_7__.b)("p",null,"  ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_7__.b)("strong",{parentName:"p"},"Example:")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_7__.b)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_8__.f,{language:"jsx",code:Object(ts_dedent__WEBPACK_IMPORTED_MODULE_9__.a)(_templateObject4||(_templateObject4=_taggedTemplateLiteralLoose(['<div\n      style="background:#bada55"\n      draggable="true"\n      on:dragstart={(e) => {\n        e.dataTransfer.setData("text", "bada55");\n      }}>\n      #bada55\n    </div>']))),mdxType:"Source"})))}MDXContent.isMDXComponent=!0;var colorpicker=function colorpicker(args){return{Component:_kws3_ui__WEBPACK_IMPORTED_MODULE_11__.j,props:args,on:{change:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_12__.action)("change")}}};colorpicker.storyName="Colorpicker",colorpicker.args=args,colorpicker.parameters={storySource:{source:"args => ({\n  Component: Colorpicker,\n  props: args,\n  on: {\n    'change': action('change')\n  }\n})"}};var componentMeta={title:"Forms/Colorpicker",component:_kws3_ui__WEBPACK_IMPORTED_MODULE_11__.j,args:args,argTypes:{size:{control:"select"}},includeStories:["colorpicker"]},mdxStoryNameToKey={Colorpicker:"colorpicker"};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs=Object.assign({},componentMeta.parameters.docs||{},{page:function page(){return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_7__.b)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_8__.a,{mdxStoryNameToKey:mdxStoryNameToKey,mdxComponentAnnotations:componentMeta},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_7__.b)(MDXContent,null))}}),__webpack_exports__.default=componentMeta}}]);