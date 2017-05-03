import React from "react";

import Filter from "./Filter";
import Loading from "../Loading";
import ToggleFiltersButton from "./ToggleFiltersButton";
import SubmitFiltersButton from "./SubmitFilterButton";

export default class FilterContainer extends React.Component {
    render() {
        const {fetching, visible} = this.props.filters;

        if (fetching) {
            return <Loading />;
        }

        const filters = this.props.filters.filters.map((filter) => <Filter key={filter.id} filters={filter}/>);

        const styles = {
            padding: '15px',
            backgroundColor: '#313539',
            border: '1px solid rgba(0,0,0,0.6)',
        };

        return <div style={styles} className="navbar">
            {visible ? (
                <div>
                    {filters}
                    <ToggleFiltersButton visible={visible}/>
                    <SubmitFiltersButton/>
                </div>
            ) : (
                <ToggleFiltersButton visible={visible}/>
            )}
        </div>;
    }
}