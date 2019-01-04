import React from 'react';
import { View, Text, StyleSheet, TouchableNativeFeedback } from 'react-native';
import PropTypes from 'prop-types';

const FloatingButton = props => (
	<TouchableNativeFeedback onPress={props.onPress}>
		<View style={styles.add}>
			<Text style={styles.addText}>+</Text>
		</View>
	</TouchableNativeFeedback>
);

FloatingButton.propTypes = {
	onPress: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
	add: {
		'position': 'absolute',
		'bottom': 20,
		right: 20,
		width: 60,
		height: 60,
		borderRadius: 100 / 2,
		backgroundColor: 'red',

		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',

		shadowColor: '#000000',
		shadowOpacity: 0.8,
		shadowRadius: 2,
		shadowOffset: {
			height: 1,
			width: 0
		}
	},
	addText: {
		color: 'white',
		fontSize: 40,
		fontWeight: '100',
		position: 'relative'
	}
});

export default FloatingButton;