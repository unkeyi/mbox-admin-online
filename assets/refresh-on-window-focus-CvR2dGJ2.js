import{u as F,i as n}from"./mock-api-53iEc3j7.js";import{P as s}from"./index-DFApuhHZ.js";import{bb as e,F as l,af as i}from"./antd-DYfcSfab.js";import{d as a,k as u,G as t}from"./vue-2VIvd4_n.js";import"./entry/index-CFS-oRkL.js";import"./useContentViewHeight-DI4kKI4e.js";import"./useWindowSizeFn-qOsP8WJM.js";import"./onMountedOrActivated-CM4kULjs.js";const d=a({setup(){const{data:r,loading:o}=F(n,{refreshOnWindowFocus:!0});return()=>u(i,{title:"屏幕聚焦重新请求"},{default:()=>[u(e,null,{default:()=>[u(e.Paragraph,null,{default:()=>[t("通过设置"),u(e.Text,{type:"danger"},{default:()=>[t(" options.refreshOnWindowFocus ")]}),t("，在浏览器窗口 refocus 和 revisible 时, 会重新发起请求。")]}),u(e.Paragraph,null,{default:()=>[u(e.Text,{code:!0},{default:()=>["const { data, run } = useRequest(imitateApi, { refreshOnWindowFocus: true });"]})]}),u(e.Paragraph,null,{default:()=>[t("你可以点击浏览器外部，再点击当前页面来体验效果（或者隐藏当前页面，重新展示）,如果和上一次请求间隔大于 5000ms, 则会重新请求一次。")]})]}),u(l,{spinning:o.value},{default:()=>[u("div",null,[t("Username: "),r.value])]})]})}}),A=a({setup(){return()=>u(s,null,{default:()=>[u(d,null,null)]})}});export{A as default};