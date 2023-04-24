import React from "react";
import ReactDOM from "react-dom";
import './styles/styles.scss';
import { Provider } from "react-redux";

import { store } from "./store.js";
import { App } from "./App.jsx";

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
        <Provider store={store}>
                <App />
        </Provider>
);