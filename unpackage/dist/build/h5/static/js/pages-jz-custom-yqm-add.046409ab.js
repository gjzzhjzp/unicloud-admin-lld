(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-jz-custom-yqm-add"],{"7e44":function(t,e,a){"use strict";a.r(e);var n=a("cc08"),r=a("b136");for(var u in r)"default"!==u&&function(t){a.d(e,t,(function(){return r[t]}))}(u);var l,s=a("f0c5"),i=Object(s["a"])(r["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],l);e["default"]=i.exports},b136:function(t,e,a){"use strict";a.r(e);var n=a("f474"),r=a.n(n);for(var u in n)"default"!==u&&function(t){a.d(e,t,(function(){return n[t]}))}(u);e["default"]=r.a},cc08:function(t,e,a){"use strict";a.d(e,"b",(function(){return r})),a.d(e,"c",(function(){return u})),a.d(e,"a",(function(){return n}));var n={uniForms:a("8d1e").default,uniFormsItem:a("e076").default,uniDataCheckbox:a("3cfc").default,uniEasyinput:a("aad2").default},r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"uni-container"},[a("uni-forms",{ref:"form",attrs:{value:t.formData,validateTrigger:"bind"}},[a("uni-forms-item",{attrs:{name:"user_name_type",label:"账号平台"}},[a("uni-data-checkbox",{attrs:{localdata:t.formOptions.user_name_type_localdata},model:{value:t.formData.user_name_type,callback:function(e){t.$set(t.formData,"user_name_type",e)},expression:"formData.user_name_type"}})],1),a("uni-forms-item",{attrs:{name:"user_type",label:"使用状态"}},[a("uni-data-checkbox",{attrs:{localdata:t.formOptions.user_type_localdata},model:{value:t.formData.user_type,callback:function(e){t.$set(t.formData,"user_type",e)},expression:"formData.user_type"}})],1),a("uni-forms-item",{attrs:{name:"user_name",label:"账号昵称"}},[a("uni-easyinput",{attrs:{placeholder:"账号昵称",trim:"both"},model:{value:t.formData.user_name,callback:function(e){t.$set(t.formData,"user_name",e)},expression:"formData.user_name"}})],1),a("uni-forms-item",{attrs:{name:"value",label:"邀请码"}},[a("uni-easyinput",{attrs:{placeholder:"邀请码",trim:"both"},model:{value:t.formData.value,callback:function(e){t.$set(t.formData,"value",e)},expression:"formData.value"}})],1),a("uni-forms-item",{attrs:{name:"status",label:"生效状态"}},[a("v-uni-switch",{attrs:{checked:t.formData.status},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.binddata("status",e.detail.value)}}})],1),a("uni-forms-item",{attrs:{name:"date",label:"创建时间"}},[a("uni-easyinput",{attrs:{placeholder:"创建时间"},model:{value:t.formData.date,callback:function(e){t.$set(t.formData,"date",e)},expression:"formData.date"}})],1),a("v-uni-view",{staticClass:"uni-button-group"},[a("v-uni-button",{staticClass:"uni-button",staticStyle:{width:"100px"},attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.submit.apply(void 0,arguments)}}},[t._v("提交")]),a("v-uni-navigator",{staticStyle:{"margin-left":"15px"},attrs:{"open-type":"navigateBack"}},[a("v-uni-button",{staticClass:"uni-button",staticStyle:{width:"100px"}},[t._v("返回")])],1)],1)],1)],1)},u=[]},f364:function(t,e,a){"use strict";var n=a("4ea4");a("4d63"),a("ac1f"),a("25f0"),Object.defineProperty(e,"__esModule",{value:!0}),e.filterToWhere=i,e.enumConverter=e.validator=void 0;var r=n(a("3835")),u=n(a("b85c")),l={user_name_type:{rules:[{format:"int"},{range:[{value:0,text:"微博"},{value:1,text:"抖音"}]}],defaultValue:0,label:"账号平台"},user_type:{rules:[{format:"int"},{range:[{value:0,text:"资源"},{value:1,text:"平台"}]}],defaultValue:0,label:"使用状态"},user_name:{rules:[{format:"string"}],label:"账号昵称"},value:{rules:[{format:"string"}],label:"邀请码"},status:{rules:[{format:"bool"}],defaultValue:!1,label:"生效状态"},date:{rules:[{format:"string"}],label:"创建时间"}};e.validator=l;var s={user_name_type_valuetotext:{0:"微博",1:"抖音"},user_type_valuetotext:{0:"资源",1:"平台"}};function i(t,e){var a={};for(var n in t){var l=t[n],s=l.type,i=l.value;switch(s){case"search":"string"===typeof i&&i.length&&(a[n]=new RegExp(i));break;case"select":if(i.length){var o,c=[],f=(0,u.default)(i);try{for(f.s();!(o=f.n()).done;){var m=o.value;c.push(e.eq(m))}}catch(k){f.e(k)}finally{f.f()}a[n]=e.or(c)}break;case"range":if(i.length){var d=i[0],v=i[1];a[n]=e.and([e.gte(d),e.lte(v)])}break;case"date":if(i.length){var p=(0,r.default)(i,2),b=p[0],_=p[1],h=new Date(b),y=new Date(_);a[n]=e.and([e.gte(h),e.lte(y)])}break;case"timestamp":if(i.length){var g=(0,r.default)(i,2),x=g[0],D=g[1];a[n]=e.and([e.gte(x),e.lte(D)])}break}}return a}e.enumConverter=s},f474:function(t,e,a){"use strict";(function(t){var n=a("4ea4");a("caad"),a("b64b"),a("d3b7"),a("2532"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(a("5530")),u=a("f364"),l=t.database(),s=(l.command,"jz-custom-yqm");function i(t){var e={};for(var a in u.validator)t.includes(a)&&(e[a]=u.validator[a]);return e}var o={data:function(){var t={user_name_type:0,user_type:0,user_name:"",value:"",status:!1,date:""};return{formData:t,formOptions:{user_name_type_localdata:[{value:0,text:"微博"},{value:1,text:"抖音"}],user_type_localdata:[{value:0,text:"资源"},{value:1,text:"平台"}]},rules:(0,r.default)({},i(Object.keys(t)))}},onReady:function(){this.$refs.form.setRules(this.rules)},methods:{submit:function(){var t=this;uni.showLoading({mask:!0}),this.$refs.form.validate().then((function(e){return t.submitForm(e)})).catch((function(){})).finally((function(){uni.hideLoading()}))},submitForm:function(t){var e=this;return l.collection(s).add(t).then((function(t){uni.showToast({title:"新增成功"}),e.getOpenerEventChannel().emit("refreshData"),setTimeout((function(){return uni.navigateBack()}),500)})).catch((function(t){uni.showModal({content:t.message||"请求服务失败",showCancel:!1})}))}}};e.default=o}).call(this,a("a9ff")["default"])}}]);