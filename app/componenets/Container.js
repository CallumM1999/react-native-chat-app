import React from 'react';
import { View } from 'react-native';
import Header from './Header';

import styles from '../styles/container';

const Container = ({ children, heading, back, openSettings }) => (
    <View style={styles.page}>
        <Header heading={heading} back={back} openSettings={openSettings} />

        <View style={styles.container}>
            {children}
        </View>
    </View>
);

export default Container;