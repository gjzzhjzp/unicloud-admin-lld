(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-demo-init-init"],{"446a":function(n,t,a){"use strict";var i=a("4943"),e=a.n(i);e.a},4943:function(n,t,a){var i=a("c70a");"string"===typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);var e=a("4f06").default;e("5c418574",i,!0,{sourceMap:!1,shadowMode:!1})},"782e":function(n,t,a){"use strict";var i=a("4ea4");a("d3b7"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e=i(a("5530")),s=a("2f62"),o=i(a("0f39")),r={data:function(){return{showPassword:!0,showPasswordAgain:!0,loading:!1,errorMessage:"",formData:{username:"admin",password:""},passwordConfirmation:"",rules:{username:{rules:[{required:!0,errorMessage:"请输入账户"},{minLength:3,maxLength:30,errorMessage:"账户长度在{minLength}到{maxLength}个字符"}]},password:{rules:[{required:!0,errorMessage:"请输入密码"},{minLength:6,errorMessage:"密码长度大于{minLength}个字符"}]},passwordConfirmation:{rules:[{required:!0,errorMessage:"请输入确认密码"},{minLength:6,errorMessage:"密码长度最小{minLength}个字符"}]}}}},mounted:function(){this.focus()},computed:(0,e.default)({},(0,s.mapState)("app",["appName","appid"])),methods:(0,e.default)((0,e.default)({},(0,s.mapMutations)({setToken:function(n,t){n("user/SET_TOKEN",t)}})),{},{register:function(n){var t=this;this.$refs.passwordInput.$refs.input.blur(),this.loading=!0,this.$request("registerAdmin",n,{functionName:"uni-id-cf"}).then((function(n){uni.showModal({title:"提示",content:n.code?n.message:"创建成功",showCancel:!1,success:function(n){n.confirm&&uni.navigateTo({url:"/pages/login/login"})}})})).catch((function(n){})).finally((function(n){t.loading=!1}))},submit:function(n){if(!this.loading){var t=n.detail,a=t.errors,i=t.value;a||(i.password===i.passwordConfirmation?(i.appName=this.appName,i.appid=this.appid,this.register(i)):this.errorMessage="两次输入密码不相同")}},confirmForm:function(n,t){this.binddata(n,t),this.submitForm()},submitForm:function(){this.errorMessage="",this.$refs.form.submit()},back:function(){uni.redirectTo({url:o.default.login.url})},changePassword:function(){this.showPassword=!this.showPassword},changePasswordAgain:function(){this.showPasswordAgain=!this.showPasswordAgain},focus:function(){this.$refs.usernameInput.$refs.input.focus()}})};t.default=r},"7d22":function(n,t,a){"use strict";a.d(t,"b",(function(){return e})),a.d(t,"c",(function(){return s})),a.d(t,"a",(function(){return i}));var i={uniForms:a("8d1e").default,uniFormsItem:a("e076").default},e=function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("v-uni-view",{staticClass:"login-box"},[a("v-uni-view",{staticClass:"uni-header"},[a("v-uni-view",{staticClass:"uni-group"},[a("v-uni-view",{staticClass:"uni-title"},[n._v("创建超级管理员")])],1)],1),a("v-uni-view",{staticClass:"uni-container"},[a("uni-forms",{ref:"form",attrs:{validateTrigger:"bind",rules:n.rules},on:{submit:function(t){arguments[0]=t=n.$handleEvent(t),n.submit.apply(void 0,arguments)}}},[a("uni-forms-item",{attrs:{"left-icon":"person",name:"username",labelWidth:"35"}},[a("v-uni-input",{ref:"usernameInput",staticClass:"uni-input-border",attrs:{type:"text",placeholder:"账户"},on:{blur:function(t){arguments[0]=t=n.$handleEvent(t),n.binddata("username",t.detail.value)}}})],1),a("uni-forms-item",{attrs:{"left-icon":"locked",name:"password",labelWidth:"35"}},[a("v-uni-input",{staticClass:"uni-input-border",attrs:{password:n.showPassword,placeholder:"密码"},on:{blur:function(t){arguments[0]=t=n.$handleEvent(t),n.binddata("password",t.detail.value)}}}),a("v-uni-text",{staticClass:"uni-icon-password-eye pointer",class:[n.showPassword?"":"uni-eye-active"],on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.changePassword.apply(void 0,arguments)}}},[n._v("")])],1),a("uni-forms-item",{attrs:{"left-icon":"locked",name:"passwordConfirmation",labelWidth:"35",errorMessage:n.errorMessage}},[a("v-uni-input",{ref:"passwordInput",staticClass:"uni-input-border",attrs:{password:n.showPasswordAgain,placeholder:"确认密码"},on:{confirm:function(t){arguments[0]=t=n.$handleEvent(t),n.confirmForm("passwordConfirmation",t.detail.value)},blur:function(t){arguments[0]=t=n.$handleEvent(t),n.binddata("passwordConfirmation",t.detail.value)}}}),a("v-uni-text",{staticClass:"uni-icon-password-eye pointer",class:[n.showPasswordAgain?"":"uni-eye-active"],on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.changePasswordAgain.apply(void 0,arguments)}}},[n._v("")])],1),a("v-uni-view",{staticClass:"uni-group",staticStyle:{"margin-top":"30px"}},[a("v-uni-button",{staticClass:"uni-button",attrs:{type:"primary",loading:n.loading,disabled:n.loading},on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.submitForm.apply(void 0,arguments)}}},[n._v("创建")]),a("v-uni-button",{staticClass:"uni-button",attrs:{type:"default"},on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.back.apply(void 0,arguments)}}},[n._v("返回")])],1)],1)],1)],1)},s=[]},a3c4:function(n,t,a){"use strict";a.r(t);var i=a("7d22"),e=a("bd5a");for(var s in e)"default"!==s&&function(n){a.d(t,n,(function(){return e[n]}))}(s);a("446a");var o,r=a("f0c5"),u=Object(r["a"])(e["default"],i["b"],i["c"],!1,null,"d02ca8d0",null,!1,i["a"],o);t["default"]=u.exports},bd5a:function(n,t,a){"use strict";a.r(t);var i=a("782e"),e=a.n(i);for(var s in i)"default"!==s&&function(n){a.d(t,n,(function(){return i[n]}))}(s);t["default"]=e.a},c70a:function(n,t,a){var i=a("24fb");t=i(!1),t.push([n.i,"uni-page-body[data-v-d02ca8d0]{width:100%;height:100%;display:flex;\n\t/* align-items: center; */justify-content:center;background-color:#fff;\n}.login-box[data-v-d02ca8d0]{position:relative;max-width:420px;flex:1;padding:140px 35px 0;margin:0 auto;overflow:hidden}.uni-button[data-v-d02ca8d0]{width:184px}body.?%PAGE?%[data-v-d02ca8d0]{background-color:#fff}",""]),n.exports=t}}]);