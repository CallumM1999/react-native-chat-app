import React, { Component } from 'react';
import { Button , Text, View, TextInput } from 'react-native';

import { connect } from 'react-redux'
import Container from '../componenets/Container';
import Loading from '../componenets/Loading';

import { loadToken, loginRequest } from '../actions/auth';

import styles from '../styles/Login';

class Login extends Component {
    constructor(props) {
        super(props);

        this.handleLogin = this.handleLogin.bind(this);

        this.state = {
            email: null,
            password: null,
            error: null,
        }
    }

    componentWillMount() {
        this.props.dispatch(loadToken());
    }

    handleLogin() {
        const { email, password } = this.state;

        let error = false;

        if (!password || !email) {
            error = true;

            this.setState({
                error: `Missing Fields: ${!email ? 'email' : ''} ${!password ? 'password' : ''}`
            });
        }

        if (error) return;

        this.setState({ error: null }, 
            this.props.dispatch(loginRequest(email, password))
        );

        
    }

    render() {
        if (this.props.tokenLoading) return <Loading />

        return (
            <Container heading='Login' >
                <View style={styles.container}>
                    <Text style={styles.title}>Login</Text>
                    <Text>Error: {this.props.tokenError}</Text>

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

                    {
                        this.state.error && <Text style={styles.error}>{this.state.error}</Text>
                    }

                    <Text>{this.props.loginLoading && 'Loading...'}</Text>
                    <Text>Login error: {this.props.loginError}</Text>

                    <Button 
                        title='Login' 
                        color='orange'
                        onPress={this.handleLogin}
                    />

                    
                </View>
            </Container>
        )
    }
}

const mapStateToProps = ({ isLoaded, loginLoading, loginError, tokenLoading, tokenError }) => {
    return {
        isLoaded,
        loginLoading,
        loginError,
        tokenLoading,
        tokenError
    }
}

export default connect(mapStateToProps)(Login);