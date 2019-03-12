import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import Game from './Game';
import registerServiceWorker from './registerServiceWorker';

import configureStore from './store/configureStore'
import { Provider } from 'react-redux'
// import { createStore } from 'redux'

const store = configureStore();
console.log(store)

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));
// ReactDOM.render(<Game/>, document.getElementById('root'));
registerServiceWorker();
