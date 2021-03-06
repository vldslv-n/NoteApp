import React from "react"
import ReactDOM from "react-dom"
import { Provider } from 'react-redux'
import store from "store"
import Router from "router"
import Actions from "./actions"
import "styles/reset"
import "styles/button"

Actions.init();

ReactDOM.render(
    <Provider store={store}>
        <Router />
    </Provider>,
    document.getElementById("app")
)