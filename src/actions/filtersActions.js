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

export function showFilters() {
    return {
        type: 'FILTERS_TOGGLE',
        payload: {
            visible: true
        }
    }

}

export function hideFilters() {
    return {
        type: 'FILTERS_TOGGLE',
        payload: {
            visible: false
        }
    }

}