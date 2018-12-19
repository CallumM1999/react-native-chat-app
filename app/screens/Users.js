import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableNativeFeedback } from 'react-native';

import Container from '../componenets/Container';

class Users extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [
                { user: 'Callum', lastMessage: 'last message..', time: '17:23' },
                { user: 'Callum', lastMessage: 'last message..', time: '17:23' },
                { user: 'Callum', lastMessage: 'last message..', time: '17:23' },
                { user: 'Callum', lastMessage: 'last message..', time: '17:23' },
                { user: 'Callum', lastMessage: 'last message..', time: '17:23' },
                { user: 'Callum', lastMessage: 'last message..', time: '17:23' },
                { user: 'Callum', lastMessage: 'last message..', time: '17:23' },
                { user: 'Callum', lastMessage: 'last message..', time: '17:23' },
                { user: 'Callum', lastMessage: 'last message..', time: '17:23' },
                { user: 'Callum', lastMessage: 'last message..', time: '17:23' },
                { user: 'Callum', lastMessage: 'last message..', time: '17:23' },
                { user: 'Callum', lastMessage: 'last message..', time: '17:23' },
                { user: 'Callum', lastMessage: 'last message..', time: '17:23' },
                { user: 'Callum', lastMessage: 'last message..', time: '17:23' },
                { user: 'Callum', lastMessage: 'last message..', time: '17:23' },
                { user: 'Callum', lastMessage: 'last message..', time: '17:23' },
                { user: 'Callum', lastMessage: 'last message..', time: '17:23' },
                { user: 'Callum', lastMessage: 'last message..', time: '17:23' },
                { user: 'Callum', lastMessage: 'last message..', time: '17:23' },
                { user: 'Callum', lastMessage: 'last message..', time: '17:23' },
                { user: 'Callum', lastMessage: 'last message..', time: '17:23' },
                { user: 'Callum', lastMessage: 'last message..', time: '17:23' },
                { user: 'Callum', lastMessage: 'last message..', time: '17:23' },
                { user: 'Callum', lastMessage: 'last message..', time: '17:23' },
                { user: 'Callum', lastMessage: 'last message..', time: '17:23' },
                { user: 'Callum', lastMessage: 'last message..', time: '17:23' },
                { user: 'Callum', lastMessage: 'last message..', time: '17:23' },
                { user: 'Callum', lastMessage: 'last message..', time: '17:23' },
                { user: 'Callum', lastMessage: 'last message..', time: '17:23' },
                { user: 'Callum', lastMessage: 'last message..', time: '17:23' },
                { user: 'Callum', lastMessage: 'last message..', time: '17:23' },
                { user: 'Callum', lastMessage: 'last message..', time: '17:23' },
            ]
        }
    }

    render() {
        return (
            <Container>
                <ScrollView style={styles.scrollView}>
                    {
                        this.state.users.map((item, index) => {
                            return (

                                <TouchableNativeFeedback
                                    key={index}
                                    onPress={() => this.props.navigation.navigate('Chat')}  
                                    background={TouchableNativeFeedback.SelectableBackground()}
                                >
                                    <View style={styles.item} >
                                        <View style={styles.left}>
                                            <View style={styles.circle}/>
                                            <View style={styles.text}>
                                                <Text style={styles.name}>{item.user}</Text>
                                                <Text style={styles.message}>{item.lastMessage}</Text>
                                            </View>
                                        </View>
                                        <View style={styles.right}>
                                            <Text>{item.time}</Text>
                                        </View>
                                    </View>
                                </TouchableNativeFeedback>

                            )
                        })
                    }
                </ScrollView>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    scrollView: {
    
    },
    item: {
        borderStyle: 'solid', 
        borderColor: '#eee',
        borderBottomWidth: 2,

        paddingVertical: 20,
        paddingHorizontal: 20,

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    circle: {
        backgroundColor: 'red', 
        width: 70,
        height: 70,
        borderRadius: 100/2,
    },
    right: {
        paddingLeft: 20,
    },
    left: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        flex: 1
    },
    text: {
        marginLeft: 20,
    },
    name: {
        fontWeight: '600',
        fontSize: 22
    },
    message: {
        fontSize: 18
    },
})

export default Users;