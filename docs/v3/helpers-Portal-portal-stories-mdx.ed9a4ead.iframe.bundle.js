(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{"./src/stories/helpers/Portal/portal.stories.mdx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"args",(function(){return args})),__webpack_require__.d(__webpack_exports__,"portal",(function(){return portal}));__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/react/index.js");var _templateObject,_templateObject2,_templateObject3,_mdx_js_react__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@mdx-js/react/dist/esm.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/index.js"),ts_dedent__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/ts-dedent/esm/index.js"),_version_mdx__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./src/version.mdx"),_kws3_ui__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./packages/@kws3/ui/index.js"),_excluded=(__webpack_require__("./node_modules/@storybook/addon-actions/dist/esm/index.js"),["components"]);function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function _taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var args={target:"body"},layoutProps={args:args};function MDXContent(_ref){var components=_ref.components,props=_objectWithoutProperties(_ref,_excluded);return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_7__.b)("wrapper",_extends({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_7__.b)(_version_mdx__WEBPACK_IMPORTED_MODULE_10__.a,{mdxType:"Version"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_7__.b)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_8__.e,{title:"Helpers/Portal",component:_kws3_ui__WEBPACK_IMPORTED_MODULE_11__.S,args:args,argTypes:{target:{control:"text"}},mdxType:"Meta"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_7__.b)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_8__.d,{markdown:Object(ts_dedent__WEBPACK_IMPORTED_MODULE_9__.a)(_templateObject||(_templateObject=_taggedTemplateLiteralLoose(["\n# Portal\n## Component for rendering outside the DOM of parent component\n"]))),mdxType:"Description"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_7__.b)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_8__.c,{mdxType:"Canvas"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_7__.b)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_8__.g,{name:"Portal",args:args,mdxType:"Story"},(function(args){return{Component:_kws3_ui__WEBPACK_IMPORTED_MODULE_11__.S,props:args}}))),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_7__.b)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_8__.b,{story:"Portal",mdxType:"ArgsTable"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_7__.b)("p",null,"This is a re-export of ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_7__.b)("inlineCode",{parentName:"p"},"svelte-portal"),".\nSee ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_7__.b)("a",{parentName:"p",href:"https://github.com/romkor/svelte-portal/blob/2.1.2/README.md"},"https://github.com/romkor/svelte-portal/blob/2.1.2/README.md")," for more information."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_7__.b)("h3",null,"Usage"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_7__.b)("h5",null,"Import the component:"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_7__.b)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_8__.f,{language:"javascript",code:Object(ts_dedent__WEBPACK_IMPORTED_MODULE_9__.a)(_templateObject2||(_templateObject2=_taggedTemplateLiteralLoose(['\n  <Portal target="body">\n    <div class="toast">Entity successfully updated!</div>\n  </Portal>\n  \n  <script>\n    import { Portal } from \'@kws3/ui\';\n  <\/script>\n  ']))),mdxType:"Source"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_7__.b)("h5",null,"Import the action:"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_7__.b)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_8__.f,{language:"javascript",code:Object(ts_dedent__WEBPACK_IMPORTED_MODULE_9__.a)(_templateObject3||(_templateObject3=_taggedTemplateLiteralLoose(["\n  <div class=\"toast\" use:portal={document.body}>Entity successfully updated!</div>\n  \n  <script>\n    import { portal } from '@kws3/ui';\n    // notice the character case\n  <\/script>\n  "]))),mdxType:"Source"}))}MDXContent.isMDXComponent=!0;var portal=function portal(args){return{Component:_kws3_ui__WEBPACK_IMPORTED_MODULE_11__.S,props:args}};portal.storyName="Portal",portal.args=args,portal.parameters={storySource:{source:"args => ({\n  Component: Portal,\n  props: args\n})"}};var componentMeta={title:"Helpers/Portal",component:_kws3_ui__WEBPACK_IMPORTED_MODULE_11__.S,args:args,argTypes:{target:{control:"text"}},includeStories:["portal"]},mdxStoryNameToKey={Portal:"portal"};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs=Object.assign({},componentMeta.parameters.docs||{},{page:function page(){return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_7__.b)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_8__.a,{mdxStoryNameToKey:mdxStoryNameToKey,mdxComponentAnnotations:componentMeta},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_7__.b)(MDXContent,null))}}),__webpack_exports__.default=componentMeta}}]);