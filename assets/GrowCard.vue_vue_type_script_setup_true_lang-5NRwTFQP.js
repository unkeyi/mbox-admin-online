var D=Object.defineProperty;var b=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;var w=(e,a,o)=>a in e?D(e,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[a]=o,S=(e,a)=>{for(var o in a||(a={}))I.call(a,o)&&w(e,o,a[o]);if(b)for(var o of b(a))M.call(a,o)&&w(e,o,a[o]);return e};import{b2 as N,b3 as O,aj as P,m as Z}from"./entry/index-CFS-oRkL.js";import{a9 as q,O as A,af as H}from"./antd-DYfcSfab.js";import{d as T,f as C,c as J,u as s,h as K,w as Q,o as R,Z as u,_ as g,a0 as x,ag as U,F as W,aa as X,a8 as Y,a9 as p,k as c,G as tt,$ as m,a1 as et}from"./vue-2VIvd4_n.js";const at=T({name:"CountTo",__name:"CountTo",props:{startVal:{type:Number,default:0},endVal:{type:Number,default:2021},duration:{type:Number,default:1500},autoplay:{type:Boolean,default:!0},decimals:{type:Number,default:0,validator(e){return e>=0}},prefix:{type:String,default:""},suffix:{type:String,default:""},separator:{type:String,default:","},decimal:{type:String,default:"."},color:{type:String},useEasing:{type:Boolean,default:!0},transition:{type:String,default:"linear"}},emits:["onStarted","onFinished"],setup(e,{expose:a,emit:o}){const t=e,n=o,r=C(t.startVal),$=C(!1);let y=N(r);const F=J(()=>z(s(y)));K(()=>{r.value=t.startVal}),Q([()=>t.startVal,()=>t.endVal],()=>{t.autoplay&&_()}),R(()=>{t.autoplay&&_()});function _(){v(),r.value=t.endVal}function k(){r.value=t.startVal,v()}function v(){y=N(r,S({disabled:$,duration:t.duration,onFinished:()=>n("onFinished"),onStarted:()=>n("onStarted")},t.useEasing?{transition:O[t.transition]}:{}))}function z(l){if(!l&&l!==0)return"";const{decimals:V,decimal:E,separator:d,suffix:j,prefix:G}=t;l=Number(l).toFixed(V),l+="";const f=l.split(".");let i=f[0];const L=f.length>1?E+f[1]:"",h=/(\d+)(\d{3})/;if(d&&!q(d))for(;h.test(i);)i=i.replace(h,"$1"+d+"$2");return G+i+L+j}return a({reset:k}),(l,V)=>(u(),g("span",{style:U({color:e.color})},x(F.value),5))}}),B=P(at),ot=[{title:"访问数",icon:"visit-count|svg",value:2e3,total:12e4,color:"green",action:"月"},{title:"成交额",icon:"total-sales|svg",value:2e4,total:5e5,color:"blue",action:"月"},{title:"下载数",icon:"download-count|svg",value:8e3,total:12e4,color:"orange",action:"周"},{title:"成交数",icon:"transaction|svg",value:5e3,total:5e4,color:"purple",action:"年"}],lt={class:"md:flex"},st={class:"py-4 px-4 flex justify-between items-center"},nt={class:"p-2 px-4 flex justify-between"},dt=T({__name:"GrowCard",props:{loading:{type:Boolean}},setup(e){return(a,o)=>(u(),g("div",lt,[(u(!0),g(W,null,X(s(ot),(t,n)=>(u(),Y(s(H),{key:t.title,size:"small",loading:e.loading,title:t.title,class:et(["md:w-1/4 w-full !md:mt-0",{"!md:mr-4":n+1<4,"!mt-4":n>0}])},{extra:p(()=>[c(s(A),{color:t.color},{default:p(()=>[tt(x(t.action),1)]),_:2},1032,["color"])]),default:p(()=>[m("div",st,[c(s(B),{prefix:"$",startVal:1,endVal:t.value,class:"text-2xl"},null,8,["endVal"]),c(Z,{icon:t.icon,size:40},null,8,["icon"])]),m("div",nt,[m("span",null,"总"+x(t.title),1),c(s(B),{prefix:"$",startVal:1,endVal:t.total},null,8,["endVal"])])]),_:2},1032,["loading","title","class"]))),128))]))}});export{dt as _};
