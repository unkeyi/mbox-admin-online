import{p as R,f as k,_ as z}from"./entry/index-CFS-oRkL.js";import{a as C}from"./useContentViewHeight-DI4kKI4e.js";import{F as E}from"./antd-DYfcSfab.js";import{d as W,f as o,c as $,u as a,o as b,b as B,Z as F,_ as M,k as N,a9 as V,ag as p,a1 as g,$ as D}from"./vue-2VIvd4_n.js";import{u as I}from"./useWindowSizeFn-qOsP8WJM.js";const P=["src"],T=W({__name:"index",props:{frameSrc:R.string.def("")},emits:["message"],setup(h,{expose:_,emit:v}){const w=v,s=o(!0),x=o(50),r=o(window.innerHeight),n=o(),{headerHeightRef:y}=C(),{prefixCls:c}=k("iframe-page");I(l,{wait:150,immediate:!0});const m=$(()=>({height:`${a(r)}px`}));function l(){const e=a(n);if(!e)return;const t=y.value;x.value=t,r.value=window.innerHeight-t;const i=document.documentElement.clientHeight-t;e.style.height=`${i}px`}function H(){s.value=!1,l()}const f=e=>{w("message",e.data)},S=(e,t,i)=>{var d;const u=a(n);u&&((d=u.contentWindow)==null||d.postMessage(e,t,i))},L=()=>{var t;s.value=!0;const e=n.value;e&&((t=e.contentWindow)==null||t.location.reload(),s.value=!1)};return b(()=>{window.addEventListener("message",f)}),B(()=>{window.removeEventListener("message",f)}),_({postMessage:S,reload:L}),(e,t)=>(F(),M("div",{class:g(a(c)),style:p(m.value)},[N(a(E),{spinning:s.value,size:"large",style:p(m.value)},{default:V(()=>[D("iframe",{src:h.frameSrc,class:g(`${a(c)}__main`),ref_key:"frameRef",ref:n,onLoad:H},null,42,P)]),_:1},8,["spinning","style"])],6))}}),G=z(T,[["__scopeId","data-v-bb6a7069"]]);export{G as default};