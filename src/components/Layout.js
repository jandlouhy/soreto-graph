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
        if (!this.props.filters.fetched && !this.props.filters.fetching) {
            store.dispatch(fetchFilters())
        }
        if (!this.props.graph.fetched && !this.props.graph.fetching) {
            store.dispatch(fetchGraph())
        }
    }

    render() {
        return <div>
            <FilterContainer filters={this.props.filters}/>
            <Chart graph={this.props.graph}/>
        </div>;
    }
}