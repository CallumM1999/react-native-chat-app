import React from 'react';
import { Text, View, TouchableNativeFeedback } from 'react-native';
import styles from '../styles/Login';
import PropTypes from 'prop-types';

const LoginSubmit = props => (
	<TouchableNativeFeedback onPress={props.handleLogin} >
		<View style={styles.submit}>
			<Text style={styles.submitText} >LOGIN</Text>
		</View>
	</TouchableNativeFeedback>
);

LoginSubmit.propTypes = {
	handleLogin: <PropTypes className="func isRe"></PropTypes>
};

export default LoginSubmit;