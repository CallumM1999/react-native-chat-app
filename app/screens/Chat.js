import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Container from '../componenets/Container';
import ChatMessage from '../componenets/ChatMessage';
import ChatInput from '../componenets/ChatInput';
import socket from '../socket/socket';
import { connect } from 'react-redux';
import { newLocalMessage } from '../actions/messages';
import PropTypes from 'prop-types';

class Chat extends Component {
	constructor(props) {
		super(props);
		this.sendMessage = this.sendMessage.bind(this);
		this.addLocalMessage = this.addLocalMessage.bind(this);
		this.formatMessage = this.formatMessage.bind(this);
	}

	formatMessage(msg, room) {
		return { msg, room };
	}

	sendMessage(msg) {
		console.log(`Sending message => ${msg}`);
		const formattedMessage = this.formatMessage(msg, this.props.room);
		this.addLocalMessage({ msg, room: this.props.room });
		socket.sendMessage(formattedMessage);
	}

	addLocalMessage(msg) {
		this.props.dispatch(newLocalMessage(msg, this.props._id));
	}

	render() {
		const roomID = this.props.room;
		const room = this.props.messages[roomID];
		const title = room.roomType === 'group' ? room.title : `${room.fname} ${room.lname}`;


		return (
			<Container heading={title} back={Actions.pop} >
				<ScrollView>
					{
						room.chat.map((item, index) => {

							return (
								<ChatMessage
									message={item.msg}
									user={item.sender}
									key={index}
									_id={this.props._id}
									prev={index - 1 >= 0 ? room.chat[index - 1].sender : false}
									next={room.chat.length >= index + 2 ? room.chat[index + 1].sender : false}
								/>
							);
						})
					}
				</ScrollView>
				<ChatInput sendMessage={this.sendMessage} />
			</Container>
		);
	}
}

Chat.propTypes = {
	room: PropTypes.string.isRequired,
	dispatch: PropTypes.func,
	_id: PropTypes.string.isRequired,
	messages: PropTypes.object.isRequired
};

// const styles = StyleSheet.create({});

const mapStateToProps = ({ messages, auth }) => ({
	messages: messages,
	_id: auth._id
});

export default connect(mapStateToProps)(Chat);