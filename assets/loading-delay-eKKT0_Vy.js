import{P as n}from"./index-DFApuhHZ.js";import{u as d,i}from"./mock-api-53iEc3j7.js";import{af as s,bb as e,aN as p,B as f}from"./antd-DYfcSfab.js";import{d as g,k as u,G as a,u as t}from"./vue-2VIvd4_n.js";import"./entry/index-CFS-oRkL.js";import"./useContentViewHeight-DI4kKI4e.js";import"./useWindowSizeFn-qOsP8WJM.js";import"./onMountedOrActivated-CM4kULjs.js";const x=g({setup(){const l=d(i),o=d(i,{loadingDelay:300}),r=()=>{l.run("lutz"),o.run("lutz")};return()=>u(n,null,{default:()=>[u(s,{title:"Loading Delay"},{default:()=>[u(e,null,{default:()=>[u(e.Paragraph,null,{default:()=>[a("通过设置"),u(e.Text,{type:"danger"},{default:()=>[a(" options.loadingDelay ")]}),a("可以延迟 "),u(e.Text,{code:!0},{default:()=>[a("loading")]}),a(" 变成"),u(e.Text,{code:!0},{default:()=>[a("true")]}),a("的时间，有效防止闪烁。")]}),u(e.Paragraph,null,{default:()=>[u(e.Text,{code:!0},{default:()=>["const { loading, data } = useRequest(imitateApi, { loadingDelay: 300 });"]})]}),u(e.Paragraph,null,{default:()=>[a("例如上面的场景，假如 imitateApi 在 300ms 内返回，则")," ",u(e.Text,{code:!0},{default:()=>[a("loading")]}),a(" 不会变成")," ",u(e.Text,{code:!0},{default:()=>[a("true")]}),a(" Loading... 的情况。")]})]}),u(p,{direction:"vertical"},{default:()=>[u(f,{onClick:r},{default:()=>[a("Run")]}),u("div",null,[a("Username: "),t(l.loading)?"Loading...":t(l.data)]),u("div",null,[a("Username:")," ",t(o.loading)?"Loading...":t(o.data)])]})]})]})}});export{x as default};