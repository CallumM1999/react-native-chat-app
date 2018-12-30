import React, { Component } from 'react';
import { ScrollView, View, Text, StyleSheet, AsyncStorage } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

import Container from '../componenets/Container';

import User from '../componenets/User';

import { loadMessages } from '../actions/messages'

class Users extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.dispatch(loadMessages());
    }

    render() {
        return (
            <Container heading='Users' openSettings={() => Actions.settings()}>
                <ScrollView>
                    {
                        Object.keys(this.props.messages).map((item, index) => {
                            const room = this.props.messages[item];
                            const lastMessage = room.messages[room.messages.length - 1];

                            return (
                                <User
                                    key={index}
                                    title={room.title}
                                    lastMessage={lastMessage.message}
                                    time={lastMessage.time}
                                    room={item}
                                />
                            )
                        })
                    }
                </ScrollView>

                <View style={styles.add}>
                    <Text style={styles.addText}>+</Text>
                </View>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    add: {
        'position': 'absolute',
        'bottom': 20,
        right: 20,
        width: 60,
        height: 60,
        borderRadius: 100 / 2,
        backgroundColor: 'red',

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        shadowColor: "#000000",
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 0
        }
    },
    addText: {
        color: 'white',
        fontSize: 40,
        fontWeight: '100',
        // backgroundColor: 'green',
        position: 'relative'
        // width: '100%',
        // height: '100%'


    }
})

const mapStateToProps = ({ messages }) => ({
    messages: messages.messages
});

export default connect(mapStateToProps)(Users);