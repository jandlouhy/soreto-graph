import React from "react";

import {changeFilter} from "../actions/filtersActions";
import store from "../store";

import Option from "./Option";

export default class Select extends React.Component {
    handleSelectChange(e) {
        store.dispatch(changeFilter(
            e.target.name,
            [...e.target.options].filter((option) => option.selected)
                .map((option) => option.value)
        ));
    }

    render() {
        if (!this.props.options) {
            return <div/>;
        }

        const options = this.props.options
            .map((option) => <Option key={option.id} title={option.title} value={option.id}/>);

        const selected = this.props.options
            .filter((option) => option.selected)
            .map((option) => option.id);

        return (
            <label>
                {this.props.label}
                <select name={this.props.id} onChange={this.handleSelectChange} multiple defaultValue={selected} className="form-control">
                    {options}
                </select>
            </label>
        );
    }
}