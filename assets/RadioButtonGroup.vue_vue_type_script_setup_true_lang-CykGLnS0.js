import{u as v}from"./useFormItem-KJ29eXyn.js";import{l as g,ay as u}from"./antd-DYfcSfab.js";import{d as _,f as b,c as k,Z as s,a8 as i,a9 as p,ac as y,u as t,H as B,_ as C,aa as R,G as S,a0 as x,F as A}from"./vue-2VIvd4_n.js";import{ao as G}from"./entry/index-CFS-oRkL.js";const w=_({name:"RadioButtonGroup",__name:"RadioButtonGroup",props:{value:{type:[String,Number,Boolean]},options:{type:Array,default:()=>[]}},setup(c){const n=c,d=G(),l=b([]),[r]=v(n,"value","change",l),m=k(()=>{const{options:a}=n;return!a||(a==null?void 0:a.length)===0?[]:a.some(e=>g(e))?a.map(e=>({label:e,value:e})):a});function f(...a){l.value=a}return(a,o)=>(s(),i(t(u).Group,y(t(d),{value:t(r),"onUpdate:value":o[0]||(o[0]=e=>B(r)?r.value=e:null),"button-style":"solid"}),{default:p(()=>[(s(!0),C(A,null,R(m.value,e=>(s(),i(t(u).Button,{key:`${e.value}`,value:e.value,disabled:e.disabled,onClick:h=>f(e)},{default:p(()=>[S(x(e.label),1)]),_:2},1032,["value","disabled","onClick"]))),128))]),_:1},16,["value"]))}});export{w as _};
