import React, { Component } from 'react';
import { Text, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { logoutRequest } from '../actions/auth';
import Container from '../componenets/Container';
import PropTypes from 'prop-types';

class Settings extends Component {
	render() {
		return (
			<Container back={Actions.pop} heading='Settings'>

				<Text>Email: {this.props.email}</Text>
				<Text>User: {this.props.fname} {this.props.lname}</Text>

				<Button
					title='logout'
					onPress={() => this.props.dispatch(logoutRequest())}
				/>
			</Container>
		);
	}
}

Settings.propTypes = {
	email: PropTypes.string.isRequired,
	fname: PropTypes.string.isRequired,
	lname: PropTypes.string.isRequired,
	dispatch: PropTypes.func
};

const mapStateToProps = ({ auth }) => ({
	email: auth.email,
	fname: auth.fname,
	lname: auth.lname,
});

export default connect(mapStateToProps)(Settings);