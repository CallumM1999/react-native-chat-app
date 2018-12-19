import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, TouchableNativeFeedback, ScrollView } from 'react-native';

import getStyleSheet from '../styles/message';



const Message = ({ index, message, user, prev, next }) => {
    // POSITIONS
    // ---------
    // single - round both corners
    // first  - round first corner
    // last   - round last corner
    // middle - no round corners

    const frontCorner = prev !== user;
    const backCorner = next !== user;
    const position = frontCorner && backCorner ? 'single' : frontCorner && !backCorner ? 'first' : !frontCorner && backCorner ? 'last' : 'middle'; 

    const styles = getStyleSheet({ user, position });
        // console.log('message from', user)
    return (
       
        <View style={styles.item} >
            
            { (user !== 'me' && (next === 'me' || !next)) && <View style={styles.circle}></View> }

            <View style={styles.message}>
                <Text style={styles.messageText}>{message}</Text>
            </View>
            
        </View>
    )
};

export default Message;