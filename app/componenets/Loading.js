import React from 'react';
import { Text, View } from 'react-native';

import styles from '../styles/Loading'

const Loading = props => (
    <View style={styles.container} >
        <Text style={styles.text}>Callum-Chat</Text>
        <Text style={styles.loading}>Loading...</Text>
    </View>
);

export default Loading