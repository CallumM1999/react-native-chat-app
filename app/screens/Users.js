import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

import Container from '../componenets/Container';

import User from '../componenets/User';

class Users extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [
                // { title: 'Room 1', lastMessage: `user : ${this.props.messages['1'][0].message}`, time: '17:23', room: 1 },
                // { title: 'Room 2', lastMessage: 'last message..', time: '17:23', room: 2 },
                // { title: 'Room 3', lastMessage: 'last message..', time: '17:23', room: 3 },
                // { title: 'Room 4', lastMessage: 'last message..', time: '17:23', room: 4 },
                // { title: 'Room 5', lastMessage: 'last message..', time: '17:23', room: 5 },
                // { title: 'Room 6', lastMessage: 'last message..', time: '17:23', room: 6 },  
            ]
        }
    }

    componentWillMount() {
        const users = [];
        // console.log('load conversations');
        // console.log(this.props.messages)

        for (let key in this.props.messages) {
            if (this.props.messages.hasOwnProperty(key)) {
                const room = this.props.messages[key];
                const lastMessage = room.messages[room.messages.length -1];
                users.push({ title: room.title, lastMessage: lastMessage.message, time: lastMessage.time, room: key });
            }
        }

        this.setState({ users });
    }

    render() {
        return (
            <Container heading='Users' openSettings={() => Actions.settings()}>
                <ScrollView>
                    {
                        this.state.users.map((item, index) => (
                            <User 
                                key={index}      
                                title={item.title}   
                                lastMessage={item.lastMessage}
                                time={item.time} 
                                room={item.room}                       
                            />
                        ))
                    }
                </ScrollView>
            </Container>
        );
    }
}

const mapStateToProps = ({ messages }) => ({
    messages: messages.messages
});

export default connect(mapStateToProps)(Users);