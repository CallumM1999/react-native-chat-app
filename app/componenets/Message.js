import React from 'react';
import { View, Text } from 'react-native';
import getStyleSheet from '../styles/message';

const Message = ({ index, message, user, prev, next, _id }) => {
    // POSITIONS
    // ---------
    // single - round both corners
    // first  - round first corner
    // last   - round last corner
    // middle - no round corners

    const frontCorner = prev !== user;
    const backCorner = next !== user;
    const position = frontCorner && backCorner ? 'single' : frontCorner && !backCorner ? 'first' : !frontCorner && backCorner ? 'last' : 'middle'; 

    const currentUser = user === _id;

    const styles = getStyleSheet({ user: currentUser, position });
        // console.log({ message, user, prev, next, _id }, 'current user', user === _id)
    return (
       
        <View style={styles.item} >
            
            { (!currentUser && (next !== user || !next)) && <View style={styles.circle}></View> }

            <View style={styles.message}>
                <Text style={styles.messageText}>{message}</Text>
            </View>
            
        </View>
    )
};

export default Message;