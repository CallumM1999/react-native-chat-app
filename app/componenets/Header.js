import React, { Component } from 'react';
import { View, Text, TouchableNativeFeedback } from 'react-native';

import styles from '../styles/header';

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

export default Header;