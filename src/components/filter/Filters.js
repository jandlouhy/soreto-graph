import React from "react";

import Filter from "./Filter"

export default class Filters extends React.PureComponent {
    render() {
        return (
            <div>
                {this.props.filters.map((filter) => <Filter key={filter.id} filters={filter}/>)}
            </div>
        );
    }
}