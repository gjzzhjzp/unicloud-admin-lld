(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-system-user-list"],{"2bc9":function(e,t,n){"use strict";n.r(t);var a=n("ccbc"),i=n("791a");for(var r in i)"default"!==r&&function(e){n.d(t,e,(function(){return i[e]}))}(r);var s,o=n("f0c5"),l=Object(o["a"])(i["default"],a["b"],a["c"],!1,null,"31614139",null,!1,a["a"],s);t["default"]=l.exports},"3be7":function(e,t,n){"use strict";(function(e){var a=n("4ea4");n("4de4"),n("d81d"),n("b64b"),n("4d63"),n("ac1f"),n("25f0"),n("498a"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n("5530")),r=n("8402"),s=e.database(),o="register_date desc",l=["username","nickname","role.role_name","weiboname"],u=20,c=1,d={ascending:"asc",descending:"desc"},f={data:function(){return{query:"",where:"",orderby:o,orderByFieldName:"",selectedIndexs:[],pageSizeIndex:0,pageSizeOption:[20,50,100,500],options:(0,i.default)({pageSize:u,pageCurrent:c,filterData:{status_localdata:[{text:"正常",value:0},{text:"禁用",value:1},{text:"审核中",value:2},{text:"审核拒绝",value:3}],isbdwb_localdata:[{text:"不通过",value:null},{text:"通过",value:!0}]}},r.enumConverter),imageStyles:{width:64,height:64},exportExcel:{filename:"uni-id-users.xls",type:"xls",fields:{"用户名":"username","昵称":"nickname","用户状态":"status","角色":"role","微博主页地址":"weiboname","微博验证":"weibocontent","备注":"beizhu","注册时间":"register_date"}},exportExcelData:[],noAppidWhatShouldIDoLink:"https://uniapp.dcloud.net.cn/uniCloud/uni-id?id=makeup-dcloud-appid"}},onLoad:function(){this._filter={}},onReady:function(){this.$refs.udb.loadData()},watch:{pageSizeIndex:{immediate:!0,handler:function(e,t){var n=this;this.options.pageSize=this.pageSizeOption[e],this.options.pageCurrent=1,this.$nextTick((function(){n.loadData()}))}}},methods:{searchweibo:function(){var e=this,t="weiboname!=''&&weiboname!=null";this.where=t,this.$nextTick((function(){e.loadData()}))},searchweibono:function(){var e=this,t="weiboname!=''&&weiboname!=null&&isbdwb!=true";this.where=t,this.$nextTick((function(){e.loadData()}))},change_data:function(e,t){var n={};n[t]=1!=e[t],console.log("obj",n),this.$set(e,t,n[t]),this.updateItem(e,n)},updateItem:function(e,t){var n=this;return s.collection("uni-id-users").doc(e._id).update(t).then((function(e){uni.showToast({title:"修改成功"}),n.getOpenerEventChannel().emit("refreshData")})).catch((function(e){uni.showModal({content:e.message||"请求服务失败",showCancel:!1})}))},onqueryload:function(e){for(var t=0;t<e.length;t++){var n=e[t],a=n.role.map((function(e){return e.role_name}));n.role=a.join("、"),Array.isArray(n.dcloud_appid)&&(n.dcloud_appid=n.dcloud_appid.join("、")),n.register_date=this.$formatDate(n.register_date)}this.exportExcelData=e},changeSize:function(e){this.pageSizeIndex=e.detail.value},getWhere:function(){var e=this.query.trim();if(!e)return"";var t=new RegExp(e,"i");return l.map((function(e){return t+".test("+e+")"})).join(" || ")},search:function(){var e=this,t=this.getWhere();this.where=t,this.$nextTick((function(){e.loadData()}))},loadData:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.$refs.udb.loadData({clear:e})},onPageChanged:function(e){this.selectedIndexs.length=0,this.$refs.table.clearSelection(),this.$refs.udb.loadData({current:e.current})},navigateTo:function(e,t){var n=this;uni.navigateTo({url:e,events:{refreshData:function(){n.loadData(t)}}})},selectedItems:function(){var e=this.$refs.udb.dataList;return this.selectedIndexs.map((function(t){return e[t]._id}))},delTable:function(){var e=this;this.$refs.udb.remove(this.selectedItems(),{success:function(t){e.$refs.table.clearSelection()}})},selectionChange:function(e){this.selectedIndexs=e.detail.index},confirmDelete:function(e){var t=this;this.$refs.udb.remove(e,{success:function(e){t.$refs.table.clearSelection()}})},sortChange:function(e,t){var n=this;this.orderByFieldName=t,e.order?this.orderby=t+" "+d[e.order]:this.orderby="",this.$refs.table.clearSelection(),this.$nextTick((function(){n.$refs.udb.loadData()}))},filterChange:function(e,t){var n=this;this._filter[t]={type:e.filterType,value:e.filter};var a=(0,r.filterToWhere)(this._filter,s.command);Object.keys(a).length?this.where=a:this.where="",this.$nextTick((function(){n.$refs.udb.loadData()}))}}};t.default=f}).call(this,n("a9ff")["default"])},"791a":function(e,t,n){"use strict";n.r(t);var a=n("3be7"),i=n.n(a);for(var r in a)"default"!==r&&function(e){n.d(t,e,(function(){return a[e]}))}(r);t["default"]=i.a},8402:function(e,t,n){"use strict";var a=n("4ea4");n("4d63"),n("ac1f"),n("25f0"),Object.defineProperty(t,"__esModule",{value:!0}),t.filterToWhere=l,t.enumConverter=t.validator=void 0;var i=a(n("3835")),r=a(n("b85c")),s={username:{rules:[{required:!0},{format:"string"},{minLength:2}],label:"用户名"},password:{rules:[{required:!0},{format:"password"},{minLength:6}],label:"密码"},mobile:{rules:[{format:"string"},{pattern:"^\\+?[0-9-]{3,20}$"}],label:"手机号码"},status:{rules:[{format:"int"},{range:[{text:"正常",value:0},{text:"禁用",value:1},{text:"审核中",value:2},{text:"审核拒绝",value:3}]}],defaultValue:0,label:"用户状态"},original:{rules:[{format:"bool"}],defaultValue:!1,label:"是否是原创"},forbiddenwords:{rules:[{format:"bool"}],defaultValue:!1,label:"是否禁言"},email:{rules:[{format:"string"},{format:"email"}],label:"邮箱"},role:{rules:[{format:"array"}],label:"角色"},register_date:{rules:[{format:"timestamp"}]}};t.validator=s;var o={status_valuetotext:{0:"正常",1:"禁用",2:"审核中",3:"审核拒绝"}};function l(e,t){var n={};for(var a in e){var s=e[a],o=s.type,l=s.value;switch(o){case"search":"string"===typeof l&&l.length&&(n[a]=new RegExp(l));break;case"select":if(l.length){var u,c=[],d=(0,r.default)(l);try{for(d.s();!(u=d.n()).done;){var f=u.value;c.push(t.eq(f))}}catch($){d.e($)}finally{d.f()}n[a]=t.or(c)}break;case"range":if(l.length){var h=l[0],v=l[1];n[a]=t.and([t.gte(h),t.lte(v)])}break;case"date":if(l.length){var p=(0,i.default)(l,2),g=p[0],b=p[1],m=new Date(g),_=new Date(b);n[a]=t.and([t.gte(m),t.lte(_)])}break;case"timestamp":if(l.length){var w=(0,i.default)(l,2),y=w[0],x=w[1];n[a]=t.and([t.gte(y),t.lte(x)])}break}}return n}t.enumConverter=o},ccbc:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return a}));var a={downloadExcel:n("bbe9").default,unicloudDb:n("960d").default,uniTable:n("6816").default,uniTr:n("e595").default,uniTh:n("5b23").default,uniTd:n("40b0").default,uniIcons:n("40f7").default,uniPagination:n("35f7").default},i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"fix-top-window"},[n("v-uni-view",{staticClass:"uni-header"},[n("v-uni-view",{staticClass:"uni-group"},[n("v-uni-view",{staticClass:"uni-title"},[e._v(e._s(e.$t("user.text.userManager")))]),n("v-uni-view",{staticClass:"uni-sub-title"})],1),n("v-uni-view",{staticClass:"uni-group"},[n("v-uni-input",{staticClass:"uni-search",attrs:{type:"text",placeholder:e.$t("common.placeholder.query")},on:{confirm:function(t){arguments[0]=t=e.$handleEvent(t),e.search.apply(void 0,arguments)}},model:{value:e.query,callback:function(t){e.query=t},expression:"query"}}),n("v-uni-button",{staticClass:"uni-button",attrs:{type:"default",size:"mini"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.search.apply(void 0,arguments)}}},[e._v(e._s(e.$t("common.button.search")))]),n("v-uni-button",{staticClass:"uni-button",attrs:{type:"primary",size:"mini"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.navigateTo("./add")}}},[e._v(e._s(e.$t("common.button.add")))]),n("v-uni-button",{staticClass:"uni-button",attrs:{type:"warn",size:"mini",disabled:!e.selectedIndexs.length},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.delTable.apply(void 0,arguments)}}},[e._v(e._s(e.$t("common.button.batchDelete")))]),n("v-uni-button",{staticClass:"uni-button",attrs:{type:"default",size:"mini"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.searchweibo.apply(void 0,arguments)}}},[e._v("仅显示微博审核")]),n("v-uni-button",{staticClass:"uni-button",attrs:{type:"default",size:"mini"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.searchweibono.apply(void 0,arguments)}}},[e._v("仅显示未审核")]),n("download-excel",{staticClass:"hide-on-phone",attrs:{fields:e.exportExcel.fields,data:e.exportExcelData,type:e.exportExcel.type,name:e.exportExcel.filename}},[n("v-uni-button",{staticClass:"uni-button",attrs:{type:"primary",size:"mini"}},[e._v(e._s(e.$t("common.button.exportExcel")))])],1)],1)],1),n("v-uni-view",{staticClass:"uni-container"},[n("unicloud-db",{ref:"udb",attrs:{collection:"uni-id-users,uni-id-roles",field:"username,nickname,weiboname,beizhu,weibocontent,isbdwb,status,role{role_name},dcloud_appid,register_date",where:e.where,"page-data":"replace",orderby:e.orderby,getcount:!0,"page-size":e.options.pageSize,"page-current":e.options.pageCurrent,options:e.options,loadtime:"manual"},on:{load:function(t){arguments[0]=t=e.$handleEvent(t),e.onqueryload.apply(void 0,arguments)}},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.data,i=t.pagination,r=t.loading,s=t.error,o=t.options;return[n("uni-table",{ref:"table",staticClass:"table-pc",attrs:{loading:r,emptyText:s.message||e.$t("common.empty"),border:!0,stripe:!0,type:"selection"},on:{"selection-change":function(t){arguments[0]=t=e.$handleEvent(t),e.selectionChange.apply(void 0,arguments)}}},[n("uni-tr",[n("uni-th",{attrs:{align:"center","filter-type":"search",sortable:!0},on:{"filter-change":function(t){arguments[0]=t=e.$handleEvent(t),e.filterChange(t,"username")},"sort-change":function(t){arguments[0]=t=e.$handleEvent(t),e.sortChange(t,"username")}}},[e._v("用户名")]),n("uni-th",{attrs:{align:"center","filter-type":"search",sortable:!0},on:{"filter-change":function(t){arguments[0]=t=e.$handleEvent(t),e.filterChange(t,"nickname")},"sort-change":function(t){arguments[0]=t=e.$handleEvent(t),e.sortChange(t,"nickname")}}},[e._v("昵称")]),n("uni-th",{attrs:{align:"center",width:"100","filter-type":"select","filter-data":o.filterData.status_localdata},on:{"filter-change":function(t){arguments[0]=t=e.$handleEvent(t),e.filterChange(t,"status")}}},[e._v("用户状态")]),n("uni-th",{attrs:{align:"center",width:"100"}},[e._v("角色")]),n("uni-th",{attrs:{align:"center","filter-type":"search",sortable:!0},on:{"filter-change":function(t){arguments[0]=t=e.$handleEvent(t),e.filterChange(t,"weiboname")},"sort-change":function(t){arguments[0]=t=e.$handleEvent(t),e.sortChange(t,"weiboname")}}},[e._v("微博主页地址")]),n("uni-th",{attrs:{align:"center"}},[e._v("微博验证")]),n("uni-th",{attrs:{align:"center",width:"100","filter-type":"select","filter-data":o.filterData.isbdwb_localdata},on:{"filter-change":function(t){arguments[0]=t=e.$handleEvent(t),e.filterChange(t,"isbdwb")}}},[e._v("微博验证状态")]),n("uni-th",{attrs:{align:"center",width:"100"}},[e._v("备注")]),n("uni-th",{attrs:{align:"center","filter-type":"timestamp",sortable:!0},on:{"filter-change":function(t){arguments[0]=t=e.$handleEvent(t),e.filterChange(t,"register_date")},"sort-change":function(t){arguments[0]=t=e.$handleEvent(t),e.sortChange(t,"register_date")}}},[e._v("注册时间")]),n("uni-th",{attrs:{align:"center"}},[e._v("操作")])],1),e._l(a,(function(t,a){return n("uni-tr",{key:a},[n("uni-td",{attrs:{align:"center"}},[e._v(e._s(t.username))]),n("uni-td",{attrs:{align:"center"}},[e._v(e._s(t.nickname))]),n("uni-td",{attrs:{align:"center"}},[e._v(e._s(o.status_valuetotext[t.status]))]),n("uni-td",{attrs:{align:"center"}},[e._v(e._s(t.role))]),n("uni-td",{attrs:{align:"center"}},[n("v-uni-view",{staticStyle:{"max-width":"400px"}},[e._v(e._s(t.weiboname))])],1),n("uni-td",{attrs:{align:"center"}},[e._v(e._s(t.weibocontent))]),n("uni-td",{attrs:{align:"center"}},[n("uni-td",{attrs:{align:"center"}},[n("v-uni-checkbox-group",{on:{change:function(n){arguments[0]=n=e.$handleEvent(n),e.change_data(t,"isbdwb")}}},[n("v-uni-checkbox",{attrs:{value:"isbdwb",checked:t.isbdwb}})],1)],1)],1),n("uni-td",{attrs:{align:"center"}},[e._v(e._s(t.beizhu))]),n("uni-td",{attrs:{align:"center"}},[e._v(e._s(t.register_date))]),n("uni-td",{attrs:{align:"center"}},[n("v-uni-view",{staticClass:"uni-group"},[n("v-uni-button",{staticClass:"uni-button",attrs:{size:"mini",type:"primary"},on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.navigateTo("./edit?id="+t._id,!1)}}},[e._v(e._s(e.$t("common.button.edit")))]),n("v-uni-button",{staticClass:"uni-button",attrs:{size:"mini",type:"warn"},on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.confirmDelete(t._id)}}},[e._v(e._s(e.$t("common.button.delete")))])],1)],1)],1)}))],2),n("v-uni-view",{staticClass:"uni-pagination-box"},[n("v-uni-picker",{staticClass:"select-picker",attrs:{mode:"selector",value:e.pageSizeIndex,range:e.pageSizeOption},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.changeSize.apply(void 0,arguments)}}},[n("v-uni-button",{attrs:{type:"default",size:"mini",plain:!0}},[n("v-uni-text",[e._v(e._s(e.pageSizeOption[e.pageSizeIndex])+" "+e._s(e.$t("common.piecePerPage")))]),n("uni-icons",{staticClass:"select-picker-icon",attrs:{type:"arrowdown",size:"12",color:"#999"}})],1)],1),n("uni-pagination",{attrs:{"page-size":i.size,total:i.count},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.onPageChanged.apply(void 0,arguments)}},model:{value:i.current,callback:function(t){e.$set(i,"current",t)},expression:"pagination.current"}})],1)]}}])})],1)],1)},r=[]}}]);