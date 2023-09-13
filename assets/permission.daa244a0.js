var l=Object.defineProperty;var g=(i,t,e)=>t in i?l(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var u=(i,t,e)=>(g(i,typeof t!="symbol"?t+"":t,e),e);const a=class{static getCurrentLocation(){return new Promise(t=>{navigator.geolocation.getCurrentPosition(function(e){console.log("position"),console.log(e),t({lat:e.coords.latitude,lng:e.coords.longitude})},function(e){console.error(e),t()},{enableHighAccuracy:!0,timeout:5e3,maximumAge:0})})}static toRad(t){return t*Math.PI/180}static calculateDistanceBetweenCoordinates(t,e){const s=a.toRad(e.lat-t.lat),r=a.toRad(e.lng-t.lng),c=Math.sin(s/2)**2+Math.cos(a.toRad(t.lat))*Math.cos(a.toRad(e.lat))*Math.sin(r/2)**2;return 6371*(2*Math.atan2(Math.sqrt(c),Math.sqrt(1-c)))}static nearbyLocation(t,e,n=a.NEARBY_DISTANCE_IN_KM){return a.calculateDistanceBetweenCoordinates(t,e)<=n}};let o=a;u(o,"NEARBY_DISTANCE_IN_KM",1.5);class h{static requestCamera(){return new Promise((t,e)=>{navigator.mediaDevices.getUserMedia({video:!0}).then(()=>{t(!0)}).catch(n=>{console.error(n),t(!1)})})}static requestDeviceOrientation(){return new Promise((t,e)=>{typeof DeviceOrientationEvent<"u"&&typeof DeviceOrientationEvent.requestPermission=="function"?DeviceOrientationEvent.requestPermission().then(n=>{t(n=="granted")}).catch(n=>{console.error(n),t(!1)}):t(!1)})}static requestLocation(){return new Promise((t,e)=>{navigator.permissions&&navigator.permissions.query?navigator.permissions.query({name:"geolocation"}).then(function(n){const s=n.state;console.log("permission"),console.log(s),s==="granted"?t(!0):s==="prompt"?o.getCurrentLocation().then(r=>t(r!==void 0)):t(!1)}):navigator.geolocation?o.getCurrentLocation().then(n=>t(n!==void 0)):t(!1)})}}export{o as L,h as P};
