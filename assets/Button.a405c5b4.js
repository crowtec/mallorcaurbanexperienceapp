import{_ as r}from"./nuxt-link.584ad1b9.js";import{t as c}from"./tw-merge.1166cefb.js";import{bk as u,o as s,c as i,w as f,k as l,bm as m,u as d,m as p,l as b}from"./entry.8142bb42.js";const y=["disabled"],h={__name:"Button",props:{type:{type:String,default:"squared"},class:{type:String},format:{type:String,default:"squared"},disabled:{type:Boolean,default:!1},shadowed:{type:Boolean,default:!1},bordered:{type:Boolean,default:!1},to:{type:String,default:null}},setup(t){const e=t,a=u(()=>({[c("transition-opacity flex text-center text-2xl active:outline-none focus:outline-none",e.class)]:!0,"rounded-[100px]":e.format==="rounded","rounded-full ":e.format==="circle","border-[1.5px] border-black":e.bordered,"shadow-md":e.shadowed,"opacity-75":e.disabled,"active:opacity-85":!e.disabled}));return(o,k)=>{const n=r;return t.to?(s(),i(n,m({key:0,class:d(a)},{...!t.disabled&&{to:t.to}}),{default:f(()=>[l(o.$slots,"default")]),_:3},16,["class"])):(s(),p("button",{key:1,class:b(d(a)),disabled:t.disabled},[l(o.$slots,"default")],10,y))}}};export{h as default};
