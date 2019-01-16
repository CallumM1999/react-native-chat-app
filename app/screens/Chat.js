import React, { Component } from 'react';
import { FlatList, TouchableWithoutFeedback, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Container from '../componenets/Container';
import ChatMessage from '../componenets/ChatMessage';
import ChatInput from '../componenets/ChatInput';
import socket from '../socket/socket';
import { connect } from 'react-redux';
import { newLocalMessage, updateMessageStatus, resendMessage } from '../actions/messages';
import PropTypes from 'prop-types';
import { openRoom } from '../actions/unread';

class Chat extends Component {
	constructor(props) {
		super(props);
		this.sendMessage = this.sendMessage.bind(this);
		this.addLocalMessage = this.addLocalMessage.bind(this);
		this.formatMessage = this.formatMessage.bind(this);
		this.selectMessage = this.selectMessage.bind(this);
		this.resendMessage = this.resendMessage.bind(this);

		this.state = {
			selected: null,
			roomID: this.props.room,
			room: this.props.messages[this.props.room],
			chat: JSON.parse(JSON.stringify(this.props.messages[this.props.room].chat)).reverse(),
		};

		this.title = this.state.room.roomType === 'group' ? this.state.room.title : `${this.state.room.fname} ${this.state.room.lname}`;
	}

	componentWillReceiveProps({ messages, room, unread }) {
		if (unread.hasOwnProperty(this.props.room)) {
			this.props.dispatch(openRoom(this.props.room));
		}

		const diff = messages[room].chat.length - this.state.chat.length;
		this.setState(prev => ({
			room: messages[room],
			chat: JSON.parse(JSON.stringify(messages[room].chat)).reverse(),
			selected: !prev.selected ? null : prev.selected + diff
		}));
	}


    selectMessage = index => this.setState(prev => ({ selected: index === prev.selected ? null : index }));

    formatMessage = (msg, room, time, status, index) => ({ msg, room, time, status, index });

    sendMessage(msg) {
    	const index = this.props.messages[this.props.room].chat.length;
    	const timestamp = Math.floor(Date.now());
    	const formattedMessage = this.formatMessage(msg, this.props.room, timestamp, 'sent', index);

    	this.addLocalMessage(formattedMessage);

    	const status = setTimeout(() => {
    		this.props.dispatch(updateMessageStatus(this.props.room, index, 'failed'));
    	}, 1000);

    	socket.sendMessage(formattedMessage, () => {
    		clearTimeout(status);
    		this.props.dispatch(updateMessageStatus(this.props.room, index, 'recieved'));
    	});
    }

    resendMessage(index) {
    	// remove message, then add to end of messages
    	const newIndex = this.props.messages[this.props.room].chat.length - 1;
    	const actualIndex = newIndex - index;
    	const timestamp = Math.floor(Date.now());
    	const message = { ...this.props.messages[this.props.room].chat[actualIndex], time: timestamp, status: 'sent' };

    	this.props.dispatch(resendMessage(this.props.room, message, actualIndex));

    	const status = setTimeout(() => {
    		this.props.dispatch(updateMessageStatus(this.props.room, newIndex, 'failed'));
    	}, 1000);

    	socket.sendMessage(message, () => {
    		clearTimeout(status);
    		this.props.dispatch(updateMessageStatus(this.props.room, newIndex, 'recieved'));
    	});
    }

    addLocalMessage = msg => this.props.dispatch(newLocalMessage(msg, this.props._id));

    render = () => (
    	<Container heading={this.title} back={Actions.pop} >
    		<FlatList
    			keyExtractor={(item, index) => 'key' + index}
    			data={this.state.chat}
    			extraData={this.state}
    			animated={false}
    			inverted={true}
    			renderItem={({ item, index }) => (

    				<ChatMessage
    					selectMessage={this.selectMessage}
    					selected={this.state.selected == index}
    					index={index}
    					msg={item.msg}
    					time={item.time}
    					user={item.sender}
    					status={item.status}
    					_id={this.props._id}
    					resendMessage={this.resendMessage}

    					next={index >= 1 ? this.state.chat[index - 1].sender : false}
    					prev={this.state.chat.length >= index + 2 ? this.state.chat[index + 1].sender : false}
    				/>
    			)}
    		/>


    		<ChatInput sendMessage={this.sendMessage} />
    	</Container>
    )
}


Chat.propTypes = {
	room: PropTypes.string.isRequired,
	dispatch: PropTypes.func,
	_id: PropTypes.string.isRequired,
	messages: PropTypes.object.isRequired
};

const mapStateToProps = ({ messages, auth, unread }) => ({
	messages,
	_id: auth._id,
	unread
});

export default connect(mapStateToProps)(Chat);