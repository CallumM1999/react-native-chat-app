import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';

import authReducer from '../reducers/auth';
import messagesReducer from '../reducers/messages';
import usersReducer from '../reducers/users';

const configureStore = () => createStore(
	combineReducers({
		auth: authReducer,
		messages: messagesReducer,
		users: usersReducer
	}),
	applyMiddleware(thunkMiddleware)
);

const store = configureStore();

export default store;