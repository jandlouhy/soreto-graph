import React from "react";

import store from "../../store";
import {fetchGraph} from "../../actions/graphActions";

export default class DeleteViewButton extends React.Component {
    deleteView() {
        if (confirm('Opravdu chcete odstranit zvolený pohled?')) {
            store.dispatch
        }
    }

    render() {
        return <button className="btn btn-danger" onClick={this.deleteView.bind(this)}>
            Odstranit pohled
        </button>;
    }
}