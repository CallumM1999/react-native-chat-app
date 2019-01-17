import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './app/store/configureStore';
import socket from './app/socket/socket';
import BackgroundTimer from 'react-native-background-timer';

import AppRouter from './app/router/router';

const runTimeout = () => {
	let connecting = false;

	const func = () => BackgroundTimer.setTimeout(() => {
		const state = store.getState();

		if (!state.auth.loggedIn) return func();

		if (connecting && socket.status()) {
			console.log('connected set true');
			connecting = false;
			func();
		} else if (socket.status()) {
			console.log('continue');
			func();
		} else {
			console.log('Attempting to reconnect');
			connecting = true;
			socket.connect(state.auth.token);
			func();
		}

	}, 1000);
	func();
};

runTimeout();

let loggedInCurr;
const handleAuthState = () => {
	const state = store.getState();
	let prev = loggedInCurr;
	loggedInCurr = state.auth.loggedIn;

	if (!prev && loggedInCurr) return socket.connect(state.auth.token);
	if (prev && !loggedInCurr) return socket.disconnect();
};

store.subscribe(handleAuthState);

class App extends Component {
    render = () => (
    	<Provider store={store} >
    		<AppRouter />
    	</Provider>
    );
}

export default App;