import React from "react";

import store from "../../store";
import {fetchFilters} from "../../actions/filtersActions";

import Filter from "./Filter";
import Loading from "../Loading";
import ToggleFiltersButton from "./ToggleFiltersButton";
import SubmitFiltersButton from "./SubmitFilterButton";

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

        const styles = {
            padding: '15px',
            backgroundColor: '#313539',
            border: '1px solid rgba(0,0,0,0.6)',
        };

        return <div style={styles} className="navbar">
            {this.props.filters.visible ? (
                <div>
                    {filters}
                    <ToggleFiltersButton visible={this.props.filters.visible}/>
                    <SubmitFiltersButton/>
                </div>
            ) : (
                <ToggleFiltersButton visible={this.props.filters.visible}/>
            )}
        </div>;
    }
}