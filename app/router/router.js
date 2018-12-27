import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import { connect } from 'react-redux'
import Users from '../screens/Users';
import Chat from '../screens/Chat';
import Settings from '../screens/Settings';
import Login from '../screens/Login';

const AppRouter = props => {
    if (!props.loggedIn) return <Login />;
        
    return (
        <Router>
            <Scene key='root' hideNavBar duration={0} >
                <Scene 
                    key='users'
                    component={Users}
                    title='Users'
                    initial
                />

                <Scene 
                    key='chat'
                    component={Chat}
                    title='Chat'
                />

                <Scene 
                    key='settings'
                    component={Settings}
                    title='Settings'
                />

            </Scene>
        </Router>
    )
}

const mapStateToProps = ({ auth }) => ({
    loggedIn: auth.loggedIn
})

export default connect(mapStateToProps)(AppRouter);