import { AsyncStorage } from 'react-native';
import store from '../store/configureStore';
import socket from '../socket/socket';
import PushNotification from 'react-native-push-notification';

export const newLocalMessage = ({ msg, room, time, status }, userID) => async dispatch => {
	const formattedMessage = { msg, room, sender: userID, time, status };
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
	missedMessagesNotification(msgCount);
};

export const newMessage = message => async dispatch => {
	console.log('new message', message);
	const state = store.getState();
	const hasKey = state.messages.hasOwnProperty(message.room);

	if (hasKey) {
		await storeMessage(message);
		await dispatch({ type: 'NEW_MESSAGE', message });
		const { fname, lname } = state.messages[message.room];
		messageNotification(message.msg, `${fname} ${lname}`, message.room);
	} else {
		const roomData = await getRoomData(message.room);
		await storeMessage(message, roomData);
		await dispatch(newRoom(message.room, roomData.fname, roomData.lname, [message]));
		messageNotification(message.msg, `${roomData.fname} ${roomData.lname}`, message.room);
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


const missedMessagesNotification = count => {
	PushNotification.localNotification({
		// id,
		color: 'red',
		// title: `Message from ${sender}`, // (optional)
		message: `You have ${count} missed messages`, // (required)
		actions: ['reply']
	});
};

// const notificationIndexes = {};


const messageNotification = (msg, sender, room) => {
	// console.log('ROOOMMMM', room);


	// if (notificationIndexes.hasOwnProperty(room)) {
	// 	console.log('has property', notificationIndexes[room]);
	// } else {
	// 	notificationIndexes[room] = Object.keys(notificationIndexes).length;
	// 	console.log('set index', notificationIndexes[room]);
	// }

	// const id = notificationIndexes[room];

	// PushNotification.cancelLocalNotifications({ id });

	// cannot clear notifications by id

	// PushNotification.cancelAllLocalNotifications();


	PushNotification.localNotification({
		// id,
		color: 'red',
		title: `Message from ${sender}`, // (optional)
		message: msg, // (required)
		actions: ['reply']
	});

};