(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-login-login"],{"2df8":function(i,t,a){"use strict";var e=a("ab26"),n=a.n(e);n.a},"8b44":function(i,t,a){"use strict";a.r(t);var e=a("aed0"),n=a("b1ca");for(var o in n)"default"!==o&&function(i){a.d(t,i,(function(){return n[i]}))}(o);a("2df8");var s,r=a("f0c5"),c=Object(r["a"])(n["default"],e["b"],e["c"],!1,null,"1818fb08",null,!1,e["a"],s);t["default"]=c.exports},ab26:function(i,t,a){var e=a("cd4f");"string"===typeof e&&(e=[[i.i,e,""]]),e.locals&&(i.exports=e.locals);var n=a("4f06").default;n("cf17748c",e,!0,{sourceMap:!1,shadowMode:!1})},aed0:function(i,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"c",(function(){return o})),a.d(t,"a",(function(){return e}));var e={uniForms:a("8d1e").default,uniFormsItem:a("e076").default},n=function(){var i=this,t=i.$createElement,a=i._self._c||t;return a("v-uni-view",{staticClass:"login-box"},[a("v-uni-view",{staticClass:"admin-logo"},[a("v-uni-image",{attrs:{src:i.logo,mode:"heightFix"}})],1),a("v-uni-view",{staticClass:"uni-header no-padding"},[a("v-uni-view",{staticClass:"uni-title"},[i._v(i._s(i.$t("login.text.title")))])],1),a("v-uni-view",{staticClass:"uni-container"},[a("uni-forms",{ref:"form",attrs:{rules:i.rules},on:{submit:function(t){arguments[0]=t=i.$handleEvent(t),i.submit.apply(void 0,arguments)}},model:{value:i.formData,callback:function(t){i.formData=t},expression:"formData"}},[a("uni-forms-item",{attrs:{"left-icon":"person-filled",name:"username",labelWidth:"35"}},[a("v-uni-input",{ref:"usernameInput",staticClass:"uni-input-border",attrs:{type:"text",placeholder:i.$t("login.field.username")},on:{confirm:function(t){arguments[0]=t=i.$handleEvent(t),i.submitForm.apply(void 0,arguments)}},model:{value:i.formData.username,callback:function(t){i.$set(i.formData,"username",t)},expression:"formData.username"}})],1),a("uni-forms-item",{staticClass:"icon-container",attrs:{"left-icon":"locked-filled",name:"password",labelWidth:"35"}},[a("v-uni-input",{ref:"passwordInput",staticClass:"uni-input-border",attrs:{password:i.showPassword,placeholder:i.$t("login.field.password")},on:{confirm:function(t){arguments[0]=t=i.$handleEvent(t),i.submitForm.apply(void 0,arguments)}},model:{value:i.formData.password,callback:function(t){i.$set(i.formData,"password",t)},expression:"formData.password"}}),a("v-uni-text",{staticClass:"uni-icon-password-eye pointer",class:[i.showPassword?"":"uni-eye-active"],on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i.changePassword.apply(void 0,arguments)}}},[i._v("")])],1),i.needCaptcha?a("uni-forms-item",{staticClass:"icon-container",attrs:{"left-icon":"image",name:"captcha",labelWidth:"35"}},[a("v-uni-input",{ref:"captchaInput",staticClass:"uni-input-border",attrs:{type:"text",placeholder:i.$t("login.field.captcha")},on:{confirm:function(t){arguments[0]=t=i.$handleEvent(t),i.submitForm.apply(void 0,arguments)}},model:{value:i.formData.captcha,callback:function(t){i.$set(i.formData,"captcha",t)},expression:"formData.captcha"}}),a("v-uni-view",{staticClass:"admin-captcha-img pointer",on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i.createCaptcha.apply(void 0,arguments)}}},[i.captchaLoading?a("i",{staticClass:"uni-loading"}):a("img",{staticStyle:{width:"120px",height:"32px"},attrs:{src:i.captchaBase64}})])],1):i._e(),a("v-uni-view",{staticClass:"uni-button-group"},[a("v-uni-button",{staticClass:"uni-button uni-button-full",attrs:{type:"primary",loading:i.loading,disabled:i.loading},on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i.submitForm.apply(void 0,arguments)}}},[i._v(i._s(i.$t("login.button.login")))])],1)],1)],1)],1)},o=[]},b1ca:function(i,t,a){"use strict";a.r(t);var e=a("efeb"),n=a.n(e);for(var o in e)"default"!==o&&function(i){a.d(t,i,(function(){return e[i]}))}(o);t["default"]=n.a},cd4f:function(i,t,a){var e=a("24fb");t=e(!1),t.push([i.i,'uni-page-body[data-v-1818fb08]{width:100%;height:100%;display:flex;justify-content:center;background-color:#fff}.login-box[data-v-1818fb08]{position:relative;max-width:350px;flex:1;padding:140px 35px 0;margin:0 auto;overflow:hidden\n\t/* background-color: #F5F5F5; */}.underline[data-v-1818fb08]:hover{text-decoration:underline}.uni-tips[data-v-1818fb08]{display:flex;justify-content:flex-end;margin-top:15px}.uni-tips-text[data-v-1818fb08]{cursor:pointer;text-decoration:underline;font-size:13px;color:#007aff;opacity:.8}.no-padding[data-v-1818fb08]{padding:0}.admin-logo[data-v-1818fb08]{display:flex;justify-content:center;margin-bottom:30px}.admin-logo uni-image[data-v-1818fb08]{height:80px}.admin-captcha-img[data-v-1818fb08]{position:absolute;top:1px;right:0;display:flex;justify-content:center;align-items:center;background-color:#fff;width:100px;height:33px;border-left:1px #e5e5e5 solid;border-right:1px #e5e5e5 solid;border-radius:0 5px 5px 0;background-color:#f9f9f9}.admin-captcha-img img[data-v-1818fb08]{border-radius:5px}.uni-loading[data-v-1818fb08]:before{background:transparent url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAiIGhlaWdodD0iMTIwIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgxMDB2MTAwSDB6Ii8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjRTlFOUU5IiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTMwKSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iIzk4OTY5NyIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgzMCAxMDUuOTggNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjOUI5OTlBIiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKDYwIDc1Ljk4IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0EzQTFBMiIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSg5MCA2NSA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNBQkE5QUEiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoMTIwIDU4LjY2IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0IyQjJCMiIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgxNTAgNTQuMDIgNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjQkFCOEI5IiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKDE4MCA1MCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNDMkMwQzEiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTE1MCA0NS45OCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNDQkNCQ0IiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTEyMCA0MS4zNCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNEMkQyRDIiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTkwIDM1IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0RBREFEQSIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgtNjAgMjQuMDIgNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjRTJFMkUyIiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKC0zMCAtNS45OCA2NSkiLz48L3N2Zz4=") no-repeat}.uni-loading[data-v-1818fb08]{margin:0 auto;width:20px;height:20px;display:inline-block;vertical-align:middle;-webkit-animation:uni-loading-data-v-1818fb08 1s steps(12) infinite;animation:uni-loading-data-v-1818fb08 1s steps(12) infinite;background-size:100%}@-webkit-keyframes uni-loading-data-v-1818fb08{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes uni-loading-data-v-1818fb08{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}body.?%PAGE?%[data-v-1818fb08]{background-color:#fff}',""]),i.exports=t},efeb:function(i,t,a){"use strict";var e=a("4ea4");a("d3b7"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=e(a("5530")),o=a("2f62"),s=e(a("0f39")),r=a("788c"),c={deviceId:(0,r.getDeviceUUID)(),scene:"login"},u={data:function(){return(0,n.default)((0,n.default)({},s.default.navBar),{},{indexPage:s.default.index.url,showPassword:!0,loading:!1,formData:{username:"",password:"",captcha:""},captchaLoading:!1,needCaptcha:!1,captchaBase64:"",rules:{username:{rules:[{required:!0,errorMessage:"请输入账户"},{minLength:1,maxLength:30,errorMessage:"账户长度在{minLength}到{maxLength}个字符"}]},password:{rules:[{required:!0,errorMessage:"请输入正确的密码"},{minLength:6,errorMessage:"密码长度大于{minLength}个字符"}]},captcha:{rules:[{required:!0,errorMessage:"请输入验证码"}]}}})},mounted:function(){this.focus();var i=this;uni.getStorage({key:"lastUsername",success:function(t){i.formData.username=t.data}})},methods:(0,n.default)((0,n.default)((0,n.default)({},(0,o.mapActions)({init:"app/init"})),(0,o.mapMutations)({setToken:function(i,t){i("user/SET_TOKEN",t)}})),{},{submit:function(i){var t=this;if(!this.loading){var a=i.detail,e=a.errors,o=a.value;e||(this.$refs.usernameInput.$refs.input.blur(),this.$refs.passwordInput.$refs.input.blur(),this.$refs.captchaInput&&this.$refs.captchaInput.$refs.input.blur(),this.loading=!0,this.$request("login",(0,n.default)((0,n.default)({},o),{},{captchaOptions:c}),{functionName:"uni-id-cf",showModal:!1}).then((function(i){return t.setToken({token:i.token,tokenExpired:i.tokenExpired}),t.init().then((function(){uni.showToast({title:"登录成功",icon:"none"}),uni.setStorage({key:"lastUsername",data:o.username}),uni.redirectTo({url:t.indexPage})}))})).catch((function(i){i.needCaptcha&&(t.formData.captcha="",t.createCaptcha(),t.needCaptcha=!0);var a=t;uni.showModal({content:i.message||"请求服务失败",showCancel:!1,success:function(){10101===i.code&&a.$refs.usernameInput&&a.$refs.usernameInput.$refs.input.focus(),10102===i.code&&a.$refs.passwordInput&&a.$refs.passwordInput.$refs.input.focus(),10002===i.code&&a.$refs.captchaInput&&a.$refs.captchaInput.$refs.input.focus()}})})).finally((function(i){t.loading=!1})))}},createCaptcha:function(){var i=this;this.captchaLoading=!0,this.$request("createCaptcha",c,{functionName:"uni-id-cf"}).then((function(t){0===t.code&&(i.captchaBase64=t.captchaBase64)})).catch((function(i){})).finally((function(t){i.captchaLoading=!1}))},confirmForm:function(i,t){this.submitForm()},submitForm:function(){this.$refs.form.submit()},initAdmin:function(){uni.redirectTo({url:"/pages/demo/init/init"})},changePassword:function(){this.showPassword=!this.showPassword},focus:function(){this.$refs.usernameInput.$refs.input.focus()}})};t.default=u}}]);