import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import moment from "moment";
import {defaults} from "react-chartjs-2";
import {CookiesProvider} from "react-cookie";

import Layout from "./components/Layout";
import store from "./store";

import "react-dates/lib/css/_datepicker.css";
import "react-select/dist/react-select.css";
import "react-virtualized/styles.css";
import "react-virtualized-select/styles.css";
import "loaders.css/loaders.min.css";
import "./styles/datepicker.scss";

moment.locale('cs');

defaults.global.animation = false;

const app = document.getElementById('app');
ReactDOM.render(
    <Provider store={store}>
        <CookiesProvider>
            <Layout/>
        </CookiesProvider>
    </Provider>, app);