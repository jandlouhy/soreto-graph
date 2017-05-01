import axios from 'axios'

export function fetchFilters() {
    return {
        type: 'FETCH_FILTERS',
        payload: axios.get('http://www.mocky.io/v2/59076d46100000b0129bd7f9') // /Chart/GetFilters
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