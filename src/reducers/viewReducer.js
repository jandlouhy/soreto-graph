export default function viewReducer(state = {
    fetching: false,
    fetched: false,
    items: [],
    selected: '',
    error: null
}, action) {
    switch (action.type) {
        case 'FETCH_VIEWS_PENDING': {
            return {
                ...state,
                fetching: true
            };
        }
        case 'FETCH_VIEWS_REJECTED': {
            return {
                ...state,
                fetching: false,
                error: action.payload.response ? 'Graf se nepodařilo načíst.' : action.payload
            };
        }
        case 'FETCH_VIEWS_FULFILLED': {
            return {
                ...state,
                fetching: false,
                fetched: true,
                items: action.payload.data,
            };
        }
        case 'VIEW_CHANGED': {
            return {
                ...state,
                selected: action.payload
            };
        }
    }
    return state;
}
