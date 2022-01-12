import React from 'react';
import { Link } from 'react-router-dom';

function LietuvaPage() {
	return (
		<div className='container'>
			<div style={{ marginTop: '3rem' }}>
				<p className='display-1' style={{ marginBottom: '3rem' }}>
					What to see in Lithuania
				</p>
				<p className='fs-3'>
					If you decide to join us in this adventure, we are counting on you not
					to leave Lithuania without seeing a little bit more of it. However, as
					much as we would like to show you around, we are likely not going to
					be able to... but we are definitely there to answer any questions you
					have!
				</p>
				<p className='fs-3'>
					Here are a few recommendations for your consideration:
				</p>

				<div
					className='accordion'
					style={{ marginBottom: '3rem' }}
					id='accordionExample'>
					{/* Vilnius */}
					<div className='accordion-item'>
						<h2 className='accordion-header' id='headingOne'>
							<button
								className='accordion-button'
								type='button'
								data-bs-toggle='collapse'
								data-bs-target='#collapseOne'
								aria-expanded='true'
								aria-controls='collapseOne'>
								<strong>Vilnius</strong>
							</button>
						</h2>
						<div
							id='collapseOne'
							className='accordion-collapse collapse show'
							aria-labelledby='headingOne'
							data-bs-parent='#accordionExample'>
							<div className='accordion-body'>
								Vilnius is a small and charming capital, with a very cute (and
								totally walkable) old town. More tips and tricks can be found{' '}
								<Link to='https://www.govilnius.lt/visit-vilnius'>here</Link>.
							</div>
						</div>
					</div>
					{/* Kaunas */}
					<div className='accordion-item'>
						<h2 className='accordion-header' id='headingTwo'>
							<button
								className='accordion-button'
								type='button'
								data-bs-toggle='collapse'
								data-bs-target='#collapseTwo'
								aria-expanded='true'
								aria-controls='collapseTwo'>
								<strong>Kaunas</strong>
							</button>
						</h2>
						<div
							id='collapseTwo'
							className='accordion-collapse collapse show'
							aria-labelledby='headingTwo'
							data-bs-parent='#accordionExample'>
							<div className='accordion-body'>
								The second biggest town of Lithuania (and yet much smaller than
								Vilnius). More info{' '}
								<Link to='https://visit.kaunas.lt/en/'>here</Link>.
							</div>
						</div>
					</div>
					{/* Traikai */}
					<div className='accordion-item'>
						<h2 className='accordion-header' id='headingThree'>
							<button
								className='accordion-button'
								type='button'
								data-bs-toggle='collapse'
								data-bs-target='#collapseThree'
								aria-expanded='true'
								aria-controls='collapseThree'>
								<strong>Traikai</strong>
							</button>
						</h2>
						<div
							id='collapseThree'
							className='accordion-collapse collapse show'
							aria-labelledby='headingThree'
							data-bs-parent='#accordionExample'>
							<div className='accordion-body'>
								Around 30km away from Vilnius there is Trakai - a castle in the
								middle of a lake that’s worth visiting. More info{' '}
								<Link to='https://www.govilnius.lt/visit-vilnius/places/trakai-castle'>
									here
								</Link>
								.
							</div>
						</div>
					</div>
					{/* Seaside/Curonian spit */}
					<div className='accordion-item'>
						<h2 className='accordion-header' id='headingFour'>
							<button
								className='accordion-button'
								type='button'
								data-bs-toggle='collapse'
								data-bs-target='#collapseFour'
								aria-expanded='true'
								aria-controls='collapseFour'>
								<strong>Seaside/Curonian spit</strong>
							</button>
						</h2>
						<div
							id='collapseFour'
							className='accordion-collapse collapse show'
							aria-labelledby='headingFour'
							data-bs-parent='#accordionExample'>
							<div className='accordion-body'>
								In Lithuania we have this weird thing called The Curonian Spit,
								and it is totally worth the drive (yes, people do swim in the
								Baltic Sea - it is not THAT cold, and yes we have beautiful
								sandy beaches and dunes there). More info can be found{' '}
								<Link to='https://www.lithuania.travel/en/place/kursiu-nerija-national-park'>
									here
								</Link>
								.
							</div>
						</div>
					</div>
					{/* LT in general */}
					<div className='accordion-item'>
						<h2 className='accordion-header' id='headingFive'>
							<button
								className='accordion-button'
								type='button'
								data-bs-toggle='collapse'
								data-bs-target='#collapseFive'
								aria-expanded='true'
								aria-controls='collapseFive'>
								<strong>Lithuania in general</strong>
							</button>
						</h2>
						<div
							id='collapseFive'
							className='accordion-collapse collapse show'
							aria-labelledby='headingFive'
							data-bs-parent='#accordionExample'>
							<div className='accordion-body'>
								<ul>
									<li>
										We have all four seasons - it gets really cold during the
										winter, but it can also get really hot during the summer.
										There was a heatwave last year during which the temperature
										rose to around 38 C for a couple of weeks. Be aware that AC
										is not always available in Airbnbs (but mostly available in
										hotels). It is hard to say what the weather will be on the
										6th of July, but please keep in mind that it can be anything
										between +15 C and rain to +38 C and sun. But let’s hope it
										is going to be +25 C and sunny. 😉
									</li>
									<br></br>
									<li>
										Lithuania is much more north than some of you are used to -
										during June-July it is still light outside until around
										10pm.
									</li>
									<br></br>
									<li>
										You are not likely to have any issues communicating in
										English in Vilnius or Kaunas. Unless you talk to a person
										above 40-50 years old. Then anything can happen.
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default LietuvaPage;
