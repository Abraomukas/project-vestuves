import React from 'react';
import Card from '../components/card.component';
import Carousel from '../components/carousel.component';

const buttons = [
	{ name: 'The ceremony', path: '/ceremony' },
	{ name: 'How to get there', path: '/location' },
	{ name: 'Lithuania for newbies', path: '/lietuva-for-newbies' },
];

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
			<section>
				{/* Text */}
				<div className='container' style={{ marginBottom: '3rem' }}>
					<p className='fs-3'>Yeaaaah, we’re a little backwards.</p>
					<p className='fs-3'>
						As probably all of you know, me and Abraham are already married and
						counting our third year of marriage. Since it’s going pretty well we
						decided to renew the contract and drag all of you to Lithuania to
						witness it! 🖤
					</p>
					<p className='fs-3'>
						The ultimate clash of cultures is upon us (aka our parents will
						finally meet), and we hope you will be there to celebrate this hot
						latino putting a ring (another one) on this northern blondie’s
						finger (and vice-versa).
					</p>
					<p className='fs-3'>
						We hope that on this website you will find answers to most of your
						questions, but you know where to find us if something remains
						unclear.
					</p>
				</div>
			</section>
			<section>
				{/* Buttons */}
				<div className='container'>
					<div className='d-flex justify-content-around mb-3'>
						{buttons.map(({ index, name, path }) => {
							return <Card index={index} caption={name} path={path} />;
						})}
					</div>
				</div>
			</section>
		</div>
	);
}

export default LandingPage;
