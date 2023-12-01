// service-worker.js
self.addEventListener('push', (event) => {
    const options = {
        body: event.data.text(),
        icon: '/icon.png',
        badge: '/badge.png', // Optional
    };

    event.waitUntil(
        self.registration.showNotification('Simple PWA', options)
    );
});

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('simple-pwa-v1').then((cache) => {
            return cache.addAll([
                '/',
                '/index.html',
                '/manifest.json',
                '/icon.png',
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