(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-system-menu-edit","pages-demo-icons-icons"],{"0243":function(e,t,a){"use strict";var n=a("7410"),i=a.n(n);i.a},"3d2e":function(e,t,a){"use strict";a.r(t);var n=a("75bd"),i=a.n(n);for(var o in n)"default"!==o&&function(e){a.d(t,e,(function(){return n[e]}))}(o);t["default"]=i.a},"58c6":function(e,t,a){var n=a("ed14");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var i=a("4f06").default;i("c22f3a52",n,!0,{sourceMap:!1,shadowMode:!1})},"651d":function(e,t,a){"use strict";a.r(t);var n=a("dbd9"),i=a.n(n);for(var o in n)"default"!==o&&function(e){a.d(t,e,(function(){return n[e]}))}(o);t["default"]=i.a},"65fc":function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return o})),a.d(t,"a",(function(){return n}));var n={uniForms:a("8d1e").default,uniFormsItem:a("e076").default,uniEasyinput:a("aad2").default,uniLink:a("da39").default,uniDataCheckbox:a("3cfc").default,uniPopup:a("e73c").default},i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticClass:"uni-container"},[a("uni-forms",{ref:"form",attrs:{labelWidth:"80",rules:e.rules,validateTrigger:"bind"},on:{submit:function(t){arguments[0]=t=e.$handleEvent(t),e.submit.apply(void 0,arguments)}},model:{value:e.formData,callback:function(t){e.formData=t},expression:"formData"}},[a("uni-forms-item",{attrs:{name:"menu_id",label:"标识",required:!0}},[a("uni-easyinput",{attrs:{clearable:!1,placeholder:"请输入菜单项的ID，不可重复"},model:{value:e.formData.menu_id,callback:function(t){e.$set(e.formData,"menu_id",t)},expression:"formData.menu_id"}})],1),a("uni-forms-item",{attrs:{name:"name",label:"显示名称",required:!0}},[a("uni-easyinput",{attrs:{clearable:!1,placeholder:"请输入菜单名称"},model:{value:e.formData.name,callback:function(t){e.$set(e.formData,"name",t)},expression:"formData.name"}})],1),a("uni-forms-item",{staticStyle:{"margin-bottom":"40px"},attrs:{name:"icon",label:"图标 class"}},[a("uni-easyinput",{attrs:{clearable:!1,placeholder:"请输入菜单图标css样式类名"},model:{value:e.formData.icon,callback:function(t){e.$set(e.formData,"icon",t)},expression:"formData.icon"}},[a("span",{staticStyle:{color:"#007aff",cursor:"pointer","padding-right":"10px"},attrs:{slot:"right"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.showIconPopup.apply(void 0,arguments)}},slot:"right"},[e._v("内置图标")])]),a("uni-link",{staticClass:"uni-form-item-tips",attrs:{"font-size":"12",href:"https://uniapp.dcloud.net.cn/uniCloud/admin?id=icon-%e5%9b%be%e6%a0%87",text:"如何使用自定义图标？"}})],1),a("uni-forms-item",{attrs:{name:"url",label:"页面URL"}},[a("uni-easyinput",{attrs:{clearable:!1,placeholder:"URL为空代表是目录而不是叶子节点"},model:{value:e.formData.url,callback:function(t){e.$set(e.formData,"url",t)},expression:"formData.url"}})],1),a("uni-forms-item",{attrs:{name:"sort",label:"序号"}},[a("uni-easyinput",{attrs:{clearable:!1,placeholder:"请输入菜单序号（越大越靠后）"},model:{value:e.formData.sort,callback:function(t){e.$set(e.formData,"sort",t)},expression:"formData.sort"}})],1),a("uni-forms-item",{attrs:{name:"parent_id",label:"父菜单标识"}},[a("uni-easyinput",{attrs:{clearable:!1,placeholder:"请输入父级菜单标识, 一级菜单不需要填写"},model:{value:e.formData.parent_id,callback:function(t){e.$set(e.formData,"parent_id",t)},expression:"formData.parent_id"}})],1),a("uni-forms-item",{staticClass:"flex-center-x",staticStyle:{"margin-bottom":"60px"},attrs:{name:"permission",label:"权限列表"}},[a("uni-data-checkbox",{attrs:{multiple:!0,collection:"uni-id-permissions",field:"permission_name as text, permission_id as value"},model:{value:e.formData.permission,callback:function(t){e.$set(e.formData,"permission",t)},expression:"formData.permission"}}),a("v-uni-view",{staticClass:"uni-form-item-tips"},[e._v("当用户拥有以上被选中的权限时，可以访问此菜单。建议仅对子菜单配置权限，父菜单会自动包含。如不选择权限，意味着仅超级管理员可访问本菜单")])],1),a("uni-forms-item",{attrs:{name:"enable",label:"是否启用"}},[a("v-uni-switch",{attrs:{checked:e.formData.enable},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.binddata("enable",t.detail.value)}}})],1),a("v-uni-view",{staticClass:"uni-button-group"},[a("v-uni-button",{staticClass:"uni-button",staticStyle:{width:"100px"},attrs:{type:"primary"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.submitForm.apply(void 0,arguments)}}},[e._v(e._s(e.$t("common.button.submit")))]),a("v-uni-navigator",{staticStyle:{"margin-left":"15px"},attrs:{"open-type":"navigateBack"}},[a("v-uni-button",{staticClass:"uni-button",staticStyle:{width:"100px"}},[e._v(e._s(e.$t("common.button.back")))])],1)],1),a("uni-popup",{ref:"iconPopup",staticClass:"icon-modal-box",attrs:{type:"center"}},[a("v-uni-view",{staticClass:"icon-modal icon-modal-pc"},[a("Icons",{attrs:{tag:!1,"fix-window":!1}})],1)],1)],1)],1)},o=[]},"73e8":function(e,t,a){var n=a("24fb");t=n(!1),t.push([e.i,"\n.icons[data-v-761ed829]{display:flex;flex-wrap:wrap}.icon-item[data-v-761ed829]{display:flex;width:16.6%;height:120px;font-size:30px;text-align:center;justify-content:center;align-items:center;flex-direction:column}.icon-item[data-v-761ed829]:hover,\n.icon-item:hover .icon-text[data-v-761ed829]{color:#007aff}.icon-text[data-v-761ed829]{color:#99a9bf;font-size:12px;text-align:center;height:1em;line-height:1em;margin-top:15px}\n@media only screen and (max-width:500px){.icon-item[data-v-761ed829]{width:33.3%}}\n",""]),e.exports=t},7410:function(e,t,a){var n=a("d1f1");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var i=a("4f06").default;i("198692d4",n,!0,{sourceMap:!1,shadowMode:!1})},"75bd":function(e,t,a){"use strict";(function(e){var n=a("4ea4");a("caad"),a("d3b7"),a("2532"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(a("5530")),o=n(a("caf8")),l=n(a("be5e")),r=a("26cb"),s=e.database(),u=(s.command,"opendb-admin-menus");function c(e){var t={};for(var a in o.default)e.includes(a)&&(t[a]=o.default[a]);return t}var d={components:{Icons:l.default},data:function(){return{formData:{menu_id:"",name:"",icon:"",url:"",sort:"",parent_id:"",permission:[],enable:null},rules:(0,i.default)({},c(["menu_id","name","icon","url","sort","parent_id","permission","enable"]))}},onLoad:function(e){var t=e.id;this.formDataId=t,this.getDetail(t)},methods:(0,i.default)((0,i.default)({},(0,r.mapActions)({init:"app/init"})),{},{submitForm:function(e){this.$refs.form.submit()},submit:function(e){var t=this,a=e.detail,n=a.value,i=a.errors;i||(uni.showLoading({title:"修改中...",mask:!0}),s.collection(u).doc(this.formDataId).update(n).then((function(e){uni.showToast({title:"修改成功"}),t.getOpenerEventChannel().emit("refreshData"),setTimeout((function(){return uni.navigateBack()}),500)})).catch((function(e){uni.showModal({content:e.message||"请求服务失败",showCancel:!1})})).finally((function(){uni.hideLoading()})))},getDetail:function(e){var t=this;uni.showLoading({mask:!0}),s.collection(u).where({_id:e}).get().then((function(e){var a=e.result.data[0];a&&(t.formData=a)})).catch((function(e){uni.showModal({content:e.message||"请求服务失败",showCancel:!1})})).finally((function(){uni.hideLoading()}))},showIconPopup:function(){this.$refs.iconPopup.open()}})};t.default=d}).call(this,a("a9ff")["default"])},7955:function(e,t,a){"use strict";var n;a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return o})),a.d(t,"a",(function(){return n}));var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",[a("v-uni-view",{staticClass:"uni-header"},[a("v-uni-view",{staticClass:"uni-group"},[a("v-uni-view",{staticClass:"uni-title"},[e._v(e._s(e.$t("demo.icons.title"))+"（uni-icons）")]),a("v-uni-view",{staticClass:"uni-sub-title"},[e._v(e._s(e.$t("demo.icons.describle")))])],1)],1),a("v-uni-view",{staticClass:"uni-container"},[a("v-uni-view",{staticClass:"icons"},e._l(e.icons,(function(t){return a("v-uni-view",{key:t,staticClass:"icon-item pointer"},[a("v-uni-view",{class:"uni-icons-"+t,on:{click:function(a){arguments[0]=a=e.$handleEvent(a),e.setClipboardData("tag",t)}}}),a("v-uni-text",{staticClass:"icon-text",on:{click:function(a){arguments[0]=a=e.$handleEvent(a),e.setClipboardData("class",t)}}},[e._v("uni-icons-"+e._s(t))])],1)})),1)],1)],1)},o=[]},"82a2":function(e,t,a){"use strict";a.r(t);var n=a("af1b"),i=a.n(n);for(var o in n)"default"!==o&&function(e){a.d(t,e,(function(){return n[e]}))}(o);t["default"]=i.a},aa3b:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=["pulldown","refreshempty","back","forward","more","more-filled","scan","qq","weibo","weixin","pengyouquan","loop","refresh","refresh-filled","arrowthindown","arrowthinleft","arrowthinright","arrowthinup","undo-filled","undo","redo","redo-filled","bars","chatboxes","camera","chatboxes-filled","camera-filled","cart-filled","cart","checkbox-filled","checkbox","arrowleft","arrowdown","arrowright","smallcircle-filled","arrowup","circle","eye-filled","eye-slash-filled","eye-slash","eye","flag-filled","flag","gear-filled","reload","gear","hand-thumbsdown-filled","hand-thumbsdown","hand-thumbsup-filled","heart-filled","hand-thumbsup","heart","home","info","home-filled","info-filled","circle-filled","chat-filled","chat","mail-open-filled","email-filled","mail-open","email","checkmarkempty","list","locked-filled","locked","map-filled","map-pin","map-pin-ellipse","map","minus-filled","mic-filled","minus","micoff","mic","clear","smallcircle","close","closeempty","paperclip","paperplane","paperplane-filled","person-filled","contact-filled","person","contact","images-filled","phone","images","image","image-filled","location-filled","location","plus-filled","plus","plusempty","help-filled","help","navigate-filled","navigate","mic-slash-filled","search","settings","sound","sound-filled","spinner-cycle","download-filled","personadd-filled","videocam-filled","personadd","upload","upload-filled","starhalf","star-filled","star","trash","phone-filled","compose","videocam","trash-filled","download","chatbubble-filled","chatbubble","cloud-download","cloud-upload-filled","cloud-upload","cloud-download-filled","headphones","shop"];t.default=n},aeeb:function(e,t,a){"use strict";a.r(t);var n=a("65fc"),i=a("3d2e");for(var o in i)"default"!==o&&function(e){a.d(t,e,(function(){return i[e]}))}(o);a("fdec");var l,r=a("f0c5"),s=Object(r["a"])(i["default"],n["b"],n["c"],!1,null,"6b9593d6",null,!1,n["a"],l);t["default"]=s.exports},af1b:function(e,t,a){"use strict";a("a9e3"),a("2ca0"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={name:"uniLink",props:{href:{type:String,default:""},text:{type:String,default:""},download:{type:String,default:""},showUnderLine:{type:[Boolean,String],default:!0},copyTips:{type:String,default:"已自动复制网址，请在手机浏览器里粘贴该网址"},color:{type:String,default:"#999999"},fontSize:{type:[Number,String],default:14}},computed:{isShowA:function(){return this._isH5=!0,!(!this.isMail()&&!this.isTel()||!0!==this._isH5)}},created:function(){this._isH5=null},methods:{isMail:function(){return this.href.startsWith("mailto:")},isTel:function(){return this.href.startsWith("tel:")},openURL:function(){window.open(this.href)},makePhoneCall:function(e){uni.makePhoneCall({phoneNumber:e})}}};t.default=n},be5e:function(e,t,a){"use strict";a.r(t);var n=a("7955"),i=a("651d");for(var o in i)"default"!==o&&function(e){a.d(t,e,(function(){return i[e]}))}(o);a("df9e");var l,r=a("f0c5"),s=Object(r["a"])(i["default"],n["b"],n["c"],!1,null,"761ed829",null,!1,n["a"],l);t["default"]=s.exports},caf8:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={menu_id:{rules:[{required:!0},{format:"string"}]},name:{rules:[{required:!0},{format:"string"}]},icon:{rules:[{format:"string"}]},url:{rules:[{format:"string"}]},sort:{rules:[{format:"int"}]},parent_id:{rules:[{format:"string"}]},permission:{rules:[{format:"array"}]},enable:{rules:[{format:"bool"}]}};t.default=n},ccde:function(e,t,a){var n=a("73e8");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var i=a("4f06").default;i("cb1dced4",n,!0,{sourceMap:!1,shadowMode:!1})},d1f1:function(e,t,a){var n=a("24fb");t=n(!1),t.push([e.i,"\n.uni-link[data-v-604a1870]{cursor:pointer}\n.uni-link--withline[data-v-604a1870]{text-decoration:underline}",""]),e.exports=t},da39:function(e,t,a){"use strict";a.r(t);var n=a("eaf3"),i=a("82a2");for(var o in i)"default"!==o&&function(e){a.d(t,e,(function(){return i[e]}))}(o);a("0243");var l,r=a("f0c5"),s=Object(r["a"])(i["default"],n["b"],n["c"],!1,null,"604a1870",null,!1,n["a"],l);t["default"]=s.exports},dbd9:function(e,t,a){"use strict";var n=a("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(a("aa3b")),o={data:function(){return{icons:i.default}},props:{tag:{type:Boolean,default:!0},fixWindow:{type:Boolean,default:!0}},methods:{setClipboardData:function(e,t){var a="uni-icons-"+t;this.tag&&"tag"===e&&(a='<view class="'+a+'"></view>'),uni.setClipboardData({data:a,success:function(e){uni.showToast({icon:"none",title:"复制 "+a+" 成功！"})},fail:function(e){uni.showModal({content:"复制 "+a+" 失败！",showCancel:!1})}})}}};t.default=o},df9e:function(e,t,a){"use strict";var n=a("ccde"),i=a.n(n);i.a},eaf3:function(e,t,a){"use strict";var n;a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return o})),a.d(t,"a",(function(){return n}));var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.isShowA?a("a",{staticClass:"uni-link",class:{"uni-link--withline":!0===e.showUnderLine||"true"===e.showUnderLine},style:{color:e.color,fontSize:e.fontSize+"px"},attrs:{href:e.href,download:e.download}},[e._t("default",[e._v(e._s(e.text))])],2):a("v-uni-text",{staticClass:"uni-link",class:{"uni-link--withline":!0===e.showUnderLine||"true"===e.showUnderLine},style:{color:e.color,fontSize:e.fontSize+"px"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.openURL.apply(void 0,arguments)}}},[e._t("default",[e._v(e._s(e.text))])],2)},o=[]},ed14:function(e,t,a){var n=a("24fb");t=n(!1),t.push([e.i,".icon-modal-box[data-v-6b9593d6]{padding-top:var(--top-window-height)}.icon-modal[data-v-6b9593d6]{width:350px;background-color:#fff;height:500px;overflow-y:scroll}@media screen and (min-width:768px){.icon-modal-pc[data-v-6b9593d6]{width:600px}}",""]),e.exports=t},fdec:function(e,t,a){"use strict";var n=a("58c6"),i=a.n(n);i.a}}]);