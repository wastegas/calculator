import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Store from './store';
import Calculator from './components/calculator';

const store = Store;

ReactDOM.render(
	<Provider store={store}>
		<Calculator />
	</Provider>,
	document.getElementById('root')
);
