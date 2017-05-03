import axios from "axios";

export function fetchFilters() {
    return {
        type: 'FETCH_FILTERS',
        payload: axios.get('/Chart/GetFilters')
    };
}

export function changeFilter(filter, values) {
    return {
        type: 'FILTER_CHANGED',
        payload: {
            filter: filter,
            values: values
        }
    }
}

export function toggleFilters(visible) {
    return {
        type: 'FILTERS_TOGGLE',
        payload: {
            visible: visible
        }
    }

}
