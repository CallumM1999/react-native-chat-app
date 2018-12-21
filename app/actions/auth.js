import { AsyncStorage } from 'react-native';
import jwt_decode from 'jwt-decode';


const logout = () => ({
    type: 'LOGOUT'
});

export const logoutRequest = () => {
    return dispatch => {
        AsyncStorage.removeItem('token')
        .then(res => dispatch(logout()))
        .catch(err => console.log('error deleting token', err));
    }
}

const login = (token, username) => ({
    type: 'LOGIN',
    token,
    username
});

export const loginRequest = (email, password) => {
    return dispatch => {
        dispatch(loginLoading());

        fetch('http://192.168.0.20:3000/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
            body: JSON.stringify({ email, password })
        })
        .then(response => {
            console.log('fetch response', response.status)
            const token = response.headers.get('authorization');

            if (response.status != 200) return dispatch(loginError(`Status: ${response.status}`));

            AsyncStorage.setItem('token', token)
            .then(res => dispatch(login({ token, username: 'someUsername3434' })))
            .catch(err => dispatch(loginError(`error setting token ${err}`)));

        })
        .catch(err => {
            console.log('fetch err', err);
            dispatch(loginError(`error setting token ${err}`));
        });

    } 
}

export const loadToken = () => {
    return dispatch => {
        dispatch(tokenLoading())

        AsyncStorage.getItem('token')
        .then(token => {
            if (token === null) return dispatch(tokenError('Token is null'));


            const decoded = jwt_decode(token);
            const dateNow = new Date();
            const timeStamp = dateNow / 1000;
    
            if (decoded.exp < timeStamp) {
                AsyncStorage.removeItem('token')
                .then(res => dispatch(tokenError('Token expired')))
                .catch(err => dispatch(tokenError('Token expired, error deleting from AsyncStorage')));
            } else {
                dispatch(login({ token, username: 'sumUrsnaym' }))
            }


        })
        .catch(err => dispatch(tokenError(err)));
    }
}

const loginLoading = () => ({
    type: 'LOGIN_LOADING'
});

export const loginError = (error) => ({
    type: 'LOGIN_ERROR',
    error
});

const tokenLoading = () => ({
    type: 'TOKEN_LOADING'
});

const tokenError = (error) => ({
    type: 'TOKEN_ERROR',
    error
});
