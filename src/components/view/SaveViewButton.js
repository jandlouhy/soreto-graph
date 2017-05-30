import React from "react";

import store from "../../store";
import {fetchGraph} from "../../actions/graphActions";

export default class SaveViewButton extends React.Component {
    loadGraph() {
        store.dispatch(fetchGraph(this.props.filters));
    }

    render() {
        return <button className="btn btn-info" onClick={this.loadGraph.bind(this)}>
            Uložit pohled
        </button>;
    }
}