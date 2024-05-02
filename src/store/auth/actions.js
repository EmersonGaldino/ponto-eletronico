import { action } from 'typesafe-actions';
import { AuthTypes } from './types';

export const authState = (node, key, value) =>
  action(AuthTypes.AUTH_STATE, { node, key, value });

export const signInRequest = (data) => ({
  type: AuthTypes.SIGN_IN_REQUEST,
  payload: data,
});

export const signInSuccess = (accessToken, profile,userInfo, refreshToken) =>
  action(AuthTypes.SIGN_IN_SUCCESS, {
    accessToken,
      profile,
    userInfo,
    refreshToken,
  });

export const authRefresh = (token) => action(AuthTypes.AUTH_REFRESH, { token });

export const signInFailure = () => action(AuthTypes.SIGN_IN_FAILURE);

export const signInStart = () => action(AuthTypes.SIGN_IN_START);

export const signOut = (text) => action(AuthTypes.SIGN_OUT, { text });
