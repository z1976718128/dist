(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-100812dc"],{"94ae":function(e,t,n){},a580:function(e,t,n){"use strict";n.r(t);var i,a,s,r,c,o,l,u=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"worksop"},[i("van-nav-bar",{attrs:{title:"找厂房",fixed:"",border:"","left-text":"","left-arrow":""},on:{"click-left":e.goBack},scopedSlots:e._u([{key:"right",fn:function(){return[i("van-icon",{attrs:{name:"wap-home",size:"20",color:"#c40024"},on:{click:e.home}})]},proxy:!0}])}),i("div",{staticClass:"bg"},[i("van-row",{staticClass:"celbox",attrs:{type:"flex",justify:"space-between"}},[i("van-col",{staticClass:"sleck van-ellipsis",attrs:{span:"7"},on:{click:e.showAreaPopup}},[e._v("\n\t\t\t\t"+e._s(e.selectedAreaName||"选择地区")+"\n\t\t\t\t"),i("i",{staticClass:"iconfont iconxia"})]),i("van-col",{staticClass:"sleck van-ellipsis",attrs:{span:"7"},on:{click:e.showMeasurePopup}},[e._v(e._s(e.selectMeasureName||"选择面积")+" "),i("i",{staticClass:"iconfont iconxia"})]),i("van-col",{staticClass:"sleck van-ellipsis",attrs:{span:"7"},on:{click:e.showPricePopup}},[e._v(e._s(e.selectPriceName||"区间价格")+" "),i("i",{staticClass:"iconfont iconxia"})])],1),i("div",{staticClass:"yyjx_row"},[i("van-checkbox-group",{attrs:{direction:"horizontal",max:"3"},on:{change:e.hdchange},model:{value:e.result,callback:function(t){e.result=t},expression:"result"}},e._l(e.arr,(function(t,n){return i("van-checkbox",{key:n,staticClass:"yyjx_item",class:{active:-1!=e.currIndex.indexOf(n)},attrs:{name:n},on:{click:function(i){return e.clickCheck(t,n,t.title)}}},[i("span",{class:{active2:-1!=e.currIndex.indexOf(n)}},[e._v(e._s(t.title))])])})),1)],1)],1),i("van-list",{attrs:{finished:e.upFinished,"immediate-check":!1,offset:10,"finished-text":"－暂无更多内容－"},on:{load:e.onLoadList},model:{value:e.isUpLoading,callback:function(t){e.isUpLoading=t},expression:"isUpLoading"}},[i("div",{staticClass:"worksop_centent"},e._l(e.indexArr,(function(t,n){return i("div",{key:n,staticClass:"worksop_centent_box",on:{click:function(n){return e.gotoDetails(t.house_id)}}},[i("van-image",{attrs:{width:"29vw",height:"20vw",src:t.cover,fit:"cover"},scopedSlots:e._u([{key:"error",fn:function(){return[i("img",{attrs:{width:"100%",height:"100%",src:"http://demo.oramage.com/demo/tianji-vue-v3/img/loding.jpg",alt:""}})]},proxy:!0},{key:"loading",fn:function(){return[i("img",{attrs:{width:"100%",height:"100%",src:"http://demo.oramage.com/demo/tianji-vue-v3/img/loding.jpg",alt:""}})]},proxy:!0}],null,!0)}),i("div",{staticClass:"worksop_info"},[i("p",{staticClass:"van-ellipsis"},[e._v(e._s(t.title))]),i("p",[i("van-tag",{attrs:{round:"",type:"danger"}},[e._v("标准厂房")]),e._v("\n\t\t\t\t\t\t"+e._s(t.area))],1),i("p",[i("span",{staticClass:"cor"},[i("b",[e._v(e._s(t.rent))]),e._v("元 / m² ")]),e._v("︱"),i("span",{staticClass:"cor"},[i("b",[e._v(e._s(t.rental_area))]),e._v("m²")])])])],1)})),0),0==e.indexArr.length?i("div",{staticClass:"no-content"},[i("img",{attrs:{src:n("d919"),alt:""}}),i("p",[i("strong",[e._v("－暂无更多内容－")])])]):e._e()]),i("van-button",{staticClass:"fix",attrs:{type:"warning",size:"large",block:""},on:{click:function(t){e.show=!0}}},[e._v("委托找房")]),i("van-popup",{staticClass:"wdit",attrs:{"lock-scroll":""},model:{value:e.show,callback:function(t){e.show=t},expression:"show"}},[i("van-cell-group",{staticClass:"models"},[i("div",{staticClass:"cf_bg"},[i("p",[e._v("天集社"),i("br"),e._v("委托找房登记")])]),i("van-cell",{attrs:{title:"厂房位置",value:e.selectAreaVal?e.selectAreaVal:"请选择",size:"large","is-link":"",required:""},on:{click:e.showProvince}}),i("van-cell",{attrs:{title:"厂房面积",value:e.selectMeasureName2?e.selectMeasureName2:"请选择",size:"large","is-link":""},on:{click:e.showAddMeasure}}),i("van-cell",{attrs:{title:"资金预算",value:e.selectPriceName2?e.selectPriceName2:"请选择",size:"large","is-link":""},on:{click:e.showAddPrice}}),i("van-cell",{attrs:{title:"其它要求",border:!1}}),i("van-field",{staticClass:"textarea",attrs:{type:"textarea",border:!0,placeholder:"请描述你的要求，如：找一个靠近高速带装修的厂房",clearable:""},model:{value:e.remark,callback:function(t){e.remark=t},expression:"remark"}}),i("p",{staticClass:"popu_ps"},[e._v("请尽量完善您的找房需求，以便为您找到更合适的房源")]),i("van-row",{staticClass:"but",attrs:{type:"flex",justify:"space-between"}},[i("van-col",{attrs:{span:"12"}},[i("div",{staticClass:"buts",on:{click:function(t){e.show=!1}}},[e._v("取消")])]),i("van-col",{attrs:{span:"12"}},[i("div",{staticClass:"buts colors",on:{click:e.saveInfo}},[e._v("提交")])])],1)],1)],1),i("memberRegion",{ref:"areaPopup",attrs:{value:e.selectedAreaCode},on:{confirm:e.selectArea}}),i("measurePopup",{ref:"measurePopup",on:{confirm:e.selectMeasure}}),i("provincePopup",{ref:"provincePopups",on:{confirm:e.seleProvince}}),i("pricePopup",{ref:"pricePopup",on:{confirm:e.selectPrice}}),i("addmeasure",{ref:"addmeasure",on:{confirm:e.selectmeasure}}),i("addPrice",{ref:"addPrice",on:{confirm:e.selectaddPrice}})],1)},h=[],m=n("b081"),p=(n("6949"),n("e78c")),d=(n("fb7e"),n("f470")),f=(n("59a6"),n("31eb")),v=(n("bb14"),n("ba56")),b=(n("1a7e"),n("b302")),g=(n("e060"),n("fb38")),_=(n("9605"),n("f7d6")),x=(n("d204"),n("e28e")),A=(n("7bd2"),n("1f1c")),j=(n("3b67"),n("b7d9")),k=(n("d044"),n("d046")),y=(n("eef9"),n("25c8")),w=(n("e2b7"),n("e1d4")),C=(n("ef14"),n("6345")),O=(n("cc57"),n("ecc9"),n("d1b4")),P=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("van-popup",{attrs:{position:"bottom",overlay:!0},model:{value:e.visible,callback:function(t){e.visible=t},expression:"visible"}},[n("van-picker",{attrs:{"show-toolbar":"",title:"选择城市",columns:e.Category,"value-key":"Category","cancel-button-text":"清除选择"},on:{confirm:e.onConfirm,cancel:e.clear,change:e.onChange}})],1)},$=[],M=n("fa8b"),N={name:"about",components:(i={},Object(m["a"])(i,x["a"].name,x["a"]),Object(m["a"])(i,f["a"].name,f["a"]),i),props:{confirm:Function,value:String},data:function(){return{Category:[],columns:[],visible:!1,itemArr:[],itemArr2:[],itemArr3:[],columns2:[],columns3:[]}},created:function(){var e=this;Object(M["o"])().then((function(t){e.columns=t;var n=[];e.columns.map((function(t){e.itemArr.push(t.name),n.push(t.id)})),Object(M["n"])({province_id:n[0]}).then((function(t){var i=[];e.columns2=t,t.map((function(t){e.itemArr2.push(t.name),i.push(t.id)})),Object(M["l"])({city_id:i[0],province_id:n[0]}).then((function(t){e.columns3=t;var n=[];t.map((function(t){e.itemArr3.push(t.name),n.push(t.id)}))}))})),e.Category=[{values:e.itemArr,className:"column1"},{values:e.itemArr2,className:"column2"},{values:e.itemArr3,className:"column3"}]}))},methods:{show:function(){this.visible=!0},hide:function(){this.visible=!1},onConfirm:function(e,t){console.log(this.columns3[t[2]]);var n=[this.columns[t[0]].id,this.columns2[t[1]].id,this.columns3[t[2]].id];this.$emit("confirm",e,n),this.hide()},clear:function(){this.$emit("confirm",""),this.hide()},onChange:function(e,t,n){var i=this;this.columns.map((function(a,s){a.name==t[0]&&Object(M["n"])({province_id:a.id}).then((function(t){i.columns2=t;var s=[],r=[];if(t.map((function(e){s.push(e.name),r.push(e.id)})),e.setColumnValues(1,s),s){var c=e.getIndexes(n);console.log(c[1]),Object(M["l"])({city_id:r[c[1]],province_id:a.id}).then((function(t){console.log(t),i.columns3=t;var n=[];t.map((function(e){n.push(e.name)})),e.setColumnValues(2,n)}))}}))}))}}},I=N,L=n("e90a"),D=Object(L["a"])(I,P,$,!1,null,null,null),z=D.exports,S=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("van-popup",{attrs:{position:"bottom",overlay:!0},model:{value:e.visible,callback:function(t){e.visible=t},expression:"visible"}},[n("van-picker",{attrs:{columns:e.columns,"cancel-button-text":"清除选择","confirm-button-text":"确认","show-toolbar":""},on:{cancel:e.onCancel,confirm:e.onConfirm}})],1)},V=[],E={name:"measure-popup",components:(a={},Object(m["a"])(a,x["a"].name,x["a"]),Object(m["a"])(a,f["a"].name,f["a"]),a),data:function(){return{visible:!1,columns:[],arr:[]}},created:function(){var e=this;Object(M["m"])().then((function(t){e.arr=t.rental_area,e.arr.unshift({value:"",title:"全部"}),e.columns=t.rental_area.map((function(e){return e.title}))}))},methods:{show:function(){this.visible=!0},hide:function(){this.visible=!1},onCancel:function(e){this.$emit("confirm",""),this.hide()},onConfirm:function(e,t){console.log(this.arr[t].value),this.$emit("confirm",[e,this.arr[t].value]),this.hide()}}},F=E,U=Object(L["a"])(F,S,V,!1,null,null,null),B=U.exports,J=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("van-popup",{attrs:{position:"bottom",overlay:!0},model:{value:e.visible,callback:function(t){e.visible=t},expression:"visible"}},[n("van-picker",{attrs:{"show-toolbar":"",title:"选择城市",columns:e.Category,"value-key":"Category","cancel-button-text":"清除选择"},on:{confirm:e.onConfirm,cancel:e.clear,change:e.onChange}})],1)},R=[],q={name:"about",components:(s={},Object(m["a"])(s,x["a"].name,x["a"]),Object(m["a"])(s,f["a"].name,f["a"]),s),props:{confirm:Function,value:String},data:function(){return{Category:[],columns:[],visible:!1,itemArr:[],itemArr2:[],itemArr3:[],columns2:[],columns3:[]}},created:function(){var e=this;Object(M["o"])().then((function(t){e.columns=t;var n=[];e.columns.map((function(t){e.itemArr.push(t.name),n.push(t.id)})),Object(M["n"])({province_id:n[0]}).then((function(t){var i=[];e.columns2=t,t.map((function(t){e.itemArr2.push(t.name),i.push(t.id)})),Object(M["l"])({city_id:i[0],province_id:n[0]}).then((function(t){e.columns3=t;var n=[];t.map((function(t){e.itemArr3.push(t.name),n.push(t.id)}))}))})),e.Category=[{values:e.itemArr,className:"column1"},{values:e.itemArr2,className:"column2"},{values:e.itemArr3,className:"column3"}]}))},methods:{show:function(){this.visible=!0},hide:function(){this.visible=!1},onConfirm:function(e,t){console.log(this.columns3[t[2]]);var n=[this.columns[t[0]].id,this.columns2[t[1]].id,this.columns3[t[2]].id];this.$emit("confirm",e,n),this.hide()},clear:function(){this.$emit("confirm",""),this.hide()},onChange:function(e,t,n){var i=this;this.columns.map((function(a,s){a.name==t[0]&&Object(M["n"])({province_id:a.id}).then((function(t){i.columns2=t;var s=[],r=[];if(t.map((function(e){s.push(e.name),r.push(e.id)})),e.setColumnValues(1,s),s){var c=e.getIndexes(n);console.log(c[1]),Object(M["l"])({city_id:r[c[1]],province_id:a.id}).then((function(t){console.log(t),i.columns3=t;var n=[];t.map((function(e){n.push(e.name)})),e.setColumnValues(2,n)}))}}))}))}}},T=q,G=Object(L["a"])(T,J,R,!1,null,null,null),H=G.exports,K=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("van-popup",{attrs:{position:"bottom",overlay:!0},model:{value:e.visible,callback:function(t){e.visible=t},expression:"visible"}},[n("van-picker",{attrs:{columns:e.columns,"cancel-button-text":"清除选择","confirm-button-text":"确认","show-toolbar":""},on:{cancel:e.onCancel,confirm:e.onConfirm}})],1)},Q=[],W={name:"measure-popup",components:(r={},Object(m["a"])(r,x["a"].name,x["a"]),Object(m["a"])(r,f["a"].name,f["a"]),r),data:function(){return{visible:!1,columns:[],arr:[]}},created:function(){var e=this;Object(M["m"])().then((function(t){e.arr=t.rent,e.arr.unshift({value:"",title:"全部"}),e.columns=t.rent.map((function(e){return e.title}))}))},methods:{show:function(){this.visible=!0},hide:function(){this.visible=!1},onCancel:function(e){this.$emit("confirm",""),this.hide()},onConfirm:function(e,t){var n=this.arr[t].value;this.$emit("confirm",e,n),this.hide()}}},X=W,Y=Object(L["a"])(X,K,Q,!1,null,null,null),Z=Y.exports,ee=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("van-popup",{attrs:{position:"bottom",overlay:!0},model:{value:e.visible,callback:function(t){e.visible=t},expression:"visible"}},[n("van-picker",{attrs:{columns:e.columns,"cancel-button-text":"清除选择","confirm-button-text":"确认","show-toolbar":""},on:{cancel:e.onCancel,confirm:e.onConfirm}})],1)},te=[],ne={name:"measure-popup",components:(c={},Object(m["a"])(c,x["a"].name,x["a"]),Object(m["a"])(c,f["a"].name,f["a"]),c),data:function(){return{visible:!1,columns:[],arr:[]}},created:function(){var e=this;Object(M["m"])().then((function(t){e.arr=t.rental_area,e.columns=t.rental_area.map((function(e){return e.title}))}))},methods:{show:function(){this.visible=!0},hide:function(){this.visible=!1},onCancel:function(e){this.$emit("confirm",""),this.hide()},onConfirm:function(e,t){this.$emit("confirm",e,t),this.hide()}}},ie=ne,ae=Object(L["a"])(ie,ee,te,!1,null,null,null),se=ae.exports,re=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("van-popup",{attrs:{position:"bottom",overlay:!0},model:{value:e.visible,callback:function(t){e.visible=t},expression:"visible"}},[n("van-picker",{attrs:{columns:e.columns,"cancel-button-text":"清除选择","confirm-button-text":"确认","show-toolbar":""},on:{cancel:e.onCancel,confirm:e.onConfirm}})],1)},ce=[],oe={name:"measure-popup",components:(o={},Object(m["a"])(o,x["a"].name,x["a"]),Object(m["a"])(o,f["a"].name,f["a"]),o),data:function(){return{visible:!1,columns:[],arr:[]}},created:function(){var e=this;Object(M["m"])().then((function(t){e.arr=t.rent,e.columns=t.rent.map((function(e){return e.title}))}))},methods:{show:function(){this.visible=!0},hide:function(){this.visible=!1},onCancel:function(e){this.$emit("confirm",""),this.hide()},onConfirm:function(e,t){this.$emit("confirm",e,t),this.hide()}}},le=oe,ue=Object(L["a"])(le,re,ce,!1,null,null,null),he=ue.exports,me={components:(l={},Object(m["a"])(l,O["a"].name,O["a"]),Object(m["a"])(l,C["a"].name,C["a"]),Object(m["a"])(l,w["a"].name,w["a"]),Object(m["a"])(l,y["a"].name,y["a"]),Object(m["a"])(l,k["a"].name,k["a"]),Object(m["a"])(l,j["a"].name,j["a"]),Object(m["a"])(l,A["a"].name,A["a"]),Object(m["a"])(l,x["a"].name,x["a"]),Object(m["a"])(l,_["a"].name,_["a"]),Object(m["a"])(l,g["a"].name,g["a"]),Object(m["a"])(l,b["a"].name,b["a"]),Object(m["a"])(l,v["a"].name,v["a"]),Object(m["a"])(l,f["a"].name,f["a"]),Object(m["a"])(l,d["a"].name,d["a"]),Object(m["a"])(l,p["a"].name,p["a"]),Object(m["a"])(l,"memberRegion",z),Object(m["a"])(l,"measurePopup",B),Object(m["a"])(l,"pricePopup",Z),Object(m["a"])(l,"provincePopup",H),Object(m["a"])(l,"addmeasure",se),Object(m["a"])(l,"addPrice",he),l),data:function(){return{show:!1,isShow:!1,currIndex:[],selectedArea:[],selectedProvince:[],molselectedArea:[],selectMeasureArr:[],selectMeasureArr2:[],selectPriceArr:[],selectPriceArr2:[],result:[],indexArr:[],arr:[],nullTip:"空空如也~",pageSize:20,pageIndex:1,isDownLoading:!1,isUpLoading:!1,upFinished:!1,offset:100,province_id:null,city_id:null,area_id:null,area:null,budget:null,remark:null,rental_area:null,rent:null,items:[],types:[],changeitems:[],chooseAfterValue:[],floor:null,structure:null,clickIndex:[]}},created:function(){this.getData()},watch:{},methods:{goBack:function(){this.$router.back()},home:function(){this.$router.push("/")},selectArea:function(e,t){e||t?(this.selectedArea=e,this.province_id=t[0],this.city_id=t[1],this.area_id=t[2],this.getData()):(this.selectedArea=[],this.province_id=null,this.city_id=null,this.area_id=null,this.getData())},showAreaPopup:function(){this.$refs["areaPopup"].show(),this.isShow=this.$refs["areaPopup"].visible},showPricePopup:function(){this.$refs["pricePopup"].show()},showAddMeasure:function(){this.$refs["addmeasure"].show()},showProvince:function(){this.$refs["provincePopups"].show()},showAddPrice:function(){this.$refs["addPrice"].show()},clickCheck:function(e,t,n){},hdchange:function(e){var t=this;this.currIndex=e,""==e&&Object(M["r"])({province_id:this.province_id,city_id:this.city_id,area_id:this.area_id,rental_area:this.rental_area,rent:this.rent}).then((function(e){t.indexArr=e})),"structure"==this.arr[e[0]].type&&(this.structure=this.arr[e[0]].value),"floor"==this.arr[e[0]].type&&(this.floor=this.arr[e[0]].value),e.length>=2&&("floor"==this.arr[e[1]].type&&(this.floor=this.arr[e[1]].value),"structure"==this.arr[e[1]].type&&(this.structure=this.arr[e[1]].value),this.arr[e[0]].type==this.arr[e[1]].type&&(this.arr[e[0]].type&&"structure"==this.arr[e[1]].type?(this.floor=null,console.log(11)):this.arr[e[0]].type&&"floor"==this.arr[e[1]].type&&(console.log(222),this.structure=null),e.splice(0,1),this.currIndex=e)),console.log(e),e.length>2&&e.splice(0,1),Object(M["r"])({province_id:this.province_id,city_id:this.city_id,area_id:this.area_id,rental_area:this.rental_area,rent:this.rent,structure:this.structure,floor:this.floor}).then((function(e){t.indexArr=e})),this.type<=0&&(this.type=[],this.value=[])},showMeasurePopup:function(){this.$refs["measurePopup"].show()},gotoDetails:function(e){this.$router.push("/workshop/details/".concat(e))},selectMeasure:function(e){e?(this.rental_area=e[1],this.selectMeasureArr=e[0],this.getData()):(this.selectMeasureArr=[],this.rental_area=null,this.getData())},selectmeasure:function(e,t){e?(this.selectMeasureArr2=e,this.area=e):this.selectMeasureArr2=[]},selectPrice:function(e,t){e?(this.selectPriceArr=e,this.rent=t,this.getData()):(this.selectPriceArr=[],this.rent=null,this.getData())},selectaddPrice:function(e,t){e?(this.selectPriceArr2=e,this.budget=e):this.selectPriceArr2=[]},seleProvince:function(e,t){e?(this.selectedProvince=e,this.province_id=t[0],this.city_id=t[1],this.area_id=t[2]):this.selectedProvince=[]},getData:function(){var e=this;Object(M["r"])({province_id:this.province_id,city_id:this.city_id,area_id:this.area_id,floor:this.floor,structure:this.structure,rental_area:this.rental_area,rent:this.rent}).then((function(t){e.indexArr=t})),Object(M["m"])({type:this.type,value:this.value}).then((function(t){e.arr=t.tags}))},getroadList:function(){var e=this,t=this;Object(M["r"])({page:this.pageIndex,pageSize:this.pageSize}).then((function(n){if(n){var i=n;if(null==i||0===i.length)return void(t.upFinished=!0);i.length<e.pageSize&&(t.upFinished=!0),1===t.pageIndex?t.indexArr=i:t.indexArr=t.indexArr.concat(i)}})).catch((function(t){e.$dialog.alert({message:"获取资源列表异常{"+t+"}",type:"error"})})).finally((function(){t.isDownLoading=!1,t.isUpLoading=!1}))},onLoadList:function(){this.pageIndex++,this.getroadList(),this.isUpLoading=!1},saveInfo:function(){var e=this;this.selectAreaVal.length<=0?this.$dialog.alert({title:"温馨提示",message:"请选择目标房源区域"}):Object(M["h"])({province_id:this.province_id,city_id:this.city_id,area_id:this.area_id,area:this.area,budget:this.budget,remark:this.remark}).then((function(t){e.show=!1,e.$dialog.alert({title:"温馨提示",message:"提交成功"})})).catch((function(t){t&&e.$dialog.alert({title:"温馨提示",message:"该区域暂无代理人"})}))}},computed:{selectedAreaCode:function(){var e=this.selectedArea.length;return e>0?this.selectedArea[e-1].code:"100100"},selectedAreaName:function(){var e=this.selectedArea.length;return e>0?this.selectedArea.map((function(e){return e})).join(" "):""},selectAreaVal:function(){var e=this.selectedProvince.length;return e>0?this.selectedProvince.map((function(e){return e})).join(" "):""},selectMeasureName:function(){var e=this.selectMeasureArr.length;return e>0?this.selectMeasureArr:""},selectMeasureName2:function(){var e=this.selectMeasureArr2.length;return e>0?this.selectMeasureArr2:""},selectPriceName:function(){var e=this.selectPriceArr.length;return e>0?this.selectPriceArr:""},selectPriceName2:function(){var e=this.selectPriceArr2.length;return e>0?this.selectPriceArr2:""}}},pe=me,de=(n("f192"),Object(L["a"])(pe,u,h,!1,null,"3d2ff622",null));t["default"]=de.exports},d919:function(e,t,n){e.exports=n.p+"assets/img/no-content.c8c0b04c.png"},f192:function(e,t,n){"use strict";var i=n("94ae"),a=n.n(i);a.a}}]);
//# sourceMappingURL=chunk-100812dc.4.0.0.1587707189715.js.map