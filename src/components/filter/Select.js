import React from "react";
import ReactSelect from "react-select";

import store from "../../store";
import {changeFilter} from "../../actions/filtersActions";

export default class Select extends React.Component {
    handleSelectChange(value) {
        store.dispatch(changeFilter(this.name, [value.value]));
    }

    render() {
        const {id, label, options} = this.props;
        const selected = this.props.options.find((option) => option.selected);

        return (
            <label className="col-xs-12 col-sm-4 form-group">
                {label}
                <ReactSelect onChange={this.handleSelectChange}
                             name={id}
                             options={options}
                             value={selected}
                             placeholder="Všechny hodnoty"
                             noResultsText="Žádná možnost nenalezena"
                             clearable={false}
                />
            </label>
        );
    }
}