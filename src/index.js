import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './store/reducers/rootReducer';

import { loadState, saveState } from './store/reducers/localStorage';
import { throttle } from 'lodash';

let devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && 
window.__REDUX_DEVTOOLS_EXTENSION__();
if (process.env.NODE_ENV === 'prod' || process.env.NODE_ENV === 'production') {
    devTools = a => a;
}

const persistedState = loadState();

const store = createStore(
    rootReducer,
    persistedState,
    compose(
      applyMiddleware(thunk),
      devTools,
    )
  );

store.subscribe(throttle(() => {
    saveState({
      place: store.getState().place,
    });
  }, 1000));
  
ReactDOM.render(
    <Provider store={store}><App /></Provider>, document.getElementById("root")
);

