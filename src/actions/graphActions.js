import axios from "axios";

import {buildFilterQueryObject} from "../utils/filterQuery";

export function fetchGraph(filters) {
    return {
        type: 'FETCH_GRAPH',
        payload: axios.get('/Chart/GetFilteredData', {
            params: buildFilterQueryObject(filters)
        })
    };
}

    export function graphLoaded(chart) {
    return {
        type: 'GRAPH_LOADED',
        payload: chart
    }
}