importScripts('https://www.gstatic.com/firebasejs/9.2.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.2.0/firebase-messaging-compat.js');

const firebaseConfig = {
    apiKey: "AIzaSyC5RwVvxpCagyA_9_Lyi3JnhXa75x1XK40",
    authDomain: "do00w1l5.firebaseapp.com",
    projectId: "do00w1l5",
    storageBucket: "do00w1l5.appspot.com",
    messagingSenderId: "876062738663",
    appId: "1:876062738663:web:c5ebe35706e3275cfc7a42",
    measurementId: "G-YD1027JVEH"
};

const app = firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    // Customize notification here
    const notificationTitle = 'Background Message Title';
    const notificationOptions = {
        body: 'Background Message body.',
        // icon: '/icon.png'
    };
  
    self.registration.showNotification(notificationTitle,
        notificationOptions);
});