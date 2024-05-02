import { action } from 'typesafe-actions';
import { ToastTypes } from './types';

export const showToast = (options) => action(ToastTypes.SHOW, options);
export const hideToast = () => action(ToastTypes.HIDE);