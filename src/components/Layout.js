import React from "react";
import {connect} from "react-redux";

import store from "../store";
import {fetchFilters} from "../actions/filtersActions";
import {fetchGraph} from "../actions/graphActions";

import Chart from "./Chart";
import FilterContainer from "./filter/FilterContainer";
import ExportButtons from "./ExportButtons";
import Loading from "./Loading";

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
            store.dispatch(fetchGraph(filters.filters))
        }
    }

    render() {
        const {filters, graph} = this.props;

        if (filters.fetching) {
            return <Loading />;
        }

        return <div>
            <FilterContainer filters={filters}/>
            <div className="row">
                <div className="col-sm-10 form-group">
                    <Chart graph={graph}/>
                </div>
                <div className="col-sm-2">
                    <ExportButtons filters={filters.filters} chart={graph.chart}/>
                </div>
            </div>
        </div>;
    }
}