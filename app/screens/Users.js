import React, { Component } from 'react';
import { ScrollView, View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

import Container from '../componenets/Container';

import User from '../componenets/User';

const Users = props => (
    <Container heading='Users' openSettings={() => Actions.settings()}>
        <ScrollView>
            {
                Object.keys(props.messages).map((item, index) => {
                    const room = props.messages[item];
                    const lastMessage = room.messages[room.messages.length -1];

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
    </Container>
);

const mapStateToProps = ({ messages }) => ({
    messages: messages.messages
});

export default connect(mapStateToProps)(Users);