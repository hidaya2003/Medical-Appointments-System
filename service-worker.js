const CACHE_NAME = `my-app-cache-${new Date().getTime()}`;  // استخدام الوقت الحالي لإنشاء رقم النسخة الفريد
const urlsToCache = [
  '/',
  '/index.html',
  '/styles.css',
  '/app.js',
  '/icon-192.png',
  '/offline.html'
];

//  تحديث تلقائي عند التنصيب
self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Cache opened');
        return cache.addAll(urlsToCache);
      })
  );
});

//  تفعيل فوري لجميع الصفحات
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log(`Deleting old cache: ${cacheName}`);
            return caches.delete(cacheName); // مسح الكاش القديم
          }
        })
      );
    }).then(() => self.clients.claim()) // استخدام النسخة الجديدة فورًا
  );
});

//  التعامل مع الطلبات
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);  // محاولة جلب من الشبكة
      })
      .catch(() => {
        return caches.match('/offline.html');  // الرجوع لصفحة الـ offline في حالة الفشل
      })
  );
});