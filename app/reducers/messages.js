const defaultState = () => ({
    messages: {}
});

const messages = (state = defaultState(), action) => {
    switch (action.type) {
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
        case 'LOAD_MESSAGES':
            return {
                messages: {
                    ...action.messages
                }
            }

        default:
            return state;
    }
}

export default messages;