import io from 'socket.io-client';
import { newMessage } from '../actions/messages';
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
        this.socket = io.connect('http://192.168.0.20:3000', 
        { jsonp: false, secure: true, query: { token } }); 
        this.handleConnection();
    }

    disconnect() {
        console.log('disconnecting socket')
        this.socket.disconnect();
    }

    sendMessage(message, username) {
        console.log('send message', message)
        this.socket.emit('message', { message, room: 1, username })
    }

    handleConnection() {
        this.socket.on('error', message => console.log('SOCKET ERROR:', message))

        // setInterval(() => {
        //     this.socket.emit('maintainConnection', 1)
        // }, 1000);

        this.socket.on('connect', socket => {
            console.log('socket', this.socket.id)
        });

        // socket.on('disconnect', socket => this.setState({ connected: false }));

        this.socket.on('sendMessageToClients', data => {
            console.log('new message', data)

            if (data.length > 0) {
                console.log('get message', data);
                store.dispatch(newMessage(data));
            } 
        })
    }

}

const socket = new Socket();

export default socket;