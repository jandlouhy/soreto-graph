import {combineReducers} from "redux";

import filters from "./filtersReducer";
import graph from "./graphReducer";
import view from "./viewReducer";

export default combineReducers({
    filters,
    graph,
    view
})