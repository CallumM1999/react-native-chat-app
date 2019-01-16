import React from 'react';
import { Text, View, TextInput, } from 'react-native';
import styles from '../styles/Login';
import PropTypes from 'prop-types';

const LoginField = props => (
	<View style={styles.inputContainer}>
		<Text style={styles.inputText} >{props.label}</Text>
		<TextInput
			style={styles.inputField}
			value={props.value}
			onChangeText={props.onChangeText}
			onSubmitEditing={props.onSubmitEditing}
			secureTextEntry={props.secureTextEntry}
		></TextInput>
	</View>
);

LoginField.propTypes = {
	label: PropTypes.string.isRequired,
	value: PropTypes.string,
	onChangeText: PropTypes.func.isRequired,
	onSubmitEditing: PropTypes.func.isRequired,
	secureTextEntry: PropTypes.bool
};

export default LoginField;