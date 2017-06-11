import React from "react";

import store from "../../store";
import {updateView} from "../../actions/viewActions";

export default class SaveViewButton extends React.Component {
    updateView() {
        store.dispatch(updateView(this.props.view.value, this.props.filterQuery))
    }

    render() {
        return <button className="btn btn-info" onClick={this.updateView.bind(this)}>
            Uložit pohled
        </button>;
    }
}