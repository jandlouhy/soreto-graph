import React from "react";

import store from "../../store";
import {fetchGraph} from "../../actions/graphActions";

export default class SubmitFilterButton extends React.Component {
    loadGraph() {
        store.dispatch(fetchGraph());
    }

    render() {
        return <button className="btn btn-success" onClick={this.loadGraph}>
            Vyfiltrovat
        </button>;
    }
}