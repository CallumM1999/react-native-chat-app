import { AsyncStorage } from 'react-native';
import store from '../store/configureStore';
import socket from '../socket/socket';

export const newLocalMessage = ({ msg, room, time }, userID) => async dispatch => {
	const formattedMessage = { msg, room, sender: userID, time };
	storeMessage(formattedMessage);
	dispatch({
		type: 'LOCAL_MESSAGE',
		room,
		message: formattedMessage
	});
};

const getRoomData = room => new Promise((resolve, reject) => {
	socket.getRoomData(room, cb => resolve(cb));
});

const handleMissedMessage = (message, dispatch) => new Promise(async (resolve, reject) => {
	console.log('handle message', message);

	const state = store.getState();
	const hasKey = state.messages.hasOwnProperty(message.room);

	if (hasKey) {
		storeMessage(message);
		dispatch({ type: 'NEW_MESSAGE', message: message });
		resolve();
	} else {
		const roomData = await getRoomData(message.room);
		storeMessage(message, roomData);
		dispatch(newRoom(message.room, roomData.fname, roomData.lname, [message]));
		resolve();
	}
});

export const missedMessages = messages => async dispatch => {
	const msgCount = messages.length;

	for (let i = 0; i < msgCount; i++) {
		await handleMissedMessage(messages[i], dispatch);
	}
};

export const newMessage = message => async dispatch => {
	console.log('new message', message);
	const state = store.getState();
	const hasKey = state.messages.hasOwnProperty(message.room);

	if (hasKey) {
		await storeMessage(message);
		dispatch({ type: 'NEW_MESSAGE', message });
	} else {
		const roomData = await getRoomData(message.room);
		await storeMessage(message, roomData);
		dispatch(newRoom(message.room, roomData.fname, roomData.lname, [message]));
	}
};

const newRoom = (room, fname, lname, chatMessages) => ({
	type: 'NEW_ROOM',
	room,
	fname,
	lname,
	roomType: 'user',
	chat: chatMessages
});

const storeMessage = (message, loadedData) => new Promise((resolve, reject) => {
	AsyncStorage.getItem(`msg__${message.room}`, (err, item) => {
		let data;

		if (item) {
			const { fname, lname, title, chat } = JSON.parse(item);
			data = { fname, lname, title, chat: [...chat, message] };
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

export const addRoom = ({ fname, lname, userID }, cb) => dispatch => {
	console.log('add room');

	const roomData = { fname, lname, chat: [] };

	AsyncStorage.setItem(`msg__${userID}`, JSON.stringify(roomData))
		.then(() => {
			dispatch({
				type: 'ADD_ROOM',
				fname,
				lname,
				_id: userID,
				roomType: 'user',
				room: userID
			});
			cb();
		})
		.catch(err => console.log('Error storing messages', err));

};