import axios from "axios";

export function fetchFilters() {
    return {
        type: 'FETCH_FILTERS',
        payload: axios.get('/Chart/GetFilters')
    };
}

export function fetchFiltersByView(view) {
    return {
        type: 'FETCH_FILTERS',
        payload: axios.get('/Chart/GetFilters/' + view)
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

export function changeFilterDate(filter, startDate, endDate) {
    return {
        type: 'FILTER_DATE_CHANGED',
        payload: {
            filter: filter,
            startDate: startDate,
            endDate: endDate
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
