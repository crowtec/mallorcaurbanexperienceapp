import{l as f,_ as v,m as g,t as l,v as d,x as h,y as _,p as y,s as r}from"./entry.d8e7f668.js";import{q as w,h as p,e as C,j as P}from"./query.5d9d3027.js";import{_ as $}from"./nuxt-link.9c0b12a6.js";import{w as c,s as N,u as j}from"./utils.f547c610.js";import{u as T}from"./preview.5dfc807e.js";const x=async e=>{const{content:t}=f().public;typeof(e==null?void 0:e.params)!="function"&&(e=w(e));const a=e.params(),s=t.experimental.stripQueryParameters?c(`/navigation/${`${p(a)}.${t.integrity}`}/${C(a)}.json`):c(`/navigation/${p(a)}.${t.integrity}.json`);if(N())return(await v(()=>import("./client-db.41b41b5c.js"),["./client-db.41b41b5c.js","./entry.d8e7f668.js","./entry.c438eb52.css","./query.5d9d3027.js","./utils.f547c610.js","./preview.5dfc807e.js","./index.a6ef77ff.js"],import.meta.url).then(o=>o.generateNavigation))(a);const n=await $fetch(s,{method:"GET",responseType:"json",params:t.experimental.stripQueryParameters?void 0:{_params:P(a),previewToken:T().getPreviewToken()}});if(typeof n=="string"&&n.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return n},Q=g({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(e){const{query:t}=l(e),a=d(()=>{var n;return typeof((n=t.value)==null?void 0:n.params)=="function"?t.value.params():t.value});if(!a.value&&h("dd-navigation").value){const{navigation:n}=j();return{navigation:n}}const{data:s}=await _(`content-navigation-${p(a.value)}`,()=>x(a.value));return{navigation:s}},render(e){const t=y(),{navigation:a}=e,s=o=>r($,{to:o._path},()=>o.title),n=(o,u)=>r("ul",u?{"data-level":u}:null,o.map(i=>i.children?r("li",null,[s(i),n(i.children,u+1)]):r("li",null,s(i)))),m=o=>n(o,0);return t!=null&&t.default?t.default({navigation:a,...this.$attrs}):m(a)}});export{Q as default};
