(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-jz-opendb-resources-list"],{"0580":function(t,e,n){"use strict";n("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"u-image",props:{src:{type:String,default:""},mode:{type:String,default:"aspectFill"},width:{type:[String,Number],default:"100%"},height:{type:[String,Number],default:"auto"},shape:{type:String,default:"square"},borderRadius:{type:[String,Number],default:0},lazyLoad:{type:Boolean,default:!0},showMenuByLongpress:{type:Boolean,default:!0},loadingIcon:{type:String,default:"photo"},errorIcon:{type:String,default:"error-circle"},showLoading:{type:Boolean,default:!0},showError:{type:Boolean,default:!0},fade:{type:Boolean,default:!0},webp:{type:Boolean,default:!1},duration:{type:[String,Number],default:500},bgColor:{type:String,default:"#f3f4f6"}},data:function(){return{isError:!1,loading:!0,opacity:1,durationTime:this.duration,backgroundStyle:{}}},watch:{src:{immediate:!0,handler:function(t){t?this.isError=!1:(this.isError=!0,this.loading=!1)}}},computed:{wrapStyle:function(){var t={};return t.width=this.$u.addUnit(this.width),t.height=this.$u.addUnit(this.height),t.borderRadius="circle"==this.shape?"50%":this.$u.addUnit(this.borderRadius),t.overflow=this.borderRadius>0?"hidden":"visible",this.fade&&(t.opacity=this.opacity,t.transition="opacity ".concat(Number(this.durationTime)/1e3,"s ease-in-out")),t}},methods:{onClick:function(){this.$emit("click")},onErrorHandler:function(t){this.loading=!1,this.isError=!0,this.$emit("error",t)},onLoadHandler:function(){var t=this;if(this.loading=!1,this.isError=!1,this.$emit("load"),!this.fade)return this.removeBgColor();this.opacity=0,this.durationTime=0,setTimeout((function(){t.durationTime=t.duration,t.opacity=1,setTimeout((function(){t.removeBgColor()}),t.durationTime)}),50)},removeBgColor:function(){this.backgroundStyle={backgroundColor:"transparent"}}}};e.default=a},"0657":function(t,e,n){"use strict";n.r(e);var a=n("0580"),r=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);e["default"]=r.a},"132b":function(t,e,n){"use strict";var a=n("f798"),r=n.n(a);r.a},2830:function(t,e,n){"use strict";n.r(e);var a=n("61de"),r=n("3a3f");for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);var o,s=n("f0c5"),c=Object(s["a"])(r["default"],a["b"],a["c"],!1,null,"fd8f4046",null,!1,a["a"],o);e["default"]=c.exports},"3a3f":function(t,e,n){"use strict";n.r(e);var a=n("ff8d"),r=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);e["default"]=r.a},"5b75":function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return a}));var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-text",[t._v(t._s(t.dateShow))])},i=[]},"61de":function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return a}));var a={downloadExcel:n("bbe9").default,unicloudDb:n("960d").default,uniTable:n("6816").default,uniTr:n("e595").default,uniTh:n("5b23").default,uniTd:n("40b0").default,uImage:n("ec62").default,uniDateformat:n("f88b").default,uniPagination:n("35f7").default},r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("v-uni-view",{staticClass:"uni-header"},[n("v-uni-view",{staticClass:"uni-group"},[n("v-uni-view",{staticClass:"uni-title"}),n("v-uni-view",{staticClass:"uni-sub-title"})],1),n("v-uni-view",{staticClass:"uni-group"},[n("v-uni-input",{staticClass:"uni-search",attrs:{type:"text",placeholder:"请输入搜索内容"},on:{confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.search.apply(void 0,arguments)}},model:{value:t.query,callback:function(e){t.query=e},expression:"query"}}),n("v-uni-button",{staticClass:"uni-button",attrs:{type:"default",size:"mini"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.search.apply(void 0,arguments)}}},[t._v("搜索")]),n("v-uni-button",{staticClass:"uni-button",attrs:{type:"default",size:"mini"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navigateTo("./add")}}},[t._v("新增")]),n("v-uni-button",{staticClass:"uni-button",attrs:{type:"default",size:"mini",disabled:!t.selectedIndexs.length},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.delTable.apply(void 0,arguments)}}},[t._v("批量删除")]),t.isManger?n("download-excel",{staticClass:"hide-on-phone",attrs:{fields:t.exportExcel.fields,data:t.exportExcelData,type:t.exportExcel.type,name:t.exportExcel.filename}},[n("v-uni-button",{staticClass:"uni-button",attrs:{type:"primary",size:"mini"}},[t._v("导出 Excel")])],1):t._e()],1)],1),n("v-uni-view",{staticClass:"uni-container"},[n("unicloud-db",{ref:"udb",attrs:{collection:t.collection,field:t.field,where:t.where,"page-data":"replace",orderby:t.orderby,getcount:!0,"page-size":t.options.pageSize,"page-current":t.options.pageCurrent,options:t.options,loadtime:"manual"},on:{load:function(e){arguments[0]=e=t.$handleEvent(e),t.onqueryload.apply(void 0,arguments)}},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.data,r=e.pagination,i=e.loading,o=e.error,s=e.options;return[n("uni-table",{ref:"table",attrs:{loading:i,emptyText:o.message||"没有更多数据",border:!0,stripe:!0,type:"selection"},on:{"selection-change":function(e){arguments[0]=e=t.$handleEvent(e),t.selectionChange.apply(void 0,arguments)}}},[n("uni-tr",[n("uni-th",{attrs:{align:"center",sortable:!0},on:{"sort-change":function(e){arguments[0]=e=t.$handleEvent(e),t.sortChange(e,"avatar")}}},[t._v("封面")]),n("uni-th",{attrs:{align:"center","filter-type":"select","filter-data":s.filterData.zy_gs_localdata},on:{"filter-change":function(e){arguments[0]=e=t.$handleEvent(e),t.filterChange(e,"zy_gs")}}},[t._v("资源类型")]),n("uni-th",{attrs:{align:"center","filter-type":"search",sortable:!0},on:{"filter-change":function(e){arguments[0]=e=t.$handleEvent(e),t.filterChange(e,"title")},"sort-change":function(e){arguments[0]=e=t.$handleEvent(e),t.sortChange(e,"title")}}},[t._v("标题")]),n("uni-th",{attrs:{align:"center","filter-type":"search",sortable:!0},on:{"filter-change":function(e){arguments[0]=e=t.$handleEvent(e),t.filterChange(e,"categorieszw")},"sort-change":function(e){arguments[0]=e=t.$handleEvent(e),t.sortChange(e,"categorieszw")}}},[t._v("分类")]),n("uni-th",{attrs:{align:"center","filter-type":"search",sortable:!0},on:{"filter-change":function(e){arguments[0]=e=t.$handleEvent(e),t.filterChange(e,"labels")},"sort-change":function(e){arguments[0]=e=t.$handleEvent(e),t.sortChange(e,"labels")}}},[t._v("标签")]),n("uni-th",{attrs:{align:"center","filter-type":"search",sortable:!0},on:{"filter-change":function(e){arguments[0]=e=t.$handleEvent(e),t.filterChange(e,"author")},"sort-change":function(e){arguments[0]=e=t.$handleEvent(e),t.sortChange(e,"author")}}},[t._v("来源")]),t.isManger?n("uni-th",{attrs:{align:"center",width:"80px"}},[t._v("投稿人")]):t._e(),n("uni-th",{attrs:{align:"center","filter-type":"select","filter-data":s.filterData.article_status_localdata},on:{"filter-change":function(e){arguments[0]=e=t.$handleEvent(e),t.filterChange(e,"article_status")}}},[t._v("状态")]),t.isManger?n("uni-th",{attrs:{align:"center","filter-type":"select","filter-data":s.filterData.is_recommend_localdata},on:{"filter-change":function(e){arguments[0]=e=t.$handleEvent(e),t.filterChange(e,"is_recommend")}}},[t._v("推荐")]):t._e(),n("uni-th",{attrs:{align:"center","filter-type":"select","filter-data":s.filterData.is_grant_localdata},on:{"filter-change":function(e){arguments[0]=e=t.$handleEvent(e),t.filterChange(e,"is_grant")}}},[t._v("授权")]),n("uni-th",{attrs:{align:"center","filter-type":"select","filter-data":s.filterData.is_encryption_localdata},on:{"filter-change":function(e){arguments[0]=e=t.$handleEvent(e),t.filterChange(e,"is_encryption")}}},[t._v("加密")]),n("uni-th",{attrs:{align:"center"}},[t._v("发表时间")]),n("uni-th",{attrs:{align:"center"}},[t._v("更新时间")]),n("uni-th",{attrs:{align:"center"}},[t._v("操作")])],1),t._l(a,(function(e,a){return n("uni-tr",{key:a},[n("uni-td",{attrs:{align:"center"}},[Array.isArray(e.avatar)?[t._l(e.avatar,(function(t,e){return[n("u-image",{attrs:{width:"100%",height:"140rpx",mode:"widthFix","border-radius":"10",src:t.url}})]}))]:[n("u-image",{attrs:{width:"100%",height:"140rpx",mode:"widthFix","border-radius":"10",src:e.avatar.url}})]],2),n("uni-td",{attrs:{align:"center"}},[t._v(t._s(s.zy_gs_valuetotext[e.zy_gs]))]),n("uni-td",{attrs:{align:"center"}},[t._v(t._s(e.title))]),n("uni-td",{attrs:{align:"center"}},[t._v(t._s(e.categorieszw))]),n("uni-td",{attrs:{align:"center"}},[t._v(t._s(e.labels))]),n("uni-td",{attrs:{align:"center"}},[t._v(t._s(e.author))]),t.isManger?n("uni-td",{attrs:{align:"center"}},[t._v(t._s(e.user_id[0]?e.user_id[0].nickname:""))]):t._e(),n("uni-td",{attrs:{align:"center"}},[n("v-uni-checkbox-group",{on:{change:function(n){arguments[0]=n=t.$handleEvent(n),t.change_data(e,"article_status")}}},[n("v-uni-checkbox",{attrs:{value:"article_status",checked:1==e.article_status}})],1)],1),t.isManger?n("uni-td",{attrs:{align:"center"}},[n("v-uni-checkbox-group",{on:{change:function(n){arguments[0]=n=t.$handleEvent(n),t.change_data(e,"is_recommend")}}},[n("v-uni-checkbox",{attrs:{value:"is_recommend",checked:1==e.is_recommend}})],1)],1):t._e(),n("uni-td",{attrs:{align:"center"}},[n("v-uni-checkbox-group",{on:{change:function(n){arguments[0]=n=t.$handleEvent(n),t.change_data(e,"is_grant")}}},[n("v-uni-checkbox",{attrs:{value:"is_grant",checked:1==e.is_grant}})],1)],1),n("uni-td",{attrs:{align:"center"}},[n("v-uni-checkbox-group",{on:{change:function(n){arguments[0]=n=t.$handleEvent(n),t.change_data(e,"is_encryption")}}},[n("v-uni-checkbox",{attrs:{value:"is_encryption",checked:1==e.is_encryption}})],1)],1),n("uni-td",{attrs:{align:"center"}},[n("uni-dateformat",{attrs:{threshold:[0,0],date:e.publish_date}})],1),n("uni-td",{attrs:{align:"center"}},[n("uni-dateformat",{attrs:{threshold:[0,0],date:e.last_modify_date}})],1),n("uni-td",{attrs:{align:"center"}},[n("v-uni-view",{staticClass:"uni-group"},[n("v-uni-button",{staticClass:"uni-button",attrs:{size:"mini",type:"primary"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.navigateTo("./edit?id="+e._id,!1)}}},[t._v("修改")]),n("v-uni-button",{staticClass:"uni-button",attrs:{size:"mini",type:"warn"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.confirmDelete(e._id)}}},[t._v("删除")])],1)],1)],1)}))],2),n("v-uni-view",{staticClass:"uni-pagination-box"},[n("uni-pagination",{attrs:{"show-icon":!0,"page-size":r.size,total:r.count},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.onPageChanged.apply(void 0,arguments)}},model:{value:r.current,callback:function(e){t.$set(r,"current",e)},expression:"pagination.current"}})],1)]}}])})],1)],1)},i=[]},"9ce2":function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return a}));var a={uIcon:n("1369").default},r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"u-image",style:[t.wrapStyle,t.backgroundStyle],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick.apply(void 0,arguments)}}},[t.isError?t._e():n("v-uni-image",{staticClass:"u-image__image",style:{borderRadius:"circle"==t.shape?"50%":t.$u.addUnit(t.borderRadius)},attrs:{src:t.src,mode:t.mode,"lazy-load":t.lazyLoad,"show-menu-by-longpress":t.showMenuByLongpress},on:{error:function(e){arguments[0]=e=t.$handleEvent(e),t.onErrorHandler.apply(void 0,arguments)},load:function(e){arguments[0]=e=t.$handleEvent(e),t.onLoadHandler.apply(void 0,arguments)}}}),t.showLoading&&t.loading?n("v-uni-view",{staticClass:"u-image__loading",style:{borderRadius:"circle"==t.shape?"50%":t.$u.addUnit(t.borderRadius),backgroundColor:this.bgColor}},[t.$slots.loading?t._t("loading"):n("u-icon",{attrs:{name:t.loadingIcon,width:t.width,height:t.height}})],2):t._e(),t.showError&&t.isError&&!t.loading?n("v-uni-view",{staticClass:"u-image__error",style:{borderRadius:"circle"==t.shape?"50%":t.$u.addUnit(t.borderRadius)}},[t.$slots.error?t._t("error"):n("u-icon",{attrs:{name:t.errorIcon,width:t.width,height:t.height}})],2):t._e()],1)},i=[]},b3c8:function(t,e,n){"use strict";n("a9e3"),n("e25e"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n("a0f9"),r={name:"uniDateformat",props:{date:{type:[Object,String,Number],default:function(){return"-"}},locale:{type:String,default:"zh"},threshold:{type:Array,default:function(){return[0,0]}},format:{type:String,default:"yyyy/MM/dd hh:mm:ss"},refreshRate:{type:[Number,String],default:0}},data:function(){return{refreshMark:0}},computed:{dateShow:function(){return this.refreshMark,(0,a.friendlyDate)(this.date,{locale:this.locale,threshold:this.threshold,format:this.format})}},watch:{refreshRate:{handler:function(){this.setAutoRefresh()},immediate:!0}},methods:{refresh:function(){this.refreshMark++},setAutoRefresh:function(){var t=this;clearInterval(this.refreshInterval),this.refreshRate&&(this.refreshInterval=setInterval((function(){t.refresh()}),parseInt(this.refreshRate)))}}};e.default=r},b81f:function(t,e,n){n("c975"),n("ac1f"),n("5319");var a={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(t){var e,n,r,i,o,s,c,u="",l=0;t=a._utf8_encode(t);while(l<t.length)e=t.charCodeAt(l++),n=t.charCodeAt(l++),r=t.charCodeAt(l++),i=e>>2,o=(3&e)<<4|n>>4,s=(15&n)<<2|r>>6,c=63&r,isNaN(n)?s=c=64:isNaN(r)&&(c=64),u=u+a._keyStr.charAt(i)+a._keyStr.charAt(o)+a._keyStr.charAt(s)+a._keyStr.charAt(c);return u},decode:function(t){var e,n,r,i,o,s,c,u="",l=0;t=t.replace(/[^A-Za-z0-9\+\/\=]/g,"");while(l<t.length)i=a._keyStr.indexOf(t.charAt(l++)),o=a._keyStr.indexOf(t.charAt(l++)),s=a._keyStr.indexOf(t.charAt(l++)),c=a._keyStr.indexOf(t.charAt(l++)),e=i<<2|o>>4,n=(15&o)<<4|s>>2,r=(3&s)<<6|c,u+=String.fromCharCode(e),64!=s&&(u+=String.fromCharCode(n)),64!=c&&(u+=String.fromCharCode(r));return u=a._utf8_decode(u),u},_utf8_encode:function(t){t=t.replace(/\r\n/g,"\n");for(var e="",n=0;n<t.length;n++){var a=t.charCodeAt(n);a<128?e+=String.fromCharCode(a):a>127&&a<2048?(e+=String.fromCharCode(a>>6|192),e+=String.fromCharCode(63&a|128)):(e+=String.fromCharCode(a>>12|224),e+=String.fromCharCode(a>>6&63|128),e+=String.fromCharCode(63&a|128))}return e},_utf8_decode:function(t){var e="",n=0,a=c1=c2=0;while(n<t.length)a=t.charCodeAt(n),a<128?(e+=String.fromCharCode(a),n++):a>191&&a<224?(c2=t.charCodeAt(n+1),e+=String.fromCharCode((31&a)<<6|63&c2),n+=2):(c2=t.charCodeAt(n+1),c3=t.charCodeAt(n+2),e+=String.fromCharCode((15&a)<<12|(63&c2)<<6|63&c3),n+=3);return e}};t.exports=a},c749:function(t,e,n){"use strict";n.r(e);var a=n("b3c8"),r=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);e["default"]=r.a},ec62:function(t,e,n){"use strict";n.r(e);var a=n("9ce2"),r=n("0657");for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);n("132b");var o,s=n("f0c5"),c=Object(s["a"])(r["default"],a["b"],a["c"],!1,null,"00140dbc",null,!1,a["a"],o);e["default"]=c.exports},f798:function(t,e,n){var a=n("fd7f");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var r=n("4f06").default;r("0ea7929f",a,!0,{sourceMap:!1,shadowMode:!1})},f88b:function(t,e,n){"use strict";n.r(e);var a=n("5b75"),r=n("c749");for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);var o,s=n("f0c5"),c=Object(s["a"])(r["default"],a["b"],a["c"],!1,null,"7d20afea",null,!1,a["a"],o);e["default"]=c.exports},fd7f:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/***字体大小规范***/\r\n/***颜色定义***/\r\n/***行间距***/.u-image[data-v-00140dbc]{position:relative;transition:opacity .5s ease-in-out}.u-image__image[data-v-00140dbc]{width:100%;height:100%}.u-image__loading[data-v-00140dbc], .u-image__error[data-v-00140dbc]{position:absolute;top:0;left:0;width:100%;height:100%;\r\ndisplay:flex;flex-direction:row;\r\nalign-items:center;justify-content:center;background-color:#f3f4f6;color:#909399;font-size:%?46?%}',""]),t.exports=e},ff8d:function(t,e,n){"use strict";(function(t){var a=n("4ea4");n("4de4"),n("c975"),n("d81d"),n("b64b"),n("4d63"),n("ac1f"),n("25f0"),n("1276"),n("498a"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=a(n("5530")),i=n("a43c"),o=t.database(),s=n("b81f"),c="last_modify_date desc",u=["title","categorieszw","labels"],l=20,d=1,f={ascending:"asc",descending:"desc"},h={data:function(){return{query:"",where:"",orderby:c,orderByFieldName:"",selectedIndexs:[],collection:"jz-opendb-resources,uni-id-users",field:"publish_date,last_modify_date,categories,categorieszw,labels,author,title,article_status,is_recommend,is_grant,is_encryption,is_login,avatar,resources,zy_gs,excerpt,content,user_id{nickname}",options:(0,r.default)({pageSize:l,pageCurrent:d,filterData:{article_status_localdata:[{value:0,text:"锁定"},{value:1,text:"启用"}],is_recommend_localdata:[{value:0,text:"不推荐"},{value:1,text:"推荐"}],zy_gs_localdata:[{value:0,text:"图片"},{value:1,text:"视频"},{value:2,text:"音乐"},{value:3,text:"文章"}],is_grant_localdata:[{value:0,text:"未授权"},{value:1,text:"已授权"}],is_encryption_localdata:[{value:0,text:"不加密"},{value:1,text:"加密"}]}},i.enumConverter),imageStyles:{width:64,height:64},exportExcel:{filename:"jz-opendb-resources.xls",type:"xls",fields:{"分类":"categories","分类中文":"categorieszw","标签":"labels","来源":"author","标题":"title","状态":"article_status","是否推荐":"is_recommend","是否授权":"is_grant","是否加密":"is_encryption","封面大图":"avatar","资源类型":"zy_gs","附件资源":"resources","摘要":"excerpt","内容":"content"}},exportExcelData:[],isManger:!0}},onLoad:function(){this._filter={}},onReady:function(){var t=this,e=this.getUserRole();-1!=e.indexOf("only_zylist")?(this.isManger=!1,this.collection="jz-opendb-resources",this.field="publish_date,last_modify_date,categories,categorieszw,labels,author,title,article_status,is_recommend,is_grant,is_encryption,is_login,avatar,resources,zy_gs,excerpt,content",this.where="user_id==$cloudEnv_uid",this.$nextTick((function(){t.loadData()}))):(this.isManger=!0,this.$refs.udb.loadData())},methods:{getUserRole:function(){var t=uni.getStorageSync("uni_id_token"),e={};if(t){t=t.split(".")[1];e=s.decode(t);e=JSON.parse(e.split("}")[0]+"}")}return e.role},change_data:function(t,e){var n={};n[e]=1==t[e]?0:1,console.log("obj",n),this.$set(t,e,n[e]),this.updateItem(t,n)},updateItem:function(t,e){return o.collection("jz-opendb-resources").doc(t._id).update(e).then((function(t){uni.showToast({title:"修改成功"})})).catch((function(t){uni.showModal({content:t.message||"请求服务失败",showCancel:!1})}))},onqueryload:function(t){this.exportExcelData=t},getWhere:function(){var t=this.query.trim();if(!t)return"";var e=new RegExp(t,"i");return u.map((function(t){return e+".test("+t+")"})).join(" || ")},search:function(){var t=this,e=this.getWhere();this.where=e,this.where?this.where="("+this.where+")&& user_id == $cloudEnv_uid":this.where+="user_id == $cloudEnv_uid",this.$nextTick((function(){t.loadData()}))},loadData:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.$refs.udb.loadData({clear:t})},onPageChanged:function(t){this.selectedIndexs.length=0,this.$refs.table.clearSelection(),this.$refs.udb.loadData({current:t.current})},navigateTo:function(t,e){var n=this;uni.navigateTo({url:t,events:{refreshData:function(){n.loadData(e)}}})},selectedItems:function(){var t=this.$refs.udb.dataList;return this.selectedIndexs.map((function(e){return t[e]._id}))},delTable:function(){var t=this;this.$refs.udb.remove(this.selectedItems(),{success:function(e){t.$refs.table.clearSelection()}})},selectionChange:function(t){this.selectedIndexs=t.detail.index},confirmDelete:function(t){var e=this;this.$refs.udb.remove(t,{success:function(t){e.$refs.table.clearSelection()}})},sortChange:function(t,e){var n=this;this.orderByFieldName=e,t.order?this.orderby=e+" "+f[t.order]:this.orderby="",this.$refs.table.clearSelection(),this.$nextTick((function(){n.$refs.udb.loadData()}))},filterChange:function(t,e){var n=this;this._filter[e]={type:t.filterType,value:t.filter};var a=(0,i.filterToWhere)(this._filter,o.command);Object.keys(a).length?this.where=a:this.where="",this.$nextTick((function(){n.$refs.udb.loadData()}))}}};e.default=h}).call(this,n("a9ff")["default"])}}]);