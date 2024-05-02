import {TypeUser} from './types';

const INITIAL_STATE = {
    loading: false,
    error: false,
    success: false,
    exists:false,
    user: {}
};

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TypeUser.USER_REQUEST:
            return {...state, loading: true};

        case TypeUser.USER_REGISTER_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                user: action.payload.data,
            };

        case TypeUser.USER_REGISTER_FAILURE:
            return {...state, loading: false, error: true, success: false};

        case TypeUser.USER_EXISTS_EMAIL_REQUEST:
            return {...state, loading: true};

        case TypeUser.USER_EXISTS_EMAIL_OR_LOGIN_SUCCESS:
            return {...state, loading: false, exists: action.payload.data};

        case TypeUser.USER_EXISTS_EMAIL_OR_LOGIN_FAILURE:
            return {...state, loading: false, error: true, success: false};

        default:
            return state;
    }
};

export default reducer;
