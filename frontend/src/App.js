import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import LayoutRoute from './components/layoutRoute.component';
import LandingPage from './pages/landing.page';
import LietuvaPage from './pages/lietuva.page';
import LocationPage from './pages/location.page';
import CeremonyPage from './pages/ceremony.page';

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<LayoutRoute path='/' exact component={LandingPage} />
				<LayoutRoute path='/ceremony' exact component={CeremonyPage} />
				<LayoutRoute path='/location' exact component={LocationPage} />
				<LayoutRoute
					path='/lietuva-for-newbies'
					exact
					component={LietuvaPage}
				/>
			</Switch>
		</BrowserRouter>
	);
}

export default App;
