(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["uni_modules-opendb-feedback-pages-opendb-feedback-add"],{2670:function(t,e,a){"use strict";(function(t){var n=a("4ea4");a("caad"),a("b64b"),a("d3b7"),a("2532"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(a("5530")),i=a("73b0"),u=t.database(),o=(u.command,"opendb-feedback");function l(t){var e={};for(var a in i.validator)t.includes(a)&&(e[a]=i.validator[a]);return e}var s={data:function(){var t={type:0,content:"",imgs:[],contact:""};return{formData:t,formOptions:{type_localdata:[{value:0,text:"系统bug"},{value:1,text:"意见建议"},{value:2,text:"版权质疑"},{value:3,text:"我有话说"}]},rules:(0,r.default)({},l(Object.keys(t)))}},onReady:function(){this.$refs.form.setRules(this.rules)},methods:{submit:function(){var t=this;uni.showLoading({mask:!0}),this.$refs.form.validate().then((function(e){return t.submitForm(e)})).catch((function(){})).finally((function(){uni.hideLoading()}))},submitForm:function(t){var e=this;return u.collection(o).add(t).then((function(t){uni.showToast({title:"新增成功"}),e.getOpenerEventChannel().emit("refreshData"),setTimeout((function(){return uni.navigateBack()}),500)})).catch((function(t){uni.showModal({content:t.message||"请求服务失败",showCancel:!1})}))}}};e.default=s}).call(this,a("a9ff")["default"])},"4e15":function(t,e,a){"use strict";a.d(e,"b",(function(){return r})),a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){return n}));var n={uniForms:a("8d1e").default,uniFormsItem:a("e076").default,uniDataCheckbox:a("3cfc").default,uniFilePicker:a("ea53").default,uniEasyinput:a("aad2").default},r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"uni-container"},[a("uni-forms",{ref:"form",attrs:{value:t.formData,validateTrigger:"bind"}},[a("uni-forms-item",{attrs:{name:"type",label:"留言类型",required:!0}},[a("uni-data-checkbox",{attrs:{localdata:t.formOptions.type_localdata},model:{value:t.formData.type,callback:function(e){t.$set(t.formData,"type",e)},expression:"formData.type"}})],1),a("uni-forms-item",{attrs:{name:"content",label:"留言内容/回复内容",required:!0}},[a("v-uni-textarea",{staticClass:"uni-textarea-border",attrs:{trim:"right"},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.binddata("content",e.detail.value)}},model:{value:t.formData.content,callback:function(e){t.$set(t.formData,"content",e)},expression:"formData.content"}})],1),a("uni-forms-item",{attrs:{name:"imgs",label:"图片列表"}},[a("uni-file-picker",{attrs:{"file-mediatype":"image","return-type":"array"},model:{value:t.formData.imgs,callback:function(e){t.$set(t.formData,"imgs",e)},expression:"formData.imgs"}})],1),a("uni-forms-item",{attrs:{name:"contact",label:"联系人"}},[a("uni-easyinput",{attrs:{trim:"both"},model:{value:t.formData.contact,callback:function(e){t.$set(t.formData,"contact",e)},expression:"formData.contact"}})],1),a("v-uni-view",{staticClass:"uni-button-group"},[a("v-uni-button",{staticClass:"uni-button",staticStyle:{width:"100px"},attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.submit.apply(void 0,arguments)}}},[t._v("提交")]),a("v-uni-navigator",{staticStyle:{"margin-left":"15px"},attrs:{"open-type":"navigateBack"}},[a("v-uni-button",{staticClass:"uni-button",staticStyle:{width:"100px"}},[t._v("返回")])],1)],1)],1)],1)},i=[]},"600d":function(t,e,a){"use strict";a.r(e);var n=a("2670"),r=a.n(n);for(var i in n)"default"!==i&&function(t){a.d(e,t,(function(){return n[t]}))}(i);e["default"]=r.a},"73b0":function(t,e,a){"use strict";var n=a("4ea4");a("4d63"),a("ac1f"),a("25f0"),Object.defineProperty(e,"__esModule",{value:!0}),e.filterToWhere=l,e.enumConverter=e.validator=void 0;var r=n(a("3835")),i=n(a("b85c")),u={type:{rules:[{required:!0},{format:"int"},{range:[{value:0,text:"系统bug"},{value:1,text:"意见建议"},{value:2,text:"版权质疑"},{value:3,text:"我有话说"}]}],defaultValue:0,label:"留言类型"},content:{rules:[{required:!0},{format:"string"}],label:"留言内容/回复内容"},imgs:{rules:[{format:"array"},{arrayType:"file"}],label:"图片列表"},contact:{rules:[{format:"string"}],label:"联系人"}};e.validator=u;var o={type_valuetotext:{0:"系统bug",1:"意见建议",2:"版权质疑",3:"我有话说"}};function l(t,e){var a={};for(var n in t){var u=t[n],o=u.type,l=u.value;switch(o){case"search":"string"===typeof l&&l.length&&(a[n]=new RegExp(l));break;case"select":if(l.length){var s,c=[],f=(0,i.default)(l);try{for(f.s();!(s=f.n()).done;){var d=s.value;c.push(e.eq(d))}}catch(D){f.e(D)}finally{f.f()}a[n]=e.or(c)}break;case"range":if(l.length){var m=l[0],v=l[1];a[n]=e.and([e.gte(m),e.lte(v)])}break;case"date":if(l.length){var b=(0,r.default)(l,2),p=b[0],h=b[1],g=new Date(p),y=new Date(h);a[n]=e.and([e.gte(g),e.lte(y)])}break;case"timestamp":if(l.length){var k=(0,r.default)(l,2),x=k[0],w=k[1];a[n]=e.and([e.gte(x),e.lte(w)])}break}}return a}e.enumConverter=o},9067:function(t,e,a){"use strict";a.r(e);var n=a("4e15"),r=a("600d");for(var i in r)"default"!==i&&function(t){a.d(e,t,(function(){return r[t]}))}(i);var u,o=a("f0c5"),l=Object(o["a"])(r["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],u);e["default"]=l.exports}}]);