import {call, put} from 'redux-saga/effects';
import api from '../../Services/api';
import {showToast} from '../Toast/actions';
import {userRegisterFailure,userRegisterSuccess,existLoginOrEmailSuccess,existsLoginOrEmailFailure} from './actions'
import {toast} from "react-toastify";

const Url = 'User'

export function* userRegister(model) {
    try {
        const {data} = yield call(api.post, Url, model.payload.data);

        yield put(userRegisterSuccess(data.objectReturn));

        toast.success(` 🚀 Usuário criado com sucesso!`, {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });

    } catch (error) {
        yield put(showToast({
            message: `Call API Failed -- ${error} ---`,
            type: 'error',
            open: true
        }));
        yield put(userRegisterFailure());
    }
}

export function* userExistsEmail(model) {
    try {
        const {data} = yield call(api.get, `${Url}/${model.payload.data}`);
        yield put(existLoginOrEmailSuccess(data.objectReturn));

    } catch (error) {
        yield put(showToast({
            message: `Call API Failed -- ${error} ---`,
            type: 'error',
            open: true
        }));
        yield put(existsLoginOrEmailFailure());
    }
}