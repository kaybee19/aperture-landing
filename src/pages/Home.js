import React from 'react';

// Comps
import Hero from '../components/Hero';
import CrossChain from '../components/CrossChain';
import How from '../components/How';
import Products from '../components/Products';
import RoadMap from '../components/RoadMap';

export default function Home() {

	return (
		<React.Fragment>
			<Hero />
			<CrossChain />
			<How />
			<Products />
			<RoadMap />
		</React.Fragment>
	);
};