import axios from "axios";

import {buildFilterQueryObject} from "../utils/filterQuery";

export function fetchGraph(filters) {
    console.log(buildFilterQueryObject(filters));
    return {
        type: 'FETCH_GRAPH',
        payload: axios.get('/Chart/GetFilteredData', {
            params: buildFilterQueryObject(filters)
        })
    };
}