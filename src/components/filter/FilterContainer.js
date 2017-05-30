import React from "react";

import CreateViewButton from "../view/CreateViewButton";
import DeleteViewButton from "../view/DeleteViewButton";
import Filter from "./Filter";
import Loading from "../Loading";
import ToggleFiltersButton from "./ToggleFiltersButton";
import SaveViewButton from "../view/SaveViewButton";
import SubmitFiltersButton from "./SubmitFilterButton";
import ViewSelector from "../view/ViewSelector";

export default class FilterContainer extends React.Component {
    render() {
        const {fetching, visible, filters, error} = this.props.filters;
        const {filterQuery, view} = this.props;

        if (error) {
            return <ErrorAlert message={error}/>;
        }

        if (fetching || view.fetching) {
            return <Loading />;
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
                        <ViewSelector view={view}/>
                        <ToggleFiltersButton visible={visible}/>
                    </div>
                    {filterComponents}
                    <div className="form-group">
                        <DeleteViewButton/>
                        <SaveViewButton/>
                        <CreateViewButton filterQuery={filterQuery}/>
                    </div>
                    <div className="form-group">
                        <ToggleFiltersButton visible={visible}/>
                        <SubmitFiltersButton filters={filters}/>
                    </div>
                </div>
            ) : (
                <div className="row">
                    <ViewSelector view={view}/>
                    <ToggleFiltersButton visible={visible}/>
                </div>
            )}
        </div>;
    }
}