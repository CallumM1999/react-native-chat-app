import React from 'react';
import { View, Text } from 'react-native';
import getStyleSheet from '../styles/message';
import PropTypes from 'prop-types';

const ChatMessage = ({ message, user, prev, next, _id }) => {
	const frontCorner = prev !== user;
	const backCorner = next !== user;
	const position = frontCorner && backCorner ? 'single' : frontCorner && !backCorner ? 'first' : !frontCorner && backCorner ? 'last' : 'middle';
	const currentUser = user === _id;
	const styles = getStyleSheet({ user: currentUser, position });

	return (
		<View style={styles.item} >
			{(!currentUser && (next !== user || !next)) && <View style={styles.circle}></View>}
			<View style={styles.message}>
				<Text style={styles.messageText}>{message}</Text>
			</View>
		</View>
	);
};

ChatMessage.propTypes = {
	message: PropTypes.string.isRequired,
	user: PropTypes.string.isRequired,
	prev: PropTypes.any.isRequired,
	next: PropTypes.any.isRequired,
	_id: PropTypes.string.isRequired
};

export default ChatMessage;