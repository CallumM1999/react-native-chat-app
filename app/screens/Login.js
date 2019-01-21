import React, { Component } from 'react';
import { Text, View, TouchableWithoutFeedback, Linking, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import Container from '../componenets/Container';
import LoginField from '../componenets/LoginField';
import LoginSubmit from '../componenets/LoginSubmit';

import Loading from '../componenets/Loading';
import { loadToken, loginRequest, loginError } from '../actions/auth';
import styles from '../styles/Login';
import PropTypes from 'prop-types';

import { SERVER_URL } from '../../config.json';

class Login extends Component {
	constructor(props) {
		super(props);

		this.handleLogin = this.handleLogin.bind(this);
		this.handleLink = this.handleLink.bind(this);
		this.state = { email: null, password: null };
	}

    componentDidMount = () => this.props.dispatch(loadToken());

    handleLogin() {
    	if (this.props.loginLoading) return console.log('Waiting for previous request');
    	const { email, password } = this.state;
    	if (!password || !email) return this.props.dispatch(loginError(`Missing Fields: ${!email ? 'email' : ''} ${!password ? 'password' : ''}`));
    	this.setState({ error: null }, () => this.props.dispatch(loginRequest(email, password)));
    }

    handleLink() {
    	Linking.openURL(`${SERVER_URL}/register`)
    		.catch(err => console.error('An error occurred', err));
    }

    render() {
    	if (this.props.tokenLoading) return <Loading />;

    	return (
    		<Container heading='Login' >
    			<ScrollView style={{ flexDirection: 'column' }}>

    				<View style={styles.registerContainer}>
    					<TouchableWithoutFeedback onPress={this.handleLink} >
    						<View>
    							<Text style={styles.registerText}>Register</Text>
    						</View>
    					</TouchableWithoutFeedback>
    				</View>

    				<View style={styles.container}>
    					<LoginField
    						label='Email'
    						value={this.state.email}
    						onChangeText={text => this.setState({ email: text })}
    						onSubmitEditing={this.handleLogin}
    					/>

    					<LoginField
    						label='Password'
    						value={this.state.password}
    						onChangeText={text => this.setState({ password: text })}
    						onSubmitEditing={this.handleLogin}
    						secureTextEntry
    					/>

    					{this.props.loginError && <Text style={styles.error}>{this.props.loginError}</Text>}
    					<Text style={styles.loading}>{this.props.loginLoading && 'Loading...'}</Text>
    					<LoginSubmit handleLogin={this.handleLogin} />
    				</View>

    			</ScrollView>
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