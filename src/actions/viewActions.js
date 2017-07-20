import axios from "axios";

import {buildFilterQueryObject} from "../utils/filterQuery";

export function fetchViews() {
    return {
        type: 'FETCH_VIEWS',
        //payload: axios.get('http://localhost/api/view.php', {
        payload: axios.get('/Chart/GetViews', {
            params: {
                t: Date.now()
            }
        })
    };
}

export function changeView(id) {
    return {
        type: 'VIEW_CHANGED',
        payload: id
    }
}

export function createView(name, filters) {
    return {
        type: 'CREATE_VIEW',
        payload: axios.get('/Chart/CreateView', {
            params: {
                ...buildFilterQueryObject(filters),
                viewName: name
            },
        })
    }
}

export function updateView(id, filters) {
    return {
        type: 'CREATE_VIEW',
        payload: axios.get('/Chart/UpdateView/' + id, {
            params: {
                ...buildFilterQueryObject(filters)
            },
        })
    }
}

export function deleteView(id) {
    return {
        type: 'DELETE_VIEW',
        payload: axios.delete('/Chart/DeleteView/' + id)
    };
}