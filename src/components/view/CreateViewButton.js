import React from "react";

import store from "../../store";
import {createView} from "../../actions/viewActions";

export default class CreateViewButton extends React.PureComponent {
    saveView() {
        const name = prompt('Zadejte název pro nový pohled.');
        if (name) {
            store.dispatch(createView(name, this.props.filters));
        }
    }

    render() {
        return <button className="btn btn-info" onClick={this.saveView.bind(this)}>
            Vytvořit nový pohled
        </button>;
    }
}