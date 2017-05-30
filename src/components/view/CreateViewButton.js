import React from "react";

import store from "../../store";
import {createView} from "../../actions/viewActions";

export default class CreateViewButton extends React.Component {
    saveView() {
        const name = prompt('Zadejte název pro nový pohled.');
        store.dispatch(createView(name, this.props.filterQuery))
    }

    render() {
        return <button className="btn btn-info" onClick={this.saveView.bind(this)}>
            Vytvořit nový pohled
        </button>;
    }
}