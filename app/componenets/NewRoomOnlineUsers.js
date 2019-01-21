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
		{!!props.users.length && <Text style={styles.headerText}>Online Users : {props.users.length}</Text>}

		<FlatList
			style={styles.userContainer}
			data={props.users}
			keyExtractor={(undefined, index) => 'key' + index}
			ListEmptyComponent={NoUsers}
			renderItem={({ item }) => (
				<NewRoomUser user={item} addConversation={props.addConversation} />
			)}
		/>
	</View>
);

NewRoomOnlineUsers.propTypes = {
	users: PropTypes.array,
	addConversation: PropTypes.func.isRequired
};

export default NewRoomOnlineUsers;