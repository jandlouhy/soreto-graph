import React from "react";
import VirtualizedSelect from "react-virtualized-select";

import {fetchViews, changeView} from "../../actions/viewActions";
import store from "../../store";

export default class ViewSelector extends React.Component {
    componentWillMount() {
        if (!this.props.view.fetched) {
            store.dispatch(fetchViews())
        }
    }

    handleSelectChange(value) {
        store.dispatch(changeView(value))
    }

    render() {
        const options = this.props.view.items.map((item) => ({label: item.name, value: item.id}));
        const selected = this.props.view.selected;

        return <span>
            <label className="col-xs-12 col-sm-4">
                <VirtualizedSelect onChange={this.handleSelectChange}
                                   name="view-selector"
                                   options={options}
                                   value={selected}
                                   placeholder="Zvolte pohled"
                                   noResultsText="Žádný pohled zatím nebyl vytvořen"
                                   clearable={false}
                />
            </label>
            <button onClick="" className="btn btn-success">
                Použít pohled
            </button>
        </span>;
    }
}