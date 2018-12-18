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
        height: 80,
        width: '100%',
        backgroundColor: 'red'
    },
    heading: {
        fontSize: 28,
        textAlign: 'center',
        color: 'white',
        marginTop: 20
    }
})


export default Header;