(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-61e8d18f"],{"6e7a":function(e,t,r){"use strict";r.r(t);var n,a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"feedback-page"},[n("van-nav-bar",{attrs:{fixed:"",border:"",title:"意见反馈","left-arrow":""},on:{"click-left":e.goBack}}),n("van-cell-group",{attrs:{border:!1}},[n("van-cell",{attrs:{title:"您提交的问题，我们会尽快处理并与您联系",border:!1}}),n("van-field",{staticClass:"textarea",attrs:{type:"textarea",border:!1,autosize:{maxHeight:180,minHeight:120},"error-message":e.errors.content,placeholder:"请描述您遇到的问题..."},on:{input:function(t){e.errors.content=""}},model:{value:e.form.content,callback:function(t){e.$set(e.form,"content",t)},expression:"form.content"}})],1),n("img",{staticClass:"dialog-img",staticStyle:{"text-align":"center"},attrs:{width:"150",height:"150",src:r("fbe3")}}),n("p",{staticStyle:{"text-align":"center"}},[e._v("长按或扫一扫添加微信")]),e._m(0),n("van-button",{staticClass:"bottom-bar",attrs:{block:"",type:"danger"},on:{click:e.handleSubmit}},[e._v("提交意见")])],1)},c=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",{staticStyle:{"text-align":"center"}},[e._v("如需帮助，请拨打平台管理员电话"),r("br"),e._v("15602908103")])}],o=(r("5ab2"),r("6d57"),r("e10e"),r("419a"),r("e980")),i=(r("f548"),r("ac9f")),s=(r("3ed2"),r("644f")),u=(r("03fd"),r("7c28")),f=(r("9cf9"),r("fad3")),b=(r("7ea6"),r("45ba")),l=(r("9d47"),r("bb63")),d=(r("cc57"),r("be9b"),r("db43")),m=r("8876"),p=r("a417");function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function O(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach((function(t){Object(i["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var g={name:"feedback",components:(n={},Object(i["a"])(n,d["a"].name,d["a"]),Object(i["a"])(n,l["a"].name,l["a"]),Object(i["a"])(n,b["a"].name,b["a"]),Object(i["a"])(n,f["a"].name,f["a"]),Object(i["a"])(n,u["a"].name,u["a"]),Object(i["a"])(n,s["a"].name,s["a"]),n),data:function(){return{form:{content:""},errors:{content:""}}},computed:O({},Object(m["d"])(["from"]),{},Object(m["c"])(["userInfo"])),methods:{goBack:function(){this.from?this.$router.back():this.$router.replace("/demands")},handleSubmit:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.form.content){e.next=3;break}return this.errors.content="请描述您遇到的问题",e.abrupt("return");case 3:return e.next=5,Object(p["d"])(this.form.content,this.userInfo.id);case 5:this.$dialog.alert({title:"温馨提示",message:"感谢您的反馈，我们将尽快处理并与您联系",confirmButtonText:"确认"}).then((function(){t.goBack()}));case 6:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}},v=g,j=(r("9e66"),r("623f")),w=Object(j["a"])(v,a,c,!1,null,"8dd686cc",null);t["default"]=w.exports},"9e66":function(e,t,r){"use strict";var n=r("9eed"),a=r.n(n);a.a},"9eed":function(e,t,r){}}]);
//# sourceMappingURL=chunk-61e8d18f.4.0.0.1587609208619.js.map