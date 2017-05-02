import React from "react";
import ReactSelect from "react-select";

import store from "../../store";
import {changeFilter} from "../../actions/filtersActions";

export default class Select extends React.Component {
    handleSelectChange(values) {
        store.dispatch(changeFilter(this.name, [values]));
    }

    render() {
        const selected = this.props.options.find((option) => option.selected);

        return (
            <label className={this.props.labelClass}>
                {this.props.label}
                <ReactSelect onChange={this.handleSelectChange}
                             name={this.props.id}
                             options={this.props.options}
                             value={selected}
                             placeholder="Všechny hodnoty"
                />
            </label>
        );
    }
}