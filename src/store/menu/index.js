import { MenuTypes } from './types';

const INITIAL_STATE = {
  menu: [],
  loading: false,
  error: false,
  success:false,
  selected:'Home',
};

const reducer = (state = INITIAL_STATE, action) => {
  console.log(action)
  switch (action.type) {
    case MenuTypes.MENU_REQUEST:
      return { ...state, loading: true };
    case MenuTypes.MENU_LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        selected:'',
        menu: action.payload.data.objectReturn,
      };
    case MenuTypes.MENU_LOAD_FAILURE:
      return { ...state, loading: false, error: true, success: false,menu:[] };
    default:
      return state;
  }
};

export default reducer;
