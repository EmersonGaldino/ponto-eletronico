import {action} from 'typesafe-actions';
import {TypeUser} from './types';

export const userRegister = (data) => action(TypeUser.USER_REQUEST, {data});

export const loadingProfile = () => action(TypeUser.USER_PROFILE_REQUEST);

export const userRegisterSuccess = (data) => action(TypeUser.USER_REGISTER_SUCCESS, {data})

export const userRegisterFailure = () => action(TypeUser.USER_REGISTER_FAILURE);

export const existLoginOrEmail = (data) => action(TypeUser.USER_EXISTS_EMAIL_REQUEST, {data})

export const existLoginOrEmailSuccess = (data) => action(TypeUser.USER_EXISTS_EMAIL_OR_LOGIN_SUCCESS, {data})

export const existsLoginOrEmailFailure = () => action(TypeUser.USER_EXISTS_EMAIL_OR_LOGIN_FAILURE)