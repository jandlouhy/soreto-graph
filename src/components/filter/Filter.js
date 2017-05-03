import React from "react";

import Select from "./Select";
import MultiSelect from "./MultiSelect";
import DateRange from "./DateRange";
import Radio from "./Radio";

export default class Filter extends React.Component {
    createFilterComponent(filter) {
        const {id, label} = filter;
        const options = filter.values ? filter.values.filter((option) => option.visible) : [];
        switch (filter.type) {
            case 'radio':
                return <Radio key={id} id={id} label={label} options={options}/>;
            case 'select':
                return <Select key={id} id={id} label={label} options={options}/>;
            case 'multiselect':
                return <MultiSelect key={id} id={id} label={label} options={options}/>;
            case 'daterange':
                return <DateRange key={id} id={id} label={label} startDate={filter.startDate} endDate={filter.endDate}/>;
        }
    }

    getFilters(filter) {
        if (filter) {
            if (filter.children) {
                return [this.createFilterComponent(filter), ...this.getFilters(filter.children)];
            }
            return [this.createFilterComponent(filter)];
        }
        return [];
    }

    render() {
        const filters = this.getFilters(this.props.filters);

        return <div className="row">
            {filters}
        </div>;
    }
}