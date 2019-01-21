import { AsyncStorage } from 'react-native';
import jwt_decode from 'jwt-decode';
import post_login from '../requests/post_login';
import post_delete from '../requests/post_delete';

const clearMessages = () => ({ type: 'CLEAR_MESSAGES' });
const logout = () => ({ type: 'LOGOUT' });

export const logoutRequest = () => async dispatch => {
	const keys = await AsyncStorage.getAllKeys();
	const msgKeys = keys.filter(item => (item.includes('msg__') || item === 'token'));

	AsyncStorage.multiRemove(msgKeys)
		.then(() => {
			dispatch(clearMessages());
			dispatch(logout());
		})
		.catch(err => console.log('error clearing local storage', err));
};

const login = ({ token, fname, lname, _id, email }) => ({
	type: 'LOGIN',
	token,
	fname,
	lname,
	_id,
	email
});

export const loginRequest = (email, password) => async dispatch => {
	dispatch(loginLoading());

	const response = await post_login({ email, password });

	if (response.hasOwnProperty('err')) {
		return dispatch(loginError(`error setting token ${response.err}`));
	}

	if (response.hasOwnProperty('status') && response.status != 200) {
		return dispatch(loginError(`Status: ${response.status}`));
	}

	const { token } = response;
	const decoded = jwt_decode(token);

	AsyncStorage.setItem('token', token)
		.then(() => dispatch(login({ token, _id: decoded._id, fname: decoded.fname, lname: decoded.lname, email: decoded.email })))
		.catch(err => dispatch(loginError(`error setting token ${err}`)));

};


export const loadToken = () => dispatch => {
	dispatch(tokenLoading());

	AsyncStorage.getItem('token')
		.then(token => {
			if (token === null) return dispatch(tokenError('Token is null'));
			const decoded = jwt_decode(token);
			const timeStamp = new Date / 1000;

			if (decoded.exp < timeStamp) {
				AsyncStorage.removeItem('token')
					.then(() => dispatch(tokenError('Token expired')))
					.catch(() => dispatch(tokenError('Token expired, error deleting from AsyncStorage')));
			} else {
				dispatch(login({ token, _id: decoded._id, fname: decoded.fname, lname: decoded.lname, email: decoded.email }));
			}
		})
		.catch(err => dispatch(tokenError(err)));
};

const loginLoading = () => ({ type: 'LOGIN_LOADING' });

export const loginError = (error) => ({ type: 'LOGIN_ERROR', error });

const tokenLoading = () => ({ type: 'TOKEN_LOADING' });

const tokenError = error => ({ type: 'TOKEN_ERROR', error });



export const deleteAccount = token => async dispatch => {
	console.log('delete account action');
	const response = await post_delete({ token });

	console.log('response', response);

	if (response.error) {
		console.log('delete account error', response.error);
	}

	if (response.status === 200) {
		dispatch(logoutRequest());
	}
};