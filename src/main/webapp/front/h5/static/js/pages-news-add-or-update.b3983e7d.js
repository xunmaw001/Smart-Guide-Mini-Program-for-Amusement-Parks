(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-news-add-or-update"],{"54dd":function(r,t,e){"use strict";var i,a=function(){var r=this,t=r.$createElement,e=r._self._c||t;return e("v-uni-view",{staticClass:"content"},[e("v-uni-form",{staticClass:"app-update-pv"},[e("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 1)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"108rpx"}},[e("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(130, 163, 157, 1)",backgroundColor:"rgba(0,0,0,0)",color:"rgba(161, 161, 161, 1)",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("标题")]),e("v-uni-input",{style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",borderColor:"rgba(0,0,0,.6)",backgroundColor:"rgba(255, 255, 255, 0)",color:"rgba(161, 161, 161, 1)",textAlign:"left",borderRadius:"16rpx",borderWidth:"2rpx",width:"calc(100% - 160rpx)",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:r.ro.title,placeholder:"标题"},model:{value:r.ruleForm.title,callback:function(t){r.$set(r.ruleForm,"title",t)},expression:"ruleForm.title"}})],1),e("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 1)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"108rpx"},on:{click:function(t){arguments[0]=t=r.$handleEvent(t),r.pictureTap.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(161, 161, 161, 1)",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("图片")]),e("v-uni-view",{staticClass:"right-input",staticStyle:{padding:"0"}},[r.ruleForm.picture?e("v-uni-image",{staticClass:"avator",style:{padding:"0",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 auto",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",borderRadius:"100%",borderWidth:"0",width:"88rpx",borderStyle:"solid",height:"88rpx"},attrs:{src:r.baseUrl+r.ruleForm.picture,mode:"aspectFill"}}):e("v-uni-image",{staticClass:"avator",style:{padding:"0",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 auto",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",borderRadius:"100%",borderWidth:"0",width:"88rpx",borderStyle:"solid",height:"88rpx"},attrs:{src:"../../static/gen/upload.png",mode:"aspectFill"}})],1)],1),e("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 1)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"308rpx"}},[e("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(161, 161, 161, 1)",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("简介")]),e("v-uni-textarea",{style:{padding:"20rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(161, 161, 161, 1)",borderWidth:"2rpx",width:"calc(100% - 160rpx)",fontSize:"28rpx",borderStyle:"solid",height:"280rpx"},attrs:{placeholder:"简介"},model:{value:r.ruleForm.introduction,callback:function(t){r.$set(r.ruleForm,"introduction",t)},expression:"ruleForm.introduction"}})],1),e("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 1)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"308rpx"}},[e("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(161, 161, 161, 1)",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("内容")]),e("v-uni-textarea",{style:{padding:"20rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(161, 161, 161, 1)",borderWidth:"2rpx",width:"calc(100% - 160rpx)",fontSize:"28rpx",borderStyle:"solid",height:"280rpx"},attrs:{placeholder:"内容"},model:{value:r.ruleForm.content,callback:function(t){r.$set(r.ruleForm,"content",t)},expression:"ruleForm.content"}})],1),e("v-uni-view",{staticClass:"btn"},[e("v-uni-button",{staticClass:"bg-red",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0) inset",margin:"0",backgroundColor:"rgba(130, 163, 157, 1)",borderColor:"rgba(130, 163, 157, 1)",borderRadius:"80rpx",color:"#fff",borderWidth:"1",width:"80%",fontSize:"28rpx",borderStyle:"solid",height:"80rpx"},on:{click:function(t){arguments[0]=t=r.$handleEvent(t),r.onSubmitTap.apply(void 0,arguments)}}},[r._v("提交")])],1)],1)],1)},n=[];e.d(t,"b",(function(){return a})),e.d(t,"c",(function(){return n})),e.d(t,"a",(function(){return i}))},"728a":function(r,t,e){var i=e("24fb");t=i(!1),t.push([r.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.container[data-v-1413380d]{padding:%?20?%}.content[data-v-1413380d]:after{position:fixed;top:0;right:0;left:0;bottom:0;content:"";background-image:url(http://codegen.caihongy.cn/20220210/87bd12d356ac4a8e90125da208a7597e.png);background-attachment:fixed;background-size:cover;background-position:50%}uni-textarea[data-v-1413380d]{border:%?1?% solid #eee;border-radius:%?20?%;padding:%?20?%}.title[data-v-1413380d]{width:%?180?%}.avator[data-v-1413380d]{width:%?150?%;height:%?60?%}.right-input[data-v-1413380d]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:left;padding:0 %?24?%}.cu-form-group.active[data-v-1413380d]{-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.btn[data-v-1413380d]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-flex-wrap:wrap;flex-wrap:wrap;padding:%?20?% 0}.cu-form-group[data-v-1413380d]{padding:0 %?24?%;background-color:initial;min-height:inherit}.cu-form-group + .cu-form-group[data-v-1413380d]{border:0}.cu-form-group uni-input[data-v-1413380d]{padding:0 %?30?%}.uni-input[data-v-1413380d]{padding:0 %?30?%}.cu-form-group uni-textarea[data-v-1413380d]{padding:%?30?%;margin:0}.cu-form-group uni-picker[data-v-1413380d]::after{line-height:%?80?%}.select .uni-input[data-v-1413380d]{line-height:%?80?%}.input .right-input[data-v-1413380d]{line-height:%?88?%}',""]),r.exports=t},"8ad2":function(r,t,e){"use strict";var i=e("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,e("a481"),e("c5f6"),e("f559"),e("ac6a"),e("96cf");var a=i(e("3b8d")),n=i(e("e2b1")),o={data:function(){return{cross:"",ruleForm:{title:"",introduction:"",picture:"",content:""},user:{},ro:{title:!1,introduction:!1,picture:!1,content:!1}}},components:{wPicker:n.default},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(){var r=(0,a.default)(regeneratorRuntime.mark((function r(t){var e,i,a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return e=uni.getStorageSync("nowTable"),r.next=3,this.$api.session(e);case 3:if(i=r.sent,this.user=i.data,this.ruleForm.userid=uni.getStorageSync("userid"),t.refid&&(this.ruleForm.refid=t.refid,this.ruleForm.nickname=uni.getStorageSync("nickname")),!t.id){r.next=13;break}return this.ruleForm.id=t.id,r.next=11,this.$api.info("news",this.ruleForm.id);case 11:i=r.sent,this.ruleForm=i.data;case 13:if(this.cross=t.cross,!t.cross){r.next=37;break}a=uni.getStorageSync("crossObj"),r.t0=regeneratorRuntime.keys(a);case 17:if((r.t1=r.t0()).done){r.next=37;break}if(n=r.t1.value,"title"!=n){r.next=23;break}return this.ruleForm.title=a[n],this.ro.title=!0,r.abrupt("continue",17);case 23:if("introduction"!=n){r.next=27;break}return this.ruleForm.introduction=a[n],this.ro.introduction=!0,r.abrupt("continue",17);case 27:if("picture"!=n){r.next=31;break}return this.ruleForm.picture=a[n],this.ro.picture=!0,r.abrupt("continue",17);case 31:if("content"!=n){r.next=35;break}return this.ruleForm.content=a[n],this.ro.content=!0,r.abrupt("continue",17);case 35:r.next=17;break;case 37:this.styleChange();case 38:case"end":return r.stop()}}),r,this)})));function t(t){return r.apply(this,arguments)}return t}(),methods:{styleChange:function(){this.$nextTick((function(){}))},pictureTap:function(){var r=this;this.$api.upload((function(t){r.ruleForm.picture="upload/"+t.file,r.$forceUpdate(),r.$nextTick((function(){r.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var r=(0,a.default)(regeneratorRuntime.mark((function r(){var t,e,i,a,n,o,d,s,u,c;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(this.ruleForm.title){r.next=3;break}return this.$utils.msg("标题不能为空"),r.abrupt("return");case 3:if(this.ruleForm.picture){r.next=6;break}return this.$utils.msg("图片不能为空"),r.abrupt("return");case 6:if(this.ruleForm.content){r.next=9;break}return this.$utils.msg("内容不能为空"),r.abrupt("return");case 9:if(!this.cross){r.next=25;break}if(a=uni.getStorageSync("statusColumnName"),n=uni.getStorageSync("statusColumnValue"),""==a){r.next=25;break}if(o=uni.getStorageSync("crossObj"),a.startsWith("[")){r.next=21;break}for(d in o)d==a&&(o[d]=n);return s=uni.getStorageSync("crossTable"),r.next=19,this.$api.update("".concat(s),o);case 19:r.next=25;break;case 21:t=Number(uni.getStorageSync("userid")),e=o["id"],i=uni.getStorageSync("statusColumnName"),i=i.replace(/\[/,"").replace(/\]/,"");case 25:if(!e||!t){r.next=47;break}return this.ruleForm.crossuserid=t,this.ruleForm.crossrefid=e,u={page:1,limit:10,crossuserid:t,crossrefid:e},r.next=31,this.$api.list("news",u);case 31:if(c=r.sent,!(c.data.total>=i)){r.next=37;break}return this.$utils.msg(uni.getStorageSync("tips")),r.abrupt("return",!1);case 37:if(!this.ruleForm.id){r.next=42;break}return r.next=40,this.$api.update("news",this.ruleForm);case 40:r.next=44;break;case 42:return r.next=44,this.$api.add("news",this.ruleForm);case 44:this.$utils.msgBack("提交成功");case 45:r.next=55;break;case 47:if(!this.ruleForm.id){r.next=52;break}return r.next=50,this.$api.update("news",this.ruleForm);case 50:r.next=54;break;case 52:return r.next=54,this.$api.add("news",this.ruleForm);case 54:this.$utils.msgBack("提交成功");case 55:case"end":return r.stop()}}),r,this)})));function t(){return r.apply(this,arguments)}return t}(),optionsChange:function(r){this.index=r.target.value},bindDateChange:function(r){this.date=r.target.value},getDate:function(r){var t=new Date,e=t.getFullYear(),i=t.getMonth()+1,a=t.getDate();return"start"===r?e-=60:"end"===r&&(e+=2),i=i>9?i:"0"+i,a=a>9?a:"0"+a,"".concat(e,"-").concat(i,"-").concat(a)},toggleTab:function(r){this.$refs[r].show()}}};t.default=o},"9e70":function(r,t,e){"use strict";e.r(t);var i=e("54dd"),a=e("e23c");for(var n in a)"default"!==n&&function(r){e.d(t,r,(function(){return a[r]}))}(n);e("a7ca");var o,d=e("f0c5"),s=Object(d["a"])(a["default"],i["b"],i["c"],!1,null,"1413380d",null,!1,i["a"],o);t["default"]=s.exports},a7ca:function(r,t,e){"use strict";var i=e("b4c9"),a=e.n(i);a.a},b4c9:function(r,t,e){var i=e("728a");"string"===typeof i&&(i=[[r.i,i,""]]),i.locals&&(r.exports=i.locals);var a=e("4f06").default;a("6e1a1e67",i,!0,{sourceMap:!1,shadowMode:!1})},e23c:function(r,t,e){"use strict";e.r(t);var i=e("8ad2"),a=e.n(i);for(var n in i)"default"!==n&&function(r){e.d(t,r,(function(){return i[r]}))}(n);t["default"]=a.a}}]);