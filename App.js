/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
import { createBottomTabNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation';


import Users from './app/screens/Users';
import Chat from './app/screens/Chat';
import Settings from './app/screens/Settings';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});



const ChatNavigator = createSwitchNavigator({
    Users: Users,
    Chat: Chat
})

const ChatContainer = createAppContainer(ChatNavigator)

const TabNavigator = createBottomTabNavigator({
    Chat: ChatContainer,
    Settings: Settings
})

const AppContainer = createAppContainer(TabNavigator);

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
        <AppContainer />
    )
  }
}