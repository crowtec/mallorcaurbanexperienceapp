import{B as l,h as m,i as d}from"./entry.d8e7f668.js";const u=/^[\u0009\u0020-\u007E\u0080-\u00FF]+$/;function y(e,i){if(typeof e!="string")throw new TypeError("argument str must be a string");const r={},c=(i||{}).decode||S;let n=0;for(;n<e.length;){const o=e.indexOf("=",n);if(o===-1)break;let s=e.indexOf(";",n);if(s===-1)s=e.length;else if(s<o){n=e.lastIndexOf(";",o-1)+1;continue}const p=e.slice(n,o).trim();if(r[p]===void 0){let a=e.slice(o+1,s).trim();a.codePointAt(0)===34&&(a=a.slice(1,-1)),r[p]=g(a,c)}n=s+1}return r}function w(e,i,r){const t=r||{},c=t.encode||x;if(typeof c!="function")throw new TypeError("option encode is invalid");if(!u.test(e))throw new TypeError("argument name is invalid");const n=c(i);if(n&&!u.test(n))throw new TypeError("argument val is invalid");let o=e+"="+n;if(t.maxAge!==void 0&&t.maxAge!==null){const s=t.maxAge-0;if(Number.isNaN(s)||!Number.isFinite(s))throw new TypeError("option maxAge is invalid");o+="; Max-Age="+Math.floor(s)}if(t.domain){if(!u.test(t.domain))throw new TypeError("option domain is invalid");o+="; Domain="+t.domain}if(t.path){if(!u.test(t.path))throw new TypeError("option path is invalid");o+="; Path="+t.path}if(t.expires){if(!h(t.expires)||Number.isNaN(t.expires.valueOf()))throw new TypeError("option expires is invalid");o+="; Expires="+t.expires.toUTCString()}if(t.httpOnly&&(o+="; HttpOnly"),t.secure&&(o+="; Secure"),t.priority)switch(typeof t.priority=="string"?t.priority.toLowerCase():t.priority){case"low":o+="; Priority=Low";break;case"medium":o+="; Priority=Medium";break;case"high":o+="; Priority=High";break;default:throw new TypeError("option priority is invalid")}if(t.sameSite)switch(typeof t.sameSite=="string"?t.sameSite.toLowerCase():t.sameSite){case!0:o+="; SameSite=Strict";break;case"lax":o+="; SameSite=Lax";break;case"strict":o+="; SameSite=Strict";break;case"none":o+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}return o}function h(e){return Object.prototype.toString.call(e)==="[object Date]"||e instanceof Date}function g(e,i){try{return i(e)}catch{return e}}function S(e){return e.includes("%")?decodeURIComponent(e):e}function x(e){return encodeURIComponent(e)}const k=/"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,T=/"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,b=/^\s*["[{]|^\s*-?\d[\d.]{0,14}\s*$/;function v(e,i){if(e!=="__proto__"&&!(e==="constructor"&&i&&typeof i=="object"&&"prototype"in i))return i}function E(e,i={}){if(typeof e!="string")return e;const r=e.toLowerCase().trim();if(r==="true")return!0;if(r==="false")return!1;if(r==="null")return null;if(r==="nan")return Number.NaN;if(r==="infinity")return Number.POSITIVE_INFINITY;if(r!=="undefined"){if(!b.test(e)){if(i.strict)throw new SyntaxError("Invalid JSON");return e}try{return k.test(e)||T.test(e)?JSON.parse(e,v):JSON.parse(e)}catch(t){if(i.strict)throw t;return e}}}const N={path:"/",watch:!0,decode:e=>E(decodeURIComponent(e)),encode:e=>encodeURIComponent(typeof e=="string"?e:JSON.stringify(e))};function f(e,i){var n;const r={...N,...i},t=C(r)||{},c=l(t[e]??((n=r.default)==null?void 0:n.call(r)));{const o=()=>{O(e,c.value,r)};r.watch?m(c,o,{deep:r.watch!=="shallow"}):o()}return c}function C(e={}){return y(document.cookie,e)}function I(e,i,r={}){return i==null?w(e,i,{...r,maxAge:-1}):w(e,i,r)}function O(e,i,r={}){document.cookie=I(e,i,r)}const F=()=>({isEnabled:()=>{const t=d().query;return Object.prototype.hasOwnProperty.call(t,"preview")&&!t.preview?!1:!!(t.preview||f("previewToken").value||sessionStorage.getItem("previewToken"))},getPreviewToken:()=>f("previewToken").value||sessionStorage.getItem("previewToken")||void 0,setPreviewToken:t=>{f("previewToken").value=t,d().query.preview=t||"",t?sessionStorage.setItem("previewToken",t):sessionStorage.removeItem("previewToken"),window.location.reload()}});export{F as u};
