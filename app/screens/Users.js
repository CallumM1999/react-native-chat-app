import React, { Component } from 'react';
import { View, Text } from 'react-native';

import Header from '../componenets/Header'

class Users extends Component {

    render() {
        return (
            <View>
                <Header />

                <Text>
                    Users Component
                </Text>
            </View>
        )
    }
}

export default Users;