import React from "react";
import {connect} from "react-redux";

import store from "../store";
import {fetchFilters} from "../actions/filtersActions";
import {fetchGraph} from "../actions/graphActions";

import Chart from "./Chart";
import FilterContainer from "./filter/FilterContainer";

@connect((store) => {
    return {
        filters: store.filters,
        graph: store.graph,
    }
})
export default class Layout extends React.Component {
    componentWillMount() {
        const {filters, graph} = this.props;

        if (!filters.fetched && !filters.fetching) {
            store.dispatch(fetchFilters())
        }

        if (!graph.fetched && !graph.fetching) {
            store.dispatch(fetchGraph())
        }
    }

    render() {
        const {filters, graph} = this.props;

        return <div>
            <FilterContainer filters={filters}/>
            <Chart graph={graph}/>
        </div>;
    }
}