// service-worker.js
self.addEventListener('push', function(event) {
    const data = event.data.json();
    const options = {
      body: data.body,
      icon: '/icon.png', // Reemplaza esto con el ícono de tu app
      badge: '/badge.png', // Reemplaza esto con el ícono de la insignia (opcional)
    };
  
    event.waitUntil(
      self.registration.showNotification(data.title, options)
    );
  });
  
  self.addEventListener('notificationclick', function(event) {
    event.notification.close();
    event.waitUntil(
      clients.openWindow('/') // Cambia esto por la ruta que deseas abrir cuando se haga clic en la notificación
    );
  });
  