(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4a748fec"],{"163d":function(e,t,r){"use strict";var a=r("e7ad"),n=r("e042"),o=r("75c4"),s=r("1e5b"),i=r("94b3"),c=r("238a"),l=r("2ea2").f,u=r("dcb7").f,p=r("064e").f,d=r("777a").trim,f="Number",m=a[f],b=m,h=m.prototype,v=o(r("e005")(h))==f,g="trim"in String.prototype,y=function(e){var t=i(e,!1);if("string"==typeof t&&t.length>2){t=g?t.trim():d(t,3);var r,a,n,o=t.charCodeAt(0);if(43===o||45===o){if(r=t.charCodeAt(2),88===r||120===r)return NaN}else if(48===o){switch(t.charCodeAt(1)){case 66:case 98:a=2,n=49;break;case 79:case 111:a=8,n=55;break;default:return+t}for(var s,c=t.slice(2),l=0,u=c.length;l<u;l++)if(s=c.charCodeAt(l),s<48||s>n)return NaN;return parseInt(c,a)}}return+t};if(!m(" 0o1")||!m("0b1")||m("+0x1")){m=function(e){var t=arguments.length<1?0:e,r=this;return r instanceof m&&(v?c((function(){h.valueOf.call(r)})):o(r)!=f)?s(new b(y(t)),r,m):y(t)};for(var _,O=r("149f")?l(b):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),x=0;O.length>x;x++)n(b,_=O[x])&&!n(m,_)&&p(m,_,u(b,_));m.prototype=h,h.constructor=m,r("bf16")(a,f,m)}},"1e5b":function(e,t,r){var a=r("fb68"),n=r("859b").set;e.exports=function(e,t,r){var o,s=t.constructor;return s!==r&&"function"==typeof s&&(o=s.prototype)!==r.prototype&&a(o)&&n&&n(e,o),e}},"1e75":function(e,t,r){},"73d1":function(e,t,r){},7666:function(e,t,r){"use strict";var a=r("73d1"),n=r.n(a);n.a},"777a":function(e,t,r){var a=r("e46b"),n=r("f6b4"),o=r("238a"),s=r("9769"),i="["+s+"]",c="​",l=RegExp("^"+i+i+"*"),u=RegExp(i+i+"*$"),p=function(e,t,r){var n={},i=o((function(){return!!s[e]()||c[e]()!=c})),l=n[e]=i?t(d):s[e];r&&(n[r]=l),a(a.P+a.F*i,"String",n)},d=p.trim=function(e,t){return e=String(n(e)),1&t&&(e=e.replace(l,"")),2&t&&(e=e.replace(u,"")),e};e.exports=p},"859b":function(e,t,r){var a=r("fb68"),n=r("69b3"),o=function(e,t){if(n(e),!a(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};e.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(e,t,a){try{a=r("4ce5")(Function.call,r("dcb7").f(Object.prototype,"__proto__").set,2),a(e,[]),t=!(e instanceof Array)}catch(n){t=!0}return function(e,r){return o(e,r),t?e.__proto__=r:a(e,r),e}}({},!1):void 0),check:o}},9769:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},d9dd:function(e,t,r){"use strict";r.r(t);var a,n,o,s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"my-card-page"},[r("van-nav-bar",{attrs:{fixed:"",border:"",title:"我的名片","left-arrow":""},on:{"click-left":e.goBack}}),r("van-cell-group",{staticClass:"cell-group"},[r("van-cell",{attrs:{title:"上传名片",value:"上传名片自动识别填写并获得身份认证","is-link":"","value-class":"long-value",border:!1}},[r("van-uploader",{staticClass:"upload",attrs:{"after-read":e.uploadFile,accept:"image/*"}},[r("span",[e._v("上传名片自动识别填写并获得身份认证")])])],1),r("van-cell",{staticStyle:{"padding-top":"5px","padding-bottom":"15px"}},[r("van-uploader",{staticClass:"upload",attrs:{"after-read":e.uploadFile,accept:"image/*"}},[r("div",{staticClass:"upload-box"},[e.form.visit_card?r("img",{staticClass:"uploaded-img",attrs:{src:e.form.visit_card,alt:""}}):r("van-icon",{staticClass:"icon",attrs:{name:"plus",color:"#eee"}})],1)])],1)],1),r("van-cell-group",{staticClass:"cell-group"},[r("van-field",{attrs:{required:"",clearable:"",label:"姓名",required:e.aip.name,placeholder:"请输入您的姓名","error-message":e.errors.name,"input-align":"right","error-message-align":"right"},on:{input:function(t){e.errors.name=""}},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}}),r("van-field",{attrs:{required:e.aip.mobile,clearable:"",label:"手机号码",placeholder:"请输入您的手机号码","error-message":e.errors.mobile,"input-align":"right","error-message-align":"right"},on:{input:function(t){e.errors.mobile=""}},model:{value:e.form.mobile,callback:function(t){e.$set(e.form,"mobile",t)},expression:"form.mobile"}}),r("van-field",{attrs:{required:e.aip.position,clearable:"",label:"职位",placeholder:"请输入您的职位","error-message":e.errors.position,"input-align":"right","error-message-align":"right"},on:{input:function(t){e.errors.position=""}},model:{value:e.form.position,callback:function(t){e.$set(e.form,"position",t)},expression:"form.position"}}),r("van-field",{attrs:{required:e.aip.email,clearable:"",label:"邮箱",placeholder:"请输入您的邮箱","error-message":e.errors.email,"input-align":"right","error-message-align":"right"},on:{input:function(t){e.errors.email=""}},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}}),r("van-cell",{attrs:{title:"个人简介",border:!1}}),r("van-field",{staticClass:"textarea",attrs:{required:e.aip.p_profile,type:"textarea","error-message":e.errors.p_profile,placeholder:"写点关于您的事情吧..."},on:{input:function(t){e.errors.p_profile=""}},model:{value:e.form.p_profile,callback:function(t){e.$set(e.form,"p_profile",t)},expression:"form.p_profile"}})],1),r("van-cell-group",{staticClass:"cell-group"},[r("van-field",{attrs:{value:e.selectedAreaName||e.userInfo.address,"is-link":"",readonly:"",required:e.aip.address,label:"所在城市",placeholder:"请选择您的地址","input-align":"right","error-message-align":"right","error-message":e.errors.address},on:{click:e.showAreaPopup}}),r("van-field",{attrs:{required:e.aip.industry_id,"is-link":"",readonly:"",label:"行业",placeholder:"请选择您的行业","input-align":"right","error-message-align":"right"},on:{click:e.showIndustryPopup},model:{value:e.selectedIndustry,callback:function(t){e.selectedIndustry=t},expression:"selectedIndustry"}}),r("van-field",{attrs:{required:e.aip.attrs,readonly:"","is-link":"",label:"产品",placeholder:"请输入您的产品","input-align":"right"},on:{click:e.showTextareaPopup},model:{value:e.form.product,callback:function(t){e.$set(e.form,"product",t)},expression:"form.product"}})],1),r("van-cell-group",{staticClass:"cell-group"},[r("van-field",{attrs:{required:e.aip.company,clearable:"",label:"公司名称",placeholder:"请输入您的公司名称","error-message":e.errors.company,"input-align":"right","error-message-align":"right"},on:{input:function(t){e.errors.company=""}},model:{value:e.form.company,callback:function(t){e.$set(e.form,"company",t)},expression:"form.company"}}),r("van-field",{attrs:{required:"",clearable:"",label:"公司类型",placeholder:"请选择您的公司类型","error-message":e.errors.companytype,"input-align":"right","error-message-align":"right",readonly:"","is-link":""},on:{click:e.showcompanytype},model:{value:e.form.companytype,callback:function(t){e.$set(e.form,"companytype",t)},expression:"form.companytype"}}),r("van-field",{attrs:{required:e.aip.c_address,clearable:"",label:"公司地址",placeholder:"请输入您的公司地址","error-message":e.errors.c_address,"input-align":"right","error-message-align":"right"},on:{input:function(t){e.errors.c_address=""}},model:{value:e.form.c_address,callback:function(t){e.$set(e.form,"c_address",t)},expression:"form.c_address"}}),r("van-field",{attrs:{clearable:"",required:e.aip.company_url,label:"公司网站",placeholder:"请输入您的公司网站","error-message":e.errors.company_url,"input-align":"right","error-message-align":"right"},on:{input:function(t){e.errors.company_url=""}},model:{value:e.form.company_url,callback:function(t){e.$set(e.form,"company_url",t)},expression:"form.company_url"}}),r("van-cell",{attrs:{title:"公司产品介绍",border:!1}}),r("van-field",{staticClass:"textarea",attrs:{type:"textarea",required:e.aip.c_profile,"error-message":e.errors.c_profile,placeholder:"介绍一下您公司的产品吧..."},on:{input:function(t){e.errors.c_profile=""}},model:{value:e.form.c_profile,callback:function(t){e.$set(e.form,"c_profile",t)},expression:"form.c_profile"}})],1),r("van-cell-group",{staticClass:"cell-group"},[r("van-field",{attrs:{center:"",clearable:"",label:"短信验证码",placeholder:"请输入短信验证码"},model:{value:e.form.sms,callback:function(t){e.$set(e.form,"sms",t)},expression:"form.sms"}},[r("van-button",{attrs:{slot:"button",disabled:!!e.smsT,plain:"",size:"small",type:"danger"},on:{click:e.getSms},slot:"button"},[e._v(e._s(e.smsT?e.smsT+"s":"获取验证码")+"\n        ")])],1)],1),r("van-row",{staticClass:"cell-group"},[r("van-col",{attrs:{span:"12"}},[r("van-button",{attrs:{block:""},on:{click:e.goBack}},[e._v("取消")])],1),r("van-col",{attrs:{span:"12"}},[r("van-button",{attrs:{block:"",type:"danger"},on:{click:e.handleSubmit}},[e._v("保存")])],1)],1),r("area-popup",{ref:"areaPopup",attrs:{value:e.selectedAreaCode},on:{confirm:e.selectArea}}),r("industry-popup",{ref:"industryPopup",attrs:{value:e.selectedIndustry},on:{confirm:e.selectIndustry,clear:e.clearIndustry}}),r("textarea-popup",{ref:"textareaPopup",attrs:{value:e.form.product},on:{confirm:e.updateProduct}}),r("company-type",{ref:"companyTypes",attrs:{value:e.form.companytype},on:{confirm:e.selecompanytype}})],1)},i=[],c=(r("5ab2"),r("6d57"),r("e10e"),r("f548"),r("163d"),r("419a"),r("e980")),l=r("ac9f"),u=(r("08e5"),r("2fab")),p=(r("10c2"),r("e3b4")),d=(r("9c0f"),r("a9f0")),f=(r("bc44"),r("6628")),m=(r("b587"),r("e513")),b=(r("1fac"),r("36bd")),h=(r("03fd"),r("7c28")),v=(r("9cf9"),r("fad3")),g=(r("7ea6"),r("45ba")),y=(r("9d47"),r("bb63")),_=(r("cc57"),r("be9b"),r("db43")),O=r("8876"),x=r("873a"),j=r("5aa3"),k=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("van-popup",{staticClass:"textarea-popup",attrs:{position:"bottom"},model:{value:e.visible,callback:function(t){e.visible=t},expression:"visible"}},[r("div",{staticClass:"popup-header"},[r("div",{staticClass:"left"},[r("span",{staticClass:"btn",on:{click:e.clear}},[e._v("清除全部")])]),r("p",{staticClass:"title"},[e._v("产品")]),r("div",{staticClass:"right"},[r("span",{staticClass:"btn",on:{click:e.onConfirm}},[e._v("确认")])])]),r("p",{staticClass:"tips"},[e._v("请填写您的产品，多产品请用“/”间隔")]),r("van-field",{staticClass:"textarea",attrs:{rows:"4",type:"textarea",placeholder:e.placeholder},model:{value:e.keyword,callback:function(t){e.keyword=t},expression:"keyword"}})],1)},I=[],w=(r("895c"),r("a66e")),C={name:"about",components:(a={},Object(l["a"])(a,y["a"].name,y["a"]),Object(l["a"])(a,h["a"].name,h["a"]),Object(l["a"])(a,w["a"].name,w["a"]),a),props:{confirm:Function,value:String,placeholder:{type:String,default:"请输入内容"}},data:function(){return{keyword:this.value,visible:!1}},watch:{value:function(e){this.keyword=e}},methods:{show:function(){this.visible=!0},hide:function(){this.visible=!1},onConfirm:function(){this.$emit("confirm",this.keyword),this.hide()},clear:function(){this.$emit("confirm",""),this.hide()}}},$=C,A=(r("7666"),r("623f")),P=Object(A["a"])($,k,I,!1,null,"4f75a400",null),T=P.exports,N=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("van-popup",{attrs:{position:"bottom",overlay:!0},model:{value:e.visible,callback:function(t){e.visible=t},expression:"visible"}},[r("van-picker",{attrs:{columns:e.columns,"cancel-button-text":"清除选择","confirm-button-text":"确认","show-toolbar":""},on:{cancel:e.onCancel,confirm:e.onConfirm}})],1)},E=[],S=(r("b38b"),r("20fb")),q=r("fa8b"),F={name:"measure-popup",components:(n={},Object(l["a"])(n,S["a"].name,S["a"]),Object(l["a"])(n,w["a"].name,w["a"]),n),data:function(){return{visible:!1,columns:["生产商","贸易商"],arr:[]}},created:function(){Object(q["o"])().then((function(e){}))},methods:{show:function(){this.visible=!0},hide:function(){this.visible=!1},onCancel:function(e){this.$emit("confirm",""),this.hide()},onConfirm:function(e,t){this.hide()}}},R=F,B=Object(A["a"])(R,N,E,!1,null,null,null),D=B.exports,M=r("a417"),U=(r("bee3"),r("2b26"));function V(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function G(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?V(Object(r),!0).forEach((function(t){Object(l["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):V(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var L={name:"my-card",components:(o={},Object(l["a"])(o,_["a"].name,_["a"]),Object(l["a"])(o,y["a"].name,y["a"]),Object(l["a"])(o,g["a"].name,g["a"]),Object(l["a"])(o,v["a"].name,v["a"]),Object(l["a"])(o,h["a"].name,h["a"]),Object(l["a"])(o,b["a"].name,b["a"]),Object(l["a"])(o,m["a"].name,m["a"]),Object(l["a"])(o,f["a"].name,f["a"]),Object(l["a"])(o,d["a"].name,d["a"]),Object(l["a"])(o,p["a"].name,p["a"]),Object(l["a"])(o,u["a"].name,u["a"]),Object(l["a"])(o,"AreaPopup",x["a"]),Object(l["a"])(o,"IndustryPopup",j["a"]),Object(l["a"])(o,"TextareaPopup",T),Object(l["a"])(o,"companyType",D),o),data:function(){return{smsT:0,selectedArea:[],selectedIndustryObj:[],aip:{},form:{sms:"",name:"",email:"",mobile:"",company:"",position:"",p_profile:"",c_profile:"",c_address:"",company_url:"",product:"",visit_card:"",companytype:""},errors:{sms:"",name:"",email:"",mobile:"",company:"",position:"",p_profile:"",c_profile:"",address:"",industry:"",c_address:"",company_url:"",product:"",companytype:""}}},computed:G({},Object(O["d"])(["from"]),{},Object(O["c"])(["userInfo","industries"]),{selectedAreaCode:function(){var e=this.selectedArea.length;return e>0?this.selectedArea[e-1].code:"100100"},selectedAreaName:function(){var e=this.selectedArea.length;return e>0?this.selectedArea.map((function(e){return e.name})).join(" "):""},selectedIndustry:function(){return this.selectedIndustryObj.length>1?this.selectedIndustryObj.map((function(e){return e.name})).join("/"):""}}),mounted:function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(){var t,r,a,n,o,s,i,c,l,u,p,d,f,m,b=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return Object(U["m"])().then((function(e){var t=function(t){e.map((function(e){e.field==t&&b.$set(b.aip,t,!!Number(e.is_fill))}))};for(var r in b.form)t(r)})),e.next=3,this.$store.dispatch("fetchUserInfo",this.userInfo.id);case 3:t=this.userInfo,r=t.name,a=t.email,n=t.mobile,o=t.company,s=t.position,i=t.p_profile,c=t.c_profile,l=t.c_address,u=t.company_url,p=t.attrs,d=t.visit_card,f=t.industry_id,m=t.industry_names,this.selectedIndustryObj=m.map((function(e){return{name:e,id:f}})),this.form={name:n?r:"",email:a,mobile:n,company:o,position:s,p_profile:i,c_profile:c,c_address:l,company_url:u,visit_card:d,product:p.length>0?p.join("/"):""};case 6:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),methods:{goBack:function(){this.from?this.$router.back():this.$router.replace("/demands")},showTextareaPopup:function(){this.$refs["textareaPopup"].show()},updateProduct:function(e){this.form.product=e},showcompanytype:function(){this.$refs["companyTypes"].show()},selecompanytype:function(e){this.form.companytype=e,console.log(this.form.companytype)},showAreaPopup:function(){this.$refs["areaPopup"].show()},selectArea:function(e){this.selectedArea=e,this.errors.address=""},showIndustryPopup:function(){this.$refs["industryPopup"].show()},selectIndustry:function(e){this.selectedIndustryObj=e,this.errors.industry=""},clearIndustry:function(){this.selectedIndustryObj=[],this.errors.industry=""},uploadFile:function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(t){var r,a,n,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.file,a=new FormData,a.append("file",r),n=this.$toast.loading({duration:0,forbidClick:!0,loadingType:"spinner",message:"上传中"}),e.prev=4,e.next=7,Object(q["z"])(a);case 7:o=e.sent,n.clear(),this.form=o,this.form.mobile=o.phone,this.form.c_address=o.address,this.form.visit_card=o.imgUrl,console.log(o),e.next=20;break;case 16:e.prev=16,e.t0=e["catch"](4),n.clear(),this.$toast.fail(e.t0.message);case 20:case"end":return e.stop()}}),e,this,[[4,16]])})));function t(t){return e.apply(this,arguments)}return t}(),getSms:function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(){var t,r=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.form.mobile){e.next=3;break}return this.$toast("请先输入手机号码"),e.abrupt("return");case 3:return e.next=5,Object(M["l"])({uid:this.userInfo.id,mobile:this.form.mobile});case 5:this.smsT=60,t=setInterval((function(){r.smsT=r.smsT-1,0==r.smsT&&clearInterval(t)}),1e3);case 7:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),handleSubmit:function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(){var t,r,a,n,o,s,i,c,l,u,p,d,f,m,b=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t=this.form,r=t.sms,a=t.name,n=t.email,o=t.mobile,s=t.company,i=t.position,c=t.p_profile,l=t.c_profile,u=t.c_address,p=t.company_url,d=t.product,f=t.visit_card,r){e.next=4;break}return this.$toast("请输入您的短信验证码"),e.abrupt("return");case 4:return e.prev=4,e.next=7,Object(M["b"])({uid:this.userInfo.id,vcode:r});case 7:e.next=14;break;case 9:return e.prev=9,e.t0=e["catch"](4),console.log(e.t0),this.$toast(e.t0.message||"验证码校验失败"),e.abrupt("return");case 14:if(m=this.selectedArea.length>0?this.selectedArea.map((function(e){return e.name})).join(" "):this.userInfo.address,e.prev=15,"0"!==this.userInfo.status){e.next=22;break}return e.next=19,Object(M["r"])({open_id:this.userInfo.open_id,head_img:this.userInfo.head_img,name:a,email:n,mobile:o,company:s,position:i,p_profile:c,c_profile:l,c_address:u,company_url:p,address:m,attrs:d,industry_id:this.selectedIndustryObj.length>0?this.selectedIndustryObj[1].id:"",visit_card:f});case 19:setTimeout((function(){b.$dialog.alert({title:"温馨提示",message:"恭喜您注册成功",confirmButtonText:"确认"}).then((function(){b.$router.replace("/user-center")}))}),300),e.next=25;break;case 22:return e.next=24,Object(M["t"])({user_id:this.userInfo.id,open_id:this.userInfo.open_id,head_img:this.userInfo.head_img,name:a,email:n,mobile:o,company:s,position:i,p_profile:c,c_profile:l,c_address:u,company_url:p,address:m,attrs:d,industry_id:this.selectedIndustryObj.length>0?this.selectedIndustryObj[1].id:"",visit_card:f});case 24:this.$dialog.alert({title:"温馨提示",message:"个人信息修改成功",confirmButtonText:"确认"}).then((function(){b.goBack()}));case 25:e.next=31;break;case 27:e.prev=27,e.t1=e["catch"](15),console.log(e.t1),this.$dialog.alert({title:"错误提示",message:e.t1.message,confirmButtonText:"确认"});case 31:case"end":return e.stop()}}),e,this,[[4,9],[15,27]])})));function t(){return e.apply(this,arguments)}return t}()}},z=L,J=(r("f5ab"),Object(A["a"])(z,s,i,!1,null,"3c078fe4",null));t["default"]=J.exports},f5ab:function(e,t,r){"use strict";var a=r("1e75"),n=r.n(a);n.a}}]);
//# sourceMappingURL=chunk-4a748fec.4.0.0.1587454105693.js.map