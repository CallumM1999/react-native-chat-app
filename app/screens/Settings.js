import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux'

import { logout } from '../actions/auth';


import Container from '../componenets/Container'

class Settings extends Component {

    render() {
        return (
            <Container back={Actions.pop}>
                <Text>Settings Component</Text>

                <Button 
                    title='logout'
                    onPress={() => this.props.dispatch(logout())}
                />
            </Container>
        )
    }
}

export default connect()(Settings);