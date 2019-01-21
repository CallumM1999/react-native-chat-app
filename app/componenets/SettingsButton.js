import React from 'react';
import { Text, View, TouchableNativeFeedback } from 'react-native';
import styles from '../styles/Settings';
import PropTypes from 'prop-types';

const SettingsButton = ({ title, backgroundColor, onPress }) => (
	<View style={styles.accountButtonContainer}>
		<TouchableNativeFeedback
			onPress={onPress}
		>
			<View style={[
				styles.accountButton,
				(!!backgroundColor && { backgroundColor })
			]}>
				<Text style={styles.accountButtonText}>{title}</Text>
			</View>
		</TouchableNativeFeedback>
	</View>
);

SettingsButton.propTypes = {
	title: PropTypes.string.isRequired,
	backgroundColor: PropTypes.string,
	onPress: PropTypes.func.isRequired,
};

export default SettingsButton;