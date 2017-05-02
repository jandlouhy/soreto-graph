import React from "react";

import {Loader} from "react-loaders";

export default class Loading extends React.Component {
    render() {
        const styles = {
            textAlign: 'center',
            padding: '20px 0'
        };

        return <div style={styles}>
            <Loader type="ball-pulse"/>
        </div>
    }
}