import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableNativeFeedback } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import Container from '../componenets/Container';
import { addRoom } from '../actions/messages';
import PropTypes from 'prop-types';
import socket from '../socket/socket';

class NewRoom extends Component {
	constructor(props) {
		super(props);

		this.addConversation = this.addConversation.bind(this);
	}

	addConversation(user) {
		if (this.props.messages.hasOwnProperty(user.userID)) return Actions.replace('chat', { room: user.userID });
		this.props.dispatch(addRoom(user, () => Actions.replace('chat', { room: user.userID })));
	}

	render() {
		console.log('=====================');
		console.log('=====================');
		console.log('=====================');
		console.log('users', this.props.users);
		// console.log('/////////////////');
		// console.log('socket', socket.socket.id);
		return (
			<Container heading='Create' back={Actions.pop}>
				<View>
					<Text>Create convertation</Text>

					<Text>Online Users: {this.props.users.length - 1}</Text>

					<View style={styles.userContainer}>
						{

							this.props.users.filter(item => item.socketID !== socket.socket.id).map((user, index) => (
								<TouchableNativeFeedback
									key={index}
									onPress={() => this.addConversation(user)}
								>
									<View style={styles.user}>
										<Text style={styles.userTitle}>User</Text>
										<Text style={styles.userText}>Name: {user.fname} {user.lname}</Text>
									</View>
								</TouchableNativeFeedback>
							))
						}
					</View>

				</View>
			</Container>
		);
	}
}
NewRoom.propTypes = {
	messages: PropTypes.object.isRequired,
	dispatch: PropTypes.func,
	users: PropTypes.array.isRequired,
	_id: PropTypes.string.isRequired
};

const styles = StyleSheet.create({
	userContainer: {
		width: '100%',
		padding: 20,
		backgroundColor: '#eee',
		marginTop: 20,
	},
	user: {
		backgroundColor: '#333',
		borderRadius: 4,
		marginBottom: 15,
		paddingVertical: 10,
		paddingHorizontal: 20

	},
	userTitle: {
		color: 'white',

	},
	userText: {
		color: 'white',

	}
});


const mapStateToProps = ({ users, auth, messages }) => ({
	users: users.users,
	_id: auth._id,
	messages
});

export default connect(mapStateToProps)(NewRoom);