var ee=Object.defineProperty,te=Object.defineProperties;var oe=Object.getOwnPropertyDescriptors;var J=Object.getOwnPropertySymbols;var se=Object.prototype.hasOwnProperty,ne=Object.prototype.propertyIsEnumerable;var $=(e,m,b)=>m in e?ee(e,m,{enumerable:!0,configurable:!0,writable:!0,value:b}):e[m]=b,f=(e,m)=>{for(var b in m||(m={}))se.call(m,b)&&$(e,b,m[b]);if(J)for(var b of J(m))ne.call(m,b)&&$(e,b,m[b]);return e},H=(e,m)=>te(e,oe(m));import{c as _,u as o,d as le,I as ae,m as re,k as p,i as ce,ac as E,A as ie,G as de}from"./vue-2VIvd4_n.js";import{j as K}from"./componentMap-XFNYoX_l.js";import{b as fe,ap as U,aC as ue,a$ as me}from"./entry/index-CFS-oRkL.js";import{i as he,N as G,c as Q,s as pe}from"./helper-gNcPrHqV.js";import{a9 as be,e as y,U as O,a7 as X,a3 as ge,a5 as Y,f as ye,r as Ce,a_ as Pe}from"./antd-DYfcSfab.js";function xe(e){return"slot"in e}function we(e){return!xe(e)}function Ae(e,m){return _(()=>{const b=o(e),{labelCol:L={},wrapperCol:M={}}=b.itemProps||{},{labelWidth:q,disabledLabelWidth:u}=b,{labelWidth:C,labelCol:v,wrapperCol:F,layout:N}=o(m);if(!C&&!q&&!v||u)return L.style={textAlign:"left"},{labelCol:L,wrapperCol:M};let A=q||C;const V=f(f({},v),L),k=f(f({},F),M);return A&&(A=be(A)?`${A}px`:A),{labelCol:f({style:{width:A}},V),wrapperCol:f({style:{width:N==="vertical"?"100%":`calc(100% - ${A})`}},k)}})}function T(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!ce(e)}const Me=le({name:"BasicFormItem",inheritAttrs:!1,props:{schema:{type:Object,default:()=>({})},formProps:{type:Object,default:()=>({})},allDefaultValues:{type:Object,default:()=>({})},formModel:{type:Object,default:()=>({})},setFormModel:{type:Function,default:null},tableAction:{type:Object},formActionType:{type:Object},isAdvanced:{type:Boolean}},setup(e,{slots:m}){const{t:b}=fe(),{schema:L,formProps:M}=ae(e);L.value.component==="CropperAvatar"&&typeof M.value.size=="string"&&(M.value.size=void 0);const q=Ae(L,M),u=_(()=>{const{allDefaultValues:s,formModel:t,schema:r}=e,{mergeDynamicData:a}=e.formProps;return{field:r.field,model:t,values:f(f(f({},a),s),t),schema:r}}),C=_(()=>{var c;const{schema:s,tableAction:t,formModel:r,formActionType:a}=e;let{componentProps:n={}}=s;return y(n)&&(n=(c=n({schema:s,tableAction:t,formModel:r,formActionType:a}))!=null?c:{}),he(s.component)&&(n=Object.assign({type:"horizontal"},{orientation:"left",plain:!0},n)),n}),v=_(()=>{const{disabled:s}=e.formProps,{dynamicDisabled:t}=e.schema,{disabled:r=!1}=o(C);let a=!!s||r;return O(t)&&(a=t),y(t)&&(a=t(o(u))),a}),F=_(()=>{const{readonly:s}=e.formProps,{dynamicReadonly:t}=e.schema,{readonly:r=!1}=o(C);let a=s||r;return O(t)&&(a=t),y(t)&&(a=t(o(u))),a});function N(){const{show:s,ifShow:t}=e.schema,{showAdvancedButton:r}=e.formProps,a=r&&O(e.isAdvanced)?e.isAdvanced:!0;let n=!0,c=!0;return O(s)&&(n=s),O(t)&&(c=t),y(s)&&(n=s(o(u))),y(t)&&(c=t(o(u))),n=n&&a,{isShow:n,isIfShow:c}}function A(){var j;const{rules:s=[],component:t,rulesMessageJoinLabel:r,label:a,dynamicRules:n,required:c}=e.schema;if(y(n))return n(o(u));let l=ye(s);const{rulesMessageJoinLabel:P}=e.formProps,I=(Reflect.has(e.schema,"rulesMessageJoinLabel")?r:P)?y(a)?"":a:"",x=t?Q(t)+I:I;function h(d,i){const S=d.message||x;return i===void 0||Ce(i)||Array.isArray(i)&&i.length===0||typeof i=="string"&&i.trim()===""||typeof i=="object"&&Reflect.has(i,"checked")&&Reflect.has(i,"halfChecked")&&Array.isArray(i.checked)&&Array.isArray(i.halfChecked)&&i.checked.length===0&&i.halfChecked.length===0?Promise.reject(S):Promise.resolve()}const g=y(c)?c(o(u)):c;if(g)if(!l||l.length===0){const d=G.includes(t||"Input")?"blur":"change";l=[{required:g,validator:h,trigger:d}]}else l.findIndex(i=>Reflect.has(i,"required"))===-1&&l.push({required:g,validator:h});const D=l.findIndex(d=>Reflect.has(d,"required")&&!Reflect.has(d,"validator"));if(D!==-1){const d=l[D],{isShow:i}=N();if(i||(d.required=!1),t){d.message=d.message||x,(t.includes("Input")||t.includes("Textarea"))&&(d.whitespace=!0);const S=(j=o(C))==null?void 0:j.valueFormat;pe(d,t,S)}}const w=l.findIndex(d=>d.max);return w!==-1&&!l[w].validator&&(l[w].message=l[w].message||b("component.form.maxTip",[l[w].max])),l}function V(){var i;if(!we(e.schema))return null;const{renderComponentContent:s,component:t,field:r,changeEvent:a="change",valueField:n,valueFormat:c}=e.schema,l=t&&["Switch","Checkbox"].includes(t),P=`on${Pe(a)}`,R={[P]:(...S)=>{const[B]=S,W=B?B.target:null;let z=W?l?W.checked:W.value:B;y(c)&&(z=c(H(f({},o(u)),{value:z}))),e.setFormModel(r,z,e.schema),g[P]&&g[P](...S)}},I=K.get(t),{autoSetPlaceHolder:x,size:h}=e.formProps,g=H(f({allowClear:!0,size:h},o(C)),{disabled:o(v),readonly:o(F)});!g.disabled&&x&&t!=="RangePicker"&&t&&(g.placeholder=((i=o(C))==null?void 0:i.placeholder)||Q(t)),g.codeField=r,g.formValues=o(u);const w={[n||(l?"checked":"value")]:e.formModel[r]},j=f(f(f({},g),R),w);if(!s)return p(I,j,null);const d=y(s)?f({},s(o(u),{disabled:o(v),readonly:o(F)})):{default:()=>s};return p(I,j,T(d)?d:{default:()=>[d]})}function k(){const{label:s,helpMessage:t,helpComponentProps:r,subLabel:a}=e.schema,n=y(s)?s(o(u)):s,c=a?p("span",null,[n,de(" "),p("span",{class:"text-secondary"},[a])]):n,l=y(t)?t(o(u)):t;return!l||Array.isArray(l)&&l.length===0?c:p("span",null,[c,p(me,E({placement:"top",class:"mx-1",text:l},r),null)])}function Z(){const{itemProps:s,slot:t,render:r,field:a,suffix:n,component:c,prefix:l}=e.schema,{labelCol:P,wrapperCol:R}=o(q),{colon:I}=e.formProps,x={disabled:o(v),readonly:o(F)};if(c==="Divider"){let h;return p(X,{span:24},{default:()=>[p(ge,o(C),T(h=k())?h:{default:()=>[h]})]})}else if(c==="BasicTitle"){let h;return p(Y.Item,{labelCol:P,wrapperCol:R,name:a,class:{"suffix-item":!!n,"prefix-item":!!l}},{default:()=>[p(ue,o(C),T(h=k())?h:{default:()=>[h]})]})}else{const h=()=>t?U(m,t,o(u),x):r?r(o(u),x):V(),g=!!n,D=y(n)?n(o(u)):n,w=!!l,j=y(l)?l(o(u)):l;return c&&G.includes(c)&&e.schema&&(e.schema.itemProps=f({autoLink:!1},e.schema.itemProps)),p(Y.Item,E({name:a,colon:I,class:{"suffix-item":g,"prefix-item":w}},s,{label:k(),rules:A(),labelCol:P,wrapperCol:R}),{default:()=>[p("div",{style:"display:flex"},[w&&p("span",{class:"prefix"},[j]),p("div",{style:"flex:1;"},[h()]),g&&p("span",{class:"suffix"},[D])])]})}}return()=>{let s;const{colProps:t={},colSlot:r,renderColContent:a,component:n,slot:c}=e.schema;if(!(n&&K.has(n)||c))return null;const{baseColProps:l={}}=e.formProps,P=f(f({},l),t),{isIfShow:R,isShow:I}=N(),x=o(u),h={disabled:o(v),readonly:o(F)};return R&&re(p(X,P,T(s=r?U(m,r,x,h):a?a(x,h):Z())?s:{default:()=>[s]}),[[ie,I]])}}});export{Me as _};
