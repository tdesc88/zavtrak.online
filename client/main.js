import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { createSelector } from 'reselect'
import fecha from 'fecha';

import './main.html';
import '/imports/collections.js';

import { byteLength, str2rstr_utf8, hex_hmac_sha1, hex2bin } from '../imports/mac.js';
import * as firebase from 'firebase';

window.byteLength = byteLength;
window.str2rstr_utf8 = str2rstr_utf8;
window.hex_hmac_sha1 = hex_hmac_sha1;
window.hex2bin = hex2bin;

window.createSelector = createSelector;
window.fecha = fecha;
window.foodme = { version: "1.0.1"}
window.firebase = firebase;

var sendTokenToServer = function(token){
    var userId = Meteor.userId()
    if(token && userId)
    {
      console.log("#push sendTokenToServer",token)
      Meteor.call("user.subscription",userId,token,(err,res)=>console.log("User subscribed",err,res))            
    }else
    {
        console.log("#push token. no user logged yet", token)
    }
  }
  
function subscribe() {
    // запрашиваем разрешение на получение уведомлений
    var messaging = firebase.messaging();
    messaging.requestPermission()
        .then(function () {
            // получаем ID устройства
            messaging.getToken()
                .then(function (currentToken) {
                    console.log(currentToken);

                    if (currentToken) {
                        sendTokenToServer(currentToken);
                    } else {
                        console.warn('Не удалось получить токен.');
                        // setTokenSentToServer(false);
                    }
                })
                .catch(function (err) {
                    console.warn('При получении токена произошла ошибка.', err);
                    // setTokenSentToServer(false);
                });
    })
    .catch(function (err) {
        console.warn('Не удалось получить разрешение на показ уведомлений.', err);
    });
}

// Initialize Firebase
var config = {
    apiKey: "AIzaSyDlOXxYNQ1wvShvQPL5USKQg89mZh9VAcU",
    authDomain: "zavtrak-online.firebaseapp.com",
    databaseURL: "https://zavtrak-online.firebaseio.com",
    projectId: "zavtrak-online",
    storageBucket: "zavtrak-online.appspot.com",
    messagingSenderId: "637396873160"
};
firebase.initializeApp(config);

firebase.messaging().onTokenRefresh(function() {
    firebase.messaging().getToken()
    .then(function(refreshedToken) {
        console.log('Token refreshed.');
        // Indicate that the new Instance ID token has not yet been sent to the
        // app server.
        // Send Instance ID token to app server.
        sendTokenToServer(refreshedToken);
        // ...
    })
    .catch(function(err) {
        console.log('Unable to retrieve refreshed token ', err);
    });
});

if ('serviceWorker' in navigator && 'PushManager' in window) {
    console.log('Service Worker and Push is supported');
    navigator.serviceWorker.register('/firebase-messaging-sw.js').then((registration) => {
        // Registration was successful
        console.log('ServiceWorker firebase-messaging-sw.js registration successful with scope: ', registration.scope);
      //   firebase.messaging().useServiceWorker(registration);
      //   initialiseUI(registration);

      }).catch((err) => {
        // registration failed :(
        console.log('ServiceWorker registration failed: ', err);
      });
    
       // if ('serviceWorker' in navigator) {
              //   navigator.serviceWorker.register('service-worker.js', {scope: '/'});
              // }

    navigator.serviceWorker.register('service-worker.js').then((registration) => {
      // Registration was successful
      console.log('ServiceWorker sw.js registration successful with scope: ', registration.scope);
      subscribe()
    //   firebase.messaging().useServiceWorker(registration);
    //   initialiseUI(registration);

    }).catch((err) => {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
}