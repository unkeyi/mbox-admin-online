import{u as p,i as F}from"./mock-api-53iEc3j7.js";import{P as y}from"./index-DFApuhHZ.js";import{bb as l,aN as o,B as s,af as g}from"./antd-DYfcSfab.js";import{d as i,k as u,f as m,G as e,u as t}from"./vue-2VIvd4_n.js";import"./entry/index-CFS-oRkL.js";import"./useContentViewHeight-DI4kKI4e.js";import"./useWindowSizeFn-qOsP8WJM.js";import"./onMountedOrActivated-CM4kULjs.js";const A=i({setup(){const a=m(!1),n=f=>{a.value=!a.value},{data:d,loading:r}=p(F,{ready:a});return()=>u(g,{title:"自动模式"},{default:()=>[u(l,null,{default:()=>[u(l.Paragraph,null,{default:()=>[e("以下示例演示了自动模式下"),u(l.Text,{type:"danger"},{default:()=>[e(" ready ")]}),e(" 的行为。每次"),u(l.Text,{type:"danger"},{default:()=>[e(" ready ")]}),e(" 从 false 变为 true 时，都会重新发起请求。")]})]}),u("div",null,[u(o,null,{default:()=>[u("div",null,[e("Ready: "),JSON.stringify(t(a))]),u(s,{onClick:()=>n()},{default:()=>[e("Toggle Ready")]})]}),u("div",null,[e("Username: "),r.value?"Loading":t(d)])])]})}}),E=i({setup(){const a=m(!1),n=c=>{a.value=!a.value},{data:d,loading:r,run:f}=p(F,{manual:!0,ready:a});return()=>u(g,{title:"手动模式",class:"mt-2"},{default:()=>[u(l,null,{default:()=>[u(l.Paragraph,null,{default:()=>[e("以下示例演示了手动模式下"),u(l.Text,{type:"danger"},{default:()=>[e(" ready ")]}),e("的行为。只有当"),u(l.Text,{type:"danger"},{default:()=>[e(" ready ")]}),e("等于 true 时，run 才会执行。")]})]}),u("div",null,[u(o,null,{default:()=>[u("div",null,[e("Ready: "),JSON.stringify(t(a))]),u(s,{onClick:()=>n()},{default:()=>[e("Toggle Ready")]})]}),u("div",{class:"mt-2"},[u(o,null,{default:()=>[u("div",null,[e("Username: "),r.value?"Loading":t(d)]),u(s,{type:"primary",disabled:!a.value,onClick:()=>f()},{default:()=>[e("Run")]})]})])])]})}}),N=i({setup(){return()=>u(y,null,{default:()=>[u(A,null,null),u(E,null,null)]})}});export{N as default};