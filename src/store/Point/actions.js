import {action} from 'typesafe-actions';
import {PointTypes} from './types';

export const pointRegister = () => action(PointTypes.POINT_REGISTER);

export const loadingPoint = (data) => action(PointTypes.POINT_REQUEST,{data});

export const loadSuccess =(data) => action(PointTypes.POINT_LOAD_SUCCESS,{data})

export const registerSuccess = (data) => action(PointTypes.POINT_REGISTER_SUCCESS, { data })

export const pointLoadFailure = () => action(PointTypes.POINT_LOAD_FAILURE);

export const pointRegisterFailure = () => action(PointTypes.POINT_REGISTER_FAILURE);