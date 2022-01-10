import React from 'react';

function Carousel() {
	return (
		<div style={{ width: '70%', height: '100%' }}>
			<div
				id='carouselExampleCaptions'
				className='carousel carousel-fade slide'
				data-bs-ride='carousel'>
				<div className='carousel-indicators'>
					<button
						type='button'
						data-bs-target='#carouselExampleCaptions'
						data-bs-slide-to='0'
						className='active'
						aria-current='true'
						aria-label='Slide 1'></button>
					<button
						type='button'
						data-bs-target='#carouselExampleCaptions'
						data-bs-slide-to='1'
						aria-label='Slide 2'></button>
					<button
						type='button'
						data-bs-target='#carouselExampleCaptions'
						data-bs-slide-to='2'
						aria-label='Slide 3'></button>
				</div>
				<div className='carousel-inner'>
					<div className='carousel-item active'>
						<img
							src='https://res.cloudinary.com/abraomukas/image/upload/ar_16:9,c_fill,e_sharpen,g_auto,w_1000/v1641737614/project-vestuves/_JAN3644_Thu_30_hxwh0g.jpg'
							className='d-block w-100'
							alt='...'
						/>
					</div>
					<div className='carousel-item'>
						<img
							src='https://res.cloudinary.com/abraomukas/image/upload/c_scale,h_700/v1641736016/project-vestuves/_JAN4212_Thu_30_yju14w.jpg'
							className='d-block w-100'
							alt='...'
						/>
					</div>
					<div className='carousel-item'>
						<img
							src='https://res.cloudinary.com/abraomukas/image/upload/ar_16:9,c_fill,e_sharpen,g_auto,w_700/v1641735137/project-vestuves/_JAN4049_Thu_30_anwfe5.jpg'
							className='d-block w-100'
							alt='...'
						/>
					</div>
				</div>
				<button
					className='carousel-control-prev'
					type='button'
					data-bs-target='#carouselExampleCaptions'
					data-bs-slide='prev'>
					<span
						className='carousel-control-prev-icon'
						aria-hidden='true'></span>
					<span className='visually-hidden'>Previous</span>
				</button>
				<button
					className='carousel-control-next'
					type='button'
					data-bs-target='#carouselExampleCaptions'
					data-bs-slide='next'>
					<span
						className='carousel-control-next-icon'
						aria-hidden='true'></span>
					<span className='visually-hidden'>Next</span>
				</button>
			</div>
		</div>
	);
}

export default Carousel;
