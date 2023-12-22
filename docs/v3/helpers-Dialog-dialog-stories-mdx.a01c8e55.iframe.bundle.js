(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{"./src/stories/helpers/Dialog/dialog.stories.mdx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"args",(function(){return dialog_stories_args})),__webpack_require__.d(__webpack_exports__,"dialog",(function(){return dialog_stories_dialog}));__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/react/index.js");var esm=__webpack_require__("./node_modules/@mdx-js/react/dist/esm.js"),dist_esm=__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/index.js"),ts_dedent_esm=__webpack_require__("./node_modules/ts-dedent/esm/index.js"),version=__webpack_require__("./src/version.mdx"),internal=__webpack_require__("./node_modules/svelte/internal/index.mjs"),ui=__webpack_require__("./packages/@kws3/ui/index.js");function create_default_slot(ctx){let t;return{c(){t=Object(internal.nb)("Use Native Dialogs")},m(target,anchor){Object(internal.Q)(target,t,anchor)},d(detaching){detaching&&Object(internal.A)(t)}}}function create_fragment(ctx){let checkbox,updating_checked,t0,hr,t1,div3,div0,button0,t3,div1,button1,t5,div2,button2,current,mounted,dispose;function checkbox_checked_binding(value){ctx[17](value)}let checkbox_props={$$slots:{default:[create_default_slot]},$$scope:{ctx:ctx}};return void 0!==ctx[0]&&(checkbox_props.checked=ctx[0]),checkbox=new ui.h({props:checkbox_props}),internal.m.push((()=>Object(internal.l)(checkbox,"checked",checkbox_checked_binding))),{c(){Object(internal.v)(checkbox.$$.fragment),t0=Object(internal.ib)(),hr=Object(internal.B)("hr"),t1=Object(internal.ib)(),div3=Object(internal.B)("div"),div0=Object(internal.B)("div"),button0=Object(internal.B)("button"),button0.textContent="Open Alert",t3=Object(internal.ib)(),div1=Object(internal.B)("div"),button1=Object(internal.B)("button"),button1.textContent="Open Confirm",t5=Object(internal.ib)(),div2=Object(internal.B)("div"),button2=Object(internal.B)("button"),button2.textContent="Open Prompt",Object(internal.k)(button0,"class","button is-primary"),Object(internal.k)(button0,"type","button"),Object(internal.k)(div0,"class","column has-text-centered"),Object(internal.k)(button1,"class","button is-info"),Object(internal.k)(button1,"type","button"),Object(internal.k)(div1,"class","column has-text-centered"),Object(internal.k)(button2,"class","button is-dark"),Object(internal.k)(button2,"type","button"),Object(internal.k)(div2,"class","column has-text-centered"),Object(internal.k)(div3,"class","columns")},m(target,anchor){Object(internal.T)(checkbox,target,anchor),Object(internal.Q)(target,t0,anchor),Object(internal.Q)(target,hr,anchor),Object(internal.Q)(target,t1,anchor),Object(internal.Q)(target,div3,anchor),Object(internal.h)(div3,div0),Object(internal.h)(div0,button0),Object(internal.h)(div3,t3),Object(internal.h)(div3,div1),Object(internal.h)(div1,button1),Object(internal.h)(div3,t5),Object(internal.h)(div3,div2),Object(internal.h)(div2,button2),current=!0,mounted||(dispose=[Object(internal.S)(button0,"click",ctx[1]),Object(internal.S)(button1,"click",ctx[2]),Object(internal.S)(button2,"click",ctx[3])],mounted=!0)},p(ctx,[dirty]){const checkbox_changes={};262144&dirty&&(checkbox_changes.$$scope={dirty:dirty,ctx:ctx}),!updating_checked&&1&dirty&&(updating_checked=!0,checkbox_changes.checked=ctx[0],Object(internal.d)((()=>updating_checked=!1))),checkbox.$set(checkbox_changes)},i(local){current||(Object(internal.rb)(checkbox.$$.fragment,local),current=!0)},o(local){Object(internal.sb)(checkbox.$$.fragment,local),current=!1},d(detaching){Object(internal.y)(checkbox,detaching),detaching&&Object(internal.A)(t0),detaching&&Object(internal.A)(hr),detaching&&Object(internal.A)(t1),detaching&&Object(internal.A)(div3),mounted=!1,Object(internal.ab)(dispose)}}}function instance($$self,$$props,$$invalidate){let{title:title="",help_text:help_text="",size:size="small",input_value:input_value="",icon:icon="",icon_color:icon_color="primary",icon_size:icon_size="",ok_button_text:ok_button_text="Ok",ok_button_color:ok_button_color="primary",ok_button_icon:ok_button_icon="check",cancel_button_text:cancel_button_text="Cancel",cancel_button_color:cancel_button_color="",cancel_button_icon:cancel_button_icon="ban"}=$$props,useNative=!1;return $$self.$$set=$$props=>{"title"in $$props&&$$invalidate(4,title=$$props.title),"help_text"in $$props&&$$invalidate(5,help_text=$$props.help_text),"size"in $$props&&$$invalidate(6,size=$$props.size),"input_value"in $$props&&$$invalidate(7,input_value=$$props.input_value),"icon"in $$props&&$$invalidate(8,icon=$$props.icon),"icon_color"in $$props&&$$invalidate(9,icon_color=$$props.icon_color),"icon_size"in $$props&&$$invalidate(10,icon_size=$$props.icon_size),"ok_button_text"in $$props&&$$invalidate(11,ok_button_text=$$props.ok_button_text),"ok_button_color"in $$props&&$$invalidate(12,ok_button_color=$$props.ok_button_color),"ok_button_icon"in $$props&&$$invalidate(13,ok_button_icon=$$props.ok_button_icon),"cancel_button_text"in $$props&&$$invalidate(14,cancel_button_text=$$props.cancel_button_text),"cancel_button_color"in $$props&&$$invalidate(15,cancel_button_color=$$props.cancel_button_color),"cancel_button_icon"in $$props&&$$invalidate(16,cancel_button_icon=$$props.cancel_button_icon)},[useNative,function openAlert(){useNative?alert("This is an alert"):ui.p.alert("This is an alert",{title:title,help_text:help_text,size:size,input_value:input_value,icon:icon,icon_color:icon_color,icon_size:icon_size,ok_button_text:ok_button_text,ok_button_color:ok_button_color,ok_button_icon:ok_button_icon,cancel_button_text:cancel_button_text,cancel_button_color:cancel_button_color,cancel_button_icon:cancel_button_icon})},async function openConfirm(){let agreed=null;agreed=useNative?confirm("Agree with everything?"):await ui.p.confirm("Agree with everything?",{title:title,help_text:help_text,size:size,input_value:input_value,icon:icon,icon_color:icon_color,icon_size:icon_size,ok_button_text:ok_button_text,ok_button_color:ok_button_color,ok_button_icon:ok_button_icon,cancel_button_text:cancel_button_text,cancel_button_color:cancel_button_color,cancel_button_icon:cancel_button_icon}),console.log(agreed)},async function openPrompt(){let age=null;age=useNative?prompt("How old are you?"):await ui.p.prompt("How old are you?",{title:title,help_text:help_text,size:size,input_value:input_value,icon:icon,icon_color:icon_color,icon_size:icon_size,ok_button_text:ok_button_text,ok_button_color:ok_button_color,ok_button_icon:ok_button_icon,cancel_button_text:cancel_button_text,cancel_button_color:cancel_button_color,cancel_button_icon:cancel_button_icon}),console.log(age)},title,help_text,size,input_value,icon,icon_color,icon_size,ok_button_text,ok_button_color,ok_button_icon,cancel_button_text,cancel_button_color,cancel_button_icon,function checkbox_checked_binding(value){useNative=value,$$invalidate(0,useNative)}]}class Dialog_svelte_Dialog extends internal.b{constructor(options){super(),Object(internal.O)(this,options,instance,create_fragment,internal.bb,{title:4,help_text:5,size:6,input_value:7,icon:8,icon_color:9,icon_size:10,ok_button_text:11,ok_button_color:12,ok_button_icon:13,cancel_button_text:14,cancel_button_color:15,cancel_button_icon:16})}}var Dialog_svelte=Dialog_svelte_Dialog;Dialog_svelte_Dialog.__docgen={version:3,name:"Dialog.svelte",data:[{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"Title text of the Dialog box.\nWill default to `Alert`, `Confirm` or `Prompt` depending on the dialog type",name:"title",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""},{keywords:[],visibility:"public",description:"Additional text to provide further context to the user",name:"help_text",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""},{keywords:[{name:"type",description:"{SizeOptions}"}],visibility:"public",description:"Size of the Dialog box",name:"size",kind:"let",static:!1,readonly:!1,type:{kind:"union",text:" SizeOptions:| ''|'small'|'medium'|'large'",type:[{kind:"const",text:"''",type:"string",value:""},{kind:"const",text:"'small'",type:"string",value:"small"},{kind:"const",text:"'medium'",type:"string",value:"medium"},{kind:"const",text:"'large'",type:"string",value:"large"}]},defaultValue:"small"},{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"Default value inside text input displayed on `prompt()` Dialogs",name:"input_value",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""},{keywords:[],visibility:"public",description:"Icon in the Dialog box",name:"icon",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""},{keywords:[{name:"type",description:"{ColorOptions}"}],visibility:"public",description:"Color of the Icon in the Dialog box",name:"icon_color",kind:"let",static:!1,readonly:!1,type:{kind:"union",text:" ColorOptions:| ''|'primary'|'success'|'warning'|'info'|'danger'|'dark'|'light'|'white'|'black'|'link'",type:[{kind:"const",text:"''",type:"string",value:""},{kind:"const",text:"'primary'",type:"string",value:"primary"},{kind:"const",text:"'success'",type:"string",value:"success"},{kind:"const",text:"'warning'",type:"string",value:"warning"},{kind:"const",text:"'info'",type:"string",value:"info"},{kind:"const",text:"'danger'",type:"string",value:"danger"},{kind:"const",text:"'dark'",type:"string",value:"dark"},{kind:"const",text:"'light'",type:"string",value:"light"},{kind:"const",text:"'white'",type:"string",value:"white"},{kind:"const",text:"'black'",type:"string",value:"black"},{kind:"const",text:"'link'",type:"string",value:"link"}]},defaultValue:"primary"},{keywords:[{name:"type",description:"{SizeOptions}"}],visibility:"public",description:"Size of the Icon in the Dialog box",name:"icon_size",kind:"let",static:!1,readonly:!1,type:{kind:"union",text:" SizeOptions:| ''|'small'|'medium'|'large'",type:[{kind:"const",text:"''",type:"string",value:""},{kind:"const",text:"'small'",type:"string",value:"small"},{kind:"const",text:"'medium'",type:"string",value:"medium"},{kind:"const",text:"'large'",type:"string",value:"large"}]},defaultValue:""},{keywords:[],visibility:"public",description:"Text to be displayed in the OK button",name:"ok_button_text",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"Ok"},{keywords:[{name:"type",description:"{ColorOptions} ok_button_color"}],visibility:"public",description:"Color of OK button",name:"ok_button_color",kind:"let",static:!1,readonly:!1,type:{kind:"union",text:" ColorOptions:| ''|'primary'|'success'|'warning'|'info'|'danger'|'dark'|'light'|'white'|'black'|'link'",type:[{kind:"const",text:"''",type:"string",value:""},{kind:"const",text:"'primary'",type:"string",value:"primary"},{kind:"const",text:"'success'",type:"string",value:"success"},{kind:"const",text:"'warning'",type:"string",value:"warning"},{kind:"const",text:"'info'",type:"string",value:"info"},{kind:"const",text:"'danger'",type:"string",value:"danger"},{kind:"const",text:"'dark'",type:"string",value:"dark"},{kind:"const",text:"'light'",type:"string",value:"light"},{kind:"const",text:"'white'",type:"string",value:"white"},{kind:"const",text:"'black'",type:"string",value:"black"},{kind:"const",text:"'link'",type:"string",value:"link"}]},defaultValue:"primary"},{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"Icon in the OK button",name:"ok_button_icon",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"check"},{keywords:[],visibility:"public",description:"Text to be displayed in the Cancel button",name:"cancel_button_text",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"Cancel"},{keywords:[{name:"type",description:"{ColorOptions}"}],visibility:"public",description:"Color of Cancel button",name:"cancel_button_color",kind:"let",static:!1,readonly:!1,type:{kind:"union",text:" ColorOptions:| ''|'primary'|'success'|'warning'|'info'|'danger'|'dark'|'light'|'white'|'black'|'link'",type:[{kind:"const",text:"''",type:"string",value:""},{kind:"const",text:"'primary'",type:"string",value:"primary"},{kind:"const",text:"'success'",type:"string",value:"success"},{kind:"const",text:"'warning'",type:"string",value:"warning"},{kind:"const",text:"'info'",type:"string",value:"info"},{kind:"const",text:"'danger'",type:"string",value:"danger"},{kind:"const",text:"'dark'",type:"string",value:"dark"},{kind:"const",text:"'light'",type:"string",value:"light"},{kind:"const",text:"'white'",type:"string",value:"white"},{kind:"const",text:"'black'",type:"string",value:"black"},{kind:"const",text:"'link'",type:"string",value:"link"}]},defaultValue:""},{keywords:[{name:"type",description:"{string}"}],visibility:"public",description:"Icon in the Cancel button",name:"cancel_button_icon",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"ban"}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};__webpack_require__("./node_modules/@storybook/addon-actions/dist/esm/index.js");var _templateObject,_templateObject2,_excluded=["components"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function _taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var dialog_stories_args={title:"",help_text:"",size:"small",input_value:"",icon:"",icon_color:"primary",icon_size:"",ok_button_text:"Ok",ok_button_icon:"check",cancel_button_text:"Cancel",cancel_button_icon:"ban"},layoutProps={args:dialog_stories_args};function MDXContent(_ref){var components=_ref.components,props=_objectWithoutProperties(_ref,_excluded);return Object(esm.b)("wrapper",_extends({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(esm.b)(version.a,{mdxType:"Version"}),Object(esm.b)(dist_esm.e,{title:"Helpers/Dialog",component:Dialog_svelte,args:dialog_stories_args,argTypes:{size:{control:{type:"select"}},icon_color:{control:{type:"select"}},icon_size:{control:{type:"select"}},ok_button_color:{control:{type:"select"}},cancel_button_color:{control:{type:"select"}}},mdxType:"Meta"}),Object(esm.b)(dist_esm.d,{markdown:Object(ts_dedent_esm.a)(_templateObject||(_templateObject=_taggedTemplateLiteralLoose(["\n# Dialog\n## Dialog components for showing modal alerts.\n"]))),mdxType:"Description"}),Object(esm.b)(dist_esm.c,{mdxType:"Canvas"},Object(esm.b)(dist_esm.g,{name:"Dialog",args:dialog_stories_args,mdxType:"Story"},(function(args){return{Component:Dialog_svelte,props:args}}))),Object(esm.b)(dist_esm.b,{story:"Dialog",mdxType:"ArgsTable"}),Object(esm.b)("div",{class:"notification is-danger is-light"},Object(esm.b)("b",null,"This is not a declarative component."),Object(esm.b)("br",null),Object(esm.b)("small",null,"It can only be used programatically.")),Object(esm.b)("p",null,"The signature of the helper functions are almost identical to their native counterparts."),Object(esm.b)("p",null,"The main differences are:"),Object(esm.b)("ol",null,Object(esm.b)("li",{parentName:"ol"},"They return a ",Object(esm.b)("inlineCode",{parentName:"li"},"Promise"),". The ",Object(esm.b)("inlineCode",{parentName:"li"},"Promise")," fulfils with the same values as the native functions."),Object(esm.b)("li",{parentName:"ol"},"They accept an extra argument with a configuration object")),Object(esm.b)("p",null,"Valid values for the configuration object are in the table above."),Object(esm.b)("h3",null,"Usage"),Object(esm.b)(dist_esm.f,{language:"javascript",code:Object(ts_dedent_esm.a)(_templateObject2||(_templateObject2=_taggedTemplateLiteralLoose(['\n  import { Dialog } from \'@kws3/ui\';\n  //---\n  //alert example\n  let alert_done = await Dialog.alert(\'This is an alert\', {title: "someTitle"});\n  //---\n  //confirm example\n  let accepted = await Dialog.confirm("Agree with everything?", {ok_button_text: "Yes", cancel_button_text: "No"})\n  //---\n  //prompt example\n  let age = await Dialog.prompt("How old are you?");\n  ']))),mdxType:"Source"}))}MDXContent.isMDXComponent=!0;var dialog_stories_dialog=function dialog(args){return{Component:Dialog_svelte,props:args}};dialog_stories_dialog.storyName="Dialog",dialog_stories_dialog.args=dialog_stories_args,dialog_stories_dialog.parameters={storySource:{source:"args => ({\n  Component: Dialog,\n  props: args\n})"}};var componentMeta={title:"Helpers/Dialog",component:Dialog_svelte,args:dialog_stories_args,argTypes:{size:{control:{type:"select"}},icon_color:{control:{type:"select"}},icon_size:{control:{type:"select"}},ok_button_color:{control:{type:"select"}},cancel_button_color:{control:{type:"select"}}},includeStories:["dialog"]},mdxStoryNameToKey={Dialog:"dialog"};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs=Object.assign({},componentMeta.parameters.docs||{},{page:function page(){return Object(esm.b)(dist_esm.a,{mdxStoryNameToKey:mdxStoryNameToKey,mdxComponentAnnotations:componentMeta},Object(esm.b)(MDXContent,null))}});__webpack_exports__.default=componentMeta}}]);