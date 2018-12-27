import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './app/store/configureStore';
import socket from './app/socket/socket';

import AppRouter from './app/router/router';

let loggedIncurr;

const handleAuthState = () => {
    const state = store.getState();
    let prev = loggedIncurr;
    loggedIncurr = state.auth.loggedIn;

    if (!prev && loggedIncurr) return socket.connect(state.auth.token);
    if (prev && !loggedInCurr) return socket.disconnect();
}

store.subscribe(handleAuthState);

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