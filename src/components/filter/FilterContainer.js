import React from "react";

import store from "../../store";
import {fetchFilters} from "../../actions/filtersActions";

import Filter from "./Filter";
import Loading from "../Loading";
import SubmitFilterButton from "./SubmitFilterButton";
import HideFiltersButton from "./HideFiltersButton";

export default class FilterContainer extends React.Component {
    componentWillMount() {
        if (!this.props.filters.fetched && !this.props.filters.fetched) {
            store.dispatch(fetchFilters())
        }
    }

    render() {
        if (this.props.filters.fetching) {
            return <Loading />;
        }

        const filters = this.props.filters.filters.map((filter) => <Filter key={filter.id} filters={filter}/>);

        return <div>
            {filters}
            <HideFiltersButton/>
            <SubmitFilterButton/>
        </div>;
    }
}