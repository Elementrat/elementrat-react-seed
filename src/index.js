import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux'
import { Provider } from 'react-redux'


import App from './containers/App';
import AppData from './reducers/index.js'

import './index.css';

const store = createStore(AppData)

ReactDOM.render(
<Provider store = {store}>
<App /> 
</Provider>,   
    
    document.getElementById('root'));
registerServiceWorker();

export default store