var V=Object.defineProperty,q=Object.defineProperties;var z=Object.getOwnPropertyDescriptors;var I=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable;var S=(e,t,n)=>t in e?V(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,o=(e,t)=>{for(var n in t||(t={}))L.call(t,n)&&S(e,n,t[n]);if(I)for(var n of I(t))F.call(t,n)&&S(e,n,t[n]);return e},C=(e,t)=>q(e,z(t));import{f as G,ao as H,ap as J,aq as K,ar as Q,aj as T}from"./entry/index-CFS-oRkL.js";import{d as U,f as b,c as g,u as s,k as d,ac as X,i as Y,I as Z,g as ee}from"./vue-2VIvd4_n.js";import{ac as _,e as P,ad as te}from"./antd-DYfcSfab.js";function se(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!Y(e)}const ne={useCollapse:{type:Boolean,default:!0},title:{type:String,default:""},size:{type:String,validator:e=>["small","default","middle",void 0].includes(e),default:"small"},bordered:{type:Boolean,default:!0},column:{type:[Number,Object],default:()=>({xxl:4,xl:3,lg:3,md:3,sm:2,xs:1})},collapseOptions:{type:Object,default:null},schema:{type:Array,default:()=>[]},data:{type:Object}},re=U({name:"Description",props:ne,emits:["register"],setup(e,{slots:t,emit:n}){const f=b(null),{prefixCls:O}=G("description"),l=H(),u=g(()=>o(o({},e),s(f))),y=g(()=>C(o({},s(u)),{title:void 0})),E=g(()=>!!s(u).title),M=g(()=>o({canExpand:!1},s(y).collapseOptions)),N=g(()=>o(o({},s(l)),s(y)));function W(r){f.value=o(o({},s(f)),r)}function $({label:r,labelMinWidth:p,labelStyle:a}){if(!a&&!p)return r;const c=C(o({},a),{minWidth:`${p}px `});return d("div",{style:c},[r])}function k(){const{schema:r,data:p}=s(y);return s(r).map(a=>{const{render:c,field:D,span:B,show:x,contentMinWidth:j}=a;if(x&&P(x)&&!x(p))return null;const v=()=>{var w;const i=(w=s(y))==null?void 0:w.data;if(!i)return null;const m=te(i,D);return m&&!Z(i).hasOwnProperty(D)?P(c)?c("",i):"":P(c)?c(m,i):m!=null?m:""},R=j;return d(_.Item,{label:$(a),key:D,span:B},{default:()=>{if(!j)return v();const i={minWidth:`${R}px`};return d("div",{style:i},[v()])}})}).filter(a=>!!a)}const h=()=>{let r;return d(_,X({class:`${O}`},s(N)),se(r=k())?r:{default:()=>[r]})},A=()=>{const r=e.useCollapse?h():d("div",null,[h()]);if(!e.useCollapse)return r;const{canExpand:p,helpMessage:a}=s(M),{title:c}=s(u);return d(K,{title:c,canExpand:p,helpMessage:a},{default:()=>r,action:()=>J(t,"action")})};return n("register",{setDescProps:W}),()=>s(E)?A():h()}});function ue(e){if(!ee())throw new Error("useDescription() can only be used inside setup() or functional components!");const t=b(null),n=b(!1);function f(l){s(n)&&Q()||(t.value=l,e&&l.setDescProps(e),n.value=!0)}return[f,{setDescProps:l=>{var u;(u=s(t))==null||u.setDescProps(l)}}]}const pe=T(re);export{pe as D,ue as u};