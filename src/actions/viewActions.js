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
        type: 'CREATE_VIEW',
        payload: axios.post('/Chart/CreateView', {
            ...filter,
            viewName: name
        })
    }
}

export function updateView(id, filter) {
    return {
        type: 'CREATE_VIEW',
        payload: axios.put('/Chart/UpdateView/' + id, filter)
    }
}

export function deleteView(id) {
    return {
        type: 'DELETE_VIEW',
        payload: axios.delete('/Chart/DeleteView/' + id)
    };
}