/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';

import configureStore from './app/store/configureStore';

const store = configureStore();
store.subscribe(() => console.log('subscribe', store.getState()));

import AppRouter from './app/router/router';

class App extends Component {
    render() {
        return (
            <Provider store={store} >
                <AppRouter />
            </Provider>
        )
    }
}

export default App;