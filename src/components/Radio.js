import React from "react";
import ReactSelect from "react-select";

import store from "../store";
import {changeFilter} from "../actions/filtersActions";

export default class Select extends React.Component {
    handleSelectChange(values) {
        store.dispatch(changeFilter(this.name, [values]));
    }

    render() {
        const options = this.props.options.map((option) => (<label key={option.value}>
            <input type="radio" value={option.value} name={this.props.id} /> {option.label}
        </label>));

        return (
            <div className={this.props.labelClass}>
                {this.props.label}
                <div>
                    {options}
                </div>
            </div>
        );
    }
}