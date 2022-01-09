import React from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';

const languages = [
	{ name: 'English', country_code: 'gb' },
	{ name: 'Español', country_code: 'es' },
	{ name: 'Lietuvių', country_code: 'lt' },
];

function Navbar(props) {
	const currentLngCode = Cookies.get('i18next') || 'gb';

	return (
		<div>
			<header>
				<nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
					<div className='container-fluid'>
						{/* Logo */}
						<Link className='navbar-brand' to='/'>
							<img src='./images/ducks.png' width='70' alt='Logo' />
						</Link>
						{/* Title */}{' '}
						<Link className='navbar-brand' to='/'>
							Vestuvės by Abraham & iEva
						</Link>
						{/* Sections */}
						<div className='collapse navbar-collapse justify-content-center'>
							<ul className='navbar-nav'>
								<li className='nav-item'>
									<Link className='nav-link active' to='/'>
										Lithuania for newbies
									</Link>
								</li>
								<li className='nav-item'>
									<Link className='nav-link active' to='/'>
										How to get there
									</Link>
								</li>
								<li className='nav-item'>
									<Link className='nav-link active' to='/'>
										Schedule
									</Link>
								</li>
							</ul>
						</div>
						{/* Language selector */}
						<div className='dropdown mx-3'>
							<button
								className='btn dropdown-toggle btn-outline-light'
								type='button'
								id='dropdownMenuButton1'
								data-bs-toggle='dropdown'
								aria-expanded='false'>
								<i className='fas fa-globe'></i>
							</button>
							<ul
								className='dropdown-menu'
								aria-labelledby='dropdownMenuButton1'>
								{languages.map(({ name, country_code, index }) => {
									return (
										<li key={index}>
											<button
												className='dropdown-item'
												onClick={() => {
													i18next.changeLanguage(country_code);
													window.location.reload();
												}}
												disabled={country_code === currentLngCode}>
												<i
													className={`flag flag-${country_code}`}
													style={{
														opacity: country_code === currentLngCode ? 0.5 : 1,
													}}></i>
												{name}
											</button>
										</li>
									);
								})}
							</ul>
						</div>
						{/* Login */}
						<Link className='btn btn-outline-light' to='/' role='button'>
							LOGIN
						</Link>
					</div>
				</nav>
			</header>
		</div>
	);
}

export default Navbar;
