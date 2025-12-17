const CACHE_NAME = 'license-plate-spotter-v2.1.0-mobile';
const urlsToCache = [
  './',
  './index.html',
  './standalone-game.html',
  './styles.css',
  './script.js',
  './pwa-install.js',
  './manifest.json',
  './usa-map.svg',
  './canada-map.svg',
  './mexico-map.svg',
  // Icons
  './icons/icon-192x192.png',
  './icons/icon-512x512.png',
  // External resources (will be cached when accessed)
  'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
];

// Install event - cache resources
self.addEventListener('install', (event) => {
  console.log('Service Worker: Install event');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Service Worker: Caching files');
        return cache.addAll(urlsToCache);
      })
      .then(() => {
        console.log('Service Worker: All files cached');
        return self.skipWaiting();
      })
      .catch((error) => {
        console.log('Service Worker: Cache failed', error);
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('Service Worker: Activate event');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Service Worker: Deleting old cache', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      console.log('Service Worker: Claiming clients');
      return self.clients.claim();
    })
  );
});

// Fetch event - CACHE FIRST, truly offline approach
self.addEventListener('fetch', (event) => {
  // Skip non-GET requests
  if (event.request.method !== 'GET') {
    return;
  }

  // Skip chrome-extension and other non-http requests
  if (!event.request.url.startsWith('http')) {
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // ALWAYS return cached version if available (offline-first)
        if (response) {
          console.log('Service Worker: Serving from cache (offline-first)', event.request.url);
          return response;
        }

        // Only try network if no cache AND we're online
        if (navigator.onLine) {
          console.log('Service Worker: Not in cache, trying network', event.request.url);
          return fetch(event.request).then((response) => {
            // Don't cache non-successful responses
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // Clone the response
            const responseToCache = response.clone();

            // Add to cache for future use
            caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(event.request, responseToCache);
              });

            return response;
          }).catch((error) => {
            console.log('Service Worker: Network fetch failed', error);
            return handleOfflineRequest(event.request);
          });
        } else {
          // We're offline and no cache - handle gracefully
          console.log('Service Worker: Offline and no cache for', event.request.url);
          return handleOfflineRequest(event.request);
        }
      })
  );
});

// Handle requests when offline and not in cache
function handleOfflineRequest(request) {
  // For navigation requests, return the main app
  if (request.destination === 'document') {
    return caches.match('./index.html').then(response => {
      if (response) return response;
      return caches.match('./standalone-game.html');
    });
  }
  
  // For other requests, return a simple offline response
  return new Response('Offline - resource not cached', {
    status: 503,
    statusText: 'Service Unavailable',
    headers: new Headers({
      'Content-Type': 'text/plain'
    })
  });
}

// Background sync for saving game data when back online
self.addEventListener('sync', (event) => {
  if (event.tag === 'background-sync') {
    console.log('Service Worker: Background sync triggered');
    event.waitUntil(
      // Here you could sync saved game data to a server
      // For now, we'll just log it
      Promise.resolve().then(() => {
        console.log('Service Worker: Background sync completed');
      })
    );
  }
});

// Push notifications (for future features)
self.addEventListener('push', (event) => {
  console.log('Service Worker: Push event received');
  
  const options = {
    body: event.data ? event.data.text() : 'New license plate spotted!',
    icon: './icons/icon-192x192.png',
    badge: './icons/icon-72x72.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      {
        action: 'explore',
        title: 'Open App',
        icon: './icons/icon-192x192.png'
      },
      {
        action: 'close',
        title: 'Close',
        icon: './icons/icon-192x192.png'
      }
    ]
  };

  event.waitUntil(
    self.registration.showNotification('License Plate Spotter', options)
  );
});

// Handle notification clicks
self.addEventListener('notificationclick', (event) => {
  console.log('Service Worker: Notification click received');
  
  event.notification.close();

  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('./')
    );
  }
});

// Handle app shortcuts
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

console.log('Service Worker: Script loaded');
