export const login = ({
    token,
    username
}) => ({
    type: 'LOGIN',
    token,
    username
});


export const logout = () => ({
    type: 'LOGOUT'
});