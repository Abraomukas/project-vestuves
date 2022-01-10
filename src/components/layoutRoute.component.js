import React from 'react';
import { Route } from 'react-router-dom';

import Navbar from './navbar.component';

function LayoutRoute(props) {
	return (
		<div>
			<Navbar />
			<Route
				path={props.path}
				exact={props.exact}
				component={props.component}
			/>
		</div>
	);
}

export default LayoutRoute;
