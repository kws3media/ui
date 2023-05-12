(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{"./src/stories/helpers/ActionSheet/actionSheet.stories.mdx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"args",(function(){return actionSheet_stories_args})),__webpack_require__.d(__webpack_exports__,"actionSheet",(function(){return actionSheet_stories_actionSheet}));__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/react/index.js");var esm=__webpack_require__("./node_modules/@mdx-js/react/dist/esm.js"),dist_esm=__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/index.js"),ts_dedent_esm=__webpack_require__("./node_modules/ts-dedent/esm/index.js"),version=__webpack_require__("./src/version.mdx"),ui=__webpack_require__("./packages/@kws3/ui/index.js"),internal=__webpack_require__("./node_modules/svelte/internal/index.mjs");function create_default_slot(ctx){let h1,t1,p,t3,ul,t7,hr,t8,button,mounted,dispose;return{c(){h1=Object(internal.B)("h1"),h1.textContent="This is a Heading",t1=Object(internal.ib)(),p=Object(internal.B)("p"),p.textContent="Lorem ipsum dolor sit amet consectetur adipisicing elit.",t3=Object(internal.ib)(),ul=Object(internal.B)("ul"),ul.innerHTML='<li><a href="javascript:void(0)">Menu 1</a></li> \n    <li><a href="javascript:void(0)">Menu 2</a></li>',t7=Object(internal.ib)(),hr=Object(internal.B)("hr"),t8=Object(internal.ib)(),button=Object(internal.B)("button"),button.textContent="Close Action Sheet",Object(internal.k)(h1,"class","title"),Object(internal.k)(ul,"class","menu-list"),Object(internal.k)(hr,"class","is-small"),Object(internal.k)(button,"class","button is-danger is-fullwidth"),Object(internal.k)(button,"type","button")},m(target,anchor){Object(internal.Q)(target,h1,anchor),Object(internal.Q)(target,t1,anchor),Object(internal.Q)(target,p,anchor),Object(internal.Q)(target,t3,anchor),Object(internal.Q)(target,ul,anchor),Object(internal.Q)(target,t7,anchor),Object(internal.Q)(target,hr,anchor),Object(internal.Q)(target,t8,anchor),Object(internal.Q)(target,button,anchor),mounted||(dispose=Object(internal.S)(button,"click",ctx[7]),mounted=!0)},p:internal.U,d(detaching){detaching&&Object(internal.A)(h1),detaching&&Object(internal.A)(t1),detaching&&Object(internal.A)(p),detaching&&Object(internal.A)(t3),detaching&&Object(internal.A)(ul),detaching&&Object(internal.A)(t7),detaching&&Object(internal.A)(hr),detaching&&Object(internal.A)(t8),detaching&&Object(internal.A)(button),mounted=!1,dispose()}}}function create_fragment(ctx){let kwsactionsheet,updating_is_active,t0,button,current,mounted,dispose;function kwsactionsheet_is_active_binding(value){ctx[8](value)}let kwsactionsheet_props={closable:ctx[1],close_on_click_outside:ctx[2],inner_class:ctx[4],inner_style:ctx[5],style:ctx[3],class:ctx[6],$$slots:{default:[create_default_slot]},$$scope:{ctx:ctx}};return void 0!==ctx[0]&&(kwsactionsheet_props.is_active=ctx[0]),kwsactionsheet=new ui.a({props:kwsactionsheet_props}),internal.m.push((()=>Object(internal.l)(kwsactionsheet,"is_active",kwsactionsheet_is_active_binding))),{c(){Object(internal.v)(kwsactionsheet.$$.fragment),t0=Object(internal.ib)(),button=Object(internal.B)("button"),button.textContent="Open Action Sheet",Object(internal.k)(button,"class","button is-primary"),Object(internal.k)(button,"type","button")},m(target,anchor){Object(internal.T)(kwsactionsheet,target,anchor),Object(internal.Q)(target,t0,anchor),Object(internal.Q)(target,button,anchor),current=!0,mounted||(dispose=Object(internal.S)(button,"click",ctx[9]),mounted=!0)},p(ctx,[dirty]){const kwsactionsheet_changes={};2&dirty&&(kwsactionsheet_changes.closable=ctx[1]),4&dirty&&(kwsactionsheet_changes.close_on_click_outside=ctx[2]),16&dirty&&(kwsactionsheet_changes.inner_class=ctx[4]),32&dirty&&(kwsactionsheet_changes.inner_style=ctx[5]),8&dirty&&(kwsactionsheet_changes.style=ctx[3]),64&dirty&&(kwsactionsheet_changes.class=ctx[6]),1025&dirty&&(kwsactionsheet_changes.$$scope={dirty:dirty,ctx:ctx}),!updating_is_active&&1&dirty&&(updating_is_active=!0,kwsactionsheet_changes.is_active=ctx[0],Object(internal.d)((()=>updating_is_active=!1))),kwsactionsheet.$set(kwsactionsheet_changes)},i(local){current||(Object(internal.rb)(kwsactionsheet.$$.fragment,local),current=!0)},o(local){Object(internal.sb)(kwsactionsheet.$$.fragment,local),current=!1},d(detaching){Object(internal.y)(kwsactionsheet,detaching),detaching&&Object(internal.A)(t0),detaching&&Object(internal.A)(button),mounted=!1,dispose()}}}function instance($$self,$$props,$$invalidate){let{is_active:is_active=!1,closable:closable=!0,close_on_click_outside:close_on_click_outside=!0,style:style="",inner_class:inner_class="",inner_style:inner_style=""}=$$props,{class:klass=""}=$$props;return $$self.$$set=$$props=>{"is_active"in $$props&&$$invalidate(0,is_active=$$props.is_active),"closable"in $$props&&$$invalidate(1,closable=$$props.closable),"close_on_click_outside"in $$props&&$$invalidate(2,close_on_click_outside=$$props.close_on_click_outside),"style"in $$props&&$$invalidate(3,style=$$props.style),"inner_class"in $$props&&$$invalidate(4,inner_class=$$props.inner_class),"inner_style"in $$props&&$$invalidate(5,inner_style=$$props.inner_style),"class"in $$props&&$$invalidate(6,klass=$$props.class)},[is_active,closable,close_on_click_outside,style,inner_class,inner_style,klass,()=>$$invalidate(0,is_active=!1),function kwsactionsheet_is_active_binding(value){is_active=value,$$invalidate(0,is_active)},()=>$$invalidate(0,is_active=!0)]}class ActionSheet_svelte_ActionSheet extends internal.b{constructor(options){super(),Object(internal.O)(this,options,instance,create_fragment,internal.bb,{is_active:0,closable:1,close_on_click_outside:2,style:3,inner_class:4,inner_style:5,class:6})}}var ActionSheet_svelte=ActionSheet_svelte_ActionSheet;ActionSheet_svelte_ActionSheet.__docgen={version:3,name:"ActionSheet.svelte",data:[{visibility:"public",description:null,keywords:[],name:"is_active",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1,bind:[{source:"KwsActionSheet",property:"is_active"}]},{visibility:"public",description:null,keywords:[],name:"closable",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!0},{visibility:"public",description:null,keywords:[],name:"close_on_click_outside",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!0},{visibility:"public",description:null,keywords:[],name:"style",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""},{visibility:"public",description:null,keywords:[],name:"inner_class",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""},{visibility:"public",description:null,keywords:[],name:"inner_style",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""},{visibility:"public",description:null,keywords:[],name:"class",kind:"const",static:!1,readonly:!0,type:{kind:"type",text:"string",type:"string"},localName:"klass",defaultValue:""}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,addon_actions_dist_esm=__webpack_require__("./node_modules/@storybook/addon-actions/dist/esm/index.js"),_excluded=["components"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function _taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var actionSheet_stories_args={is_active:!1,closable:!0,close_on_click_outside:!0,style:"",class:"",inner_style:"",inner_class:""},layoutProps={args:actionSheet_stories_args};function MDXContent(_ref){var components=_ref.components,props=_objectWithoutProperties(_ref,_excluded);return Object(esm.b)("wrapper",_extends({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(esm.b)(version.a,{mdxType:"Version"}),Object(esm.b)(dist_esm.e,{title:"Helpers/ActionSheet",component:ui.a,args:actionSheet_stories_args,argTypes:{},mdxType:"Meta"}),Object(esm.b)(dist_esm.d,{markdown:Object(ts_dedent_esm.a)(_templateObject||(_templateObject=_taggedTemplateLiteralLoose(["\n# ActionSheet\n## ActionSheet components for showing popups.\n"]))),mdxType:"Description"}),Object(esm.b)(dist_esm.c,{mdxType:"Canvas"},Object(esm.b)(dist_esm.g,{name:"ActionSheet",args:actionSheet_stories_args,mdxType:"Story"},(function(args){return{Component:ActionSheet_svelte,props:args,on:{click:Object(addon_actions_dist_esm.action)("Opened")}}}))),Object(esm.b)(dist_esm.b,{story:"ActionSheet",mdxType:"ArgsTable"}),Object(esm.b)("h3",null,"Usage"),Object(esm.b)(dist_esm.f,{language:"javascript",code:Object(ts_dedent_esm.a)(_templateObject2||(_templateObject2=_taggedTemplateLiteralLoose(["import { ActionSheet } from '@kws3/ui';"]))),mdxType:"Source"}),Object(esm.b)("h4",null,"Import the SCSS:"),Object(esm.b)(dist_esm.f,{language:"javascript",code:Object(ts_dedent_esm.a)(_templateObject3||(_templateObject3=_taggedTemplateLiteralLoose(["@import '@kws3/ui/styles/ActionSheet.scss';"]))),mdxType:"Source"}),Object(esm.b)("h5",null,"SCSS customization variables with default values:"),Object(esm.b)(dist_esm.f,{language:"css",code:Object(ts_dedent_esm.a)(_templateObject4||(_templateObject4=_taggedTemplateLiteralLoose(["\n    $kws-actionsheet-background: $background;\n    $kws-actionsheet-box-shadow: $card-shadow;\n    $kws-actionsheet-box-radius: $radius;\n  "]))),mdxType:"Source"}),Object(esm.b)("h3",null,"Example"),Object(esm.b)(dist_esm.f,{language:"html",code:Object(ts_dedent_esm.a)(_templateObject5||(_templateObject5=_taggedTemplateLiteralLoose(['\n    <div class="columns">\n      <div class="column">\n        <ActionSheet\n          bind:is_active\n          {closable}\n          {close_on_click_outside}\n          {style}\n          class={klass}>\n          <h1 class="title">This is a Heading</h1>\n          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>\n          <ul class="menu-list">\n            <li><a href={"javascript:void(0)"}>Menu 1</a></li>\n            <li><a href={"javascript:void(0)"}>Menu 2</a></li>\n          </ul>\n          <hr class="is-small" />\n          <button\n            class="button is-danger is-fullwidth"\n            type="button"\n            on:click={() => (is_active = false)}>Close Action Sheet</button>\n        </ActionSheet>\n      </div>\n    </div>\n    <button\n      class="button is-primary"\n      type="button"\n      on:click={() => (is_active = true)}>Open Action Sheet</button>\n    <script>\n      import { ActionSheet } from "@kws3/ui";\n      export let is_active = false,\n        closable = true,\n        close_on_click_outside = true,\n        style = "";\n      let klass = "";\n      export { klass as class };\n    <\/script>\n  ']))),mdxType:"Source"}))}MDXContent.isMDXComponent=!0;var actionSheet_stories_actionSheet=function actionSheet(args){return{Component:ActionSheet_svelte,props:args,on:{click:Object(addon_actions_dist_esm.action)("Opened")}}};actionSheet_stories_actionSheet.storyName="ActionSheet",actionSheet_stories_actionSheet.args=actionSheet_stories_args,actionSheet_stories_actionSheet.parameters={storySource:{source:'args => ({\n  Component: ActionSheetDecorator,\n  props: args,\n  on: {\n    click: action("Opened")\n  }\n})'}};var componentMeta={title:"Helpers/ActionSheet",component:ui.a,args:actionSheet_stories_args,argTypes:{},includeStories:["actionSheet"]},mdxStoryNameToKey={ActionSheet:"actionSheet"};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs=Object.assign({},componentMeta.parameters.docs||{},{page:function page(){return Object(esm.b)(dist_esm.a,{mdxStoryNameToKey:mdxStoryNameToKey,mdxComponentAnnotations:componentMeta},Object(esm.b)(MDXContent,null))}});__webpack_exports__.default=componentMeta}}]);