(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-17b92720"],{"39dc":function(e,t,a){},"4fea":function(e,t,a){"use strict";a.r(t);var n,r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"solve-demand-page"},[a("van-nav-bar",{attrs:{fixed:"",border:"",title:"解决需求","left-arrow":""},on:{"click-left":e.goBack}}),a("van-radio-group",{model:{value:e.selectedUserId,callback:function(t){e.selectedUserId=t},expression:"selectedUserId"}},[a("van-cell-group",{staticClass:"cell-group"},[a("van-cell",{attrs:{title:"请选择需求解决者/解决途径："}}),a("van-cell",[a("van-row",{staticClass:"list"},e._l(e.publishedList,(function(t){return a("van-col",{key:t.user_id,staticClass:"item",attrs:{span:"4"}},[a("simple-avatar",{attrs:{item:t,isSelected:t.user_id===e.selectedUserId},on:{click:function(){return e.handleUserClick(t.user_id)}}})],1)})),1)],1),a("van-cell",{staticClass:"other-item",attrs:{clickable:"",title:"通过其他途径解决"},on:{click:function(t){return e.handleUserClick("0")}}},[a("van-radio",{staticStyle:{"margin-right":"10px"},attrs:{slot:"icon",name:"0"},slot:"icon"})],1)],1)],1),a("van-row",{staticClass:"bottom-bar cell-group"},[a("van-button",{attrs:{block:"",square:"",type:"danger"},on:{click:e.handleSubmit}},[e._v("\n      确定\n    ")])],1)],1)},c=[],i=(a("5ab2"),a("6d57"),a("e10e"),a("f548"),a("419a"),a("e980")),s=a("ac9f"),o=(a("9d47"),a("bb63")),u=(a("be9b"),a("db43")),d=(a("05f6"),a("d51e"),a("653e"),a("71d7"),a("f25d")),l=a("c203"),b=Object(d["a"])("radio"),h=b[0],f=b[1],p=h({mixins:[Object(l["a"])({bem:f,role:"radio",parent:"vanRadio"})],computed:{currentValue:{get:function(){return this.parent?this.parent.value:this.value},set:function(e){(this.parent||this).$emit("input",e)}},checked:function(){return this.currentValue===this.name}},methods:{toggle:function(){this.currentValue=this.name}}}),m=(a("7ea6"),a("45ba")),O=(a("9cf9"),a("fad3")),v=(a("39dc"),a("deeb")),j=a("f57f"),g=Object(d["a"])("radio-group"),k=g[0],w=g[1],I=k({mixins:[Object(j["b"])("vanRadio"),v["a"]],props:{value:null,disabled:Boolean,direction:String,checkedColor:String,iconSize:[Number,String]},watch:{value:function(e){this.$emit("change",e)}},render:function(){var e=arguments[0];return e("div",{class:w([this.direction]),attrs:{role:"radiogroup"}},[this.slots()])}}),x=(a("bc44"),a("6628")),y=(a("b587"),a("e513")),_=(a("a1a0"),a("0cb8")),U=(a("cc57"),a("f408"),a("b4bb")),C=a("8876"),S=a("2b26"),$=a("74ba");function P(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function R(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?P(Object(a),!0).forEach((function(t){Object(s["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):P(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var B={name:"about",components:(n={},Object(s["a"])(n,U["a"].name,U["a"]),Object(s["a"])(n,_["a"].name,_["a"]),Object(s["a"])(n,y["a"].name,y["a"]),Object(s["a"])(n,x["a"].name,x["a"]),Object(s["a"])(n,I.name,I),Object(s["a"])(n,O["a"].name,O["a"]),Object(s["a"])(n,m["a"].name,m["a"]),Object(s["a"])(n,p.name,p),Object(s["a"])(n,u["a"].name,u["a"]),Object(s["a"])(n,o["a"].name,o["a"]),Object(s["a"])(n,"SimpleAvatar",$["a"]),n),data:function(){return{selectedUserId:"",selectedMethodId:"",active:0,publishedList:[]}},computed:R({},Object(C["d"])(["from"]),{},Object(C["c"])(["userInfo","channels"])),mounted:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t,a=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(S["g"])({demand_id:this.$route.params.id});case 2:t=e.sent,this.publishedList=t.filter((function(e){return e.user_id!==a.userInfo.id}));case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),methods:{goBack:function(){this.from?this.$router.back():this.$router.replace("/demands")},handleUserClick:function(e){this.selectedUserId=e,this.selectedMethodId=""},handleMethodClick:function(e){this.selectedUserId="",this.selectedMethodId=e},handleSubmit:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if("0"!==this.selectedUserId){e.next=7;break}return e.next=3,Object(S["o"])({channel_id:4,demand_id:this.$route.params.id});case 3:this.$toast("需求已解决"),this.goBack(),e.next=17;break;case 7:if(!this.selectedUserId){e.next=16;break}return e.next=10,Object(S["n"])({user_id:this.userInfo.id,status:1,id:this.selectedUserId});case 10:return e.next=12,Object(S["p"])({demand_id:this.$route.params.id,solve_user_id:this.selectedUserId});case 12:this.$toast("需求已解决"),this.goBack(),e.next=17;break;case 16:this.$toast("请选择解决方式");case 17:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}},D=B,M=(a("6834"),a("623f")),E=Object(M["a"])(D,r,c,!1,null,"ce1895e6",null);t["default"]=E.exports},6834:function(e,t,a){"use strict";var n=a("d54c"),r=a.n(n);r.a},"71d7":function(e,t,a){},d54c:function(e,t,a){}}]);
//# sourceMappingURL=chunk-17b92720.4.0.0.1587547544754.js.map