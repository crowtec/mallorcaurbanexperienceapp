if(!self.define){let s,e={};const l=(l,r)=>(l=new URL(l+".js",r).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(r,i)=>{const a=s||("document"in self?document.currentScript.src:"")||location.href;if(e[a])return;let n={};const o=s=>l(s,a),u={module:{uri:a},exports:n,require:o};e[a]=Promise.all(r.map((s=>u[s]||o(s)))).then((s=>(i(...s),n)))}}define(["./workbox-fa446783"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"200",revision:"804c61e9510cb3f38486f2427a6762a7"},{url:"404",revision:"804c61e9510cb3f38486f2427a6762a7"},{url:"assets/aframe-ar.356f8373.js",revision:null},{url:"assets/AFrameMap.4f9d9cc3.js",revision:null},{url:"assets/AframeTest.477e30c9.js",revision:null},{url:"assets/AframeTest.b67cd480.css",revision:null},{url:"assets/ARModel.26fd3281.js",revision:null},{url:"assets/ARModelViewer.49f2ad54.css",revision:null},{url:"assets/ARModelViewer.501ea25c.js",revision:null},{url:"assets/Arrow.8730d410.js",revision:null},{url:"assets/ArrowLarge.b504930f.js",revision:null},{url:"assets/Backup.436a57d1.js",revision:null},{url:"assets/BlurredCircle.4c2ed6b4.js",revision:null},{url:"assets/Button.6a8a0819.js",revision:null},{url:"assets/Card.c1d10910.js",revision:null},{url:"assets/client-db.f95d7726.js",revision:null},{url:"assets/client-only.eea359bd.js",revision:null},{url:"assets/Compass.4283665b.js",revision:null},{url:"assets/CompassCardinalPoints.a1e05d7d.js",revision:null},{url:"assets/ContentDoc.4ceda8f5.js",revision:null},{url:"assets/ContentList.a550d516.js",revision:null},{url:"assets/ContentNavigation.c8d8ecde.js",revision:null},{url:"assets/ContentQuery.e4de8a49.js",revision:null},{url:"assets/ContentRenderer.0ea16008.js",revision:null},{url:"assets/ContentRendererMarkdown.f267c0f9.js",revision:null},{url:"assets/ContentSlot.67450908.js",revision:null},{url:"assets/credits.90c2173f.js",revision:null},{url:"assets/Cross.fd170940.js",revision:null},{url:"assets/DayLights.d9177c00.js",revision:null},{url:"assets/default.ffe6167a.js",revision:null},{url:"assets/device.fe62fe19.js",revision:null},{url:"assets/Diamond.488a1fb3.js",revision:null},{url:"assets/divider.252842b5.js",revision:null},{url:"assets/Divider.62fbd980.js",revision:null},{url:"assets/DocumentDrivenEmpty.6ad90443.js",revision:null},{url:"assets/DocumentDrivenNotFound.f8306c98.js",revision:null},{url:"assets/entry.8c32d679.js",revision:null},{url:"assets/entry.cc0a5922.css",revision:null},{url:"assets/error-404.39955d98.js",revision:null},{url:"assets/error-404.8bdbaeb8.css",revision:null},{url:"assets/error-500.b63a96f5.css",revision:null},{url:"assets/error-500.f0c66eb1.js",revision:null},{url:"assets/error-component.26db6e78.js",revision:null},{url:"assets/FountainTest.b5bffcf8.js",revision:null},{url:"assets/heading.e5c753b2.js",revision:null},{url:"assets/index.1d900ae2.js",revision:null},{url:"assets/index.4db78ffb.js",revision:null},{url:"assets/index.842c132a.js",revision:null},{url:"assets/index.9456517d.js",revision:null},{url:"assets/index.9bb4776f.js",revision:null},{url:"assets/index.a6ef77ff.js",revision:null},{url:"assets/index.e4b76382.js",revision:null},{url:"assets/Intersect.4699e07b.js",revision:null},{url:"assets/Light.fea4e6ac.js",revision:null},{url:"assets/Loader.0bce4094.css",revision:null},{url:"assets/Loader.262ad9c8.js",revision:null},{url:"assets/location.e739094d.js",revision:null},{url:"assets/LocationFound.f60f6b16.js",revision:null},{url:"assets/locations.21a19dc5.js",revision:null},{url:"assets/Logo.38785ac3.js",revision:null},{url:"assets/map.15fd3c82.js",revision:null},{url:"assets/map.62e3ef44.css",revision:null},{url:"assets/map.8c64776a.js",revision:null},{url:"assets/Map.c38acb02.js",revision:null},{url:"assets/map.e70b2950.js",revision:null},{url:"assets/Markdown.7c70e628.js",revision:null},{url:"assets/Marker.6636fe15.js",revision:null},{url:"assets/Menu.a7bedfba.js",revision:null},{url:"assets/Menu.eda271e9.js",revision:null},{url:"assets/modal.ba11b96e.js",revision:null},{url:"assets/Modal.e1a1512a.js",revision:null},{url:"assets/model.f193bffa.js",revision:null},{url:"assets/ModelTest.36f46676.js",revision:null},{url:"assets/ModelUsdz.63ab77b0.js",revision:null},{url:"assets/navigation.467f94ce.js",revision:null},{url:"assets/NavigationBar.82ad8bc7.js",revision:null},{url:"assets/NavigationButton.4c800e89.js",revision:null},{url:"assets/NightLights.dc0c2796.js",revision:null},{url:"assets/nuxt-link.8c50d129.js",revision:null},{url:"assets/permission.dd244a3c.js",revision:null},{url:"assets/permissions.52412f1b.js",revision:null},{url:"assets/PlayRequirements.9587be21.js",revision:null},{url:"assets/preview.a2eb4179.js",revision:null},{url:"assets/ProseA.6a9dfa09.js",revision:null},{url:"assets/ProseBlockquote.573b4884.js",revision:null},{url:"assets/ProseCode.d252b909.js",revision:null},{url:"assets/ProseCode.e63e49c6.css",revision:null},{url:"assets/ProseCodeInline.782efbce.js",revision:null},{url:"assets/ProseEm.62ba0812.js",revision:null},{url:"assets/ProseH1.8891c81c.js",revision:null},{url:"assets/ProseH2.5a3d8ae3.js",revision:null},{url:"assets/ProseH3.ff98db25.js",revision:null},{url:"assets/ProseH4.b93c60ce.js",revision:null},{url:"assets/ProseH5.7e52c5e2.js",revision:null},{url:"assets/ProseH6.95961911.js",revision:null},{url:"assets/ProseHr.19da99e7.js",revision:null},{url:"assets/ProseImg.5cc35345.js",revision:null},{url:"assets/ProseLi.226fa690.js",revision:null},{url:"assets/ProseOl.00b68540.js",revision:null},{url:"assets/ProseP.a1f788b0.js",revision:null},{url:"assets/ProseStrong.99e14374.js",revision:null},{url:"assets/ProseTable.97e5ae89.js",revision:null},{url:"assets/ProseTbody.e992b068.js",revision:null},{url:"assets/ProseTd.5d60034d.js",revision:null},{url:"assets/ProseTh.90603a00.js",revision:null},{url:"assets/ProseThead.581abde4.js",revision:null},{url:"assets/ProseTr.f368c4d7.js",revision:null},{url:"assets/ProseUl.6c5fe359.js",revision:null},{url:"assets/PwaToast.dc04672c.js",revision:null},{url:"assets/query.7752cd5a.js",revision:null},{url:"assets/radar-sprite.8ee85c93.js",revision:null},{url:"assets/radar-sprite.93736867.css",revision:null},{url:"assets/Radar.1346d604.js",revision:null},{url:"assets/Radar.68c61281.css",revision:null},{url:"assets/radar.c997c4cb.js",revision:null},{url:"assets/Search.99af4aa0.js",revision:null},{url:"assets/SectionHeading.f020760d.js",revision:null},{url:"assets/setup.75a1a77c.js",revision:null},{url:"assets/Sphere.6b116025.js",revision:null},{url:"assets/swiped-events.3abf4776.js",revision:null},{url:"assets/Tests.bc7ffc68.js",revision:null},{url:"assets/tutorial.10b894f0.css",revision:null},{url:"assets/tutorial.d7db6810.js",revision:null},{url:"assets/tw-merge.1166cefb.js",revision:null},{url:"assets/utils.d4d61a44.js",revision:null},{url:"assets/workbox-window.prod.es5.a7b12eab.js",revision:null},{url:"credits",revision:"a4818b5464cb01b95a2c81e8617494c5"},{url:"/",revision:"4ccee572bfb078607fce2358c43208d3"},{url:"location/cala-banyalbufar",revision:"458984477faae4b9d4fb2ad4385194f7"},{url:"location/cala-banyalbufar/model",revision:"dbae43a99242bcf863e859a83bed6db0"},{url:"location/crowtec",revision:"3ed91565b0250702075503407ea974a7"},{url:"location/crowtec/model",revision:"571d7b812b85a2b9480c2d072fa2668b"},{url:"location",revision:"cd7203aa4d53a222d43ea2d34d47d1fd"},{url:"location/mercat-inca",revision:"0da9169647c6100a8b2bea4e57984d3d"},{url:"location/mercat-inca/model",revision:"5c05eace1a5c5ff93fb51e314d7fae54"},{url:"location/mercat-olivar",revision:"de7df673d12cdf7c5bda3d58e5275b23"},{url:"location/mercat-olivar/model",revision:"d7c543a7cd0a611f17fcec5dd4194822"},{url:"location/mercat-pere-garau",revision:"565afdaa16e853a32a58540eacc4b895"},{url:"location/mercat-pere-garau/model",revision:"2c51b80ba8f0ced024564a9d2fb8eb92"},{url:"location/mercat-sa-pobla",revision:"fb89714ff425510965f3f404f7f6d582"},{url:"location/mercat-sa-pobla/model",revision:"d9cbb207fb9cb2e6e25d183eab2e7886"},{url:"location/mercat-santa-catalina",revision:"ab62fe5805df822bd4cba7c383bd5778"},{url:"location/mercat-santa-catalina/model",revision:"c6c32e69a10611759debd2fb866d764a"},{url:"location/mercat-santa-maria-cami",revision:"075948020ec4417cf304da31cd3f2e9b"},{url:"location/mercat-santa-maria-cami/model",revision:"1c6f16dfe4a0cc8434023629bef5f52f"},{url:"location/mercat-sineu",revision:"c8a0e90102415a45e1bf0194fa2cf7db"},{url:"location/mercat-sineu/model",revision:"5190981a5f0ffb61c699d2aa16352145"},{url:"location/mercat-soller",revision:"2ceb9c2997be7b26f22363901e0d3723"},{url:"location/mercat-soller/model",revision:"a35e74f5ed344e271dc53bfb65221e85"},{url:"location/playa-es-trenc",revision:"bd9fc8f86fe32b6a3aea89ed8fdeb067"},{url:"location/playa-es-trenc/model",revision:"d444c263ba8aedb499c84714efbc004b"},{url:"location/playa-portals-nous",revision:"1cd1ee3e42ffe2836f41d5d4405d3998"},{url:"location/playa-portals-nous/model",revision:"2157a5af6b087d97f064951d1725c173"},{url:"location/playa-soller",revision:"3d188205c304581060a53f2a2c3eb9e8"},{url:"location/playa-soller/model",revision:"3cb6471d178ccebcae81e3207fee2253"},{url:"location/test",revision:"d7d44f8de15a2243e16c33ad7398acd4"},{url:"location/test/model",revision:"4cf12a22889e417d1fa458377053dc99"},{url:"location/urban-hostel-palma",revision:"a203358c687e62ee68b610cc0bc1d03e"},{url:"location/urban-hostel-palma/model",revision:"dbe67b8d85c1c37d5550fa598cb511e7"},{url:"map",revision:"8792bd8c47ab53f3ee6335d87fe02624"},{url:"permissions",revision:"e580528136d81f5c715e7be7cf79ef53"},{url:"showcase/divider",revision:"f15d2e9f1de1378ef3a401d7e8be556b"},{url:"showcase/heading",revision:"942f8e7534c77373804036639caa0959"},{url:"showcase",revision:"0ce71e59921f0bdcd319e10f0b6dc2cc"},{url:"showcase/modal",revision:"6789620017176bbe7bc141603bc221bc"},{url:"showcase/navigation",revision:"0d025145f898f2f8a07ae0f071292cbf"},{url:"showcase/radar-sprite",revision:"84ca0f3df38573710336a790bd599cd2"},{url:"showcase/radar",revision:"f9e7026a14336951c487eae5739fdfbf"},{url:"tutorial",revision:"2fd40993b14a119bb356b5810123462c"},{url:"favicon.ico",revision:"60980cf3ec659b1f8cacb9c1d87464fd"},{url:"apple-touch-icon.png",revision:"27eddf990ed9d07563f56fe88a479070"},{url:"maskable-icon.png",revision:"1bc5bd5f6f6f7077080da2d28b50a597"},{url:"manifest.webmanifest",revision:"832a102e24ac88412ce550358a7bb174"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("/")))}));
