import React from 'react';
import { View, Text, TouchableNativeFeedback } from 'react-native';
import { Actions } from 'react-native-router-flux';

import styles from '../styles/user';

const User = props => (
    <TouchableNativeFeedback
        onPress={() => Actions.chat({ room: props.room })}
        background={TouchableNativeFeedback.SelectableBackground()}
    >
        <View style={styles.item} >
            <View style={styles.left}>
                <View style={styles.circle} />
                <View style={styles.text}>
                    <Text style={styles.name}>{props.title}</Text>
                    <Text style={styles.message}>{props.lastMessage}</Text>
                </View>
            </View>
            <View style={styles.right}>
                <Text>{props.time}</Text>
            </View>
        </View>
    </TouchableNativeFeedback>
);

export default User;