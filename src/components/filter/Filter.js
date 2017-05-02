import React from "react";

import Select from "./Select";
import MultiSelect from "./MultiSelect";
import DateRange from "./DateRange";
import Radio from "./Radio";

export default class Filter extends React.Component {
    createFilterComponent(filter) {
        const options = filter.values ? filter.values.filter((option) => option.visible) : [];
        switch (filter.type) {
            case 'radio':
                return <Radio key={filter.id}
                               labelClass="col-xs-12 col-sm-4 form-group"
                               id={filter.id}
                               label={filter.label}
                               options={options}/>;
            case 'select':
                return <Select key={filter.id}
                               labelClass="col-xs-12 col-sm-4 form-group"
                               id={filter.id}
                               label={filter.label}
                               options={options}/>;
            case 'multiselect':
                return <MultiSelect key={filter.id}
                               labelClass="col-xs-12 col-sm-4 form-group"
                               id={filter.id}
                               label={filter.label}
                               options={options}/>;
            case 'daterange':
                return <div key={filter.id} className="col-xs-12 form-group">
                    <DateRange label={filter.label}/>
                </div>;
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
        const filters = this.getFilters();

        return <div className="row">
            {filters}
        </div>;
    }
}