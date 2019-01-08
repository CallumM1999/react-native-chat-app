import React from 'react';
import { View, Text, FlatList } from 'react-native';
import styles from '../styles/NewRoom';
import NewRoomUser from './NewRoomUser';
import PropTypes from 'prop-types';

const NoUsers = () => (
	<View style={styles.noUsersContainer}>
		<Text style={styles.noUsersText}>Nobody is online :&#39;( </Text>
	</View>
);

const NewRoomOnlineUsers = props => (
	<View>
		<Text style={styles.headerText}>Online Users : {props.users.length}</Text>

		{
			props.users.length >= 1 ?
				(
					<FlatList
						style={styles.userContainer}
						data={props.users}
						keyExtractor={(item, index) => 'key' + index}
						renderItem={({ item }) => (
							<NewRoomUser
								user={item}
								addConversation={props.addConversation}
							/>
						)}
					/>
				)
				:
				(
					<NoUsers />
				)
		}

	</View>
);

NewRoomOnlineUsers.propTypes = {
	users: PropTypes.array,
	addConversation: PropTypes.func.isRequired
};

export default NewRoomOnlineUsers;