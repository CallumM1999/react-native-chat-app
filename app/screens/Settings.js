import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';


import Container from '../componenets/Container'

class Settings extends Component {

    render() {
        return (
            <Container back={Actions.pop}>
                <Text>
                    Settings Component
                </Text>
            </Container>
        )
    }
}

export default Settings;