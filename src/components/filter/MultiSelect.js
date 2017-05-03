import React from "react";
import ReactSelect from "react-select";

import store from "../../store";
import {changeFilter} from "../../actions/filtersActions";

export default class MultiSelect extends React.Component {
    handleSelectChange(values) {
        store.dispatch(changeFilter(this.name, values.map((value) => value.value)));
    }

    render() {
        const selected = this.props.options.filter((option) => option.selected);

        return (
            <label className="col-xs-12 col-sm-4 form-group">
                {this.props.label}
                <ReactSelect onChange={this.handleSelectChange}
                             name={this.props.id}
                             multi
                             options={this.props.options}
                             value={selected}
                             placeholder="Všechny hodnoty"
                             noResultsText="Žádná možnost nenalezena"
                />
            </label>
        );
    }
}