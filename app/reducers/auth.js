const defaultState = () => {
    return {
        loggedIn: false,
        token: null,
        username: null
    }
}

const auth = (state = defaultState(), action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                loggedIn: true,
                token: action.token,
                username: action.username
            }
        case 'LOGOUT':
            return {
                ...state,
                loggedIn: false,
                token: null,
                username: null
            }






        default:
            return state;
    }
}

export default auth;