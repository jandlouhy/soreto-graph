import React from "react";
import {Bar} from "react-chartjs-2";

export default class Chart extends React.Component {
    componentDidMount() {
        this.chart_instance = this.refs.chart.chart_instance;
    }

    render() {
        const {data, options} = this.props;

        return (
            <Bar data={data} options={options} ref='chart'/>
        );
    }
}