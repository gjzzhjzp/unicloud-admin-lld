(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-jz-custom-yhyqm-list"],{"0513":function(e,t,n){"use strict";var a=n("4ea4");n("4d63"),n("ac1f"),n("25f0"),Object.defineProperty(t,"__esModule",{value:!0}),t.filterToWhere=o,t.enumConverter=t.validator=void 0;var i=a(n("3835")),r=a(n("b85c")),s={yqr_id:{rules:[{required:!0},{format:"string"}]},date:{rules:[{format:"string"}],defaultValue:{$env:"now"},label:"创建时间"}};t.validator=s;var u={};function o(e,t){var n={};for(var a in e){var s=e[a],u=s.type,o=s.value;switch(u){case"search":"string"===typeof o&&o.length&&(n[a]=new RegExp(o));break;case"select":if(o.length){var l,c=[],d=(0,r.default)(o);try{for(d.s();!(l=d.n()).done;){var f=l.value;c.push(t.eq(f))}}catch($){d.e($)}finally{d.f()}n[a]=t.or(c)}break;case"range":if(o.length){var h=o[0],v=o[1];n[a]=t.and([t.gte(h),t.lte(v)])}break;case"date":if(o.length){var p=(0,i.default)(o,2),b=p[0],g=p[1],y=new Date(b),m=new Date(g);n[a]=t.and([t.gte(y),t.lte(m)])}break;case"timestamp":if(o.length){var _=(0,i.default)(o,2),x=_[0],w=_[1];n[a]=t.and([t.gte(x),t.lte(w)])}break}}return n}t.enumConverter=u},4284:function(e,t,n){"use strict";(function(e){var a=n("4ea4");n("4de4"),n("d81d"),n("b64b"),n("4d63"),n("ac1f"),n("25f0"),n("498a"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n("5530")),r=n("0513"),s=e.database(),u="",o=[],l=20,c=1,d={ascending:"asc",descending:"desc"},f={data:function(){return{query:"",where:"",orderby:u,orderByFieldName:"",selectedIndexs:[],options:(0,i.default)({pageSize:l,pageCurrent:c,filterData:{}},r.enumConverter),imageStyles:{width:64,height:64},exportExcel:{filename:"jz-custom-yhyqm.xls",type:"xls",fields:{yqr_id:"yqr_id","创建时间":"date"}},exportExcelData:[]}},onLoad:function(){this._filter={}},onReady:function(){this.$refs.udb.loadData()},methods:{onqueryload:function(e){this.exportExcelData=e},getWhere:function(){var e=this.query.trim();if(!e)return"";var t=new RegExp(e,"i");return o.map((function(e){return t+".test("+e+")"})).join(" || ")},search:function(){var e=this,t=this.getWhere();this.where=t,this.$nextTick((function(){e.loadData()}))},loadData:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.$refs.udb.loadData({clear:e})},onPageChanged:function(e){this.selectedIndexs.length=0,this.$refs.table.clearSelection(),this.$refs.udb.loadData({current:e.current})},navigateTo:function(e,t){var n=this;uni.navigateTo({url:e,events:{refreshData:function(){n.loadData(t)}}})},selectedItems:function(){var e=this.$refs.udb.dataList;return this.selectedIndexs.map((function(t){return e[t]._id}))},delTable:function(){var e=this;this.$refs.udb.remove(this.selectedItems(),{success:function(t){e.$refs.table.clearSelection()}})},selectionChange:function(e){this.selectedIndexs=e.detail.index},confirmDelete:function(e){var t=this;this.$refs.udb.remove(e,{success:function(e){t.$refs.table.clearSelection()}})},sortChange:function(e,t){var n=this;this.orderByFieldName=t,e.order?this.orderby=t+" "+d[e.order]:this.orderby="",this.$refs.table.clearSelection(),this.$nextTick((function(){n.$refs.udb.loadData()}))},filterChange:function(e,t){var n=this;this._filter[t]={type:e.filterType,value:e.filter};var a=(0,r.filterToWhere)(this._filter,s.command);Object.keys(a).length?this.where=a:this.where="",this.$nextTick((function(){n.$refs.udb.loadData()}))}}};t.default=f}).call(this,n("a9ff")["default"])},"4dd2":function(e,t,n){"use strict";n.r(t);var a=n("4284"),i=n.n(a);for(var r in a)"default"!==r&&function(e){n.d(t,e,(function(){return a[e]}))}(r);t["default"]=i.a},"5b75":function(e,t,n){"use strict";var a;n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return a}));var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-text",[e._v(e._s(e.dateShow))])},r=[]},9185:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return a}));var a={downloadExcel:n("bbe9").default,unicloudDb:n("960d").default,uniTable:n("6816").default,uniTr:n("e595").default,uniTh:n("5b23").default,uniTd:n("40b0").default,uniDateformat:n("f88b").default,uniPagination:n("35f7").default},i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",[n("v-uni-view",{staticClass:"uni-header"},[n("v-uni-view",{staticClass:"uni-group"},[n("v-uni-view",{staticClass:"uni-title"}),n("v-uni-view",{staticClass:"uni-sub-title"})],1),n("v-uni-view",{staticClass:"uni-group"},[n("v-uni-input",{staticClass:"uni-search",attrs:{type:"text",placeholder:"请输入搜索内容"},on:{confirm:function(t){arguments[0]=t=e.$handleEvent(t),e.search.apply(void 0,arguments)}},model:{value:e.query,callback:function(t){e.query=t},expression:"query"}}),n("v-uni-button",{staticClass:"uni-button",attrs:{type:"default",size:"mini"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.search.apply(void 0,arguments)}}},[e._v("搜索")]),n("v-uni-button",{staticClass:"uni-button",attrs:{type:"default",size:"mini"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.navigateTo("./add")}}},[e._v("新增")]),n("v-uni-button",{staticClass:"uni-button",attrs:{type:"default",size:"mini",disabled:!e.selectedIndexs.length},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.delTable.apply(void 0,arguments)}}},[e._v("批量删除")]),n("download-excel",{staticClass:"hide-on-phone",attrs:{fields:e.exportExcel.fields,data:e.exportExcelData,type:e.exportExcel.type,name:e.exportExcel.filename}},[n("v-uni-button",{staticClass:"uni-button",attrs:{type:"primary",size:"mini"}},[e._v("导出 Excel")])],1)],1)],1),n("v-uni-view",{staticClass:"uni-container"},[n("unicloud-db",{ref:"udb",attrs:{collection:"jz-custom-yhyqm,uni-id-users",field:"yqr_id{username,nickname},byqr_id{username,nickname},date",where:e.where,"page-data":"replace",orderby:e.orderby,getcount:!0,"page-size":e.options.pageSize,"page-current":e.options.pageCurrent,options:e.options,loadtime:"manual"},on:{load:function(t){arguments[0]=t=e.$handleEvent(t),e.onqueryload.apply(void 0,arguments)}},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.data,i=t.pagination,r=t.loading,s=t.error;t.options;return[n("uni-table",{ref:"table",attrs:{loading:r,emptyText:s.message||"没有更多数据",border:!0,stripe:!0,type:"selection"},on:{"selection-change":function(t){arguments[0]=t=e.$handleEvent(t),e.selectionChange.apply(void 0,arguments)}}},[n("uni-tr",[n("uni-th",{attrs:{align:"center"}},[e._v("邀请人昵称")]),n("uni-th",{attrs:{align:"center"}},[e._v("邀请人用户名")]),n("uni-th",{attrs:{align:"center"}},[e._v("被邀请人昵称")]),n("uni-th",{attrs:{align:"center"}},[e._v("被邀请人用户名")]),n("uni-th",{attrs:{align:"center","filter-type":"search",sortable:!0},on:{"filter-change":function(t){arguments[0]=t=e.$handleEvent(t),e.filterChange(t,"date")},"sort-change":function(t){arguments[0]=t=e.$handleEvent(t),e.sortChange(t,"date")}}},[e._v("创建时间")]),n("uni-th",{attrs:{align:"center"}},[e._v("操作")])],1),e._l(a,(function(t,a){return n("uni-tr",{key:a},[n("uni-td",{attrs:{align:"center"}},[e._v(e._s(t.yqr_id[0]?t.yqr_id[0].nickname:""))]),n("uni-td",{attrs:{align:"center"}},[e._v(e._s(t.yqr_id[0]?t.yqr_id[0].username:""))]),n("uni-td",{attrs:{align:"center"}},[e._v(e._s(t.byqr_id[0]?t.byqr_id[0].nickname:""))]),n("uni-td",{attrs:{align:"center"}},[e._v(e._s(t.byqr_id[0]?t.byqr_id[0].username:""))]),n("uni-td",{attrs:{align:"center"}},[n("uni-dateformat",{attrs:{threshold:[0,0],date:t.date}})],1),n("uni-td",{attrs:{align:"center"}},[n("v-uni-view",{staticClass:"uni-group"},[n("v-uni-button",{staticClass:"uni-button",attrs:{size:"mini",type:"primary"},on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.navigateTo("./edit?id="+t._id,!1)}}},[e._v("修改")]),n("v-uni-button",{staticClass:"uni-button",attrs:{size:"mini",type:"warn"},on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.confirmDelete(t._id)}}},[e._v("删除")])],1)],1)],1)}))],2),n("v-uni-view",{staticClass:"uni-pagination-box"},[n("uni-pagination",{attrs:{"show-icon":!0,"page-size":i.size,total:i.count},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.onPageChanged.apply(void 0,arguments)}},model:{value:i.current,callback:function(t){e.$set(i,"current",t)},expression:"pagination.current"}})],1)]}}])})],1)],1)},r=[]},"9d68":function(e,t,n){"use strict";n.r(t);var a=n("9185"),i=n("4dd2");for(var r in i)"default"!==r&&function(e){n.d(t,e,(function(){return i[e]}))}(r);var s,u=n("f0c5"),o=Object(u["a"])(i["default"],a["b"],a["c"],!1,null,"4bca2ef2",null,!1,a["a"],s);t["default"]=o.exports},b3c8:function(e,t,n){"use strict";n("a9e3"),n("e25e"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n("a0f9"),i={name:"uniDateformat",props:{date:{type:[Object,String,Number],default:function(){return"-"}},locale:{type:String,default:"zh"},threshold:{type:Array,default:function(){return[0,0]}},format:{type:String,default:"yyyy/MM/dd hh:mm:ss"},refreshRate:{type:[Number,String],default:0}},data:function(){return{refreshMark:0}},computed:{dateShow:function(){return this.refreshMark,(0,a.friendlyDate)(this.date,{locale:this.locale,threshold:this.threshold,format:this.format})}},watch:{refreshRate:{handler:function(){this.setAutoRefresh()},immediate:!0}},methods:{refresh:function(){this.refreshMark++},setAutoRefresh:function(){var e=this;clearInterval(this.refreshInterval),this.refreshRate&&(this.refreshInterval=setInterval((function(){e.refresh()}),parseInt(this.refreshRate)))}}};t.default=i},c749:function(e,t,n){"use strict";n.r(t);var a=n("b3c8"),i=n.n(a);for(var r in a)"default"!==r&&function(e){n.d(t,e,(function(){return a[e]}))}(r);t["default"]=i.a},f88b:function(e,t,n){"use strict";n.r(t);var a=n("5b75"),i=n("c749");for(var r in i)"default"!==r&&function(e){n.d(t,e,(function(){return i[e]}))}(r);var s,u=n("f0c5"),o=Object(u["a"])(i["default"],a["b"],a["c"],!1,null,"7d20afea",null,!1,a["a"],s);t["default"]=o.exports}}]);