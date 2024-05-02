import {all, takeLatest} from 'redux-saga/effects';

//Auth
import {AuthTypes} from '../auth/types';
import {signIn} from '../auth/saga';


//Menu
import {MenuTypes} from "../menu/types";
import {loadingMenu} from '../menu/saga'

//Point
import {PointTypes} from "../Point/types";
import {pointRegister, loadingPoint} from "../Point/saga";

//User
import {TypeUser} from '../User/types'
import {userRegister, userExistsEmail} from '../User/saga';

//News
import {NewsTypes} from '../News/types';
import {loadgindNews} from '../News/saga'

export default function* rootSaga() {
    return yield all(
        [
            takeLatest(NewsTypes.NEWS_REQUEST, loadgindNews),
            takeLatest(TypeUser.USER_EXISTS_EMAIL_REQUEST, userExistsEmail),
            takeLatest(TypeUser.USER_REQUEST, userRegister),
            takeLatest(AuthTypes.SIGN_IN_REQUEST, signIn),
            takeLatest(MenuTypes.MENU_REQUEST, loadingMenu),
            takeLatest(PointTypes.POINT_REGISTER, pointRegister),
            takeLatest(PointTypes.POINT_REQUEST, loadingPoint)]);
}
