import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App'
import './containers/App.css';
import 'tachyons';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger'
import {thunkMiddleWare} from 'redux-thunk';
import registerServiceWorker from './registerServiceWorker';
import {searchRobots} from "./reducers";

const logger = createLogger()
const store =
    createStore(searchRobots, applyMiddleware(thunkMiddleWare, logger))

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    // <Hello msg={'test message...'}/>
    ,document.getElementById('root'));
registerServiceWorker();
