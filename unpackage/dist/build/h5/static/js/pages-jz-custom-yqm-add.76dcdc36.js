(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-jz-custom-yqm-add"],{"01bc":function(t,e,a){"use strict";a.r(e);var n=a("cfa8"),r=a("7343");for(var u in r)"default"!==u&&function(t){a.d(e,t,(function(){return r[t]}))}(u);var i,s=a("f0c5"),o=Object(s["a"])(r["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],i);e["default"]=o.exports},7343:function(t,e,a){"use strict";a.r(e);var n=a("fdaf"),r=a.n(n);for(var u in n)"default"!==u&&function(t){a.d(e,t,(function(){return n[t]}))}(u);e["default"]=r.a},"83eb":function(t,e,a){"use strict";var n=a("4ea4");a("4d63"),a("ac1f"),a("25f0"),Object.defineProperty(e,"__esModule",{value:!0}),e.filterToWhere=o,e.enumConverter=e.validator=void 0;var r=n(a("3835")),u=n(a("b85c")),i={user_name_type:{rules:[{format:"int"},{range:[{value:0,text:"微博"},{value:1,text:"抖音"}]}],defaultValue:0,label:"账号平台"},user_name:{rules:[{format:"string"}],label:"账号昵称"},value:{rules:[{format:"string"}],label:"邀请码"},status:{rules:[{format:"bool"}],defaultValue:!1,label:"生效状态"}};e.validator=i;var s={user_name_type_valuetotext:{0:"微博",1:"抖音"}};function o(t,e){var a={};for(var n in t){var i=t[n],s=i.type,o=i.value;switch(s){case"search":"string"===typeof o&&o.length&&(a[n]=new RegExp(o));break;case"select":if(o.length){var l,f=[],c=(0,u.default)(o);try{for(c.s();!(l=c.n()).done;){var d=l.value;f.push(e.eq(d))}}catch(D){c.e(D)}finally{c.f()}a[n]=e.or(f)}break;case"range":if(o.length){var m=o[0],v=o[1];a[n]=e.and([e.gte(m),e.lte(v)])}break;case"date":if(o.length){var b=(0,r.default)(o,2),p=b[0],h=b[1],_=new Date(p),y=new Date(h);a[n]=e.and([e.gte(_),e.lte(y)])}break;case"timestamp":if(o.length){var g=(0,r.default)(o,2),w=g[0],k=g[1];a[n]=e.and([e.gte(w),e.lte(k)])}break}}return a}e.enumConverter=s},cfa8:function(t,e,a){"use strict";a.d(e,"b",(function(){return r})),a.d(e,"c",(function(){return u})),a.d(e,"a",(function(){return n}));var n={uniForms:a("9e5c").default,uniFormsItem:a("c87f").default,uniDataCheckbox:a("df42").default,uniEasyinput:a("9bf6").default},r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"uni-container"},[a("uni-forms",{ref:"form",attrs:{value:t.formData,validateTrigger:"bind"}},[a("uni-forms-item",{attrs:{name:"user_name_type",label:"账号平台"}},[a("uni-data-checkbox",{attrs:{localdata:t.formOptions.user_name_type_localdata},model:{value:t.formData.user_name_type,callback:function(e){t.$set(t.formData,"user_name_type",e)},expression:"formData.user_name_type"}})],1),a("uni-forms-item",{attrs:{name:"user_name",label:"账号昵称"}},[a("uni-easyinput",{attrs:{placeholder:"账号昵称",trim:"both"},model:{value:t.formData.user_name,callback:function(e){t.$set(t.formData,"user_name",e)},expression:"formData.user_name"}})],1),a("uni-forms-item",{attrs:{name:"value",label:"邀请码"}},[a("uni-easyinput",{attrs:{placeholder:"邀请码",trim:"both"},model:{value:t.formData.value,callback:function(e){t.$set(t.formData,"value",e)},expression:"formData.value"}})],1),a("uni-forms-item",{attrs:{name:"status",label:"生效状态"}},[a("v-uni-switch",{attrs:{checked:t.formData.status},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.binddata("status",e.detail.value)}}})],1),a("v-uni-view",{staticClass:"uni-button-group"},[a("v-uni-button",{staticClass:"uni-button",staticStyle:{width:"100px"},attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.submit.apply(void 0,arguments)}}},[t._v("提交")]),a("v-uni-navigator",{staticStyle:{"margin-left":"15px"},attrs:{"open-type":"navigateBack"}},[a("v-uni-button",{staticClass:"uni-button",staticStyle:{width:"100px"}},[t._v("返回")])],1)],1)],1)],1)},u=[]},fdaf:function(t,e,a){"use strict";(function(t){var n=a("4ea4");a("caad"),a("b64b"),a("d3b7"),a("2532"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(a("5530")),u=a("83eb"),i=t.database(),s=(i.command,"jz-custom-yqm");function o(t){var e={};for(var a in u.validator)t.includes(a)&&(e[a]=u.validator[a]);return e}var l={data:function(){var t={user_name_type:0,user_name:"",value:"",status:!1};return{formData:t,formOptions:{user_name_type_localdata:[{value:0,text:"微博"},{value:1,text:"抖音"}]},rules:(0,r.default)({},o(Object.keys(t)))}},onReady:function(){this.$refs.form.setRules(this.rules)},methods:{submit:function(){var t=this;uni.showLoading({mask:!0}),this.$refs.form.validate().then((function(e){return t.submitForm(e)})).catch((function(){})).finally((function(){uni.hideLoading()}))},submitForm:function(t){var e=this;return i.collection(s).add(t).then((function(t){uni.showToast({title:"新增成功"}),e.getOpenerEventChannel().emit("refreshData"),setTimeout((function(){return uni.navigateBack()}),500)})).catch((function(t){uni.showModal({content:t.message||"请求服务失败",showCancel:!1})}))}}};e.default=l}).call(this,a("a9ff")["default"])}}]);