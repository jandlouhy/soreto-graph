import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import moment from "moment";

import Layout from "./components/Layout";
import store from "./store";

import "react-dates/lib/css/_datepicker.css";

const app = document.getElementById('app');

moment.locale('cs');

ReactDOM.render(
    <Provider store={store}>
        <Layout/>
    </Provider>, app);