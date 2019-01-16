export const addMessage = message => dispatch => {
	dispatch({
		type: 'ADD_MESSAGE',
		room: message.room,
		message,
	});
};

export const openRoom = room => dispatch => {
	dispatch({
		type: 'OPEN_ROOM',
		room
	});
};