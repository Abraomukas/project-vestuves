import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './i18n';

const spinnerFallback = (
	<div className='d-flex justify-content-center mt-3'>
		<div
			className='spinner-border'
			style={{ width: '3rem', heigth: '3rem' }}
			role='status'>
			<span className='visually-hidden'>Loading...</span>
		</div>
	</div>
);

ReactDOM.render(
	<React.Suspense fallback={spinnerFallback}>
		<App />
	</React.Suspense>,
	document.getElementById('root')
);
