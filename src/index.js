import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import noteApp from './reducers'
 
const store = createStore(noteApp)

const unsubscribe = store.subscribe(() =>
	  console.log(store.getState())
)

console.log(store.getState())
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, document.getElementById('root'));
registerServiceWorker();


unsubscribe()
