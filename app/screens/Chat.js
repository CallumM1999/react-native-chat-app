import React, { Component } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Container from '../componenets/Container';
import Message from '../componenets/Message';
import Input from '../componenets/Input';
import socket from '../socket/socket';
import { connect } from 'react-redux';

class Chat extends Component {
    constructor(props) {
        super(props);
        this.sendMessage = this.sendMessage.bind(this);
        this.addLocalMessage = this.addLocalMessage.bind(this);
    }

    sendMessage(message) {
        console.log(`Sending message => ${message}`);
        this.addLocalMessage(message);
        socket.sendMessage(message, this.props._id);
    }

    addLocalMessage(message) {
        const newMessage = { message, user: this.props._id };
        this.props.dispatch(newMessage([ newMessage ]));
    }

    render() {
        return (
            <Container heading='some user' back={Actions.pop} >
                <ScrollView style={styles.scrollView}>
                {
                    this.props.messages.map((item, index) => (
                        <Message
                            message={item.message}
                            user={item.user}
                            user_id={item}
                            key={index}
                            _id={this.props._id}
                            prev={index-1 >= 0 ? this.props.messages[index -1].user : false}
                            next={this.props.messages.length >= index +2 ? this.props.messages[index +1].user : false}
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