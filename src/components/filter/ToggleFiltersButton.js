import React from "react";

import store from "../../store";
import {toggleFilters} from "../../actions/filtersActions";

export default class ToggleFiltersButton extends React.Component {
    constructor(props) {
        super(props);

        this.toggleFilters = this.toggleFilters.bind(this);
    }

    toggleFilters() {
        store.dispatch(toggleFilters(!this.props.visible));
    }

    render() {
        return <button onClick={this.toggleFilters} className="btn btn-warning">
            {this.props.visible ? 'Skrýt filtry' : 'Zobrazit filtry'}
        </button>
    }
}