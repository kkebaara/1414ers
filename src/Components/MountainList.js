import React from 'react';
import MountainCard from './MountainCard';

function MountainList({ mountains }) {
	const renderMountains = mountains.map((mountain) => (
		<MountainCard
			key={mountain.id}
			name={mountain.name}
			image={mountain.image}
			price={mountain.price}
		/>
	));

	return <ul className='cards'>{renderMountains}</ul>;
}

export default MountainList;
