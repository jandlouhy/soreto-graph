import React from "react";

import store from "../../store";
import {hideFilters} from "../../actions/filtersActions";

export default class ShowFiltersButton extends React.Component {
    constructor(props) {
        super(props);

        this.hideFilters = this.hideFilters.bind(this);
    }

    hideFilters() {
        store.dispatch(hideFilters());
    }

    render() {
        return <button onClick={this.hideFilters} className="btn btn-danger">
            Skrýt filtry
        </button>
    }
}