import React from "react";

import {stringify} from "query-string";
import {buildFilterQueryObject} from "../utils/filterQuery";

import Loading from "./Loading";

export default class ExportButtons extends React.Component {
    graphToImage(event) {
        event.target.href = this.props.chart.toBase64Image();
    }

    render() {
        const {filters, chart} = this.props;
        const filterQueryString = stringify(buildFilterQueryObject(filters));

        let exportImageButton = <Loading/>;
        if (chart) {
            exportImageButton =
                <a className="btn btn-warning btn-block" target="_blank" onClick={this.graphToImage.bind(this)}>
                    Export JPG
                </a>;
        }

        return <div className="form-group">
            <a className="btn btn-warning btn-block" href={'/Chart/Export2PDF/?' + filterQueryString}>
                Export PDF
            </a>
            <a className="btn btn-warning btn-block" href={'/Chart/Export2Excel/?' + filterQueryString}>
                Export Excel
            </a>
            {exportImageButton}
        </div>;
    }
}