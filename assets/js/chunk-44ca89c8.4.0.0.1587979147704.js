(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-44ca89c8"],{"3b16":function(t,e,a){"use strict";var n=a("d339"),s=a.n(n);s.a},"928a":function(t,e,a){"use strict";a.r(e);var n,s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"integral"},[n("van-nav-bar",{attrs:{fixed:"",border:"",title:"积分中心","left-arrow":""},on:{"click-left":t.goBack}}),n("div",{staticClass:"integral_content"},[n("div",{staticClass:"integral_num"},[n("div",{staticClass:"integral_mr"},[n("p",[n("span",{staticClass:"left"},[t._v("积分余额:")]),n("span",{staticClass:"right",on:{click:t.showTips}},[t._v("查看积分说明"),n("i",{staticClass:"iconfont iconyou"})])]),n("p",{staticClass:"integral_size"},[t._v(t._s(t.userInfo.integral))]),n("div",{staticClass:"integral_tx"},[n("p",[t._v("积分余额1000分以上才能提现")]),n("p",{staticClass:"tx_btn",on:{click:t.goCash}},[t._v("提现")])])])])]),n("van-cell-group",{staticClass:"celltop"},[n("van-cell",{staticClass:"integral_title",attrs:{title:"积分明细"}}),t._l(t.list,(function(e,a){return n("van-cell",{key:a},[n("div",{attrs:{slot:"title"},slot:"title"},[n("van-col",{attrs:{span:"12"}},[t._v(t._s(t.getTypeName(e.type,e)))]),n("van-col",{staticStyle:{display:"flex","justify-content":"flex-end"},attrs:{span:"12"}},[t._v(t._s(e.n_integral))])],1),n("div",{attrs:{slot:"label"},slot:"label"},[n("van-col",{attrs:{span:"12"}},[t._v(t._s(t.moment.unix(e.add_time).format("YY-MM-DD HH-mm")))]),n("van-col",{staticStyle:{display:"flex","justify-content":"flex-end"},attrs:{span:"12"}},[t._v("积分余额:"+t._s(e.p_integral))])],1)])})),n("van-button",{attrs:{type:"warning",size:"large",block:"",to:"/integral/recharge"}},[t._v("积分充值/开通VIP")])],2),n("van-dialog",{attrs:{title:"温馨提示",messageAlign:"center"},model:{value:t.showKF,callback:function(e){t.showKF=e},expression:"showKF"}},[n("img",{staticClass:"dialog-img",attrs:{src:a("fbe3")}}),n("p",{staticStyle:{"text-align":"center"}},[t._v("长按或扫一扫添加微信")]),n("p",{staticStyle:{"text-align":"center"}},[t._v(" 提现需求已提交,请等待工作人员与您联系。如有"),n("br"),t._v("问题可联系平台管理员"),n("br"),t._v("(电话:15602908103)")])])],1)},r=[],i=(a("5ab2"),a("6d57"),a("e10e"),a("419a"),a("e980")),c=a("ac9f"),l=(a("9d47"),a("bb63")),o=(a("7ea6"),a("45ba")),u=(a("9cf9"),a("fad3")),g=(a("b587"),a("e513")),f=(a("bc44"),a("6628")),p=(a("cc57"),a("be9b"),a("db43")),b=a("6bf2"),v=a.n(b),d=a("8876"),m=a("a417"),h=a("fa8b");function _(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function O(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?_(Object(a),!0).forEach((function(e){Object(c["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):_(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var y={components:(n={},Object(c["a"])(n,p["a"].name,p["a"]),Object(c["a"])(n,f["a"].name,f["a"]),Object(c["a"])(n,g["a"].name,g["a"]),Object(c["a"])(n,u["a"].name,u["a"]),Object(c["a"])(n,o["a"].name,o["a"]),Object(c["a"])(n,l["a"].name,l["a"]),n),data:function(){return{moment:v.a,list:[],page:0,limit:20,showKF:!1}},computed:O({},Object(d["c"])(["userInfo"])),mounted:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(m["k"])({user_id:this.userInfo.id,page:this.page,limit:this.limit});case 2:this.list=t.sent;case 3:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),methods:{goBack:function(){this.$router.back()},showTips:function(){this.$dialog.alert({title:"积分使用说明（20200402）",messageAlign:"left",message:"<strong>1.积分消耗:</strong>对接需求,可以使用积分支付,消耗10积分;\n<strong>2.名片交换</strong>,可以使用积分支付,消耗5积分\n<strong>3.积分增加:</strong>\na.新注册天集社用户,赠送50积分; \nb.个人中心名片认证申请通过, 赠送50积分; \nc.公司认证审核通过, 赠送100积分; \nd.成功发布一个需求, 赠送20积分; \ne.通过邀请海报分享, 每成功邀请一名新用户注册可获赠50积分;\nf.邀请注册的好友充值限时获得10 % 比例积分奖励;\ng.充值可获得相应积分。"})},goCash:function(){var t=this;1e3==this.userInfo.integral?Object(h["d"])().then((function(e){""==e?t.showKF=!0:t.$dialog.alert({title:"温馨提示",message:"您没有此权限,请联系平台管理员\n(电话:15602908103)"})})):this.$dialog.alert({title:"温馨提示",message:"不符合提现标准"})},getTypeName:function(t,e){switch(t){case"0":return"积分申请";case"1":return"定向申请";case"2":return"需求申请";case"3":return"用户注册";case"4":return"交换名片";case"5":return"个人认证通过积分";case"6":return"需求通过";case"7":return e.title;case"8":return"充值积分";case"9":return e.title;default:return"未知操作"}}}},j=y,w=(a("3b16"),a("623f")),k=Object(w["a"])(j,s,r,!1,null,"238e9748",null);e["default"]=k.exports},d339:function(t,e,a){}}]);
//# sourceMappingURL=chunk-44ca89c8.4.0.0.1587979147704.js.map