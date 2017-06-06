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
                error: action.payload.response ? `Pohledy se nepodařilo načíst: ${action.payload.message}` : action.payload
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
        case 'DELETE_VIEW_PENDING': {
            return {
                ...state,
                fetching: true
            };
        }
        case 'DELETE_VIEW_REJECTED': {
            return {
                ...state,
                error: action.payload.response ? `Pohled se nepodařilo odstranit: ${action.payload.message}` : action.payload
            };
        }
        case 'DELETE_VIEW_FULFILLED': {
            return {
                ...state,
                fetching: false,
                fetched: false,
                items: [],
            };
        }
    }
    return state;
}
