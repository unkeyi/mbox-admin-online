import{f as i,_ as r}from"./entry/index-CFS-oRkL.js";import{b as c}from"./index-BsRU2GBD.js";import{at as m}from"./antd-DYfcSfab.js";import{d as p,c as d,Z as u,_ as f,$ as g,a0 as b,k as y,ac as S,u as a,a1 as v}from"./vue-2VIvd4_n.js";import"./index-CRg2c-Tt.js";import"./useContentViewHeight-DI4kKI4e.js";import"./useWindowSizeFn-qOsP8WJM.js";import"./useSortable-DNaziUkW.js";import"./index-CTZY0s6j.js";import"./lock-BUbjC2qy.js";const V=p({name:"SelectItem",__name:"SelectItem",props:{event:{type:Number},disabled:{type:Boolean},title:{type:String},def:{type:[String,Number]},initValue:{type:[String,Number]},options:{type:Array,default:()=>[]}},setup(t){const e=t,{prefixCls:s}=i("setting-select-item"),o=d(()=>e.def?{value:e.def,defaultValue:e.initValue||e.def}:{}),l=n=>{e.event&&c(e.event,n)};return(n,_)=>(u(),f("div",{class:v(a(s))},[g("span",null,b(t.title),1),y(a(m),S(o.value,{class:`${a(s)}-select`,onChange:l,disabled:t.disabled,size:"small",options:t.options}),null,16,["class","disabled","options"])],2))}}),A=r(V,[["__scopeId","data-v-cf1163e4"]]);export{A as default};
