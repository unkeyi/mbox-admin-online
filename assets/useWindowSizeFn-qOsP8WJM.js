import{as as a,ak as d,A as u}from"./entry/index-CFS-oRkL.js";function w(s,i={}){const{wait:o=150,immediate:r}=i;let e=()=>{s()};e=u(e,o);const n=()=>{r&&e(),window.addEventListener("resize",e)},t=()=>{window.removeEventListener("resize",e)};return a(()=>{n()}),d(()=>{t()}),{start:n,stop:t}}export{w as u};
