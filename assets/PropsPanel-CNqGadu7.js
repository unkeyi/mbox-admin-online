import{_ as C}from"./FormProps.vue_vue_type_script_setup_true_name_FormProps_lang-3Kl-93LL.js";import{_ as b}from"./FormItemProps.vue_vue_type_script_setup_true_name_FormItemProps_lang-BOAfnVbn.js";import y from"./ComponentProps-CwP7utTG.js";import k from"./FormItemColumnProps-COzppUYf.js";import{a as v}from"./useFormDesignState-ebiKiBzQ.js";import{a as c}from"./formItemConfig-DaYnKdgV.js";import{a4 as F,ba as $}from"./antd-DYfcSfab.js";import{d as T,c as g,a7 as t,Z as e,_ as I,k as s,a9 as r,a8 as n,ae as K}from"./vue-2VIvd4_n.js";import{_ as B}from"./entry/index-CFS-oRkL.js";import"./formItemPropsConfig-zVCiwdxf.js";import"./RuleProps-DlpQc2Li.js";import"./index-Bf0-Byst.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-CykGLnS0.js";import"./useFormItem-KJ29eXyn.js";import"./FormOptions-D4vBZZui.js";import"./componentMap-XFNYoX_l.js";import"./index-DhOZVxC3.js";import"./useWindowSizeFn-qOsP8WJM.js";import"./useSortable-DNaziUkW.js";import"./download-DbB_YaHa.js";import"./index-D5G-Yd7S.js";import"./copyTextToClipboard-vveKEZbp.js";import"./index-C7UiI9d3.js";const E=T({name:"PropsPanel",components:{FormProps:C,FormItemProps:b,ComponentProps:y,ComponentColumnProps:k,Tabs:F,TabPane:$},setup(){const{formConfig:o}=v(),m=g(()=>c.find(i=>{var a;return i.component===((a=o.value.currentItem)==null?void 0:a.component)}));return{formConfig:o,customComponents:c,slotProps:m}}});function S(o,m,i,a,w,A){const u=t("FormProps"),p=t("TabPane"),f=t("FormItemProps"),_=t("ComponentColumnProps"),l=t("ComponentProps"),P=t("Tabs");return e(),I("div",null,[s(P,{activeKey:o.formConfig.activeKey,"onUpdate:activeKey":m[0]||(m[0]=d=>o.formConfig.activeKey=d),tabBarStyle:{margin:0}},{default:r(()=>[(e(),n(p,{key:1,tab:"表单"},{default:r(()=>[s(u)]),_:1})),(e(),n(p,{key:2,tab:"控件"},{default:r(()=>[s(f)]),_:1})),(e(),n(p,{key:3,tab:"栅格"},{default:r(()=>[s(_)]),_:1})),(e(),n(p,{key:4,tab:"组件"},{default:r(()=>[o.slotProps?K(o.$slots,o.slotProps.component+"Props",{key:0},void 0,!0):(e(),n(l,{key:1}))]),_:3}))]),_:3},8,["activeKey"])])}const eo=B(E,[["render",S],["__scopeId","data-v-687602a4"]]);export{eo as default};
