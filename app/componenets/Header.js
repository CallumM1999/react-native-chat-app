import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = props => {

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Header</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {    
        backgroundColor: '#333',
        padding: 10,
    },
    heading: {
        fontSize: 30,
        color: 'white',
        textAlign: 'center'
    }
})


export default Header;