import k from"./Logo.8e3414a1.js";import A from"./Marker.017cce71.js";import C from"./Button.a405c5b4.js";import{bp as z,bI as M,bJ as O,r as n,bn as P,b as B,m as i,f as e,h as r,u as s,w as N,bC as f,bA as V,bE as p,bB as h,o as l,bG as j}from"./entry.8142bb42.js";import{u as L}from"./map.dd756914.js";import{d as E,a as I,M as v}from"./device.28d42929.js";import{P as m}from"./permission.6b6370dd.js";import{d as $}from"./timer.1612f152.js";import"./BlurredCircle.34641439.js";import"./tw-merge.1166cefb.js";import"./nuxt-link.584ad1b9.js";const G=e("div",{class:"fixed w-full top-0 left-0 mix-blend-hard-light bg-sky-900",style:{height:"100dvh"}},null,-1),R={class:"fixed w-full flex",style:{height:"100dvh"}},T=e("div",{class:"fixed w-full top-0 h-[10vh] bg-gradient-to-b from-sky-900"},null,-1),U={class:"flex flex-col flex-1 relative backdrop-blur-sm"},D={class:"flex flex-col items-center flex-1 text-md overflow-scroll"},F={key:0,class:"container flex flex-col items-center justify-between flex-1 max-w-[340px] pb-20"},H=e("div",{class:"text-center text-green-100"}," Para que puedas descubrir los secretos de la isla necesitamos tener acceso a tu ubicación y la orientación de tu dispositivo. ",-1),J=e("div",{class:"container text-center flex flex-col gap-4 max-w-[340px] text-green-100"},[e("div",null," ¡Vaya! Ha habido algún problema para acceder a la ubicación de tu dispostivo. "),e("div",null," Por favor, verifica que tienes los permisos de localización activos con los siguientes pasos, y acepta la solicitud de permisos de la aplicación. ")],-1),K={key:0,class:"container flex flex-1 justify-center overflow-scroll text-green-100"},Q={class:"flex flex-col gap-3 pt-8 max-w-[280px]"},W=h('<div class="flex gap-6"><div class="slashed-zero text-2xl">01</div><div class="text-left">Accede a &quot;Ajustes&quot;.</div></div><div class="flex gap-6"><div class="slashed-zero text-2xl">02</div><div class="text-left"> Accede a &quot;Privacidad y Seguridad&quot;. </div></div><div class="flex gap-6"><div class="slashed-zero text-2xl">03</div><div class="text-left">Accede a &quot;Localización&quot;.</div></div>',3),X={class:"flex gap-6"},Y=e("div",{class:"slashed-zero text-2xl"},"04",-1),Z={class:"text-left"},ee=e("div",{class:"flex gap-6"},[e("div",{class:"slashed-zero text-2xl"},"05"),e("div",{class:"text-left"},'Marca "Cuando se use la app".')],-1),se={key:1,class:"container flex flex-1 justify-center overflow-scroll text-green-100"},te=h('<div class="flex flex-col gap-3 pt-8 max-w-[280px]"><div class="flex gap-6"><div class="slashed-zero text-2xl">01</div><div class="text-left"> Pulsa en el icono de menú de Google Chrome. </div></div><div class="flex gap-6"><div class="slashed-zero text-2xl">02</div><div class="text-left"> Accede a &quot;Configuración&quot; o &quot;Ajustes&quot;. </div></div><div class="flex gap-6"><div class="slashed-zero text-2xl">03</div><div class="text-left"> Accede a &quot;Configuración de sitios&quot; o &quot;Permisos de sitios&quot;. </div></div><div class="flex gap-6"><div class="slashed-zero text-2xl">04</div><div class="text-left">Accede a &quot;Ubicación&quot;.</div></div><div class="flex gap-6"><div class="slashed-zero text-2xl">05</div><div class="text-left"> Activa la ubicación general y de la aplicación. </div></div></div>',1),oe=[te],me={__name:"permissions",setup(ae){const{$pwa:_}=z(),u=L(),g=M();g.value=O.sky[900];const c=n(!1),d=n(!1),a=n(!1),x=n(!1),b=P(),q=async()=>{const t=[m.requestLocation()];a.value===v.iOS&&_.isInstalled?await m.requestLocationState()!=="granted"&&t.push($(1e3)):console.log("no pwaaaa!!!"),Promise.race(t).then(o=>{c.value=!0,d.value=o&&o===!0,console.log(c.value),console.log(a.value),console.log(d.value),d.value&&b.push({path:"/tutorial"})}).catch(o=>console.log(o))};return B(()=>{a.value=E(),x.value=I(),u.value&&u.value.show()}),(t,w)=>{const o=k,y=A,S=C;return l(),i(f,null,[G,e("div",R,[T,e("div",U,[r(o),e("div",D,[!s(c)||s(c)&&s(d)?(l(),i("div",F,[H,e("div",null,[r(y,{class:"max-h-28"})]),r(S,{onClick:q,class:"bg-white py-4 px-16",shadowed:""},{default:N(()=>[j("Aceptar")]),_:1})])):(l(),i(f,{key:1},[J,s(a)===("MobileOS"in t?t.MobileOS:s(v)).iOS?(l(),i("div",K,[e("div",Q,[W,e("div",X,[Y,e("div",Z," Entra a "+V(s(x)||"tu navegador")+". ",1)]),ee])])):p("",!0),s(a)===("MobileOS"in t?t.MobileOS:s(v)).Android?(l(),i("div",se,oe)):p("",!0)],64))])])])],64)}}};export{me as default};
