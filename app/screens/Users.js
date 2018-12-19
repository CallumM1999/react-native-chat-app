import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableNativeFeedback } from 'react-native';
import { Actions } from 'react-native-router-flux';

import Container from '../componenets/Container';

import styles from '../styles/users';

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
            <Container openSettings={() => Actions.settings()}>
                <ScrollView style={styles.scrollView}>
                    {
                        this.state.users.map((item, index) => {
                            return (

                                <TouchableNativeFeedback
                                    key={index}
                                    onPress={() => Actions.chat()}  
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

export default Users;