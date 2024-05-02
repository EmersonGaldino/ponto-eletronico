import {PointTypes} from './types';

const INITIAL_STATE = {
    point: [],
    loading: false,
    error: false,
    success: false,
    hours:0,
    points: []
};

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case PointTypes.POINT_REQUEST:
            return {...state, loading: true};

        case PointTypes.POINT_LOAD_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                points: action.payload.data,
            };

        case PointTypes.POINT_REGISTER:
            return {...state, loading: true};

        case PointTypes.POINT_REGISTER_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                point: action.payload.data,
            };

        case PointTypes.POINT_LOAD_FAILURE:
            return {...state, loading: false, error: true, success: false};

        case PointTypes.POINT_REGISTER_FAILURE:
            return {...state, loading: false, error: true, success: false};

        default:
            return state;
    }
};

export default reducer;
