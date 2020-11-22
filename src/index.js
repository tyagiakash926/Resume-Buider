import React from 'react';
import App from './App';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter as Router } from 'react-router-dom';

import {createStore} from "redux";
import {Provider} from "react-redux";
import {myReducer} from "./reducers/myReducer";
const store = createStore(myReducer);

ReactDOM.render(<Provider store = {store} ><Router><App /></Router></Provider>,document.getElementById('root'));

