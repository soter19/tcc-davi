import React from 'react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import {
  MuiThemeProvider,
  CssBaseline
} from "@material-ui/core";
import { createBrowserHistory } from "history";
import { createStore, applyMiddleware, compose } from "redux";
import { routerMiddleware } from "connected-react-router";
import theme from '../../assets/muitheme';
import Router from '../Router';
import { generateReducers } from "../../reducers";

export const history = createBrowserHistory();

const middlewares = [
  applyMiddleware(routerMiddleware(history), thunk),
  window.___REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : f => f
];

const store = createStore(generateReducers(history), compose(...middlewares));


function App() {
  return (
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Router history={history} />
      </MuiThemeProvider>
    </Provider>
  );
}

export default App;
