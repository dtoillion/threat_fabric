(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8],{b41f:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-page",{attrs:{padding:""}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-sm-8 col-md-6 col-lg-4 q-mx-auto"},[a("q-list",{staticClass:"shadow-1",attrs:{bordered:"",padding:""}},[a("q-item-label",{attrs:{header:""}},[e._v(e._s(e.$t("settings.labelUserSettings")))]),a("q-separator"),a("SelectLanguage"),a("q-separator",{attrs:{spaced:""}}),a("q-item-label",{attrs:{header:""}},[e._v(e._s(e.$t("settings.labelDisplaySettings")))]),a("ToggleDarkMode")],1)],1)])])},n=[],s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-item",{attrs:{clickable:"",tag:"label"}},[a("q-item-section",[a("q-item-label",[e._v(e._s(e.$t("settings.labelToggleDarkMode")))]),a("q-item-label",{attrs:{caption:""}},[e._v("\n      "+e._s(e.$t("settings.labelToggleDarkModeDesc"))+"\n    ")])],1),a("q-item-section",[a("q-toggle",{staticClass:"self-end",attrs:{color:"secondary"},on:{input:function(t){return e.toggleDarkMode()}},model:{value:e.darkMode,callback:function(t){e.darkMode=t},expression:"darkMode"}})],1)],1)},o=[],i={name:"DarkModeToggle",data:function(){return{darkMode:!1}},methods:{toggleDarkMode:function(){this.$q.dark.toggle()}}},r=i,c=a("2877"),g=a("eebe"),d=a.n(g),u=a("66e5"),m=a("4074"),p=a("0170"),b=a("9564"),f=Object(c["a"])(r,s,o,!1,null,null,null),q=f.exports;d()(f,"components",{QItem:u["a"],QItemSection:m["a"],QItemLabel:p["a"],QToggle:b["a"]});var v=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-item",{attrs:{clickable:"",tag:"label"}},[a("q-item-section",[a("q-item-label",[e._v(e._s(e.$t("settings.labelSelectLanguage")))]),a("q-item-label",{attrs:{caption:""}},[e._v("\n      "+e._s(e.$t("settings.labelSelectLanguageDesc"))+"\n    ")])],1),a("q-item-section",[a("q-select",{attrs:{options:e.langOptions,"dropdown-icon":"far fa-caret-square-down","emit-value":"","map-options":"","transition-show":"flip-up","transition-hide":"flip-down",filled:"",dense:""},model:{value:e.lang,callback:function(t){e.lang=t},expression:"lang"}})],1)],1)},k=[],_={name:"LanguageSwitcher",data:function(){return{lang:this.$i18n.locale,langOptions:[{value:"en-us",label:"English"},{value:"nl",label:"Dutch"}]}},watch:{lang:function(e){this.$i18n.locale=e}}},h=_,w=a("ddd8"),Q=Object(c["a"])(h,v,k,!1,null,null,null),S=Q.exports;d()(Q,"components",{QItem:u["a"],QItemSection:m["a"],QItemLabel:p["a"],QSelect:w["a"]});var $={name:"Settings",components:{ToggleDarkMode:q,SelectLanguage:S}},D=$,M=a("9989"),L=a("1c1c"),I=a("eb85"),x=Object(c["a"])(D,l,n,!1,null,null,null);t["default"]=x.exports;d()(x,"components",{QPage:M["a"],QList:L["a"],QItemLabel:p["a"],QSeparator:I["a"]})}}]);