import React from "react";
import {connect} from "react-redux";

import Chart from "./Chart";
import ShowFiltersButton from "./filter/ShowFiltersButton";
import FilterContainer from "./filter/FilterContainer";

@connect((store) => {
    return {
        filters: store.filters,
        visible: store.filters.visible,
    }
})
export default class Layout extends React.Component {
    render() {
        return <div>
            {this.props.visible ? (
                <FilterContainer filters={this.props.filters}/>
            ) : (
                <ShowFiltersButton />
            )}
            <Chart/>
        </div>;
    }
}