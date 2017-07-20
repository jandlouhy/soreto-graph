import React from "react";
import VirtualizedSelect from "react-virtualized-select";

import store from "../../store";
import {changeFilter} from "../../actions/filtersActions";
import createFilterOptions from 'react-select-fast-filter-options';

export default class MultiSelect extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {input: ''};
    }

    handleSelectChange(values) {
        store.dispatch(changeFilter(this.name, values.map((value) => value.value)));
    }

    render() {
        const {id, label, options} = this.props;
        const selected = options.filter((option) => option.selected);
        const filterOptions = createFilterOptions({ options });

        return (
            <label className="col-xs-12 col-sm-4 form-group">
                {label}
                <VirtualizedSelect onChange={this.handleSelectChange}
                                   name={id}
                                   multi
                                   options={options}
                                   filterOptions={filterOptions}
                                   value={selected}
                                   placeholder="Všechny hodnoty"
                                   noResultsText="Žádná možnost nenalezena"
                />
            </label>
        );
    }
}