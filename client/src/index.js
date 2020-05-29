import React from "react";
import App from "./components/App";
import ReactDOM from "react-dom";
import "./assets/scss/styles.scss";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose} from "redux";
import reducers from "./reducers";
import history from './history';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <HashRouter history={history}>
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById("root")
);
