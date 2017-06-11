export default function graphReducer(state = {
    fetching: false,
    fetched: false,
    options: {},
    data: {},
    chart: {},
    error: null
}, action) {
    switch (action.type) {
        case 'FETCH_GRAPH_PENDING': {
            return {
                ...state,
                fetching: true
            };
        }
        case 'FETCH_GRAPH_REJECTED': {
            return {
                ...state,
                fetching: false,
                error: action.payload.response ? `Graf se nepodařilo načíst: ${action.payload.message}` : action.payload
            };
        }
        case 'FETCH_GRAPH_FULFILLED': {
            return {
                ...state,
                fetching: false,
                fetched: true,
                data: action.payload.data.chartData.data,
                options: action.payload.data.chartData.options,
                table: action.payload.data.tableData
            };
        }
    }
    return state;
}
