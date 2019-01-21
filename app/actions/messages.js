import { AsyncStorage } from 'react-native';
import store from '../store/configureStore';
import socket from '../socket/socket';
import PushNotification from 'react-native-push-notification';
import configureNotification from '../notifications/configureNotification';

configureNotification();

export const newLocalMessage = ({ msg, room, time, status }, userID) => async dispatch => {
	const formattedMessage = { msg, room, sender: userID, time, status };
	storeMessage(formattedMessage);
	dispatch({
		type: 'LOCAL_MESSAGE',
		room,
		message: formattedMessage
	});
};

const getRoomData = room => new Promise((resolve) => {
	socket.getRoomData(room, cb => resolve(cb));
});


export const newMessages = messages => async dispatch => {
	console.log('new messages', messages);
	let msgLength = messages.length;
	for (let i = 0; i < msgLength; i++) {
		const msg = messages[i];
		const state = store.getState();
		const hasKey = state.messages.hasOwnProperty(msg.room);

		if (hasKey) {
			await storeMessage(msg);
			await dispatch({ type: 'NEW_MESSAGE', message: msg });
			const { fname, lname } = state.messages[msg.room];
			messageNotification(msg.msg, `${fname} ${lname}`, msg.room);
		} else {
			const roomData = await getRoomData(msg.room);
			await storeMessage(msg, roomData);
			await dispatch(newRoom(msg.room, roomData.fname, roomData.lname, [msg]));
			messageNotification(msg.msg, `${roomData.fname} ${roomData.lname}`, msg.room);
		}
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
			dispatch(newRoom(userID, fname, lname, []));
			cb();
		})
		.catch(err => console.log('Error storing messages', err));

};

export const updateMessageStatus = (room, index, status) => async dispatch => {
	// console.log(`updating message ${index} in room:${room} to status : ${status}`);

	const roomJSON = await AsyncStorage.getItem(`msg__${room}`);
	const roomData = JSON.parse(roomJSON);
	const updatedChat = roomData.chat.map((item, indx) => indx === index ? { ...item, status } : item);

	await Promise.all([
		AsyncStorage.setItem(`msg__${room}`, JSON.stringify({ ...roomData, chat: updatedChat })),
		dispatch({ type: 'UPDATE_STATUS', room, index, status })
	]);
};

export const deleteConversation = (room) => async dispatch => {
	await Promise.all([
		AsyncStorage.removeItem(`msg__${room}`),
		dispatch({ type: 'DELETE_CONVERSATION', room })
	]);
};

const messageNotification = (msg, sender, room) => {
	PushNotification.localNotification({
		room,
		color: 'red',
		title: `Message from ${sender}`,
		message: msg,
		actions: ['reply'],
	});
};

export const resendMessage = (room, message, index) => async dispatch => {
	const roomJSON = await AsyncStorage.getItem(`msg__${room}`);
	const roomData = JSON.parse(roomJSON);
	const updatedChat = roomData.chat.filter((undefined, indx) => indx !== index);
	updatedChat.push(message);

	await Promise.all([
		AsyncStorage.setItem(`msg__${room}`, JSON.stringify({ ...roomData, chat: updatedChat })),
		dispatch({ type: 'RESEND_MESSAGE', message, index, room })
	]);
};