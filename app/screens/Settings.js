import React, { Component } from 'react';
import { View, Text } from 'react-native';

import Header from '../componenets/Header'

class Settings extends Component {

    render() {
        return (
            <View>
                <Header />

                <Text>
                    Settings Component
                </Text>
            </View>
        )
    }
}

export default Settings;