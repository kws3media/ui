(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{"./src/stories/datagrid/6Example/example.stories.mdx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"example",(function(){return example_stories_example}));__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/react/index.js");var esm=__webpack_require__("./node_modules/@mdx-js/react/dist/esm.js"),dist_esm=__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/index.js"),internal=(__webpack_require__("./node_modules/ts-dedent/esm/index.js"),__webpack_require__("./node_modules/svelte/internal/index.mjs")),svelte=__webpack_require__("./node_modules/svelte/index.mjs"),ui=__webpack_require__("./packages/@kws3/ui/index.js");function create_default_slot(ctx){let label,t0,t1,t2,toggle,current,t0_value=ctx[3]?"Tile":"Grid";return toggle=new ui.Y({props:{on:!1,disabled:!1,color:"info",class:"",on_text:"Grid",off_text:"Tile",size:"medium"}}),toggle.$on("change",ctx[36]),{c(){label=Object(internal.z)("label"),t0=Object(internal.jb)(t0_value),t1=Object(internal.jb)(" view"),t2=Object(internal.fb)(),Object(internal.t)(toggle.$$.fragment),Object(internal.k)(label,"for","some-primary-text"),Object(internal.k)(label,"class","label")},m(target,anchor){Object(internal.N)(target,label,anchor),Object(internal.h)(label,t0),Object(internal.h)(label,t1),Object(internal.N)(target,t2,anchor),Object(internal.Q)(toggle,target,anchor),current=!0},p(ctx,dirty){(!current||8&dirty[0])&&t0_value!==(t0_value=ctx[3]?"Tile":"Grid")&&Object(internal.cb)(t0,t0_value)},i(local){current||(Object(internal.nb)(toggle.$$.fragment,local),current=!0)},o(local){Object(internal.ob)(toggle.$$.fragment,local),current=!1},d(detaching){detaching&&Object(internal.y)(label),detaching&&Object(internal.y)(t2),Object(internal.w)(toggle,detaching)}}}function create_if_block(ctx){let div1,div0,datasearch,t0,datasort,t1,div3,div2,current_block_type_index,if_block0,t2,if_block1_anchor,current;datasearch=new ui.j({props:{hasSearch:ctx[5],hasFilters:ctx[6],placeholder:ctx[7],filters:ctx[8],q:ctx[2],filter_in_use_class:ctx[11],filter_not_in_use_class:ctx[12],filterComponent:ctx[13],filter_label_map:ctx[14]}}),datasearch.$on("search",ctx[34]),datasearch.$on("resetSearch",ctx[35]),datasort=new ui.k({props:{options:ctx[9],sort_by:ctx[15]}}),datasort.$on("sort",ctx[38]);const if_block_creators=[create_if_block_2,create_else_block],if_blocks=[];function select_block_type(ctx,dirty){return ctx[3]?0:1}current_block_type_index=select_block_type(ctx),if_block0=if_blocks[current_block_type_index]=if_block_creators[current_block_type_index](ctx);let if_block1=ctx[4]&&create_if_block_1(ctx);return{c(){div1=Object(internal.z)("div"),div0=Object(internal.z)("div"),Object(internal.t)(datasearch.$$.fragment),t0=Object(internal.fb)(),Object(internal.t)(datasort.$$.fragment),t1=Object(internal.fb)(),div3=Object(internal.z)("div"),div2=Object(internal.z)("div"),if_block0.c(),t2=Object(internal.fb)(),if_block1&&if_block1.c(),if_block1_anchor=Object(internal.A)(),Object(internal.k)(div0,"class","column"),Object(internal.k)(div1,"class","columns"),Object(internal.k)(div1,"id","datagrid-demo"),Object(internal.k)(div2,"class","column"),Object(internal.k)(div3,"class","columns")},m(target,anchor){Object(internal.N)(target,div1,anchor),Object(internal.h)(div1,div0),Object(internal.Q)(datasearch,div0,null),Object(internal.N)(target,t0,anchor),Object(internal.Q)(datasort,target,anchor),Object(internal.N)(target,t1,anchor),Object(internal.N)(target,div3,anchor),Object(internal.h)(div3,div2),if_blocks[current_block_type_index].m(div2,null),Object(internal.N)(target,t2,anchor),if_block1&&if_block1.m(target,anchor),Object(internal.N)(target,if_block1_anchor,anchor),current=!0},p(ctx,dirty){const datasearch_changes={};4&dirty[0]&&(datasearch_changes.q=ctx[2]),datasearch.$set(datasearch_changes);let previous_block_index=current_block_type_index;current_block_type_index=select_block_type(ctx),current_block_type_index===previous_block_index?if_blocks[current_block_type_index].p(ctx,dirty):(Object(internal.K)(),Object(internal.ob)(if_blocks[previous_block_index],1,1,(()=>{if_blocks[previous_block_index]=null})),Object(internal.o)(),if_block0=if_blocks[current_block_type_index],if_block0?if_block0.p(ctx,dirty):(if_block0=if_blocks[current_block_type_index]=if_block_creators[current_block_type_index](ctx),if_block0.c()),Object(internal.nb)(if_block0,1),if_block0.m(div2,null)),ctx[4]?if_block1?(if_block1.p(ctx,dirty),16&dirty[0]&&Object(internal.nb)(if_block1,1)):(if_block1=create_if_block_1(ctx),if_block1.c(),Object(internal.nb)(if_block1,1),if_block1.m(if_block1_anchor.parentNode,if_block1_anchor)):if_block1&&(Object(internal.K)(),Object(internal.ob)(if_block1,1,1,(()=>{if_block1=null})),Object(internal.o)())},i(local){current||(Object(internal.nb)(datasearch.$$.fragment,local),Object(internal.nb)(datasort.$$.fragment,local),Object(internal.nb)(if_block0),Object(internal.nb)(if_block1),current=!0)},o(local){Object(internal.ob)(datasearch.$$.fragment,local),Object(internal.ob)(datasort.$$.fragment,local),Object(internal.ob)(if_block0),Object(internal.ob)(if_block1),current=!1},d(detaching){detaching&&Object(internal.y)(div1),Object(internal.w)(datasearch),detaching&&Object(internal.y)(t0),Object(internal.w)(datasort,detaching),detaching&&Object(internal.y)(t1),detaching&&Object(internal.y)(div3),if_blocks[current_block_type_index].d(),detaching&&Object(internal.y)(t2),if_block1&&if_block1.d(detaching),detaching&&Object(internal.y)(if_block1_anchor)}}}function create_else_block(ctx){let div,gridview,current;return gridview=new ui.t({props:{iteration_key:ctx[16],data:ctx[0],columns:ctx[10],transition:ctx[17],is_striped:ctx[18],clickableRows:ctx[19],bulk_actions:ctx[20],selectAll:ctx[21],selectedIds:ctx[22],selectAllCheckboxColor:ctx[23],selectCheckboxColor:ctx[24],selectCheckboxSize:ctx[25],valueTransformers:ctx[33],classTransformers:ctx[26],styleTransformers:ctx[27],visibilityMap:ctx[28],cellComponentMap:ctx[29]}}),{c(){div=Object(internal.z)("div"),Object(internal.t)(gridview.$$.fragment),Object(internal.k)(div,"class","data-table-wrapper"),Object(internal.eb)(div,"max-width","100%"),Object(internal.eb)(div,"overflow","auto")},m(target,anchor){Object(internal.N)(target,div,anchor),Object(internal.Q)(gridview,div,null),current=!0},p(ctx,dirty){const gridview_changes={};1&dirty[0]&&(gridview_changes.data=ctx[0]),gridview.$set(gridview_changes)},i(local){current||(Object(internal.nb)(gridview.$$.fragment,local),current=!0)},o(local){Object(internal.ob)(gridview.$$.fragment,local),current=!1},d(detaching){detaching&&Object(internal.y)(div),Object(internal.w)(gridview)}}}function create_if_block_2(ctx){let tileview,current;return tileview=new ui.V({props:{iteration_key:ctx[16],data:ctx[0],transition:ctx[17],tileItemComponent:ctx[30],per_row:ctx[31],columns:ctx[10],clickableRows:ctx[19],bulk_actions:ctx[20],selectAll:ctx[21],selectedIds:ctx[22],selectCheckboxColor:ctx[24],selectCheckboxSize:ctx[25],valueTransformers:ctx[33],classTransformers:ctx[26],styleTransformers:ctx[27],visibilityMap:ctx[28]}}),{c(){Object(internal.t)(tileview.$$.fragment)},m(target,anchor){Object(internal.Q)(tileview,target,anchor),current=!0},p(ctx,dirty){const tileview_changes={};1&dirty[0]&&(tileview_changes.data=ctx[0]),tileview.$set(tileview_changes)},i(local){current||(Object(internal.nb)(tileview.$$.fragment,local),current=!0)},o(local){Object(internal.ob)(tileview.$$.fragment,local),current=!1},d(detaching){Object(internal.w)(tileview,detaching)}}}function create_if_block_1(ctx){let div1,div0,pagination,current;return pagination=new ui.G({props:{meta:ctx[1],perPageOptions:ctx[32]}}),pagination.$on("paginate",ctx[37]),{c(){div1=Object(internal.z)("div"),div0=Object(internal.z)("div"),Object(internal.t)(pagination.$$.fragment),Object(internal.k)(div0,"class","column"),Object(internal.k)(div1,"class","columns")},m(target,anchor){Object(internal.N)(target,div1,anchor),Object(internal.h)(div1,div0),Object(internal.Q)(pagination,div0,null),current=!0},p(ctx,dirty){const pagination_changes={};2&dirty[0]&&(pagination_changes.meta=ctx[1]),pagination.$set(pagination_changes)},i(local){current||(Object(internal.nb)(pagination.$$.fragment,local),current=!0)},o(local){Object(internal.ob)(pagination.$$.fragment,local),current=!1},d(detaching){detaching&&Object(internal.y)(div1),Object(internal.w)(pagination)}}}function create_fragment(ctx){let div1,div0,togglecontrol,t0,hr,t1,t2,if_block1_anchor,current;togglecontrol=new ui.ab({props:{$$slots:{default:[create_default_slot]},$$scope:{ctx:ctx}}});let if_block0=is_loading&&function create_if_block_3(ctx){let loader,current;return loader=new ui.w({props:{spinner_color:"primary",spinner_size:"medium",background_color:"transparent",background_size:"medium",has_overlay:!0}}),{c(){Object(internal.t)(loader.$$.fragment)},m(target,anchor){Object(internal.Q)(loader,target,anchor),current=!0},i(local){current||(Object(internal.nb)(loader.$$.fragment,local),current=!0)},o(local){Object(internal.ob)(loader.$$.fragment,local),current=!1},d(detaching){Object(internal.w)(loader,detaching)}}}(),if_block1=ctx[0]&&create_if_block(ctx);return{c(){div1=Object(internal.z)("div"),div0=Object(internal.z)("div"),Object(internal.t)(togglecontrol.$$.fragment),t0=Object(internal.fb)(),hr=Object(internal.z)("hr"),t1=Object(internal.fb)(),if_block0&&if_block0.c(),t2=Object(internal.fb)(),if_block1&&if_block1.c(),if_block1_anchor=Object(internal.A)(),Object(internal.k)(div0,"class","column is-3"),Object(internal.k)(div1,"class","columns is-mobile")},m(target,anchor){Object(internal.N)(target,div1,anchor),Object(internal.h)(div1,div0),Object(internal.Q)(togglecontrol,div0,null),Object(internal.N)(target,t0,anchor),Object(internal.N)(target,hr,anchor),Object(internal.N)(target,t1,anchor),if_block0&&if_block0.m(target,anchor),Object(internal.N)(target,t2,anchor),if_block1&&if_block1.m(target,anchor),Object(internal.N)(target,if_block1_anchor,anchor),current=!0},p(ctx,dirty){const togglecontrol_changes={};8&dirty[0]|4096&dirty[1]&&(togglecontrol_changes.$$scope={dirty:dirty,ctx:ctx}),togglecontrol.$set(togglecontrol_changes),ctx[0]?if_block1?(if_block1.p(ctx,dirty),1&dirty[0]&&Object(internal.nb)(if_block1,1)):(if_block1=create_if_block(ctx),if_block1.c(),Object(internal.nb)(if_block1,1),if_block1.m(if_block1_anchor.parentNode,if_block1_anchor)):if_block1&&(Object(internal.K)(),Object(internal.ob)(if_block1,1,1,(()=>{if_block1=null})),Object(internal.o)())},i(local){current||(Object(internal.nb)(togglecontrol.$$.fragment,local),Object(internal.nb)(if_block0),Object(internal.nb)(if_block1),current=!0)},o(local){Object(internal.ob)(togglecontrol.$$.fragment,local),Object(internal.ob)(if_block0),Object(internal.ob)(if_block1),current=!1},d(detaching){detaching&&Object(internal.y)(div1),Object(internal.w)(togglecontrol),detaching&&Object(internal.y)(t0),detaching&&Object(internal.y)(hr),detaching&&Object(internal.y)(t1),if_block0&&if_block0.d(detaching),detaching&&Object(internal.y)(t2),if_block1&&if_block1.d(detaching),detaching&&Object(internal.y)(if_block1_anchor)}}}let is_loading=!1;function instance($$self,$$props,$$invalidate){let has_pagination;const response=__webpack_require__("./src/stories/datagrid/6Example/users.json");let filters=response.filters,options=response.options,data=[],meta=response.meta,q="",original_data=response.records,is_tile_view=!1,limit=meta.limit,page_number=1,valueTransformers={role(v,row){switch(row.role){case"A":return"Administrator";case"U":return"User"}},status:(v,row)=>1==v?"Active":"Inactive"};return Object(svelte.c)((()=>{})),$$self.$$.update=()=>{768&$$self.$$.dirty[1]&&$$invalidate(0,data=original_data.slice((page_number-1)*limit,page_number*limit)),256&$$self.$$.dirty[1]&&$$invalidate(4,has_pagination=original_data.length>limit)},[data,meta,q,is_tile_view,has_pagination,!0,!0,"Search by name or surname",filters,options,{id:"ID",name:"Name",surname:"Surname",role:"Role",status:"Status"},"is-in-use","is-not-in-use",null,{},"","id",!1,!0,!1,!1,!1,[],"primary","info","medium",{},{},{},{},null,3,[5],valueTransformers,function search({detail:detail}){var data_from_json=response.records,search_vals=detail.split("~"),input_field=search_vals[0];input_field=input_field.trim();var filtered=original_data;if(input_field&&(filtered=data_from_json.filter((function(item){return item.name.toLowerCase().includes(input_field.toLowerCase())||item.surname.toLowerCase().includes(input_field.toLowerCase())}))),search_vals.length>1)for(var i=1;i<search_vals.length;i++){var dd_field=search_vals[i].split(":"),key=dd_field[0];filtered=(filtered.length>0?filtered:data_from_json).filter((function(item){return console.log(item[key],dd_field[1]),item[key]==dd_field[1]}))}$$invalidate(2,q=input_field+"~"),$$invalidate(39,original_data=filtered),$$invalidate(1,meta.total=original_data.length,meta)},function resetSearch(){$$invalidate(2,q=""),$$invalidate(39,original_data=response.records),$$invalidate(1,meta.total=original_data.length,meta)},function switchView(){$$invalidate(3,is_tile_view=!is_tile_view)},function paginate({detail:detail}){$$invalidate(40,page_number={0:1,5:2,10:3}[detail.offset]),$$invalidate(1,meta.offset=detail.offset,meta)},function sort({detail:detail}){var sort_val=detail.split(" "),key=sort_val[0],val=sort_val[1];$$invalidate(39,original_data="DESC"==val?original_data.sort(((a,b)=>Number(b[key])-Number(a[key]))):original_data.sort(((a,b)=>Number(a[key])-Number(b[key]))))},original_data,page_number]}class Example_svelte_Example extends internal.b{constructor(options){super(),Object(internal.M)(this,options,instance,create_fragment,internal.Y,{},null,[-1,-1])}}var Example_svelte=Example_svelte_Example;Example_svelte_Example.__docgen={version:3,name:"Example.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};var _excluded=["components"];function _extends(){return _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var layoutProps={};function MDXContent(_ref){var components=_ref.components,props=_objectWithoutProperties(_ref,_excluded);return Object(esm.b)("wrapper",_extends({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(esm.b)(dist_esm.e,{title:"Datagrid/Example",component:Example_svelte,parameters:{viewMode:"docs",previewTabs:{canvas:{hidden:!0}}},mdxType:"Meta"}),Object(esm.b)("h1",{id:"datagrid"},"Datagrid"),Object(esm.b)("h2",{id:"this-shows-an-example-of-all-datagrid-components-work-together"},"This shows an example of all datagrid components work together."),Object(esm.b)(dist_esm.c,{mdxType:"Canvas"},Object(esm.b)(dist_esm.g,{name:"Example",args:{},mdxType:"Story"},(function(args){return{Component:Example_svelte}}))),Object(esm.b)("h4",{id:"import-below-scss-for-datasort-styles"},"Import below SCSS for DataSort styles"),Object(esm.b)("pre",null,Object(esm.b)("code",{parentName:"pre",className:"language-js"},"@import '@kws3/ui/styles/DataSort.scss';\n")),Object(esm.b)("h4",{id:"example-usage-of-datagrid-components"},"Example usage of datagrid components"),Object(esm.b)("pre",null,Object(esm.b)("code",{parentName:"pre",className:"language-html"},'{#if data}\n  <div class="columns">\n    <div class="column">\n      <DataSearch\n        {hasSearch}\n        {hasFilters}\n        {placeholder}\n        {filters}\n        {q}\n        {filter_in_use_class}\n        {filter_not_in_use_class}\n        {filterComponent}\n        {filter_label_map}\n        on:search={search}\n        on:resetSearch={resetSearch} />\n      <DataSort {options} {sort_by} on:sort={sort} />\n    </div>\n  </div>\n\n  <div class="columns">\n    <div class="column">      \n      <GridView\n        {iteration_key}\n        {data}\n        {columns}\n        {transition}\n        {is_striped}\n        {clickableRows}\n        {bulk_actions}\n        {selectAll}\n        {selectedIds}\n        {selectAllCheckboxColor}\n        {selectCheckboxColor}\n        {selectCheckboxSize}\n        {valueTransformers}\n        {classTransformers}\n        {styleTransformers}\n        {visibilityMap}\n        {cellComponentMap} />      \n    </div>\n  </div>\n\n  {#if has_pagination}\n    <div class="columns">\n      <div class="column">\n        <Pagination {meta} {perPageOptions} on:paginate={paginate} />\n      </div>\n    </div>\n  {/if}\n{/if}\n\n<script>\n  import {\n    DataSearch,\n    DataSort,\n    GridView,\n    TileView,\n    Pagination\n  } from "@kws3/ui";\n  const response = require("./users.json");\n\n  let hasSearch = true,\n    hasFilters = true,\n    placeholder = "Search by name or surname",\n    filters = response.filters,\n    options = response.options,\n    data = [],\n    columns = {\n      id: "ID",\n      name: "Name",\n      surname: "Surname",\n      role: "Role",\n      status: "Status",\n    },\n    meta = response.meta,\n    q = "",\n    filter_in_use_class = "is-in-use",\n    filter_not_in_use_class = "is-not-in-use",\n    filterComponent = null,\n    filter_label_map = {},\n    sort_by = "",\n    iteration_key = "id",\n    transition = false,\n    is_striped = true,\n    clickableRows = false,\n    bulk_actions = false,\n    selectAll = false,\n    selectedIds = [],\n    selectAllCheckboxColor = "primary",\n    selectCheckboxColor = "info",\n    selectCheckboxSize = "medium",\n    classTransformers = {},\n    styleTransformers = {},\n    visibilityMap = {},\n    cellComponentMap = {},\n    tileItemComponent = null,\n    per_row = 3,\n    perPageOptions = [5];\n\n  let is_loading = false;\n  let original_data = response.records;\n  let is_tile_view = false;\n  let limit = meta.limit;\n  let page_number = 1;\n\n  let valueTransformers = {\n    role(v, row) {\n      switch (row.role) {\n        case "A":\n          return "Administrator";\n          break;\n        case "U":\n          return "User";\n          break;\n      }\n    },\n    status(v, row) {\n      return v == 1 ? "Active" : "Inactive";\n    },\n  };\n\n  $: data = original_data.slice((page_number - 1) * limit, page_number * limit);\n  $: has_pagination = original_data.length > limit;\n\n  function search({ detail }) {\n    //Write functionality for custom search\n  }\n\n  function resetSearch() {\n    //Write functionality for custom reset search\n  }  \n\n  function paginate({ detail }) {\n    //Write functionality for custom paginate\n  }\n\n  function sort({ detail }) {\n    //Write functionality for custom sort\n  }\n<\/script>\n\n')))}MDXContent.isMDXComponent=!0;var example_stories_example=function example(args){return{Component:Example_svelte}};example_stories_example.storyName="Example",example_stories_example.args={},example_stories_example.parameters={storySource:{source:"args => ({\n  Component: ExampleDatagrid\n})"}};var componentMeta={title:"Datagrid/Example",parameters:{viewMode:"docs",previewTabs:{canvas:{hidden:!0}}},component:Example_svelte,includeStories:["example"]},mdxStoryNameToKey={Example:"example"};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs=Object.assign({},componentMeta.parameters.docs||{},{page:function page(){return Object(esm.b)(dist_esm.a,{mdxStoryNameToKey:mdxStoryNameToKey,mdxComponentAnnotations:componentMeta},Object(esm.b)(MDXContent,null))}});__webpack_exports__.default=componentMeta},"./src/stories/datagrid/6Example/users.json":function(module){module.exports=JSON.parse('{"records":[{"id":1,"username":"user1","name":"Jhon","surname":"Doe","role":"A","status":"1"},{"id":2,"username":"user2","name":"James","surname":"Bond","role":"U","status":"1"},{"id":3,"username":"user3","name":"Tony","surname":"Starks","role":"U","status":"1"},{"id":4,"username":"user4","name":"Captain","surname":"America","role":"U","status":"1"},{"id":5,"username":"user5","name":"Natasha","surname":"Romanoff","role":"U","status":"1"},{"id":6,"username":"user6","name":"Julie","surname":"Doe","role":"U","status":"1"},{"id":7,"username":"user7","name":"Nick","surname":"Fury","role":"A","status":"1"},{"id":8,"username":"user8","name":"Peter","surname":"Parker","role":"U","status":"1"},{"id":9,"username":"user9","name":"Robert","surname":"Bruce","role":"U","status":"1"},{"id":10,"username":"user10","name":"Thor","surname":"Odinson","role":"U","status":"1"},{"id":11,"username":"user11","name":"Emma","surname":"Frost","role":"U","status":"1"},{"id":12,"username":"user12","name":"Gamora","surname":"Thanos","role":"U","status":"1"},{"id":13,"username":"user13","name":"Stephen","surname":"Strange","role":"U","status":"1"},{"id":14,"username":"user14","name":"Thanos","surname":"Titan","role":"A","status":"0"},{"id":15,"username":"user15","name":"Eddie","surname":"Brock","role":"U","status":"1"}],"meta":{"limit":5,"total":15,"count":5,"offset":0,"status":""},"filters":{"role":[{"name":"Administrator","id":"A"},{"name":"User","id":"U"}],"status":[{"name":"Active","id":1},{"name":"Inactive","id":0}]},"options":[{"name":"ID Newest First","value":"id DESC"},{"name":"ID Oldest First","value":"id ASC"}]}')}}]);