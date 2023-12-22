(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{"./src/stories/forms/DatePicker/datepicker.stories.mdx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"args",(function(){return args})),__webpack_require__.d(__webpack_exports__,"datepicker",(function(){return datepicker}));__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/react/index.js");var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_templateObject6,_templateObject7,_templateObject8,_mdx_js_react__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@mdx-js/react/dist/esm.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/index.js"),ts_dedent__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/ts-dedent/esm/index.js"),_version_mdx__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./src/version.mdx"),_kws3_ui__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./packages/@kws3/ui/index.js"),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_13__=(__webpack_require__("./src/stories/helpers/Message/Message.svelte"),__webpack_require__("./node_modules/@storybook/addon-actions/dist/esm/index.js")),_excluded=["components"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function _taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var args={value:"",style:"",class:"",placeholder:"Select Date..",disabled:!1,min_date:null,max_date:null,enable_dates:[],disable_dates:[],range_mode:!1,options:{},calendar_color:"primary",color:"",readonly:!1},layoutProps={args:args};function MDXContent(_ref){var components=_ref.components,props=_objectWithoutProperties(_ref,_excluded);return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_7__.b)("wrapper",_extends({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_7__.b)(_version_mdx__WEBPACK_IMPORTED_MODULE_10__.a,{mdxType:"Version"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_7__.b)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_8__.e,{title:"Forms/Datepicker",component:_kws3_ui__WEBPACK_IMPORTED_MODULE_11__.n,args:args,argTypes:{calendar_color:{control:{type:"select"}},color:{control:{type:"select"}},range_mode:{}},mdxType:"Meta"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_7__.b)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_8__.d,{markdown:Object(ts_dedent__WEBPACK_IMPORTED_MODULE_9__.a)(_templateObject||(_templateObject=_taggedTemplateLiteralLoose(["\n# Datepicker\n## Datepicker component that allows you to select date.\n"]))),mdxType:"Description"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_7__.b)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_8__.c,{mdxType:"Canvas"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_7__.b)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_8__.g,{name:"Datepicker",args:args,mdxType:"Story"},(function(args){return{Component:_kws3_ui__WEBPACK_IMPORTED_MODULE_11__.n,props:args,on:{change:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_13__.action)("change"),dateChange:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_13__.action)("dateChange"),ready:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_13__.action)("ready"),open:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_13__.action)("open"),close:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_13__.action)("close"),monthChange:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_13__.action)("monthChange"),yearChange:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_13__.action)("yearChange")}}}))),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_7__.b)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_8__.b,{story:"Datepicker",mdxType:"ArgsTable"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_7__.b)("h3",null,"Usage"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_7__.b)("h4",null,"Import the component:"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_7__.b)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_8__.f,{language:"javascript",code:Object(ts_dedent__WEBPACK_IMPORTED_MODULE_9__.a)(_templateObject2||(_templateObject2=_taggedTemplateLiteralLoose(["import { Datepicker } from '@kws3/ui';"]))),mdxType:"Source"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_7__.b)("h4",null,"Import the SCSS:"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_7__.b)("div",{class:"notification is-warning"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_7__.b)("strong",null,"Note:")," ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_7__.b)("em",null,"Need to import flatpicker SCSS file first")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_7__.b)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_8__.f,{language:"javascript",code:Object(ts_dedent__WEBPACK_IMPORTED_MODULE_9__.a)(_templateObject3||(_templateObject3=_taggedTemplateLiteralLoose(["\n    @import 'flatpickr/dist/flatpickr';\n    @import '@kws3/ui/styles/Datepicker.scss';"]))),mdxType:"Source"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_7__.b)("h4",null,"SCSS customization variables with default values:"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_7__.b)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_8__.f,{language:"css",code:Object(ts_dedent__WEBPACK_IMPORTED_MODULE_9__.a)(_templateObject4||(_templateObject4=_taggedTemplateLiteralLoose(["\n      $kws-theme-colors: $colors;\n      $kws-datepicker-background: $scheme-main-ter;\n      $kws-datepicker-text: $text;\n      $kws-datepicker-shadow: 0 2px 5px rgba(0, 0, 0, 0.3), 0 0 0 0.0625rem rgba(0, 0, 0, 0.1);\n      $kws-datepicker-radius: 0px;\n    "]))),mdxType:"Source"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_7__.b)("h3",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_7__.b)("inlineCode",{parentName:"h3"},"min_date")," and ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_7__.b)("inlineCode",{parentName:"h3"},"max_date")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_7__.b)("p",null,"Can either send a string or a Date object for both these properties.\n",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_7__.b)("strong",{parentName:"p"},"Example:")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_7__.b)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_8__.f,{language:"jsx",code:Object(ts_dedent__WEBPACK_IMPORTED_MODULE_9__.a)(_templateObject5||(_templateObject5=_taggedTemplateLiteralLoose(["\n      <Datepicker\n        min_date=\"2021-06-06\"\n        max_date={(new Date('2021-01-01')}\n      />\n    "]))),mdxType:"Source"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_7__.b)("h3",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_7__.b)("inlineCode",{parentName:"h3"},"enable_dates")," and ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_7__.b)("inlineCode",{parentName:"h3"},"disable_dates")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_7__.b)("p",null,"These two properties expect an array to be sent to them."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_7__.b)("p",null,"To enable specific dates, use ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_7__.b)("inlineCode",{parentName:"p"},"enable_dates"),". To disable specific dates, use ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_7__.b)("inlineCode",{parentName:"p"},"disable_dates"),"."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_7__.b)("div",{class:"columns"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_7__.b)("div",{class:"column"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_7__.b)("p",null,"The array can contain a list of dates, in string or object formats.\n",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_7__.b)("strong",{parentName:"p"},"Example:")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_7__.b)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_8__.f,{language:"jsx",code:Object(ts_dedent__WEBPACK_IMPORTED_MODULE_9__.a)(_templateObject6||(_templateObject6=_taggedTemplateLiteralLoose(["\n      <Datepicker\n        disable_dates={[\n          '2021-01-01',\n          '2021-01-02',\n          new Date(2025, 8, 9)\n        ]}\n      />\n    "]))),mdxType:"Source"})),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_7__.b)("div",{class:"column"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_7__.b)("p",null,"The array can contain a list of date ranges.\n",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_7__.b)("strong",{parentName:"p"},"Example:")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_7__.b)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_8__.f,{language:"jsx",code:Object(ts_dedent__WEBPACK_IMPORTED_MODULE_9__.a)(_templateObject7||(_templateObject7=_taggedTemplateLiteralLoose(["\n      <Datepicker\n        disable_dates={[\n          {\n            from: '2021-01-01',\n            to: '2021-01-02'\n          },\n          {\n            from: new Date(2025, 8, 9),\n            to: new Date(2025, 9, 9)\n          }\n        ]}\n      />\n    "]))),mdxType:"Source"})),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_7__.b)("div",{class:"column"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_7__.b)("p",null,"The array can also contain a function to dynamically determine the date.\n",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_7__.b)("strong",{parentName:"p"},"Example:")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_7__.b)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_8__.f,{language:"jsx",code:Object(ts_dedent__WEBPACK_IMPORTED_MODULE_9__.a)(_templateObject8||(_templateObject8=_taggedTemplateLiteralLoose(["\n      <Datepicker\n        disable_dates={[\n          function(date) {\n            // return true to disable\n            return (\n              date.getDay() === 0 ||\n              date.getDay() === 6\n            );\n          }\n        ]}\n      />\n    "]))),mdxType:"Source"}))))}MDXContent.isMDXComponent=!0;var datepicker=function datepicker(args){return{Component:_kws3_ui__WEBPACK_IMPORTED_MODULE_11__.n,props:args,on:{change:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_13__.action)("change"),dateChange:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_13__.action)("dateChange"),ready:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_13__.action)("ready"),open:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_13__.action)("open"),close:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_13__.action)("close"),monthChange:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_13__.action)("monthChange"),yearChange:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_13__.action)("yearChange")}}};datepicker.storyName="Datepicker",datepicker.args=args,datepicker.parameters={storySource:{source:'args => ({\n  Component: Datepicker,\n  props: args,\n  on: {\n    change: action("change"),\n    dateChange: action("dateChange"),\n    ready: action("ready"),\n    open: action("open"),\n    close: action("close"),\n    monthChange: action("monthChange"),\n    yearChange: action("yearChange")\n  }\n})'}};var componentMeta={title:"Forms/Datepicker",component:_kws3_ui__WEBPACK_IMPORTED_MODULE_11__.n,args:args,argTypes:{calendar_color:{control:{type:"select"}},color:{control:{type:"select"}},range_mode:{}},includeStories:["datepicker"]},mdxStoryNameToKey={Datepicker:"datepicker"};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs=Object.assign({},componentMeta.parameters.docs||{},{page:function page(){return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_7__.b)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_8__.a,{mdxStoryNameToKey:mdxStoryNameToKey,mdxComponentAnnotations:componentMeta},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_7__.b)(MDXContent,null))}}),__webpack_exports__.default=componentMeta},"./src/stories/helpers/Message/Message.svelte":function(module,__webpack_exports__,__webpack_require__){"use strict";var svelte_internal__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/svelte/internal/index.mjs"),_kws3_ui__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/@kws3/ui/index.js");function create_default_slot(ctx){let h1,t1,p;return{c(){h1=Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.B)("h1"),h1.textContent="This is a Heading",t1=Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.ib)(),p=Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.B)("p"),p.textContent="Lorem ipsum dolor sit amet consectetur adipisicing elit."},m(target,anchor){Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.Q)(target,h1,anchor),Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.Q)(target,t1,anchor),Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.Q)(target,p,anchor)},p:svelte_internal__WEBPACK_IMPORTED_MODULE_0__.U,d(detaching){detaching&&Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.A)(h1),detaching&&Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.A)(t1),detaching&&Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.A)(p)}}}function create_fragment(ctx){let kwsmessage,current;return kwsmessage=new _kws3_ui__WEBPACK_IMPORTED_MODULE_1__.D({props:{size:ctx[0],color:ctx[1],class:ctx[10],style:ctx[2],inner_class:ctx[5],inner_style:ctx[3],title_class:ctx[4],title:ctx[6],has_title:ctx[7],dismissable:ctx[8],active:ctx[9],$$slots:{default:[create_default_slot]},$$scope:{ctx:ctx}}}),kwsmessage.$on("dismiss",ctx[11]),{c(){Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.v)(kwsmessage.$$.fragment)},m(target,anchor){Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.T)(kwsmessage,target,anchor),current=!0},p(ctx,[dirty]){const kwsmessage_changes={};1&dirty&&(kwsmessage_changes.size=ctx[0]),2&dirty&&(kwsmessage_changes.color=ctx[1]),1024&dirty&&(kwsmessage_changes.class=ctx[10]),4&dirty&&(kwsmessage_changes.style=ctx[2]),32&dirty&&(kwsmessage_changes.inner_class=ctx[5]),8&dirty&&(kwsmessage_changes.inner_style=ctx[3]),16&dirty&&(kwsmessage_changes.title_class=ctx[4]),64&dirty&&(kwsmessage_changes.title=ctx[6]),128&dirty&&(kwsmessage_changes.has_title=ctx[7]),256&dirty&&(kwsmessage_changes.dismissable=ctx[8]),512&dirty&&(kwsmessage_changes.active=ctx[9]),4096&dirty&&(kwsmessage_changes.$$scope={dirty:dirty,ctx:ctx}),kwsmessage.$set(kwsmessage_changes)},i(local){current||(Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.rb)(kwsmessage.$$.fragment,local),current=!0)},o(local){Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.sb)(kwsmessage.$$.fragment,local),current=!1},d(detaching){Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.y)(kwsmessage,detaching)}}}function instance($$self,$$props,$$invalidate){let{size:size="medium",color:color="info",style:style="",inner_style:inner_style="",title_class:title_class="",inner_class:inner_class="",title:title=null,has_title:has_title=!1,dismissable:dismissable=!1,active:active=!0}=$$props,{class:klass=""}=$$props;return $$self.$$set=$$props=>{"size"in $$props&&$$invalidate(0,size=$$props.size),"color"in $$props&&$$invalidate(1,color=$$props.color),"style"in $$props&&$$invalidate(2,style=$$props.style),"inner_style"in $$props&&$$invalidate(3,inner_style=$$props.inner_style),"title_class"in $$props&&$$invalidate(4,title_class=$$props.title_class),"inner_class"in $$props&&$$invalidate(5,inner_class=$$props.inner_class),"title"in $$props&&$$invalidate(6,title=$$props.title),"has_title"in $$props&&$$invalidate(7,has_title=$$props.has_title),"dismissable"in $$props&&$$invalidate(8,dismissable=$$props.dismissable),"active"in $$props&&$$invalidate(9,active=$$props.active),"class"in $$props&&$$invalidate(10,klass=$$props.class)},[size,color,style,inner_style,title_class,inner_class,title,has_title,dismissable,active,klass,function dismiss_handler(event){svelte_internal__WEBPACK_IMPORTED_MODULE_0__.n.call(this,$$self,event)}]}class Message extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__.b{constructor(options){super(),Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.O)(this,options,instance,create_fragment,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.bb,{size:0,color:1,style:2,inner_style:3,title_class:4,inner_class:5,title:6,has_title:7,dismissable:8,active:9,class:10})}}__webpack_exports__.a=Message,Message.__docgen={version:3,name:"Message.svelte",data:[{keywords:[{name:"type",description:"{import('kws3/ui/types').SizeOptions}"}],visibility:"public",description:"Size of the Message",name:"size",kind:"let",static:!1,readonly:!1,type:{kind:"union",text:" SizeOptions:| ''|'small'|'medium'|'large'",type:[{kind:"const",text:"''",type:"string",value:""},{kind:"const",text:"'small'",type:"string",value:"small"},{kind:"const",text:"'medium'",type:"string",value:"medium"},{kind:"const",text:"'large'",type:"string",value:"large"}],importPath:"kws3/ui/types"},defaultValue:"medium"},{keywords:[{name:"type",description:"{import('kws3/ui/types').ColorOptions}"}],visibility:"public",description:"Color of the Message box",name:"color",kind:"let",static:!1,readonly:!1,type:{kind:"union",text:" ColorOptions:| ''|'primary'|'success'|'warning'|'info'|'danger'|'dark'|'light'|'white'|'black'|'link'",type:[{kind:"const",text:"''",type:"string",value:""},{kind:"const",text:"'primary'",type:"string",value:"primary"},{kind:"const",text:"'success'",type:"string",value:"success"},{kind:"const",text:"'warning'",type:"string",value:"warning"},{kind:"const",text:"'info'",type:"string",value:"info"},{kind:"const",text:"'danger'",type:"string",value:"danger"},{kind:"const",text:"'dark'",type:"string",value:"dark"},{kind:"const",text:"'light'",type:"string",value:"light"},{kind:"const",text:"'white'",type:"string",value:"white"},{kind:"const",text:"'black'",type:"string",value:"black"},{kind:"const",text:"'link'",type:"string",value:"link"}],importPath:"kws3/ui/types"},defaultValue:"info"},{visibility:"public",description:null,keywords:[],name:"style",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""},{visibility:"public",description:null,keywords:[],name:"inner_style",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""},{visibility:"public",description:null,keywords:[],name:"title_class",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""},{visibility:"public",description:null,keywords:[],name:"inner_class",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""},{visibility:"public",description:null,keywords:[],name:"title",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"object",type:"object"},defaultValue:null},{visibility:"public",description:null,keywords:[],name:"has_title",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1},{visibility:"public",description:null,keywords:[],name:"dismissable",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1},{visibility:"public",description:null,keywords:[],name:"active",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!0},{visibility:"public",description:null,keywords:[],name:"class",kind:"const",static:!1,readonly:!0,type:{kind:"type",text:"string",type:"string"},localName:"klass",defaultValue:""}],computed:[],methods:[],components:[],description:null,keywords:[],events:[{keywords:[],visibility:"public",description:"",name:"dismiss",parent:"KwsMessage",modificators:[],locations:null}],slots:[],refs:[]}}}]);