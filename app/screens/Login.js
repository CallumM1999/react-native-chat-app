import React, { Component } from 'react';
import { Text, View, TextInput, TouchableNativeFeedback } from 'react-native';
import { connect } from 'react-redux';
import Container from '../componenets/Container';
import Loading from '../componenets/Loading';
import { loadToken, loginRequest, loginError } from '../actions/auth';
import styles from '../styles/Login';
import PropTypes from 'prop-types';

class Login extends Component {
	constructor(props) {
		super(props);

		this.handleLogin = this.handleLogin.bind(this);

		this.state = { email: null, password: null };
	}

	componentDidMount() {
		this.props.dispatch(loadToken());
	}

	handleLogin() {
		if (this.props.loginLoading) return console.log('Waiting for previous request');

		const { email, password } = this.state;
		let error = false;

		if (!password || !email) {
			error = true;
			this.props.dispatch(loginError(`Missing Fields: ${!email ? 'email' : ''} ${!password ? 'password' : ''}`));
		}

		if (error) return;

		this.setState({ error: null }, this.props.dispatch(loginRequest(email, password)));
	}

	render() {
		if (this.props.tokenLoading) return <Loading />;

		return (
			<Container heading='Login' >
				<View style={styles.container}>

					<TextInput
						style={styles.input}
						placeholder='Email'
						value={this.state.email}
						onChangeText={(text) => this.setState({ email: text })}
						onSubmitEditing={this.handleLogin}
					></TextInput>

					<TextInput
						style={styles.input}
						placeholder='Password'
						value={this.state.password}
						onChangeText={(text) => this.setState({ password: text })}

						onSubmitEditing={this.handleLogin}
						secureTextEntry
					></TextInput>

					{this.props.loginError && <Text style={styles.error}>{this.props.loginError}</Text>}

					<Text style={styles.loading}>{this.props.loginLoading && 'Loading...'}</Text>

					<TouchableNativeFeedback onPress={this.handleLogin} >
						<View style={styles.submit}>
							<Text style={styles.submitText} >LOGIN</Text>
						</View>
					</TouchableNativeFeedback>

				</View>
			</Container>
		);
	}
}

Login.propTypes = {
	dispatch: PropTypes.func,
	loginLoading: PropTypes.bool.isRequired,
	tokenLoading: PropTypes.bool.isRequired,
	loginError: PropTypes.string
};

const mapStateToProps = ({ auth }) => ({
	isLoaded: auth.isLoaded,
	loginLoading: auth.loginLoading,
	loginError: auth.loginError,
	tokenLoading: auth.tokenLoading,
	tokenError: auth.tokenError
});

export default connect(mapStateToProps)(Login);