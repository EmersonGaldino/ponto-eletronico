import {action} from 'typesafe-actions';
import {NewsTypes} from './types';

export const loadingNews = () => action(NewsTypes.NEWS_REQUEST);

export const failLoadNews =() => action(NewsTypes.NEWS_LOAD_FAILURE);

export const successLoadNews = (data) => action(NewsTypes.NEWS_LOAD_SUCCESS, {data})