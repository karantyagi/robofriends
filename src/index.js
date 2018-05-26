import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App'
import './containers/App.css';
import 'tachyons';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<div className={'pa3'}>
		<App/>
	</div>
	// <Hello msg={'test message...'}/>
	,document.getElementById('root'));
registerServiceWorker();
