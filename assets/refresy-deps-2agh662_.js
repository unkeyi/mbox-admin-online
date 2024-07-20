import{u as o,i as p}from"./mock-api-53iEc3j7.js";import{P as h}from"./index-DFApuhHZ.js";import{bb as e,at as D,af as d,B as f}from"./antd-DYfcSfab.js";import{d as r,k as u,G as t,f as m,u as i,c as g,r as F}from"./vue-2VIvd4_n.js";import"./entry/index-CFS-oRkL.js";import"./useContentViewHeight-DI4kKI4e.js";import"./useWindowSizeFn-qOsP8WJM.js";import"./onMountedOrActivated-CM4kULjs.js";const C=[{label:"Jack",value:"Jack"},{label:"Lucy",value:"Lucy"},{label:"Lutz",value:"Lutz"}],v=r({setup(){const a=m("Lutz"),{data:n,loading:l}=o(()=>p(a.value),{refreshDeps:[a]});return()=>u(d,{title:"Ref 依赖刷新"},{default:()=>[u(e,null,{default:()=>[u(e.Paragraph,null,{default:()=>[t("useRequest 提供了一个"),u(e.Text,{type:"danger"},{default:()=>[t(" options.refreshDeps ")]}),t("参数，当它的值变化后，会重新触发请求。")]}),u(e.Paragraph,null,{default:()=>[u(e.Text,null,{default:()=>[u("pre",null,[`const select = ref('Lutz');
const { data, loading } = useRequest(() => imitateApi(select.value), {
  refreshDeps: [select]
});`])]})]})]}),u(D,{value:a.value,"onUpdate:value":s=>a.value=s,options:C,style:"width: 220px",disabled:l.value},null),u("p",null,[t("Username: "),l.value?"Loading":i(n)])]})}}),E=r({setup(){const a=m(1),n=()=>{++a.value},l=g(()=>a.value*Math.PI),{data:s,loading:c}=o(p,{refreshDeps:[l]});return()=>u(d,{title:"Computed 依赖刷新",class:"mt-2"},{default:()=>[u(e,null,{default:()=>[u(e.Paragraph,null,{default:()=>[u(e.Text,{type:"danger"},{default:()=>[t(" options.refreshDeps ")]}),t("可以是计算类型")]}),u(e.Paragraph,null,{default:()=>[u(e.Text,null,{default:()=>[u("pre",null,[`const numOrign = ref(1);
const changeNum = () => {
  ++numOrign.value;
};
const numComp = computed(() => numOrign.value * Math.PI);

const { data, loading } = useRequest(imitateApi, {
  refreshDeps: [numComp]
});`])]})]})]}),u("p",null,[t("Username: "),c.value?"Loading":i(s)]),u(f,{type:"primary",onClick:n,disabled:c.value},{default:()=>[t("changeNum")]})]})}}),B=r({setup(){const a=F({id:"lutz"}),n=()=>{a.id=a.id==="LUTZ"?"lutz":"LUTZ"},{data:l,loading:s}=o(p,{refreshDeps:[()=>a.id]});return()=>u(d,{title:"Function 依赖刷新",class:"mt-2"},{default:()=>[u(e,null,{default:()=>[u(e.Paragraph,null,{default:()=>[u(e.Text,{type:"danger"},{default:()=>[t(" options.refreshDeps ")]}),t("可以是一个方法，但必须是一个关于响应型数据 Reactive、Ref、Computed 的 effect 函数")]}),u(e.Paragraph,null,{default:()=>[u(e.Text,null,{default:()=>[u("pre",null,[`const status = reactive({ id: 'lutz' });
const changeStatus = () => {
  status.id = status.id === 'LUTZ' ? 'lutz' : 'LUTZ';
};

const { data, loading } = useRequest(imitateApi, {
  refreshDeps: [() => status.id]
});`])]})]})]}),u("p",null,[t("Username: "),s.value?"Loading":i(l)]),u(f,{type:"primary",onClick:n,disabled:s.value},{default:()=>[t("changeStatus")]})]})}}),z=r({setup(){return()=>u(h,{title:"依赖刷新"},{default:()=>[u(v,null,null),u(E,null,null),u(B,null,null)],headerContent:()=>u(e,null,{default:()=>[u(e.Paragraph,null,{default:()=>[t("useRequest 提供了"),u(e.Text,{type:"danger"},{default:()=>[t(" options.refreshDeps ")]}),t("参数，当它的值变化后，会重新触发请求。")]}),u(e.Paragraph,null,{default:()=>[u(e.Text,null,{default:()=>[u("pre",null,[`import type { WatchSource } from 'vue';

// useRequestOption
refreshDeps?: WatchSource<any>[];
refreshDepsAction?: () => void; // 非手动执行, 默认执行 fetchInstance.refresh`])]})]})]})})}});export{z as default};
