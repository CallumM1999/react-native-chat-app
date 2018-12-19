import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from './Header';

const Container = ({ children, heading, back }) => (
    <View style={styles.page}>
        <Header heading={heading} back={back} />
    
        <View style={styles.container}>
            {children}
        </View>
    </View>
);

const styles = StyleSheet.create({
    page: {
        height: '100%',
        display: 'flex'
    },
    container: {
        width: '100%',
        overflow: 'hidden',
        flex: 1,
    }
});

export default Container;