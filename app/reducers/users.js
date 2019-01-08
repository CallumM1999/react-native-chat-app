const defaultState = () => ({
	users: []
});

const auth = (state = defaultState(), action) => {
	switch (action.type) {
	case 'UPDATE_USERS':
		return {
			...state,
			users: action.users
		};
	default:
		return state;
	}
};

export default auth;