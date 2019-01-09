import React from 'react';
import { View, Text } from 'react-native';
import getStyleSheet from '../styles/ChatMessage';
import PropTypes from 'prop-types';
import TimeAgo from 'react-native-timeago';

const ChatMessage = ({ message, user, prev, next, _id, time }) => {
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
				<TimeAgo time={time} />
			</View>
		</View>
	);
};

ChatMessage.propTypes = {
	message: PropTypes.string.isRequired,
	user: PropTypes.string.isRequired,
	prev: PropTypes.any.isRequired,
	next: PropTypes.any.isRequired,
	_id: PropTypes.string.isRequired,
	time: PropTypes.any.isRequired
};

export default ChatMessage;