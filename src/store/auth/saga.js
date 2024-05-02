import api from '../../Services/api';
import { toast } from 'react-toastify';
import { call, put } from 'redux-saga/effects';
import { signInFailure, signInSuccess } from './actions';
import {showToast} from "../Toast/actions";


export function* signIn({ payload }) {
  try {
    const { data: login } = yield call(
      api.post,
      `Authentication/Token`,
      payload
    );
    if (!login.success) {
      toast.error('Falha ao logar!');
      return;
    }

    localStorage.setItem('accessToken',login.objectReturn.token )
    yield put(
      signInSuccess(
        login.objectReturn.token,

          login.objectReturn.profile,

        (login.userInfo = {
          name: login.objectReturn.nome,
          email: login.objectReturn.email,
          Id: login.objectReturn.usuarioId,
        })
      )
    );
  } catch (error) {
    toast.error('Falha ao logar!');
    yield put(signInFailure());
  }
}
