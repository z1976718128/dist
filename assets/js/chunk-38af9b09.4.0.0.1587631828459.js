(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-38af9b09"],{"6e7a":function(t,e,r){"use strict";r.r(e);var n,a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"feedback-page"},[n("van-nav-bar",{attrs:{fixed:"",border:"",title:"意见反馈","left-arrow":""},on:{"click-left":t.goBack}}),n("van-cell-group",{attrs:{border:!1}},[n("van-cell",{attrs:{title:"您提交的问题，我们会尽快处理并与您联系",border:!1}}),n("van-field",{staticClass:"textarea",attrs:{type:"textarea",border:!1,autosize:{maxHeight:180,minHeight:120},"error-message":t.errors.content,placeholder:"请描述您遇到的问题..."},on:{input:function(e){t.errors.content=""}},model:{value:t.form.content,callback:function(e){t.$set(t.form,"content",e)},expression:"form.content"}})],1),n("img",{staticClass:"dialog-img",staticStyle:{"text-align":"center"},attrs:{width:"150",height:"150",src:r("fbe3")}}),n("p",{staticStyle:{"text-align":"center"}},[t._v("长按或扫一扫添加微信")]),t._m(0),n("van-button",{staticClass:"bottom-bar",attrs:{block:"",type:"danger"},on:{click:t.handleSubmit}},[t._v("提交意见")])],1)},c=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",{staticStyle:{"text-align":"center"}},[t._v("如需帮助，请拨打平台管理员电话"),r("br"),t._v("15602908103")])}],o=(r("5ab2"),r("6d57"),r("e10e"),r("b449"),r("17d6")),i=(r("f548"),r("b081")),s=(r("fb7e"),r("f470")),b=(r("7bd2"),r("1f1c")),u=(r("eef9"),r("25c8")),f=(r("d044"),r("d046")),l=(r("3b67"),r("b7d9")),d=(r("cc57"),r("ecc9"),r("d1b4")),m=r("8876"),p=r("a417");function h(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function O(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?h(Object(r),!0).forEach((function(e){Object(i["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var g={name:"feedback",components:(n={},Object(i["a"])(n,d["a"].name,d["a"]),Object(i["a"])(n,l["a"].name,l["a"]),Object(i["a"])(n,f["a"].name,f["a"]),Object(i["a"])(n,u["a"].name,u["a"]),Object(i["a"])(n,b["a"].name,b["a"]),Object(i["a"])(n,s["a"].name,s["a"]),n),data:function(){return{form:{content:""},errors:{content:""}}},computed:O({},Object(m["d"])(["from"]),{},Object(m["c"])(["userInfo"])),methods:{goBack:function(){this.from?this.$router.back():this.$router.replace("/demands")},handleSubmit:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.form.content){t.next=3;break}return this.errors.content="请描述您遇到的问题",t.abrupt("return");case 3:return t.next=5,Object(p["d"])(this.form.content,this.userInfo.id);case 5:this.$dialog.alert({title:"温馨提示",message:"感谢您的反馈，我们将尽快处理并与您联系",confirmButtonText:"确认"}).then((function(){e.goBack()}));case 6:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}},v=g,j=(r("9e66"),r("e90a")),w=Object(j["a"])(v,a,c,!1,null,"8dd686cc",null);e["default"]=w.exports},"9e66":function(t,e,r){"use strict";var n=r("b65f"),a=r.n(n);a.a},b65f:function(t,e,r){}}]);
//# sourceMappingURL=chunk-38af9b09.4.0.0.1587631828459.js.map