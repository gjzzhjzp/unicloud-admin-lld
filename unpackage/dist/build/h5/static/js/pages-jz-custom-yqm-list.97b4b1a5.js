(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-jz-custom-yqm-list"],{2734:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return a}));var a={downloadExcel:n("bbe9").default,unicloudDb:n("960d").default,uniTable:n("6816").default,uniTr:n("e595").default,uniTh:n("5b23").default,uniTd:n("40b0").default,uniPagination:n("35f7").default},i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",[n("v-uni-view",{staticClass:"uni-header"},[n("v-uni-view",{staticClass:"uni-group"},[n("v-uni-view",{staticClass:"uni-title"}),n("v-uni-view",{staticClass:"uni-sub-title"})],1),n("v-uni-view",{staticClass:"uni-group"},[n("v-uni-input",{staticClass:"uni-search",attrs:{type:"text",placeholder:"请输入搜索内容"},on:{confirm:function(t){arguments[0]=t=e.$handleEvent(t),e.search.apply(void 0,arguments)}},model:{value:e.query,callback:function(t){e.query=t},expression:"query"}}),n("v-uni-button",{staticClass:"uni-button",attrs:{type:"default",size:"mini"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.search.apply(void 0,arguments)}}},[e._v("搜索")]),n("v-uni-button",{staticClass:"uni-button",attrs:{type:"default",size:"mini"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.adddYqm.apply(void 0,arguments)}}},[e._v("新增")]),n("v-uni-button",{staticClass:"uni-button",attrs:{type:"default",size:"mini",disabled:!e.selectedIndexs.length},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.delTable.apply(void 0,arguments)}}},[e._v("批量删除")]),n("download-excel",{staticClass:"hide-on-phone",attrs:{fields:e.exportExcel.fields,data:e.exportExcelData,type:e.exportExcel.type,name:e.exportExcel.filename}},[n("v-uni-button",{staticClass:"uni-button",attrs:{type:"primary",size:"mini"}},[e._v("导出 Excel")])],1)],1)],1),n("v-uni-view",{staticClass:"uni-container"},[n("unicloud-db",{ref:"udb",attrs:{collection:"jz-custom-yqm,uni-id-users",field:"user_name_type,user_name,value,status,user_id.nickname",where:e.where,"page-data":"replace",orderby:e.orderby,getcount:!0,"page-size":e.options.pageSize,"page-current":e.options.pageCurrent,options:e.options,loadtime:"manual"},on:{load:function(t){arguments[0]=t=e.$handleEvent(t),e.onqueryload.apply(void 0,arguments)}},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.data,i=t.pagination,r=t.loading,s=t.error,u=t.options;return[n("uni-table",{ref:"table",attrs:{loading:r,emptyText:s.message||"没有更多数据",border:!0,stripe:!0,type:"selection"},on:{"selection-change":function(t){arguments[0]=t=e.$handleEvent(t),e.selectionChange.apply(void 0,arguments)}}},[n("uni-tr",[n("uni-th",{attrs:{align:"center","filter-type":"search",sortable:!0},on:{"filter-change":function(t){arguments[0]=t=e.$handleEvent(t),e.filterChange(t,"user_id")},"sort-change":function(t){arguments[0]=t=e.$handleEvent(t),e.sortChange(t,"user_id")}}},[e._v("申请人")]),n("uni-th",{attrs:{align:"center","filter-type":"select","filter-data":u.filterData.user_name_type_localdata},on:{"filter-change":function(t){arguments[0]=t=e.$handleEvent(t),e.filterChange(t,"user_name_type")}}},[e._v("账号平台")]),n("uni-th",{attrs:{align:"center","filter-type":"search",sortable:!0},on:{"filter-change":function(t){arguments[0]=t=e.$handleEvent(t),e.filterChange(t,"user_name")},"sort-change":function(t){arguments[0]=t=e.$handleEvent(t),e.sortChange(t,"user_name")}}},[e._v("账号昵称")]),n("uni-th",{attrs:{align:"center","filter-type":"search",sortable:!0},on:{"filter-change":function(t){arguments[0]=t=e.$handleEvent(t),e.filterChange(t,"value")},"sort-change":function(t){arguments[0]=t=e.$handleEvent(t),e.sortChange(t,"value")}}},[e._v("邀请码")]),n("uni-th",{attrs:{align:"center",sortable:!0},on:{"sort-change":function(t){arguments[0]=t=e.$handleEvent(t),e.sortChange(t,"status")}}},[e._v("生效状态")]),n("uni-th",{attrs:{align:"center"}},[e._v("操作")])],1),e._l(a,(function(t,a){return n("uni-tr",{key:a},[n("uni-td",{attrs:{align:"center"}},[e._v(e._s((t.user_id&&t.user_id.length)>0?t.user_id[0].nickname:""))]),n("uni-td",{attrs:{align:"center"}},[e._v(e._s(u.user_name_type_valuetotext[t.user_name_type]))]),n("uni-td",{attrs:{align:"center"}},[e._v(e._s(t.user_name))]),n("uni-td",{attrs:{align:"center"}},[e._v(e._s(t.value))]),n("uni-td",{attrs:{align:"center"}},[n("v-uni-checkbox-group",{on:{change:function(n){arguments[0]=n=e.$handleEvent(n),e.change_data(t,"status")}}},[n("v-uni-checkbox",{attrs:{value:"status",checked:1==t.status}})],1)],1),n("uni-td",{attrs:{align:"center"}},[n("v-uni-view",{staticClass:"uni-group"},[n("v-uni-button",{directives:[{name:"show",rawName:"v-show",value:!t.value,expression:"!item.value"}],staticClass:"uni-button",attrs:{size:"mini",type:"primary"},on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.createQym(t)}}},[e._v("生成邀请码")]),n("v-uni-button",{staticClass:"uni-button",attrs:{size:"mini",type:"warn"},on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.confirmDelete(t._id)}}},[e._v("删除")])],1)],1)],1)}))],2),n("v-uni-view",{staticClass:"uni-pagination-box"},[n("uni-pagination",{attrs:{"show-icon":!0,"page-size":i.size,total:i.count},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.onPageChanged.apply(void 0,arguments)}},model:{value:i.current,callback:function(t){e.$set(i,"current",t)},expression:"pagination.current"}})],1)]}}])})],1)],1)},r=[]},"4d22":function(e,t,n){"use strict";n.r(t);var a=n("8a86"),i=n.n(a);for(var r in a)"default"!==r&&function(e){n.d(t,e,(function(){return a[e]}))}(r);t["default"]=i.a},"8a86":function(e,t,n){"use strict";(function(e){var a=n("4ea4");n("4de4"),n("d81d"),n("b64b"),n("d3b7"),n("4d63"),n("ac1f"),n("25f0"),n("498a"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n("5530")),r=n("f364"),s=e.database(),u="",o=[],l=20,c=1,d="jz-custom-yqm",f={ascending:"asc",descending:"desc"},h={data:function(){return{query:"",where:"",orderby:u,orderByFieldName:"",selectedIndexs:[],options:(0,i.default)({pageSize:l,pageCurrent:c,filterData:{user_name_type_localdata:[{value:0,text:"微博"},{value:1,text:"抖音"}]}},r.enumConverter),imageStyles:{width:64,height:64},exportExcel:{filename:"jz-custom-yqm.xls",type:"xls",fields:{"账号平台":"user_name_type","账号昵称":"user_name","邀请码":"value","生效状态":"status"}},exportExcelData:[]}},onLoad:function(){this._filter={}},onReady:function(){this.$refs.udb.loadData()},methods:{createQym:function(e){var t=this,n=Math.random().toString(36).substr(2)+Math.random().toString(36).substr(2);this.updateItem(e,{value:n}).then((function(){t.$refs.udb&&t.$refs.udb.loadData({clear:!1},(function(){}))}))},change_data:function(e,t){var n={};n[t]=1!=e[t],console.log("obj",n),this.$set(e,t,n[t]),this.updateItem(e,n)},updateItem:function(e,t){var n=this;return new Promise((function(a){s.collection(d).doc(e._id).update(t).then((function(e){uni.showToast({title:"操作成功"}),n.getOpenerEventChannel().emit("refreshData"),a()})).catch((function(e){uni.showModal({content:e.message||"请求服务失败",showCancel:!1})}))}))},adddYqm:function(){var e=this,t={status:!0,value:Math.random().toString(36).substr(2)+Math.random().toString(36).substr(2)};return console.log(t),s.collection(d).add(t).then((function(t){uni.showToast({title:"新增成功"}),e.$refs.udb&&e.$refs.udb.loadData({clear:!1},(function(){})),e.getOpenerEventChannel().emit("refreshData")})).catch((function(e){uni.showModal({content:e.message||"请求服务失败",showCancel:!1})}))},onqueryload:function(e){this.exportExcelData=e},getWhere:function(){var e=this.query.trim();if(!e)return"";var t=new RegExp(e,"i");return o.map((function(e){return t+".test("+e+")"})).join(" || ")},search:function(){var e=this,t=this.getWhere();this.where=t,this.$nextTick((function(){e.loadData()}))},loadData:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.$refs.udb.loadData({clear:e})},onPageChanged:function(e){this.selectedIndexs.length=0,this.$refs.table.clearSelection(),this.$refs.udb.loadData({current:e.current})},navigateTo:function(e,t){var n=this;uni.navigateTo({url:e,events:{refreshData:function(){n.loadData(t)}}})},selectedItems:function(){var e=this.$refs.udb.dataList;return this.selectedIndexs.map((function(t){return e[t]._id}))},delTable:function(){var e=this;this.$refs.udb.remove(this.selectedItems(),{success:function(t){e.$refs.table.clearSelection()}})},selectionChange:function(e){this.selectedIndexs=e.detail.index},confirmDelete:function(e){var t=this;this.$refs.udb.remove(e,{success:function(e){t.$refs.table.clearSelection()}})},sortChange:function(e,t){var n=this;this.orderByFieldName=t,e.order?this.orderby=t+" "+f[e.order]:this.orderby="",this.$refs.table.clearSelection(),this.$nextTick((function(){n.$refs.udb.loadData()}))},filterChange:function(e,t){var n=this;this._filter[t]={type:e.filterType,value:e.filter};var a=(0,r.filterToWhere)(this._filter,s.command);Object.keys(a).length?this.where=a:this.where="",this.$nextTick((function(){n.$refs.udb.loadData()}))}}};t.default=h}).call(this,n("a9ff")["default"])},ac7f:function(e,t,n){"use strict";n.r(t);var a=n("2734"),i=n("4d22");for(var r in i)"default"!==r&&function(e){n.d(t,e,(function(){return i[e]}))}(r);var s,u=n("f0c5"),o=Object(u["a"])(i["default"],a["b"],a["c"],!1,null,"130b96a0",null,!1,a["a"],s);t["default"]=o.exports},f364:function(e,t,n){"use strict";var a=n("4ea4");n("4d63"),n("ac1f"),n("25f0"),Object.defineProperty(t,"__esModule",{value:!0}),t.filterToWhere=o,t.enumConverter=t.validator=void 0;var i=a(n("3835")),r=a(n("b85c")),s={user_name_type:{rules:[{format:"int"},{range:[{value:0,text:"微博"},{value:1,text:"抖音"}]}],defaultValue:0,label:"账号平台"},user_name:{rules:[{format:"string"}],label:"账号昵称"},value:{rules:[{format:"string"}],label:"邀请码"},status:{rules:[{format:"bool"}],defaultValue:!1,label:"生效状态"}};t.validator=s;var u={user_name_type_valuetotext:{0:"微博",1:"抖音"}};function o(e,t){var n={};for(var a in e){var s=e[a],u=s.type,o=s.value;switch(u){case"search":"string"===typeof o&&o.length&&(n[a]=new RegExp(o));break;case"select":if(o.length){var l,c=[],d=(0,r.default)(o);try{for(d.s();!(l=d.n()).done;){var f=l.value;c.push(t.eq(f))}}catch($){d.e($)}finally{d.f()}n[a]=t.or(c)}break;case"range":if(o.length){var h=o[0],v=o[1];n[a]=t.and([t.gte(h),t.lte(v)])}break;case"date":if(o.length){var p=(0,i.default)(o,2),g=p[0],m=p[1],b=new Date(g),_=new Date(m);n[a]=t.and([t.gte(b),t.lte(_)])}break;case"timestamp":if(o.length){var y=(0,i.default)(o,2),x=y[0],w=y[1];n[a]=t.and([t.gte(x),t.lte(w)])}break}}return n}t.enumConverter=u}}]);