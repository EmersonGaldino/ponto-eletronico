import {NewsTypes} from './types';

const INITIAL_STATE = {
    point: [],
    loading: false,
    error: false,
    success: false,
    status:'',
    totalResults:0,
    articles: []
};

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case NewsTypes.NEWS_REQUEST:
            return {...state, loading: true};

        case NewsTypes.NEWS_LOAD_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                status:action.payload.data.status,
                totalResults:action.payload.data.totalResults,
                articles: action.payload.data.articles
            };

        case NewsTypes.NEWS_LOAD_FAILURE:
            return {...state, loading: false, error: true, success: false};

        default:
            return state;
    }
};

export default reducer;
