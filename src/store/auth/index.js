import { AuthTypes } from './types';

const INITIAL_STATE = {
  loading: false,
  success: false,
  accessToken: '',
  refreshToken: '',
  userInfo: {},
  profile:{},
  message:''
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AuthTypes.AUTH_REFRESH:
      return {
        ...state,
        token: action.payload.token,
      };
    case AuthTypes.AUTH_STATE:
      return {
        ...state,
        [action.payload.node]: {
          ...state[action.payload.node],
          [action.payload.key]: action.payload.value,
        },
      };
    case AuthTypes.SIGN_IN_START:
      return {
        ...state,
        loading: true,
        success: false,
        accessToken: undefined,
        refreshToken: undefined,
        userInfo: {},
        profile: {}
      };
    case AuthTypes.SIGN_IN_REQUEST:
      return {
        ...state,
        loading: true,
        success: false,
        accessToken: undefined,
        refreshToken: undefined,
        message:'',
        userInfo: {},
        profile: {}
      };
    case AuthTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        userInfo: action.payload.userInfo,
        profile: action.payload.profile,
        accessToken: action.payload.accessToken,
        refreshToken: action.payload.refreshToken,
        loading: false,
        success: true,
        message:''
      };
    case AuthTypes.SIGN_IN_FAILURE:
      return {
        ...state,
        loading: false,
        success: false,
        accessToken: undefined,
        userInfo: {},
        profile: {},
        message: 'Login não autorizado.'
      };
    case AuthTypes.SIGN_OUT: {
      return { ...state };
    }
    case AuthTypes.FIRST_ACCESS:
      return { ...state, userInfo: { ...state.userInfo, firstAccess: false } };
    default:
      return state;
  }
};

export default reducer;
