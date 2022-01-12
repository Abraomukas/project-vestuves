import React from 'react';

function CeremonyPage() {
	return (
		<div className='container'>
			<section>
				<div style={{ marginTop: '3rem' }}>
					<p className='display-1' style={{ marginBottom: '3rem' }}>
						About the ceremony
					</p>
					<p className='fs-3'>
						The ceremony and the celebration will happen at{' '}
						<a href='https://g.page/Dzukijosdvaras?share'>Dzukijos dvaras</a>,
						Tarzanijos g. 1, Radžiūnų km., Alytaus raj., Lithuania.
					</p>
					<p className='fs-3'>
						We will provide you with a hotel room for the night, so that you can
						dance until the morning with us without worrying about how to get
						home.
					</p>
					<p className='fs-3'>
						We will also provide transportation from Kaunas city to Dzukijos
						dvaras (and vice versa the next day). We will send a form closer to
						the date asking if you would like to use that option, or if you
						prefer to go with your own/rented car (Dzukijos dvaras has a free
						and secure parking lot).
					</p>
					<p className='fs-3'>
						To RSVP please fill in{' '}
						<a href='https://docs.google.com/forms/d/e/1FAIpQLSdGa2gYgbBybRJuZl6P_CpFquoCUg824WvNR_IXf5dvrbJ0tA/viewform?vc=0&c=0&w=1&flr=0'>
							this form
						</a>
						.
					</p>
					<p className='fs-3'>
						Aaaaand <strong>PLEASE RSVP BEFORE MAY 6</strong>, or bring a chair
						and a sandwich to the wedding ;)
					</p>
				</div>
			</section>
		</div>
	);
}

export default CeremonyPage;
