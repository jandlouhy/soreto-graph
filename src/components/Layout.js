import React from "react";
import {connect} from "react-redux";

import store from "../store";
import {fetchFilters} from "../actions/filtersActions";
import {fetchGraph} from "../actions/graphActions";

import Chart from "./Chart";
import FilterContainer from "./filter/FilterContainer";
import ExportButtons from "./ExportButtons";

@connect((store) => {
    return {
        filters: store.filters,
        graph: store.graph,
    }
})
export default class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.chart = null;
    }

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

        return <div>
            <FilterContainer filters={filters}/>
            <div className="row">
                <div className="col-sm-10 form-group">
                    <Chart ref={this.setChartInstance.bind(this)} graph={graph}/>
                </div>
                <div className="col-sm-2">
                    <ExportButtons filters={filters.filters} chart={this.chart}/>
                </div>
            </div>
        </div>;
    }

    setChartInstance(graph) {
        if (graph && graph.refs.chart) {
            this.chart = graph.refs.chart.chart_instance;
        }
    }
}