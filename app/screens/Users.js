import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Container from '../componenets/Container';

class Users extends Component {

    render() {
        return (
            <Container>
                <Text>
                    Users Component
                </Text>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    text: {
        width: '100%',
        height: 400,
        backgroundColor: 'orange',
        color: 'black'
    }
})

export default Users;