import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import Container from '../componenets/Container';

class Chat extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <Container>
                <Text>
                    Chat Component
                </Text>


                <Button
                    title='Back to users'
                    onPress={() => {
                        this.props.navigation.navigate('Users')
                    }}
                />
            </Container>
        )
    }
}


export default Chat;




