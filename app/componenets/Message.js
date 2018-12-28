import React from 'react';
import { View, Text } from 'react-native';
import getStyleSheet from '../styles/message';

const Message = ({ message, username, prev, next, _id }) => {
    // POSITIONS
    // ---------
    // single - round both corners
    // first  - round first corner
    // last   - round last corner
    // middle - no round corners

    const frontCorner = prev !== username;
    const backCorner = next !== username;
    const position = frontCorner && backCorner ? 'single' : frontCorner && !backCorner ? 'first' : !frontCorner && backCorner ? 'last' : 'middle'; 

    const currentUser = username === _id;

    const styles = getStyleSheet({ user: currentUser, position });
        // console.log({ message, username, prev, next, _id }, 'current user', username === _id)
    return (
        <View style={styles.item} >
            
            { (!currentUser && (next !== username || !next)) && <View style={styles.circle}></View> }

            <View style={styles.message}>
                <Text style={styles.messageText}>{message}</Text>
            </View>
            
        </View>
    )
};

export default Message;