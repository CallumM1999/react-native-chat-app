const defaultState = () => ({ 
    messages: {
        1: {
            title: 'room 1',
            messages: [
                { message: 'default message', username: '5c11429cdf1cd416b2b8b452', room: 1,  time: '17:45' }
            ]
        },
        2: {
            title: 'Second room',
            messages: [
                { message: 'default message', username: '5c11429cdf1cd416b2b8b452', room: 2,  time: '17:45' }
            ]
        }
    }
 });

const messages = (state = defaultState(), action) => {
    switch(action.type) {
        case 'NEW_MESSAGE': 
            return {
                messages: {
                    ...state.messages,

                    [action.message.room]: {
                        ...state.messages[action.message.room],
                        messages: [
                            ...state.messages[action.message.room].messages,
                            action.message
                        ]
                    }
                }
            }

        default:
            return state;
    }
}

export default messages;