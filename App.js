import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './app/store/configureStore';
import socket from './app/socket/socket';
import BackgroundTimer from 'react-native-background-timer';
import { newMessages } from './app/actions/messages';
import AppRouter from './app/router/router';
import post_messages from './app/requests/post_messages';

const runTimeout = () => {
	const func = () => BackgroundTimer.setTimeout(async () => {
		const state = store.getState();
		if (!state.auth.loggedIn || socket.status()) return func();

		const response = await post_messages({ token: state.auth.token });
		if (response.err) console.log('fetch err', response.err);
		if (response.messages) store.dispatch(newMessages(response.messages));
		func();

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