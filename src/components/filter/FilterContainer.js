import React from "react";

import CreateViewButton from "../view/CreateViewButton";
import DeleteViewButton from "../view/DeleteViewButton";
import Filter from "./Filter";
import Loading from "../Loading";
import ToggleFiltersButton from "./ToggleFiltersButton";
import SaveViewButton from "../view/SaveViewButton";
import SubmitFiltersButton from "./SubmitFilterButton";
import ViewSelector from "../view/ViewSelector";

import store from "../../store";
import {fetchFilters} from "../../actions/filtersActions";

export default class FilterContainer extends React.Component {
    componentWillMount() {
        const {filters} = this.props;

        if (!filters.fetched && !filters.error) {
            store.dispatch(fetchFilters())
        }
    }

    render() {
        const {fetching, visible, filters, error} = this.props.filters;
        const {filterQuery, view} = this.props;

        if (fetching || view.fetching) {
            return <Loading />;
        }

        if (error) {
            return null;
        }

        const filterComponents = filters.map((filter) => <Filter key={filter.id} filters={filter}/>);

        const styles = {
            padding: '15px',
            backgroundColor: '#313539',
            border: '1px solid rgba(0,0,0,0.6)',
        };

        return <div style={styles} className="navbar">
            {visible ? (
                <div>
                    <div className="row">
                        <ViewSelector view={view} filters={filters}/>
                        <SubmitFiltersButton filters={filters}/>
                        {view.selected ? <DeleteViewButton view={view.selected}/> : null}
                        <ToggleFiltersButton visible={visible}/>
                    </div>
                    {filterComponents}
                    <div className="form-group">
                        <SaveViewButton/>
                        <CreateViewButton filterQuery={filterQuery}/>
                    </div>
                    <div className="form-group">
                        <SubmitFiltersButton filters={filters}/>
                        <ToggleFiltersButton visible={visible}/>
                    </div>
                </div>
            ) : (
                <div className="row">
                    <ViewSelector view={view} filters={filters}/>
                    <SubmitFiltersButton filters={filters}/>
                    {view.selected ? <DeleteViewButton view={view.selected}/> : null}
                    <ToggleFiltersButton visible={visible}/>
                </div>
            )}
        </div>;
    }
}