(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-jz-opendb-resources-list"],{"0580":function(e,t,n){"use strict";n("a9e3"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={name:"u-image",props:{src:{type:String,default:""},mode:{type:String,default:"aspectFill"},width:{type:[String,Number],default:"100%"},height:{type:[String,Number],default:"auto"},shape:{type:String,default:"square"},borderRadius:{type:[String,Number],default:0},lazyLoad:{type:Boolean,default:!0},showMenuByLongpress:{type:Boolean,default:!0},loadingIcon:{type:String,default:"photo"},errorIcon:{type:String,default:"error-circle"},showLoading:{type:Boolean,default:!0},showError:{type:Boolean,default:!0},fade:{type:Boolean,default:!0},webp:{type:Boolean,default:!1},duration:{type:[String,Number],default:500},bgColor:{type:String,default:"#f3f4f6"}},data:function(){return{isError:!1,loading:!0,opacity:1,durationTime:this.duration,backgroundStyle:{}}},watch:{src:{immediate:!0,handler:function(e){e?this.isError=!1:(this.isError=!0,this.loading=!1)}}},computed:{wrapStyle:function(){var e={};return e.width=this.$u.addUnit(this.width),e.height=this.$u.addUnit(this.height),e.borderRadius="circle"==this.shape?"50%":this.$u.addUnit(this.borderRadius),e.overflow=this.borderRadius>0?"hidden":"visible",this.fade&&(e.opacity=this.opacity,e.transition="opacity ".concat(Number(this.durationTime)/1e3,"s ease-in-out")),e}},methods:{onClick:function(){this.$emit("click")},onErrorHandler:function(e){this.loading=!1,this.isError=!0,this.$emit("error",e)},onLoadHandler:function(){var e=this;if(this.loading=!1,this.isError=!1,this.$emit("load"),!this.fade)return this.removeBgColor();this.opacity=0,this.durationTime=0,setTimeout((function(){e.durationTime=e.duration,e.opacity=1,setTimeout((function(){e.removeBgColor()}),e.durationTime)}),50)},removeBgColor:function(){this.backgroundStyle={backgroundColor:"transparent"}}}};t.default=a},"0657":function(e,t,n){"use strict";n.r(t);var a=n("0580"),i=n.n(a);for(var r in a)"default"!==r&&function(e){n.d(t,e,(function(){return a[e]}))}(r);t["default"]=i.a},"132b":function(e,t,n){"use strict";var a=n("624e"),i=n.n(a);i.a},"17fd":function(e,t,n){var a=n("24fb");t=a(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/***字体大小规范***/\r\n/***颜色定义***/\r\n/***行间距***/.u-image[data-v-00140dbc]{position:relative;transition:opacity .5s ease-in-out}.u-image__image[data-v-00140dbc]{width:100%;height:100%}.u-image__loading[data-v-00140dbc], .u-image__error[data-v-00140dbc]{position:absolute;top:0;left:0;width:100%;height:100%;display:flex;flex-direction:row;align-items:center;justify-content:center;background-color:#f3f4f6;color:#909399;font-size:%?46?%}',""]),e.exports=t},"24de":function(e,t,n){var a=n("2e27");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var i=n("4f06").default;i("f1e18a48",a,!0,{sourceMap:!1,shadowMode:!1})},2830:function(e,t,n){"use strict";n.r(t);var a=n("6bb2"),i=n("3a3f");for(var r in i)"default"!==r&&function(e){n.d(t,e,(function(){return i[e]}))}(r);n("2da0");var o,s=n("f0c5"),l=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"1250a65b",null,!1,a["a"],o);t["default"]=l.exports},"2da0":function(e,t,n){"use strict";var a=n("24de"),i=n.n(a);i.a},"2e27":function(e,t,n){var a=n("24fb");t=a(!1),t.push([e.i,".slot-gonggao_content[data-v-1250a65b]{overflow:auto\n\t/* padding: 10px; */}.slot-gonggao_content>uni-scroll-view[data-v-1250a65b]{max-height:50vh}",""]),e.exports=t},"3a3f":function(e,t,n){"use strict";n.r(t);var a=n("ff8d"),i=n.n(a);for(var r in a)"default"!==r&&function(e){n.d(t,e,(function(){return a[e]}))}(r);t["default"]=i.a},"624e":function(e,t,n){var a=n("17fd");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var i=n("4f06").default;i("a7052658",a,!0,{sourceMap:!1,shadowMode:!1})},"6bb2":function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return a}));var a={downloadExcel:n("bbe9").default,unicloudDb:n("960d").default,uniTable:n("6816").default,uniTr:n("e595").default,uniTh:n("5b23").default,uniTd:n("40b0").default,uImage:n("ec62").default,uniDateformat:n("f88b").default,uniPagination:n("35f7").default,uModal:n("a896").default,uInput:n("b192").default},i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",[n("v-uni-view",{staticClass:"uni-header"},[n("v-uni-view",{staticClass:"uni-group"},[n("v-uni-view",{staticClass:"uni-title"}),n("v-uni-view",{staticClass:"uni-sub-title"})],1),n("v-uni-view",{staticClass:"uni-group"},[n("v-uni-input",{staticClass:"uni-search",attrs:{type:"text",placeholder:"请输入搜索内容"},on:{confirm:function(t){arguments[0]=t=e.$handleEvent(t),e.search.apply(void 0,arguments)}},model:{value:e.query,callback:function(t){e.query=t},expression:"query"}}),n("v-uni-button",{staticClass:"uni-button",attrs:{type:"default",size:"mini"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.search.apply(void 0,arguments)}}},[e._v("搜索")]),n("v-uni-button",{staticClass:"uni-button",attrs:{type:"default",size:"mini"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.navigateTo("./add")}}},[e._v("新增")]),n("v-uni-button",{staticClass:"uni-button",attrs:{type:"default",size:"mini",disabled:!e.selectedIndexs.length},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.delTable.apply(void 0,arguments)}}},[e._v("批量删除")]),e.isManger?n("download-excel",{staticClass:"hide-on-phone",attrs:{fields:e.exportExcel.fields,data:e.exportExcelData,type:e.exportExcel.type,name:e.exportExcel.filename}},[n("v-uni-button",{staticClass:"uni-button",attrs:{type:"primary",size:"mini"}},[e._v("导出 Excel")])],1):e._e()],1)],1),n("v-uni-view",{staticClass:"uni-container"},[n("unicloud-db",{ref:"udb",attrs:{collection:e.collection,field:e.field,where:e.where,"page-data":"replace",orderby:e.orderby,getcount:!0,"page-size":e.options.pageSize,"page-current":e.options.pageCurrent,options:e.options,loadtime:"manual"},on:{load:function(t){arguments[0]=t=e.$handleEvent(t),e.onqueryload.apply(void 0,arguments)}},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.data,i=t.pagination,r=t.loading,o=t.error,s=t.options;return[n("uni-table",{ref:"table",attrs:{loading:r,emptyText:o.message||"没有更多数据",border:!0,stripe:!0,type:"selection"},on:{"selection-change":function(t){arguments[0]=t=e.$handleEvent(t),e.selectionChange.apply(void 0,arguments)}}},[n("uni-tr",[n("uni-th",{attrs:{align:"center",sortable:!0},on:{"sort-change":function(t){arguments[0]=t=e.$handleEvent(t),e.sortChange(t,"avatar")}}},[e._v("封面")]),n("uni-th",{attrs:{align:"center","filter-type":"select","filter-data":s.filterData.zy_gs_localdata},on:{"filter-change":function(t){arguments[0]=t=e.$handleEvent(t),e.filterChange(t,"zy_gs")}}},[e._v("资源类型")]),n("uni-th",{attrs:{align:"center","filter-type":"search",sortable:!0},on:{"filter-change":function(t){arguments[0]=t=e.$handleEvent(t),e.filterChange(t,"title")},"sort-change":function(t){arguments[0]=t=e.$handleEvent(t),e.sortChange(t,"title")}}},[e._v("标题")]),n("uni-th",{attrs:{align:"center","filter-type":"search",sortable:!0},on:{"filter-change":function(t){arguments[0]=t=e.$handleEvent(t),e.filterChange(t,"categorieszw")},"sort-change":function(t){arguments[0]=t=e.$handleEvent(t),e.sortChange(t,"categorieszw")}}},[e._v("分类")]),n("uni-th",{attrs:{align:"center","filter-type":"search",sortable:!0},on:{"filter-change":function(t){arguments[0]=t=e.$handleEvent(t),e.filterChange(t,"labels")},"sort-change":function(t){arguments[0]=t=e.$handleEvent(t),e.sortChange(t,"labels")}}},[e._v("标签")]),n("uni-th",{attrs:{align:"center",width:"200","filter-type":"search",sortable:!0},on:{"filter-change":function(t){arguments[0]=t=e.$handleEvent(t),e.filterChange(t,"author")},"sort-change":function(t){arguments[0]=t=e.$handleEvent(t),e.sortChange(t,"author")}}},[e._v("来源")]),e.isManger?n("uni-th",{attrs:{align:"center",width:"80px"}},[e._v("投稿人")]):e._e(),n("uni-th",{attrs:{align:"center","filter-type":"select","filter-data":s.filterData.article_status_localdata},on:{"filter-change":function(t){arguments[0]=t=e.$handleEvent(t),e.filterChange(t,"article_status")}}},[e._v("状态")]),e.isManger?n("uni-th",{attrs:{align:"center","filter-type":"select","filter-data":s.filterData.is_recommend_localdata},on:{"filter-change":function(t){arguments[0]=t=e.$handleEvent(t),e.filterChange(t,"is_recommend")}}},[e._v("推荐")]):e._e(),n("uni-th",{attrs:{align:"center","filter-type":"select","filter-data":s.filterData.is_grant_localdata},on:{"filter-change":function(t){arguments[0]=t=e.$handleEvent(t),e.filterChange(t,"is_grant")}}},[e._v("授权")]),n("uni-th",{attrs:{align:"center","filter-type":"select","filter-data":s.filterData.is_encryption_localdata},on:{"filter-change":function(t){arguments[0]=t=e.$handleEvent(t),e.filterChange(t,"is_encryption")}}},[e._v("加密")]),n("uni-th",{attrs:{align:"center"}},[e._v("发表时间")]),n("uni-th",{attrs:{align:"center"}},[e._v("更新时间")]),n("uni-th",{attrs:{align:"center"}},[e._v("操作")])],1),e._l(a,(function(t,a){return n("uni-tr",{key:a},[n("uni-td",{attrs:{align:"center"}},[Array.isArray(t.avatar)?[e._l(t.avatar,(function(e,t){return[n("u-image",{attrs:{width:"100%",height:"140rpx",mode:"widthFix","border-radius":"10",src:e.url}})]}))]:[n("u-image",{attrs:{width:"100%",height:"140rpx",mode:"widthFix","border-radius":"10",src:t.avatar.url}})]],2),n("uni-td",{attrs:{align:"center"}},[e._v(e._s(s.zy_gs_valuetotext[t.zy_gs]))]),n("uni-td",{attrs:{align:"center"}},[e._v(e._s(t.title))]),n("uni-td",{attrs:{align:"center"}},[e._v(e._s(t.categorieszw))]),n("uni-td",{attrs:{align:"center"}},[e._v(e._s(t.labels))]),n("uni-td",{attrs:{align:"center"}},[n("v-uni-view",{staticStyle:{width:"200px"}},[e._v(e._s(t.author))])],1),e.isManger?n("uni-td",{attrs:{align:"center"}},[e._v(e._s(t.user_id[0]?t.user_id[0].nickname:""))]):e._e(),n("uni-td",{attrs:{align:"center"}},[n("v-uni-checkbox-group",{on:{change:function(n){arguments[0]=n=e.$handleEvent(n),e.change_data(t,"article_status")}}},[n("v-uni-checkbox",{attrs:{value:"article_status",checked:1==t.article_status}})],1)],1),e.isManger?n("uni-td",{attrs:{align:"center"}},[n("v-uni-checkbox-group",{on:{change:function(n){arguments[0]=n=e.$handleEvent(n),e.change_data(t,"is_recommend")}}},[n("v-uni-checkbox",{attrs:{value:"is_recommend",checked:1==t.is_recommend}})],1)],1):e._e(),n("uni-td",{attrs:{align:"center"}},[n("v-uni-checkbox-group",{on:{change:function(n){arguments[0]=n=e.$handleEvent(n),e.change_data(t,"is_grant")}}},[n("v-uni-checkbox",{attrs:{value:"is_grant",checked:1==t.is_grant}})],1)],1),n("uni-td",{attrs:{align:"center"}},[n("v-uni-checkbox-group",{on:{change:function(n){arguments[0]=n=e.$handleEvent(n),e.change_data(t,"is_encryption")}}},[n("v-uni-checkbox",{attrs:{value:"is_encryption",checked:1==t.is_encryption}})],1)],1),n("uni-td",{attrs:{align:"center"}},[n("uni-dateformat",{attrs:{threshold:[0,0],date:t.publish_date}})],1),n("uni-td",{attrs:{align:"center"}},[n("uni-dateformat",{attrs:{threshold:[0,0],date:t.last_modify_date}})],1),n("uni-td",{attrs:{align:"center"}},[n("v-uni-view",{staticClass:"uni-group"},[n("v-uni-button",{staticClass:"uni-button",attrs:{size:"mini",type:"primary"},on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.navigateTo("./edit?id="+t._id,!1)}}},[e._v("修改")]),n("v-uni-button",{staticClass:"uni-button",attrs:{size:"mini",type:"warn"},on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.confirmDelete(t._id)}}},[e._v("删除")]),1==t.zy_gs?n("v-uni-button",{staticClass:"uni-button",attrs:{size:"mini",type:"warn"},on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.importExcel(t._id)}}},[e._v("导入弹幕Excel")]):e._e(),2==t.zy_gs?n("v-uni-button",{staticClass:"uni-button",attrs:{size:"mini",type:"warn"},on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.importGechi(t._id)}}},[e._v("输入歌词")]):e._e()],1)],1)],1)}))],2),n("v-uni-view",{staticClass:"uni-pagination-box"},[n("uni-pagination",{attrs:{"show-icon":!0,"page-size":i.size,total:i.count},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.onPageChanged.apply(void 0,arguments)}},model:{value:i.current,callback:function(t){e.$set(i,"current",t)},expression:"pagination.current"}})],1)]}}])})],1),n("u-modal",{attrs:{width:"500px","show-cancel-button":!0,title:"输入歌词"},on:{cancel:function(t){arguments[0]=t=e.$handleEvent(t),e.gechi},confirm:function(t){arguments[0]=t=e.$handleEvent(t),e.confirmGechi.apply(void 0,arguments)}},model:{value:e.showgechi,callback:function(t){e.showgechi=t},expression:"showgechi"}},[n("v-uni-view",{staticClass:"slot-gonggao_content",staticStyle:{padding:"10px"}},[n("v-uni-scroll-view",{staticClass:"scroll-Y",attrs:{"scroll-top":e.scrollTop,"scroll-y":"true"}},[n("u-input",{attrs:{maxlength:1e4,type:"textarea"},model:{value:e.gechi,callback:function(t){e.gechi=t},expression:"gechi"}})],1)],1)],1)],1)},r=[]},"9ce2":function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return a}));var a={uIcon:n("1369").default},i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"u-image",style:[e.wrapStyle,e.backgroundStyle],on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onClick.apply(void 0,arguments)}}},[e.isError?e._e():n("v-uni-image",{staticClass:"u-image__image",style:{borderRadius:"circle"==e.shape?"50%":e.$u.addUnit(e.borderRadius)},attrs:{src:e.src,mode:e.mode,"lazy-load":e.lazyLoad,"show-menu-by-longpress":e.showMenuByLongpress},on:{error:function(t){arguments[0]=t=e.$handleEvent(t),e.onErrorHandler.apply(void 0,arguments)},load:function(t){arguments[0]=t=e.$handleEvent(t),e.onLoadHandler.apply(void 0,arguments)}}}),e.showLoading&&e.loading?n("v-uni-view",{staticClass:"u-image__loading",style:{borderRadius:"circle"==e.shape?"50%":e.$u.addUnit(e.borderRadius),backgroundColor:this.bgColor}},[e.$slots.loading?e._t("loading"):n("u-icon",{attrs:{name:e.loadingIcon,width:e.width,height:e.height}})],2):e._e(),e.showError&&e.isError&&!e.loading?n("v-uni-view",{staticClass:"u-image__error",style:{borderRadius:"circle"==e.shape?"50%":e.$u.addUnit(e.borderRadius)}},[e.$slots.error?e._t("error"):n("u-icon",{attrs:{name:e.errorIcon,width:e.width,height:e.height}})],2):e._e()],1)},r=[]},a43c:function(e,t,n){"use strict";var a=n("4ea4");n("4d63"),n("ac1f"),n("25f0"),Object.defineProperty(t,"__esModule",{value:!0}),t.filterToWhere=l,t.enumConverter=t.validator=void 0;var i=a(n("3835")),r=a(n("b85c")),o={title:{rules:[{required:!0},{format:"string"}],label:"标题"},author:{rules:[{required:!0},{format:"string"}],label:"作者"},categories:{rules:[{format:"string"}],label:"分类"},categorieszw:{rules:[{format:"string"}],label:"分类中文"},labels:{rules:[{format:"string"}],label:"标签"},article_status:{rules:[{format:"int"},{range:[{value:0,text:"锁定"},{value:1,text:"启用"}]}],defaultValue:0,label:"文章状态"},avatar:{rules:[{format:"array"},{arrayType:"file"}],label:"封面大图"},zy_gs:{rules:[{format:"int"},{range:[{value:0,text:"图片"},{value:1,text:"视频"},{value:2,text:"音乐"},{value:3,text:"文章"}]}],defaultValue:0,label:"资源类型"},resources:{rules:[{format:"array"},{arrayType:"file"}],label:"附件资源"},aliyun_dz:{rules:[{format:"string"}],label:"外链"},excerpt:{rules:[{format:"string"}],label:"内容"},is_grant:{rules:[{format:"int"},{range:[{value:0,text:"未授权"},{value:1,text:"已授权"}]}],defaultValue:0,label:"是否授权"},is_encryption:{rules:[{format:"int"},{range:[{value:0,text:"不加密"},{value:1,text:"加密"}]}],defaultValue:0,label:"是否加密"}};t.validator=o;var s={article_status_valuetotext:{0:"锁定",1:"启用"},zy_gs_valuetotext:{0:"图片",1:"视频",2:"音乐",3:"文章"},is_grant_valuetotext:{0:"未授权",1:"已授权"},is_encryption_valuetotext:{0:"不加密",1:"加密"}};function l(e,t){var n={};for(var a in e){var o=e[a],s=o.type,l=o.value;switch(s){case"search":"string"===typeof l&&l.length&&(n[a]=new RegExp(l));break;case"select":if(l.length){var c,u=[],d=(0,r.default)(l);try{for(d.s();!(c=d.n()).done;){var h=c.value;u.push(t.eq(h))}}catch(C){d.e(C)}finally{d.f()}n[a]=t.or(u)}break;case"range":if(l.length){var f=l[0],g=l[1];n[a]=t.and([t.gte(f),t.lte(g)])}break;case"date":if(l.length){var v=(0,i.default)(l,2),p=v[0],_=v[1],m=new Date(p),b=new Date(_);n[a]=t.and([t.gte(m),t.lte(b)])}break;case"timestamp":if(l.length){var y=(0,i.default)(l,2),x=y[0],w=y[1];n[a]=t.and([t.gte(x),t.lte(w)])}break}}return n}t.enumConverter=s},b81f:function(e,t,n){n("c975"),n("ac1f"),n("5319");var a={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t,n,i,r,o,s,l,c="",u=0;e=a._utf8_encode(e);while(u<e.length)t=e.charCodeAt(u++),n=e.charCodeAt(u++),i=e.charCodeAt(u++),r=t>>2,o=(3&t)<<4|n>>4,s=(15&n)<<2|i>>6,l=63&i,isNaN(n)?s=l=64:isNaN(i)&&(l=64),c=c+a._keyStr.charAt(r)+a._keyStr.charAt(o)+a._keyStr.charAt(s)+a._keyStr.charAt(l);return c},decode:function(e){var t,n,i,r,o,s,l,c="",u=0;e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");while(u<e.length)r=a._keyStr.indexOf(e.charAt(u++)),o=a._keyStr.indexOf(e.charAt(u++)),s=a._keyStr.indexOf(e.charAt(u++)),l=a._keyStr.indexOf(e.charAt(u++)),t=r<<2|o>>4,n=(15&o)<<4|s>>2,i=(3&s)<<6|l,c+=String.fromCharCode(t),64!=s&&(c+=String.fromCharCode(n)),64!=l&&(c+=String.fromCharCode(i));return c=a._utf8_decode(c),c},_utf8_encode:function(e){e=e.replace(/\r\n/g,"\n");for(var t="",n=0;n<e.length;n++){var a=e.charCodeAt(n);a<128?t+=String.fromCharCode(a):a>127&&a<2048?(t+=String.fromCharCode(a>>6|192),t+=String.fromCharCode(63&a|128)):(t+=String.fromCharCode(a>>12|224),t+=String.fromCharCode(a>>6&63|128),t+=String.fromCharCode(63&a|128))}return t},_utf8_decode:function(e){var t="",n=0,a=c1=c2=0;while(n<e.length)a=e.charCodeAt(n),a<128?(t+=String.fromCharCode(a),n++):a>191&&a<224?(c2=e.charCodeAt(n+1),t+=String.fromCharCode((31&a)<<6|63&c2),n+=2):(c2=e.charCodeAt(n+1),c3=e.charCodeAt(n+2),t+=String.fromCharCode((15&a)<<12|(63&c2)<<6|63&c3),n+=3);return t}};e.exports=a},ec62:function(e,t,n){"use strict";n.r(t);var a=n("9ce2"),i=n("0657");for(var r in i)"default"!==r&&function(e){n.d(t,e,(function(){return i[e]}))}(r);n("132b");var o,s=n("f0c5"),l=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"00140dbc",null,!1,a["a"],o);t["default"]=l.exports},ff8d:function(e,t,n){"use strict";(function(e){var a=n("4ea4");n("4de4"),n("c975"),n("d81d"),n("b64b"),n("4d63"),n("ac1f"),n("25f0"),n("1276"),n("498a"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("96cf");var i=a(n("1da1")),r=a(n("5530")),o=n("a43c"),s=e.database(),l=n("b81f"),c="publish_date desc",u=["title","categorieszw","labels"],d=20,h=1,f={ascending:"asc",descending:"desc"},g={data:function(){return{gechiiscz:!1,scrollTop:0,currentId:"",showgechi:!1,gechi:"",query:"",where:"",orderby:c,orderByFieldName:"",selectedIndexs:[],collection:"jz-opendb-resources,uni-id-users",field:"publish_date,last_modify_date,categories,categorieszw,labels,author,title,article_status,is_recommend,is_grant,is_encryption,is_login,avatar,resources,zy_gs,excerpt,content,user_id{nickname}",options:(0,r.default)({pageSize:d,pageCurrent:h,filterData:{article_status_localdata:[{value:0,text:"锁定"},{value:1,text:"启用"}],is_recommend_localdata:[{value:0,text:"不推荐"},{value:1,text:"推荐"}],zy_gs_localdata:[{value:0,text:"图片"},{value:1,text:"视频"},{value:2,text:"音乐"},{value:3,text:"文章"}],is_grant_localdata:[{value:0,text:"未授权"},{value:1,text:"已授权"}],is_encryption_localdata:[{value:0,text:"不加密"},{value:1,text:"加密"}]}},o.enumConverter),imageStyles:{width:64,height:64},exportExcel:{filename:"jz-opendb-resources.xls",type:"xls",fields:{"分类":"categories","分类中文":"categorieszw","标签":"labels","来源":"author","标题":"title","状态":"article_status","是否推荐":"is_recommend","是否授权":"is_grant","是否加密":"is_encryption","封面大图":"avatar","资源类型":"zy_gs","附件资源":"resources","摘要":"excerpt","内容":"content"}},exportExcelData:[],isManger:!0}},onLoad:function(){this._filter={}},onReady:function(){var e=this,t=this.getUserRole();-1!=t.indexOf("only_zylist")?(this.isManger=!1,this.collection="jz-opendb-resources",this.field="publish_date,last_modify_date,categories,categorieszw,labels,author,title,article_status,is_recommend,is_grant,is_encryption,is_login,avatar,resources,zy_gs,excerpt,content",this.where="user_id==$cloudEnv_uid",this.$nextTick((function(){e.loadData()}))):(this.isManger=!0,this.$refs.udb.loadData())},methods:{importGechi:function(e){var t=this;return(0,i.default)(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t.currentId=e,t.showgechi=!0,n.next=4,s.collection("jz-custom-gechi").where({resources_id:e}).get();case 4:a=n.sent,console.log("_gechi",a),a.result.data&&a.result.data.length>0?(t.gechiiscz=!0,t.gechi=a.result.data[0].comment):(t.gechiiscz=!1,t.gechi="");case 7:case"end":return n.stop()}}),n)})))()},confirmGechi:function(){var e=this;return(0,i.default)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.gechiiscz){t.next=5;break}return t.next=3,s.collection("jz-custom-gechi").where({resources_id:e.currentId}).update({comment:e.gechi});case 3:t.next=7;break;case 5:return t.next=7,s.collection("jz-custom-gechi").add({resources_id:e.currentId,comment:e.gechi});case 7:e.gechi="",uni.showToast({title:"操作成功"});case 9:case"end":return t.stop()}}),t)})))()},importExcel:function(t){var n=this;uni.chooseFile({count:1,extension:[".xls",".xlsx",".csv"],success:function(a){n.urlTobase64(a.tempFilePaths[0],(function(n){e.callFunction({name:"jzfunction",data:{action:"excel/importExcel",data:{base:n,id:t}}}).then((function(e){"0000"==e.result.state?uni.showToast({title:"导入成功"}):uni.showToast({title:"导入失败",icon:"none"})}))}))}})},urlTobase64:function(e,t){uni.request({url:e,method:"GET",responseType:"arraybuffer",success:function(e){var n=uni.arrayBufferToBase64(e.data);t(n)}})},getUserRole:function(){var e=uni.getStorageSync("uni_id_token"),t={};if(e){e=e.split(".")[1];t=l.decode(e);t=JSON.parse(t.split("}")[0]+"}")}return t.role},change_data:function(e,t){var n={};n[t]=1==e[t]?0:1,console.log("obj",n),this.$set(e,t,n[t]),this.updateItem(e,n)},updateItem:function(e,t){var n=this;return Object.assign(t,{last_modify_date:s.env.now}),s.collection("jz-opendb-resources").doc(e._id).update(t).then((function(e){uni.showToast({title:"修改成功"}),n.getOpenerEventChannel().emit("refreshData")})).catch((function(e){uni.showModal({content:e.message||"请求服务失败",showCancel:!1})}))},onqueryload:function(e){this.exportExcelData=e},getWhere:function(){var e=this.query.trim();if(!e)return"";var t=new RegExp(e,"i");return u.map((function(e){return t+".test("+e+")"})).join(" || ")},search:function(){var e=this,t=this.getWhere();this.where=t;var n=this.getUserRole();-1!=n.indexOf("only_zylist")&&(this.where?this.where="("+this.where+")&& user_id == $cloudEnv_uid":this.where+="user_id == $cloudEnv_uid"),this.$nextTick((function(){e.loadData()}))},loadData:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.$refs.udb.loadData({clear:e})},onPageChanged:function(e){this.selectedIndexs.length=0,this.$refs.table.clearSelection(),this.$refs.udb.loadData({current:e.current})},navigateTo:function(e,t){var n=this;uni.navigateTo({url:e,events:{refreshData:function(){n.loadData(t)}}})},selectedItems:function(){var e=this.$refs.udb.dataList;return this.selectedIndexs.map((function(t){return e[t]._id}))},delTable:function(){var e=this;this.$refs.udb.remove(this.selectedItems(),{success:function(t){e.$refs.table.clearSelection()}})},selectionChange:function(e){this.selectedIndexs=e.detail.index},confirmDelete:function(e){var t=this;this.$refs.udb.remove(e,{success:function(e){t.$refs.table.clearSelection()}})},sortChange:function(e,t){var n=this;this.orderByFieldName=t,e.order?this.orderby=t+" "+f[e.order]:this.orderby="",this.$refs.table.clearSelection(),this.$nextTick((function(){n.$refs.udb.loadData()}))},filterChange:function(e,t){var n=this;this._filter[t]={type:e.filterType,value:e.filter};var a=(0,o.filterToWhere)(this._filter,s.command);Object.keys(a).length?this.where=a:this.where="",this.$nextTick((function(){n.$refs.udb.loadData()}))}}};t.default=g}).call(this,n("a9ff")["default"])}}]);