import React, { Component } from 'react';
import { ScrollView, AsyncStorage } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Container from '../componenets/Container';
import Message from '../componenets/Message';
import Input from '../componenets/Input';
import socket from '../socket/socket';
import { connect } from 'react-redux';
import { newMessage } from '../actions/messages'

class Chat extends Component {
    constructor(props) {
        super(props);
        this.sendMessage = this.sendMessage.bind(this);
        this.addLocalMessage = this.addLocalMessage.bind(this);
    }

    sendMessage(message) {
        console.log(`Sending message => ${message}`);
        this.addLocalMessage(message);
        socket.sendMessage(message, this.props._id, this.props.room);
    }

    addLocalMessage(message) {
        const formattedMessage = { message, username: this.props._id, room: this.props.room };
        this.props.dispatch(newMessage(formattedMessage));
    }

    render() {
        const rm = this.props.room;
        // console.log('props', this.props);
        // console.log('room', this.props.room);
        // console.log('messages', this.props.messages)
        // console.log('messages in room', this.props.messages[rm].messages);

        // console.log('chat props', this.props.messages[rm])

        return (
            <Container heading={this.props.messages[rm].title} back={Actions.pop} >
                <ScrollView>
                    {this.props.messages.hasOwnProperty(rm) &&
                        this.props.messages[rm].messages.map((item, index) => (
                            <Message
                                room={rm}
                                message={item.message}
                                username={item.username}
                                user_id={item}
                                key={index}
                                _id={this.props._id}
                                prev={index - 1 >= 0 ? this.props.messages[rm].messages[index - 1].username : false}
                                next={this.props.messages[rm].messages.length >= index + 2 ? this.props.messages[rm].messages[index + 1].username : false}
                            />
                        ))
                    }
                </ScrollView>
                <Input sendMessage={this.sendMessage} />
            </Container>
        )
    }
}

// const styles = StyleSheet.create({});

const mapStateToProps = ({ messages, auth }) => ({
    messages: messages.messages,
    _id: auth._id
})

export default connect(mapStateToProps)(Chat);