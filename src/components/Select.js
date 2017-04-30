import React from "react";

import {changeFilter} from "../actions/filtersActions";
import store from "../store";

import Option from "./Option";

export default class Select extends React.Component {
    handleSelectChange(e) {
        const select = e.target;
        const values = [...select.options]
            .filter((option) => option.selected)
            .map((option) => option.value);

        store.dispatch(changeFilter(select.name, values));
    }

    render() {
        const options = this.props.options
            .map((option) => <Option key={option.id} title={option.title} value={option.id}/>);
        const selected = this.props.options
            .filter((option) => option.selected)
            .map((option) => option.id);

        return (
            <label>
                {this.props.label}
                <select name={this.props.id}
                        onChange={this.handleSelectChange}
                        multiple
                        defaultValue={selected}
                        className="form-control">
                    {options}
                </select>
            </label>
        );
    }
}