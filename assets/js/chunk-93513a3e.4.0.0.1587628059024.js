(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-93513a3e"],{"1add":function(e,t,i){},"4cba":function(e,t,i){"use strict";var n=i("1add"),a=i.n(n);a.a},a580:function(e,t,i){"use strict";i.r(t);var n,a,s,r,c,o,l,u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"worksop"},[n("van-nav-bar",{attrs:{title:"空间严选",fixed:"",border:"","left-text":"","left-arrow":""},on:{"click-left":e.goBack},scopedSlots:e._u([{key:"right",fn:function(){return[n("van-icon",{attrs:{name:"wap-home",size:"20",color:"#c40024"},on:{click:e.home}})]},proxy:!0}])}),n("div",{staticClass:"bg"},[n("van-row",{staticClass:"celbox",attrs:{type:"flex",justify:"space-between"}},[n("van-col",{staticClass:"sleck van-ellipsis",attrs:{span:"7"},on:{click:e.showAreaPopup}},[e._v("\n\t\t\t\t"+e._s(e.selectedAreaName||"选择地区")+"\n\t\t\t\t"),n("i",{staticClass:"iconfont iconxia"})]),n("van-col",{staticClass:"sleck van-ellipsis",attrs:{span:"7"},on:{click:e.showMeasurePopup}},[e._v(e._s(e.selectMeasureName||"选择面积")+" "),n("i",{staticClass:"iconfont iconxia"})]),n("van-col",{staticClass:"sleck van-ellipsis",attrs:{span:"7"},on:{click:e.showPricePopup}},[e._v(e._s(e.selectPriceName||"区间价格")+" "),n("i",{staticClass:"iconfont iconxia"})])],1),n("div",{staticClass:"yyjx_row"},[n("van-checkbox-group",{attrs:{direction:"horizontal",max:"3"},on:{change:e.hdchange},model:{value:e.result,callback:function(t){e.result=t},expression:"result"}},e._l(e.arr,(function(t,i){return n("van-checkbox",{key:i,staticClass:"yyjx_item",class:{active:-1!=e.currIndex.indexOf(i)},attrs:{name:i},on:{click:function(n){return e.clickCheck(t,i,t.title)}}},[n("span",{class:{active2:-1!=e.currIndex.indexOf(i)}},[e._v(e._s(t.title))])])})),1)],1)],1),n("van-list",{attrs:{finished:e.upFinished,"immediate-check":!1,offset:10,"finished-text":"－暂无更多内容－"},on:{load:e.onLoadList},model:{value:e.isUpLoading,callback:function(t){e.isUpLoading=t},expression:"isUpLoading"}},[n("div",{staticClass:"worksop_centent"},e._l(e.indexArr,(function(t,i){return n("div",{key:i,staticClass:"worksop_centent_box",on:{click:function(i){return e.gotoDetails(t.house_id)}}},[n("van-image",{attrs:{width:"32vw",height:"23vw",src:t.cover,fit:"cover"},scopedSlots:e._u([{key:"error",fn:function(){return[n("img",{attrs:{width:"100%",height:"100%",src:"http://demo.oramage.com/demo/tianji-vue-v3/img/loding.jpg",alt:""}})]},proxy:!0},{key:"loading",fn:function(){return[n("img",{attrs:{width:"100%",height:"100%",src:"http://demo.oramage.com/demo/tianji-vue-v3/img/loding.jpg",alt:""}})]},proxy:!0}],null,!0)}),n("div",{staticClass:"worksop_info"},[n("p",{staticClass:"van-ellipsis"},[e._v(e._s(t.title))]),n("p",[n("i",{staticClass:"iconfont iconbiaodiandidian"}),e._v(e._s(t.area)+" ")]),n("p",[n("span",{staticClass:"cor"},[n("b",[e._v(e._s(t.rent))]),e._v("元 / m² ")]),e._v("︱"),n("span",[e._v(e._s(t.rental_area)+"m²")])])])],1)})),0),0==e.indexArr.length?n("div",{staticClass:"no-content"},[n("img",{attrs:{src:i("d919"),alt:""}}),n("p",[n("strong",[e._v("－暂无更多内容－")])])]):e._e()]),n("van-button",{staticClass:"fix",attrs:{type:"warning",size:"large",block:""},on:{click:function(t){e.show=!0}}},[e._v("委托找房")]),n("van-popup",{staticClass:"wdit",attrs:{"lock-scroll":""},model:{value:e.show,callback:function(t){e.show=t},expression:"show"}},[n("van-cell-group",{staticClass:"models"},[n("div",{staticClass:"cf_bg"},[n("p",[e._v("天集社"),n("br"),e._v("委托找房登记")])]),n("van-cell",{attrs:{title:"厂房位置",value:e.selectAreaVal?e.selectAreaVal:"请选择",size:"large","is-link":"",required:""},on:{click:e.showProvince}}),n("van-cell",{attrs:{title:"厂房面积",value:e.selectMeasureName2?e.selectMeasureName2:"请选择",size:"large","is-link":""},on:{click:e.showAddMeasure}}),n("van-cell",{attrs:{title:"资金预算",value:e.selectPriceName2?e.selectPriceName2:"请选择",size:"large","is-link":""},on:{click:e.showAddPrice}}),n("van-cell",{attrs:{title:"其它要求",border:!1}}),n("van-field",{staticClass:"textarea",attrs:{type:"textarea",border:!0,placeholder:"请描述你的要求，如：找一个靠近高速带装修的厂房",clearable:""},model:{value:e.remark,callback:function(t){e.remark=t},expression:"remark"}}),n("p",{staticClass:"popu_ps"},[e._v("请尽量完善您的找房需求，以便为您找到更合适的房源")]),n("van-row",{staticClass:"but",attrs:{type:"flex",justify:"space-between"}},[n("van-col",{attrs:{span:"12"}},[n("div",{staticClass:"buts",on:{click:function(t){e.show=!1}}},[e._v("取消")])]),n("van-col",{attrs:{span:"12"}},[n("div",{staticClass:"buts colors",on:{click:e.saveInfo}},[e._v("提交")])])],1)],1)],1),n("memberRegion",{ref:"areaPopup",attrs:{value:e.selectedAreaCode},on:{confirm:e.selectArea}}),n("measurePopup",{ref:"measurePopup",on:{confirm:e.selectMeasure}}),n("provincePopup",{ref:"provincePopups",on:{confirm:e.seleProvince}}),n("pricePopup",{ref:"pricePopup",on:{confirm:e.selectPrice}}),n("addmeasure",{ref:"addmeasure",on:{confirm:e.selectmeasure}}),n("addPrice",{ref:"addPrice",on:{confirm:e.selectaddPrice}})],1)},h=[],m=i("b081"),p=(i("fb7e"),i("f470")),d=(i("59a6"),i("31eb")),f=(i("bb14"),i("ba56")),v=(i("1a7e"),i("b302")),b=(i("e060"),i("fb38")),g=(i("9605"),i("f7d6")),_=(i("d204"),i("e28e")),x=(i("7bd2"),i("1f1c")),A=(i("3b67"),i("b7d9")),j=(i("d044"),i("d046")),k=(i("eef9"),i("25c8")),w=(i("e2b7"),i("e1d4")),y=(i("ef14"),i("6345")),C=(i("cc57"),i("ecc9"),i("d1b4")),O=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("van-popup",{attrs:{position:"bottom",overlay:!0},model:{value:e.visible,callback:function(t){e.visible=t},expression:"visible"}},[i("van-picker",{attrs:{"show-toolbar":"",title:"选择城市",columns:e.Category,"value-key":"Category","cancel-button-text":"清除选择"},on:{confirm:e.onConfirm,cancel:e.clear,change:e.onChange}})],1)},P=[],$=i("fa8b"),M={name:"about",components:(n={},Object(m["a"])(n,_["a"].name,_["a"]),Object(m["a"])(n,d["a"].name,d["a"]),n),props:{confirm:Function,value:String},data:function(){return{Category:[],columns:[],visible:!1,itemArr:[],itemArr2:[],itemArr3:[],columns2:[],columns3:[]}},created:function(){var e=this;Object($["o"])().then((function(t){e.columns=t;var i=[];e.columns.map((function(t){e.itemArr.push(t.name),i.push(t.id)})),Object($["n"])({province_id:i[0]}).then((function(t){var n=[];e.columns2=t,t.map((function(t){e.itemArr2.push(t.name),n.push(t.id)})),Object($["l"])({city_id:n[0],province_id:i[0]}).then((function(t){e.columns3=t;var i=[];t.map((function(t){e.itemArr3.push(t.name),i.push(t.id)}))}))})),e.Category=[{values:e.itemArr,className:"column1"},{values:e.itemArr2,className:"column2"},{values:e.itemArr3,className:"column3"}]}))},methods:{show:function(){this.visible=!0},hide:function(){this.visible=!1},onConfirm:function(e,t){console.log(this.columns3[t[2]]);var i=[this.columns[t[0]].id,this.columns2[t[1]].id,this.columns3[t[2]].id];this.$emit("confirm",e,i),this.hide()},clear:function(){this.$emit("confirm",""),this.hide()},onChange:function(e,t,i){var n=this;this.columns.map((function(a,s){a.name==t[0]&&Object($["n"])({province_id:a.id}).then((function(t){n.columns2=t;var s=[],r=[];if(t.map((function(e){s.push(e.name),r.push(e.id)})),e.setColumnValues(1,s),s){var c=e.getIndexes(i);console.log(c[1]),Object($["l"])({city_id:r[c[1]],province_id:a.id}).then((function(t){console.log(t),n.columns3=t;var i=[];t.map((function(e){i.push(e.name)})),e.setColumnValues(2,i)}))}}))}))}}},N=M,I=i("e90a"),L=Object(I["a"])(N,O,P,!1,null,null,null),D=L.exports,z=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("van-popup",{attrs:{position:"bottom",overlay:!0},model:{value:e.visible,callback:function(t){e.visible=t},expression:"visible"}},[i("van-picker",{attrs:{columns:e.columns,"cancel-button-text":"清除选择","confirm-button-text":"确认","show-toolbar":""},on:{cancel:e.onCancel,confirm:e.onConfirm}})],1)},S=[],V={name:"measure-popup",components:(a={},Object(m["a"])(a,_["a"].name,_["a"]),Object(m["a"])(a,d["a"].name,d["a"]),a),data:function(){return{visible:!1,columns:[],arr:[]}},created:function(){var e=this;Object($["m"])().then((function(t){e.arr=t.rental_area,e.arr.unshift({value:"",title:"全部"}),e.columns=t.rental_area.map((function(e){return e.title}))}))},methods:{show:function(){this.visible=!0},hide:function(){this.visible=!1},onCancel:function(e){this.$emit("confirm",""),this.hide()},onConfirm:function(e,t){console.log(this.arr[t].value),this.$emit("confirm",[e,this.arr[t].value]),this.hide()}}},E=V,F=Object(I["a"])(E,z,S,!1,null,null,null),U=F.exports,B=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("van-popup",{attrs:{position:"bottom",overlay:!0},model:{value:e.visible,callback:function(t){e.visible=t},expression:"visible"}},[i("van-picker",{attrs:{"show-toolbar":"",title:"选择城市",columns:e.Category,"value-key":"Category","cancel-button-text":"清除选择"},on:{confirm:e.onConfirm,cancel:e.clear,change:e.onChange}})],1)},J=[],R={name:"about",components:(s={},Object(m["a"])(s,_["a"].name,_["a"]),Object(m["a"])(s,d["a"].name,d["a"]),s),props:{confirm:Function,value:String},data:function(){return{Category:[],columns:[],visible:!1,itemArr:[],itemArr2:[],itemArr3:[],columns2:[],columns3:[]}},created:function(){var e=this;Object($["o"])().then((function(t){e.columns=t;var i=[];e.columns.map((function(t){e.itemArr.push(t.name),i.push(t.id)})),Object($["n"])({province_id:i[0]}).then((function(t){var n=[];e.columns2=t,t.map((function(t){e.itemArr2.push(t.name),n.push(t.id)})),Object($["l"])({city_id:n[0],province_id:i[0]}).then((function(t){e.columns3=t;var i=[];t.map((function(t){e.itemArr3.push(t.name),i.push(t.id)}))}))})),e.Category=[{values:e.itemArr,className:"column1"},{values:e.itemArr2,className:"column2"},{values:e.itemArr3,className:"column3"}]}))},methods:{show:function(){this.visible=!0},hide:function(){this.visible=!1},onConfirm:function(e,t){console.log(this.columns3[t[2]]);var i=[this.columns[t[0]].id,this.columns2[t[1]].id,this.columns3[t[2]].id];this.$emit("confirm",e,i),this.hide()},clear:function(){this.$emit("confirm",""),this.hide()},onChange:function(e,t,i){var n=this;this.columns.map((function(a,s){a.name==t[0]&&Object($["n"])({province_id:a.id}).then((function(t){n.columns2=t;var s=[],r=[];if(t.map((function(e){s.push(e.name),r.push(e.id)})),e.setColumnValues(1,s),s){var c=e.getIndexes(i);console.log(c[1]),Object($["l"])({city_id:r[c[1]],province_id:a.id}).then((function(t){console.log(t),n.columns3=t;var i=[];t.map((function(e){i.push(e.name)})),e.setColumnValues(2,i)}))}}))}))}}},q=R,T=Object(I["a"])(q,B,J,!1,null,null,null),G=T.exports,H=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("van-popup",{attrs:{position:"bottom",overlay:!0},model:{value:e.visible,callback:function(t){e.visible=t},expression:"visible"}},[i("van-picker",{attrs:{columns:e.columns,"cancel-button-text":"清除选择","confirm-button-text":"确认","show-toolbar":""},on:{cancel:e.onCancel,confirm:e.onConfirm}})],1)},K=[],Q={name:"measure-popup",components:(r={},Object(m["a"])(r,_["a"].name,_["a"]),Object(m["a"])(r,d["a"].name,d["a"]),r),data:function(){return{visible:!1,columns:[],arr:[]}},created:function(){var e=this;Object($["m"])().then((function(t){e.arr=t.rent,e.arr.unshift({value:"",title:"全部"}),e.columns=t.rent.map((function(e){return e.title}))}))},methods:{show:function(){this.visible=!0},hide:function(){this.visible=!1},onCancel:function(e){this.$emit("confirm",""),this.hide()},onConfirm:function(e,t){var i=this.arr[t].value;this.$emit("confirm",e,i),this.hide()}}},W=Q,X=Object(I["a"])(W,H,K,!1,null,null,null),Y=X.exports,Z=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("van-popup",{attrs:{position:"bottom",overlay:!0},model:{value:e.visible,callback:function(t){e.visible=t},expression:"visible"}},[i("van-picker",{attrs:{columns:e.columns,"cancel-button-text":"清除选择","confirm-button-text":"确认","show-toolbar":""},on:{cancel:e.onCancel,confirm:e.onConfirm}})],1)},ee=[],te={name:"measure-popup",components:(c={},Object(m["a"])(c,_["a"].name,_["a"]),Object(m["a"])(c,d["a"].name,d["a"]),c),data:function(){return{visible:!1,columns:[],arr:[]}},created:function(){var e=this;Object($["m"])().then((function(t){e.arr=t.rental_area,e.columns=t.rental_area.map((function(e){return e.title}))}))},methods:{show:function(){this.visible=!0},hide:function(){this.visible=!1},onCancel:function(e){this.$emit("confirm",""),this.hide()},onConfirm:function(e,t){this.$emit("confirm",e,t),this.hide()}}},ie=te,ne=Object(I["a"])(ie,Z,ee,!1,null,null,null),ae=ne.exports,se=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("van-popup",{attrs:{position:"bottom",overlay:!0},model:{value:e.visible,callback:function(t){e.visible=t},expression:"visible"}},[i("van-picker",{attrs:{columns:e.columns,"cancel-button-text":"清除选择","confirm-button-text":"确认","show-toolbar":""},on:{cancel:e.onCancel,confirm:e.onConfirm}})],1)},re=[],ce={name:"measure-popup",components:(o={},Object(m["a"])(o,_["a"].name,_["a"]),Object(m["a"])(o,d["a"].name,d["a"]),o),data:function(){return{visible:!1,columns:[],arr:[]}},created:function(){var e=this;Object($["m"])().then((function(t){e.arr=t.rent,e.columns=t.rent.map((function(e){return e.title}))}))},methods:{show:function(){this.visible=!0},hide:function(){this.visible=!1},onCancel:function(e){this.$emit("confirm",""),this.hide()},onConfirm:function(e,t){this.$emit("confirm",e,t),this.hide()}}},oe=ce,le=Object(I["a"])(oe,se,re,!1,null,null,null),ue=le.exports,he={components:(l={},Object(m["a"])(l,C["a"].name,C["a"]),Object(m["a"])(l,y["a"].name,y["a"]),Object(m["a"])(l,w["a"].name,w["a"]),Object(m["a"])(l,k["a"].name,k["a"]),Object(m["a"])(l,j["a"].name,j["a"]),Object(m["a"])(l,A["a"].name,A["a"]),Object(m["a"])(l,x["a"].name,x["a"]),Object(m["a"])(l,_["a"].name,_["a"]),Object(m["a"])(l,g["a"].name,g["a"]),Object(m["a"])(l,b["a"].name,b["a"]),Object(m["a"])(l,v["a"].name,v["a"]),Object(m["a"])(l,f["a"].name,f["a"]),Object(m["a"])(l,d["a"].name,d["a"]),Object(m["a"])(l,p["a"].name,p["a"]),Object(m["a"])(l,"memberRegion",D),Object(m["a"])(l,"measurePopup",U),Object(m["a"])(l,"pricePopup",Y),Object(m["a"])(l,"provincePopup",G),Object(m["a"])(l,"addmeasure",ae),Object(m["a"])(l,"addPrice",ue),l),data:function(){return{show:!1,isShow:!1,currIndex:[],selectedArea:[],selectedProvince:[],molselectedArea:[],selectMeasureArr:[],selectMeasureArr2:[],selectPriceArr:[],selectPriceArr2:[],result:[],indexArr:[],arr:[],nullTip:"空空如也~",pageSize:20,pageIndex:1,isDownLoading:!1,isUpLoading:!1,upFinished:!1,offset:100,province_id:null,city_id:null,area_id:null,area:null,budget:null,remark:null,rental_area:null,rent:null,items:[],types:[],changeitems:[],chooseAfterValue:[],floor:null,structure:null,clickIndex:[]}},created:function(){this.getData()},watch:{},methods:{goBack:function(){this.$router.back()},home:function(){this.$router.push("/")},selectArea:function(e,t){e||t?(this.selectedArea=e,this.province_id=t[0],this.city_id=t[1],this.area_id=t[2],this.getData()):(this.selectedArea=[],this.province_id=null,this.city_id=null,this.area_id=null,this.getData())},showAreaPopup:function(){this.$refs["areaPopup"].show(),this.isShow=this.$refs["areaPopup"].visible},showPricePopup:function(){this.$refs["pricePopup"].show()},showAddMeasure:function(){this.$refs["addmeasure"].show()},showProvince:function(){this.$refs["provincePopups"].show()},showAddPrice:function(){this.$refs["addPrice"].show()},clickCheck:function(e,t,i){},hdchange:function(e){var t=this;this.currIndex=e,""==e&&Object($["r"])({province_id:this.province_id,city_id:this.city_id,area_id:this.area_id,rental_area:this.rental_area,rent:this.rent}).then((function(e){t.indexArr=e})),"structure"==this.arr[e[0]].type&&(this.structure=this.arr[e[0]].value),"floor"==this.arr[e[0]].type&&(this.floor=this.arr[e[0]].value),e.length>=2&&("floor"==this.arr[e[1]].type&&(this.floor=this.arr[e[1]].value),"structure"==this.arr[e[1]].type&&(this.structure=this.arr[e[1]].value),this.arr[e[0]].type==this.arr[e[1]].type&&(this.arr[e[0]].type&&"structure"==this.arr[e[1]].type?(this.floor=null,console.log(11)):this.arr[e[0]].type&&"floor"==this.arr[e[1]].type&&(console.log(222),this.structure=null),e.splice(0,1),this.currIndex=e)),console.log(e),e.length>2&&e.splice(0,1),Object($["r"])({province_id:this.province_id,city_id:this.city_id,area_id:this.area_id,rental_area:this.rental_area,rent:this.rent,structure:this.structure,floor:this.floor}).then((function(e){t.indexArr=e})),this.type<=0&&(this.type=[],this.value=[])},showMeasurePopup:function(){this.$refs["measurePopup"].show()},gotoDetails:function(e){this.$router.push("/workshop/details/".concat(e))},selectMeasure:function(e){e?(this.rental_area=e[1],this.selectMeasureArr=e[0],this.getData()):(this.selectMeasureArr=[],this.rental_area=null,this.getData())},selectmeasure:function(e,t){e?(this.selectMeasureArr2=e,this.area=e):this.selectMeasureArr2=[]},selectPrice:function(e,t){e?(this.selectPriceArr=e,this.rent=t,this.getData()):(this.selectPriceArr=[],this.rent=null,this.getData())},selectaddPrice:function(e,t){e?(this.selectPriceArr2=e,this.budget=e):this.selectPriceArr2=[]},seleProvince:function(e,t){e?(this.selectedProvince=e,this.province_id=t[0],this.city_id=t[1],this.area_id=t[2]):this.selectedProvince=[]},getData:function(){var e=this;Object($["r"])({province_id:this.province_id,city_id:this.city_id,area_id:this.area_id,floor:this.floor,structure:this.structure,rental_area:this.rental_area,rent:this.rent}).then((function(t){e.indexArr=t})),Object($["m"])({type:this.type,value:this.value}).then((function(t){e.arr=t.tags}))},getroadList:function(){var e=this,t=this;Object($["r"])({page:this.pageIndex,pageSize:this.pageSize}).then((function(i){if(i){var n=i;if(null==n||0===n.length)return void(t.upFinished=!0);n.length<e.pageSize&&(t.upFinished=!0),1===t.pageIndex?t.indexArr=n:t.indexArr=t.indexArr.concat(n)}})).catch((function(t){e.$dialog.alert({message:"获取资源列表异常{"+t+"}",type:"error"})})).finally((function(){t.isDownLoading=!1,t.isUpLoading=!1}))},onLoadList:function(){this.pageIndex++,this.getroadList(),this.isUpLoading=!1},saveInfo:function(){var e=this;this.selectAreaVal.length<=0?this.$dialog.alert({title:"温馨提示",message:"请选择目标房源区域"}):Object($["h"])({province_id:this.province_id,city_id:this.city_id,area_id:this.area_id,area:this.area,budget:this.budget,remark:this.remark}).then((function(t){e.show=!1,e.$dialog.alert({title:"温馨提示",message:"提交成功"})})).catch((function(t){t&&e.$dialog.alert({title:"温馨提示",message:"该区域暂无代理人"})}))}},computed:{selectedAreaCode:function(){var e=this.selectedArea.length;return e>0?this.selectedArea[e-1].code:"100100"},selectedAreaName:function(){var e=this.selectedArea.length;return e>0?this.selectedArea.map((function(e){return e})).join(" "):""},selectAreaVal:function(){var e=this.selectedProvince.length;return e>0?this.selectedProvince.map((function(e){return e})).join(" "):""},selectMeasureName:function(){var e=this.selectMeasureArr.length;return e>0?this.selectMeasureArr:""},selectMeasureName2:function(){var e=this.selectMeasureArr2.length;return e>0?this.selectMeasureArr2:""},selectPriceName:function(){var e=this.selectPriceArr.length;return e>0?this.selectPriceArr:""},selectPriceName2:function(){var e=this.selectPriceArr2.length;return e>0?this.selectPriceArr2:""}}},me=he,pe=(i("4cba"),Object(I["a"])(me,u,h,!1,null,"67af2626",null));t["default"]=pe.exports},d919:function(e,t,i){e.exports=i.p+"assets/img/no-content.c8c0b04c.png"}}]);
//# sourceMappingURL=chunk-93513a3e.4.0.0.1587628059024.js.map