import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import { connect } from 'react-redux';
import Dashboard from '../screens/Dashboard';
import Chat from '../screens/Chat';
import Settings from '../screens/Settings';
import Login from '../screens/Login';
import NewRoom from '../screens/NewRoom';
import PropTypes from 'prop-types';

const AppRouter = props => {
	if (!props.loggedIn) return <Login />;

	return (
		<Router>
			<Scene key='root' hideNavBar duration={0} >
				<Scene
					key='dashboard'
					component={Dashboard}
					title='dashboard'
					initial
				/>

				<Scene
					key='chat'
					component={Chat}
					title='Chat'
				/>

				<Scene
					key='newRoom'
					component={NewRoom}
					title='New Room'
				/>

				<Scene
					key='settings'
					component={Settings}
					title='Settings'
				/>

			</Scene>
		</Router>
	);
};

AppRouter.propTypes = {
	loggedIn: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ auth }) => ({
	loggedIn: auth.loggedIn
});

export default connect(mapStateToProps)(AppRouter);