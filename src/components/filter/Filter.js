import React from "react";

import Select from "./Select";
import MultiSelect from "./MultiSelect";
import DateRange from "./DateRange";
import Radio from "./Radio";

const Filter = (filters) => {
    let filterList = getFilters(filters.filters);

    if (filterList.length === 4) {
        const last = filterList.pop();
        filterList.push(<div className="col-xs-0 col-sm-8"/>);
        filterList.push(last);
    }

    return (
        <div className="row">
            {filterList}
        </div>
    );
};

function getFilters(filter) {
    if (filter) {
        if (filter.children) {
            return [createFilterComponent(filter), ...getFilters(filter.children)];
        }
        return [createFilterComponent(filter)];
    }
    return [];
}

function createFilterComponent(filter) {
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

export default Filter;
