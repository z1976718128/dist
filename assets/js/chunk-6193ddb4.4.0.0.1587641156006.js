(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6193ddb4"],{"4faf":function(t,e,n){},"6f8e":function(t,e,n){},9739:function(t,e,n){"use strict";var i=n("4faf"),s=n.n(i);s.a},bfd0:function(t,e,n){"use strict";n.r(e);var i,s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"recharge"},[n("van-nav-bar",{attrs:{fixed:"",border:"",title:"充值中心","left-arrow":""},on:{"click-left":t.goBack}}),n("div",{staticClass:"recharge_cent"},[n("div",{staticClass:"recharge_xz"},t._l(t.arr,(function(e,i){return n("div",{key:i,class:{active:t.currIndex==i},on:{click:function(n){return t.choice(e,i)}}},[n("p",{staticClass:"num",class:{cor:t.currIndex==i}},[t._v(t._s(e.title))]),n("p",{staticClass:"moeny",class:{cor:t.currIndex==i}},[t._v("￥"+t._s(e.price))]),n("p",{staticClass:"title"},[t._v(t._s(e.tag))])])})),0)]),"integral"==t.showType?n("van-cell-group",{staticClass:"celltop"},[n("van-cell",{staticClass:"tips_title",attrs:{title:"温馨提示"},scopedSlots:t._u([{key:"right-icon",fn:function(){return[n("span",{staticClass:"right",on:{click:t.showTips}},[t._v("查看积分说明"),n("i",{staticClass:"iconfont iconyou"})])]},proxy:!0}],null,!1,3114858541)}),n("div",{staticClass:"tips"},[n("p",[t._v("1.充值购买积分仅限于本人天集社平台内使用")]),n("p",[t._v("2.充值购买的积分不过期、不清零、长期有效")]),n("p",[t._v("3.积分充值比例为1元兑换10个积分")]),n("p",[t._v("4.积分最终解释权归天集社所有")])])],1):t._e(),"vip"==t.showType?n("van-cell-group",{staticClass:"celltop"},[n("van-cell",{staticClass:"tips_title",attrs:{title:"天集社包年会员权益"}}),n("div",{staticClass:"tips"},[n("p",[t._v("1.一年不限量免费对接天集社平台需求")]),n("p",[t._v("2.一年不限量名片交换")]),n("p",[t._v("3.客服人员一对一服务")]),n("p",[t._v("4.优先联系需求方，对接相关需求")]),n("p",[t._v("5.相关优质需求，精准推送对接")]),n("p",[t._v("6.发布信息时，视质量可做全平台推送")]),n("p",[t._v("7.身份特权，尊享VIP会员头衔")])])],1):t._e(),n("van-button",{attrs:{type:"warning",size:"large",block:""},on:{click:t.creatOd}},[t._v("立即充值")])],1)},a=[],r=n("ac9f"),c=(n("05f6"),n("d51e"),n("653e"),n("c20f"),n("caa2")),o=n("f25d"),l=n("083c"),u=n("3360"),d=n("f20f"),h=n("f57f"),f=n("48d4"),p=n("a9f0"),g=Object(o["a"])("grid-item"),b=g[0],v=g[1],m=b({mixins:[Object(h["a"])("vanGrid")],props:Object(c["a"])({},d["c"],{dot:Boolean,text:String,icon:String,iconPrefix:String,info:[Number,String]}),computed:{style:function(){var t=this.parent,e=t.square,n=t.gutter,i=t.columnNum,s=100/i+"%",a={flexBasis:s};if(e)a.paddingTop=s;else if(n){var r=Object(l["a"])(n);a.paddingRight=r,this.index>=i&&(a.marginTop=r)}return a},contentStyle:function(){var t=this.parent,e=t.square,n=t.gutter;if(e&&n){var i=Object(l["a"])(n);return{right:i,bottom:i,height:"auto"}}}},methods:{onClick:function(t){this.$emit("click",t),Object(d["b"])(this.$router,this)},genIcon:function(){var t=this.$createElement,e=this.slots("icon");return e?t("div",{class:v("icon-wrapper")},[e,t(f["a"],{attrs:{dot:this.dot,info:this.info}})]):this.icon?t(p["a"],{attrs:{name:this.icon,dot:this.dot,info:this.info,size:this.parent.iconSize,classPrefix:this.iconPrefix},class:v("icon")}):void 0},getText:function(){var t=this.$createElement,e=this.slots("text");return e||(this.text?t("span",{class:v("text")},[this.text]):void 0)},genContent:function(){var t=this.slots();return t||[this.genIcon(),this.getText()]}},render:function(){var t,e=arguments[0],n=this.parent,i=n.center,s=n.border,a=n.square,r=n.gutter,c=n.clickable;return e("div",{class:[v({square:a})],style:this.style},[e("div",{style:this.contentStyle,attrs:{role:c?"button":null,tabindex:c?0:null},class:[v("content",{center:i,square:a,clickable:c,surround:s&&r}),(t={},t[u["a"]]=s,t)],on:{click:this.onClick}},[this.genContent()])])}}),_=(n("6f8e"),Object(o["a"])("grid")),y=_[0],x=_[1],O=y({mixins:[Object(h["b"])("vanGrid")],props:{square:Boolean,gutter:[Number,String],iconSize:[Number,String],clickable:Boolean,columnNum:{type:[Number,String],default:4},center:{type:Boolean,default:!0},border:{type:Boolean,default:!0}},computed:{style:function(){var t=this.gutter;if(t)return{paddingLeft:Object(l["a"])(t)}}},render:function(){var t,e=arguments[0];return e("div",{style:this.style,class:[x(),(t={},t[u["e"]]=this.border&&!this.gutter,t)]},[this.slots()])}}),j=(n("10c2"),n("e3b4")),k=(n("9d47"),n("bb63")),C=(n("7ea6"),n("45ba")),w=(n("9cf9"),n("fad3")),I=(n("b587"),n("e513")),S=(n("bc44"),n("6628")),T=(n("cc57"),n("be9b"),n("db43")),$=n("fa8b"),B={components:(i={},Object(r["a"])(i,T["a"].name,T["a"]),Object(r["a"])(i,S["a"].name,S["a"]),Object(r["a"])(i,I["a"].name,I["a"]),Object(r["a"])(i,w["a"].name,w["a"]),Object(r["a"])(i,C["a"].name,C["a"]),Object(r["a"])(i,k["a"].name,k["a"]),Object(r["a"])(i,j["a"].name,j["a"]),Object(r["a"])(i,O.name,O),Object(r["a"])(i,m.name,m),i),data:function(){return{currIndex:null,arr:[],odId:null,price:null,type:null,info:[],showID:2,showType:"integral"}},created:function(){var t=this;Object($["B"])().then((function(e){t.arr=e}))},methods:{showTips:function(){this.$dialog.alert({title:"积分使用说明（20200402）",messageAlign:"left",message:"<strong>1.积分消耗:</strong>对接需求,可以使用积分支付,消耗10积分;\n<strong>2.名片交换</strong>,可以使用积分支付,消耗5积分\n<strong>3.积分增加:</strong>\na.新注册天集社用户,赠送50积分; \nb.个人中心名片认证申请通过, 赠送50积分; \nc.公司认证审核通过, 赠送100积分; \nd.成功发布一个需求, 赠送20积分; \ne.通过邀请海报分享, 每成功邀请一名新用户注册可获赠50积分;\nf.邀请注册的好友充值限时获得10 % 比例积分奖励;\ng.充值可获得相应积分。"})},goBack:function(){this.$router.back()},choice:function(t,e){e!=this.currIndex?(this.currIndex=e,this.odId=t.id,this.showID=t.id,this.price=t.price,this.type=t.type,this.info=t,this.showType=t.type):this.currIndex=null},creatOd:function(){var t=this;null==this.currIndex?this.$dialog.alert({title:"温馨提示",message:"请选择充值商品"}):Object($["n"])().then((function(e){e.order_sn?t.$router.push({path:"/integral/buy",query:{odId:t.odId,type:t.type,price:t.price,order_sn:e.order_sn}}):t.$dialog.alert({message:"创建订单失败"})}))}}},q=B,N=(n("9739"),n("623f")),z=Object(N["a"])(q,s,a,!1,null,"029e8944",null);e["default"]=z.exports},c20f:function(t,e,n){}}]);
//# sourceMappingURL=chunk-6193ddb4.4.0.0.1587641156006.js.map