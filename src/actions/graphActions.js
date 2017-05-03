import axios from "axios";

export function fetchGraph() {
    return {
        type: 'FETCH_GRAPH',
        payload: axios.get('/Chart/GetFilteredData')
    };
}