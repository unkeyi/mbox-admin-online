var M=Object.defineProperty,y=Object.defineProperties;var I=Object.getOwnPropertyDescriptors;var h=Object.getOwnPropertySymbols;var E=Object.prototype.hasOwnProperty,U=Object.prototype.propertyIsEnumerable;var C=(e,o,a)=>o in e?M(e,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[o]=a,c=(e,o)=>{for(var a in o||(o={}))E.call(o,a)&&C(e,a,o[a]);if(h)for(var a of h(o))U.call(o,a)&&C(e,a,o[a]);return e},i=(e,o)=>y(e,I(o));import{a as j}from"./useFormDesignState-ebiKiBzQ.js";import{a as k,g as D}from"./index-Bf0-Byst.js";import{C as F,M as J}from"./index-vysrXUS7.js";import{ai as S,_ as g}from"./entry/index-CFS-oRkL.js";import{aM as w,M as O}from"./antd-DYfcSfab.js";import{d as B,r as N,I as $,a7 as r,Z as x,a8 as T,a9 as n,k as l,G as u,$ as b,a2 as V,a3 as A}from"./vue-2VIvd4_n.js";import"./useWindowSizeFn-qOsP8WJM.js";const K=B({name:"ImportJsonModal",components:{CodeEditor:F,Upload:w,Modal:O},setup(){const{createMessage:e}=S(),o=N({visible:!1,json:`{
  "schemas": [
    {
      "component": "input",
      "label": "输入框",
      "field": "input_2",
      "span": 24,
      "props": {
        "type": "text"
      }
    }
  ],
  "layout": "horizontal",
  "labelLayout": "flex",
  "labelWidth": 100,
  "labelCol": {},
  "wrapperCol": {}
}`,jsonData:{schemas:{},config:{}},handleSetSelectItem:null}),{formDesignMethods:a}=j(),p=()=>{o.visible=!1},m=()=>{o.visible=!0},d=()=>{try{const s=JSON.parse(o.json);s.schemas&&k(s.schemas,t=>{D(t)}),a.setFormConfig(i(c({},s),{activeKey:1,currentItem:{component:""}})),p(),e.success("导入成功")}catch(s){e.error("导入失败，数据格式不对")}};return i(c({handleImportJson:d,beforeUpload:s=>{const t=new FileReader;return t.readAsText(s),t.onload=function(){o.json=this.result,d()},!1},handleCancel:p,showModal:m},$(o)),{MODE:J})}}),L=e=>(V("data-v-62ebfefa"),e=e(),A(),e),R=L(()=>b("p",{class:"hint-box"},"导入格式如下:",-1)),z={class:"v-json-box"};function G(e,o,a,p,m,d){const f=r("CodeEditor"),s=r("a-button"),t=r("Upload"),_=r("Modal");return x(),T(_,{title:"JSON数据",open:e.visible,onOk:e.handleImportJson,onCancel:e.handleCancel,cancelText:"关闭",destroyOnClose:!0,wrapClassName:"v-code-modal",style:{top:"20px"},width:850},{footer:n(()=>[l(s,{onClick:e.handleCancel},{default:n(()=>[u("取消")]),_:1},8,["onClick"]),l(t,{class:"upload-button",beforeUpload:e.beforeUpload,showUploadList:!1,accept:"application/json"},{default:n(()=>[l(s,{type:"primary"},{default:n(()=>[u("导入json文件")]),_:1})]),_:1},8,["beforeUpload"]),l(s,{type:"primary",onClick:e.handleImportJson},{default:n(()=>[u("确定")]),_:1},8,["onClick"])]),default:n(()=>[R,b("div",z,[l(f,{value:e.json,"onUpdate:value":o[0]||(o[0]=v=>e.json=v),ref:"myEditor",mode:e.MODE.JSON},null,8,["value","mode"])])]),_:1},8,["open","onOk","onCancel"])}const ee=g(K,[["render",G],["__scopeId","data-v-62ebfefa"]]);export{ee as default};
