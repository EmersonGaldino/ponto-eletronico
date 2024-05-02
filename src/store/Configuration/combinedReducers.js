import {combineReducers} from 'redux';

//Auth
import {AuthTypes} from '../auth/types';
import auth from '../auth';

//Menu
import menu from '../menu'

//Point
import point from '../Point';

//Toast
import toast from '../Toast'

//User
import user from '../User';

//News
import news from '../News';

const appReducer = combineReducers({
    auth, menu, point,toast, user, news
});

const rootReducer = (state, action) => {
    if (
        action.type === AuthTypes.SIGN_IN_START ||
        action.type === AuthTypes.SIGN_OUT
    ) {
        state = undefined;
    }
    return appReducer(state, action);
};

export default rootReducer;
