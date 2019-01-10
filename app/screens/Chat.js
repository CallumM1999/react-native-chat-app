import React, { Component } from 'react';
import { FlatList, TouchableWithoutFeedback, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Container from '../componenets/Container';
import ChatMessage from '../componenets/ChatMessage';
import ChatInput from '../componenets/ChatInput';
import socket from '../socket/socket';
import { connect } from 'react-redux';
import { newLocalMessage, updateMessageStatus } from '../actions/messages';
import PropTypes from 'prop-types';


class Chat extends Component {
	constructor(props) {
		super(props);
		this.sendMessage = this.sendMessage.bind(this);
		this.addLocalMessage = this.addLocalMessage.bind(this);
		this.formatMessage = this.formatMessage.bind(this);

		this.selectMessage = this.selectMessage.bind(this);


		this.state = {
			selected: null,
			roomID: this.props.room,
			room: this.props.messages[this.props.room],
			chat: JSON.parse(JSON.stringify(this.props.messages[this.props.room].chat)).reverse(),
		};

		this.title = this.state.room.roomType === 'group' ? this.state.room.title : `${this.state.room.fname} ${this.state.room.lname}`;

	}

	componentWillReceiveProps({ messages, room }) {
		console.log('update chat');

		this.setState({
			room: messages[room],
			chat: JSON.parse(JSON.stringify(messages[room].chat)).reverse()
		});

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

    addLocalMessage = msg => this.props.dispatch(newLocalMessage(msg, this.props._id));

    render = () => (
    	<Container heading={this.title} back={Actions.pop} >

    		<TouchableWithoutFeedback onPress={() => this.selectMessage(-1)}>
    			<View style={{ width: '100%', flex: 1 }}>

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

    							next={index >= 1 ? this.state.chat[index - 1].sender : false}
    							prev={this.state.chat.length >= index + 2 ? this.state.chat[index + 1].sender : false}
    						/>
    					)}
    				/>

    			</View>
    		</TouchableWithoutFeedback>

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

// const styles = StyleSheet.create({});

const mapStateToProps = ({ messages, auth }) => ({
	messages: messages,
	_id: auth._id
});

export default connect(mapStateToProps)(Chat);