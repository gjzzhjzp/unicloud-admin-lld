(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-jz-opendb-resources-add"],{"0061":function(a,t,e){"use strict";e.d(t,"b",(function(){return n})),e.d(t,"c",(function(){return i})),e.d(t,"a",(function(){return r}));var r={uniForms:e("8d1e").default,uniFormsItem:e("e076").default,uniEasyinput:e("aad2").default,yunmiaoCascader:e("a40d").default,uniDataCheckbox:e("3cfc").default,uniFilePicker:e("ea53").default},n=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("v-uni-view",{staticClass:"uni-container"},[e("uni-forms",{ref:"form",attrs:{value:a.formData,validateTrigger:"bind"}},[e("uni-forms-item",{attrs:{name:"title",label:"标题",required:!0}},[e("uni-easyinput",{attrs:{placeholder:"请输入标题",trim:"both"},model:{value:a.formData.title,callback:function(t){a.$set(a.formData,"title",t)},expression:"formData.title"}})],1),e("uni-forms-item",{attrs:{name:"author",label:"来源",required:!0}},[e("uni-easyinput",{attrs:{placeholder:"请输入来源",trim:"both"},model:{value:a.formData.author,callback:function(t){a.$set(a.formData,"author",t)},expression:"formData.author"}})],1),e("uni-forms-item",{attrs:{name:"categorieszw",label:"分类"}},[e("uni-easyinput",{attrs:{placeholder:"请选择分类",trim:"both"},on:{focus:function(t){arguments[0]=t=a.$handleEvent(t),a.opencategories.apply(void 0,arguments)}},model:{value:a.formData.categorieszw,callback:function(t){a.$set(a.formData,"categorieszw",t)},expression:"formData.categorieszw"}}),e("yunmiao-cascader",{ref:"cascader",attrs:{"select-value":a.formData.categories,"value-name":"flbm",cascaderData:a.cascaderData},on:{confirem:function(t){arguments[0]=t=a.$handleEvent(t),a.cascaderConfirem.apply(void 0,arguments)}}})],1),e("uni-forms-item",{attrs:{name:"labels",label:"标签"}},[e("uni-easyinput",{attrs:{placeholder:"多个标签以逗号隔开",trim:"both"},model:{value:a.formData.labels,callback:function(t){a.$set(a.formData,"labels",t)},expression:"formData.labels"}})],1),e("uni-forms-item",{attrs:{name:"article_status",label:"文章状态"}},[e("uni-data-checkbox",{attrs:{localdata:a.formOptions.article_status_localdata},model:{value:a.formData.article_status,callback:function(t){a.$set(a.formData,"article_status",t)},expression:"formData.article_status"}})],1),e("uni-forms-item",{attrs:{name:"avatar",label:"封面大图",required:!0}},[e("uni-file-picker",{attrs:{limit:"1","file-mediatype":"image","return-type":"array"},model:{value:a.formData.avatar,callback:function(t){a.$set(a.formData,"avatar",t)},expression:"formData.avatar"}})],1),e("uni-forms-item",{attrs:{name:"zy_gs",label:"资源类型"}},[e("uni-data-checkbox",{attrs:{localdata:a.formOptions.zy_gs_localdata},model:{value:a.formData.zy_gs,callback:function(t){a.$set(a.formData,"zy_gs",t)},expression:"formData.zy_gs"}})],1),e("uni-forms-item",{attrs:{name:"resources",label:"附件资源"}},[0==a.formData.zy_gs?[e("uni-file-picker",{attrs:{"file-mediatype":"image","return-type":"array"},model:{value:a.formData.resources,callback:function(t){a.$set(a.formData,"resources",t)},expression:"formData.resources"}})]:[e("uni-file-picker",{attrs:{"file-mediatype":"all",limit:1,"return-type":"array"},model:{value:a.formData.resources,callback:function(t){a.$set(a.formData,"resources",t)},expression:"formData.resources"}})]],2),e("uni-forms-item",{attrs:{name:"aliyun_dz",label:"外链"}},[e("uni-easyinput",{attrs:{placeholder:"请输入外链地址",trim:"both"},model:{value:a.formData.aliyun_dz,callback:function(t){a.$set(a.formData,"aliyun_dz",t)},expression:"formData.aliyun_dz"}})],1),e("uni-forms-item",{attrs:{name:"excerpt",label:"内容"}},[e("uni-easyinput",{attrs:{placeholder:"请输入内容",trim:"both"},model:{value:a.formData.excerpt,callback:function(t){a.$set(a.formData,"excerpt",t)},expression:"formData.excerpt"}})],1),e("uni-forms-item",{attrs:{name:"is_grant",label:"是否授权"}},[e("uni-data-checkbox",{attrs:{localdata:a.formOptions.is_grant_localdata},model:{value:a.formData.is_grant,callback:function(t){a.$set(a.formData,"is_grant",t)},expression:"formData.is_grant"}})],1),e("uni-forms-item",{attrs:{name:"is_encryption",label:"是否加密"}},[e("uni-data-checkbox",{attrs:{localdata:a.formOptions.is_encryption_localdata},model:{value:a.formData.is_encryption,callback:function(t){a.$set(a.formData,"is_encryption",t)},expression:"formData.is_encryption"}})],1),e("v-uni-view",{staticClass:"uni-button-group"},[e("v-uni-button",{staticClass:"uni-button",staticStyle:{width:"100px"},attrs:{type:"primary"},on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.submit.apply(void 0,arguments)}}},[a._v("提交")]),e("v-uni-navigator",{staticStyle:{"margin-left":"15px"},attrs:{"open-type":"navigateBack"}},[e("v-uni-button",{staticClass:"uni-button",staticStyle:{width:"100px"}},[a._v("返回")])],1)],1)],1)],1)},i=[]},b557:function(a,t,e){"use strict";(function(a){var r=e("4ea4");e("caad"),e("b64b"),e("d3b7"),e("2532"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(e("5530")),i=e("a43c"),o=r(e("aabf")),s=r(e("a40d")),l=a.database(),u=(l.command,"jz-opendb-resources");function c(a){var t={};for(var e in i.validator)a.includes(e)&&(t[e]=i.validator[e]);return t}var f={mixins:[o.default],components:{yunmiaoCascader:s.default},data:function(){var a={title:"",author:"",categories:"",categorieszw:"",labels:"",article_status:0,avatar:null,zy_gs:0,resources:[],aliyun_dz:"",excerpt:"",is_grant:0,is_encryption:0};return{formData:a,formOptions:{article_status_localdata:[{value:0,text:"锁定"},{value:1,text:"启用"}],zy_gs_localdata:[{value:0,text:"图片"},{value:1,text:"视频"},{value:2,text:"音乐"},{value:3,text:"文章"}],is_grant_localdata:[{value:0,text:"未授权"},{value:1,text:"已授权"}],is_encryption_localdata:[{value:0,text:"不加密"},{value:1,text:"加密"}]},rules:(0,n.default)({},c(Object.keys(a)))}},onReady:function(){this.$refs.form.setRules(this.rules)},methods:{submit:function(){var a=this;uni.showLoading({mask:!0}),this.$refs.form.validate().then((function(t){return a.submitForm(t)})).catch((function(){})).finally((function(){uni.hideLoading()}))},submitForm:function(a){var t=this;return Object.assign(a,{user_id:l.getCloudEnv("$cloudEnv_uid")}),console.log("value",a),l.collection(u).add(a).then((function(a){uni.showToast({title:"新增成功"}),t.getOpenerEventChannel().emit("refreshData"),setTimeout((function(){return uni.navigateBack()}),500)})).catch((function(a){uni.showModal({content:a.message||"请求服务失败",showCancel:!1})}))}}};t.default=f}).call(this,e("a9ff")["default"])},d1e0:function(a,t,e){"use strict";e.r(t);var r=e("b557"),n=e.n(r);for(var i in r)"default"!==i&&function(a){e.d(t,a,(function(){return r[a]}))}(i);t["default"]=n.a},e6f9:function(a,t,e){"use strict";e.r(t);var r=e("0061"),n=e("d1e0");for(var i in n)"default"!==i&&function(a){e.d(t,a,(function(){return n[a]}))}(i);var o,s=e("f0c5"),l=Object(s["a"])(n["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],o);t["default"]=l.exports}}]);