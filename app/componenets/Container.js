import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from './Header';

const Container = ({ children }) => (
    <View>
        <Header />
    
        <View style={styles.container}>
            {children}
        </View>
    </View>
);

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        padding: 20
    }
});

export default Container;