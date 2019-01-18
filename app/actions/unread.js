export const addMessages = messages => async dispatch => {
	const msgLen = messages.length;

	for (let i = 0; i < msgLen; i++) {
		await dispatch({
			type: 'ADD_MESSAGE',
			room: messages[i].room,
			message: messages[i],
		});
	}
};

export const openRoom = room => dispatch => {
	dispatch({
		type: 'OPEN_ROOM',
		room
	});
};