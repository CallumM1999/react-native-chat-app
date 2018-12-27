const defaultState = () => ({
   messages: [] 
});

const messages = (state = defaultState(), action) => {
    switch(action.type) {
        case 'NEW_MESSAGE': 
            return {
                messages: [
                    ...state.messages,
                    ...action.messages
                ]
            }

        default:
            return state;
    }
}

export default messages;