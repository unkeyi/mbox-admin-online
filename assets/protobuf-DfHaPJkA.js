import{b as c}from"./antd-DYfcSfab.js";import{r as d}from"./index-vysrXUS7.js";function s(f,i){for(var r=0;r<i.length;r++){const n=i[r];if(typeof n!="string"&&!Array.isArray(n)){for(const t in n)if(t!=="default"&&!(t in f)){const o=Object.getOwnPropertyDescriptor(n,t);o&&Object.defineProperty(f,t,o.get?o:{enumerable:!0,get:()=>n[t]})}}}return Object.freeze(Object.defineProperty(f,Symbol.toStringTag,{value:"Module"}))}var b={exports:{}};(function(f,i){(function(r){r(d())})(function(r){function n(e){return new RegExp("^(("+e.join(")|(")+"))\\b","i")}var t=["package","message","import","syntax","required","optional","repeated","reserved","default","extensions","packed","bool","bytes","double","enum","float","string","int32","int64","uint32","uint64","sint32","sint64","fixed32","fixed64","sfixed32","sfixed64","option","service","rpc","returns"],o=n(t);r.registerHelper("hintWords","protobuf",t);var a=new RegExp("^[_A-Za-z¡-￿][_A-Za-z0-9¡-￿]*");function p(e){return e.eatSpace()?null:e.match("//")?(e.skipToEnd(),"comment"):e.match(/^[0-9\.+-]/,!1)&&(e.match(/^[+-]?0x[0-9a-fA-F]+/)||e.match(/^[+-]?\d*\.\d+([EeDd][+-]?\d+)?/)||e.match(/^[+-]?\d+([EeDd][+-]?\d+)?/))?"number":e.match(/^"([^"]|(""))*"/)||e.match(/^'([^']|(''))*'/)?"string":e.match(o)?"keyword":e.match(a)?"variable":(e.next(),null)}r.defineMode("protobuf",function(){return{token:p,fold:"brace"}}),r.defineMIME("text/x-protobuf","protobuf")})})();var u=b.exports;const l=c(u),m=s({__proto__:null,default:l},[u]);export{m as p};
