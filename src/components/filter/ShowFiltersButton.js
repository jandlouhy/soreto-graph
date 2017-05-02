import React from "react";

import store from "../../store";
import {showFilters} from "../../actions/filtersActions";

export default class ShowFiltersButton extends React.Component {
    constructor(props) {
        super(props);

        this.showFilters = this.showFilters.bind(this);
    }

    showFilters() {
        store.dispatch(showFilters());
    }

    render() {
        return <button onClick={this.showFilters} className="btn btn-info">
            Zobrazit filtry
        </button>
    }
}