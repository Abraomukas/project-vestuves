import React from 'react';
import { Link } from 'react-router-dom';

const bgColor = { backgroundColor: 'rgb(0,82,122)' };

function Navbar(props) {
	return (
		<div>
			<header>
				<nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
					<div className='container-fluid'>
						{/* Logo */}
						<Link className='navbar-brand' to='/'>
							<img src='./images/ducks.png' width='50' alt='Logo' />
						</Link>
						{/* Title */}{' '}
						<Link className='navbar-brand' to='/'>
							Vestuvės by Abraham & iEva
						</Link>
						{/* Sections */}
						<div className='collapse navbar-collapse'>
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
							</ul>
						</div>
						{/* Login */}
						<Link
							className='btn btn-outline-light'
							to='/register-human'
							role='button'>
							LOGIN
						</Link>
					</div>
				</nav>
			</header>
		</div>
	);
}

export default Navbar;
