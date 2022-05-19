import React from 'react';
import SpinnerImage from '../assets/spinner.gif';

export default function Spinner() {
	return (
		<img
			src={SpinnerImage}
			alt='Loading...'
			style={{ width: '100px', margin: 'auto', display: 'block' }}
		/>
	);
}
