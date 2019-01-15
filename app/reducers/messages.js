const defaultState = () => ({});

const messages = (state = defaultState(), action) => {
	switch (action.type) {
	case 'LOCAL_MESSAGE': {
		return {
			...state,
			[action.room]: {
				...state[action.room],

				chat: [
					...state[action.room].chat,
					action.message
				]

			}
		};
	}
	case 'NEW_MESSAGE':
		return {
			...state,

			[action.message.room]: state[action.message.room] ?
				{
					...state[action.message.room],
					chat: [
						...state[action.message.room].chat,
						action.message
					]
				}
				:
				{
					chat: [action.message]
				}
		};
	case 'LOAD_MESSAGES':
		return {
			...state,
			...action.messages
		};
	case 'NEW_ROOM':
		return {
			...state,
			[action.room]: {
				fname: action.fname,
				lname: action.lname,
				roomType: action.roomType,
				chat: [
					...action.chat
				]
			}
		};

	case 'CLEAR_MESSAGES':
		return {};

	case 'UPDATE_STATUS':
		return {
			...state,
			[action.room]: {
				...state[action.room],
				chat: state[action.room].chat.map((item, index) => index === action.index ? { ...item, status: action.status } : item)
			}
		};

	case 'DELETE_CONVERSATION': {
		const copy = Object.assign({}, state);
		delete copy[action.room];
		return copy;
	}

	case 'RESEND_MESSAGE':
		return {
			...state,
			[action.room]: {
				...state[action.room],
				chat: [
					...state[action.room].chat.filter((item, index) => index !== action.index),
					action.message
				]

			}
		};

	default:
		return state;
	}
};

export default messages;