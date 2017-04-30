import React from "react";

import Select from "./Select";

export default class FilterGroup extends React.Component {
    createFilterComponent(filter) {
        const options = filter.values.filter((option) => option.visible);
        if (options.length > 0) {
            switch (filter.type) {
                case 'select':
                    return <Select key={filter.id} id={filter.id} label={filter.label} options={options}/>;
            }
        }
    }

    getFilters(filter = this.props.filters) {
        if (filter && filter.values) {
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