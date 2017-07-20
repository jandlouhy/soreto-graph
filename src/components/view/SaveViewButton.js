import React from "react";

import store from "../../store";
import {updateView} from "../../actions/viewActions";

export default class SaveViewButton extends React.PureComponent {
    updateView() {
        store.dispatch(updateView(this.props.view.value, this.props.filters))
    }

    render() {
        return <button className="btn btn-info" onClick={this.updateView.bind(this)}>
            Uložit pohled
        </button>;
    }
}