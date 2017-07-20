import React from "react";

import store from "../../store";
import {deleteView} from "../../actions/viewActions";

export default class DeleteViewButton extends React.PureComponent {
    deleteView() {
        const {label, value} = this.props.view;

        if (confirm(`Opravdu chcete odstranit pohled ${label}?`)) {
            store.dispatch(deleteView(value));
        }
    }

    render() {
        return <button className="btn btn-danger" onClick={this.deleteView.bind(this)}>
            Odstranit pohled
        </button>;
    }
}