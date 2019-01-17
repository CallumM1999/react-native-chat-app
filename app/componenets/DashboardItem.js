import React from 'react';
import { View, Text, TouchableNativeFeedback } from 'react-native';
import PropTypes from 'prop-types';
import styles from '../styles/DashboardItem';
import TimeAgo from 'react-native-timeago';
import Icon from 'react-native-vector-icons/MaterialIcons';


const DashboardItem = props => (
	<TouchableNativeFeedback
		onPress={() => props.openRoom(props.room)}
		onLongPress={() => props.openModal(props.room)}
		background={TouchableNativeFeedback.SelectableBackground()}
	>
		<View style={[
			styles.item,
			(props.unread && styles.itemUnread)
		]} >
			<View style={styles.left}>
				<View style={styles.circle}>
					<Icon name='account-circle' size={70} color='black' style={{}} />
				</View>
				<View style={styles.text}>
					<Text style={[styles.name, (props.unread && styles.nameUnread)]}>{props.title}</Text>
					<Text style={[styles.message, (props.unread && styles.messageUnread)]} numberOfLines={1}>{props.lastMessage}</Text>
				</View>
			</View>
			<View style={styles.right}>

				{
					!!props.time && <TimeAgo time={parseInt(props.time)} />
				}

			</View>
		</View>
	</TouchableNativeFeedback>
);


DashboardItem.propTypes = {
	room: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	lastMessage: PropTypes.any,
	time: PropTypes.any
};

export default DashboardItem;