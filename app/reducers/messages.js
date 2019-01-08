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
				// title: action.title,
				fname: action.fname,
				lname: action.lname,
				roomType: action.roomType,
				chat: [
					...action.chat
				]
			}
		};

	case 'ADD_ROOM':
		return {
			...state,
			[action.room]: {
				fname: action.fname,
				lname: action.lname,
				nickname: undefined,
				_id: action._id,
				roomType: action.roomType,
				room: action.room,
				chat: []
			},

		};
	case 'CLEAR_MESSAGES':
		return {};

	default:
		return state;
	}
};

export default messages;