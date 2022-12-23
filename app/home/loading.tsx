import React from 'react';
import { BarLoader } from 'react-spinners';

type Props = {};

function loading({}: Props) {
	return (
		<div>
			<BarLoader aria-label="Loading Spinner" data-testid="loader" />
			<p>Loading Dashboard</p>
		</div>
	);
}

export default loading;
