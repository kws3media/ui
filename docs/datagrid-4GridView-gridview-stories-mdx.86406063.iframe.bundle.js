(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{"./src/stories/datagrid/4GridView/gridview.stories.mdx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"args",(function(){return gridview_stories_args})),__webpack_require__.d(__webpack_exports__,"gridView",(function(){return gridview_stories_gridView}));__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/react/index.js");var esm=__webpack_require__("./node_modules/@mdx-js/react/dist/esm.js"),dist_esm=__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/index.js"),ts_dedent_esm=__webpack_require__("./node_modules/ts-dedent/esm/index.js"),version=__webpack_require__("./src/version.mdx"),ui=__webpack_require__("./packages/@kws3/ui/index.js"),internal=(__webpack_require__("./node_modules/@storybook/addon-actions/dist/esm/index.js"),__webpack_require__("./node_modules/svelte/internal/index.mjs"));function create_fragment(ctx){let kwsgridview,current;return kwsgridview=new ui.x({props:{iteration_key:ctx[0],data:ctx[1],columns:ctx[2],transition:ctx[3],is_striped:ctx[4],is_narrow:ctx[5],clickableRows:ctx[6],bulk_actions:ctx[7],selectAll:ctx[8],selectedIds:ctx[9],selectAllCheckboxColor:ctx[10],selectCheckboxColor:ctx[11],selectCheckboxSize:ctx[12],valueTransformers:ctx[13],classTransformers:ctx[14],styleTransformers:ctx[15],visibilityMap:ctx[16],cellComponentMap:ctx[17],class:ctx[18]}}),{c(){Object(internal.v)(kwsgridview.$$.fragment)},m(target,anchor){Object(internal.T)(kwsgridview,target,anchor),current=!0},p(ctx,[dirty]){const kwsgridview_changes={};1&dirty&&(kwsgridview_changes.iteration_key=ctx[0]),2&dirty&&(kwsgridview_changes.data=ctx[1]),4&dirty&&(kwsgridview_changes.columns=ctx[2]),8&dirty&&(kwsgridview_changes.transition=ctx[3]),16&dirty&&(kwsgridview_changes.is_striped=ctx[4]),32&dirty&&(kwsgridview_changes.is_narrow=ctx[5]),64&dirty&&(kwsgridview_changes.clickableRows=ctx[6]),128&dirty&&(kwsgridview_changes.bulk_actions=ctx[7]),256&dirty&&(kwsgridview_changes.selectAll=ctx[8]),512&dirty&&(kwsgridview_changes.selectedIds=ctx[9]),1024&dirty&&(kwsgridview_changes.selectAllCheckboxColor=ctx[10]),2048&dirty&&(kwsgridview_changes.selectCheckboxColor=ctx[11]),4096&dirty&&(kwsgridview_changes.selectCheckboxSize=ctx[12]),8192&dirty&&(kwsgridview_changes.valueTransformers=ctx[13]),16384&dirty&&(kwsgridview_changes.classTransformers=ctx[14]),32768&dirty&&(kwsgridview_changes.styleTransformers=ctx[15]),65536&dirty&&(kwsgridview_changes.visibilityMap=ctx[16]),131072&dirty&&(kwsgridview_changes.cellComponentMap=ctx[17]),262144&dirty&&(kwsgridview_changes.class=ctx[18]),kwsgridview.$set(kwsgridview_changes)},i(local){current||(Object(internal.rb)(kwsgridview.$$.fragment,local),current=!0)},o(local){Object(internal.sb)(kwsgridview.$$.fragment,local),current=!1},d(detaching){Object(internal.y)(kwsgridview,detaching)}}}function instance($$self,$$props,$$invalidate){let{iteration_key:iteration_key="id",data:data=[],columns:columns={},transition:transition=!1,is_striped:is_striped=!0,is_narrow:is_narrow=!1,clickableRows:clickableRows=!1,bulk_actions:bulk_actions=!1,selectAll:selectAll=!1,selectedIds:selectedIds=[],selectAllCheckboxColor:selectAllCheckboxColor="primary",selectCheckboxColor:selectCheckboxColor="info",selectCheckboxSize:selectCheckboxSize="medium",valueTransformers:valueTransformers={},classTransformers:classTransformers={},styleTransformers:styleTransformers={},visibilityMap:visibilityMap={},cellComponentMap:cellComponentMap={}}=$$props,{class:klass=""}=$$props;return $$self.$$set=$$props=>{"iteration_key"in $$props&&$$invalidate(0,iteration_key=$$props.iteration_key),"data"in $$props&&$$invalidate(1,data=$$props.data),"columns"in $$props&&$$invalidate(2,columns=$$props.columns),"transition"in $$props&&$$invalidate(3,transition=$$props.transition),"is_striped"in $$props&&$$invalidate(4,is_striped=$$props.is_striped),"is_narrow"in $$props&&$$invalidate(5,is_narrow=$$props.is_narrow),"clickableRows"in $$props&&$$invalidate(6,clickableRows=$$props.clickableRows),"bulk_actions"in $$props&&$$invalidate(7,bulk_actions=$$props.bulk_actions),"selectAll"in $$props&&$$invalidate(8,selectAll=$$props.selectAll),"selectedIds"in $$props&&$$invalidate(9,selectedIds=$$props.selectedIds),"selectAllCheckboxColor"in $$props&&$$invalidate(10,selectAllCheckboxColor=$$props.selectAllCheckboxColor),"selectCheckboxColor"in $$props&&$$invalidate(11,selectCheckboxColor=$$props.selectCheckboxColor),"selectCheckboxSize"in $$props&&$$invalidate(12,selectCheckboxSize=$$props.selectCheckboxSize),"valueTransformers"in $$props&&$$invalidate(13,valueTransformers=$$props.valueTransformers),"classTransformers"in $$props&&$$invalidate(14,classTransformers=$$props.classTransformers),"styleTransformers"in $$props&&$$invalidate(15,styleTransformers=$$props.styleTransformers),"visibilityMap"in $$props&&$$invalidate(16,visibilityMap=$$props.visibilityMap),"cellComponentMap"in $$props&&$$invalidate(17,cellComponentMap=$$props.cellComponentMap),"class"in $$props&&$$invalidate(18,klass=$$props.class)},[iteration_key,data,columns,transition,is_striped,is_narrow,clickableRows,bulk_actions,selectAll,selectedIds,selectAllCheckboxColor,selectCheckboxColor,selectCheckboxSize,valueTransformers,classTransformers,styleTransformers,visibilityMap,cellComponentMap,klass]}class GridView_svelte_GridView extends internal.b{constructor(options){super(),Object(internal.O)(this,options,instance,create_fragment,internal.bb,{iteration_key:0,data:1,columns:2,transition:3,is_striped:4,is_narrow:5,clickableRows:6,bulk_actions:7,selectAll:8,selectedIds:9,selectAllCheckboxColor:10,selectCheckboxColor:11,selectCheckboxSize:12,valueTransformers:13,classTransformers:14,styleTransformers:15,visibilityMap:16,cellComponentMap:17,class:18})}}var _templateObject,_templateObject2,_templateObject3,_templateObject4,GridView_svelte=GridView_svelte_GridView;GridView_svelte_GridView.__docgen={version:3,name:"GridView.svelte",data:[{visibility:"public",description:null,keywords:[],name:"iteration_key",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"id"},{visibility:"public",description:null,keywords:[],name:"data",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"array",type:"array"}},{visibility:"public",description:null,keywords:[],name:"columns",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"object",type:"object"}},{visibility:"public",description:null,keywords:[],name:"transition",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1},{visibility:"public",description:null,keywords:[],name:"is_striped",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!0},{visibility:"public",description:null,keywords:[],name:"is_narrow",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1},{visibility:"public",description:null,keywords:[],name:"clickableRows",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1},{visibility:"public",description:null,keywords:[],name:"bulk_actions",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1},{visibility:"public",description:null,keywords:[],name:"selectAll",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1},{visibility:"public",description:null,keywords:[],name:"selectedIds",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"array",type:"array"}},{keywords:[{name:"type",description:"{ColorOptions}"}],visibility:"public",description:"color of the all checkbox",name:"selectAllCheckboxColor",kind:"let",static:!1,readonly:!1,type:{kind:"union",text:" ColorOptions:| ''|'primary'|'success'|'warning'|'info'|'danger'|'dark'|'light'|'link'",type:[{kind:"const",text:"''",type:"string",value:""},{kind:"const",text:"'primary'",type:"string",value:"primary"},{kind:"const",text:"'success'",type:"string",value:"success"},{kind:"const",text:"'warning'",type:"string",value:"warning"},{kind:"const",text:"'info'",type:"string",value:"info"},{kind:"const",text:"'danger'",type:"string",value:"danger"},{kind:"const",text:"'dark'",type:"string",value:"dark"},{kind:"const",text:"'light'",type:"string",value:"light"},{kind:"const",text:"'link'",type:"string",value:"link"}]},defaultValue:"primary"},{keywords:[{name:"type",description:"{ColorOptions}"}],visibility:"public",description:"color of the checkbox",name:"selectCheckboxColor",kind:"let",static:!1,readonly:!1,type:{kind:"union",text:" ColorOptions:| ''|'primary'|'success'|'warning'|'info'|'danger'|'dark'|'light'|'link'",type:[{kind:"const",text:"''",type:"string",value:""},{kind:"const",text:"'primary'",type:"string",value:"primary"},{kind:"const",text:"'success'",type:"string",value:"success"},{kind:"const",text:"'warning'",type:"string",value:"warning"},{kind:"const",text:"'info'",type:"string",value:"info"},{kind:"const",text:"'danger'",type:"string",value:"danger"},{kind:"const",text:"'dark'",type:"string",value:"dark"},{kind:"const",text:"'light'",type:"string",value:"light"},{kind:"const",text:"'link'",type:"string",value:"link"}]},defaultValue:"info"},{keywords:[{name:"type",description:"{SizeOptions}"}],visibility:"public",description:"size of the all checkbox",name:"selectCheckboxSize",kind:"let",static:!1,readonly:!1,type:{kind:"union",text:" SizeOptions:| ''|'small'|'medium'|'large'",type:[{kind:"const",text:"''",type:"string",value:""},{kind:"const",text:"'small'",type:"string",value:"small"},{kind:"const",text:"'medium'",type:"string",value:"medium"},{kind:"const",text:"'large'",type:"string",value:"large"}]},defaultValue:"medium"},{visibility:"public",description:null,keywords:[],name:"valueTransformers",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"object",type:"object"}},{visibility:"public",description:null,keywords:[],name:"classTransformers",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"object",type:"object"}},{visibility:"public",description:null,keywords:[],name:"styleTransformers",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"object",type:"object"}},{visibility:"public",description:null,keywords:[],name:"visibilityMap",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"object",type:"object"}},{visibility:"public",description:null,keywords:[],name:"cellComponentMap",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"object",type:"object"}},{visibility:"public",description:null,keywords:[],name:"class",kind:"const",static:!1,readonly:!0,type:{kind:"type",text:"string",type:"string"},localName:"klass",defaultValue:""}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};var _excluded=["components"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function _taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var gridview_stories_args={iteration_key:"id",data:[{id:2,username:"user2",name:"User",surname:"Two",role:"U"},{id:1,username:"user1",name:"User",surname:"One",role:"A"}],columns:{id:"ID",name:"Name",surname:"Surname"},transition:!1,class:"",is_striped:!0,is_narrow:!1,clickableRows:!1,bulk_actions:!1,selectAll:!1,selectedIds:[],selectAllCheckboxColor:"primary",selectCheckboxColor:"info",selectCheckboxSize:"medium",valueTransformers:{},classTransformers:{},styleTransformers:{},visibilityMap:{},cellComponentMap:{}},layoutProps={args:gridview_stories_args};function MDXContent(_ref){var components=_ref.components,props=_objectWithoutProperties(_ref,_excluded);return Object(esm.b)("wrapper",_extends({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(esm.b)(version.a,{mdxType:"Version"}),Object(esm.b)(dist_esm.e,{title:"Datagrid/GridView",component:ui.x,args:gridview_stories_args,argTypes:{},mdxType:"Meta"}),Object(esm.b)(dist_esm.d,{markdown:Object(ts_dedent_esm.a)(_templateObject||(_templateObject=_taggedTemplateLiteralLoose(["\n# GridView\n## GridView component in datagrid.\n"]))),mdxType:"Description"}),Object(esm.b)(dist_esm.c,{mdxType:"Canvas"},Object(esm.b)(dist_esm.g,{name:"GridView",args:gridview_stories_args,mdxType:"Story"},(function(args){return{Component:GridView_svelte,props:args}}))),Object(esm.b)(dist_esm.b,{story:"GridView",mdxType:"ArgsTable"}),Object(esm.b)("h3",null,"Usage"),Object(esm.b)("h4",null,"Import the component:"),Object(esm.b)(dist_esm.f,{language:"javascript",code:Object(ts_dedent_esm.a)(_templateObject2||(_templateObject2=_taggedTemplateLiteralLoose(["import { GridView } from '@kws3/ui';"]))),mdxType:"Source"}),Object(esm.b)("h4",null,"Import the SCSS:"),Object(esm.b)(dist_esm.f,{language:"javascript",code:Object(ts_dedent_esm.a)(_templateObject3||(_templateObject3=_taggedTemplateLiteralLoose(["@import '@kws3/ui/styles/Grid.scss';"]))),mdxType:"Source"}),Object(esm.b)("h5",null,"SCSS customization variables with default values:"),Object(esm.b)(dist_esm.f,{language:"css",code:Object(ts_dedent_esm.a)(_templateObject4||(_templateObject4=_taggedTemplateLiteralLoose(["\n    $kws-gridview-box-shadow: 0 0.125rem 0.1875rem rgba(0, 0, 0, 0.1),\n      0 0 0 0.0625rem rgba(0, 0, 0, 0.1);\n    $kws-gridview-th-background: $table-background-color;\n    $kws-gridview-th-color: $text;\n    $kws-gridview-tag-margin: 0 0.125rem 0.125rem 0;\n    $kws-gridview-icon-size: 1.5em;\n    $kws-gridview-checked-row-background: $primary-light;\n  "]))),mdxType:"Source"}))}MDXContent.isMDXComponent=!0;var gridview_stories_gridView=function gridView(args){return{Component:GridView_svelte,props:args}};gridview_stories_gridView.storyName="GridView",gridview_stories_gridView.args=gridview_stories_args,gridview_stories_gridView.parameters={storySource:{source:"args => ({\n  Component: GridViewDecorator,\n  props: args\n})"}};var componentMeta={title:"Datagrid/GridView",component:ui.x,args:gridview_stories_args,argTypes:{},includeStories:["gridView"]},mdxStoryNameToKey={GridView:"gridView"};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs=Object.assign({},componentMeta.parameters.docs||{},{page:function page(){return Object(esm.b)(dist_esm.a,{mdxStoryNameToKey:mdxStoryNameToKey,mdxComponentAnnotations:componentMeta},Object(esm.b)(MDXContent,null))}});__webpack_exports__.default=componentMeta}}]);