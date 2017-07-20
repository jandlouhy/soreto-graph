import React from "react";

import {Loader} from "react-loaders";

const Loading = () => {
    const styles = {
        textAlign: 'center',
        padding: '20px 0'
    };

    return (
        <div style={styles}>
            <Loader type="ball-pulse"/>
        </div>
    );
};

export default Loading;