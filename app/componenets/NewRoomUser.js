import React from 'react';
import { View, Text, TouchableNativeFeedback } from 'react-native';
import styles from '../styles/NewRoom';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';


const NewRoomUser = props => (
	<TouchableNativeFeedback
		onPress={() => props.addConversation(props.user)}
	>
		<View style={styles.user}>
			<View style={styles.circle}>
				<Icon name='account-circle' size={50} color='black' style={{}} />
			</View>
			<Text style={styles.userText}>{props.user.fname} {props.user.lname}</Text>
		</View>
	</TouchableNativeFeedback>
);

NewRoomUser.propTypes = {
	addConversation: PropTypes.func.isRequired,
	user: PropTypes.object.isRequired
};

export default NewRoomUser;