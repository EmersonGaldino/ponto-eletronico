import { ToastTypes } from './types';
import {toast} from 'react-toastify';
const INITIAL_STATE = {
    open: false,
    message: '',
    type: undefined,
};

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ToastTypes.SHOW:
            return  toast.success(action.payload.message, {
                position: "bottom-center",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
        case ToastTypes.HIDE:
            return { ...state, open: false };
        default:
            return state;
    }
};

export default reducer;
