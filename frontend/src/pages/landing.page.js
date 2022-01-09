import React from 'react';
import Card from '../components/card.component';
import Carousel from '../components/carousel.component';

function LandingPage() {
	return (
		<div>
			<section>
				{/* Carousel */}
				<div
					className='d-flex justify-content-center'
					style={{ marginTop: '5rem', marginBottom: '3rem' }}>
					<Carousel />
				</div>
			</section>
			<section>{/* Text */}</section>
			<section>
				{/* Buttons */}
				<div className='container'>
					<div className='d-flex justify-content-around mb-3'>
						<Card caption='Lithuania for newbies' />
						<Card caption='How to get there' />
						<Card caption='Schedule' />
					</div>
				</div>
			</section>
		</div>
	);
}

export default LandingPage;
