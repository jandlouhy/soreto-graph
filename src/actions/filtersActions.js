import axios from "axios";

export function fetchFilters() {
    return {
        type: 'FETCH_FILTERS',
        payload: axios.get('http://www.mocky.io/v2/58f66708260000c5254adb49')
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