import {createStore, applyMiddleware, combineReducers} from "redux";
import thunk from 'redux-thunk';
import forms from "./reducers/forms";
import auth from "./reducers/auth";
import common from "./reducers/common";
import account from "./reducers/account";
import {composeWithDevTools} from 'redux-devtools-extension';

const reducers = {
  forms, auth, common, account
};

export const store = createStore(combineReducers(reducers), composeWithDevTools(applyMiddleware(thunk)));