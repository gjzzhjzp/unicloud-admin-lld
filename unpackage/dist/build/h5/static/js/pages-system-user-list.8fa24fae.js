(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-system-user-list"],{"2bc9":function(e,t,n){"use strict";n.r(t);var a=n("f4da"),i=n("791a");for(var r in i)"default"!==r&&function(e){n.d(t,e,(function(){return i[e]}))}(r);var s,o=n("f0c5"),u=Object(o["a"])(i["default"],a["b"],a["c"],!1,null,"37582128",null,!1,a["a"],s);t["default"]=u.exports},"3be7":function(e,t,n){"use strict";(function(e){var a=n("4ea4");n("4de4"),n("d81d"),n("b64b"),n("4d63"),n("ac1f"),n("25f0"),n("498a"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n("5530")),r=n("8402"),s=e.database(),o="register_date desc",u=["username","role.role_name","mobile","email"],l=20,c=1,d={ascending:"asc",descending:"desc"},f={data:function(){return{query:"",where:"",orderby:o,orderByFieldName:"",selectedIndexs:[],pageSizeIndex:0,pageSizeOption:[20,50,100,500],options:(0,i.default)({pageSize:l,pageCurrent:c,filterData:{status_localdata:[{text:"正常",value:0},{text:"禁用",value:1},{text:"审核中",value:2},{text:"审核拒绝",value:3}]}},r.enumConverter),imageStyles:{width:64,height:64},exportExcel:{filename:"uni-id-users.xls",type:"xls",fields:{"用户名":"username","手机号码":"mobile","用户状态":"status","邮箱":"email","角色":"role",register_date:"register_date"}},exportExcelData:[],noAppidWhatShouldIDoLink:"https://uniapp.dcloud.net.cn/uniCloud/uni-id?id=makeup-dcloud-appid"}},onLoad:function(){this._filter={}},onReady:function(){this.$refs.udb.loadData()},watch:{pageSizeIndex:{immediate:!0,handler:function(e,t){var n=this;this.options.pageSize=this.pageSizeOption[e],this.options.pageCurrent=1,this.$nextTick((function(){n.loadData()}))}}},methods:{onqueryload:function(e){for(var t=0;t<e.length;t++){var n=e[t],a=n.role.map((function(e){return e.role_name}));n.role=a.join("、"),Array.isArray(n.dcloud_appid)&&(n.dcloud_appid=n.dcloud_appid.join("、")),n.register_date=this.$formatDate(n.register_date)}this.exportExcelData=e},changeSize:function(e){this.pageSizeIndex=e.detail.value},getWhere:function(){var e=this.query.trim();if(!e)return"";var t=new RegExp(e,"i");return u.map((function(e){return t+".test("+e+")"})).join(" || ")},search:function(){var e=this,t=this.getWhere();this.where=t,this.$nextTick((function(){e.loadData()}))},loadData:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.$refs.udb.loadData({clear:e})},onPageChanged:function(e){this.selectedIndexs.length=0,this.$refs.table.clearSelection(),this.$refs.udb.loadData({current:e.current})},navigateTo:function(e,t){var n=this;uni.navigateTo({url:e,events:{refreshData:function(){n.loadData(t)}}})},selectedItems:function(){var e=this.$refs.udb.dataList;return this.selectedIndexs.map((function(t){return e[t]._id}))},delTable:function(){var e=this;this.$refs.udb.remove(this.selectedItems(),{success:function(t){e.$refs.table.clearSelection()}})},selectionChange:function(e){this.selectedIndexs=e.detail.index},confirmDelete:function(e){var t=this;this.$refs.udb.remove(e,{success:function(e){t.$refs.table.clearSelection()}})},sortChange:function(e,t){var n=this;this.orderByFieldName=t,e.order?this.orderby=t+" "+d[e.order]:this.orderby="",this.$refs.table.clearSelection(),this.$nextTick((function(){n.$refs.udb.loadData()}))},filterChange:function(e,t){var n=this;this._filter[t]={type:e.filterType,value:e.filter};var a=(0,r.filterToWhere)(this._filter,s.command);Object.keys(a).length?this.where=a:this.where="",this.$nextTick((function(){n.$refs.udb.loadData()}))}}};t.default=f}).call(this,n("a9ff")["default"])},"3dc7":function(e,t,n){"use strict";var a=n("cf8d"),i=n.n(a);i.a},"5b75":function(e,t,n){"use strict";var a;n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return a}));var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-text",[e._v(e._s(e.dateShow))])},r=[]},"791a":function(e,t,n){"use strict";n.r(t);var a=n("3be7"),i=n.n(a);for(var r in a)"default"!==r&&function(e){n.d(t,e,(function(){return a[e]}))}(r);t["default"]=i.a},"82a2":function(e,t,n){"use strict";n.r(t);var a=n("af1b"),i=n.n(a);for(var r in a)"default"!==r&&function(e){n.d(t,e,(function(){return a[e]}))}(r);t["default"]=i.a},8402:function(e,t,n){"use strict";var a=n("4ea4");n("4d63"),n("ac1f"),n("25f0"),Object.defineProperty(t,"__esModule",{value:!0}),t.filterToWhere=u,t.enumConverter=t.validator=void 0;var i=a(n("3835")),r=a(n("b85c")),s={username:{rules:[{required:!0},{format:"string"},{minLength:2}],label:"用户名"},password:{rules:[{required:!0},{format:"password"},{minLength:6}],label:"密码"},mobile:{rules:[{format:"string"},{pattern:"^\\+?[0-9-]{3,20}$"}],label:"手机号码"},status:{rules:[{format:"int"},{range:[{text:"正常",value:0},{text:"禁用",value:1},{text:"审核中",value:2},{text:"审核拒绝",value:3}]}],defaultValue:0,label:"用户状态"},email:{rules:[{format:"string"},{format:"email"}],label:"邮箱"},role:{rules:[{format:"array"}],label:"角色"},register_date:{rules:[{format:"timestamp"}]}};t.validator=s;var o={status_valuetotext:{0:"正常",1:"禁用",2:"审核中",3:"审核拒绝"}};function u(e,t){var n={};for(var a in e){var s=e[a],o=s.type,u=s.value;switch(o){case"search":"string"===typeof u&&u.length&&(n[a]=new RegExp(u));break;case"select":if(u.length){var l,c=[],d=(0,r.default)(u);try{for(d.s();!(l=d.n()).done;){var f=l.value;c.push(t.eq(f))}}catch($){d.e($)}finally{d.f()}n[a]=t.or(c)}break;case"range":if(u.length){var h=u[0],v=u[1];n[a]=t.and([t.gte(h),t.lte(v)])}break;case"date":if(u.length){var p=(0,i.default)(u,2),g=p[0],m=p[1],b=new Date(g),_=new Date(m);n[a]=t.and([t.gte(b),t.lte(_)])}break;case"timestamp":if(u.length){var y=(0,i.default)(u,2),x=y[0],w=y[1];n[a]=t.and([t.gte(x),t.lte(w)])}break}}return n}t.enumConverter=o},a4dc:function(e,t,n){var a=n("24fb");t=a(!1),t.push([e.i,"\n.uni-link[data-v-03b6d5de]{cursor:pointer}\n.uni-link--withline[data-v-03b6d5de]{text-decoration:underline}",""]),e.exports=t},ad95:function(e,t,n){"use strict";var a;n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return a}));var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.isShowA?n("a",{staticClass:"uni-link",class:{"uni-link--withline":!0===e.showUnderLine||"true"===e.showUnderLine},style:{color:e.color,fontSize:e.fontSize+"px"},attrs:{href:e.href,download:e.download}},[e._t("default",[e._v(e._s(e.text))])],2):n("v-uni-text",{staticClass:"uni-link",class:{"uni-link--withline":!0===e.showUnderLine||"true"===e.showUnderLine},style:{color:e.color,fontSize:e.fontSize+"px"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.openURL.apply(void 0,arguments)}}},[e._t("default",[e._v(e._s(e.text))])],2)},r=[]},af1b:function(e,t,n){"use strict";n("a9e3"),n("2ca0"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={name:"uniLink",props:{href:{type:String,default:""},text:{type:String,default:""},download:{type:String,default:""},showUnderLine:{type:[Boolean,String],default:!0},copyTips:{type:String,default:"已自动复制网址，请在手机浏览器里粘贴该网址"},color:{type:String,default:"#999999"},fontSize:{type:[Number,String],default:14}},computed:{isShowA:function(){return this._isH5=!0,!(!this.isMail()&&!this.isTel()||!0!==this._isH5)}},created:function(){this._isH5=null},methods:{isMail:function(){return this.href.startsWith("mailto:")},isTel:function(){return this.href.startsWith("tel:")},openURL:function(){window.open(this.href)},makePhoneCall:function(e){uni.makePhoneCall({phoneNumber:e})}}};t.default=a},b3c8:function(e,t,n){"use strict";n("a9e3"),n("e25e"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n("a0f9"),i={name:"uniDateformat",props:{date:{type:[Object,String,Number],default:function(){return"-"}},locale:{type:String,default:"zh"},threshold:{type:Array,default:function(){return[0,0]}},format:{type:String,default:"yyyy/MM/dd hh:mm:ss"},refreshRate:{type:[Number,String],default:0}},data:function(){return{refreshMark:0}},computed:{dateShow:function(){return this.refreshMark,(0,a.friendlyDate)(this.date,{locale:this.locale,threshold:this.threshold,format:this.format})}},watch:{refreshRate:{handler:function(){this.setAutoRefresh()},immediate:!0}},methods:{refresh:function(){this.refreshMark++},setAutoRefresh:function(){var e=this;clearInterval(this.refreshInterval),this.refreshRate&&(this.refreshInterval=setInterval((function(){e.refresh()}),parseInt(this.refreshRate)))}}};t.default=i},c749:function(e,t,n){"use strict";n.r(t);var a=n("b3c8"),i=n.n(a);for(var r in a)"default"!==r&&function(e){n.d(t,e,(function(){return a[e]}))}(r);t["default"]=i.a},cf8d:function(e,t,n){var a=n("a4dc");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var i=n("4f06").default;i("c32aadd8",a,!0,{sourceMap:!1,shadowMode:!1})},da39:function(e,t,n){"use strict";n.r(t);var a=n("ad95"),i=n("82a2");for(var r in i)"default"!==r&&function(e){n.d(t,e,(function(){return i[e]}))}(r);n("3dc7");var s,o=n("f0c5"),u=Object(o["a"])(i["default"],a["b"],a["c"],!1,null,"03b6d5de",null,!1,a["a"],s);t["default"]=u.exports},f4da:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return a}));var a={downloadExcel:n("bbe9").default,unicloudDb:n("960d").default,uniTable:n("6816").default,uniTr:n("e595").default,uniTh:n("5b23").default,uniTd:n("40b0").default,uniLink:n("da39").default,uniDateformat:n("f88b").default,uniIcons:n("40f7").default,uniPagination:n("35f7").default},i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"fix-top-window"},[n("v-uni-view",{staticClass:"uni-header"},[n("v-uni-view",{staticClass:"uni-group"},[n("v-uni-view",{staticClass:"uni-title"},[e._v(e._s(e.$t("user.text.userManager")))]),n("v-uni-view",{staticClass:"uni-sub-title"})],1),n("v-uni-view",{staticClass:"uni-group"},[n("v-uni-input",{staticClass:"uni-search",attrs:{type:"text",placeholder:e.$t("common.placeholder.query")},on:{confirm:function(t){arguments[0]=t=e.$handleEvent(t),e.search.apply(void 0,arguments)}},model:{value:e.query,callback:function(t){e.query=t},expression:"query"}}),n("v-uni-button",{staticClass:"uni-button",attrs:{type:"default",size:"mini"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.search.apply(void 0,arguments)}}},[e._v(e._s(e.$t("common.button.search")))]),n("v-uni-button",{staticClass:"uni-button",attrs:{type:"primary",size:"mini"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.navigateTo("./add")}}},[e._v(e._s(e.$t("common.button.add")))]),n("v-uni-button",{staticClass:"uni-button",attrs:{type:"warn",size:"mini",disabled:!e.selectedIndexs.length},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.delTable.apply(void 0,arguments)}}},[e._v(e._s(e.$t("common.button.batchDelete")))]),n("download-excel",{staticClass:"hide-on-phone",attrs:{fields:e.exportExcel.fields,data:e.exportExcelData,type:e.exportExcel.type,name:e.exportExcel.filename}},[n("v-uni-button",{staticClass:"uni-button",attrs:{type:"primary",size:"mini"}},[e._v(e._s(e.$t("common.button.exportExcel")))])],1)],1)],1),n("v-uni-view",{staticClass:"uni-container"},[n("unicloud-db",{ref:"udb",attrs:{collection:"uni-id-users,uni-id-roles",field:"username,mobile,status,email,role{role_name},dcloud_appid,register_date",where:e.where,"page-data":"replace",orderby:e.orderby,getcount:!0,"page-size":e.options.pageSize,"page-current":e.options.pageCurrent,options:e.options,loadtime:"manual"},on:{load:function(t){arguments[0]=t=e.$handleEvent(t),e.onqueryload.apply(void 0,arguments)}},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.data,i=t.pagination,r=t.loading,s=t.error,o=t.options;return[n("uni-table",{ref:"table",staticClass:"table-pc",attrs:{loading:r,emptyText:s.message||e.$t("common.empty"),border:!0,stripe:!0,type:"selection"},on:{"selection-change":function(t){arguments[0]=t=e.$handleEvent(t),e.selectionChange.apply(void 0,arguments)}}},[n("uni-tr",[n("uni-th",{attrs:{align:"center","filter-type":"search",sortable:!0},on:{"filter-change":function(t){arguments[0]=t=e.$handleEvent(t),e.filterChange(t,"username")},"sort-change":function(t){arguments[0]=t=e.$handleEvent(t),e.sortChange(t,"username")}}},[e._v("用户名")]),n("uni-th",{attrs:{align:"center","filter-type":"search",sortable:!0},on:{"filter-change":function(t){arguments[0]=t=e.$handleEvent(t),e.filterChange(t,"mobile")},"sort-change":function(t){arguments[0]=t=e.$handleEvent(t),e.sortChange(t,"mobile")}}},[e._v("手机号码")]),n("uni-th",{attrs:{align:"center","filter-type":"select","filter-data":o.filterData.status_localdata},on:{"filter-change":function(t){arguments[0]=t=e.$handleEvent(t),e.filterChange(t,"status")}}},[e._v("用户状态")]),n("uni-th",{attrs:{align:"center","filter-type":"search",sortable:!0},on:{"filter-change":function(t){arguments[0]=t=e.$handleEvent(t),e.filterChange(t,"email")},"sort-change":function(t){arguments[0]=t=e.$handleEvent(t),e.sortChange(t,"email")}}},[e._v("邮箱")]),n("uni-th",{attrs:{align:"center"}},[e._v("角色")]),n("uni-th",{attrs:{align:"center"}},[e._v("可登录应用")]),n("uni-th",{attrs:{align:"center","filter-type":"timestamp",sortable:!0},on:{"filter-change":function(t){arguments[0]=t=e.$handleEvent(t),e.filterChange(t,"register_date")},"sort-change":function(t){arguments[0]=t=e.$handleEvent(t),e.sortChange(t,"register_date")}}},[e._v("注册时间")]),n("uni-th",{attrs:{align:"center"}},[e._v("操作")])],1),e._l(a,(function(t,a){return n("uni-tr",{key:a},[n("uni-td",{attrs:{align:"center"}},[e._v(e._s(t.username))]),n("uni-td",{attrs:{align:"center"}},[e._v(e._s(t.mobile))]),n("uni-td",{attrs:{align:"center"}},[e._v(e._s(o.status_valuetotext[t.status]))]),n("uni-td",{attrs:{align:"center"}},[n("uni-link",{attrs:{href:"mailto:"+t.email,text:t.email}})],1),n("uni-td",{attrs:{align:"center"}},[e._v(e._s(t.role))]),n("uni-td",{attrs:{align:"center"}},[void 0===t.dcloud_appid?n("uni-link",{attrs:{href:e.noAppidWhatShouldIDoLink}},[e._v("未绑定可登录应用"),n("v-uni-view",{staticClass:"uni-icons-help"})],1):e._e(),e._v(e._s(t.dcloud_appid))],1),n("uni-td",{attrs:{align:"center"}},[n("uni-dateformat",{attrs:{threshold:[0,0],date:t.register_date}})],1),n("uni-td",{attrs:{align:"center"}},[n("v-uni-view",{staticClass:"uni-group"},[n("v-uni-button",{staticClass:"uni-button",attrs:{size:"mini",type:"primary"},on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.navigateTo("./edit?id="+t._id,!1)}}},[e._v(e._s(e.$t("common.button.edit")))]),n("v-uni-button",{staticClass:"uni-button",attrs:{size:"mini",type:"warn"},on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.confirmDelete(t._id)}}},[e._v(e._s(e.$t("common.button.delete")))])],1)],1)],1)}))],2),n("v-uni-view",{staticClass:"uni-pagination-box"},[n("v-uni-picker",{staticClass:"select-picker",attrs:{mode:"selector",value:e.pageSizeIndex,range:e.pageSizeOption},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.changeSize.apply(void 0,arguments)}}},[n("v-uni-button",{attrs:{type:"default",size:"mini",plain:!0}},[n("v-uni-text",[e._v(e._s(e.pageSizeOption[e.pageSizeIndex])+" "+e._s(e.$t("common.piecePerPage")))]),n("uni-icons",{staticClass:"select-picker-icon",attrs:{type:"arrowdown",size:"12",color:"#999"}})],1)],1),n("uni-pagination",{attrs:{"page-size":i.size,total:i.count},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.onPageChanged.apply(void 0,arguments)}},model:{value:i.current,callback:function(t){e.$set(i,"current",t)},expression:"pagination.current"}})],1)]}}])})],1)],1)},r=[]},f88b:function(e,t,n){"use strict";n.r(t);var a=n("5b75"),i=n("c749");for(var r in i)"default"!==r&&function(e){n.d(t,e,(function(){return i[e]}))}(r);var s,o=n("f0c5"),u=Object(o["a"])(i["default"],a["b"],a["c"],!1,null,"7d20afea",null,!1,a["a"],s);t["default"]=u.exports}}]);