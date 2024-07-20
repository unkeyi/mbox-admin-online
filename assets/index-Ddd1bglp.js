import{u as I,_ as R}from"./useTable-Bri4nPS9.js";import"./TableImg.vue_vue_type_style_index_0_lang-DCsABf5k.js";import{_ as T}from"./componentMap-XFNYoX_l.js";import{g as F}from"./system-CJDqygwA.js";import{P as M}from"./index-DFApuhHZ.js";import{_ as V}from"./DeptTree.vue_vue_type_script_setup_true_lang-CoN-4UOg.js";import{u as $}from"./index-DhOZVxC3.js";import{_ as E}from"./AccountModal.vue_vue_type_script_setup_true_lang-Bg5590X-.js";import{c as N,s as A}from"./account.data-C7j7AuFV.js";import{u as B}from"./entry/index-CFS-oRkL.js";import{d as D,r as G,a7 as H,Z as m,a8 as p,a9 as t,k as o,G as d,u as n,ab as P}from"./vue-2VIvd4_n.js";import"./useForm-d_xwF6VE.js";import"./FormItem.vue_vue_type_script_lang-DREqDe1Q.js";import"./helper-gNcPrHqV.js";import"./antd-DYfcSfab.js";import"./BasicForm.vue_vue_type_style_index_0_lang-CK1aU-F6.js";import"./sortable.esm-CnNXHMH-.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-CykGLnS0.js";import"./useFormItem-KJ29eXyn.js";import"./onMountedOrActivated-CM4kULjs.js";import"./useWindowSizeFn-qOsP8WJM.js";import"./useSortable-DNaziUkW.js";import"./download-DbB_YaHa.js";import"./index-D5G-Yd7S.js";import"./copyTextToClipboard-vveKEZbp.js";import"./index-C7UiI9d3.js";import"./useContentViewHeight-DI4kKI4e.js";import"./index-DVV9SQ-9.js";const he=D({name:"AccountManagement",__name:"index",setup(U){const u=B(),[f,{openModal:r}]=$(),s=G({}),[_,{reload:c,updateTableDataRecord:h,getSearchInfo:W}]=I({title:"账号列表",api:F,rowKey:"id",columns:N,formConfig:{labelWidth:120,schemas:A,autoSubmitOnEnter:!0},useSearchForm:!0,showTableSetting:!0,bordered:!0,handleSearchInfoFn(e){return e},actionColumn:{width:120,title:"操作",dataIndex:"action"}});function g(){r(!0,{isUpdate:!1})}function b(e){r(!0,{record:e,isUpdate:!0})}function C(e){}function x(){}function y({isUpdate:e,values:a}){e?h(a.id,a):c()}function S(e=""){s.deptId=e,c()}function k(e){u("/system/account_detail/"+e.id)}return(e,a)=>{const l=H("a-button");return m(),p(n(M),{dense:"",contentFullHeight:"",fixedHeight:"",contentClass:"flex"},{default:t(()=>[o(V,{class:"w-1/4 xl:w-1/5",onSelect:S}),o(n(R),{onRegister:n(_),class:"w-3/4 xl:w-4/5",searchInfo:s},{toolbar:t(()=>[o(l,{type:"primary",onClick:g},{default:t(()=>[d("新增账号")]),_:1}),o(l,{type:"primary",onClick:x},{default:t(()=>[d("导出账号")]),_:1})]),bodyCell:t(({column:w,record:i})=>[w.key==="action"?(m(),p(n(T),{key:0,actions:[{icon:"clarity:info-standard-line",tooltip:"查看用户详情",onClick:k.bind(null,i)},{icon:"clarity:note-edit-line",tooltip:"编辑用户资料",onClick:b.bind(null,i)},{icon:"ant-design:delete-outlined",color:"error",tooltip:"删除此账号",popConfirm:{title:"是否确认删除",placement:"left",confirm:C.bind(null,i)}}]},null,8,["actions"])):P("",!0)]),_:1},8,["onRegister","searchInfo"]),o(E,{onRegister:n(f),onSuccess:y},null,8,["onRegister"])]),_:1})}}});export{he as default};