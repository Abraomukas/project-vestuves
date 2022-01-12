import React from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import i18next from 'i18next';
import { Translation } from 'react-i18next';

const titles = [
	{ name: 'The ceremony', path: '/ceremony' },
	{ name: 'Lithuania for newbies', path: '/lietuva-for-newbies' },
	{ name: 'Moving around', path: '/moving' },
];
const languages = [
	{ name: 'English', country_code: 'gb' },
	{ name: 'Español', country_code: 'es' },
	{ name: 'Lietuvių', country_code: 'lt' },
];

function Navbar() {
	const currentLngCode = Cookies.get('i18next') || 'gb';

	return (
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
							{titles.map(({ index, name, path }) => {
								return (
									<li key={index} className='nav-item'>
										<Link key={index} className='nav-link active' to={path}>
											{name}
										</Link>
									</li>
								);
							})}
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
						<ul className='dropdown-menu' aria-labelledby='dropdownMenuButton1'>
							{languages.map(({ index, name, country_code }) => {
								return (
									<li key={index}>
										<button
											key={index}
											className='dropdown-item'
											onClick={() => {
												i18next.changeLanguage(country_code);
												window.location.reload();
											}}
											disabled={country_code === currentLngCode}>
											<i
												key={index}
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
				</div>
			</nav>
		</header>
	);
}

export default Navbar;
