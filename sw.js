if(!self.define){let s,e={};const l=(l,r)=>(l=new URL(l+".js",r).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(r,n)=>{const i=s||("document"in self?document.currentScript.src:"")||location.href;if(e[i])return;let a={};const u=s=>l(s,i),o={module:{uri:i},exports:a,require:u};e[i]=Promise.all(r.map((s=>o[s]||u(s)))).then((s=>(n(...s),a)))}}define(["./workbox-fa446783"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"200",revision:"c048afa8c4cd0e2a211fe5566d937333"},{url:"404",revision:"c048afa8c4cd0e2a211fe5566d937333"},{url:"assets/AframeTest.3b4726d6.js",revision:null},{url:"assets/AframeTest.b67cd480.css",revision:null},{url:"assets/ARModel.0483d185.js",revision:null},{url:"assets/Arrow.a9ccf358.js",revision:null},{url:"assets/BlurredCircle.56beb90b.js",revision:null},{url:"assets/Button.d57d7666.js",revision:null},{url:"assets/Card.ea66e276.js",revision:null},{url:"assets/client-db.77ae054b.js",revision:null},{url:"assets/client-only.a17f0af4.js",revision:null},{url:"assets/Compass.e0308f1c.js",revision:null},{url:"assets/CompassCardinalPoints.3b382c39.js",revision:null},{url:"assets/ContentDoc.9e405054.js",revision:null},{url:"assets/ContentList.8e9fa0be.js",revision:null},{url:"assets/ContentNavigation.ad46dadb.js",revision:null},{url:"assets/ContentQuery.4131ffb4.js",revision:null},{url:"assets/ContentRenderer.b39ccbdb.js",revision:null},{url:"assets/ContentRendererMarkdown.1b66cbbc.js",revision:null},{url:"assets/ContentSlot.c4c51a03.js",revision:null},{url:"assets/Cross.8fad995f.js",revision:null},{url:"assets/default.59e8c47c.js",revision:null},{url:"assets/Diamond.6d89e560.js",revision:null},{url:"assets/divider.8581e299.js",revision:null},{url:"assets/Divider.d12cabfe.js",revision:null},{url:"assets/DocumentDrivenEmpty.4701ba70.js",revision:null},{url:"assets/DocumentDrivenNotFound.2c580fe7.js",revision:null},{url:"assets/entry.23c98fe1.css",revision:null},{url:"assets/entry.44ca391d.js",revision:null},{url:"assets/error-404.1357db6e.js",revision:null},{url:"assets/error-404.8bdbaeb8.css",revision:null},{url:"assets/error-500.b63a96f5.css",revision:null},{url:"assets/error-500.f2c08bca.js",revision:null},{url:"assets/error-component.b1ccc51d.js",revision:null},{url:"assets/FountainTest.afd3e72b.js",revision:null},{url:"assets/heading.cca5038c.js",revision:null},{url:"assets/index.2dfcbaaf.js",revision:null},{url:"assets/index.86d592c2.js",revision:null},{url:"assets/index.8c5490aa.js",revision:null},{url:"assets/index.a6ef77ff.js",revision:null},{url:"assets/index.df5ea5da.js",revision:null},{url:"assets/LightComp.52f2e08c.js",revision:null},{url:"assets/Loader.0bce4094.css",revision:null},{url:"assets/Loader.c5522c28.js",revision:null},{url:"assets/location.24acc728.js",revision:null},{url:"assets/location.2b16b367.js",revision:null},{url:"assets/map-test.5c102fd9.js",revision:null},{url:"assets/map.495b898d.css",revision:null},{url:"assets/map.86cd7f7d.js",revision:null},{url:"assets/Map.a6e2e75b.js",revision:null},{url:"assets/Markdown.b0b31513.js",revision:null},{url:"assets/Marker.e8d7095c.js",revision:null},{url:"assets/Menu.0f66294a.js",revision:null},{url:"assets/modal.4699f80e.js",revision:null},{url:"assets/Modal.b040ea06.js",revision:null},{url:"assets/model.b43cf173.js",revision:null},{url:"assets/ModelTest.9268cdd9.js",revision:null},{url:"assets/ModelUsdz.84c80713.js",revision:null},{url:"assets/navigation.0a98f759.js",revision:null},{url:"assets/NavigationBar.264c5901.js",revision:null},{url:"assets/NavigationButton.f9cf76e7.js",revision:null},{url:"assets/nuxt-link.f6d80d91.js",revision:null},{url:"assets/permission.00b040b8.js",revision:null},{url:"assets/permissions.8bedbb16.js",revision:null},{url:"assets/preview.85c5cf32.js",revision:null},{url:"assets/ProseA.6b2fb2e2.js",revision:null},{url:"assets/ProseBlockquote.6a57f10c.js",revision:null},{url:"assets/ProseCode.5d09d42b.js",revision:null},{url:"assets/ProseCode.e63e49c6.css",revision:null},{url:"assets/ProseCodeInline.eebb7369.js",revision:null},{url:"assets/ProseEm.0a2511f8.js",revision:null},{url:"assets/ProseH1.0ec7d0cb.js",revision:null},{url:"assets/ProseH2.b74a4dc6.js",revision:null},{url:"assets/ProseH3.4878f2db.js",revision:null},{url:"assets/ProseH4.606174a6.js",revision:null},{url:"assets/ProseH5.f04b4698.js",revision:null},{url:"assets/ProseH6.b160086b.js",revision:null},{url:"assets/ProseHr.aa156813.js",revision:null},{url:"assets/ProseImg.1ed0ad80.js",revision:null},{url:"assets/ProseLi.25b0d9cc.js",revision:null},{url:"assets/ProseOl.8510fcef.js",revision:null},{url:"assets/ProseP.aac073c2.js",revision:null},{url:"assets/ProseStrong.d17f0313.js",revision:null},{url:"assets/ProseTable.619763cd.js",revision:null},{url:"assets/ProseTbody.d8bb6d6b.js",revision:null},{url:"assets/ProseTd.88598c1f.js",revision:null},{url:"assets/ProseTh.49068eff.js",revision:null},{url:"assets/ProseThead.3abcfa41.js",revision:null},{url:"assets/ProseTr.8177c44b.js",revision:null},{url:"assets/ProseUl.4b3148a4.js",revision:null},{url:"assets/query.e7f28131.js",revision:null},{url:"assets/radar.621017d9.js",revision:null},{url:"assets/Radar.68c61281.css",revision:null},{url:"assets/Radar.86456db8.js",revision:null},{url:"assets/Search.f8fe794f.js",revision:null},{url:"assets/SectionHeading.1651e68d.js",revision:null},{url:"assets/setup.75a1a77c.js",revision:null},{url:"assets/Sphere.6f493512.js",revision:null},{url:"assets/tw-merge.1166cefb.js",revision:null},{url:"assets/urban-hostel.11906fab.js",revision:null},{url:"assets/utils.a783483c.js",revision:null},{url:"assets/workbox-window.prod.es5.a7b12eab.js",revision:null},{url:"/mallorcaurbanexperience/",revision:"f963892db64bcc0f08d3285a8062dd33"},{url:"location",revision:"3d3abf8d8b8fb127c685e432c57b9136"},{url:"map-test",revision:"16a521298766529939f2adebf54a1753"},{url:"map",revision:"d725a4307d3fda11c7bcc776cfa62d14"},{url:"permissions",revision:"92a801d267c575b01a861d0893bde309"},{url:"showcase/divider",revision:"cee2db6a09c355d284ce7f3d3c61db4b"},{url:"showcase/heading",revision:"6e0adddca3625197d9b1d9f8bfd13854"},{url:"showcase",revision:"13fedd1898a8ec8b93a56f4c938ea3e2"},{url:"showcase/modal",revision:"1896a6ed256a312b1e294b71133af455"},{url:"showcase/navigation",revision:"f960572eae417f1bafdee09b848d97c7"},{url:"showcase/radar",revision:"bdbd5393a515c2035c1aea2433286869"},{url:"manifest.webmanifest",revision:"2cdab300b0d17b83a889b12758358421"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("/")))}));
