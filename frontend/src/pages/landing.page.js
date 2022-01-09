import React from 'react';
import Carousel from '../components/carousel.component';

function LandingPage() {
	return (
		<div>
			<section>
				{/* Carousel */}
				<section>
					<div
						className='d-flex justify-content-center'
						style={{ marginTop: '7rem', marginBottom: '7rem' }}>
						<Carousel />
					</div>
				</section>
			</section>
		</div>
	);
}

export default LandingPage;
