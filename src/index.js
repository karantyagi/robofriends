import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'
import './App.css';
import 'tachyons';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<div className={'mr2'}>
		<App/>
	</div>
	// <Hello msg={'test message...'}/>
	,document.getElementById('root'));
registerServiceWorker();
