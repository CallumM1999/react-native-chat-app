/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Router, Scene, Stack, ActionConst } from 'react-native-router-flux';

import Users from './app/screens/Users';
import Chat from './app/screens/Chat';
import Settings from './app/screens/Settings';
import Login from './app/screens/Login';


type Props = {};
export default class App extends Component<Props> {
    constructor(props) {
        super(props);

        this.requireAuth = this.requireAuth.bind(this);
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);

        this.state = {
            loggedIn: false
        }
    }

    login(callback)  {
        this.setState({ loggedIn: true }, callback)
    }

    logout() {
        this.setState({ loggedIn: false });
    }

    requireAuth() {
        if (!this.state.loggedIn) {
            Actions.push('login');
        }
    }

  render() {
    return (
        <Router>
            <Scene 
                key='root'
                hideNavBar
                duration={0}
            >

                <Scene 
                    key='login'
                    component={Login}
                    title='Login'
                    login={this.login}

                    initial
                    
                />

                <Stack 
                    key='app' 
                    onEnter={this.requireAuth}
                    hideNavBar
                    duration={0}

                    type={ActionConst.RESET}
                    // should disable android back button https://stackoverflow.com/questions/41791107/react-native-router-flux-disabling-android-back-button-from-going-back-to-login
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
                        logout={this.logout}
                    />
                </Stack>

               

            </Scene>
        </Router>
    )
  }
}