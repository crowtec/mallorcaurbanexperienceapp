if(!self.define){let s,e={};const l=(l,r)=>(l=new URL(l+".js",r).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(r,i)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let a={};const o=s=>l(s,n),u={module:{uri:n},exports:a,require:o};e[n]=Promise.all(r.map((s=>u[s]||o(s)))).then((s=>(i(...s),a)))}}define(["./workbox-fa446783"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"200",revision:"3e0df2ea184a554e8dfd948c18c3a563"},{url:"404",revision:"3e0df2ea184a554e8dfd948c18c3a563"},{url:"assets/AframeTest.b67cd480.css",revision:null},{url:"assets/AframeTest.dcff47a1.js",revision:null},{url:"assets/ARModel.0d83b067.js",revision:null},{url:"assets/Arrow.d98300c0.js",revision:null},{url:"assets/BlurredCircle.bee97e22.js",revision:null},{url:"assets/Button.b7de0431.js",revision:null},{url:"assets/Card.2459f504.js",revision:null},{url:"assets/client-db.d9cb7e19.js",revision:null},{url:"assets/client-only.9e863362.js",revision:null},{url:"assets/Compass.0bb90108.js",revision:null},{url:"assets/CompassCardinalPoints.6f24af56.js",revision:null},{url:"assets/ContentDoc.d277ec39.js",revision:null},{url:"assets/ContentList.de3a1d9f.js",revision:null},{url:"assets/ContentNavigation.15adfb39.js",revision:null},{url:"assets/ContentQuery.8c12f4c6.js",revision:null},{url:"assets/ContentRenderer.639fd602.js",revision:null},{url:"assets/ContentRendererMarkdown.68ea3330.js",revision:null},{url:"assets/ContentSlot.572fab1f.js",revision:null},{url:"assets/Cross.39057a20.js",revision:null},{url:"assets/default.cbb09386.js",revision:null},{url:"assets/Diamond.ff55be16.js",revision:null},{url:"assets/Divider.10e56c6d.js",revision:null},{url:"assets/divider.27422b16.js",revision:null},{url:"assets/DocumentDrivenEmpty.35e823d9.js",revision:null},{url:"assets/DocumentDrivenNotFound.aff2919b.js",revision:null},{url:"assets/entry.23c98fe1.css",revision:null},{url:"assets/entry.d5d2b504.js",revision:null},{url:"assets/error-404.8bdbaeb8.css",revision:null},{url:"assets/error-404.c5c6e488.js",revision:null},{url:"assets/error-500.9aab527e.js",revision:null},{url:"assets/error-500.b63a96f5.css",revision:null},{url:"assets/error-component.1e40aea2.js",revision:null},{url:"assets/FountainTest.0380d5c9.js",revision:null},{url:"assets/heading.1a526b09.js",revision:null},{url:"assets/index.4a698a3d.js",revision:null},{url:"assets/index.4dd846e1.js",revision:null},{url:"assets/index.a6ef77ff.js",revision:null},{url:"assets/index.ab809b19.js",revision:null},{url:"assets/index.c28dd5f0.js",revision:null},{url:"assets/LightComp.c7b7d769.js",revision:null},{url:"assets/Loader.0bce4094.css",revision:null},{url:"assets/Loader.cab9d1dc.js",revision:null},{url:"assets/location.2b16b367.js",revision:null},{url:"assets/location.7c6a2e82.js",revision:null},{url:"assets/map-test.9f58bf4c.js",revision:null},{url:"assets/map.495b898d.css",revision:null},{url:"assets/map.78d75e47.js",revision:null},{url:"assets/Map.d652c05b.js",revision:null},{url:"assets/Markdown.dc39af44.js",revision:null},{url:"assets/Marker.d397ed2e.js",revision:null},{url:"assets/Menu.ad5353ae.js",revision:null},{url:"assets/Modal.8e170f26.js",revision:null},{url:"assets/modal.e81942b1.js",revision:null},{url:"assets/model.8889c46d.js",revision:null},{url:"assets/ModelTest.da7f44ae.js",revision:null},{url:"assets/ModelUsdz.d8d01c38.js",revision:null},{url:"assets/navigation.ff48febe.js",revision:null},{url:"assets/NavigationBar.3eaf9c3d.js",revision:null},{url:"assets/NavigationButton.145b2881.js",revision:null},{url:"assets/nuxt-link.0b208abf.js",revision:null},{url:"assets/permission.00b040b8.js",revision:null},{url:"assets/permissions.d4a8e053.js",revision:null},{url:"assets/preview.cd871147.js",revision:null},{url:"assets/ProseA.9a699ecd.js",revision:null},{url:"assets/ProseBlockquote.b778b7a2.js",revision:null},{url:"assets/ProseCode.c8377109.js",revision:null},{url:"assets/ProseCode.e63e49c6.css",revision:null},{url:"assets/ProseCodeInline.a778d1d7.js",revision:null},{url:"assets/ProseEm.8063f450.js",revision:null},{url:"assets/ProseH1.42ffa7a4.js",revision:null},{url:"assets/ProseH2.02a17959.js",revision:null},{url:"assets/ProseH3.39adcaae.js",revision:null},{url:"assets/ProseH4.6509d603.js",revision:null},{url:"assets/ProseH5.c5606eb0.js",revision:null},{url:"assets/ProseH6.57b46e5c.js",revision:null},{url:"assets/ProseHr.730f08d2.js",revision:null},{url:"assets/ProseImg.3c681623.js",revision:null},{url:"assets/ProseLi.b335205d.js",revision:null},{url:"assets/ProseOl.16bf06b2.js",revision:null},{url:"assets/ProseP.8fc468c0.js",revision:null},{url:"assets/ProseStrong.b7f5f64c.js",revision:null},{url:"assets/ProseTable.a827fb35.js",revision:null},{url:"assets/ProseTbody.004fe45a.js",revision:null},{url:"assets/ProseTd.89dd9215.js",revision:null},{url:"assets/ProseTh.825470b4.js",revision:null},{url:"assets/ProseThead.9239384e.js",revision:null},{url:"assets/ProseTr.b8d73a27.js",revision:null},{url:"assets/ProseUl.fb34e3fd.js",revision:null},{url:"assets/query.a54ca895.js",revision:null},{url:"assets/Radar.53ecbbc9.js",revision:null},{url:"assets/Radar.68c61281.css",revision:null},{url:"assets/radar.d1896adc.js",revision:null},{url:"assets/Search.8dd261e0.js",revision:null},{url:"assets/SectionHeading.02ae1d2c.js",revision:null},{url:"assets/setup.75a1a77c.js",revision:null},{url:"assets/Sphere.4b7c2246.js",revision:null},{url:"assets/tw-merge.1166cefb.js",revision:null},{url:"assets/urban-hostel.a22d230a.js",revision:null},{url:"assets/utils.99b3029e.js",revision:null},{url:"assets/workbox-window.prod.es5.a7b12eab.js",revision:null},{url:"/",revision:"c4423097f3cb353226399def8d8cc333"},{url:"location/cala-banyalbufar",revision:"fdbc4283dde1602c9ceb8b6f256a883d"},{url:"location",revision:"e2083891e9a7d97877a734cd7e757df3"},{url:"location/mercat-inca",revision:"e499054fffdb6702648cab366dd56a36"},{url:"location/mercat-olivar",revision:"80d2d7dfc3181ae55b90de58b09cbcf9"},{url:"location/mercat-pere-garau",revision:"06d25cb183dbdfc791878025cdc7903b"},{url:"location/mercat-sa-pobla",revision:"4f0278dbf51810f2762513804c35d976"},{url:"location/mercat-santa-catalina",revision:"0e9052ef2c7ceca945757dd0010865f4"},{url:"location/mercat-santa-maria-cami",revision:"2f405abbc70cb95825b67b05b8fd1759"},{url:"location/mercat-sineu",revision:"391cb50e6d087eaa8dc5b90d4ac038d0"},{url:"location/mercat-soller",revision:"47da6ecfa651e3cd5f3e7e86a9074dee"},{url:"location/playa-es-trenc",revision:"24ef1581f0a9e674fb890ef28ba81c77"},{url:"location/playa-portals-nous",revision:"360d5a5d500de0991e209c6328672837"},{url:"location/playa-soller",revision:"66ae631e5a850e2d10f3536cac055ab0"},{url:"location/test",revision:"40fe15b87d870bf8f298f3f9c45f491b"},{url:"location/urban-hostel-palma",revision:"beaf1c94a805772cf026ea91ce6be67a"},{url:"map-test",revision:"1465ae36873e7f93321667be602560bd"},{url:"map",revision:"e8af08da2d3539ad0cf5f74fbfc906fa"},{url:"permissions",revision:"c95d89af6e278e5d8853f941ef4b49ef"},{url:"showcase/divider",revision:"7ea8bafd68430a5f32547a630ae92bc4"},{url:"showcase/heading",revision:"0d2ee3e82589efcbdbcefd149561ebb8"},{url:"showcase",revision:"2c826f5933196d6e1102572bf37e9320"},{url:"showcase/modal",revision:"84379d81569bd0c7522544d20ddcbcaa"},{url:"showcase/navigation",revision:"096bd23482a0f2d8732191d5daccb567"},{url:"showcase/radar",revision:"6af10b325e09bde81587c9172a739969"},{url:"manifest.webmanifest",revision:"5837c9bc41a9b16302630a67aefa28c2"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("/")))}));
