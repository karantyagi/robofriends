import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App'
import './containers/App.css';
import 'tachyons';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, combineReducers } from 'redux';
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk';
import registerServiceWorker from './registerServiceWorker';
import {searchRobots, requestRobots} from "./reducers";

const logger = createLogger()
const rootReducer = combineReducers({searchRobots, requestRobots})
const store =
    createStore(rootReducer, applyMiddleware(thunkMiddleware, logger))

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    // <Hello msg={'test message...'}/>
    ,document.getElementById('root'));
registerServiceWorker();
