import React from "react";
import {connect} from "react-redux";

import store from "../store";
import {fetchFilters} from "../actions/filtersActions";
import {fetchGraph} from "../actions/graphActions";
import {buildFilterQueryObject} from "../utils/filterQuery";

import FilterContainer from "./filter/FilterContainer";
import Loading from "./Loading";
import Chart from "./Chart";

@connect((store) => {
    return {
        filters: store.filters,
        graph: store.graph,
        filterQuery: buildFilterQueryObject(store.filters.filters),
        view: store.view
    }
})
export default class Layout extends React.Component {
    componentWillMount() {
        const {filters, graph} = this.props;

        if (!filters.fetched && !filters.fetching) {
            store.dispatch(fetchFilters())
        }

        if (!graph.fetched && !graph.fetching) {
            store.dispatch(fetchGraph(filters.filters))
        }
    }

    render() {
        const {filters, graph, filterQuery, view} = this.props;

        if (filters.fetching && graph.fetching) {
            return <Loading/>;
        }

        return <div>
            <FilterContainer filters={filters} filterQuery={filterQuery} view={view}/>
            <Chart graph={graph} filters={filters} filterQuery={filterQuery}/>
        </div>;
    }
}