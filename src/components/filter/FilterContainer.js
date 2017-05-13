import React from "react";

import Filter from "./Filter";
import ToggleFiltersButton from "./ToggleFiltersButton";
import SubmitFiltersButton from "./SubmitFilterButton";

export default class FilterContainer extends React.Component {
    render() {
        const {visible, filters, error} = this.props.filters;

        if (error) {
            return <ErrorAlert message={error}/>;
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
                    <div className="form-group">
                        <ToggleFiltersButton visible={visible}/>
                    </div>
                    {filterComponents}
                    <div className="form-group">
                        <ToggleFiltersButton visible={visible}/>
                        <SubmitFiltersButton filters={filters}/>
                    </div>
                </div>
            ) : (
                <ToggleFiltersButton visible={visible}/>
            )}
        </div>;
    }
}