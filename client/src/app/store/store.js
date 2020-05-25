import {createStore, applyMiddleware, combineReducers} from "redux";
import thunk from 'redux-thunk';
import forms from "./reducers/forms";
import auth from "./reducers/auth";
import {composeWithDevTools} from 'redux-devtools-extension';

const reducers = {
  forms, auth
};

export const store = createStore(combineReducers(reducers), composeWithDevTools(applyMiddleware(thunk)));