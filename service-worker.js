self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open('rapport-gen-cache').then((cache) => {
        return cache.addAll([
          '/',
          '/index.html',
          '/manifest.json',
          '/icon-192x192.png',
          '/icon-512x512.png',
          // Add other assets you need to cache here
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  });
  