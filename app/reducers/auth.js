const defaultState = () => {
    return {
        loggedIn: false,
        token: null,
        username: null,


        tokenLoading: true,
        tokenError: null,

        loginLoading: false,
        loginError: null
    }
}

const auth = (state = defaultState(), action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                loggedIn: true,
                token: action.token,
                username: action.username,
                loginLoading: false,
                loginError: null,
                tokenLoading: false,
                tokenError: null
            }
        case 'LOGOUT':
            return {
                ...state,
                loggedIn: false,
                token: null,
                username: null
            }
        case 'LOGIN_LOADING':
            return {
                ...state,
                loginLoading: true,
                
            }
        case 'LOGIN_ERROR':
            return {
                ...state,
                loginLoading: false,
                loginError: action.error
            }
        
        case 'TOKEN_LOADING':
            return {
                ...state,
                tokenLoading: true
            }
        case 'TOKEN_ERROR':
            return {
                ...state,
                tokenLoading: false,
                tokenError: action.error
            }
        default:
            return state;
    }
}

export default auth;