import React from "react";
import VirtualizedSelect from "react-virtualized-select";

import {changeView, fetchViews} from "../../actions/viewActions";
import {fetchFilters, fetchFiltersByView} from "../../actions/filtersActions";
import store from "../../store";

export default class ViewSelector extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selected: null
        };
    }

    componentWillMount() {
        const {fetched, error} = this.props.view;

        if (!fetched && !error) {
            store.dispatch(fetchViews())
        }
    }

    changeView(view) {
        store.dispatch(changeView(view));
        if (view) {
            store.dispatch(fetchFiltersByView(view.value));
        } else {
            store.dispatch(fetchFilters());
        }
    }

    render() {
        const {items, selected} = this.props.view;
        const options = items.map((item) => ({label: item.name, value: item.id}));

        return <label className="col-xs-12 col-sm-4">
            <VirtualizedSelect onChange={this.changeView}
                               name="view-selector"
                               options={options}
                               value={selected}
                               placeholder="Zvolte pohled"
                               noResultsText="Žádný pohled zatím nebyl vytvořen"
                               clearable={true}
            />
        </label>;
    }
}