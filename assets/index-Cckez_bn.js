var u=(s,a,e)=>new Promise((p,i)=>{var o=r=>{try{t(e.next(r))}catch(c){i(c)}},m=r=>{try{t(e.throw(r))}catch(c){i(c)}},t=r=>r.done?p(r.value):Promise.resolve(r.value).then(o,m);t((e=e.apply(s,a)).next())});import{P as w}from"./index-DFApuhHZ.js";import{u as h,_ as P}from"./useForm-d_xwF6VE.js";import"./BasicForm.vue_vue_type_style_index_0_lang-CK1aU-F6.js";import"./componentMap-XFNYoX_l.js";import{d as b,a7 as g,Z as x,a8 as y,a9 as l,$ as f,k as d,u as n,G as _}from"./vue-2VIvd4_n.js";import"./entry/index-CFS-oRkL.js";import"./antd-DYfcSfab.js";import"./useContentViewHeight-DI4kKI4e.js";import"./useWindowSizeFn-qOsP8WJM.js";import"./onMountedOrActivated-CM4kULjs.js";import"./FormItem.vue_vue_type_script_lang-DREqDe1Q.js";import"./helper-gNcPrHqV.js";import"./index-DhOZVxC3.js";import"./useFormItem-KJ29eXyn.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-CykGLnS0.js";import"./useSortable-DNaziUkW.js";import"./download-DbB_YaHa.js";import"./index-D5G-Yd7S.js";import"./copyTextToClipboard-vveKEZbp.js";import"./index-C7UiI9d3.js";const C=[{field:"passwordOld",label:"当前密码",component:"InputPassword",required:!0},{field:"passwordNew",label:"新密码",component:"StrengthMeter",componentProps:{placeholder:"新密码"},rules:[{required:!0,message:"请输入新密码"}]},{field:"confirmPassword",label:"确认密码",component:"InputPassword",dynamicRules:({values:s})=>[{required:!0,validator:(a,e)=>e?e!==s.passwordNew?Promise.reject("两次输入的密码不一致!"):Promise.resolve():Promise.reject("密码不能为空")}]}],k={class:"py-8 bg-white flex flex-col justify-center items-center"},v={class:"flex justify-center"},J=b({name:"ChangePassword",__name:"index",setup(s){const[a,{validate:e,resetFields:p}]=h({size:"large",baseColProps:{span:24},labelWidth:100,showActionButtonGroup:!1,schemas:C});function i(){return u(this,null,function*(){try{const o=yield e(),{passwordOld:m,passwordNew:t}=o}catch(o){}})}return(o,m)=>{const t=g("a-button");return x(),y(n(w),{title:"修改当前用户密码",content:"修改成功后会自动退出当前登录！"},{default:l(()=>[f("div",k,[d(n(P),{onRegister:n(a)},null,8,["onRegister"]),f("div",v,[d(t,{onClick:n(p)},{default:l(()=>[_(" 重置 ")]),_:1},8,["onClick"]),d(t,{class:"!ml-4",type:"primary",onClick:i},{default:l(()=>[_(" 确认 ")]),_:1})])])]),_:1})}}});export{J as default};