import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import LayoutRoute from './components/layoutRoute.component';
import LandingPage from './pages/landing.page';
import IntroPage from './pages/intro.page';
import LocationPage from './pages/location.page';
import SchedulePage from './pages/schedule.page';

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<LayoutRoute path='/' exact component={LandingPage} />
				<LayoutRoute path='/intro' exact component={IntroPage} />
				<LayoutRoute path='/location' exact component={LocationPage} />
				<LayoutRoute path='/schedule' exact component={SchedulePage} />
			</Switch>
		</BrowserRouter>
	);
}

export default App;
