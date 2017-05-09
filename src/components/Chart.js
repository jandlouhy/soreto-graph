import React from "react";
import {Bar} from "react-chartjs-2";

import ErrorAlert from "./ErrorAlert";
import Loading from "./Loading";

export default class Chart extends React.Component {
    render() {
        const {fetched, fetching, data, options, error} = this.props.graph;

        if (error) {
            return <ErrorAlert message={error} />;
        }

        if (fetching) {
            return <Loading />;
        }

        if (fetched) {
            return <Bar data={data} options={options}/>;
        }

        return null;
    }
};