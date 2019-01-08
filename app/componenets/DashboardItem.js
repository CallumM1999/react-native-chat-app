import React from 'react';
import { View, Text, TouchableNativeFeedback, Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';
import PropTypes from 'prop-types';
import styles from '../styles/DashboardItem';

const DashboardItem = props => (
	<TouchableNativeFeedback
		onPress={() => Actions.chat({ room: props.room })}
		onLongPress={() => Alert.alert('Hold Chat')}
		background={TouchableNativeFeedback.SelectableBackground()}
	>
		<View style={styles.item} >
			<View style={styles.left}>
				<View style={styles.circle} />
				<View style={styles.text}>
					<Text style={styles.name}>{props.title}</Text>
					<Text style={styles.message} numberOfLines={1}>{props.lastMessage}</Text>
				</View>
			</View>
			<View style={styles.right}>
				<Text>{props.time}</Text>
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