import React, { useEffect, useState } from 'react';
import MountainCard from './MountainCard';

const BASE_URL = 'http://localhost:3000/mountains';

function MountainList() {
	const [mountains, setMountains] = useState([]);

	useEffect(() => {
		fetch(BASE_URL)
			.then((resp) => resp.json())
			.then((data) => setMountains(data));
	}, []);

	const renderMountains = mountains.map((mountain) => (
		<MountainCard key={mountain.id} {...mountain} />
	));

	return (
		<main>
			<h1>Mountain List</h1>
			<ul className='cards'>{renderMountains}</ul>
		</main>
	);
}
export default MountainList;
