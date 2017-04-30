import React from "react";

import Select from "./Select";
import DateRange from "./DateRange";

export default class FilterGroup extends React.Component {
    createFilterComponent(filter) {
        switch (filter.type) {
            case 'select':
                if (filter.values) {
                    const options = filter.values.filter((option) => option.visible);
                    if (options.length > 0) {
                        return <Select key={filter.id} id={filter.id} label={filter.label} options={options}/>;
                    }
                }
                break;
            case 'daterange':
                return <DateRange key={filter.id}/>;
        }
    }

    getFilters(filter = this.props.filters) {
        if (filter) {
            if (filter.children) {
                return [this.createFilterComponent(filter), ...this.getFilters(filter.children)];
            }
            return [this.createFilterComponent(filter)];
        }
        return [];
    }

    render() {
        return (
            <div>
                {this.getFilters()}
            </div>
        );
    }
}