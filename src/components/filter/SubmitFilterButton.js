import React from "react";

import store from "../../store";
import {fetchGraph} from "../../actions/graphActions";

export default class SubmitFilterButton extends React.PureComponent {
    loadGraph() {
        store.dispatch(fetchGraph(this.props.filters));
    }

    render() {
        return <button className="btn btn-success" onClick={this.loadGraph.bind(this)}>
            Načíst graf
        </button>;
    }
}