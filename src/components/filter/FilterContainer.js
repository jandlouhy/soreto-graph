import React from "react";

import CreateViewButton from "../view/CreateViewButton";
import DeleteViewButton from "../view/DeleteViewButton";
import Filters from "./Filters";
import Loading from "../Loading";
import ToggleFiltersButton from "./ToggleFiltersButton";
import SaveViewButton from "../view/SaveViewButton";
import SubmitFiltersButton from "./SubmitFilterButton";
import ViewSelector from "../view/ViewSelector";

import store from "../../store";
import {fetchFilters} from "../../actions/filtersActions";

export default class FilterContainer extends React.PureComponent {
    componentWillMount() {
        const {filters} = this.props;

        if (!filters.fetched && !filters.fetching && !filters.error) {
            store.dispatch(fetchFilters())
        }
    }

    render() {
        const {fetched, visible, filters, error} = this.props.filters;
        const {view} = this.props;

        if (view.fetching) {
            return <Loading/>;
        }

        if (error) {
            return null;
        }

        const styles = {
            padding: '15px',
            backgroundColor: '#313539',
            border: '1px solid rgba(0,0,0,0.6)',
        };

        const filtersClass = visible ? '' : 'hidden';

        return <div style={styles} className="navbar">
            <div className="row">
                <ViewSelector view={view} filters={filters}/>
                <SubmitFiltersButton filters={filters}/>
                {view.selected ? <DeleteViewButton view={view.selected}/> : null}
                <ToggleFiltersButton visible={visible}/>
            </div>
            <div className={filtersClass}>
                {fetched ? (
                    <div>
                        <br/>
                        <div className="form-group">
                            {view.selected ? <SaveViewButton view={view.selected} filters={filters}/> : null}
                            <CreateViewButton filters={filters}/>
                        </div>
                        <Filters filters={filters}/>
                        <div className="form-group">
                            <SubmitFiltersButton filters={filters}/>
                            <ToggleFiltersButton visible={visible}/>
                        </div>
                    </div>
                ) : (
                    <Loading/>
                )}
            </div>
        </div>;
    }
}