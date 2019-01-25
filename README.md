# React Native Chat App
Messager chat app build with React Native.

## Table of Contents
* [About](#About)
* [Installation](#Installation)
* [Download](#Download)
* [Gallery](#Gallery)



## About
I had read about React Native in a few online articles and wanted to give it a try.

The app is connected to a [backend](https://raw.githubusercontent.com/CallumM1999/chat-server) powered by Node.js, Socketio and MongoDB.

To register an account, the app redirects the user to a Vue powered form.

[Register](https://nameless-reef-89192.herokuapp.com/register)


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

### Download

Download latest APK from Google Drive.

[Link](https://drive.google.com/open?id=1LEQjy7jlliwl7-O1qQRqCE2j0t3S1zaU)

### Gallery
<img src="https://raw.githubusercontent.com/CallumM1999/react-native-chat-app/master/readme_assets/login.png" width='32%'></img>
<img src="https://raw.githubusercontent.com/CallumM1999/react-native-chat-app/master/readme_assets/dashboard_empty.png" width='32%'></img>
<img src="https://raw.githubusercontent.com/CallumM1999/react-native-chat-app/master/readme_assets/dashboard.png" width='32%'></img>
<img src="https://raw.githubusercontent.com/CallumM1999/react-native-chat-app/master/readme_assets/chat.png" width='33%'></img>
<img src="https://raw.githubusercontent.com/CallumM1999/react-native-chat-app/master/readme_assets/find_search.png" width='32%'></img>
<img src="https://raw.githubusercontent.com/CallumM1999/react-native-chat-app/master/readme_assets/find_online.png" width='32%'></img>
<img src="https://raw.githubusercontent.com/CallumM1999/react-native-chat-app/master/readme_assets/settings.png" width='32%'></img>
<img src="https://raw.githubusercontent.com/CallumM1999/react-native-chat-app/master/readme_assets/settings_delete.png" width='32%'></img>
