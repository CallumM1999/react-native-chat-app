import { AsyncStorage } from 'react-native';
import jwt_decode from 'jwt-decode';

const logout = () => ({ type: 'LOGOUT' });

export const logoutRequest = () => dispatch => {
    AsyncStorage.removeItem('token')
    .then(res => dispatch(logout()))
    .catch(err => console.log('error deleting token', err));
};

const login = ({token, username, _id}) => ({
    type: 'LOGIN',
    token,
    username,
    _id
});

export const loginRequest = (email, password) => dispatch => {
    dispatch(loginLoading());

    fetch('http://192.168.0.20:3000/login', {
        method: 'POST',
        headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
        body: JSON.stringify({ email, password })
    })
    .then(response => {
        const token = response.headers.get('authorization');
        if (response.status != 200) return dispatch(loginError(`Status: ${response.status}`));
        const decoded = jwt_decode(token);

        AsyncStorage.setItem('token', token)
        .then(res => dispatch(login({ token, username: decoded.username, _id: decoded._id })))
        .catch(err => dispatch(loginError(`error setting token ${err}`)));

    })
    .catch(err => dispatch(loginError(`error setting token ${err}`)));
} 


export const loadToken = () => dispatch => {
    dispatch(tokenLoading());

    AsyncStorage.getItem('token')
    .then(token => {
        if (token === null) return dispatch(tokenError('Token is null'));

        const decoded = jwt_decode(token);
        const timeStamp = new Date / 1000;

        if (decoded.exp < timeStamp) {
            AsyncStorage.removeItem('token')
            .then(res => dispatch(tokenError('Token expired')))
            .catch(err => dispatch(tokenError('Token expired, error deleting from AsyncStorage')));
        } else {
            dispatch(login({ token, username: decoded.username, _id: decoded._id }))
        }
    })
    .catch(err => dispatch(tokenError(err)));
}

const loginLoading = () => ({ type: 'LOGIN_LOADING' });

export const loginError = (error) => ({ type: 'LOGIN_ERROR', error });

const tokenLoading = () => ({ type: 'TOKEN_LOADING' });

const tokenError = error => ({ type: 'TOKEN_ERROR', error });