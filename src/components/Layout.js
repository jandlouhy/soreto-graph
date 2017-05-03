import React from "react";
import {connect} from "react-redux";

import Chart from "./Chart";
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
            <FilterContainer filters={this.props.filters}/>
            <Chart/>
        </div>;
    }
}