import {createStore, applyMiddleware, combineReducers} from "redux";
import thunk from 'redux-thunk';
import common from "./reducers/common";
import forms from "./reducers/forms";
import {composeWithDevTools} from 'redux-devtools-extension';

const reducers = {
  common, forms
};

export const store = createStore(combineReducers(reducers), composeWithDevTools(applyMiddleware(thunk)));