(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-system-menu-edit","pages-demo-icons-icons"],{"01d1":function(t,e,a){"use strict";a.r(e);var n=a("9843"),i=a("687a");for(var o in i)"default"!==o&&function(t){a.d(e,t,(function(){return i[t]}))}(o);a("2785");var l,r=a("f0c5"),s=Object(r["a"])(i["default"],n["b"],n["c"],!1,null,"cdb35a60",null,!1,n["a"],l);e["default"]=s.exports},"0a50":function(t,e,a){var n=a("54a6");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("30f7873a",n,!0,{sourceMap:!1,shadowMode:!1})},1161:function(t,e,a){"use strict";a.r(e);var n=a("cc0f"),i=a("8144");for(var o in i)"default"!==o&&function(t){a.d(e,t,(function(){return i[t]}))}(o);a("252a8");var l,r=a("f0c5"),s=Object(r["a"])(i["default"],n["b"],n["c"],!1,null,"03b6d5de",null,!1,n["a"],l);e["default"]=s.exports},"1d31":function(t,e,a){"use strict";a("a9e3"),a("2ca0"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"uniLink",props:{href:{type:String,default:""},text:{type:String,default:""},download:{type:String,default:""},showUnderLine:{type:[Boolean,String],default:!0},copyTips:{type:String,default:"已自动复制网址，请在手机浏览器里粘贴该网址"},color:{type:String,default:"#999999"},fontSize:{type:[Number,String],default:14}},computed:{isShowA:function(){return this._isH5=!0,!(!this.isMail()&&!this.isTel()||!0!==this._isH5)}},created:function(){this._isH5=null},methods:{isMail:function(){return this.href.startsWith("mailto:")},isTel:function(){return this.href.startsWith("tel:")},openURL:function(){window.open(this.href)},makePhoneCall:function(t){uni.makePhoneCall({phoneNumber:t})}}};e.default=n},"252a8":function(t,e,a){"use strict";var n=a("0a50"),i=a.n(n);i.a},2785:function(t,e,a){"use strict";var n=a("dd26"),i=a.n(n);i.a},4655:function(t,e,a){"use strict";var n=a("dbc1"),i=a.n(n);i.a},4677:function(t,e,a){"use strict";a.r(e);var n=a("a197"),i=a.n(n);for(var o in n)"default"!==o&&function(t){a.d(e,t,(function(){return n[t]}))}(o);e["default"]=i.a},"4a24":function(t,e,a){"use strict";var n=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a("5c65")),o={data:function(){return{icons:i.default}},props:{tag:{type:Boolean,default:!0},fixWindow:{type:Boolean,default:!0}},methods:{setClipboardData:function(t,e){var a="uni-icons-"+e;this.tag&&"tag"===t&&(a='<view class="'+a+'"></view>'),uni.setClipboardData({data:a,success:function(t){uni.showToast({icon:"none",title:"复制 "+a+" 成功！"})},fail:function(t){uni.showModal({content:"复制 "+a+" 失败！",showCancel:!1})}})}}};e.default=o},5399:function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,".icon-modal-box[data-v-6b9593d6]{padding-top:var(--top-window-height)}.icon-modal[data-v-6b9593d6]{width:350px;background-color:#fff;height:500px;overflow-y:scroll}@media screen and (min-width:768px){.icon-modal-pc[data-v-6b9593d6]{width:600px}}",""]),t.exports=e},"54a6":function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,"\n.uni-link[data-v-03b6d5de]{cursor:pointer}\n.uni-link--withline[data-v-03b6d5de]{text-decoration:underline}",""]),t.exports=e},"585b":function(t,e,a){"use strict";a.r(e);var n=a("b26f"),i=a("4677");for(var o in i)"default"!==o&&function(t){a.d(e,t,(function(){return i[t]}))}(o);a("4655");var l,r=a("f0c5"),s=Object(r["a"])(i["default"],n["b"],n["c"],!1,null,"6b9593d6",null,!1,n["a"],l);e["default"]=s.exports},"5c65":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=["pulldown","refreshempty","back","forward","more","more-filled","scan","qq","weibo","weixin","pengyouquan","loop","refresh","refresh-filled","arrowthindown","arrowthinleft","arrowthinright","arrowthinup","undo-filled","undo","redo","redo-filled","bars","chatboxes","camera","chatboxes-filled","camera-filled","cart-filled","cart","checkbox-filled","checkbox","arrowleft","arrowdown","arrowright","smallcircle-filled","arrowup","circle","eye-filled","eye-slash-filled","eye-slash","eye","flag-filled","flag","gear-filled","reload","gear","hand-thumbsdown-filled","hand-thumbsdown","hand-thumbsup-filled","heart-filled","hand-thumbsup","heart","home","info","home-filled","info-filled","circle-filled","chat-filled","chat","mail-open-filled","email-filled","mail-open","email","checkmarkempty","list","locked-filled","locked","map-filled","map-pin","map-pin-ellipse","map","minus-filled","mic-filled","minus","micoff","mic","clear","smallcircle","close","closeempty","paperclip","paperplane","paperplane-filled","person-filled","contact-filled","person","contact","images-filled","phone","images","image","image-filled","location-filled","location","plus-filled","plus","plusempty","help-filled","help","navigate-filled","navigate","mic-slash-filled","search","settings","sound","sound-filled","spinner-cycle","download-filled","personadd-filled","videocam-filled","personadd","upload","upload-filled","starhalf","star-filled","star","trash","phone-filled","compose","videocam","trash-filled","download","chatbubble-filled","chatbubble","cloud-download","cloud-upload-filled","cloud-upload","cloud-download-filled","headphones","shop"];e.default=n},"687a":function(t,e,a){"use strict";a.r(e);var n=a("4a24"),i=a.n(n);for(var o in n)"default"!==o&&function(t){a.d(e,t,(function(){return n[t]}))}(o);e["default"]=i.a},8144:function(t,e,a){"use strict";a.r(e);var n=a("1d31"),i=a.n(n);for(var o in n)"default"!==o&&function(t){a.d(e,t,(function(){return n[t]}))}(o);e["default"]=i.a},9843:function(t,e,a){"use strict";var n;a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return n}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[a("v-uni-view",{staticClass:"uni-header"},[a("v-uni-view",{staticClass:"uni-group"},[a("v-uni-view",{staticClass:"uni-title"},[t._v(t._s(t.$t("demo.icons.title"))+"（uni-icons）")]),a("v-uni-view",{staticClass:"uni-sub-title"},[t._v(t._s(t.$t("demo.icons.describle")))])],1)],1),a("v-uni-view",{staticClass:"uni-container"},[a("v-uni-view",{staticClass:"icons"},t._l(t.icons,(function(e){return a("v-uni-view",{key:e,staticClass:"icon-item pointer"},[a("v-uni-view",{class:"uni-icons-"+e,on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.setClipboardData("tag",e)}}}),a("v-uni-text",{staticClass:"icon-text",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.setClipboardData("class",e)}}},[t._v("uni-icons-"+t._s(e))])],1)})),1)],1)],1)},o=[]},a197:function(t,e,a){"use strict";(function(t){var n=a("4ea4");a("caad"),a("d3b7"),a("2532"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a("5530")),o=n(a("cff1")),l=n(a("01d1")),r=a("2f62"),s=t.database(),u=(s.command,"opendb-admin-menus");function c(t){var e={};for(var a in o.default)t.includes(a)&&(e[a]=o.default[a]);return e}var d={components:{Icons:l.default},data:function(){return{formData:{menu_id:"",name:"",icon:"",url:"",sort:"",parent_id:"",permission:[],enable:null},rules:(0,i.default)({},c(["menu_id","name","icon","url","sort","parent_id","permission","enable"]))}},onLoad:function(t){var e=t.id;this.formDataId=e,this.getDetail(e)},methods:(0,i.default)((0,i.default)({},(0,r.mapActions)({init:"app/init"})),{},{submitForm:function(t){this.$refs.form.submit()},submit:function(t){var e=this,a=t.detail,n=a.value,i=a.errors;i||(uni.showLoading({title:"修改中...",mask:!0}),s.collection(u).doc(this.formDataId).update(n).then((function(t){uni.showToast({title:"修改成功"}),e.getOpenerEventChannel().emit("refreshData"),setTimeout((function(){return uni.navigateBack()}),500)})).catch((function(t){uni.showModal({content:t.message||"请求服务失败",showCancel:!1})})).finally((function(){uni.hideLoading()})))},getDetail:function(t){var e=this;uni.showLoading({mask:!0}),s.collection(u).where({_id:t}).get().then((function(t){var a=t.result.data[0];a&&(e.formData=a)})).catch((function(t){uni.showModal({content:t.message||"请求服务失败",showCancel:!1})})).finally((function(){uni.hideLoading()}))},showIconPopup:function(){this.$refs.iconPopup.open()}})};e.default=d}).call(this,a("a9ff")["default"])},b26f:function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return n}));var n={uniForms:a("9e5c").default,uniFormsItem:a("c87f").default,uniEasyinput:a("9bf6").default,uniLink:a("1161").default,uniDataCheckbox:a("df42").default,uniPopup:a("cf21").default},i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"uni-container"},[a("uni-forms",{ref:"form",attrs:{labelWidth:"80",rules:t.rules,validateTrigger:"bind"},on:{submit:function(e){arguments[0]=e=t.$handleEvent(e),t.submit.apply(void 0,arguments)}},model:{value:t.formData,callback:function(e){t.formData=e},expression:"formData"}},[a("uni-forms-item",{attrs:{name:"menu_id",label:"标识",required:!0}},[a("uni-easyinput",{attrs:{clearable:!1,placeholder:"请输入菜单项的ID，不可重复"},model:{value:t.formData.menu_id,callback:function(e){t.$set(t.formData,"menu_id",e)},expression:"formData.menu_id"}})],1),a("uni-forms-item",{attrs:{name:"name",label:"显示名称",required:!0}},[a("uni-easyinput",{attrs:{clearable:!1,placeholder:"请输入菜单名称"},model:{value:t.formData.name,callback:function(e){t.$set(t.formData,"name",e)},expression:"formData.name"}})],1),a("uni-forms-item",{staticStyle:{"margin-bottom":"40px"},attrs:{name:"icon",label:"图标 class"}},[a("uni-easyinput",{attrs:{clearable:!1,placeholder:"请输入菜单图标css样式类名"},model:{value:t.formData.icon,callback:function(e){t.$set(t.formData,"icon",e)},expression:"formData.icon"}},[a("span",{staticStyle:{color:"#007aff",cursor:"pointer","padding-right":"10px"},attrs:{slot:"right"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showIconPopup.apply(void 0,arguments)}},slot:"right"},[t._v("内置图标")])]),a("uni-link",{staticClass:"uni-form-item-tips",attrs:{"font-size":"12",href:"https://uniapp.dcloud.net.cn/uniCloud/admin?id=icon-%e5%9b%be%e6%a0%87",text:"如何使用自定义图标？"}})],1),a("uni-forms-item",{attrs:{name:"url",label:"页面URL"}},[a("uni-easyinput",{attrs:{clearable:!1,placeholder:"URL为空代表是目录而不是叶子节点"},model:{value:t.formData.url,callback:function(e){t.$set(t.formData,"url",e)},expression:"formData.url"}})],1),a("uni-forms-item",{attrs:{name:"sort",label:"序号"}},[a("uni-easyinput",{attrs:{clearable:!1,placeholder:"请输入菜单序号（越大越靠后）"},model:{value:t.formData.sort,callback:function(e){t.$set(t.formData,"sort",e)},expression:"formData.sort"}})],1),a("uni-forms-item",{attrs:{name:"parent_id",label:"父菜单标识"}},[a("uni-easyinput",{attrs:{clearable:!1,placeholder:"请输入父级菜单标识, 一级菜单不需要填写"},model:{value:t.formData.parent_id,callback:function(e){t.$set(t.formData,"parent_id",e)},expression:"formData.parent_id"}})],1),a("uni-forms-item",{staticClass:"flex-center-x",staticStyle:{"margin-bottom":"60px"},attrs:{name:"permission",label:"权限列表"}},[a("uni-data-checkbox",{attrs:{multiple:!0,collection:"uni-id-permissions",field:"permission_name as text, permission_id as value"},model:{value:t.formData.permission,callback:function(e){t.$set(t.formData,"permission",e)},expression:"formData.permission"}}),a("v-uni-view",{staticClass:"uni-form-item-tips"},[t._v("当用户拥有以上被选中的权限时，可以访问此菜单。建议仅对子菜单配置权限，父菜单会自动包含。如不选择权限，意味着仅超级管理员可访问本菜单")])],1),a("uni-forms-item",{attrs:{name:"enable",label:"是否启用"}},[a("v-uni-switch",{attrs:{checked:t.formData.enable},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.binddata("enable",e.detail.value)}}})],1),a("v-uni-view",{staticClass:"uni-button-group"},[a("v-uni-button",{staticClass:"uni-button",staticStyle:{width:"100px"},attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.submitForm.apply(void 0,arguments)}}},[t._v(t._s(t.$t("common.button.submit")))]),a("v-uni-navigator",{staticStyle:{"margin-left":"15px"},attrs:{"open-type":"navigateBack"}},[a("v-uni-button",{staticClass:"uni-button",staticStyle:{width:"100px"}},[t._v(t._s(t.$t("common.button.back")))])],1)],1),a("uni-popup",{ref:"iconPopup",staticClass:"icon-modal-box",attrs:{type:"center"}},[a("v-uni-view",{staticClass:"icon-modal icon-modal-pc"},[a("Icons",{attrs:{tag:!1,"fix-window":!1}})],1)],1)],1)],1)},o=[]},bff5:function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,"\n.icons[data-v-cdb35a60]{display:flex;flex-wrap:wrap}.icon-item[data-v-cdb35a60]{display:flex;width:16.6%;height:120px;font-size:30px;text-align:center;justify-content:center;align-items:center;flex-direction:column}.icon-item[data-v-cdb35a60]:hover,\n.icon-item:hover .icon-text[data-v-cdb35a60]{color:#007aff}.icon-text[data-v-cdb35a60]{color:#99a9bf;font-size:12px;text-align:center;height:1em;line-height:1em;margin-top:15px}\n@media only screen and (max-width:500px){.icon-item[data-v-cdb35a60]{width:33.3%}}\n",""]),t.exports=e},cc0f:function(t,e,a){"use strict";var n;a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return n}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.isShowA?a("a",{staticClass:"uni-link",class:{"uni-link--withline":!0===t.showUnderLine||"true"===t.showUnderLine},style:{color:t.color,fontSize:t.fontSize+"px"},attrs:{href:t.href,download:t.download}},[t._t("default",[t._v(t._s(t.text))])],2):a("v-uni-text",{staticClass:"uni-link",class:{"uni-link--withline":!0===t.showUnderLine||"true"===t.showUnderLine},style:{color:t.color,fontSize:t.fontSize+"px"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.openURL.apply(void 0,arguments)}}},[t._t("default",[t._v(t._s(t.text))])],2)},o=[]},cff1:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={menu_id:{rules:[{required:!0},{format:"string"}]},name:{rules:[{required:!0},{format:"string"}]},icon:{rules:[{format:"string"}]},url:{rules:[{format:"string"}]},sort:{rules:[{format:"int"}]},parent_id:{rules:[{format:"string"}]},permission:{rules:[{format:"array"}]},enable:{rules:[{format:"bool"}]}};e.default=n},dbc1:function(t,e,a){var n=a("5399");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("19cd22a6",n,!0,{sourceMap:!1,shadowMode:!1})},dd26:function(t,e,a){var n=a("bff5");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("265e0c00",n,!0,{sourceMap:!1,shadowMode:!1})}}]);