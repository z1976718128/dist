(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-09610477"],{"4f44":function(e,t,r){},8076:function(e,t,r){"use strict";r.r(t);var a,n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"apply-demand-page"},[r("van-nav-bar",{attrs:{fixed:"",border:"",title:"申请解决需求","left-arrow":""},on:{"click-left":e.goBack}}),r("van-cell-group",{attrs:{border:!1}},[r("van-field",{staticClass:"textarea",attrs:{type:"textarea",border:!1,autosize:{maxHeight:180,minHeight:120},"error-message":e.errors.reason,placeholder:"请输入申请内容..."},on:{input:function(t){e.errors.reason=""}},model:{value:e.form.reason,callback:function(t){e.$set(e.form,"reason",t)},expression:"form.reason"}})],1),r("div",{staticClass:"bottom-bar"},[r("van-button",{staticStyle:{"background-color":"rgba(0,0,0,0.75)",color:"#fff",border:"0","margin-top":"20px"},attrs:{block:"",square:"",size:"large"}},[r("van-icon",{attrs:{"class-prefix":"tj-icon",name:"xiangmu"}}),r("span",{staticStyle:{"font-size":"0.9em"}},[e._v("当前积分 "+e._s(e.userInfo.integral)+"。")]),r("span",{staticStyle:{"font-size":"0.9em"}},[e._v(" 申请解决需求将扣除2积分。")])],1),r("van-button",{attrs:{size:"large",square:"",block:"",type:"danger"},on:{click:e.handleSubmit}},[e._v("申请解决")])],1)],1)},o=[],c=(r("5ab2"),r("6d57"),r("e10e"),r("419a"),r("e980")),s=(r("f548"),r("ac9f")),i=(r("03fd"),r("7c28")),u=(r("9c0f"),r("a9f0")),f=(r("9cf9"),r("fad3")),l=(r("7ea6"),r("45ba")),b=(r("9d47"),r("bb63")),d=(r("cc57"),r("be9b"),r("db43")),m=r("8876"),p=r("2b26");function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach((function(t){Object(s["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var O={name:"add-demand-record",components:(a={},Object(s["a"])(a,d["a"].name,d["a"]),Object(s["a"])(a,b["a"].name,b["a"]),Object(s["a"])(a,l["a"].name,l["a"]),Object(s["a"])(a,f["a"].name,f["a"]),Object(s["a"])(a,u["a"].name,u["a"]),Object(s["a"])(a,i["a"].name,i["a"]),a),data:function(){return{form:{reason:""},errors:{reason:""}}},computed:g({},Object(m["d"])(["from"]),{},Object(m["c"])(["userInfo"])),methods:{goBack:function(){this.from?this.$router.back():this.$router.replace("/demands")},handleSubmit:function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.form.reason){e.next=3;break}return this.errors.reason="申请理由不得为空",e.abrupt("return");case 3:if(!(this.userInfo.integral<2)){e.next=6;break}return this.$dialog.confirm({title:"温馨提示",message:"当前积分不足，无法申请解决，请充值后再申请",confirmButtonText:"马上充值",cancelButtonText:"稍后再说"}).then((function(){t.$router.push("/incharge")})).catch((function(){console.log("cancel dialog")})),e.abrupt("return");case 6:return e.next=8,Object(p["a"])({reason:this.form.reason,user_id:this.userInfo.id,demand_id:this.$route.params.id});case 8:this.$dialog.alert({title:"温馨提示",message:"申请成功，扣除2积分 请耐心等待需求方通过",confirmButtonText:"确认"}).then((function(){t.goBack()}));case 9:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}},j=O,v=(r("8f65"),r("623f")),y=Object(v["a"])(j,n,o,!1,null,"b3ac3364",null);t["default"]=y.exports},"8f65":function(e,t,r){"use strict";var a=r("4f44"),n=r.n(a);n.a}}]);
//# sourceMappingURL=chunk-09610477.4.0.0.1587959072390.js.map