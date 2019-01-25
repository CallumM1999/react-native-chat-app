# React Native Chat App
Messager chat app build with React Native.

## Table of Contents
* [About](#About)
* [Installation](#Installation)
* [Gallery](#Gallery)



## About
I had read about React Native in a few online articles and wanted to give it a try.

The app is connected to a [backend](https://github.com/CallumM1999/chat-server) powered by Node.js, Socketio and MongoDB.

## Installation
### Prerequisites
```
nodeJS
npm or yarn
Android Studio

```


### Installing Environment
#### Setup Android Studio
Follow the instuctions on the [React Native](https://facebook.github.io/react-native/docs/getting-started.html) website. Follow the **Building Projects with Native Code** tab.

Initialize package manager
```
yarn
```


You need to add or edit the file **/android/local.properties**.
Replace the path with the location of Android Studio SDK's.
```
sdk.dir = /home/cal/Android/Sdk
```

#### Development

```
react-native run-android
```

```
react-native log-android
```

#### Build APK
```
cd android
```
```
./gradlew assembleRelease
```

### Gallery
Login Page
<img src="https://github.com/CallumM1999/react-native-chat-app/readme_assets/login.png"></img>



Find Users - Search
<img src="https://github.com/CallumM1999/react-native-chat-app/readme_assets/find_search.png"></img>

Find Users - Online
<img src="https://github.com/CallumM1999/react-native-chat-app/readme_assets/find_online.png"></img>

Dashboard - Empty
<img src="https://github.com/CallumM1999/react-native-chat-app/readme_assets/dashboard_empty.png"></img>

Dashboard
<img src="https://github.com/CallumM1999/react-native-chat-app/readme_assets/dashboard.png"></img>

Chat
<img src="https://github.com/CallumM1999/react-native-chat-app/readme_assets/chat.png"></img>

Settings
<img src="https://github.com/CallumM1999/react-native-chat-app/readme_assets/settings.png"></img>

Settings Delete
<img src="https://github.com/CallumM1999/react-native-chat-app/readme_assets/settings_delete.png"></img>

Notification
<img src="https://github.com/CallumM1999/react-native-chat-app/readme_assets/login.png"></img>
