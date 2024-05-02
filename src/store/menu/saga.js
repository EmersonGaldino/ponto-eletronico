import {call, put} from 'redux-saga/effects';
import api from '../../Services/api';
import {toast} from 'react-toastify';
import * as MenuActions from './actions';

export function* loadingMenu() {
    try {
        const {data} = yield call(api.get, 'Menu');
        yield put(MenuActions.menuLoadSuccess(data));
    } catch (error) {
        // yield put(toast.error('Falha ao tentar carregar menu!'));
        yield put(MenuActions.menuLoadFailure());
    }
}
