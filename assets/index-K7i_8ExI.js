var k=(h,l,o)=>new Promise((t,m)=>{var f=r=>{try{a(o.next(r))}catch(i){m(i)}},_=r=>{try{a(o.throw(r))}catch(i){m(i)}},a=r=>r.done?t(r.value):Promise.resolve(r.value).then(f,_);a((o=o.apply(h,l)).next())});import{d as x,f as w,w as D,y as A,a7 as R,Z as u,_ as g,F as T,aa as V,m as I,k as s,u as e,a9 as n,G as y,a0 as b,a8 as S,ab as $,A as B}from"./vue-2VIvd4_n.js";import{_ as M}from"./DetailModal.vue_vue_type_script_setup_true_lang-q1H0YRFB.js";import{u as N,_ as j}from"./useTable-Bri4nPS9.js";import"./TableImg.vue_vue_type_style_index_0_lang-DCsABf5k.js";import{_ as F}from"./componentMap-XFNYoX_l.js";import{u as G}from"./index-DhOZVxC3.js";import{a as H,b as Z,c as q}from"./entry/index-CFS-oRkL.js";import{getColumns as z}from"./data-CznWfI-g.js";import{f as J}from"./antd-DYfcSfab.js";import"./index-DVSI1bio.js";import"./useForm-d_xwF6VE.js";import"./FormItem.vue_vue_type_script_lang-DREqDe1Q.js";import"./helper-gNcPrHqV.js";import"./BasicForm.vue_vue_type_style_index_0_lang-CK1aU-F6.js";import"./sortable.esm-CnNXHMH-.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-CykGLnS0.js";import"./useFormItem-KJ29eXyn.js";import"./onMountedOrActivated-CM4kULjs.js";import"./useWindowSizeFn-qOsP8WJM.js";import"./useSortable-DNaziUkW.js";import"./download-DbB_YaHa.js";import"./index-D5G-Yd7S.js";import"./copyTextToClipboard-vveKEZbp.js";import"./index-C7UiI9d3.js";const K=()=>H.get({url:"/error"}),O={class:"p-4"},P=["src"],wr=x({__name:"index",setup(h){const l=w(),o=w([]),{t}=Z(),m=q(),[f,{setTableData:_}]=N({title:t("sys.errorLog.tableTitle"),columns:z(),actionColumn:{width:80,title:"Action",dataIndex:"action"}}),[a,{openModal:r}]=G();D(()=>m.getErrorLogInfoList,c=>{A(()=>{_(J(c))})},{immediate:!0});function i(c){l.value=c,r(!0)}function C(){throw new Error("fire vue error!")}function E(){o.value.push(`${new Date().getTime()}.png`)}function L(){return k(this,null,function*(){yield K()})}return(c,Q)=>{const d=R("a-button");return u(),g("div",O,[(u(!0),g(T,null,V(o.value,p=>I((u(),g("img",{key:p,src:p,alt:""},null,8,P)),[[B,!1]])),128)),s(M,{info:l.value,onRegister:e(a)},null,8,["info","onRegister"]),s(e(j),{onRegister:e(f),class:"error-handle-table"},{toolbar:n(()=>[s(d,{onClick:C,type:"primary"},{default:n(()=>[y(b(e(t)("sys.errorLog.fireVueError")),1)]),_:1}),s(d,{onClick:E,type:"primary"},{default:n(()=>[y(b(e(t)("sys.errorLog.fireResourceError")),1)]),_:1}),s(d,{onClick:L,type:"primary"},{default:n(()=>[y(b(e(t)("sys.errorLog.fireAjaxError")),1)]),_:1})]),bodyCell:n(({column:p,record:v})=>[p.key==="action"?(u(),S(e(F),{key:0,actions:[{label:e(t)("sys.errorLog.tableActionDesc"),onClick:i.bind(null,v)}]},null,8,["actions"])):$("",!0)]),_:1},8,["onRegister"])])}}});export{wr as default};