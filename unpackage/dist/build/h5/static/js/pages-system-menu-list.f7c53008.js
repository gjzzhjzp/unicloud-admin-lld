(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-system-menu-list"],{1148:function(t,e,n){"use strict";var i=n("a691"),a=n("1d80");t.exports="".repeat||function(t){var e=String(a(this)),n="",o=i(t);if(o<0||o==1/0)throw RangeError("Wrong number of repetitions");for(;o>0;(o>>>=1)&&(e+=e))1&o&&(n+=e);return n}},"11d2":function(t,e,n){"use strict";n.r(e);var i=n("9b17"),a=n("9a4a"),o=n("52fd"),r=n("e0e4"),u=n("68f3");e["default"]={en:i,es:a,fr:o,"zh-Hans":r,"zh-Hant":u}},"125b":function(t,e,n){var i=n("66cf");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("260cccf9",i,!0,{sourceMap:!1,shadowMode:!1})},"19d9":function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[t._t("default",null,{options:t.options,data:t.dataList,pagination:t.paginationInternal,loading:t.loading,hasMore:t.hasMore,error:t.errorMessage})],2)},o=[]},"38cf":function(t,e,n){var i=n("23e7"),a=n("1148");i({target:"String",proto:!0},{repeat:a})},"4af1":function(t,e,n){"use strict";(function(t){var i=n("4ea4");n("4160"),n("c975"),n("fb6a"),n("a434"),n("a9e3"),n("b64b"),n("d3b7"),n("ac1f"),n("1276"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("2909")),o=n("37dc"),r=i(n("11d2")),u=(0,o.initVueI18n)(r.default),s=u.t,c={load:"load",error:"error"},l={add:"add",replace:"replace"},d={auto:"auto",onready:"onready",manual:"manual"},f=["pageCurrent","pageSize","collection","action","field","getcount","orderby","where","groupby","groupField","distinct"],h={name:"UniClouddb",props:{options:{type:[Object,Array],default:function(){return{}}},collection:{type:[String,Array],default:""},action:{type:String,default:""},field:{type:String,default:""},orderby:{type:String,default:""},where:{type:[String,Object],default:""},pageData:{type:String,default:"add"},pageCurrent:{type:Number,default:1},pageSize:{type:Number,default:20},getcount:{type:[Boolean,String],default:!1},getone:{type:[Boolean,String],default:!1},gettree:{type:[Boolean,String,Object],default:!1},gettreepath:{type:[Boolean,String],default:!1},startwith:{type:String,default:""},limitlevel:{type:Number,default:10},groupby:{type:String,default:""},groupField:{type:String,default:""},distinct:{type:[Boolean,String],default:!1},pageIndistinct:{type:[Boolean,String],default:!1},foreignKey:{type:String,default:""},loadtime:{type:String,default:"auto"},manual:{type:Boolean,default:!1}},data:function(){return{loading:!1,hasMore:!1,dataList:this.getone?void 0:[],paginationInternal:{},errorMessage:""}},computed:{collectionArgs:function(){return Array.isArray(this.collection)?this.collection:[this.collection]},isLookup:function(){return Array.isArray(this.collection)&&this.collection.length>1||"string"===typeof this.collection&&this.collection.indexOf(",")>-1},mainCollection:function(){if("string"===typeof this.collection)return this.collection.split(",")[0];var t=JSON.parse(JSON.stringify(this.collection[0]));return t.$db[0].$param[0]}},created:function(){var t=this;this._isEnded=!1,this.paginationInternal={current:this.pageCurrent,size:this.pageSize,count:0},this.$watch((function(){var e=[];return f.forEach((function(n){e.push(t[n])})),e}),(function(e,n){if(t.loadtime!==d.manual){t.paginationInternal.size=t.pageSize;for(var i=!1,a=2;a<e.length;a++)if(e[a]!==n[a]){i=!0;break}i&&(t.clear(),t.reset()),e[0]!==n[0]&&(t.paginationInternal.current=t.pageCurrent),t._execLoadData()}})),this.manual||this.loadtime!==d.auto||this.loadData()},beforeDestroy:function(){},methods:{loadData:function(t,e){var n=null,i=!1;"object"===typeof t?(t.clear&&(this.pageData===l.replace?this.clear():i=t.clear,this.reset()),void 0!==t.current&&(this.paginationInternal.current=t.current),"function"===typeof e&&(n=e)):"function"===typeof t&&(n=t),this._execLoadData(n,i)},loadMore:function(){this._isEnded||this.loading||(this.pageData===l.add&&this.paginationInternal.current++,this._execLoadData())},refresh:function(){this.clear(),this._execLoadData()},clear:function(){this._isEnded=!1,this.dataList=[]},reset:function(){this.paginationInternal.current=1},add:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=n.action,a=n.showToast,o=void 0===a||a,r=n.toastTitle,u=n.success,c=n.fail,l=n.complete,d=n.needConfirm,f=void 0===d||d,h=n.needLoading,p=void 0===h||h,g=n.loadingTitle,v=void 0===g?"":g;p&&uni.showLoading({title:v});var b=t.database();i&&(b=b.action(i)),b.collection(this.mainCollection).add(e).then((function(t){u&&u(t),o&&uni.showToast({title:r||s("uniCloud.component.add.success")})})).catch((function(t){c&&c(t),f&&uni.showModal({content:t.message,showCancel:!1})})).finally((function(){p&&uni.hideLoading(),l&&l()}))},remove:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=n.action,a=n.success,o=n.fail,r=n.complete,u=n.confirmTitle,c=n.confirmContent,l=n.needConfirm,d=void 0===l||l,f=n.needLoading,h=void 0===f||f,p=n.loadingTitle,g=void 0===p?"":p;t&&t.length&&(d?uni.showModal({title:u||s("uniCloud.component.remove.showModal.title"),content:c||s("uniCloud.component.remove.showModal.content"),showCancel:!0,success:function(n){n.confirm&&e._execRemove(t,i,a,o,r,d,h,g)}}):this._execRemove(t,i,a,o,r,d,h,g))},update:function(e,n){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=i.action,o=i.showToast,r=void 0===o||o,u=i.toastTitle,c=i.success,l=i.fail,d=i.complete,f=i.needConfirm,h=void 0===f||f,p=i.needLoading,g=void 0===p||p,v=i.loadingTitle,b=void 0===v?"":v;g&&uni.showLoading({title:b});var m=t.database();return a&&(m=m.action(a)),m.collection(this.mainCollection).doc(e).update(n).then((function(t){c&&c(t),r&&uni.showToast({title:u||s("uniCloud.component.update.success")})})).catch((function(t){l&&l(t),h&&uni.showModal({content:t.message,showCancel:!1})})).finally((function(){g&&uni.hideLoading(),d&&d()}))},getTemp:function(){var e,n=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],i=t.database();this.action&&(i=i.action(this.action)),i=(e=i).collection.apply(e,(0,a.default)(this.collectionArgs)),this.where&&Object.keys(this.where).length&&(i=i.where(this.where)),this.field&&(i=i.field(this.field)),this.foreignKey&&(i=i.foreignKey(this.foreignKey)),this.groupby&&(i=i.groupBy(this.groupby)),this.groupField&&(i=i.groupField(this.groupField)),!0===this.distinct&&(i=i.distinct()),this.orderby&&(i=i.orderBy(this.orderby));var o=this.paginationInternal,r=o.current,u=o.size,s={};this.getcount&&(s.getCount=this.getcount);var c={limitLevel:this.limitlevel,startWith:this.startwith};return this.gettree&&(s.getTree=c),this.gettreepath&&(s.getTreePath=c),i=i.skip(u*(r-1)).limit(u),n?(i=i.getTemp(s),i.udb=this):i=i.get(s),i},setResult:function(t){0===t.code?this._execLoadDataSuccess(t):this._execLoadDataFail(new Error(t.message))},_execLoadData:function(t,e){var n=this;this.loading||(this.loading=!0,this.errorMessage="",this._getExec().then((function(i){n.loading=!1,n._execLoadDataSuccess(i.result,t,e)})).catch((function(e){n.loading=!1,n._execLoadDataFail(e,t)})))},_execLoadDataSuccess:function(t,e,n){var i=t.data,o=t.count;this._isEnded=void 0!==o?this.paginationInternal.current*this.paginationInternal.size>=o:i.length<this.pageSize,this.hasMore=!this._isEnded;var r,u=this.getone?i.length?i[0]:void 0:i;(this.getcount&&(this.paginationInternal.count=o),e&&e(u,this._isEnded,this.paginationInternal),this._dispatchEvent(c.load,u),this.getone||this.pageData===l.replace)?this.dataList=u:n?this.dataList=u:(r=this.dataList).push.apply(r,(0,a.default)(u))},_execLoadDataFail:function(t,e){this.errorMessage=t,e&&e(),this.$emit(c.error,t)},_getExec:function(){return this.getTemp(!1)},_execRemove:function(e,n,i,a,o,r,u,s){var c=this;if(this.collection&&e){var d=Array.isArray(e)?e:[e];if(d.length){u&&uni.showLoading({mask:!0,title:s});var f=t.database(),h=f.command,p=f;n&&(p=p.action(n)),p.collection(this.mainCollection).where({_id:h.in(d)}).remove().then((function(t){i&&i(t.result),c.pageData===l.replace?c.refresh():c.removeData(d)})).catch((function(t){a&&a(t),r&&uni.showModal({content:t.message,showCancel:!1})})).finally((function(){u&&uni.hideLoading(),o&&o()}))}}},removeData:function(t){for(var e=t.slice(0),n=this.dataList,i=n.length-1;i>=0;i--){var a=e.indexOf(n[i]._id);a>=0&&(n.splice(i,1),e.splice(a,1))}},_dispatchEvent:function(t,e){this._changeDataFunction?this._changeDataFunction(e,this._isEnded,this.paginationInternal):this.$emit(t,e,this._isEnded,this.paginationInternal)}}};e.default=h}).call(this,n("a9ff")["default"])},"50c2":function(t,e,n){"use strict";var i=n("ce1b"),a=n.n(i);a.a},"52fd":function(t){t.exports=JSON.parse('{"uniCloud.component.add.success":"新增成功","uniCloud.component.update.success":"修改成功","uniCloud.component.remove.showModal.title":"提示","uniCloud.component.remove.showModal.content":"是否删除该数据"}')},"66cf":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.uni-badge--x[data-v-5306b7b1]{display:inline-block;position:relative}.uni-badge--absolute[data-v-5306b7b1]{position:absolute}.uni-badge[data-v-5306b7b1]{display:flex;overflow:hidden;box-sizing:border-box;justify-content:center;flex-direction:row;height:20px;line-height:20px;color:#333;border-radius:100px;background-color:#f1f1f1;background-color:initial;text-align:center;font-family:Helvetica Neue,Helvetica,sans-serif;font-size:12px;cursor:pointer}.uni-badge--inverted[data-v-5306b7b1]{padding:0 5px 0 0;color:#f1f1f1}.uni-badge--default[data-v-5306b7b1]{color:#333;background-color:#f1f1f1}.uni-badge--default-inverted[data-v-5306b7b1]{color:#999;background-color:initial}.uni-badge--primary[data-v-5306b7b1]{color:#fff;background-color:#409eff}.uni-badge--primary-inverted[data-v-5306b7b1]{color:#409eff;background-color:initial}.uni-badge--success[data-v-5306b7b1]{color:#fff;background-color:#4cd964}.uni-badge--success-inverted[data-v-5306b7b1]{color:#4cd964;background-color:initial}.uni-badge--warning[data-v-5306b7b1]{color:#fff;background-color:#f0ad4e}.uni-badge--warning-inverted[data-v-5306b7b1]{color:#f0ad4e;background-color:initial}.uni-badge--error[data-v-5306b7b1]{color:#fff;background-color:#dd524d}.uni-badge--error-inverted[data-v-5306b7b1]{color:#dd524d;background-color:initial}.uni-badge--small[data-v-5306b7b1]{transform:scale(.8);transform-origin:center center}',""]),t.exports=e},"68be":function(t,e,n){"use strict";n.r(e);var i=n("ce52"),a=n("8a58");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("97ca");var r,u=n("f0c5"),s=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,"5306b7b1",null,!1,i["a"],r);e["default"]=s.exports},"68f3":function(t){t.exports=JSON.parse('{"uniCloud.component.add.success":"新增成功","uniCloud.component.update.success":"修改成功","uniCloud.component.remove.showModal.title":"提示","uniCloud.component.remove.showModal.content":"是否刪除數據"}')},"6a21":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var i={uniBadge:n("68be").default,unicloudDb:n("960d").default,uniTable:n("91be").default,uniTr:n("30fa").default,uniTh:n("d6f7").default,uniTd:n("a379").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("v-uni-view",{staticClass:"uni-tabs__header"},[n("v-uni-view",{staticClass:"uni-tabs__nav-wrap"},[n("v-uni-view",{staticClass:"uni-tabs__nav-scroll"},[n("v-uni-view",{staticClass:"uni-tabs__nav"},[n("v-uni-view",{staticClass:"uni-tabs__item",class:{"is-active":"menus"===t.currentTab},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.switchTab("menus")}}},[t._v(t._s(t.$t("menu.text.menuManager")))]),t.pluginMenus.length?n("v-uni-view",{staticClass:"uni-tabs__item",class:{"is-active":"pluginMenus"===t.currentTab},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.switchTab("pluginMenus")}}},[t._v(t._s(t.$t("menu.text.additiveMenu"))),n("uni-badge",{staticClass:"menu-badge",attrs:{text:t.pluginMenus.length,type:"error"}})],1):t._e()],1)],1)],1)],1),n("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:"menus"===t.currentTab,expression:"currentTab==='menus'"}]},[n("v-uni-view",{staticClass:"uni-header",staticStyle:{"border-bottom":"0","margin-bottom":"-15px"}},[n("v-uni-view",{staticClass:"uni-group"},[n("v-uni-button",{attrs:{size:"mini",plain:"true",type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navigateTo("./add")}}},[t._v(t._s(t.$t("menu.button.addFirstLevelMenu")))])],1),n("v-uni-view",{staticClass:"uni-group"})],1),n("v-uni-view",{staticClass:"uni-container"},[n("unicloud-db",{ref:"udb",attrs:{collection:"opendb-admin-menus",options:t.options,where:t.where,"page-data":"replace",orderby:t.orderby,getcount:!0,"page-size":t.options.pageSize,"page-current":t.options.pageCurrent},on:{load:function(e){arguments[0]=e=t.$handleEvent(e),t.onqueryload.apply(void 0,arguments)}},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.data,a=(e.pagination,e.loading);e.error;return[n("uni-table",{staticClass:"table-pc",attrs:{loading:a,emptyText:t.errMsg||t.$t("common.empty"),border:!0,stripe:!0}},[n("uni-tr",[n("uni-th",{attrs:{align:"center"}},[t._v("排序")]),n("uni-th",{attrs:{width:"200",align:"center"}},[t._v("名称")]),n("uni-th",{attrs:{align:"center"}},[t._v("标识")]),n("uni-th",{attrs:{align:"center"}},[t._v("URL")]),n("uni-th",{attrs:{width:"100",align:"center"}},[t._v("是否启用")]),n("uni-th",{attrs:{width:"160",align:"center"}},[t._v("操作")])],1),t._l(i,(function(e,i){return n("uni-tr",{key:i},[n("uni-td",{attrs:{align:"center"}},[t._v(t._s(e.sort))]),n("uni-td",[t._v(t._s(e.name))]),n("uni-td",[t._v(t._s(e.menu_id))]),n("uni-td",[t._v(t._s(e.url))]),n("uni-td",{class:{"menu-disable":!e.enable},attrs:{align:"center"}},[t._v(t._s(e.enable?"已启用":"未启用"))]),n("uni-td",{attrs:{align:"center"}},[n("v-uni-view",{staticClass:"uni-group"},[e.url?t._e():n("v-uni-button",{staticClass:"uni-button",attrs:{size:"mini",type:"primary"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.navigateTo("./add?parent_id="+e.menu_id,!1)}}},[t._v(t._s(t.$t("menu.button.addChildMenu")))]),n("v-uni-button",{staticClass:"uni-button",attrs:{size:"mini",type:"primary"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.navigateTo("./edit?id="+e._id,!1)}}},[t._v(t._s(t.$t("common.button.edit")))]),"system_menu"!==e.menu_id&&"system_management"!==e.menu_id?n("v-uni-button",{staticClass:"uni-button",attrs:{size:"mini",type:"warn"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.confirmDelete(e)}}},[t._v(t._s(t.$t("common.button.delete")))]):t._e()],1)],1)],1)}))],2)]}}])})],1)],1),n("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:"pluginMenus"===t.currentTab,expression:"currentTab==='pluginMenus'"}]},[n("v-uni-view",{staticClass:"uni-header",staticStyle:{"border-bottom":"0","margin-bottom":"-15px"}},[n("v-uni-view",{staticClass:"uni-group"},[n("v-uni-button",{staticStyle:{width:"130px"},attrs:{size:"mini",type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.addPluginMenus.apply(void 0,arguments)}}},[t._v("添加选中的菜单")])],1),n("v-uni-view",{staticClass:"uni-group"})],1),n("v-uni-view",{staticClass:"uni-container"},[n("uni-table",{ref:"pluginMenusTable",attrs:{type:"selection",border:!0,stripe:!0},on:{"selection-change":function(e){arguments[0]=e=t.$handleEvent(e),t.pluginMenuSelectChange.apply(void 0,arguments)}}},[n("uni-tr",[n("uni-th",{attrs:{align:"center"}},[t._v("名称（标识）")]),n("uni-th",{attrs:{align:"center"}},[t._v("URL")]),n("uni-th",{attrs:{align:"center"}},[t._v("插件菜单 json 文件")])],1),t._l(t.pluginMenus,(function(e,i){return n("uni-tr",{key:i},[n("uni-td",[t._v(t._s(e.name)+"（"+t._s(e.menu_id)+"）")]),n("uni-td",[t._v(t._s(e.url))]),n("uni-td",[t._v(t._s(e.json))])],1)}))],2),n("v-uni-view",{staticClass:"uni-sub-title",staticStyle:{"margin-top":"15px"}},[t._v("以上待添加菜单来自于三方插件，添加后，将显示在菜单管理中，若不希望显示在上述表格中时，可手动删除项目中对应的`插件id-menu.json`文件。")])],1)],1)],1)},o=[]},"6b4c":function(t,e,n){"use strict";(function(t){var i=n("4ea4");n("99af"),n("7db0"),n("4160"),n("d81d"),n("45fc7"),n("d3b7"),n("38cf"),n("159b"),n("ddb0"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("2909")),o=i(n("5530")),r=n("4c2f"),u=n("2f62"),s=(t.database(),"create_date asc"),c=2e4,l=1,d=[];function f(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return t.forEach((function(i){i.menu_id===e&&i.parent_id&&(n=n+1+f(t,i.parent_id,n))})),n}function h(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return t.find((function(t){return t.parent_id===e}))&&t.forEach((function(i){i.parent_id===e&&(n.push(i._id),h(t,i.menu_id,n))})),n}var p={data:function(){return{query:"",where:"",orderby:s,options:{pageSize:c,pageCurrent:l},selectedIndexs:[],loading:!0,menus:[],errMsg:"",currentTab:"menus",selectedPluginMenuIndexs:[]}},computed:{pluginMenus:function(){var t=[];if(!this.$hasRole("admin"))return t;var e=this.menus;return e.length?(d.forEach((function(n){e.find((function(t){return t.menu_id===n.menu_id}))||t.push(n)})),t):t}},watch:{pluginMenus:function(t){t.length||(this.currentTab="menus")}},methods:(0,o.default)((0,o.default)({},(0,u.mapActions)({init:"app/init"})),{},{getSortMenu:function(t){return t.map((function(e){t.some((function(t){return t.parent_id===e.menu_id}))||(e.isLeafNode=!0)})),(0,r.buildMenus)(t)},onqueryload:function(t){for(var e=0;e<t.length;e++){var n=t[e],i=f(t,n.menu_id);n.name=(i?"　".repeat(i)+"|-":"")+n.name}var a=this.getSortMenu(t),o=[];this.patTree(a,o),t.length=0,t.push.apply(t,o),this.menus=t},patTree:function(t,e){var n=this;return t.forEach((function(t){e.push(t),t.children.length&&n.patTree(t.children,e)})),e},switchTab:function(t){this.currentTab=t},loadData:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.$refs.udb.loadData({clear:t})},navigateTo:function(t,e){var n=this;uni.navigateTo({url:t,events:{refreshData:function(){n.loadData(e)}}})},confirmDelete:function(t){var e=this,n=t._id,i="是否删除该菜单？",o=h(this.menus,t.menu_id);o.length&&(i="是否删除该菜单及其子菜单？"),n=[n].concat((0,a.default)(o)),uni.showModal({title:"提示",content:i,success:function(t){t.confirm&&e.$refs.udb.remove(n,{needConfirm:!1})}})},pluginMenuSelectChange:function(t){this.selectedPluginMenuIndexs=t.detail.index},addPluginMenus:function(e){var n=this;if(!this.selectedPluginMenuIndexs.length)return uni.showModal({title:"提示",content:"请选择要添加的菜单！",showCancel:!1});var i=this.pluginMenus,a=[];this.selectedPluginMenuIndexs.forEach((function(t){var e=i[t];if(e){var n=JSON.parse(JSON.stringify(e));delete n.json,a.push(n)}})),uni.showModal({title:"提示",content:"您确认要添加已选中的菜单吗？",success:function(e){if(e.confirm){uni.showLoading({mask:!0});var o=a.length===i.length;t.database().collection("opendb-admin-menus").add(a).then((function(t){n.init(),uni.showModal({title:"提示",content:"添加菜单成功！",showCancel:!1,success:function(){n.$refs.pluginMenusTable.clearSelection(),o&&(n.currentTab="menus"),n.loadData()}})})).catch((function(t){uni.showModal({title:"提示",content:t.message,showCancel:!1})})).finally((function(){uni.hideLoading()}))}}})}})};e.default=p}).call(this,n("a9ff")["default"])},"848e":function(t,e,n){"use strict";n.r(e);var i=n("4af1"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},"8a58":function(t,e,n){"use strict";n.r(e);var i=n("d570"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},"8ca6":function(t,e,n){"use strict";n.r(e);var i=n("6a21"),a=n("ed51");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("50c2");var r,u=n("f0c5"),s=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,"4eae3072",null,!1,i["a"],r);e["default"]=s.exports},"960d":function(t,e,n){"use strict";n.r(e);var i=n("19d9"),a=n("848e");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);var r,u=n("f0c5"),s=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],r);e["default"]=s.exports},"97ca":function(t,e,n){"use strict";var i=n("125b"),a=n.n(i);a.a},"9a4a":function(t){t.exports=JSON.parse('{"uniCloud.component.add.success":"新增成功","uniCloud.component.update.success":"修改成功","uniCloud.component.remove.showModal.title":"提示","uniCloud.component.remove.showModal.content":"是否删除该数据"}')},"9b17":function(t){t.exports=JSON.parse('{"uniCloud.component.add.success":"Success","uniCloud.component.update.success":"Success","uniCloud.component.remove.showModal.title":"Tips","uniCloud.component.remove.showModal.content":"是否删除该数据"}')},ce1b:function(t,e,n){var i=n("d129");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("67e8465c",i,!0,{sourceMap:!1,shadowMode:!1})},ce52:function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"uni-badge--x"},[t._t("default"),t.text?n("v-uni-text",{staticClass:"uni-badge",class:t.classNames,style:[t.badgeWidth,t.positionStyle,t.customStyle,t.dotStyle],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick()}}},[t._v(t._s(t.displayValue))]):t._e()],2)},o=[]},d129:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,"\n.menu-disable[data-v-4eae3072]{color:red}.menu-badge[data-v-4eae3072]{position:absolute;top:0;right:5px}",""]),t.exports=e},d570:function(t,e,n){"use strict";n("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"UniBadge",emits:["click"],props:{type:{type:String,default:"default"},inverted:{type:Boolean,default:!1},isDot:{type:Boolean,default:!1},maxNum:{type:Number,default:99},absolute:{type:String,default:""},offset:{type:Array,default:function(){return[0,0]}},text:{type:[String,Number],default:""},size:{type:String,default:"normal"},customStyle:{type:Object,default:function(){return{}}}},data:function(){return{}},computed:{width:function(){return 8*String(this.text).length+12},classNames:function(){var t=this.inverted,e=this.type,n=this.size,i=this.absolute;return[t?"uni-badge--"+e+"-inverted":"","uni-badge--"+e,"uni-badge--"+n,i?"uni-badge--absolute":""].join(" ")},positionStyle:function(){if(!this.absolute)return{};var t=this.width/2,e=10;this.isDot&&(t=5,e=5);var n="".concat(-t+this.offset[0],"px"),i="".concat(-e+this.offset[1],"px"),a={rightTop:{right:n,top:i},rightBottom:{right:n,bottom:i},leftBottom:{left:n,bottom:i},leftTop:{left:n,top:i}},o=a[this.absolute];return o||a["rightTop"]},badgeWidth:function(){return{width:"".concat(this.width,"px")}},dotStyle:function(){return this.isDot?{width:"10px",height:"10px",borderRadius:"10px"}:{}},displayValue:function(){var t=this.isDot,e=this.text,n=this.maxNum;return t?"":Number(e)>n?"".concat(n,"+"):e}},methods:{onClick:function(){this.$emit("click")}}};e.default=i},e0e4:function(t){t.exports=JSON.parse('{"uniCloud.component.add.success":"新增成功","uniCloud.component.update.success":"修改成功","uniCloud.component.remove.showModal.title":"提示","uniCloud.component.remove.showModal.content":"是否删除该数据"}')},ed51:function(t,e,n){"use strict";n.r(e);var i=n("6b4c"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a}}]);