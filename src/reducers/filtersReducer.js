import {createFilter, reduceFilter} from "../utils/filter";

export default function filtersReducer(state = {
    fetching: false,
    fetched: false,
    visible: false,
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
        case 'FILTER_DATE_CHANGED': {
            return {
                ...state,
                filters: state.filters.map((filter) => {
                    if (filter.id === action.payload.filter) {
                        return {
                            ...filter,
                            startDate: action.payload.startDate,
                            endDate: action.payload.endDate,
                        };
                    }
                    return filter;
                })
            }
        }
        case 'FILTERS_TOGGLE': {
            return {
                ...state,
                visible: action.payload.visible
            }
        }
    }
    return state;
}
