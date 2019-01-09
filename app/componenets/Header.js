import React from 'react';
import { View, Text, TouchableNativeFeedback } from 'react-native';
import PropTypes from 'prop-types';
import styles from '../styles/header';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Header = props => (
	<View style={styles.container}>
		<Text style={styles.heading}>{props.heading || 'Header'}</Text>

		{
			!!props.back && (
				<TouchableNativeFeedback onPress={props.back}>
					<View style={styles.backButton}>
						<Text style={styles.backButtonText}>
							<Icon name='arrow-back' size={30} color='white' />
						</Text>
					</View>
				</TouchableNativeFeedback>
			)
		}

		{
			!!props.openSettings && (
				<TouchableNativeFeedback onPress={props.openSettings}>
					<View style={styles.settings}>
						<Text>
							<Icon name='settings' size={30} color='white' />
						</Text>
					</View>
				</TouchableNativeFeedback>
			)
		}

	</View>
);

Header.propTypes = {
	back: PropTypes.func,
	openSettings: PropTypes.func,
	heading: PropTypes.string
};

export default Header;