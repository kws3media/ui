(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"./src/stories/Charts/BarChart/BarChart.svelte":function(module,__webpack_exports__,__webpack_require__){"use strict";var svelte_internal__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/svelte/internal/index.mjs"),_kws3_ui__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/@kws3/ui/index.js");function create_fragment(ctx){let chart,current;return chart=new _kws3_ui__WEBPACK_IMPORTED_MODULE_1__.c({props:{options:ctx[3],y_axis_options:ctx[6],colors:ctx[0],data:ctx[4],labels:ctx[5],sets:ctx[12],width:ctx[1],height:ctx[2],sparklines:ctx[11],horizontal:ctx[7],distributed:ctx[8],stacked:ctx[9],stacked_full_width:ctx[10]}}),{c(){Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.u)(chart.$$.fragment)},m(target,anchor){Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.R)(chart,target,anchor),current=!0},p(ctx,[dirty]){const chart_changes={};8&dirty&&(chart_changes.options=ctx[3]),64&dirty&&(chart_changes.y_axis_options=ctx[6]),1&dirty&&(chart_changes.colors=ctx[0]),16&dirty&&(chart_changes.data=ctx[4]),32&dirty&&(chart_changes.labels=ctx[5]),4096&dirty&&(chart_changes.sets=ctx[12]),2&dirty&&(chart_changes.width=ctx[1]),4&dirty&&(chart_changes.height=ctx[2]),2048&dirty&&(chart_changes.sparklines=ctx[11]),128&dirty&&(chart_changes.horizontal=ctx[7]),256&dirty&&(chart_changes.distributed=ctx[8]),512&dirty&&(chart_changes.stacked=ctx[9]),1024&dirty&&(chart_changes.stacked_full_width=ctx[10]),chart.$set(chart_changes)},i(local){current||(Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.ob)(chart.$$.fragment,local),current=!0)},o(local){Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.pb)(chart.$$.fragment,local),current=!1},d(detaching){Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.x)(chart,detaching)}}}function instance($$self,$$props,$$invalidate){let{colors:colors=null,width:width="100%",height:height="auto",options:options={},data:data=[],labels:labels=[],y_axis_options:y_axis_options={},horizontal:horizontal=!1,distributed:distributed=!1,stacked:stacked=!1,stacked_full_width:stacked_full_width=!1,sparklines:sparklines=!1,sets:sets=[]}=$$props;return $$self.$$set=$$props=>{"colors"in $$props&&$$invalidate(0,colors=$$props.colors),"width"in $$props&&$$invalidate(1,width=$$props.width),"height"in $$props&&$$invalidate(2,height=$$props.height),"options"in $$props&&$$invalidate(3,options=$$props.options),"data"in $$props&&$$invalidate(4,data=$$props.data),"labels"in $$props&&$$invalidate(5,labels=$$props.labels),"y_axis_options"in $$props&&$$invalidate(6,y_axis_options=$$props.y_axis_options),"horizontal"in $$props&&$$invalidate(7,horizontal=$$props.horizontal),"distributed"in $$props&&$$invalidate(8,distributed=$$props.distributed),"stacked"in $$props&&$$invalidate(9,stacked=$$props.stacked),"stacked_full_width"in $$props&&$$invalidate(10,stacked_full_width=$$props.stacked_full_width),"sparklines"in $$props&&$$invalidate(11,sparklines=$$props.sparklines),"sets"in $$props&&$$invalidate(12,sets=$$props.sets)},[colors,width,height,options,data,labels,y_axis_options,horizontal,distributed,stacked,stacked_full_width,sparklines,sets]}class BarChart extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__.b{constructor(options){super(),Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.N)(this,options,instance,create_fragment,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.Z,{colors:0,width:1,height:2,options:3,data:4,labels:5,y_axis_options:6,horizontal:7,distributed:8,stacked:9,stacked_full_width:10,sparklines:11,sets:12})}}__webpack_exports__.a=BarChart,BarChart.__docgen={version:3,name:"BarChart.svelte",data:[{visibility:"public",description:null,keywords:[],name:"colors",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"object",type:"object"},defaultValue:null},{visibility:"public",description:null,keywords:[],name:"width",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"100%"},{visibility:"public",description:null,keywords:[],name:"height",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"auto"},{visibility:"public",description:null,keywords:[],name:"options",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"object",type:"object"}},{visibility:"public",description:null,keywords:[],name:"data",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"array",type:"array"}},{visibility:"public",description:null,keywords:[],name:"labels",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"array",type:"array"}},{visibility:"public",description:null,keywords:[],name:"y_axis_options",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"object",type:"object"}},{visibility:"public",description:null,keywords:[],name:"horizontal",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1},{visibility:"public",description:null,keywords:[],name:"distributed",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1},{visibility:"public",description:null,keywords:[],name:"stacked",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1},{visibility:"public",description:null,keywords:[],name:"stacked_full_width",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1},{visibility:"public",description:null,keywords:[],name:"sparklines",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1},{visibility:"public",description:null,keywords:[],name:"sets",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"array",type:"array"}}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]}},"./src/stories/Charts/BarChart/vstacked.stories.mdx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"args",(function(){return args})),__webpack_require__.d(__webpack_exports__,"verticalStacked",(function(){return verticalStacked}));__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/react/index.js");var _templateObject,_templateObject2,_templateObject3,_templateObject4,_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@mdx-js/react/dist/esm.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/index.js"),ts_dedent__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/ts-dedent/esm/index.js"),_version_mdx__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./src/version.mdx"),_kws3_ui__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./packages/@kws3/ui/index.js"),_BarChart_svelte__WEBPACK_IMPORTED_MODULE_12__=(__webpack_require__("./node_modules/@storybook/addon-actions/dist/esm/index.js"),__webpack_require__("./src/stories/Charts/BarChart/BarChart.svelte")),_excluded=["components"];function _extends(){return _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function _taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var args={data:[[10,20,30,90],[100,200,300,900],[60,50,40,30],[600,500,400,300]],labels:["2021","2022","2023","2024"],sets:["Purchased","Expense","Sold","Revenue"],width:"100%",height:"400",colors:null,sparklines:!1,horizontal:!1,distributed:!1,stacked:!0,stacked_full_width:!1,y_axis_options:{},options:{}},layoutProps={args:args};function MDXContent(_ref){var components=_ref.components,props=_objectWithoutProperties(_ref,_excluded);return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("wrapper",_extends({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)(_version_mdx__WEBPACK_IMPORTED_MODULE_9__.a,{mdxType:"Version"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_7__.e,{title:"Charts/Bar Charts/Vertical Stacked",component:_kws3_ui__WEBPACK_IMPORTED_MODULE_10__.c,args:args,mdxType:"Meta"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_7__.d,{markdown:Object(ts_dedent__WEBPACK_IMPORTED_MODULE_8__.a)(_templateObject||(_templateObject=_taggedTemplateLiteralLoose(["\n# Bar Chart\n"]))),mdxType:"Description"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_7__.c,{mdxType:"Canvas"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_7__.g,{name:"Vertical Stacked",args:args,mdxType:"Story"},(function(args){return{Component:_BarChart_svelte__WEBPACK_IMPORTED_MODULE_12__.a,props:args}}))),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_7__.b,{story:"Vertical Stacked",mdxType:"ArgsTable"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("h3",{id:"usage"},"Usage"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("h4",{id:"import-the-component"},"Import the component:"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_7__.f,{language:"javascript",code:Object(ts_dedent__WEBPACK_IMPORTED_MODULE_8__.a)(_templateObject2||(_templateObject2=_taggedTemplateLiteralLoose(["import { BarChart } from '@kws3/ui';"]))),mdxType:"Source"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("h4",{id:"import-the-scss"},"Import the SCSS:"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_7__.f,{language:"javascript",code:Object(ts_dedent__WEBPACK_IMPORTED_MODULE_8__.a)(_templateObject3||(_templateObject3=_taggedTemplateLiteralLoose(["@import '@kws3/ui/styles/Chart.scss';"]))),mdxType:"Source"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("h4",{id:"scss-customization-variables-with-default-values"},"SCSS customization variables with default values:"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_7__.f,{language:"css",code:Object(ts_dedent__WEBPACK_IMPORTED_MODULE_8__.a)(_templateObject4||(_templateObject4=_taggedTemplateLiteralLoose(["\n      $kws-chart-tooltip-background-color: $scheme-main;\n      $kws-chart-tooltip-foreground-color: $scheme-invert-ter;\n    "]))),mdxType:"Source"}))}MDXContent.isMDXComponent=!0;var verticalStacked=function verticalStacked(args){return{Component:_BarChart_svelte__WEBPACK_IMPORTED_MODULE_12__.a,props:args}};verticalStacked.storyName="Vertical Stacked",verticalStacked.args=args,verticalStacked.parameters={storySource:{source:"args => ({\n  Component: BarChartDecorator,\n  props: args\n})"}};var componentMeta={title:"Charts/Bar Charts/Vertical Stacked",component:_kws3_ui__WEBPACK_IMPORTED_MODULE_10__.c,args:args,includeStories:["verticalStacked"]},mdxStoryNameToKey={"Vertical Stacked":"verticalStacked"};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs=Object.assign({},componentMeta.parameters.docs||{},{page:function page(){return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_7__.a,{mdxStoryNameToKey:mdxStoryNameToKey,mdxComponentAnnotations:componentMeta},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)(MDXContent,null))}}),__webpack_exports__.default=componentMeta}}]);