import React from "react";
import {Loader} from "react-loaders";
import {withCookies} from "react-cookie";

const exportButtonCookie = 'export-button-loading';

class ExportButtonBody extends React.Component {
    componentWillMount() {
        const {cookies} = this.props;
        cookies.remove(exportButtonCookie);
        this.state = {
            loading: cookies.get(exportButtonCookie)
        };
    }

    onSubmit() {
        const {cookies} = this.props;
        cookies.set(exportButtonCookie, true, {path: '/'});
        this.setState({loading: true});
        this.timeout = setTimeout(this.checkCookie.bind(this), 500);
    }

    checkCookie() {
        const {cookies} = this.props;
        if (!cookies.get(exportButtonCookie)) {
            this.setState({loading: false});
            clearTimeout(this.timeout);
        } else {
            this.timeout = setTimeout(this.checkCookie.bind(this), 500);
        }
    }

    render() {
        const loaderStyles = {width: '10px', height: '10px'};
        const text = this.state.loading ? <Loader type="ball-pulse" styles={loaderStyles}/> : this.props.text;

        return (
            <form method="post" action={this.props.action} onSubmit={this.onSubmit.bind(this)}>
                <input type="hidden" name="graph" value={this.props.image}/>
                <button className="btn btn-warning btn-block" type="submit">
                    {text}
                </button>
            </form>
        );
    }
}

const ExportButton = withCookies(ExportButtonBody);

export const ExportPdfButton = ({filterQuery, image}) => (
    <ExportButton action={'/Chart/Export2PDF/?' + filterQuery} image={image} text="Export PDF"/>
);

export const ExportExcelButton = ({filterQuery, image}) => (
    <ExportButton action={'/Chart/Export2Excel/?' + filterQuery} image={image} text="Export EXCEL"/>
);

export const ExportJpgButton = ({filterQuery, image}) => (
    <ExportButton action={'/Chart/Export2JPG/?' + filterQuery} image={image} text="Export JPG"/>
);