import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableNativeFeedback } from 'react-native';

const Header = props => {

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>{props.heading || 'Header'}</Text>

            {
                !!props.back && (

                    <TouchableNativeFeedback
                        onPress={props.back}
                    >
                        <View style={styles.backButton}>
                            <Text style={styles.backButtonText}>Back</Text>
                        </View>
                    </TouchableNativeFeedback>
                )
            }
            
        </View>
    );
}


const styles = StyleSheet.create({
    container: {    
        backgroundColor: '#333',

        width: '100%',
        height: 60,

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    heading: {
        fontSize: 30,
        color: 'white',
        textAlign: 'center'
    },

    backButton: {
        position: 'absolute',
        left: 10,
        display: 'flex',
        justifyContent: 'center'
    },
    backButtonText: {
        color: 'white',
        fontSize: 20
    }
})


export default Header;