import io from 'socket.io-client';
import { newMessages } from '../actions/messages';
import { updateUsers } from '../actions/users';
import store from '../store/configureStore';

class Socket {
	constructor() {
		this.connect = this.connect.bind(this);
		this.disconnect = this.disconnect.bind(this);
		this.sendMessage = this.sendMessage.bind(this);
		this.handleConnection = this.handleConnection.bind(this);
		this.socket = null;
	}

	connect(token) {
		this.socket = io.connect('http://192.168.0.16:3000',
			{ jsonp: false, secure: true, query: { token } });
		this.handleConnection();
	}

	disconnect() {
		console.log('disconnecting socket');
		this.socket.disconnect();
	}

	sendMessage(message) {
		console.log('send message', message);
		this.socket.emit('message', message);
	}

	getRoomData(room, cb) {
		this.socket.emit('getRoomData', room, data => cb(data));
	}

	handleConnection() {
		this.socket.on('error', message => console.log('SOCKET ERROR:', message));

		this.socket.on('ONLINE_USERS', users => {
			store.dispatch(updateUsers(users));
		});

		this.socket.on('connect', () => {
			console.log('socket connected', this.socket.id);
		});

		this.socket.on('disconnect', () => console.log('disconnected'));

		this.socket.on('sendMessageToClients', messages => {
			console.log('messages', messages);
			if (messages.length > 0) store.dispatch(newMessages(messages));
		});
	}
}

const socket = new Socket();

export default socket;