import {call, put} from 'redux-saga/effects';
import api from '../../Services/api';
import {toast} from 'react-toastify';
import {failLoadNews,successLoadNews} from "../News/actions";

export function* loadgindNews(){
    try {
        const {data} = yield call(api.get, `News`);
        console.log(data)
        yield put(successLoadNews(data.objectReturn));

        toast.success(` 🚀 Noticias carregadas com sucesso!`, {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });

    } catch (error) {
        toast.error('Error ao tentar carregar as noticias!',{
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });

        yield put(failLoadNews());
    }
}