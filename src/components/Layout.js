import React from "react";
import {connect} from "react-redux";

import {buildFilterQueryObject} from "../utils/filterQuery";

import ErrorAlert from "./ErrorAlert";
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
    render() {
        const {filters, graph, filterQuery, view} = this.props;

        if ((filters.fetching || view.fetching) && graph.fetching) {
            return <Loading/>;
        }

        const errors = [filters, graph, view]
            .filter((prop) => prop.error)
            .map((prop) => ( <ErrorAlert key={prop.error.toString()} message={prop.error}/> ));

        return <div>
            {errors}
            <FilterContainer filters={filters} filterQuery={filterQuery} view={view}/>
            <Chart graph={graph} filters={filters} filterQuery={filterQuery}/>
        </div>;
    }
}