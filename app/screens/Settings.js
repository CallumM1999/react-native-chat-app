import React, { Component } from 'react';
import { Text, View, Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { logoutRequest, deleteAccount } from '../actions/auth';
import Container from '../componenets/Container';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from '../styles/Settings';
import SettingsButton from '../componenets/SettingsButton';
import { capitalize } from '../utils/utils';

class Settings extends Component {
	render() {
		return (
			<Container back={Actions.pop} heading='Settings'>

				<View style={styles.accountContainer}>
					<View style={styles.accountTitle}>
						<View style={styles.circle}><Icon name='account-circle' size={100} color='black' style={{}} /></View>
					</View>

					<Text style={styles.accountField}>{this.props.email}</Text>

					<View style={styles.accountUnderlineContainer}>
						<View style={styles.accountUnderline} />
					</View>

					<Text style={styles.accountField}>{capitalize(this.props.fname)} {capitalize(this.props.lname)}</Text>
				</View>

				<SettingsButton
					title='Logout'
					onPress={() => this.props.dispatch(logoutRequest())}
				/>

				<SettingsButton
					title='Delete Account'
					onPress={() => Alert.alert(
						'Delete Account',
						'Are you sure?',
						[
							{ text: 'Yes', onPress: () => this.props.dispatch(deleteAccount(this.props.token)) },
							{ text: 'Cancel' }
						]
					)}
					backgroundColor='hsl(350, 50%, 50%)'
				/>
			</Container>
		);
	}
}

Settings.propTypes = {
	email: PropTypes.string.isRequired,
	fname: PropTypes.string.isRequired,
	lname: PropTypes.string.isRequired,
	dispatch: PropTypes.func,
	token: PropTypes.string.isRequired,
};

const mapStateToProps = ({ auth }) => ({
	email: auth.email,
	fname: auth.fname,
	lname: auth.lname,
	token: auth.token
});

export default connect(mapStateToProps)(Settings);