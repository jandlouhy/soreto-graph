import React from "react";
import {Bar} from "react-chartjs-2";

import ChartTable from "./ChartTable";
import Loading from "./Loading";

import store from "../store";
import {fetchGraph} from "../actions/graphActions";
import {stringify} from "query-string";

export default class Chart extends React.Component {
    constructor(props) {
        super(props);
        this.chart = null;
    }

    componentWillMount() {
        const {graph, filters} = this.props;

        if (!graph.fetched && !graph.fetching && !graph.error) {
            store.dispatch(fetchGraph(filters.filters))
        }
    }

    graphToImage(event) {
        event.target.href = this.chart.chart_instance.toBase64Image();
    }

    render() {
        const {fetching, data, options, table, error} = this.props.graph;

        if (fetching) {
            return <Loading />;
        }

        if (error) {
            return null;
        }

        const filterQueryString = stringify(this.props.filterQuery);

        return <div className="row">
            <div className="col-sm-10 form-group">
                <Bar data={data} options={options} ref={(chart) => {
                    this.chart = chart
                }}/>
                <ChartTable data={table}/>
            </div>
            <div className="col-sm-2">
                <div className="form-group">
                    <a className="btn btn-warning btn-block" href={'/Chart/Export2PDF/?' + filterQueryString}>
                        Export PDF
                    </a>
                    <a className="btn btn-warning btn-block" href={'/Chart/Export2Excel/?' + filterQueryString}>
                        Export Excel
                    </a>
                    <a className="btn btn-warning btn-block" target="_blank" onClick={this.graphToImage.bind(this)}>
                        Export JPG
                    </a>
                </div>
            </div>
        </div>;
    }
};