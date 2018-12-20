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
            <Scene 
                key='root'
                hideNavBar
                duration={0}
                // type={ActionConst.RESET}
                // // should disable android back button https://stackoverflow.com/questions/41791107/react-native-router-flux-disabling-android-back-button-from-going-back-to-login
            >
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

const mapStateToProps = ({ loggedIn }) => ({
    loggedIn
})

export default connect(mapStateToProps)(AppRouter);