(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-378c5289"],{"413c":function(e,t,n){},"4fea":function(e,t,n){"use strict";n.r(t);var a,r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"solve-demand-page"},[n("van-nav-bar",{attrs:{fixed:"",border:"",title:"解决需求","left-arrow":""},on:{"click-left":e.goBack}}),n("van-radio-group",{model:{value:e.selectedUserId,callback:function(t){e.selectedUserId=t},expression:"selectedUserId"}},[n("van-cell-group",{staticClass:"cell-group"},[n("van-cell",{attrs:{title:"请选择需求解决者/解决途径："}}),n("van-cell",[n("van-row",{staticClass:"list"},e._l(e.publishedList,(function(t){return n("van-col",{key:t.user_id,staticClass:"item",attrs:{span:"4"}},[n("simple-avatar",{attrs:{item:t,isSelected:t.user_id===e.selectedUserId},on:{click:function(){return e.handleUserClick(t.user_id)}}})],1)})),1)],1),n("van-cell",{staticClass:"other-item",attrs:{clickable:"",title:"通过其他途径解决"},on:{click:function(t){return e.handleUserClick("0")}}},[n("van-radio",{staticStyle:{"margin-right":"10px"},attrs:{slot:"icon",name:"0"},slot:"icon"})],1)],1)],1),n("van-row",{staticClass:"bottom-bar cell-group"},[n("van-button",{attrs:{block:"",square:"",type:"danger"},on:{click:e.handleSubmit}},[e._v("\n      确定\n    ")])],1)],1)},c=[],i=(n("5ab2"),n("6d57"),n("e10e"),n("f548"),n("b449"),n("17d6")),s=n("b081"),o=(n("3b67"),n("b7d9")),u=(n("ecc9"),n("d1b4")),d=(n("63a4"),n("0ea0"),n("3b82"),n("b0ce"),n("f34f")),l=n("acd9"),b=Object(d["a"])("radio"),h=b[0],f=b[1],p=h({mixins:[Object(l["a"])({bem:f,role:"radio",parent:"vanRadio"})],computed:{currentValue:{get:function(){return this.parent?this.parent.value:this.value},set:function(e){(this.parent||this).$emit("input",e)}},checked:function(){return this.currentValue===this.name}},methods:{toggle:function(){this.currentValue=this.name}}}),m=(n("d044"),n("d046")),O=(n("eef9"),n("25c8")),v=(n("413c"),n("3d64")),j=n("29c9"),g=Object(d["a"])("radio-group"),k=g[0],w=g[1],I=k({mixins:[Object(j["b"])("vanRadio"),v["a"]],props:{value:null,disabled:Boolean,direction:String,checkedColor:String,iconSize:[Number,String]},watch:{value:function(e){this.$emit("change",e)}},render:function(){var e=arguments[0];return e("div",{class:w([this.direction]),attrs:{role:"radiogroup"}},[this.slots()])}}),x=(n("ef14"),n("6345")),y=(n("e2b7"),n("e1d4")),_=(n("44cb"),n("cc14")),U=(n("cc57"),n("90d2"),n("84df")),C=n("8876"),S=n("2b26"),$=n("74ba");function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function R(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(Object(n),!0).forEach((function(t){Object(s["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var B={name:"about",components:(a={},Object(s["a"])(a,U["a"].name,U["a"]),Object(s["a"])(a,_["a"].name,_["a"]),Object(s["a"])(a,y["a"].name,y["a"]),Object(s["a"])(a,x["a"].name,x["a"]),Object(s["a"])(a,I.name,I),Object(s["a"])(a,O["a"].name,O["a"]),Object(s["a"])(a,m["a"].name,m["a"]),Object(s["a"])(a,p.name,p),Object(s["a"])(a,u["a"].name,u["a"]),Object(s["a"])(a,o["a"].name,o["a"]),Object(s["a"])(a,"SimpleAvatar",$["a"]),a),data:function(){return{selectedUserId:"",selectedMethodId:"",active:0,publishedList:[]}},computed:R({},Object(C["d"])(["from"]),{},Object(C["c"])(["userInfo","channels"])),mounted:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t,n=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(S["g"])({demand_id:this.$route.params.id});case 2:t=e.sent,this.publishedList=t.filter((function(e){return e.user_id!==n.userInfo.id}));case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),methods:{goBack:function(){this.from?this.$router.back():this.$router.replace("/demands")},handleUserClick:function(e){this.selectedUserId=e,this.selectedMethodId=""},handleMethodClick:function(e){this.selectedUserId="",this.selectedMethodId=e},handleSubmit:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if("0"!==this.selectedUserId){e.next=7;break}return e.next=3,Object(S["o"])({channel_id:4,demand_id:this.$route.params.id});case 3:this.$toast("需求已解决"),this.goBack(),e.next=17;break;case 7:if(!this.selectedUserId){e.next=16;break}return e.next=10,Object(S["n"])({user_id:this.userInfo.id,status:1,id:this.selectedUserId});case 10:return e.next=12,Object(S["p"])({demand_id:this.$route.params.id,solve_user_id:this.selectedUserId});case 12:this.$toast("需求已解决"),this.goBack(),e.next=17;break;case 16:this.$toast("请选择解决方式");case 17:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}},D=B,M=(n("6834"),n("e90a")),E=Object(M["a"])(D,r,c,!1,null,"ce1895e6",null);t["default"]=E.exports},6834:function(e,t,n){"use strict";var a=n("f466"),r=n.n(a);r.a},b0ce:function(e,t,n){},f466:function(e,t,n){}}]);
//# sourceMappingURL=chunk-378c5289.4.0.0.1587707189715.js.map