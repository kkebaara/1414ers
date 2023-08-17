import React, { useEffect, useState } from 'react';
import Search from './Search';
import MountainList from './MountainList';

const BASE_URL = 'http://localhost:6001/mountains';

function MountainPage() {
	const [mountains, setMountains] = useState([]);
	const [search, setSearch] = useState('');

	useEffect(() => {
		fetch(BASE_URL)
			.then((resp) => resp.json())
			.then(setMountains);
	}, []);

	const filteredMountains = mountains.filter((mountain) => {
		return mountain.name.toLowerCase().includes(search.toLowerCase());
	});

	return (
		<main>
			<Search search={search} setSearch={setSearch} />
			<MountainList mountains={filteredMountains} />
		</main>
	);
}

export default MountainPage;
