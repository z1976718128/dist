(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ecf26ab6"],{"162c":function(t,e,n){},9739:function(t,e,n){"use strict";var i=n("ccac"),a=n.n(i);a.a},bfd0:function(t,e,n){"use strict";n.r(e);var i,a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"recharge"},[n("van-nav-bar",{attrs:{fixed:"",border:"",title:"充值中心","left-arrow":""},on:{"click-left":t.goBack}}),n("div",{staticClass:"recharge_cent"},[n("div",{staticClass:"recharge_xz"},t._l(t.arr,(function(e,i){return n("div",{key:i,class:{active:t.currIndex==i},on:{click:function(n){return t.choice(e,i)}}},[n("p",{staticClass:"num",class:{cor:t.currIndex==i}},[t._v(t._s(e.title))]),n("p",{staticClass:"moeny",class:{cor:t.currIndex==i}},[t._v("￥"+t._s(e.price))]),n("p",{staticClass:"title"},[t._v(t._s(e.tag))])])})),0)]),"integral"==t.showType?n("van-cell-group",{staticClass:"celltop"},[n("van-cell",{staticClass:"tips_title",attrs:{title:"温馨提示"},scopedSlots:t._u([{key:"right-icon",fn:function(){return[n("span",{staticClass:"right",on:{click:t.showTips}},[t._v("查看积分说明"),n("i",{staticClass:"iconfont iconyou"})])]},proxy:!0}],null,!1,3114858541)}),n("div",{staticClass:"tips"},[n("p",[t._v("1.充值购买积分仅限于本人天集社平台内使用")]),n("p",[t._v("2.充值购买的积分不过期、不清零、长期有效")]),n("p",[t._v("3.积分充值比例为1元兑换10个积分")]),n("p",[t._v("4.积分最终解释权归天集社所有")])])],1):t._e(),"vip"==t.showType?n("van-cell-group",{staticClass:"celltop"},[n("van-cell",{staticClass:"tips_title",attrs:{title:"天集社包年会员权益"}}),n("div",{staticClass:"tips"},[n("p",[t._v("1.一年不限量免费对接天集社平台需求")]),n("p",[t._v("2.一年不限量名片交换")]),n("p",[t._v("3.客服人员一对一服务")]),n("p",[t._v("4.优先联系需求方，对接相关需求")]),n("p",[t._v("5.相关优质需求，精准推送对接")]),n("p",[t._v("6.发布信息时，视质量可做全平台推送")]),n("p",[t._v("7.身份特权，尊享VIP会员头衔")])])],1):t._e(),n("van-button",{attrs:{type:"warning",size:"large",block:""},on:{click:t.creatOd}},[t._v("立即充值")])],1)},s=[],r=n("bd86"),c=(n("3cd0"),n("1a44"),n("acc2"),n("ff04"),n("c31d")),o=n("d282"),l=n("ea8e"),u=n("a142"),d=n("b1d2"),h=n("48f4"),p=n("9884"),f=n("6f2f"),g=n("ad06"),b=Object(o["a"])("grid-item"),v=b[0],m=b[1],_=v({mixins:[Object(p["a"])("vanGrid")],props:Object(c["a"])({},h["c"],{dot:Boolean,text:String,icon:String,iconPrefix:String,info:[Number,String],badge:[Number,String]}),computed:{style:function(){var t=this.parent,e=t.square,n=t.gutter,i=t.columnNum,a=100/i+"%",s={flexBasis:a};if(e)s.paddingTop=a;else if(n){var r=Object(l["a"])(n);s.paddingRight=r,this.index>=i&&(s.marginTop=r)}return s},contentStyle:function(){var t=this.parent,e=t.square,n=t.gutter;if(e&&n){var i=Object(l["a"])(n);return{right:i,bottom:i,height:"auto"}}}},methods:{onClick:function(t){this.$emit("click",t),Object(h["b"])(this.$router,this)},genIcon:function(){var t=this.$createElement,e=this.slots("icon"),n=Object(u["b"])(this.badge)?this.badge:this.info;return e?t("div",{class:m("icon-wrapper")},[e,t(f["a"],{attrs:{dot:this.dot,info:n}})]):this.icon?t(g["a"],{attrs:{name:this.icon,dot:this.dot,info:n,size:this.parent.iconSize,classPrefix:this.iconPrefix},class:m("icon")}):void 0},getText:function(){var t=this.$createElement,e=this.slots("text");return e||(this.text?t("span",{class:m("text")},[this.text]):void 0)},genContent:function(){var t=this.slots();return t||[this.genIcon(),this.getText()]}},render:function(){var t,e=arguments[0],n=this.parent,i=n.center,a=n.border,s=n.square,r=n.gutter,c=n.clickable;return e("div",{class:[m({square:s})],style:this.style},[e("div",{style:this.contentStyle,attrs:{role:c?"button":null,tabindex:c?0:null},class:[m("content",{center:i,square:s,clickable:c,surround:a&&r}),(t={},t[d["a"]]=a,t)],on:{click:this.onClick}},[this.genContent()])])}}),y=(n("162c"),Object(o["a"])("grid")),x=y[0],O=y[1],j=x({mixins:[Object(p["b"])("vanGrid")],props:{square:Boolean,gutter:[Number,String],iconSize:[Number,String],clickable:Boolean,columnNum:{type:[Number,String],default:4},center:{type:Boolean,default:!0},border:{type:Boolean,default:!0}},computed:{style:function(){var t=this.gutter;if(t)return{paddingLeft:Object(l["a"])(t)}}},render:function(){var t,e=arguments[0];return e("div",{style:this.style,class:[O(),(t={},t[d["e"]]=this.border&&!this.gutter,t)]},[this.slots()])}}),k=(n("4071"),n("a3e2")),C=(n("c625"),n("b650")),w=(n("2a53"),n("34e9")),I=(n("3ec1"),n("7744")),S=(n("4bc8"),n("d1e1")),T=(n("47d1"),n("9ffb")),$=(n("7f7f"),n("da02"),n("6b41")),B=n("fa8b"),q={components:(i={},Object(r["a"])(i,$["a"].name,$["a"]),Object(r["a"])(i,T["a"].name,T["a"]),Object(r["a"])(i,S["a"].name,S["a"]),Object(r["a"])(i,I["a"].name,I["a"]),Object(r["a"])(i,w["a"].name,w["a"]),Object(r["a"])(i,C["a"].name,C["a"]),Object(r["a"])(i,k["a"].name,k["a"]),Object(r["a"])(i,j.name,j),Object(r["a"])(i,_.name,_),i),data:function(){return{currIndex:null,arr:[],odId:null,price:null,type:null,info:[],showID:2,showType:"integral"}},created:function(){var t=this;Object(B["B"])().then((function(e){t.arr=e}))},methods:{showTips:function(){this.$dialog.alert({title:"积分使用说明（20200402）",messageAlign:"left",message:"<strong>1.积分消耗:</strong>对接需求,可以使用积分支付,消耗10积分;\n<strong>2.名片交换</strong>,可以使用积分支付,消耗5积分\n<strong>3.积分增加:</strong>\na.新注册天集社用户,赠送50积分; \nb.个人中心名片认证申请通过, 赠送50积分; \nc.公司认证审核通过, 赠送100积分; \nd.成功发布一个需求, 赠送20积分; \ne.通过邀请海报分享, 每成功邀请一名新用户注册可获赠50积分;\nf.邀请注册的好友充值限时获得10 % 比例积分奖励;\ng.充值可获得相应积分。"})},goBack:function(){this.$router.back()},choice:function(t,e){e!=this.currIndex?(this.currIndex=e,this.odId=t.id,this.showID=t.id,this.price=t.price,this.type=t.type,this.info=t,this.showType=t.type):this.currIndex=null},creatOd:function(){var t=this;null==this.currIndex?this.$dialog.alert({title:"温馨提示",message:"请选择充值商品"}):Object(B["n"])().then((function(e){e.order_sn?t.$router.push({path:"/integral/buy",query:{odId:t.odId,type:t.type,price:t.price,order_sn:e.order_sn}}):t.$dialog.alert({message:"创建订单失败"})}))}}},N=q,z=(n("9739"),n("2877")),P=Object(z["a"])(N,a,s,!1,null,"029e8944",null);e["default"]=P.exports},ccac:function(t,e,n){},ff04:function(t,e,n){}}]);
//# sourceMappingURL=chunk-ecf26ab6.4.0.0.1587655793498.js.map