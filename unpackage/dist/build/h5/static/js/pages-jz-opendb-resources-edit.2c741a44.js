(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-jz-opendb-resources-edit"],{"29c7":function(t,a,e){"use strict";e.r(a);var r=e("de20"),n=e("9fe1");for(var i in n)"default"!==i&&function(t){e.d(a,t,(function(){return n[t]}))}(i);var l,o=e("f0c5"),s=Object(o["a"])(n["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],l);a["default"]=s.exports},4055:function(t,a,e){"use strict";(function(t){var r=e("4ea4");e("caad"),e("b64b"),e("d3b7"),e("2532"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=r(e("5530")),i=e("a43c"),l=t.database(),o=(l.command,"jz-opendb-resources");function s(t){var a={};for(var e in i.validator)t.includes(e)&&(a[e]=i.validator[e]);return a}var u={data:function(){var t={categories:"",categorieszw:"",labels:"",author:"",title:"",article_status:0,is_grant:0,is_encryption:0,is_login:0,avatar:null,resources:[],zy_gs:"",excerpt:"",content:""};return{formData:t,formOptions:{article_status_localdata:[{value:0,text:"锁定"},{value:1,text:"启用"}],is_grant_localdata:[{value:0,text:"未授权"},{value:1,text:"已授权"}],is_encryption_localdata:[{value:0,text:"不加密"},{value:1,text:"加密"}],is_login_localdata:[{value:0,text:"不登录"},{value:1,text:"登录"}]},rules:(0,n.default)({},s(Object.keys(t)))}},onLoad:function(t){if(t.id){var a=t.id;this.formDataId=a,this.getDetail(a)}},onReady:function(){this.$refs.form.setRules(this.rules)},methods:{submit:function(){var t=this;uni.showLoading({mask:!0}),this.$refs.form.validate().then((function(a){return t.submitForm(a)})).catch((function(){})).finally((function(){uni.hideLoading()}))},submitForm:function(t){var a=this;return l.collection(o).doc(this.formDataId).update(t).then((function(t){uni.showToast({title:"修改成功"}),a.getOpenerEventChannel().emit("refreshData"),setTimeout((function(){return uni.navigateBack()}),500)})).catch((function(t){uni.showModal({content:t.message||"请求服务失败",showCancel:!1})}))},getDetail:function(t){var a=this;uni.showLoading({mask:!0}),l.collection(o).doc(t).field("categories,categorieszw,labels,author,title,article_status,is_grant,is_encryption,is_login,avatar,resources,zy_gs,excerpt,content").get().then((function(t){var e=t.result.data[0];e&&(a.formData=e)})).catch((function(t){uni.showModal({content:t.message||"请求服务失败",showCancel:!1})})).finally((function(){uni.hideLoading()}))}}};a.default=u}).call(this,e("a9ff")["default"])},"9fe1":function(t,a,e){"use strict";e.r(a);var r=e("4055"),n=e.n(r);for(var i in r)"default"!==i&&function(t){e.d(a,t,(function(){return r[t]}))}(i);a["default"]=n.a},a43c:function(t,a,e){"use strict";var r=e("4ea4");e("4d63"),e("ac1f"),e("25f0"),Object.defineProperty(a,"__esModule",{value:!0}),a.filterToWhere=s,a.enumConverter=a.validator=void 0;var n=r(e("3835")),i=r(e("b85c")),l={categories:{rules:[{format:"string"}],label:"分类"},categorieszw:{rules:[{format:"string"}],label:"分类中文"},labels:{rules:[{format:"string"}],label:"标签"},author:{rules:[{required:!0},{format:"string"}],label:"作者"},title:{rules:[{required:!0},{format:"string"}],label:"标题"},article_status:{rules:[{format:"int"},{range:[{value:0,text:"锁定"},{value:1,text:"启用"}]}],defaultValue:0,label:"文章状态"},is_grant:{rules:[{format:"int"},{range:[{value:0,text:"未授权"},{value:1,text:"已授权"}]}],defaultValue:0,label:"是否授权"},is_encryption:{rules:[{format:"int"},{range:[{value:0,text:"不加密"},{value:1,text:"加密"}]}],defaultValue:0,label:"是否加密"},is_login:{rules:[{format:"int"},{range:[{value:0,text:"不登录"},{value:1,text:"登录"}]}],defaultValue:0,label:"是否登录"},avatar:{rules:[{format:"file"}],label:"封面大图"},resources:{rules:[{format:"array"},{arrayType:"file"}],label:"附件资源"},zy_gs:{rules:[{format:"string"}],label:"资源格式"},excerpt:{rules:[{format:"string"}],label:"摘要"},content:{rules:[{format:"string"}],label:"内容"}};a.validator=l;var o={article_status_valuetotext:{0:"锁定",1:"启用"},is_grant_valuetotext:{0:"未授权",1:"已授权"},is_encryption_valuetotext:{0:"不加密",1:"加密"},is_login_valuetotext:{0:"不登录",1:"登录"}};function s(t,a){var e={};for(var r in t){var l=t[r],o=l.type,s=l.value;switch(o){case"search":"string"===typeof s&&s.length&&(e[r]=new RegExp(s));break;case"select":if(s.length){var u,c=[],f=(0,i.default)(s);try{for(f.s();!(u=f.n()).done;){var m=u.value;c.push(a.eq(m))}}catch(k){f.e(k)}finally{f.f()}e[r]=a.or(c)}break;case"range":if(s.length){var d=s[0],v=s[1];e[r]=a.and([a.gte(d),a.lte(v)])}break;case"date":if(s.length){var b=(0,n.default)(s,2),p=b[0],g=b[1],h=new Date(p),_=new Date(g);e[r]=a.and([a.gte(h),a.lte(_)])}break;case"timestamp":if(s.length){var D=(0,n.default)(s,2),x=D[0],y=D[1];e[r]=a.and([a.gte(x),a.lte(y)])}break}}return e}a.enumConverter=o},de20:function(t,a,e){"use strict";e.d(a,"b",(function(){return n})),e.d(a,"c",(function(){return i})),e.d(a,"a",(function(){return r}));var r={uniForms:e("8d1e").default,uniFormsItem:e("e076").default,uniEasyinput:e("aad2").default,uniDataCheckbox:e("3cfc").default,uniFilePicker:e("ea53").default},n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"uni-container"},[e("uni-forms",{ref:"form",attrs:{value:t.formData,validateTrigger:"bind"}},[e("uni-forms-item",{attrs:{name:"categories",label:"分类"}},[e("uni-easyinput",{attrs:{placeholder:"分类",trim:"both"},model:{value:t.formData.categories,callback:function(a){t.$set(t.formData,"categories",a)},expression:"formData.categories"}})],1),e("uni-forms-item",{attrs:{name:"categorieszw",label:"分类中文"}},[e("uni-easyinput",{attrs:{placeholder:"分类中文",trim:"both"},model:{value:t.formData.categorieszw,callback:function(a){t.$set(t.formData,"categorieszw",a)},expression:"formData.categorieszw"}})],1),e("uni-forms-item",{attrs:{name:"labels",label:"标签"}},[e("uni-easyinput",{attrs:{placeholder:"多个标签以逗号隔开",trim:"both"},model:{value:t.formData.labels,callback:function(a){t.$set(t.formData,"labels",a)},expression:"formData.labels"}})],1),e("uni-forms-item",{attrs:{name:"author",label:"作者",required:!0}},[e("uni-easyinput",{attrs:{placeholder:"请输入作者",trim:"both"},model:{value:t.formData.author,callback:function(a){t.$set(t.formData,"author",a)},expression:"formData.author"}})],1),e("uni-forms-item",{attrs:{name:"title",label:"标题",required:!0}},[e("uni-easyinput",{attrs:{placeholder:"请输入标题",trim:"both"},model:{value:t.formData.title,callback:function(a){t.$set(t.formData,"title",a)},expression:"formData.title"}})],1),e("uni-forms-item",{attrs:{name:"article_status",label:"文章状态"}},[e("uni-data-checkbox",{attrs:{localdata:t.formOptions.article_status_localdata},model:{value:t.formData.article_status,callback:function(a){t.$set(t.formData,"article_status",a)},expression:"formData.article_status"}})],1),e("uni-forms-item",{attrs:{name:"is_grant",label:"是否授权"}},[e("uni-data-checkbox",{attrs:{localdata:t.formOptions.is_grant_localdata},model:{value:t.formData.is_grant,callback:function(a){t.$set(t.formData,"is_grant",a)},expression:"formData.is_grant"}})],1),e("uni-forms-item",{attrs:{name:"is_encryption",label:"是否加密"}},[e("uni-data-checkbox",{attrs:{localdata:t.formOptions.is_encryption_localdata},model:{value:t.formData.is_encryption,callback:function(a){t.$set(t.formData,"is_encryption",a)},expression:"formData.is_encryption"}})],1),e("uni-forms-item",{attrs:{name:"is_login",label:"是否登录"}},[e("uni-data-checkbox",{attrs:{localdata:t.formOptions.is_login_localdata},model:{value:t.formData.is_login,callback:function(a){t.$set(t.formData,"is_login",a)},expression:"formData.is_login"}})],1),e("uni-forms-item",{attrs:{name:"avatar",label:"封面大图"}},[e("uni-file-picker",{attrs:{"file-mediatype":"image","return-type":"object"},model:{value:t.formData.avatar,callback:function(a){t.$set(t.formData,"avatar",a)},expression:"formData.avatar"}})],1),e("uni-forms-item",{attrs:{name:"resources",label:"附件资源"}},[e("uni-file-picker",{attrs:{"file-mediatype":"all","return-type":"array"},model:{value:t.formData.resources,callback:function(a){t.$set(t.formData,"resources",a)},expression:"formData.resources"}})],1),e("uni-forms-item",{attrs:{name:"zy_gs",label:"资源格式"}},[e("uni-easyinput",{attrs:{placeholder:"资源格式，如img图集,text文章，MP3音乐，mp4视频"},model:{value:t.formData.zy_gs,callback:function(a){t.$set(t.formData,"zy_gs",a)},expression:"formData.zy_gs"}})],1),e("uni-forms-item",{attrs:{name:"excerpt",label:"摘要"}},[e("uni-easyinput",{attrs:{placeholder:"请输入摘要",trim:"both"},model:{value:t.formData.excerpt,callback:function(a){t.$set(t.formData,"excerpt",a)},expression:"formData.excerpt"}})],1),e("uni-forms-item",{attrs:{name:"content",label:"内容"}},[e("uni-easyinput",{attrs:{placeholder:"请输入内容",trim:"right"},model:{value:t.formData.content,callback:function(a){t.$set(t.formData,"content",a)},expression:"formData.content"}})],1),e("v-uni-view",{staticClass:"uni-button-group"},[e("v-uni-button",{staticClass:"uni-button",staticStyle:{width:"100px"},attrs:{type:"primary"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.submit.apply(void 0,arguments)}}},[t._v("提交")]),e("v-uni-navigator",{staticStyle:{"margin-left":"15px"},attrs:{"open-type":"navigateBack"}},[e("v-uni-button",{staticClass:"uni-button",staticStyle:{width:"100px"}},[t._v("返回")])],1)],1)],1)],1)},i=[]}}]);