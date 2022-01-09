import React from 'react';
import { Link } from 'react-router-dom';

function Card(props) {
	return (
		<div className='d-flex justify-content-center'>
			<div className='card-body text-white'>
				<Link className='btn btn-dark' href={props.path}>
					<b>{props.caption}</b>
				</Link>
			</div>
		</div>
	);
}

export default Card;
