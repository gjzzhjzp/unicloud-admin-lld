(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-opendb-news-categories-list"],{"02af":function(e,t,n){"use strict";(function(e){var i=n("4ea4");n("4de4"),n("d81d"),n("b64b"),n("4d63"),n("ac1f"),n("25f0"),n("498a"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n("5530")),r=n("47d7"),o=e.database(),l="",s=[],u=20,c=1,d={ascending:"asc",descending:"desc"},f={data:function(){return{query:"",where:"",orderby:l,orderByFieldName:"",selectedIndexs:[],options:(0,a.default)({pageSize:u,pageCurrent:c,filterData:{}},r.enumConverter),imageStyles:{width:64,height:64},exportExcel:{filename:"opendb-news-categories.xls",type:"xls",fields:{"分类编码":"flbm","父级分类编码":"parent_flbm","名称":"name","描述":"description","图标地址":"icon","点击跳转地址":"path"}},exportExcelData:[]}},onLoad:function(){this._filter={}},onReady:function(){this.$refs.udb.loadData()},methods:{onqueryload:function(e){this.exportExcelData=e},getWhere:function(){var e=this.query.trim();if(!e)return"";var t=new RegExp(e,"i");return s.map((function(e){return t+".test("+e+")"})).join(" || ")},search:function(){var e=this,t=this.getWhere();this.where=t,this.$nextTick((function(){e.loadData()}))},loadData:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.$refs.udb.loadData({clear:e})},onPageChanged:function(e){this.selectedIndexs.length=0,this.$refs.table.clearSelection(),this.$refs.udb.loadData({current:e.current})},navigateTo:function(e,t){var n=this;uni.navigateTo({url:e,events:{refreshData:function(){n.loadData(t)}}})},selectedItems:function(){var e=this.$refs.udb.dataList;return this.selectedIndexs.map((function(t){return e[t]._id}))},delTable:function(){var e=this;this.$refs.udb.remove(this.selectedItems(),{success:function(t){e.$refs.table.clearSelection()}})},selectionChange:function(e){this.selectedIndexs=e.detail.index},confirmDelete:function(e){var t=this;this.$refs.udb.remove(e,{success:function(e){t.$refs.table.clearSelection()}})},sortChange:function(e,t){var n=this;this.orderByFieldName=t,e.order?this.orderby=t+" "+d[e.order]:this.orderby="",this.$refs.table.clearSelection(),this.$nextTick((function(){n.$refs.udb.loadData()}))},filterChange:function(e,t){var n=this;this._filter[t]={type:e.filterType,value:e.filter};var i=(0,r.filterToWhere)(this._filter,o.command);Object.keys(i).length?this.where=i:this.where="",this.$nextTick((function(){n.$refs.udb.loadData()}))}}};t.default=f}).call(this,n("a9ff")["default"])},"0a50":function(e,t,n){var i=n("54a6");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=n("4f06").default;a("30f7873a",i,!0,{sourceMap:!1,shadowMode:!1})},1161:function(e,t,n){"use strict";n.r(t);var i=n("cc0f"),a=n("8144");for(var r in a)"default"!==r&&function(e){n.d(t,e,(function(){return a[e]}))}(r);n("252a8");var o,l=n("f0c5"),s=Object(l["a"])(a["default"],i["b"],i["c"],!1,null,"03b6d5de",null,!1,i["a"],o);t["default"]=s.exports},1777:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return i}));var i={downloadExcel:n("1a3c").default,unicloudDb:n("960d").default,uniTable:n("91be").default,uniTr:n("30fa").default,uniTh:n("d6f7").default,uniTd:n("a379").default,uniFilePicker:n("409a").default,uniLink:n("1161").default,uniPagination:n("4c2fb").default},a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",[n("v-uni-view",{staticClass:"uni-header"},[n("v-uni-view",{staticClass:"uni-group"},[n("v-uni-view",{staticClass:"uni-title"}),n("v-uni-view",{staticClass:"uni-sub-title"})],1),n("v-uni-view",{staticClass:"uni-group"},[n("v-uni-input",{staticClass:"uni-search",attrs:{type:"text",placeholder:"请输入搜索内容"},on:{confirm:function(t){arguments[0]=t=e.$handleEvent(t),e.search.apply(void 0,arguments)}},model:{value:e.query,callback:function(t){e.query=t},expression:"query"}}),n("v-uni-button",{staticClass:"uni-button",attrs:{type:"default",size:"mini"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.search.apply(void 0,arguments)}}},[e._v("搜索")]),n("v-uni-button",{staticClass:"uni-button",attrs:{type:"default",size:"mini"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.navigateTo("./add")}}},[e._v("新增")]),n("v-uni-button",{staticClass:"uni-button",attrs:{type:"default",size:"mini",disabled:!e.selectedIndexs.length},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.delTable.apply(void 0,arguments)}}},[e._v("批量删除")]),n("download-excel",{staticClass:"hide-on-phone",attrs:{fields:e.exportExcel.fields,data:e.exportExcelData,type:e.exportExcel.type,name:e.exportExcel.filename}},[n("v-uni-button",{staticClass:"uni-button",attrs:{type:"primary",size:"mini"}},[e._v("导出 Excel")])],1)],1)],1),n("v-uni-view",{staticClass:"uni-container"},[n("unicloud-db",{ref:"udb",attrs:{collection:"opendb-news-categories",field:"flbm,parent_flbm,name,description,icon,path",where:e.where,"page-data":"replace",orderby:e.orderby,getcount:!0,"page-size":e.options.pageSize,"page-current":e.options.pageCurrent,options:e.options,loadtime:"manual"},on:{load:function(t){arguments[0]=t=e.$handleEvent(t),e.onqueryload.apply(void 0,arguments)}},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.data,a=t.pagination,r=t.loading,o=t.error;t.options;return[n("uni-table",{ref:"table",attrs:{loading:r,emptyText:o.message||"没有更多数据",border:!0,stripe:!0,type:"selection"},on:{"selection-change":function(t){arguments[0]=t=e.$handleEvent(t),e.selectionChange.apply(void 0,arguments)}}},[n("uni-tr",[n("uni-th",{attrs:{align:"center","filter-type":"search",sortable:!0},on:{"filter-change":function(t){arguments[0]=t=e.$handleEvent(t),e.filterChange(t,"flbm")},"sort-change":function(t){arguments[0]=t=e.$handleEvent(t),e.sortChange(t,"flbm")}}},[e._v("分类编码")]),n("uni-th",{attrs:{align:"center","filter-type":"search",sortable:!0},on:{"filter-change":function(t){arguments[0]=t=e.$handleEvent(t),e.filterChange(t,"parent_flbm")},"sort-change":function(t){arguments[0]=t=e.$handleEvent(t),e.sortChange(t,"parent_flbm")}}},[e._v("父级分类编码")]),n("uni-th",{attrs:{align:"center","filter-type":"search",sortable:!0},on:{"filter-change":function(t){arguments[0]=t=e.$handleEvent(t),e.filterChange(t,"name")},"sort-change":function(t){arguments[0]=t=e.$handleEvent(t),e.sortChange(t,"name")}}},[e._v("名称")]),n("uni-th",{attrs:{align:"center","filter-type":"search",sortable:!0},on:{"filter-change":function(t){arguments[0]=t=e.$handleEvent(t),e.filterChange(t,"description")},"sort-change":function(t){arguments[0]=t=e.$handleEvent(t),e.sortChange(t,"description")}}},[e._v("描述")]),n("uni-th",{attrs:{align:"center",sortable:!0},on:{"sort-change":function(t){arguments[0]=t=e.$handleEvent(t),e.sortChange(t,"icon")}}},[e._v("图标地址")]),n("uni-th",{attrs:{align:"center","filter-type":"search",sortable:!0},on:{"filter-change":function(t){arguments[0]=t=e.$handleEvent(t),e.filterChange(t,"path")},"sort-change":function(t){arguments[0]=t=e.$handleEvent(t),e.sortChange(t,"path")}}},[e._v("点击跳转地址")]),n("uni-th",{attrs:{align:"center"}},[e._v("操作")])],1),e._l(i,(function(t,i){return n("uni-tr",{key:i},[n("uni-td",{attrs:{align:"center"}},[e._v(e._s(t.flbm))]),n("uni-td",{attrs:{align:"center"}},[e._v(e._s(t.parent_flbm))]),n("uni-td",{attrs:{align:"center"}},[e._v(e._s(t.name))]),n("uni-td",{attrs:{align:"center"}},[e._v(e._s(t.description))]),n("uni-td",{attrs:{align:"center"}},[t.icon&&"image"==t.icon.fileType?n("uni-file-picker",{attrs:{value:t.icon,"file-mediatype":t.icon&&t.icon.fileType,"return-type":"object",imageStyles:e.imageStyles,readonly:!0}}):n("uni-link",{attrs:{href:t.icon&&t.icon.url,text:t.icon&&t.icon.url}})],1),n("uni-td",{attrs:{align:"center"}},[e._v(e._s(t.path))]),n("uni-td",{attrs:{align:"center"}},[n("v-uni-view",{staticClass:"uni-group"},[n("v-uni-button",{staticClass:"uni-button",attrs:{size:"mini",type:"primary"},on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.navigateTo("./edit?id="+t._id,!1)}}},[e._v("修改")]),n("v-uni-button",{staticClass:"uni-button",attrs:{size:"mini",type:"warn"},on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.confirmDelete(t._id)}}},[e._v("删除")])],1)],1)],1)}))],2),n("v-uni-view",{staticClass:"uni-pagination-box"},[n("uni-pagination",{attrs:{"show-icon":!0,"page-size":a.size,total:a.count},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.onPageChanged.apply(void 0,arguments)}},model:{value:a.current,callback:function(t){e.$set(a,"current",t)},expression:"pagination.current"}})],1)]}}])})],1)],1)},r=[]},"1d31":function(e,t,n){"use strict";n("a9e3"),n("2ca0"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={name:"uniLink",props:{href:{type:String,default:""},text:{type:String,default:""},download:{type:String,default:""},showUnderLine:{type:[Boolean,String],default:!0},copyTips:{type:String,default:"已自动复制网址，请在手机浏览器里粘贴该网址"},color:{type:String,default:"#999999"},fontSize:{type:[Number,String],default:14}},computed:{isShowA:function(){return this._isH5=!0,!(!this.isMail()&&!this.isTel()||!0!==this._isH5)}},created:function(){this._isH5=null},methods:{isMail:function(){return this.href.startsWith("mailto:")},isTel:function(){return this.href.startsWith("tel:")},openURL:function(){window.open(this.href)},makePhoneCall:function(e){uni.makePhoneCall({phoneNumber:e})}}};t.default=i},"252a8":function(e,t,n){"use strict";var i=n("0a50"),a=n.n(i);a.a},"28e0":function(e,t,n){"use strict";n.r(t);var i=n("1777"),a=n("506f");for(var r in a)"default"!==r&&function(e){n.d(t,e,(function(){return a[e]}))}(r);var o,l=n("f0c5"),s=Object(l["a"])(a["default"],i["b"],i["c"],!1,null,"e6209fce",null,!1,i["a"],o);t["default"]=s.exports},"47d7":function(e,t,n){"use strict";var i=n("4ea4");n("4d63"),n("ac1f"),n("25f0"),Object.defineProperty(t,"__esModule",{value:!0}),t.filterToWhere=s,t.enumConverter=t.validator=void 0;var a=i(n("3835")),r=i(n("b85c")),o={flbm:{rules:[{required:!0},{format:"string"}],label:"分类编码"},parent_flbm:{rules:[{format:"string"}],label:"父级分类编码"},name:{rules:[{required:!0},{format:"string"}],label:"名称"},description:{rules:[{format:"string"}],label:"描述"},icon:{rules:[{format:"file"}],label:"图标地址"},path:{rules:[{format:"string"}],label:"点击跳转地址"}};t.validator=o;var l={};function s(e,t){var n={};for(var i in e){var o=e[i],l=o.type,s=o.value;switch(l){case"search":"string"===typeof s&&s.length&&(n[i]=new RegExp(s));break;case"select":if(s.length){var u,c=[],d=(0,r.default)(s);try{for(d.s();!(u=d.n()).done;){var f=u.value;c.push(t.eq(f))}}catch(C){d.e(C)}finally{d.f()}n[i]=t.or(c)}break;case"range":if(s.length){var h=s[0],v=s[1];n[i]=t.and([t.gte(h),t.lte(v)])}break;case"date":if(s.length){var p=(0,a.default)(s,2),g=p[0],b=p[1],m=new Date(g),y=new Date(b);n[i]=t.and([t.gte(m),t.lte(y)])}break;case"timestamp":if(s.length){var _=(0,a.default)(s,2),w=_[0],x=_[1];n[i]=t.and([t.gte(w),t.lte(x)])}break}}return n}t.enumConverter=l},"506f":function(e,t,n){"use strict";n.r(t);var i=n("02af"),a=n.n(i);for(var r in i)"default"!==r&&function(e){n.d(t,e,(function(){return i[e]}))}(r);t["default"]=a.a},"54a6":function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,"\n.uni-link[data-v-03b6d5de]{cursor:pointer}\n.uni-link--withline[data-v-03b6d5de]{text-decoration:underline}",""]),e.exports=t},8144:function(e,t,n){"use strict";n.r(t);var i=n("1d31"),a=n.n(i);for(var r in i)"default"!==r&&function(e){n.d(t,e,(function(){return i[e]}))}(r);t["default"]=a.a},cc0f:function(e,t,n){"use strict";var i;n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return i}));var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.isShowA?n("a",{staticClass:"uni-link",class:{"uni-link--withline":!0===e.showUnderLine||"true"===e.showUnderLine},style:{color:e.color,fontSize:e.fontSize+"px"},attrs:{href:e.href,download:e.download}},[e._t("default",[e._v(e._s(e.text))])],2):n("v-uni-text",{staticClass:"uni-link",class:{"uni-link--withline":!0===e.showUnderLine||"true"===e.showUnderLine},style:{color:e.color,fontSize:e.fontSize+"px"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.openURL.apply(void 0,arguments)}}},[e._t("default",[e._v(e._s(e.text))])],2)},r=[]}}]);