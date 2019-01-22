const defaultState = () => ({

});

const unread = (state = defaultState(), action) => {
	switch (action.type) {
	case 'ADD_MESSAGE':

		return {
			...state,
			[action.room]: true
		};

	case 'OPEN_ROOM':
		return Object.keys(state).filter(room => room !== action.room);

	default:
		return state;
	}
};

export default unread;