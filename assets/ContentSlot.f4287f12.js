import{a as g}from"./utils.42a5f08b.js";import{a as h,bR as c,bk as y,bu as p,bZ as m}from"./entry.77ce10d7.js";import"./preview.0cbdbb6e.js";const S=h({name:"ContentSlot",functional:!0,props:{use:{type:Function,default:void 0},unwrap:{type:[Boolean,String],default:!1}},setup(e){const{parent:u}=m(),{between:o,default:l}=c(),i=y(()=>typeof e.unwrap=="string"?e.unwrap.split(" "):["*"]);return{fallbackSlot:l,tags:i,between:o,parent:u}},render({use:e,unwrap:u,fallbackSlot:o,between:l,tags:i,parent:n}){var f;try{let s=e;if(typeof e=="string"&&(s=(n==null?void 0:n.slots[e])||((f=n==null?void 0:n.parent)==null?void 0:f.slots[e]),console.warn(`Please set :use="$slots.${e}" in <ContentSlot> component to enable reactivity`)),!s)return o?o():p("div");if(!u)return[s()];const{flatUnwrap:d}=g(),a=d(s(),i);return l?a.flatMap((t,r)=>r===0?[t]:[l(),t]):a.reduce((t,r)=>(typeof r.children=="string"?typeof t[t.length-1]=="string"?t[t.length-1]+=r.children:t.push(r.children):t.push(r),t),[])}catch{return p("div")}}});export{S as default};
