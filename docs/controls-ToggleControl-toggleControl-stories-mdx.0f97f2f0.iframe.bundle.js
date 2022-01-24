(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{"./src/stories/controls/ToggleControl/toggleControl.stories.mdx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"args",(function(){return toggleControl_stories_args})),__webpack_require__.d(__webpack_exports__,"toggleControl",(function(){return toggleControl_stories_toggleControl}));__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/react/index.js");var esm=__webpack_require__("./node_modules/@mdx-js/react/dist/esm.js"),dist_esm=__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/index.js"),ts_dedent_esm=__webpack_require__("./node_modules/ts-dedent/esm/index.js"),version=__webpack_require__("./src/version.mdx"),ui=__webpack_require__("./packages/@kws3/ui/index.js"),internal=__webpack_require__("./node_modules/svelte/internal/index.mjs");function create_default_slot_1(ctx){let label,t2,togglebuttons,current;return togglebuttons=new ui.cb({props:{options:[{name:"Yes",value:1},{name:"No",value:0},{name:"Maybe",value:null}]}}),{c(){label=Object(internal.A)("label"),label.innerHTML='Primary Label\n        <small class="is-block help">Some primary Text</small>',t2=Object(internal.gb)(),Object(internal.u)(togglebuttons.$$.fragment),Object(internal.k)(label,"for","some-primary-text"),Object(internal.k)(label,"class","label")},m(target,anchor){Object(internal.O)(target,label,anchor),Object(internal.O)(target,t2,anchor),Object(internal.R)(togglebuttons,target,anchor),current=!0},p:internal.S,i(local){current||(Object(internal.ob)(togglebuttons.$$.fragment,local),current=!0)},o(local){Object(internal.pb)(togglebuttons.$$.fragment,local),current=!1},d(detaching){detaching&&Object(internal.z)(label),detaching&&Object(internal.z)(t2),Object(internal.x)(togglebuttons,detaching)}}}function create_default_slot(ctx){let label,t2,toggle_1,current;return toggle_1=new ui.bb({props:{on:!0,disabled:ctx[4],color:ctx[0],size:ctx[1],on_text:ctx[2],off_text:ctx[3]}}),toggle_1.$on("change",ctx[8]),{c(){label=Object(internal.A)("label"),label.innerHTML='Secondary Label\n        <small class="is-block help">Some secondary Text</small>',t2=Object(internal.gb)(),Object(internal.u)(toggle_1.$$.fragment),Object(internal.k)(label,"for","some-secondary-text"),Object(internal.k)(label,"class","label")},m(target,anchor){Object(internal.O)(target,label,anchor),Object(internal.O)(target,t2,anchor),Object(internal.R)(toggle_1,target,anchor),current=!0},p(ctx,dirty){const toggle_1_changes={};16&dirty&&(toggle_1_changes.disabled=ctx[4]),1&dirty&&(toggle_1_changes.color=ctx[0]),2&dirty&&(toggle_1_changes.size=ctx[1]),4&dirty&&(toggle_1_changes.on_text=ctx[2]),8&dirty&&(toggle_1_changes.off_text=ctx[3]),toggle_1.$set(toggle_1_changes)},i(local){current||(Object(internal.ob)(toggle_1.$$.fragment,local),current=!0)},o(local){Object(internal.pb)(toggle_1.$$.fragment,local),current=!1},d(detaching){detaching&&Object(internal.z)(label),detaching&&Object(internal.z)(t2),Object(internal.x)(toggle_1,detaching)}}}function create_fragment(ctx){let div1,div0,kwstogglecontrol0,t0,hr,t1,kwstogglecontrol1,current;return kwstogglecontrol0=new ui.db({props:{class:ctx[7],style:ctx[5],cy:ctx[6],$$slots:{default:[create_default_slot_1]},$$scope:{ctx:ctx}}}),kwstogglecontrol1=new ui.db({props:{class:ctx[7],style:ctx[5],cy:ctx[6],$$slots:{default:[create_default_slot]},$$scope:{ctx:ctx}}}),{c(){div1=Object(internal.A)("div"),div0=Object(internal.A)("div"),Object(internal.u)(kwstogglecontrol0.$$.fragment),t0=Object(internal.gb)(),hr=Object(internal.A)("hr"),t1=Object(internal.gb)(),Object(internal.u)(kwstogglecontrol1.$$.fragment),Object(internal.k)(div0,"class","column"),Object(internal.k)(div1,"class","columns")},m(target,anchor){Object(internal.O)(target,div1,anchor),Object(internal.h)(div1,div0),Object(internal.R)(kwstogglecontrol0,div0,null),Object(internal.h)(div0,t0),Object(internal.h)(div0,hr),Object(internal.h)(div0,t1),Object(internal.R)(kwstogglecontrol1,div0,null),current=!0},p(ctx,[dirty]){const kwstogglecontrol0_changes={};128&dirty&&(kwstogglecontrol0_changes.class=ctx[7]),32&dirty&&(kwstogglecontrol0_changes.style=ctx[5]),64&dirty&&(kwstogglecontrol0_changes.cy=ctx[6]),1024&dirty&&(kwstogglecontrol0_changes.$$scope={dirty:dirty,ctx:ctx}),kwstogglecontrol0.$set(kwstogglecontrol0_changes);const kwstogglecontrol1_changes={};128&dirty&&(kwstogglecontrol1_changes.class=ctx[7]),32&dirty&&(kwstogglecontrol1_changes.style=ctx[5]),64&dirty&&(kwstogglecontrol1_changes.cy=ctx[6]),1055&dirty&&(kwstogglecontrol1_changes.$$scope={dirty:dirty,ctx:ctx}),kwstogglecontrol1.$set(kwstogglecontrol1_changes)},i(local){current||(Object(internal.ob)(kwstogglecontrol0.$$.fragment,local),Object(internal.ob)(kwstogglecontrol1.$$.fragment,local),current=!0)},o(local){Object(internal.pb)(kwstogglecontrol0.$$.fragment,local),Object(internal.pb)(kwstogglecontrol1.$$.fragment,local),current=!1},d(detaching){detaching&&Object(internal.z)(div1),Object(internal.x)(kwstogglecontrol0),Object(internal.x)(kwstogglecontrol1)}}}function instance($$self,$$props,$$invalidate){let{color:color="primary",size:size="normal",on_text:on_text="",off_text:off_text="",toggle:toggle=!1,disabled:disabled=!1,style:style="",cy:cy=""}=$$props,{class:klass=""}=$$props;return $$self.$$set=$$props=>{"color"in $$props&&$$invalidate(0,color=$$props.color),"size"in $$props&&$$invalidate(1,size=$$props.size),"on_text"in $$props&&$$invalidate(2,on_text=$$props.on_text),"off_text"in $$props&&$$invalidate(3,off_text=$$props.off_text),"toggle"in $$props&&$$invalidate(9,toggle=$$props.toggle),"disabled"in $$props&&$$invalidate(4,disabled=$$props.disabled),"style"in $$props&&$$invalidate(5,style=$$props.style),"cy"in $$props&&$$invalidate(6,cy=$$props.cy),"class"in $$props&&$$invalidate(7,klass=$$props.class)},[color,size,on_text,off_text,disabled,style,cy,klass,function handleChange(){$$invalidate(9,toggle=!toggle)},toggle]}class ToggleControl_svelte_ToggleControl extends internal.b{constructor(options){super(),Object(internal.N)(this,options,instance,create_fragment,internal.Z,{color:0,size:1,on_text:2,off_text:3,toggle:9,disabled:4,style:5,cy:6,class:7})}}var ToggleControl_svelte=ToggleControl_svelte_ToggleControl;ToggleControl_svelte_ToggleControl.__docgen={version:3,name:"ToggleControl.svelte",data:[{visibility:"public",description:null,keywords:[],name:"color",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"primary"},{visibility:"public",description:null,keywords:[],name:"size",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"normal"},{visibility:"public",description:null,keywords:[],name:"on_text",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""},{visibility:"public",description:null,keywords:[],name:"off_text",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""},{visibility:"public",description:null,keywords:[],name:"toggle",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1},{visibility:"public",description:null,keywords:[],name:"disabled",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1},{visibility:"public",description:null,keywords:[],name:"style",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""},{visibility:"public",description:null,keywords:[],name:"cy",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""},{visibility:"public",description:null,keywords:[],name:"class",kind:"const",static:!1,readonly:!0,type:{kind:"type",text:"string",type:"string"},localName:"klass",defaultValue:""}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};var _templateObject,_templateObject2,_templateObject3,_templateObject4,addon_actions_dist_esm=__webpack_require__("./node_modules/@storybook/addon-actions/dist/esm/index.js"),_excluded=["components"];function _extends(){return _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function _taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var toggleControl_stories_args={class:"",style:"",cy:""},layoutProps={args:toggleControl_stories_args};function MDXContent(_ref){var components=_ref.components,props=_objectWithoutProperties(_ref,_excluded);return Object(esm.b)("wrapper",_extends({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(esm.b)(version.a,{mdxType:"Version"}),Object(esm.b)(dist_esm.e,{title:"Forms/Controls/ToggleControl",component:ui.db,args:toggleControl_stories_args,mdxType:"Meta"}),Object(esm.b)(dist_esm.d,{markdown:Object(ts_dedent_esm.a)(_templateObject||(_templateObject=_taggedTemplateLiteralLoose(['\n# ToggleControl\n## To be used when using Toggle within a form\n#### To be used with &lt;Toggle&gt; & &lt;ToggleButtons&gt; components, so that they can be lined up with a &lt;label class="label"&gt; in existing forms.\n#### It is a wrapper component with no functionality of it\'s own.\n']))),mdxType:"Description"}),Object(esm.b)(dist_esm.c,{mdxType:"Canvas"},Object(esm.b)(dist_esm.g,{name:"ToggleControl",args:toggleControl_stories_args,mdxType:"Story"},(function(args){return{Component:ToggleControl_svelte,props:args,on:{change:Object(addon_actions_dist_esm.action)("Changed")}}}))),Object(esm.b)(dist_esm.b,{story:"ToggleControl",mdxType:"ArgsTable"}),Object(esm.b)("h3",{id:"usage"},"Usage"),Object(esm.b)("h4",{id:"import-the-component"},"Import the component:"),Object(esm.b)(dist_esm.f,{language:"javascript",code:Object(ts_dedent_esm.a)(_templateObject2||(_templateObject2=_taggedTemplateLiteralLoose(["import { ToggleControl  } from '@kws3/ui';"]))),mdxType:"Source"}),Object(esm.b)("h4",{id:"example-with-toggle"},"Example with ",Object(esm.b)("inlineCode",{parentName:"h4"},"<Toggle>")),Object(esm.b)(dist_esm.f,{language:"jsx",code:Object(ts_dedent_esm.a)(_templateObject3||(_templateObject3=_taggedTemplateLiteralLoose(['\n    <ToggleControl>\n      <label for="some-primary-text" class="label">\n        Primary Label\n        <small class="is-block help">Some secondary Text</small>\n      </label>\n      <Toggle  />\n    </ToggleControl>\n    ']))),mdxType:"Source"}),Object(esm.b)("h4",{id:"example-with-togglebuttons"},"Example with ",Object(esm.b)("inlineCode",{parentName:"h4"},"<ToggleButtons>")),Object(esm.b)(dist_esm.f,{language:"jsx",code:Object(ts_dedent_esm.a)(_templateObject4||(_templateObject4=_taggedTemplateLiteralLoose(['\n    <ToggleControl>\n      <label for="some-secondary-text" class="label">\n        Secondary Label\n        <small class="is-block help">Some secondary Text</small>\n      </label>\n      <ToggleButtons\n        options=\'{[\n          {"name": "Yes", "value": 1},\n          {"name": "No", "value": 0},\n          {"name": "Maybe", "value": null}\n        ]}\'\n      />\n    </ToggleControl>\n    ']))),mdxType:"Source"}))}MDXContent.isMDXComponent=!0;var toggleControl_stories_toggleControl=function toggleControl(args){return{Component:ToggleControl_svelte,props:args,on:{change:Object(addon_actions_dist_esm.action)("Changed")}}};toggleControl_stories_toggleControl.storyName="ToggleControl",toggleControl_stories_toggleControl.args=toggleControl_stories_args,toggleControl_stories_toggleControl.parameters={storySource:{source:'args => ({\n  Component: ToggleControlDecorator,\n  props: args,\n  on: {\n    change: action("Changed")\n  }\n})'}};var componentMeta={title:"Forms/Controls/ToggleControl",component:ui.db,args:toggleControl_stories_args,includeStories:["toggleControl"]},mdxStoryNameToKey={ToggleControl:"toggleControl"};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs=Object.assign({},componentMeta.parameters.docs||{},{page:function page(){return Object(esm.b)(dist_esm.a,{mdxStoryNameToKey:mdxStoryNameToKey,mdxComponentAnnotations:componentMeta},Object(esm.b)(MDXContent,null))}});__webpack_exports__.default=componentMeta}}]);