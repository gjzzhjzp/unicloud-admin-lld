(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-jz-opendb-resources-add~pages-jz-opendb-resources-edit~pages-opendb-banner-add~pages-opendb-ba~0f6149d9"],{1101:function(e,t,i){"use strict";i.r(t);var n=i("ecef"),r=i.n(n);for(var a in n)"default"!==a&&function(e){i.d(t,e,(function(){return n[e]}))}(a);t["default"]=r.a},"201e":function(e,t,i){"use strict";var n=i("bae1"),r=i.n(n);r.a},"218f":function(e,t,i){"use strict";i.r(t);var n=i("b8a1"),r=i.n(n);for(var a in n)"default"!==a&&function(e){i.d(t,e,(function(){return n[e]}))}(a);t["default"]=r.a},"2ed8":function(e,t,i){var n=i("24fb");t=n(!1),t.push([e.i,".uni-file-picker[data-v-74771fd1]{\nbox-sizing:border-box;overflow:hidden\n}.uni-file-picker__header[data-v-74771fd1]{padding-top:5px;padding-bottom:10px;\ndisplay:flex;\njustify-content:space-between}.file-title[data-v-74771fd1]{font-size:14px;color:#333}.file-count[data-v-74771fd1]{font-size:14px;color:#999}.is-add[data-v-74771fd1]{\ndisplay:flex;\nalign-items:center;justify-content:center}.icon-add[data-v-74771fd1]{width:50px;height:5px;background-color:#f1f1f1;border-radius:2px}.rotate[data-v-74771fd1]{position:absolute;transform:rotate(90deg)}",""]),e.exports=t},"36fe":function(e,t,i){"use strict";i("99af"),i("4160"),i("c975"),i("a9e3"),i("159b"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={name:"uploadFile",emits:["uploadFiles","choose","delFile"],props:{filesList:{type:Array,default:function(){return[]}},delIcon:{type:Boolean,default:!0},limit:{type:[Number,String],default:9},showType:{type:String,default:""},listStyles:{type:Object,default:function(){return{border:!0,dividline:!0,borderStyle:{}}}},readonly:{type:Boolean,default:!1}},computed:{list:function(){var e=[];return this.filesList.forEach((function(t){e.push(t)})),e},styles:function(){var e={border:!0,dividline:!0,"border-style":{}};return Object.assign(e,this.listStyles)},borderStyle:function(){var e=this.styles,t=e.borderStyle,i=e.border,n={};if(i){var r=t&&t.width||1;r=this.value2px(r);var a=t&&t.radius||5;a=this.value2px(a),n={"border-width":r,"border-style":t&&t.style||"solid","border-color":t&&t.color||"#eee","border-radius":a}}else n.border="none";var s="";for(var o in n)s+="".concat(o,":").concat(n[o],";");return s},borderLineStyle:function(){var e={},t=this.styles.borderStyle;if(t&&t.color&&(e["border-color"]=t.color),t&&t.width){var i=t&&t.width||1,n=t&&t.style||0;"number"===typeof i?i+="px":i=i.indexOf("px")?i:i+"px",e["border-width"]=i,"number"===typeof n?n+="px":n=n.indexOf("px")?n:n+"px",e["border-top-style"]=n}var r="";for(var a in e)r+="".concat(a,":").concat(e[a],";");return r}},methods:{uploadFiles:function(e,t){this.$emit("uploadFiles",{item:e,index:t})},choose:function(){this.$emit("choose")},delFile:function(e){this.$emit("delFile",e)},value2px:function(e){return"number"===typeof e?e+="px":e=-1!==e.indexOf("px")?e:e+"px",e}}};t.default=n},"3f65":function(e,t,i){"use strict";var n;i.d(t,"b",(function(){return r})),i.d(t,"c",(function(){return a})),i.d(t,"a",(function(){return n}));var r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"uni-file-picker__container"},[e._l(e.filesList,(function(t,n){return i("v-uni-view",{key:n,staticClass:"file-picker__box",style:e.boxStyle},[i("v-uni-view",{staticClass:"file-picker__box-content",style:e.borderStyle},[i("v-uni-image",{staticClass:"file-image",attrs:{src:t.url,mode:"aspectFill"},on:{click:function(i){i.stopPropagation(),arguments[0]=i=e.$handleEvent(i),e.prviewImage(t,n)}}}),e.delIcon&&!e.readonly?i("v-uni-view",{staticClass:"icon-del-box",on:{click:function(t){t.stopPropagation(),arguments[0]=t=e.$handleEvent(t),e.delFile(n)}}},[i("v-uni-view",{staticClass:"icon-del"}),i("v-uni-view",{staticClass:"icon-del rotate"})],1):e._e(),t.progress&&100!==t.progress||0===t.progress?i("v-uni-view",{staticClass:"file-picker__progress"},[i("v-uni-progress",{staticClass:"file-picker__progress-item",attrs:{percent:-1===t.progress?0:t.progress,"stroke-width":"4",backgroundColor:t.errMsg?"#ff5a5f":"#EBEBEB"}})],1):e._e(),t.errMsg?i("v-uni-view",{staticClass:"file-picker__mask",on:{click:function(i){i.stopPropagation(),arguments[0]=i=e.$handleEvent(i),e.uploadFiles(t,n)}}},[e._v("点击重试")]):e._e()],1)],1)})),e.filesList.length<e.limit&&!e.readonly?i("v-uni-view",{staticClass:"file-picker__box",style:e.boxStyle},[i("v-uni-view",{staticClass:"file-picker__box-content is-add",style:e.borderStyle,on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.choose.apply(void 0,arguments)}}},[e._t("default",[i("v-uni-view",{staticClass:"icon-add"}),i("v-uni-view",{staticClass:"icon-add rotate"})])],2)],1):e._e()],2)},a=[]},"422a":function(e,t,i){"use strict";var n=i("d274"),r=i.n(n);r.a},"64f1":function(e,t,i){"use strict";i.r(t);var n=i("3f65"),r=i("218f");for(var a in r)"default"!==a&&function(e){i.d(t,e,(function(){return r[e]}))}(a);i("422a");var s,o=i("f0c5"),l=Object(o["a"])(r["default"],n["b"],n["c"],!1,null,"231c75c7",null,!1,n["a"],s);t["default"]=l.exports},7454:function(e,t,i){"use strict";i.r(t);var n=i("c256"),r=i("f08b");for(var a in r)"default"!==a&&function(e){i.d(t,e,(function(){return r[e]}))}(a);i("201e");var s,o=i("f0c5"),l=Object(o["a"])(r["default"],n["b"],n["c"],!1,null,"5df3f378",null,!1,n["a"],s);t["default"]=l.exports},"7d6a":function(e,t,i){var n=i("24fb");t=n(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/***字体大小规范***/\r\n/***颜色定义***/\r\n/***行间距***/.uni-file-picker__files[data-v-5df3f378]{display:flex;flex-direction:column;justify-content:flex-start}.uni-file-picker__lists[data-v-5df3f378]{position:relative;margin-top:5px;overflow:hidden}.file-picker__mask[data-v-5df3f378]{display:flex;justify-content:center;align-items:center;position:absolute;right:0;top:0;bottom:0;left:0;color:#fff;font-size:14px;background-color:rgba(0,0,0,.4)}.uni-file-picker__lists-box[data-v-5df3f378]{position:relative}.uni-file-picker__item[data-v-5df3f378]{display:flex;align-items:center;padding:8px 10px;padding-right:5px;padding-left:10px}.files-border[data-v-5df3f378]{border-top:1px #eee solid}.files__name[data-v-5df3f378]{flex:1;font-size:14px;color:#666;margin-right:25px;word-break:break-all;word-wrap:break-word}.icon-files[data-v-5df3f378]{position:static;background-color:initial}.is-list-card[data-v-5df3f378]{border:1px #eee solid;margin-bottom:5px;border-radius:5px;box-shadow:0 0 2px 0 rgba(0,0,0,.1);padding:5px}.files__image[data-v-5df3f378]{width:40px;height:40px;margin-right:10px}.header-image[data-v-5df3f378]{width:100%;height:100%}.is-text-box[data-v-5df3f378]{border:1px #eee solid;border-radius:5px}.is-text-image[data-v-5df3f378]{width:25px;height:25px;margin-left:5px}.rotate[data-v-5df3f378]{position:absolute;transform:rotate(90deg)}.icon-del-box[data-v-5df3f378]{display:flex;margin:auto 0;align-items:center;justify-content:center;position:absolute;top:0;bottom:0;right:5px;height:26px;width:26px;z-index:2;transform:rotate(-45deg)}.icon-del[data-v-5df3f378]{width:15px;height:1px;background-color:#333}@media (min-width:768px){.uni-file-picker__files[data-v-5df3f378]{max-width:375px}}',""]),e.exports=t},8284:function(e,t,i){var n=i("2ed8");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var r=i("4f06").default;r("2fba4bfc",n,!0,{sourceMap:!1,shadowMode:!1})},8675:function(e,t,i){"use strict";var n=i("4ea4");i("99af"),i("4160"),i("c975"),i("baa5"),i("d3b7"),i("ac1f"),i("5319"),i("1276"),i("159b"),Object.defineProperty(t,"__esModule",{value:!0}),t.get_file_data=t.get_file_info=t.get_files_and_is_max=t.get_extname=t.get_file_ext=void 0,i("96cf");var r=n(i("1da1")),a=function(e){var t=e.lastIndexOf("."),i=e.length;return{name:e.substring(0,t),ext:e.substring(t+1,i)}};t.get_file_ext=a;var s=function(e){if(Array.isArray(e))return e;var t=e.replace(/(\[|\])/g,"");return t.split(",")};t.get_extname=s;var o=function(e,t){var i=[],n=[];return t&&0!==t.length?(e.tempFiles.forEach((function(e){var r=a(e.name),s=r.ext.toLowerCase();-1!==t.indexOf(s)&&(n.push(e),i.push(e.path))})),n.length!==e.tempFiles.length&&uni.showToast({title:"当前选择了".concat(e.tempFiles.length,"个文件 ，").concat(e.tempFiles.length-n.length," 个文件格式不正确"),icon:"none",duration:5e3}),{filePaths:i,files:n}):{filePaths:i,files:n}};t.get_files_and_is_max=o;var l=function(e){return new Promise((function(t,i){uni.getImageInfo({src:e,success:function(e){t(e)},fail:function(e){i(e)}})}))};t.get_file_info=l;var u=function(){var e=(0,r.default)(regeneratorRuntime.mark((function e(t){var i,n,r,s,o,u=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(i=u.length>1&&void 0!==u[1]?u[1]:"image",n=a(t.name),r=n.ext.toLowerCase(),s={name:t.name,uuid:t.uuid,extname:r||"",cloudPath:t.cloudPath,fileType:t.fileType,url:t.path||t.path,size:t.size,image:{},path:t.path,video:{}},"image"!==i){e.next=14;break}return e.next=7,l(t.path);case 7:o=e.sent,delete s.video,s.image.width=o.width,s.image.height=o.height,s.image.location=o.path,e.next=15;break;case 14:delete s.image;case 15:return e.abrupt("return",s);case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();t.get_file_data=u},"876c":function(e,t,i){"use strict";(function(e){i("7db0"),i("c740"),i("4160"),i("baa5"),i("d81d"),i("d3b7"),i("ac1f"),i("5319"),i("159b"),Object.defineProperty(t,"__esModule",{value:!0}),t.chooseAndUploadFile=d,t.uploadCloudFiles=u;var n="chooseAndUploadFile:ok",r="chooseAndUploadFile:fail";function a(e){var t=e.count,i=e.sizeType,n=void 0===i?["original","compressed"]:i,a=e.sourceType,s=void 0===a?["album","camera"]:a,o=e.extension;return new Promise((function(e,i){uni.chooseImage({count:t,sizeType:n,sourceType:s,extension:o,success:function(t){e(l(t,"image"))},fail:function(e){i({errMsg:e.errMsg.replace("chooseImage:fail",r)})}})}))}function s(e){var t=e.camera,i=e.compressed,n=e.maxDuration,a=e.sourceType,s=void 0===a?["album","camera"]:a,o=e.extension;return new Promise((function(e,a){uni.chooseVideo({camera:t,compressed:i,maxDuration:n,sourceType:s,extension:o,success:function(t){var i=t.tempFilePath,n=t.duration,r=t.size,a=t.height,s=t.width;e(l({errMsg:"chooseVideo:ok",tempFilePaths:[i],tempFiles:[{name:t.tempFile&&t.tempFile.name||"",path:i,size:r,type:t.tempFile&&t.tempFile.type||"",width:s,height:a,duration:n,fileType:"video",cloudPath:""}]},"video"))},fail:function(e){a({errMsg:e.errMsg.replace("chooseVideo:fail",r)})}})}))}function o(e){var t=e.count,i=e.extension;return new Promise((function(e,n){var a=uni.chooseFile;if("undefined"!==typeof wx&&"function"===typeof wx.chooseMessageFile&&(a=wx.chooseMessageFile),"function"!==typeof a)return n({errMsg:r+" 请指定 type 类型，该平台仅支持选择 image 或 video。"});a({type:"all",count:t,extension:i,success:function(t){e(l(t))},fail:function(e){n({errMsg:e.errMsg.replace("chooseFile:fail",r)})}})}))}function l(e,t){return e.tempFiles.forEach((function(e,i){e.name||(e.name=e.path.substring(e.path.lastIndexOf("/")+1)),t&&(e.fileType=t),e.cloudPath=Date.now()+"_"+i+e.name.substring(e.name.lastIndexOf("."))})),e.tempFilePaths||(e.tempFilePaths=e.tempFiles.map((function(e){return e.path}))),e}function u(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5,n=arguments.length>2?arguments[2]:void 0;t=JSON.parse(JSON.stringify(t));var r=t.length,a=0,s=this;return new Promise((function(o){while(a<i)l();function l(){var i=a++;if(i>=r)!t.find((function(e){return!e.url&&!e.errMsg}))&&o(t);else{var u=t[i],c=s.files.findIndex((function(e){return e.uuid===u.uuid}));u.url="",delete u.errMsg,e.uploadFile({filePath:u.path,cloudPath:u.cloudPath,fileType:u.fileType,onUploadProgress:function(e){e.index=c,n&&n(e)}}).then((function(e){u.url=e.fileID,u.index=c,i<r&&l()})).catch((function(e){u.errMsg=e.errMsg||e.message,u.index=c,i<r&&l()}))}}}))}function c(e,t){var i=t.onChooseFile;t.onUploadProgress;return e.then((function(e){if(i){var t=i(e);if("undefined"!==typeof t)return Promise.resolve(t).then((function(t){return"undefined"===typeof t?e:t}))}return e})).then((function(e){return!1===e?{errMsg:n,tempFilePaths:[],tempFiles:[]}:e}))}function d(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{type:"all"};return"image"===e.type?c(a(e),e):"video"===e.type?c(s(e),e):c(o(e),e)}}).call(this,i("a9ff")["default"])},"9ca4":function(e,t,i){"use strict";var n=i("8284"),r=i.n(n);r.a},b8a1:function(e,t,i){"use strict";i("99af"),i("4160"),i("c975"),i("a9e3"),i("159b"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={name:"uploadImage",emits:["uploadFiles","choose","delFile"],props:{filesList:{type:Array,default:function(){return[]}},disabled:{type:Boolean,default:!1},disablePreview:{type:Boolean,default:!1},limit:{type:[Number,String],default:9},imageStyles:{type:Object,default:function(){return{width:"auto",height:"auto",border:{}}}},delIcon:{type:Boolean,default:!0},readonly:{type:Boolean,default:!1}},computed:{styles:function(){var e={width:"auto",height:"auto",border:{}};return Object.assign(e,this.imageStyles)},boxStyle:function(){var e=this.styles,t=e.width,i=void 0===t?"auto":t,n=e.height,r=void 0===n?"auto":n,a={};"auto"===r?"auto"!==i?(a.height=this.value2px(i),a["padding-top"]=0):a.height=0:(a.height=this.value2px(r),a["padding-top"]=0),a.width="auto"===i?"auto"!==r?this.value2px(r):"33.3%":this.value2px(i);var s="";for(var o in a)s+="".concat(o,":").concat(a[o],";");return s},borderStyle:function(){var e=this.styles.border,t={},i=1,n=3;if("boolean"===typeof e)t.border=e?"1px #eee solid":"none";else{var r=e&&e.width||i;r=this.value2px(r);var a=e&&e.radius||n;a=this.value2px(a),t={"border-width":r,"border-style":e&&e.style||"solid","border-color":e&&e.color||"#eee","border-radius":a}}var s="";for(var o in t)s+="".concat(o,":").concat(t[o],";");return s}},methods:{uploadFiles:function(e,t){this.$emit("uploadFiles",e)},choose:function(){this.$emit("choose")},delFile:function(e){this.$emit("delFile",e)},prviewImage:function(e,t){var i=[];1===Number(this.limit)&&this.disablePreview&&!this.disabled&&this.$emit("choose"),this.disablePreview||(this.filesList.forEach((function(e){i.push(e.url)})),uni.previewImage({urls:i,current:t}))},value2px:function(e){return"number"===typeof e?e+="px":-1===e.indexOf("%")&&(e=-1!==e.indexOf("px")?e:e+"px"),e}}};t.default=n},b8b8:function(e,t,i){"use strict";var n;i.d(t,"b",(function(){return r})),i.d(t,"c",(function(){return a})),i.d(t,"a",(function(){return n}));var r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"uni-file-picker"},[e.title?i("v-uni-view",{staticClass:"uni-file-picker__header"},[i("v-uni-text",{staticClass:"file-title"},[e._v(e._s(e.title))]),i("v-uni-text",{staticClass:"file-count"},[e._v(e._s(e.filesList.length)+"/"+e._s(e.limitLength))])],1):e._e(),"image"===e.fileMediatype&&"grid"===e.showType?i("upload-image",{attrs:{readonly:e.readonly,"image-styles":e.imageStyles,"files-list":e.filesList,limit:e.limitLength,disablePreview:e.disablePreview,delIcon:e.delIcon},on:{uploadFiles:function(t){arguments[0]=t=e.$handleEvent(t),e.uploadFiles.apply(void 0,arguments)},choose:function(t){arguments[0]=t=e.$handleEvent(t),e.choose.apply(void 0,arguments)},delFile:function(t){arguments[0]=t=e.$handleEvent(t),e.delFile.apply(void 0,arguments)}}},[e._t("default",[i("v-uni-view",{staticClass:"is-add"},[i("v-uni-view",{staticClass:"icon-add"}),i("v-uni-view",{staticClass:"icon-add rotate"})],1)])],2):e._e(),"image"!==e.fileMediatype||"grid"!==e.showType?i("upload-file",{attrs:{readonly:e.readonly,"list-styles":e.listStyles,"files-list":e.filesList,showType:e.showType,delIcon:e.delIcon},on:{uploadFiles:function(t){arguments[0]=t=e.$handleEvent(t),e.uploadFiles.apply(void 0,arguments)},choose:function(t){arguments[0]=t=e.$handleEvent(t),e.choose.apply(void 0,arguments)},delFile:function(t){arguments[0]=t=e.$handleEvent(t),e.delFile.apply(void 0,arguments)}}},[e._t("default",[i("v-uni-button",{attrs:{type:"primary",size:"mini"}},[e._v("选择文件")])])],2):e._e()],1)},a=[]},bae1:function(e,t,i){var n=i("7d6a");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var r=i("4f06").default;r("0dd87153",n,!0,{sourceMap:!1,shadowMode:!1})},c256:function(e,t,i){"use strict";var n;i.d(t,"b",(function(){return r})),i.d(t,"c",(function(){return a})),i.d(t,"a",(function(){return n}));var r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"uni-file-picker__files"},[e.readonly?e._e():i("v-uni-view",{staticClass:"files-button",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.choose.apply(void 0,arguments)}}},[e._t("default")],2),e.list.length>0?i("v-uni-view",{staticClass:"uni-file-picker__lists is-text-box",style:e.borderStyle},e._l(e.list,(function(t,n){return i("v-uni-view",{key:n,staticClass:"uni-file-picker__lists-box",class:{"files-border":0!==n&&e.styles.dividline},style:0!==n&&e.styles.dividline&&e.borderLineStyle},[i("v-uni-view",{staticClass:"uni-file-picker__item"},[i("v-uni-view",{staticClass:"files__name"},[e._v(e._s(t.name))]),e.delIcon&&!e.readonly?i("v-uni-view",{staticClass:"icon-del-box icon-files",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.delFile(n)}}},[i("v-uni-view",{staticClass:"icon-del icon-files"}),i("v-uni-view",{staticClass:"icon-del rotate"})],1):e._e()],1),t.progress&&100!==t.progress||0===t.progress?i("v-uni-view",{staticClass:"file-picker__progress"},[i("v-uni-progress",{staticClass:"file-picker__progress-item",attrs:{percent:-1===t.progress?0:t.progress,"stroke-width":"4",backgroundColor:t.errMsg?"#ff5a5f":"#EBEBEB"}})],1):e._e(),"error"===t.status?i("v-uni-view",{staticClass:"file-picker__mask",on:{click:function(i){i.stopPropagation(),arguments[0]=i=e.$handleEvent(i),e.uploadFiles(t,n)}}},[e._v("点击重试")]):e._e()],1)})),1):e._e()],1)},a=[]},d274:function(e,t,i){var n=i("f3fb");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var r=i("4f06").default;r("7a901052",n,!0,{sourceMap:!1,shadowMode:!1})},ea53:function(e,t,i){"use strict";i.r(t);var n=i("b8b8"),r=i("1101");for(var a in r)"default"!==a&&function(e){i.d(t,e,(function(){return r[e]}))}(a);i("9ca4");var s,o=i("f0c5"),l=Object(o["a"])(r["default"],n["b"],n["c"],!1,null,"74771fd1",null,!1,n["a"],s);t["default"]=l.exports},ecef:function(e,t,i){"use strict";(function(e){var n=i("4ea4");i("99af"),i("c740"),i("4160"),i("baa5"),i("a434"),i("a9e3"),i("b64b"),i("e25e"),i("3ca3"),i("159b"),i("ddb0"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(i("2909")),a=n(i("5530"));i("96cf");var s=n(i("1da1")),o=i("876c"),l=i("8675"),u=n(i("64f1")),c=n(i("7454")),d={name:"uniFilePicker",components:{uploadImage:u.default,uploadFile:c.default},emits:["select","success","fail","progress","delete","update:modelValue","input"],props:{value:{type:[Array,Object],default:function(){return[]}},disabled:{type:Boolean,default:!1},disablePreview:{type:Boolean,default:!1},delIcon:{type:Boolean,default:!0},autoUpload:{type:Boolean,default:!0},limit:{type:[Number,String],default:30},mode:{type:String,default:"grid"},fileMediatype:{type:String,default:"image"},fileExtname:{type:[Array,String],default:function(){return[]}},title:{type:String,default:""},listStyles:{type:Object,default:function(){return{border:!0,dividline:!0,borderStyle:{}}}},imageStyles:{type:Object,default:function(){return{width:"auto",height:"auto"}}},readonly:{type:Boolean,default:!1},returnType:{type:String,default:"array"},sizeType:{type:Array,default:function(){return["original","compressed"]}}},data:function(){return{files:[],localValue:[]}},watch:{value:{handler:function(e,t){this.setValue(e,t)},immediate:!0}},computed:{filesList:function(){var e=[];return this.files.forEach((function(t){e.push(t)})),e},showType:function(){return"image"===this.fileMediatype?this.mode:"list"},limitLength:function(){return"object"===this.returnType?1:this.limit?this.limit>=30?30:this.limit:1}},created:function(){e.config&&e.config.provider||(this.noSpace=!0,e.chooseAndUploadFile=o.chooseAndUploadFile),this.form=this.getForm("uniForms"),this.formItem=this.getForm("uniFormsItem"),this.form&&this.formItem&&this.formItem.name&&(this.rename=this.formItem.name,this.form.inputChildrens.push(this))},methods:{clearFiles:function(e){var t=this;0===e||e?this.files.splice(e,1):(this.files=[],this.$nextTick((function(){t.setEmit()}))),this.$nextTick((function(){t.setEmit()}))},upload:function(){var e=[];this.files.forEach((function(t,i){"ready"!==t.status&&"error"!==t.status||e.push(Object.assign({},t))})),this.uploadFiles(e)},setValue:function(e,t){var i=this;return(0,s.default)(regeneratorRuntime.mark((function t(){var n,r,a,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=function(){var e=(0,s.default)(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=/cloud:\/\/([\w.]+\/?)\S*/,r="",r=t.fileID?t.fileID:t.url,!n.test(r)){e.next=8;break}return t.fileID=r,e.next=7,i.getTempFileURL(r);case 7:t.url=e.sent;case 8:return t.path=t.url,e.abrupt("return",t);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),"object"!==i.returnType){t.next=10;break}if(!e){t.next=7;break}return t.next=5,n(e);case 5:t.next=8;break;case 7:e={};case 8:t.next=19;break;case 10:e||(e=[]),r=0;case 12:if(!(r<e.length)){t.next=19;break}return a=e[r],t.next=16,n(a);case 16:r++,t.next=12;break;case 19:i.localValue=e,i.form&&i.formItem&&!i.is_reset&&(i.is_reset=!1,i.formItem.setValue(i.localValue)),o=Object.keys(e).length>0?e:[],i.files=[].concat(o);case 23:case"end":return t.stop()}}),t)})))()},choose:function(){this.disabled||(this.files.length>=Number(this.limitLength)&&"grid"!==this.showType&&"array"===this.returnType?uni.showToast({title:"您最多选择 ".concat(this.limitLength," 个文件"),icon:"none"}):this.chooseFiles())},chooseFiles:function(){var t=this,i=(0,l.get_extname)(this.fileExtname);e.chooseAndUploadFile({type:this.fileMediatype,compressed:!1,sizeType:this.sizeType,extension:i.length>0?i:void 0,count:this.limitLength-this.files.length,onChooseFile:this.chooseFileCallback,onUploadProgress:function(e){t.setProgress(e,e.index)}}).then((function(e){t.setSuccessAndError(e.tempFiles)})).catch((function(e){console.log("选择失败",e)}))},chooseFileCallback:function(e){var t=this;return(0,s.default)(regeneratorRuntime.mark((function i(){var n,r,s,o,u,c,d,f;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:n=(0,l.get_extname)(t.fileExtname),r=1===Number(t.limitLength)&&t.disablePreview&&!t.disabled||"object"===t.returnType,r&&(t.files=[]),s=(0,l.get_files_and_is_max)(e,n),o=s.filePaths,u=s.files,n&&n.length>0||(o=e.tempFilePaths,u=e.tempFiles),c=[],d=0;case 7:if(!(d<u.length)){i.next=21;break}if(!(t.limitLength-t.files.length<=0)){i.next=10;break}return i.abrupt("break",21);case 10:return u[d].uuid=Date.now(),i.next=13,(0,l.get_file_data)(u[d],t.fileMediatype);case 13:f=i.sent,f.progress=0,f.status="ready",t.files.push(f),c.push((0,a.default)((0,a.default)({},f),{},{file:u[d]}));case 18:d++,i.next=7;break;case 21:t.$emit("select",{tempFiles:c,tempFilePaths:o}),e.tempFiles=u,t.autoUpload&&!t.noSpace||(e.tempFiles=[]);case 24:case"end":return i.stop()}}),i)})))()},uploadFiles:function(e){var t=this;e=[].concat(e),o.uploadCloudFiles.call(this,e,5,(function(e){t.setProgress(e,e.index,!0)})).then((function(e){t.setSuccessAndError(e)})).catch((function(e){console.log(e)}))},setSuccessAndError:function(e,t){var i=this;return(0,s.default)(regeneratorRuntime.mark((function t(){var n,r,a,s,o,l,u;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=[],r=[],a=[],s=[],o=regeneratorRuntime.mark((function t(o){var l,u,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(l=e[o],u=l.uuid?i.files.findIndex((function(e){return e.uuid===l.uuid})):l.index,-1!==u&&i.files){t.next=4;break}return t.abrupt("return","break");case 4:if("request:fail"!==l.errMsg){t.next=12;break}i.files[u].url=l.path,i.files[u].status="error",i.files[u].errMsg=l.errMsg,r.push(i.files[u]),s.push(i.files[u].url),t.next=26;break;case 12:if(i.files[u].errMsg="",i.files[u].fileID=l.url,c=/cloud:\/\/([\w.]+\/?)\S*/,!c.test(l.url)){t.next=21;break}return t.next=18,i.getTempFileURL(l.url);case 18:i.files[u].url=t.sent,t.next=22;break;case 21:i.files[u].url=l.url;case 22:i.files[u].status="success",i.files[u].progress+=1,n.push(i.files[u]),a.push(i.files[u].fileID);case 26:case"end":return t.stop()}}),t)})),l=0;case 6:if(!(l<e.length)){t.next=14;break}return t.delegateYield(o(l),"t0",8);case 8:if(u=t.t0,"break"!==u){t.next=11;break}return t.abrupt("break",14);case 11:l++,t.next=6;break;case 14:n.length>0&&(i.setEmit(),i.$emit("success",{tempFiles:i.backObject(n),tempFilePaths:a})),r.length>0&&i.$emit("fail",{tempFiles:i.backObject(r),tempFilePaths:s});case 16:case"end":return t.stop()}}),t)})))()},setProgress:function(e,t,i){this.files.length;var n=Math.round(100*e.loaded/e.total),r=t;i||(r=this.files.findIndex((function(t){return t.uuid===e.tempFile.uuid}))),-1!==r&&this.files[r]&&(this.files[r].progress=n-1,this.$emit("progress",{index:r,progress:parseInt(n),tempFile:this.files[r]}))},delFile:function(e){var t=this;this.$emit("delete",{tempFile:this.files[e],tempFilePath:this.files[e].url}),this.files.splice(e,1),this.$nextTick((function(){t.setEmit()}))},getFileExt:function(e){var t=e.lastIndexOf("."),i=e.length;return{name:e.substring(0,t),ext:e.substring(t+1,i)}},setEmit:function(){var e=[];"object"===this.returnType?(e=this.backObject(this.files)[0],this.localValue={},Object.assign(this.localValue,e)):(e=this.backObject(this.files),this.localValue||(this.localValue=[]),this.localValue=(0,r.default)(e)),this.$emit("input",this.localValue)},backObject:function(e){var t=[];return e.forEach((function(e){t.push({extname:e.extname,fileType:e.fileType,image:e.image,name:e.name,path:e.path,size:e.size,fileID:e.fileID,url:e.url})})),t},getTempFileURL:function(t){return(0,s.default)(regeneratorRuntime.mark((function i(){var n;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return t={fileList:[].concat(t)},i.next=3,e.getTempFileURL(t);case 3:return n=i.sent,i.abrupt("return",n.fileList[0].tempFileURL||"");case 5:case"end":return i.stop()}}),i)})))()},getForm:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"uniForms",t=this.$parent,i=t.$options.name;while(i!==e){if(t=t.$parent,!t)return!1;i=t.$options.name}return t}}};t.default=d}).call(this,i("a9ff")["default"])},f08b:function(e,t,i){"use strict";i.r(t);var n=i("36fe"),r=i.n(n);for(var a in n)"default"!==a&&function(e){i.d(t,e,(function(){return n[e]}))}(a);t["default"]=r.a},f3fb:function(e,t,i){var n=i("24fb");t=n(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/***字体大小规范***/\r\n/***颜色定义***/\r\n/***行间距***/.uni-file-picker__container[data-v-231c75c7]{display:flex;box-sizing:border-box;flex-wrap:wrap;margin:-5px}.file-picker__box[data-v-231c75c7]{position:relative;width:33.3%;height:0;padding-top:33.33%;box-sizing:border-box}.file-picker__box-content[data-v-231c75c7]{position:absolute;top:0;right:0;bottom:0;left:0;margin:5px;border:1px #eee solid;border-radius:5px;overflow:hidden}.file-picker__progress[data-v-231c75c7]{position:absolute;bottom:0;left:0;right:0;\r\n  /* border: 1px red solid; */z-index:2}.file-picker__progress-item[data-v-231c75c7]{width:100%}.file-picker__mask[data-v-231c75c7]{display:flex;justify-content:center;align-items:center;position:absolute;right:0;top:0;bottom:0;left:0;color:#fff;font-size:12px;background-color:rgba(0,0,0,.4)}.file-image[data-v-231c75c7]{width:100%;height:100%}.is-add[data-v-231c75c7]{display:flex;align-items:center;justify-content:center}.icon-add[data-v-231c75c7]{width:50px;height:5px;background-color:#f1f1f1;border-radius:2px}.rotate[data-v-231c75c7]{position:absolute;transform:rotate(90deg)}.icon-del-box[data-v-231c75c7]{display:flex;align-items:center;justify-content:center;position:absolute;top:3px;right:3px;height:26px;width:26px;border-radius:50%;background-color:rgba(0,0,0,.5);z-index:2;transform:rotate(-45deg)}.icon-del[data-v-231c75c7]{width:15px;height:2px;background-color:#fff;border-radius:2px}',""]),e.exports=t}}]);