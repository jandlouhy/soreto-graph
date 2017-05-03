import React from "react";

import store from "../../store";
import {changeFilter} from "../../actions/filtersActions";

export default class Select extends React.Component {
    handleSelectChange(event) {
        store.dispatch(changeFilter(this.props.id, [event.target.value]));
    }

    render() {
        const {id, label} = this.props;
        const options = this.props.options.map((option) => (
            <label key={option.value} className="radio-inline">
                <input type="radio"
                       value={option.value}
                       name={id}
                />
                {option.label}
            </label>
        ));

        return (
            <div className="col-xs-12 col-sm-4 form-group">
                {label}
                <div onChange={this.handleSelectChange.bind(this)}>
                    {options}
                </div>
            </div>
        );
    }
}