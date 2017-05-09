export default function graphReducer(state = {
    fetching: false,
    fetched: false,
    options: {},
    data: {},
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
                error: action.payload.response ? 'Graf se nepodařilo načíst.' : action.payload
            };
        }
        case 'FETCH_GRAPH_FULFILLED': {
            return {
                ...state,
                fetching: false,
                fetched: true,
                data: action.payload.data.data,
                options: action.payload.data.options,
            };
        }
    }
    return state;
}
