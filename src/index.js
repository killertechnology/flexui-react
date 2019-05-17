/*
 src/index.js
*/
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import {createStore} from 'redux';
import allReducers from './reducers';
import './index.css';
import App from './components/App'; 
 


const store = createStore(allReducers);

 
ReactDOM.render( 
	<Provider store={store}>
		<App/>
	</Provider>, 
	document.getElementById('root')
);