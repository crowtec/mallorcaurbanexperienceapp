import{bQ as x,bW as T,bX as U,by as F,_ as N}from"./entry.77ce10d7.js";import{w as m,s as D}from"./utils.42a5f08b.js";import{u as H}from"./preview.0cbdbb6e.js";const I={ignoreUnknown:!1,respectType:!1,respectFunctionNames:!1,respectFunctionProperties:!1,unorderedObjects:!0,unorderedArrays:!1,unorderedSets:!1};function W(s,r={}){r={...I,...r};const n=k(r);return n.dispatch(s),n.toString()}function k(s){const r=[];let n=[];const t=e=>{r.push(e)};return{toString(){return r.join("")},getContext(){return n},dispatch(e){return s.replacer&&(e=s.replacer(e)),this["_"+(e===null?"null":typeof e)](e)},_object(e){if(e&&typeof e.toJSON=="function")return this._object(e.toJSON());const i=/\[object (.*)]/i,o=Object.prototype.toString.call(e),c=i.exec(o),a=c?c[1].toLowerCase():"unknown:["+o.toLowerCase()+"]";let u=null;if((u=n.indexOf(e))>=0)return this.dispatch("[CIRCULAR:"+u+"]");if(n.push(e),typeof Buffer<"u"&&Buffer.isBuffer&&Buffer.isBuffer(e))return t("buffer:"),t(e.toString("utf8"));if(a!=="object"&&a!=="function"&&a!=="asyncfunction")this["_"+a]?this["_"+a](e):s.ignoreUnknown||this._unkown(e,a);else{let l=Object.keys(e);s.unorderedObjects&&(l=l.sort()),s.respectType!==!1&&!B(e)&&l.splice(0,0,"prototype","__proto__","letructor"),s.excludeKeys&&(l=l.filter(function(f){return!s.excludeKeys(f)})),t("object:"+l.length+":");for(const f of l)this.dispatch(f),t(":"),s.excludeValues||this.dispatch(e[f]),t(",")}},_array(e,i){if(i=typeof i<"u"?i:s.unorderedArrays!==!1,t("array:"+e.length+":"),!i||e.length<=1){for(const a of e)this.dispatch(a);return}const o=[],c=e.map(a=>{const u=k(s);return u.dispatch(a),o.push(u.getContext()),u.toString()});return n=[...n,...o],c.sort(),this._array(c,!1)},_date(e){return t("date:"+e.toJSON())},_symbol(e){return t("symbol:"+e.toString())},_unkown(e,i){if(t(i),!!e&&(t(":"),e&&typeof e.entries=="function"))return this._array(Array.from(e.entries()),!0)},_error(e){return t("error:"+e.toString())},_boolean(e){return t("bool:"+e.toString())},_string(e){t("string:"+e.length+":"),t(e.toString())},_function(e){t("fn:"),B(e)?this.dispatch("[native]"):this.dispatch(e.toString()),s.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(e.name)),s.respectFunctionProperties&&this._object(e)},_number(e){return t("number:"+e.toString())},_xml(e){return t("xml:"+e.toString())},_null(){return t("Null")},_undefined(){return t("Undefined")},_regexp(e){return t("regex:"+e.toString())},_uint8array(e){return t("uint8array:"),this.dispatch(Array.prototype.slice.call(e))},_uint8clampedarray(e){return t("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(e))},_int8array(e){return t("int8array:"),this.dispatch(Array.prototype.slice.call(e))},_uint16array(e){return t("uint16array:"),this.dispatch(Array.prototype.slice.call(e))},_int16array(e){return t("int16array:"),this.dispatch(Array.prototype.slice.call(e))},_uint32array(e){return t("uint32array:"),this.dispatch(Array.prototype.slice.call(e))},_int32array(e){return t("int32array:"),this.dispatch(Array.prototype.slice.call(e))},_float32array(e){return t("float32array:"),this.dispatch(Array.prototype.slice.call(e))},_float64array(e){return t("float64array:"),this.dispatch(Array.prototype.slice.call(e))},_arraybuffer(e){return t("arraybuffer:"),this.dispatch(new Uint8Array(e))},_url(e){return t("url:"+e.toString())},_map(e){t("map:");const i=[...e];return this._array(i,s.unorderedSets!==!1)},_set(e){t("set:");const i=[...e];return this._array(i,s.unorderedSets!==!1)},_file(e){return t("file:"),this.dispatch([e.name,e.size,e.type,e.lastModfied])},_blob(){if(s.ignoreUnknown)return t("[blob]");throw new Error(`Hashing Blob objects is currently not supported
Use "options.replacer" or "options.ignoreUnknown"
`)},_domwindow(){return t("domwindow")},_bigint(e){return t("bigint:"+e.toString())},_process(){return t("process")},_timer(){return t("timer")},_pipe(){return t("pipe")},_tcp(){return t("tcp")},_udp(){return t("udp")},_tty(){return t("tty")},_statwatcher(){return t("statwatcher")},_securecontext(){return t("securecontext")},_connection(){return t("connection")},_zlib(){return t("zlib")},_context(){return t("context")},_nodescript(){return t("nodescript")},_httpparser(){return t("httpparser")},_dataview(){return t("dataview")},_signal(){return t("signal")},_fsevent(){return t("fsevent")},_tlswrap(){return t("tlswrap")}}}function B(s){return typeof s!="function"?!1:/^function\s+\w*\s*\(\s*\)\s*{\s+\[native code]\s+}$/i.exec(Function.prototype.toString.call(s))!=null}class d{constructor(r,n){r=this.words=r||[],this.sigBytes=n!==void 0?n:r.length*4}toString(r){return(r||q).stringify(this)}concat(r){if(this.clamp(),this.sigBytes%4)for(let n=0;n<r.sigBytes;n++){const t=r.words[n>>>2]>>>24-n%4*8&255;this.words[this.sigBytes+n>>>2]|=t<<24-(this.sigBytes+n)%4*8}else for(let n=0;n<r.sigBytes;n+=4)this.words[this.sigBytes+n>>>2]=r.words[n>>>2];return this.sigBytes+=r.sigBytes,this}clamp(){this.words[this.sigBytes>>>2]&=4294967295<<32-this.sigBytes%4*8,this.words.length=Math.ceil(this.sigBytes/4)}clone(){return new d([...this.words])}}const q={stringify(s){const r=[];for(let n=0;n<s.sigBytes;n++){const t=s.words[n>>>2]>>>24-n%4*8&255;r.push((t>>>4).toString(16),(t&15).toString(16))}return r.join("")}},M={stringify(s){const r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=[];for(let t=0;t<s.sigBytes;t+=3){const e=s.words[t>>>2]>>>24-t%4*8&255,i=s.words[t+1>>>2]>>>24-(t+1)%4*8&255,o=s.words[t+2>>>2]>>>24-(t+2)%4*8&255,c=e<<16|i<<8|o;for(let a=0;a<4&&t*8+a*6<s.sigBytes*8;a++)n.push(r.charAt(c>>>6*(3-a)&63))}return n.join("")}},Q={parse(s){const r=s.length,n=[];for(let t=0;t<r;t++)n[t>>>2]|=(s.charCodeAt(t)&255)<<24-t%4*8;return new d(n,r)}},v={parse(s){return Q.parse(unescape(encodeURIComponent(s)))}};class K{constructor(){this._minBufferSize=0,this.blockSize=512/32,this.reset()}reset(){this._data=new d,this._nDataBytes=0}_append(r){typeof r=="string"&&(r=v.parse(r)),this._data.concat(r),this._nDataBytes+=r.sigBytes}_doProcessBlock(r,n){}_process(r){let n,t=this._data.sigBytes/(this.blockSize*4);r?t=Math.ceil(t):t=Math.max((t|0)-this._minBufferSize,0);const e=t*this.blockSize,i=Math.min(e*4,this._data.sigBytes);if(e){for(let o=0;o<e;o+=this.blockSize)this._doProcessBlock(this._data.words,o);n=this._data.words.splice(0,e),this._data.sigBytes-=i}return new d(n,i)}}class J extends K{update(r){return this._append(r),this._process(),this}finalize(r){r&&this._append(r)}}const G=[1779033703,-1150833019,1013904242,-1521486534,1359893119,-1694144372,528734635,1541459225],V=[1116352408,1899447441,-1245643825,-373957723,961987163,1508970993,-1841331548,-1424204075,-670586216,310598401,607225278,1426881987,1925078388,-2132889090,-1680079193,-1046744716,-459576895,-272742522,264347078,604807628,770255983,1249150122,1555081692,1996064986,-1740746414,-1473132947,-1341970488,-1084653625,-958395405,-710438585,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,-2117940946,-1838011259,-1564481375,-1474664885,-1035236496,-949202525,-778901479,-694614492,-200395387,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,-2067236844,-1933114872,-1866530822,-1538233109,-1090935817,-965641998],y=[];class X extends J{constructor(){super(),this.reset()}reset(){super.reset(),this._hash=new d([...G])}_doProcessBlock(r,n){const t=this._hash.words;let e=t[0],i=t[1],o=t[2],c=t[3],a=t[4],u=t[5],l=t[6],f=t[7];for(let h=0;h<64;h++){if(h<16)y[h]=r[n+h]|0;else{const _=y[h-15],L=(_<<25|_>>>7)^(_<<14|_>>>18)^_>>>3,g=y[h-2],R=(g<<15|g>>>17)^(g<<13|g>>>19)^g>>>10;y[h]=L+y[h-7]+R+y[h-16]}const P=a&u^~a&l,O=e&i^e&o^i&o,j=(e<<30|e>>>2)^(e<<19|e>>>13)^(e<<10|e>>>22),z=(a<<26|a>>>6)^(a<<21|a>>>11)^(a<<7|a>>>25),w=f+z+P+V[h]+y[h],E=j+O;f=l,l=u,u=a,a=c+w|0,c=o,o=i,i=e,e=w+E|0}t[0]=t[0]+e|0,t[1]=t[1]+i|0,t[2]=t[2]+o|0,t[3]=t[3]+c|0,t[4]=t[4]+a|0,t[5]=t[5]+u|0,t[6]=t[6]+l|0,t[7]=t[7]+f|0}finalize(r){super.finalize(r);const n=this._nDataBytes*8,t=this._data.sigBytes*8;return this._data.words[t>>>5]|=128<<24-t%32,this._data.words[(t+64>>>9<<4)+14]=Math.floor(n/4294967296),this._data.words[(t+64>>>9<<4)+15]=n,this._data.sigBytes=this._data.words.length*4,this._process(),this._hash}}function Y(s){return new X().finalize(s).toString(M)}function S(s,r={}){const n=typeof s=="string"?s:W(s,r);return Y(n).slice(0,10)}const b=(s,r)=>r.split(".").reduce((n,t)=>n&&n[t],s),A=(s,r)=>Object.keys(s).filter(r).reduce((n,t)=>Object.assign(n,{[t]:s[t]}),{}),at=s=>r=>Array.isArray(r)?r.map(n=>s(n)):s(r),$=s=>{const r=[],n=[];for(const t of s)["$","_"].includes(t)?r.push(t):n.push(t);return{prefixes:r,properties:n}},ct=(s=[])=>r=>{if(s.length===0||!r)return r;const{prefixes:n,properties:t}=$(s);return A(r,e=>!t.includes(e)&&!n.includes(e[0]))},ut=(s=[])=>r=>{if(s.length===0||!r)return r;const{prefixes:n,properties:t}=$(s);return A(r,e=>t.includes(e)||n.includes(e[0]))},lt=(s,r)=>{const n=new Intl.Collator(r.$locale,{numeric:r.$numeric,caseFirst:r.$caseFirst,sensitivity:r.$sensitivity}),t=Object.keys(r).filter(e=>!e.startsWith("$"));for(const e of t)s=s.sort((i,o)=>{const c=[b(i,e),b(o,e)].map(a=>{if(a!==null)return a instanceof Date?a.toISOString():a});return r[e]===-1&&c.reverse(),n.compare(c[0],c[1])});return s},ht=(s,r="Expected an array")=>{if(!Array.isArray(s))throw new TypeError(r)},p=s=>Array.isArray(s)?s:[void 0,null].includes(s)?[]:[s],Z=["sort","where","only","without"],tt=(s,r)=>{const n={...r};for(const i of Z)n[i]&&(n[i]=p(n[i]));const t=(i,o=c=>c)=>(...c)=>(n[i]=o(...c),e),e={params:()=>({...n,...n.where?{where:[...p(n.where)]}:{},...n.sort?{sort:[...p(n.sort)]}:{}}),only:t("only",p),without:t("without",p),where:t("where",i=>[...p(n.where),...p(i)]),sort:t("sort",i=>[...p(n.sort),...p(i)]),limit:t("limit",i=>parseInt(String(i),10)),skip:t("skip",i=>parseInt(String(i),10)),find:()=>s(e),findOne:()=>(n.first=!0,s(e)),findSurround:(i,o)=>(n.surround={query:i,...o},s(e)),locale:i=>e.where({_locale:i})};return e};function C(s){return JSON.stringify(s,et)}function et(s,r){return r instanceof RegExp?`--REGEX ${r.toString()}`:r}const rt=s=>{let r=C(s);return r=typeof Buffer<"u"?Buffer.from(r).toString("base64"):btoa(r),r=r.replace(/\+/g,"-").replace(/\//g,"_").replace(/=/g,""),(r.match(/.{1,100}/g)||[]).join("/")},st=()=>async s=>{const{content:r}=x().public,n=s.params(),t=r.experimental.stripQueryParameters?m(`/query/${`${S(n)}.${r.integrity}`}/${rt(n)}.json`):m(`/query/${S(n)}.${r.integrity}.json`);if(D())return(await N(()=>import("./client-db.f102c433.js"),["./client-db.f102c433.js","./entry.77ce10d7.js","./entry.7dbeb779.css","./index.a6ef77ff.js","./preview.0cbdbb6e.js","./utils.42a5f08b.js"],import.meta.url).then(o=>o.useContentDatabase())).fetch(s);const e=await $fetch(t,{method:"GET",responseType:"json",params:r.experimental.stripQueryParameters?void 0:{_params:C(n),previewToken:H().getPreviewToken()}});if(typeof e=="string"&&e.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return e};function ft(s,...r){const{content:n}=x().public,t=tt(st(),typeof s!="string"?s:{});let e;typeof s=="string"&&(e=T(U(s,...r)));const i=t.params;return t.params=()=>{var c,a,u;const o=i();return e&&(o.where=o.where||[],o.first&&(o.where||[]).length===0?o.where.push({_path:F(e)}):o.where.push({_path:new RegExp(`^${e.replace(/[-[\]{}()*+.,^$\s/]/g,"\\$&")}`)})),(c=o.sort)!=null&&c.length||(o.sort=[{_file:1,$numeric:!0}]),n.locales.length&&((u=(a=o.where)==null?void 0:a.find(f=>f._locale))!=null&&u._locale||(o.where=o.where||[],o.where.push({_locale:n.defaultLocale}))),o},t}export{ht as a,p as b,at as c,ut as d,rt as e,tt as f,b as g,S as h,C as j,ft as q,lt as s,ct as w};
