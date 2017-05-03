import React from "react";
import ReactSelect from "react-select";

import store from "../../store";
import {changeFilter} from "../../actions/filtersActions";

export default class Select extends React.Component {
    handleSelectChange(value) {
        store.dispatch(changeFilter(this.name, [value.value]));
    }

    render() {
        const selected = this.props.options.find((option) => option.selected);

        return (
            <label className="col-xs-12 col-sm-4 form-group">
                {this.props.label}
                <ReactSelect onChange={this.handleSelectChange}
                             name={this.props.id}
                             options={this.props.options}
                             value={selected}
                             placeholder="Všechny hodnoty"
                             noResultsText="Žádná možnost nenalezena"
                             clearable={false}
                />
            </label>
        );
    }
}