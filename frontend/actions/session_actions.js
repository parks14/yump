import * as SessionAPIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
});

export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
});

export const receiveErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});

export const clearErrors = errors => ({
    type: CLEAR_ERRORS,
    errors
})

export const signup = user => dispatch => {
    return (
        SessionAPIUtil.signup(user)
            .then(user => (
                dispatch(receiveCurrentUser(user))
            ), err => (
                dispatch(receiveErrors(err.responseJSON))
            ))
    )
};

export const login = user => dispatch => {
    return (
        SessionAPIUtil.login(user)
            .then(user => (
                dispatch(receiveCurrentUser(user))
            ), err => (
                dispatch(receiveErrors(err.responseJSON))
            ))
    )
};

export const logout = () => dispatch => {
    return (
        SessionAPIUtil.logout()
            .then(user => (
                dispatch(logoutCurrentUser())
            ))
    )
};
