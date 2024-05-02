import { action } from 'typesafe-actions';
import { MenuTypes } from './types';

export const loadingMenu = () => action(MenuTypes.MENU_REQUEST);

export const menuLoadSuccess = (data) => action(MenuTypes.MENU_LOAD_SUCCESS, { data });

export const menuLoadFailure = () => action(MenuTypes.MENU_LOAD_FAILURE);
