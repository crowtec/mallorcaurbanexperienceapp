if(!self.define){let s,e={};const l=(l,r)=>(l=new URL(l+".js",r).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(r,i)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let a={};const u=s=>l(s,n),o={module:{uri:n},exports:a,require:u};e[n]=Promise.all(r.map((s=>o[s]||u(s)))).then((s=>(i(...s),a)))}}define(["./workbox-27b29e6f"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"_index",revision:"2f96bc9e9eaf0a07a2f2708dec36de12"},{url:"200",revision:"12029be45309187d6ccc232bdb5e74de"},{url:"404",revision:"12029be45309187d6ccc232bdb5e74de"},{url:"assets/_index.cc564164.js",revision:null},{url:"assets/_plugin-vue_export-helper.c27b6911.js",revision:null},{url:"assets/AFrameMap.ce32ced4.js",revision:null},{url:"assets/AframeTest.1eb5d8a8.js",revision:null},{url:"assets/AframeTest.b67cd480.css",revision:null},{url:"assets/ARModel.3b29b393.js",revision:null},{url:"assets/ARModelViewer.49f2ad54.css",revision:null},{url:"assets/ARModelViewer.67d51eb0.js",revision:null},{url:"assets/Arrow.2536190b.js",revision:null},{url:"assets/ArrowLarge.01ef4080.js",revision:null},{url:"assets/Backup.f9cadd63.js",revision:null},{url:"assets/BlurredCircle.e655e43a.js",revision:null},{url:"assets/Button.e2ac173b.js",revision:null},{url:"assets/Card.e2b7f229.js",revision:null},{url:"assets/client-db.76127590.js",revision:null},{url:"assets/client-only.ec04818c.js",revision:null},{url:"assets/Compass.db283599.js",revision:null},{url:"assets/CompassCardinalPoints.c543ee8e.js",revision:null},{url:"assets/ContentDoc.d94160da.js",revision:null},{url:"assets/ContentList.0fafeafd.js",revision:null},{url:"assets/ContentNavigation.66e77ddf.js",revision:null},{url:"assets/ContentQuery.9d0291a5.js",revision:null},{url:"assets/ContentRenderer.83f9177c.js",revision:null},{url:"assets/ContentRendererMarkdown.8342ecad.js",revision:null},{url:"assets/ContentSlot.a82d12ba.js",revision:null},{url:"assets/credits.ff224318.js",revision:null},{url:"assets/Cross.3389977c.js",revision:null},{url:"assets/DayLights.23dec3f1.js",revision:null},{url:"assets/default.86334357.js",revision:null},{url:"assets/Diamond.1145db3c.js",revision:null},{url:"assets/Divider.4a7ce248.js",revision:null},{url:"assets/divider.a8648afe.js",revision:null},{url:"assets/DocumentDrivenEmpty.afa3bf58.js",revision:null},{url:"assets/DocumentDrivenNotFound.2d1c8e88.js",revision:null},{url:"assets/entry.4cfd4e99.css",revision:null},{url:"assets/error-404.8bdbaeb8.css",revision:null},{url:"assets/error-404.e8cacac3.js",revision:null},{url:"assets/error-500.298f13cc.js",revision:null},{url:"assets/error-500.b63a96f5.css",revision:null},{url:"assets/error-component.4e37f49f.js",revision:null},{url:"assets/FountainTest.72b1f1cc.js",revision:null},{url:"assets/heading.3490b4dc.js",revision:null},{url:"assets/index.3436c447.js",revision:null},{url:"assets/index.4db78ffb.js",revision:null},{url:"assets/index.6592216b.js",revision:null},{url:"assets/index.7047533b.js",revision:null},{url:"assets/index.a6ef77ff.js",revision:null},{url:"assets/index.b2a1fba3.js",revision:null},{url:"assets/Intersect.9c8b9a31.js",revision:null},{url:"assets/Light.4d87b35c.js",revision:null},{url:"assets/Loader.0bce4094.css",revision:null},{url:"assets/Loader.ba6f7e37.js",revision:null},{url:"assets/location.2bcde139.js",revision:null},{url:"assets/LocationFound.3889a091.js",revision:null},{url:"assets/Logo.f4bae92b.js",revision:null},{url:"assets/map-test.05eca761.js",revision:null},{url:"assets/map.01736234.js",revision:null},{url:"assets/map.736feb1b.css",revision:null},{url:"assets/map.7747db05.js",revision:null},{url:"assets/map.7b1fde57.js",revision:null},{url:"assets/Map.be12889c.js",revision:null},{url:"assets/Markdown.3bb33ba1.js",revision:null},{url:"assets/Marker.1a4cc249.js",revision:null},{url:"assets/Menu.0afd1a5a.js",revision:null},{url:"assets/Menu.40f372f0.js",revision:null},{url:"assets/modal.9cec0318.js",revision:null},{url:"assets/Modal.b0fa8e87.js",revision:null},{url:"assets/model.3ebada76.js",revision:null},{url:"assets/ModelTest.3a88f125.js",revision:null},{url:"assets/ModelUsdz.8916a038.js",revision:null},{url:"assets/navigation.40de2c97.js",revision:null},{url:"assets/NavigationBar.97e80399.js",revision:null},{url:"assets/NavigationButton.9216574b.js",revision:null},{url:"assets/NightLights.3c4ca20c.js",revision:null},{url:"assets/nuxt-link.4b9e020a.js",revision:null},{url:"assets/permission.dd244a3c.js",revision:null},{url:"assets/permissions.efdfd46b.js",revision:null},{url:"assets/preview.486fe16e.js",revision:null},{url:"assets/ProseA.d5dda002.js",revision:null},{url:"assets/ProseBlockquote.252c98b5.js",revision:null},{url:"assets/ProseCode.69b7c89a.js",revision:null},{url:"assets/ProseCode.e63e49c6.css",revision:null},{url:"assets/ProseCodeInline.5afa12ed.js",revision:null},{url:"assets/ProseEm.32be391a.js",revision:null},{url:"assets/ProseH1.4b9a218c.js",revision:null},{url:"assets/ProseH2.6c7aeb2d.js",revision:null},{url:"assets/ProseH3.6bc18e6b.js",revision:null},{url:"assets/ProseH4.7992b287.js",revision:null},{url:"assets/ProseH5.d18e82e5.js",revision:null},{url:"assets/ProseH6.a46f9195.js",revision:null},{url:"assets/ProseHr.b8995110.js",revision:null},{url:"assets/ProseImg.46935dc5.js",revision:null},{url:"assets/ProseLi.435b2829.js",revision:null},{url:"assets/ProseOl.13527fcd.js",revision:null},{url:"assets/ProseP.416ad844.js",revision:null},{url:"assets/ProseStrong.699da598.js",revision:null},{url:"assets/ProseTable.ab6efca7.js",revision:null},{url:"assets/ProseTbody.3c67a2c0.js",revision:null},{url:"assets/ProseTd.58491e54.js",revision:null},{url:"assets/ProseTh.539dff24.js",revision:null},{url:"assets/ProseThead.b51b8f74.js",revision:null},{url:"assets/ProseTr.06250e45.js",revision:null},{url:"assets/ProseUl.4541af6f.js",revision:null},{url:"assets/query.32d787d9.js",revision:null},{url:"assets/radar-sprite.0c0a8a48.js",revision:null},{url:"assets/radar-sprite.93736867.css",revision:null},{url:"assets/Radar.68c61281.css",revision:null},{url:"assets/radar.aaa34792.js",revision:null},{url:"assets/Radar.f24c95e8.js",revision:null},{url:"assets/Search.897f0092.js",revision:null},{url:"assets/SectionHeading.e7e3c7af.js",revision:null},{url:"assets/setup.75a1a77c.js",revision:null},{url:"assets/Sphere.5b670d36.js",revision:null},{url:"assets/swiped-events.3abf4776.js",revision:null},{url:"assets/Tests.d4ca81c8.js",revision:null},{url:"assets/tutorial.10b894f0.css",revision:null},{url:"assets/tutorial.db1a582c.js",revision:null},{url:"assets/tw-merge.1166cefb.js",revision:null},{url:"assets/utils.a2af2285.js",revision:null},{url:"assets/workbox-window.prod.es5.a7b12eab.js",revision:null},{url:"credits",revision:"c79539c47502f1af24652a23d1b6d184"},{url:"/",revision:"72e420e1b0088b8335f8fda4f2c63915"},{url:"location",revision:"0942928e3a6091b936fefc388b9108ca"},{url:"map-test",revision:"775d29eabc15ef9ef9764a67f6892db7"},{url:"map",revision:"bf073339b041cb88dac82c00d0b3e219"},{url:"permissions",revision:"3ce2907524260722d5b64a49425adf1a"},{url:"showcase/divider",revision:"eb01270f728d73db1fc1119d0eb20ad7"},{url:"showcase/heading",revision:"156ec2a69cfacefb270b9c7cba0f8254"},{url:"showcase",revision:"6078a3959122be6f928e5482c43e8b96"},{url:"showcase/modal",revision:"d9cce05122561a0123f563a95e28fc23"},{url:"showcase/navigation",revision:"d151b99f667a7ace8eca3d70a8e16f09"},{url:"showcase/radar-sprite",revision:"e115376d98167d6d057b211ed8214694"},{url:"showcase/radar",revision:"1f4fe539329d64422c2d457d1c705361"},{url:"tutorial",revision:"6fe267ad089a474da26b4b2eba250793"},{url:"manifest.webmanifest",revision:"f2d82be8d547b6cb18a0719b317cb135"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("/")))}));
