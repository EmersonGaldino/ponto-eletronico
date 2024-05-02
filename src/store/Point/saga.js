import {call, put} from 'redux-saga/effects';
import api from '../../Services/api';
import {registerSuccess, pointLoadFailure, pointRegisterFailure, loadSuccess} from './actions'
import moment from "moment";
import {toast} from 'react-toastify';

const monthActual = moment().format("M")

export function* loadingPoint(month) {
    try {
        const {data} = yield call(api.get, `Point/${month.payload.data}`);
        yield put(loadSuccess(data.objectReturn));

        toast.success(` 🚀 Ponto do mês carregado com sucesso!`, {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });

    } catch (error) {
       toast.error('Error ao tentar carregar o ponto!',{
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });

        yield put(pointLoadFailure());
    }
}

export function* pointRegister() {
    try {
        const {data} = yield call(api.post, 'Point');
        yield put(registerSuccess(data.objectReturn));
       toast.success(data.message, {
            position: "bottom-center",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });



    } catch (error) {
        toast.error('Deu ruim',{
            position: "bottom-center",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        yield put(pointRegisterFailure());
    }
}