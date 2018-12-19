import React, { Component } from 'react';
import { StyleSheet, ScrollView } from 'react-native';

import Container from '../componenets/Container';
import Message from '../componenets/Message';

class Chat extends Component {
    constructor(props) {
        super(props);

        this.handleBackButton = this.handleBackButton.bind(this);

        this.state = {
            messages: []
        }

    }

    componentWillMount() {
        const messages = [];
        const users = [
            'me', 
            'other'
        ]
        const possibleMessages = [
            'a asdasd',
            'asd',
            'adasad ajdsa dasjd asjd asdj d',
            'asd asd asdasd ad',
            'asdasdasdasdasd',
            'addsfsdfsdfsdf', 
            'adasdasdasdasdasd',
            'asd asdsa ',
            'asdasd',
            'adas',
            'asdsad'
        ]

        for (let i=0;i<100;i++) {
            const user = users[Math.floor(Math.random() * 2)];
            const message = possibleMessages[Math.floor(Math.random() * possibleMessages.length)];

            messages.push({ message, user })
        }
    

        this.setState({
            messages
        });
    }

    handleBackButton() {
        this.props.navigation.navigate('Users')
    }

    render() {
        return (
            <Container 
                heading='some user'
                back={this.handleBackButton}
            >
                <ScrollView style={styles.scrollView}>
                {
                    this.state.messages.map((item, index) => {
                        return (
                            <Message
                                message={item.message}
                                user={item.user}
                                index={index}
                                key={index}
                                prev={index-1 >= 0 ? this.state.messages[index -1].user : false}
                                next={this.state.messages.length >= index +2 ? this.state.messages[index +1].user : false}
                            />
                        )
                    })
                }
                </ScrollView>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    scrollView: {
    
    },
})

export default Chat;