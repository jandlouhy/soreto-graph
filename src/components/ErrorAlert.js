import React from "react";

export default class ErrorAlert extends React.Component {
    createMarkup() {
        return {__html: this.props.message};
    }

    render() {
        return <div className="alert alert-danger" dangerouslySetInnerHTML={this.createMarkup()}/>;
    }
}