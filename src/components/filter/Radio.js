import React from "react";

import store from "../../store";
import {changeFilter} from "../../actions/filtersActions";

export default class Select extends React.Component {
    handleSelectChange(value) {
        console.log(value);
        store.dispatch(changeFilter(this.props.id, [value]));
    }

    render() {
        const options = this.props.options.map((option) => (
            <label key={option.value} className="radio-inline">
                <input type="radio"
                       value={option.value}
                       name={this.props.id}/>
                {option.label}
            </label>
        ));

        return (
            <div className="col-xs-12 col-sm-4 form-group">
                {this.props.label}
                <div onChange={this.handleSelectChange.bind(this)}>
                    {options}
                </div>
            </div>
        );
    }
}