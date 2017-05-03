import {combineReducers} from "redux";

import filters from "./filtersReducer";
import graph from "./graphReducer";

export default combineReducers({
    filters,
    graph
})