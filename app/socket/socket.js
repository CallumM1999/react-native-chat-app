import io from 'socket.io-client';
import { newMessage, missedMessages } from '../actions/messages';
import { updateUsers } from '../actions/users';
import store from '../store/configureStore';
import { SERVER_URL } from '../../config.json';

class Socket {
	constructor() {
		this.connect = this.connect.bind(this);
		this.disconnect = this.disconnect.bind(this);
		this.sendMessage = this.sendMessage.bind(this);
		this.handleConnection = this.handleConnection.bind(this);
		this.socket = null;
	}

	connect(token) {
		this.socket = io.connect(SERVER_URL, { jsonp: false, secure: true, query: { token } });
		this.handleConnection();
	}

    disconnect = () => this.socket.disconnect();
    sendMessage = (message) => this.socket.emit('message', message, cb => console.log('message status', cb))
    userSearch = (queryString, _id, cb) => this.socket.emit('userSearch', queryString, _id, cb)
    getRoomData = (room, cb) => this.socket.emit('getRoomData', room, data => cb(data))

    handleConnection() {
    	this.socket.on('error', message => console.log('SOCKET ERROR:', message));
    	this.socket.on('ONLINE_USERS', users => store.dispatch(updateUsers(users)));
    	this.socket.on('connect', () => console.log('socket connected', this.socket.id));
    	this.socket.on('disconnect', () => console.log('disconnected'));
    	this.socket.on('sendMessageToClients', messages => store.dispatch(newMessage(messages)));

    	this.socket.on('clientMissedMessages', messages => {
    		console.log('missed messages', messages);
    		store.dispatch(missedMessages(messages));
    	});
    }
}

const socket = new Socket();

export default socket;