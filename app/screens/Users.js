import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import Container from '../componenets/Container';

class Users extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <Container>
                <Text style={styles.text}>
                    Users Component
                </Text>


                <Button
                    title='change me'
                    onPress={() => {
                        this.props.navigation.navigate('Chat')
                    }}
                />
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