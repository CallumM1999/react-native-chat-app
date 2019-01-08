import React from 'react';
import { View, Text, FlatList } from 'react-native';
import styles from '../styles/NewRoom';
import NewRoomUser from './NewRoomUser';
import PropTypes from 'prop-types';

const NewRoomSearchResults = props => (
	<View>
		<Text style={styles.headerText}>Search Results : {props.resultsLength}</Text>

		<FlatList
			style={styles.userContainer}
			data={props.results}
			keyExtractor={(item, index) => 'key' + index}

			renderItem={({ item }) => (
				<NewRoomUser
					user={{ ...item, userID: item._id }}
					addConversation={props.addConversation}
				/>
			)}
		/>
	</View>
);

NewRoomSearchResults.propTypes = {
	resultsLength: PropTypes.number,
	results: PropTypes.array,
	addConversation: PropTypes.func.isRequired
};

export default NewRoomSearchResults;