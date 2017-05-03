import React from "react";
import {Bar} from "react-chartjs-2";

import Loading from "./Loading";

export default class Chart extends React.Component {
    render() {
        const {fetched, fetching, data, options} = this.props.graph;

        if (!fetched) {
            return null;
        }

        if (fetching) {
            return <Loading />;
        }

        return <Bar data={data} options={options}/>;
    }
};