import { AsyncStorage } from 'react-native';
import store from '../store/configureStore';
import socket from '../socket/socket';

export const newLocalMessage = (message, userID) => dispatch => {
	dispatch({
		type: 'LOCAL_MESSAGE',
		room: message.room,
		message: {
			msg: message.msg,
			room: message.room,
			sender: userID
		}
	});
};

export const newMessages = messages => async dispatch => {
	const state = store.getState();
	const msgCount = messages.length;

	for (let i = 0; i < msgCount; i++) {

		const hasKey = state.messages.hasOwnProperty(messages[i].room);
		if (hasKey) {
			storeMessage(messages[i]);
			return dispatch({ type: 'NEW_MESSAGE', message: messages[i] });
		}

		socket.getRoomData(messages[i].room, data => {
			console.log('loaded room data', data);
			storeMessage(messages[i], data);

			dispatch({
				type: 'NEW_ROOM',
				room: messages[i].room,
				fname: data.fname,
				lname: data.lname,
				roomType: 'user',
				chat: [messages[i]]
			});
		});
	}
};

const storeMessage = (message, loadedData) => new Promise((resolve, reject) => {
	AsyncStorage.getItem(`msg__${message.room}`, (err, item) => {
		let data;

		if (item) {
			const parsed = JSON.parse(item);
			console.log('parsed', parsed);
			data = {
				fname: parsed.fname,
				lname: parsed.lname,
				title: parsed.title,
				chat: [...parsed.chat, message]
			};
		} else {
			data = { ...loadedData, chat: [message] };
		}

		AsyncStorage.setItem(`msg__${message.room}`, JSON.stringify(data))
			.then(() => resolve())
			.catch(err => reject(new Error('Error storing messages', err)));
	});
});

const addLoadedMessages = messages => ({ type: 'LOAD_MESSAGES', messages });

export const loadMessages = () => async dispatch => {
	const messages = {};
	const keys = await AsyncStorage.getAllKeys();
	const msgKeys = keys.filter(key => key.includes('msg__'));
	const rawMessages = await AsyncStorage.multiGet(msgKeys);
	if (!rawMessages) return;

	rawMessages.map(item => {
		const room = item[0].split('__')[1];
		const message = JSON.parse(item[1]);
		messages[room] = message;
	});

	dispatch(addLoadedMessages(messages));
};

export const addRoom = (user, cb) => dispatch => {
	dispatch({
		type: 'ADD_ROOM',
		fname: user.fname,
		lname: user.lname,
		_id: user.userID,
		roomType: 'user',
		room: user.userID
	});
	cb();
};