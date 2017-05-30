import React from "react";
import {Bar} from "react-chartjs-2";

import ErrorAlert from "./ErrorAlert";
import Loading from "./Loading";

import {stringify} from "query-string";

export default class Chart extends React.Component {
    constructor(props) {
        super(props);
        this.chart = null;
    }

    graphToImage(event) {
        event.target.href = this.chart.chart_instance.toBase64Image();
    }

    render() {
        const {fetched, fetching, data, options, error} = this.props.graph;

        if (error) {
            return <ErrorAlert message={error}/>;
        }

        if (fetching) {
            return <Loading />;
        }

        const filterQueryString = stringify(this.props.filterQuery);

        if (fetched) {
            return <div className="row">
                <div className="col-sm-10 form-group">
                    <Bar data={data} options={options} ref={(chart) => { this.chart = chart }} />
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

        return null;
    }
};