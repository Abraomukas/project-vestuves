import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import LayoutRoute from './components/layoutRoute.component';
import LandingPage from './pages/landing.page';

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<LayoutRoute path='/' component={LandingPage} />
			</Switch>
		</BrowserRouter>
	);
}

export default App;
