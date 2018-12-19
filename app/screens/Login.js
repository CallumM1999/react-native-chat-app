import React, { Component } from 'react';
import { StyleSheet, Button , Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

import Container from '../componenets/Container';



class Login extends Component {
    constructor(props) {
        super(props);

        this.handleLogin = this.handleLogin.bind(this);

        this.state = {
            messages: []
        }

    }

    handleLogin() {
        console.log('initiating login');

        setTimeout(() => {
            console.log('auth successful');

            this.props.login(() => {
                Actions.app();
            });
        }, 1);
    }

    render() {
        return (
            <Container 
                heading='Login'
            >
                <Text>
                    Login screen
                </Text>


                <Button
                    title='Login'
                    onPress={this.handleLogin}
                />

                
            </Container>
        )
    }
}

const styles = StyleSheet.create({

})

export default Login;