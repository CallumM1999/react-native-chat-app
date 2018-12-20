import React, { Component } from 'react';
import { StyleSheet, Button , Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux'
import Container from '../componenets/Container';
import { login } from '../actions/auth';

class Login extends Component {
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
    }

    login() {
        console.log('auth successful');
        this.props.dispatch(login({ token: 'some token', username: 'some username' }));
    }

    render() {
        return (
            <Container heading='Login' >
                <Text>Login screen</Text>

                <Button title='Login' onPress={this.login} />
            </Container>
        )
    }
}

const styles = StyleSheet.create({

})

export default connect()(Login);