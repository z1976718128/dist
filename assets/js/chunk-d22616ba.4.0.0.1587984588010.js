(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d22616ba"],{"71d2":function(t,a,e){},d4b4:function(t,a,e){"use strict";var n=e("71d2"),s=e.n(n);s.a},f057:function(t,a,e){"use strict";e.r(a);var n,s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("van-nav-bar",{attrs:{fixed:"",border:"",title:"订阅","left-arrow":""},on:{"click-left":t.goBack}}),e("van-row",{attrs:{type:"flex",justify:"center"}},[e("van-col",{staticClass:"title",attrs:{span:"24"}},[t._v("我订阅的标签")])],1),e("van-row",{attrs:{type:"flex",justify:"center"}},[e("van-col",{staticClass:"boxCol",attrs:{span:"24"}},[e("van-checkbox-group",{staticClass:"box",attrs:{direction:"horizontal"},on:{change:t.hdchange},model:{value:t.result,callback:function(a){t.result=a},expression:"result"}},t._l(t.arr.labels,(function(a,n){return e("van-checkbox",{key:n,staticClass:"checkType",class:{active:-1!=t.selt.indexOf(a.label_id)},attrs:{name:n}},[e("span",{class:{active2:-1!=t.selt.indexOf(a.label_id)}},[t._v(t._s(a.name))])])})),1)],1)],1),e("van-row",{staticClass:"fix",attrs:{type:"flex",justify:"center"}},[e("van-col",{staticClass:"boxCol",attrs:{span:"12"}},[e("van-button",{attrs:{size:"large",type:"default"},on:{click:t.goBack}},[t._v("取消")])],1),e("van-col",{staticClass:"boxCol",attrs:{span:"12"}},[e("van-button",{staticClass:"btncolor",attrs:{size:"large",type:"danger"},on:{click:t.save}},[t._v("保存")])],1)],1)],1)},c=[],r=(e("f548"),e("419a"),e("e980")),l=e("ac9f"),i=(e("615b"),e("0065")),o=(e("08e5"),e("2fab")),u=(e("b587"),e("e513")),b=(e("bc44"),e("6628")),f=(e("3ed2"),e("644f")),d=(e("03fd"),e("7c28")),h=(e("9cf9"),e("fad3")),v=(e("7ea6"),e("45ba")),p=(e("9d47"),e("bb63")),m=(e("cc57"),e("be9b"),e("db43")),j=e("fa8b"),x={name:"Subscribe",components:(n={},Object(l["a"])(n,m["a"].name,m["a"]),Object(l["a"])(n,p["a"].name,p["a"]),Object(l["a"])(n,v["a"].name,v["a"]),Object(l["a"])(n,h["a"].name,h["a"]),Object(l["a"])(n,d["a"].name,d["a"]),Object(l["a"])(n,f["a"].name,f["a"]),Object(l["a"])(n,b["a"].name,b["a"]),Object(l["a"])(n,u["a"].name,u["a"]),Object(l["a"])(n,o["a"].name,o["a"]),Object(l["a"])(n,i["a"].name,i["a"]),n),data:function(){return{result:[],currIndex:[],arr:[],selt:[]}},created:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){var a=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(j["z"])();case 2:this.arr=t.sent,Object(j["D"])().then((function(t){a.selt=t.labels.map((function(t){return t.label_id}))}));case 4:case"end":return t.stop()}}),t,this)})));function a(){return t.apply(this,arguments)}return a}(),methods:{goBack:function(){this.from?this.$router.back():this.$router.replace("/demands")},hdchange:function(t){var a=this;this.selt=t.map((function(t){return a.arr.labels[t].label_id}))},save:function(){var t=this;console.log(this.selt),this.selt&&Object(j["E"])({label_ids:this.selt.length>1?this.selt.join(","):this.selt}).then((function(a){t.$dialog.alert({title:"温馨提示",message:"保存成功"}).then((function(){t.$router.push("/user-center")}))})).catch((function(t){console.log(t)}))}}},g=x,O=(e("d4b4"),e("623f")),k=Object(O["a"])(g,s,c,!1,null,"1a6c4ebd",null);a["default"]=k.exports}}]);
//# sourceMappingURL=chunk-d22616ba.4.0.0.1587984588010.js.map