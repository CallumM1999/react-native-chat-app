import React, { Component } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';


import Container from '../componenets/Container';
import Message from '../componenets/Message';
import Input from '../componenets/Input';


class Chat extends Component {
    constructor(props) {
        super(props);

        this.sendMessage = this.sendMessage.bind(this);
        this.addLocalMessage = this.addLocalMessage.bind(this);

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

        for (let i=0;i<50;i++) {
            const user = users[Math.floor(Math.random() * 2)];
            const message = possibleMessages[Math.floor(Math.random() * possibleMessages.length)];

            messages.push({ message, user })
        }
    

        this.setState({
            messages
        });
    }

    sendMessage(message) {
        console.log(`Sending message => ${message}`)
        this.addLocalMessage(message);
    }

    addLocalMessage(message) {
        this.setState(prev => ({
            messages: [
                ...prev.messages,
                {
                    message,
                    user: 'me'
                }
            ]
        }))
    }

    render() {
        return (
            <Container 
                heading='some user'
                back={Actions.pop}
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

                <Input 
                    sendMessage={this.sendMessage}
                />
                
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    scrollView: {
    
    },

})

export default Chat;