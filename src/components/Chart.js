import React from "react";
import {Bar} from "react-chartjs-2";

import store from "../store";
import {graphLoaded} from "../actions/graphActions"

import ErrorAlert from "./ErrorAlert";
import Loading from "./Loading";

export default class Chart extends React.Component {
    componentDidMount() {
        if (this.refs.chart) {
            store.dispatch(graphLoaded(this.refs.chart.chart_instance));
        }
    }

    render() {
        const {fetched, fetching, data, options, error} = this.props.graph;

        if (error) {
            return <ErrorAlert message={error}/>;
        }

        if (fetching) {
            return <Loading />;
        }

        if (fetched) {
            return <Bar ref="chart" data={data} options={options}/>;
        }

        return null;
    }
};