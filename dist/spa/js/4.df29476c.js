(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"19e2d":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-page",{attrs:{padding:""}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-sm-10 col-md-8 col-lg-6 q-mx-auto"},[a("q-list",{staticClass:"shadow-1",attrs:{bordered:"",separator:""}},[a("q-item",[a("q-item-section",[a("q-input",{attrs:{type:"search",placeholder:"Search for a device...",filled:"",dense:"",clearable:"","clear-icon":"fas fa-times"},scopedSlots:e._u([this.search?null:{key:"append",fn:function(){return[a("q-icon",{attrs:{name:"fas fa-search",size:"xs"}})]},proxy:!0}],null,!0),model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),a("q-item-section",[a("SortDevices")],1)],1),a("q-separator"),e._l(e.filteredDevices,(function(e){return a("Device",{key:e.id,attrs:{device:e,mini:!0}})}))],2)],1)])])},i=[],n=(a("4917"),a("386d"),a("fc59")),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-select",{attrs:{options:e.sortOptions,label:"Sort device list","dropdown-icon":"far fa-caret-square-down","emit-value":"","map-options":"","transition-show":"flip-up","transition-hide":"flip-down",filled:"",dense:""},on:{input:function(t){return e.sortDevices(e.sortKey)}},model:{value:e.sortKey,callback:function(t){e.sortKey=t},expression:"sortKey"}})},o=[],c={name:"SortDevices",data:function(){return{sortKey:"",sortOptions:[{value:"deviceId",label:"Device Id"},{value:"riskLevel",label:"Risk Level"}]}},methods:{sortDevices:function(e){this.$store.commit("devices/SORT_DEVICES",e)}}},l=c,d=a("2877"),v=a("eebe"),u=a.n(v),p=a("ddd8"),m=Object(d["a"])(l,r,o,!1,null,null,null),f=m.exports;u()(m,"components",{QSelect:p["a"]});var h={name:"DevicesPage",components:{Device:n["a"],SortDevices:f},data:function(){return{search:""}},computed:{filteredDevices:function(){var e=this;return this.search?this.$store.getters["devices/allDevices"].filter((function(t){return t.operatingSystem.toLowerCase().match(e.search.toLowerCase())||t.deviceId.toLowerCase().match(e.search.toLowerCase())||t.deviceType.toLowerCase().match(e.search.toLowerCase())||t.lastSeen.toLowerCase().match(e.search.toLowerCase())||t.country.toLowerCase().match(e.search.toLowerCase())})):this.$store.getters["devices/allDevices"]}}},b=h,L=a("9989"),k=a("1c1c"),q=a("66e5"),w=a("4074"),_=a("27f9"),y=a("0016"),S=a("eb85"),C=Object(d["a"])(b,s,i,!1,null,null,null);t["default"]=C.exports;u()(C,"components",{QPage:L["a"],QList:k["a"],QItem:q["a"],QItemSection:w["a"],QInput:_["a"],QIcon:y["a"],QSeparator:S["a"]})},d90b:function(e,t,a){"use strict";var s=a("edf7"),i=a.n(s);i.a},edf7:function(e,t,a){},fc59:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-item",{attrs:{to:e.mini?"/devices/"+e.device.id:null}},[a("q-item-section",{attrs:{avatar:""}},[a("RiskLevel",{attrs:{riskLevel:e.device.riskLevel}})],1),a("q-item-section",[a("q-item-label",[e._v("Device Id: "+e._s(e.device.deviceId))]),a("q-item-label",{attrs:{caption:"",lines:"2"}},[e._v("\n      "+e._s(e.device.deviceType)+" running\n      "+e._s(e.device.operatingSystem)+" connected from\n      "+e._s(e.device.country.toUpperCase())+"\n    ")])],1),a("q-item-section",{attrs:{side:"",top:""}},[a("q-item-label",{attrs:{caption:""}},[e._v("\n      "+e._s(e.device.lastSeen)+"\n    ")]),a("q-item-label",{staticClass:"q-gutter-sm",attrs:{caption:""}},["Desktop"===e.device.deviceType?a("q-icon",{attrs:{name:"fas fa-desktop"}}):e._e(),"Mobile"===e.device.deviceType?a("q-icon",{attrs:{name:"fas fa-mobile-alt"}}):e._e(),"iOS"===e.device.operatingSystem?a("q-icon",{attrs:{name:"fab fa-apple"}}):e._e(),"Android"===e.device.operatingSystem?a("q-icon",{attrs:{name:"fab fa-android"}}):e._e(),"Linux"===e.device.operatingSystem?a("q-icon",{attrs:{name:"fab fa-linux"}}):e._e(),"macOS"===e.device.operatingSystem?a("q-icon",{attrs:{name:"fab fa-apple"}}):e._e(),"Windows"===e.device.operatingSystem?a("q-icon",{attrs:{name:"fab fa-windows"}}):e._e()],1)],1)],1)},i=[],n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-knob",{class:"text-"+e.riskLevelColor,attrs:{readonly:"","show-value":"",thickness:.22,size:"36px",color:e.riskLevelColor,"track-color":e.riskLevelColor},model:{value:e.riskLevel,callback:function(t){e.riskLevel=t},expression:"riskLevel"}})},r=[],o={name:"RiskLevel",data:function(){return{}},props:["riskLevel"],computed:{riskLevelColor:function(){return this.riskLevel<=20?"positive":this.riskLevel>=75?"negative":"warning"}}},c=o,l=(a("d90b"),a("2877")),d=a("eebe"),v=a.n(d),u=a("3845"),p=a("58ea"),m=Object(l["a"])(c,n,r,!1,null,null,null),f=m.exports;v()(m,"components",{QKnob:u["a"],QCircularProgress:p["a"]});var h={name:"Device",props:["device","mini"],components:{RiskLevel:f},data:function(){return{}}},b=h,L=a("66e5"),k=a("4074"),q=a("0170"),w=a("0016"),_=Object(l["a"])(b,s,i,!1,null,null,null);t["a"]=_.exports;v()(_,"components",{QItem:L["a"],QItemSection:k["a"],QItemLabel:q["a"],QIcon:w["a"]})}}]);