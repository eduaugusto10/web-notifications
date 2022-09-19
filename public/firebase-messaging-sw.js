// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/9.9.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.9.0/firebase-messaging-compat.js');

// Initialize the Firebase app in the service worker by passing the generated config
var firebaseConfig = {
  apiKey: "AIzaSyC4OZccdbspPW0THvfrK6F7I6-mceNS-ys",
  authDomain: "notificacao-web-78d00.firebaseapp.com",
  projectId: "notificacao-web-78d00",
  storageBucket: "notificacao-web-78d00.appspot.com",
  messagingSenderId: "420688587471",
  appId: "1:420688587471:web:8ac8d02a7ec9825e09a5ba"
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});