import axios from "axios";

export function fetchViews() {
    return {
        type: 'FETCH_VIEWS',
        payload: axios.get('/Chart/GetViews')
    };
}

export function changeView(id) {
    return {
        type: 'VIEW_CHANGED',
        payload: id
    }
}

export function createView(name, filter) {
    return {
        type: 'VIEW_CREATED',
        payload: axios.post('/Chart/CreateView', {
            ...filter,
            viewName: name
        })
    }
}

export function deleteView(view) {
    return {
        type: 'DELETE_VIEW',
        payload: axios.delete('/Chart/DeleteView/' + view)
    };
}