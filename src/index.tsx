import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./Components/App";
import rootReducer from "../reducer/index";
import { createStore } from "redux";
// const { createStore, combineReducers } = require('redux');


const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}><App /></Provider>,
    document.getElementById("root"));
