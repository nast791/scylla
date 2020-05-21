import React from 'react';
import ReactDOM from 'react-dom';
import './fonts.css';
import GlobalStyle from "./global.style";
import Routes from './app/Routes';
import {BrowserRouter} from "react-router-dom";
import {Provider} from 'react-redux';
import {store} from "./app/store/store";

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <GlobalStyle />
      <Routes/>
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));