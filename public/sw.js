const CACHE_NAME = 'eva-portfolio-v1';
const urlsToCache = [
  '/',
  '/academics',
  '/leadership',
  '/community',
  '/skills',
  '/awards',
  '/youtube',
  '/reflections',
  '/manifest.json',
  // Add critical CSS and JS files
  '/_next/static/css/',
  '/_next/static/js/',
  // Add critical images
  'https://res.cloudinary.com/dqv4mucxh/image/upload/v1758997183/eva_m1yafy.jpg',
  'https://res.cloudinary.com/dqv4mucxh/image/upload/v1759008695/About_Me_vjwifi.png',
  'https://res.cloudinary.com/dqv4mucxh/image/upload/v1759008710/Academics_Research_Activities_qfuz07.png',
  'https://res.cloudinary.com/dqv4mucxh/image/upload/v1759008687/Leadership_Activities_nsnvgv.png',
  'https://res.cloudinary.com/dqv4mucxh/image/upload/v1759008703/Community_Impact_jgtfmp.png',
  'https://res.cloudinary.com/dqv4mucxh/image/upload/v1759008692/Skills_Interests_iaaxxa.png',
  'https://res.cloudinary.com/dqv4mucxh/image/upload/v1759008704/Awards_Media_Recognition_mffpnj.png',
  'https://res.cloudinary.com/dqv4mucxh/image/upload/v1759008687/Reflections_g1ubec.png'
];

// Install event - cache resources
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// Fetch event - serve from cache when offline
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached version or fetch from network
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
