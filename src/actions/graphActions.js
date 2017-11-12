import axios from "axios";

import {buildFilterQueryObject} from "../utils/filterQuery";

export function fetchGraph(filters) {
    return {
        type: 'FETCH_GRAPH',
        //payload: axios.get('http://localhost/api/graph.php', {
        payload: axios.get('/Chart/GetFilteredData', {
            params: {
              ... buildFilterQueryObject(filters),
              timestamp: (new Date()).getTime()
            }
        })
    };
}
