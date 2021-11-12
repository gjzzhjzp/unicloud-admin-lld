(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-system-app-list"],{"03ca":function(e,t,n){"use strict";var a=n("4ea4");n("4d63"),n("ac1f"),n("25f0"),Object.defineProperty(t,"__esModule",{value:!0}),t.filterToWhere=u,t.enumConverter=t.validator=void 0;var i=a(n("3835")),r=a(n("b85c")),o={appid:{rules:[{required:!0},{format:"string"}],label:"AppID"},name:{rules:[{required:!0},{format:"string"}],label:"应用名称"},description:{rules:[{required:!0},{format:"string"}],label:"应用描述"},create_date:{rules:[{format:"timestamp"}],label:"创建时间"}};t.validator=o;var s={};function u(e,t){var n={};for(var a in e){var o=e[a],s=o.type,u=o.value;switch(s){case"search":"string"===typeof u&&u.length&&(n[a]=new RegExp(u));break;case"select":if(u.length){var c,l=[],d=(0,r.default)(u);try{for(d.s();!(c=d.n()).done;){var f=c.value;l.push(t.eq(f))}}catch(x){d.e(x)}finally{d.f()}n[a]=t.or(l)}break;case"range":if(u.length){var h=u[0],p=u[1];n[a]=t.and([t.gte(h),t.lte(p)])}break;case"date":if(u.length){var v=(0,i.default)(u,2),b=v[0],m=v[1],g=new Date(b),y=new Date(m);n[a]=t.and([t.gte(g),t.lte(y)])}break;case"timestamp":if(u.length){var _=(0,i.default)(u,2),$=_[0],w=_[1];n[a]=t.and([t.gte($),t.lte(w)])}break}}return n}t.enumConverter=s},"0be9":function(e,t,n){"use strict";var a;n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return a}));var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-text",[e._v(e._s(e.dateShow))])},r=[]},"55bd":function(e,t,n){"use strict";n.r(t);var a=n("d34c"),i=n("da2d");for(var r in i)"default"!==r&&function(e){n.d(t,e,(function(){return i[e]}))}(r);var o,s=n("f0c5"),u=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"709d383d",null,!1,a["a"],o);t["default"]=u.exports},6040:function(e,t,n){"use strict";(function(e){var a=n("4ea4");n("4de4"),n("7db0"),n("d81d"),n("b64b"),n("d3b7"),n("4d63"),n("ac1f"),n("25f0"),n("498a"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n("5530")),r=n("03ca"),o=n("2f62"),s=e.database(),u="",c=[],l=20,d=1,f={ascending:"asc",descending:"desc"},h={data:function(){return{query:"",where:"",orderby:u,orderByFieldName:"",selectedIndexs:[],options:(0,i.default)({pageSize:l,pageCurrent:d,filterData:{}},r.enumConverter),imageStyles:{width:64,height:64},exportExcel:{filename:"opendb-app-list.xls",type:"xls",fields:{AppID:"appid","应用名称":"name","应用描述":"description","创建时间":"create_date"}},exportExcelData:[],addAppidLoading:!0}},onLoad:function(){this._filter={}},onReady:function(){this.$refs.udb.loadData()},computed:(0,i.default)({},(0,o.mapState)("app",["appName","appid"])),methods:{onqueryload:function(e){var t=this;e.find((function(e){return e.appid===t.appid}))?this.addAppidLoading=!1:this.addCurrentAppid({appid:this.appid,name:this.appName,description:"admin 管理后台",create_date:Date.now()}),this.exportExcelData=e},addCurrentAppid:function(e){var t=this;s.collection("opendb-app-list").add(e).then((function(e){t.loadData(),setTimeout((function(){uni.showModal({content:"检测到数据库中无当前应用, 已自动添加应用: ".concat(t.appName),showCancel:!1})}),500)})).catch((function(e){})).finally((function(){t.addAppidLoading=!1}))},getWhere:function(){var e=this.query.trim();if(!e)return"";var t=new RegExp(e,"i");return c.map((function(e){return t+".test("+e+")"})).join(" || ")},search:function(){var e=this.getWhere();this.where=e,this.loadData()},loadData:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.$refs.udb.loadData({clear:e})},onPageChanged:function(e){this.selectedIndexs.length=0,this.$refs.table.clearSelection(),this.$refs.udb.loadData({current:e.current})},navigateTo:function(e,t){var n=this;uni.navigateTo({url:e,events:{refreshData:function(){n.loadData(t)}}})},selectedItems:function(){var e=this.$refs.udb.dataList;return this.selectedIndexs.map((function(t){return e[t]._id}))},delTable:function(){var e=this;this.$refs.udb.remove(this.selectedItems(),{success:function(t){e.$refs.table.clearSelection()}})},selectionChange:function(e){this.selectedIndexs=e.detail.index},confirmDelete:function(e){var t=this;this.$refs.udb.remove(e,{success:function(e){t.$refs.table.clearSelection()}})},sortChange:function(e,t){var n=this;this.orderByFieldName=t,e.order?this.orderby=t+" "+f[e.order]:this.orderby="",this.$refs.table.clearSelection(),this.$nextTick((function(){n.$refs.udb.loadData()}))},filterChange:function(e,t){var n=this;this._filter[t]={type:e.filterType,value:e.filter};var a=(0,r.filterToWhere)(this._filter,s.command);Object.keys(a).length?this.where=a:this.where="",this.$nextTick((function(){n.$refs.udb.loadData()}))}}};t.default=h}).call(this,n("a9ff")["default"])},"8eca":function(e,t,n){"use strict";n("a9e3"),n("e25e"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n("47e2"),i={name:"uniDateformat",props:{date:{type:[Object,String,Number],default:function(){return"-"}},locale:{type:String,default:"zh"},threshold:{type:Array,default:function(){return[0,0]}},format:{type:String,default:"yyyy/MM/dd hh:mm:ss"},refreshRate:{type:[Number,String],default:0}},data:function(){return{refreshMark:0}},computed:{dateShow:function(){return this.refreshMark,(0,a.friendlyDate)(this.date,{locale:this.locale,threshold:this.threshold,format:this.format})}},watch:{refreshRate:{handler:function(){this.setAutoRefresh()},immediate:!0}},methods:{refresh:function(){this.refreshMark++},setAutoRefresh:function(){var e=this;clearInterval(this.refreshInterval),this.refreshRate&&(this.refreshInterval=setInterval((function(){e.refresh()}),parseInt(this.refreshRate)))}}};t.default=i},acf7:function(e,t,n){"use strict";n.r(t);var a=n("8eca"),i=n.n(a);for(var r in a)"default"!==r&&function(e){n.d(t,e,(function(){return a[e]}))}(r);t["default"]=i.a},c243:function(e,t,n){"use strict";n.r(t);var a=n("0be9"),i=n("acf7");for(var r in i)"default"!==r&&function(e){n.d(t,e,(function(){return i[e]}))}(r);var o,s=n("f0c5"),u=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"690ab064",null,!1,a["a"],o);t["default"]=u.exports},d34c:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return a}));var a={downloadExcel:n("1a3c").default,unicloudDb:n("960d").default,uniTable:n("91be").default,uniTr:n("30fa").default,uniTh:n("d6f7").default,uniTd:n("a379").default,uniDateformat:n("c243").default,uniPagination:n("4c2fb").default},i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"fix-top-window"},[n("v-uni-view",{staticClass:"uni-header"},[n("v-uni-view",{staticClass:"uni-group"},[n("v-uni-view",{staticClass:"uni-title"}),n("v-uni-view",{staticClass:"uni-sub-title"},[e._v(e._s(e.$t("app.text.describle")))])],1),n("v-uni-view",{staticClass:"uni-group"},[n("v-uni-input",{staticClass:"uni-search",attrs:{type:"text",placeholder:e.$t("common.placeholder.query")},on:{confirm:function(t){arguments[0]=t=e.$handleEvent(t),e.search.apply(void 0,arguments)}},model:{value:e.query,callback:function(t){e.query=t},expression:"query"}}),n("v-uni-button",{staticClass:"uni-button",attrs:{type:"default",size:"mini"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.search.apply(void 0,arguments)}}},[e._v(e._s(e.$t("common.button.search")))]),n("v-uni-button",{staticClass:"uni-button",attrs:{type:"default",size:"mini"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.navigateTo("./add")}}},[e._v(e._s(e.$t("common.button.add")))]),n("v-uni-button",{staticClass:"uni-button",attrs:{type:"default",size:"mini",disabled:!e.selectedIndexs.length},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.delTable.apply(void 0,arguments)}}},[e._v(e._s(e.$t("common.button.batchDelete")))]),n("download-excel",{staticClass:"hide-on-phone",attrs:{fields:e.exportExcel.fields,data:e.exportExcelData,type:e.exportExcel.type,name:e.exportExcel.filename}},[n("v-uni-button",{staticClass:"uni-button",attrs:{type:"primary",size:"mini"}},[e._v(e._s(e.$t("common.button.exportExcel")))])],1)],1)],1),n("v-uni-view",{staticClass:"uni-container"},[n("unicloud-db",{ref:"udb",attrs:{collection:"opendb-app-list",field:"appid,name,description,create_date",where:e.where,"page-data":"replace",orderby:e.orderby,getcount:!0,"page-size":e.options.pageSize,"page-current":e.options.pageCurrent,options:e.options,loadtime:"manual"},on:{load:function(t){arguments[0]=t=e.$handleEvent(t),e.onqueryload.apply(void 0,arguments)}},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.data,i=t.pagination,r=t.loading,o=t.error;t.options;return[n("uni-table",{ref:"table",staticClass:"table-pc",attrs:{loading:r||e.addAppidLoading,emptyText:o.message||e.$t("common.empty"),border:!0,stripe:!0,type:"selection"},on:{"selection-change":function(t){arguments[0]=t=e.$handleEvent(t),e.selectionChange.apply(void 0,arguments)}}},[n("uni-tr",[n("uni-th",{attrs:{align:"center","filter-type":"search",sortable:!0},on:{"filter-change":function(t){arguments[0]=t=e.$handleEvent(t),e.filterChange(t,"appid")},"sort-change":function(t){arguments[0]=t=e.$handleEvent(t),e.sortChange(t,"appid")}}},[e._v("AppID")]),n("uni-th",{attrs:{align:"center","filter-type":"search",sortable:!0},on:{"filter-change":function(t){arguments[0]=t=e.$handleEvent(t),e.filterChange(t,"name")},"sort-change":function(t){arguments[0]=t=e.$handleEvent(t),e.sortChange(t,"name")}}},[e._v("应用名称")]),n("uni-th",{attrs:{align:"center","filter-type":"search",sortable:!0},on:{"filter-change":function(t){arguments[0]=t=e.$handleEvent(t),e.filterChange(t,"description")},"sort-change":function(t){arguments[0]=t=e.$handleEvent(t),e.sortChange(t,"description")}}},[e._v("应用描述")]),n("uni-th",{attrs:{align:"center","filter-type":"timestamp",sortable:!0},on:{"filter-change":function(t){arguments[0]=t=e.$handleEvent(t),e.filterChange(t,"create_date")},"sort-change":function(t){arguments[0]=t=e.$handleEvent(t),e.sortChange(t,"create_date")}}},[e._v("创建时间")]),n("uni-th",{attrs:{align:"center"}},[e._v("操作")])],1),e._l(a,(function(t,a){return n("uni-tr",{key:a},[n("uni-td",{attrs:{align:"center"}},[e._v(e._s(t.appid))]),n("uni-td",{attrs:{align:"center"}},[e._v(e._s(t.name))]),n("uni-td",{attrs:{align:"center"}},[e._v(e._s(t.description))]),n("uni-td",{attrs:{align:"center"}},[n("uni-dateformat",{attrs:{threshold:[0,0],date:t.create_date}})],1),n("uni-td",{attrs:{align:"center"}},[t.appid===e.appid?n("v-uni-view",[e._v("-")]):n("v-uni-view",{staticClass:"uni-group"},[n("v-uni-button",{staticClass:"uni-button",attrs:{size:"mini",type:"primary"},on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.navigateTo("./edit?id="+t._id,!1)}}},[e._v(e._s(e.$t("common.button.edit\t")))]),n("v-uni-button",{staticClass:"uni-button",attrs:{size:"mini",type:"warn"},on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.confirmDelete(t._id)}}},[e._v(e._s(e.$t("common.button.delete")))])],1)],1)],1)}))],2),n("v-uni-view",{staticClass:"uni-pagination-box"},[n("uni-pagination",{attrs:{"show-icon":!0,"page-size":i.size,total:i.count},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.onPageChanged.apply(void 0,arguments)}},model:{value:i.current,callback:function(t){e.$set(i,"current",t)},expression:"pagination.current"}})],1)]}}])})],1)],1)},r=[]},da2d:function(e,t,n){"use strict";n.r(t);var a=n("6040"),i=n.n(a);for(var r in a)"default"!==r&&function(e){n.d(t,e,(function(){return a[e]}))}(r);t["default"]=i.a}}]);