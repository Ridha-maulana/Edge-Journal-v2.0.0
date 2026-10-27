const C='edge-journal-v21';
const SHELL=['./','./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png','./icon-maskable-v3-512.png','./cloud-sync.js','./firebase-config.js','./login-art.webp'];
const CDN=['https://cdnjs.cloudflare.com/ajax/libs/react/18.3.1/umd/react.production.min.js','https://cdnjs.cloudflare.com/ajax/libs/react-dom/18.3.1/umd/react-dom.production.min.js'];
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(C).then(c=>Promise.all([
  ...SHELL.map(u=>fetch(new Request(u,{cache:'reload'})).then(r=>{if(r&&r.ok)return c.put(u,r)}).catch(()=>{})),
  ...CDN.map(u=>fetch(new Request(u,{mode:'no-cors'})).then(r=>c.put(u,r)).catch(()=>{}))])));});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==C).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
/* Cache dulu (cepat), lalu perbarui di belakang layar. Untuk berkas milik sendiri, pembaruan selalu memeriksa server
   (cache:'no-cache') agar tidak tertahan cache HTTP GitHub Pages (±10 menit) atau cache browser. */
self.addEventListener('fetch',e=>{
  const req=e.request;
  if(req.method!=='GET')return;
  const u=new URL(req.url);
  if(u.protocol!=='http:'&&u.protocol!=='https:')return;
  const same=u.origin===self.location.origin;
  e.respondWith(caches.open(C).then(async cache=>{
    const cached=await cache.match(req,{ignoreSearch:req.mode==='navigate'});
    const net=(same?fetch(req.url,{cache:'no-cache'}):fetch(req)).then(r=>{if(r&&(r.ok||r.type==='opaque'))cache.put(req,r.clone()).catch(()=>{});return r;}).catch(()=>null);
    if(cached){e.waitUntil(net);return cached;}
    return (await net)||(req.mode==='navigate'?await cache.match('./index.html'):null)||Response.error();
  }));
});
