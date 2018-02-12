
App.info({
    id: 'com.moscowno1.zavtrak-online',
    name: 'zavtrak.online',
    version: '1.0',
    buildNumber: '2.0.1'
});

// Set PhoneGap/Cordova preferences
App.setPreference('BackgroundColor', '0xff0000ff');
App.setPreference('StatusBarOverlaysWebView', false);
App.setPreference('StatusBarStyle', 'lightcontent');
App.setPreference('StatusBarBackgroundColor', '#000000');
App.setPreference('HideKeyboardFormAccessoryBar', true);

App.accessRule('https://vk.com');
App.accessRule('https://api-maps.yandex.ru');
App.accessRule('https://www.google-analytics.com');
App.accessRule('https://zavtrak-online.firebaseapp.com');

App.setPreference('NSBluetoothPeripheralUsageDescription', 'This app is using bluetooth');
App.setPreference('NSCalendarsUsageDescription', 'This app is using calendars');
App.setPreference('NSCameraUsageDescription', 'This app is using camera');
App.setPreference('NSLocationWhenInUseUsageDescription', 'This app is using location');
App.setPreference('UIApplicationExitsOnSuspend', false);


