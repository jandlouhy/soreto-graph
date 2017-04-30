import {createFilter, reduceFilter} from "../utils/filter";

export default function filtersReducer(state = {
    fetching: false,
    fetched: false,
    filters: [],
    error: null
}, action) {
    switch (action.type) {
        case 'FETCH_FILTERS_PENDING': {
            return {
                ...state,
                fetching: true
            };
        }
        case 'FETCH_FILTERS_REJECTED': {
            return {
                ...state,
                fetching: false,
                error: action.payload
            };
        }
        case 'FETCH_FILTERS_FULFILLED': {
            return {
                ...state,
                fetching: false,
                fetched: true,
                filters: action.payload.data.map((filter) => createFilter(filter))
            };
        }
        case 'FILTER_CHANGED': {
            return {
                ...state,
                filters: state.filters.map((filter) => reduceFilter(action.payload, filter, filter.values))
            };
        }
    }
    return state;
}
