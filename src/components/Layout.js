import React from "react";
import {connect} from "react-redux";

import {fetchFilters} from "../actions/filtersActions";
import FilterGroup from "./FilterGroup";
import FilterButton from "./FilterButton";
import Chart from "./Chart";

@connect((store) => {
    return {
        filters: store.filters.filters,
    }
})
export default class Layout extends React.Component {
    componentWillMount() {
        this.props.dispatch(fetchFilters())
    }

    render() {
        const groups = this.props.filters.map((filter) => <FilterGroup key={filter.id} filters={filter}/>);

        return <div>
            {groups}
            <FilterButton/>
            <Chart/>
        </div>;
    }
}