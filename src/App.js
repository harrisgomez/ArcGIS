import { useEffect, useRef } from 'react';

import MapView from '@arcgis/core/views/MapView';
import Map from '@arcgis/core/Map';

import './App.css';

const App = () => {
	const mapRef = useRef(null);

	useEffect(() => {
		if (!mapRef.current) return;

		const map = new Map({
			basemap: 'osm'
		});

		const view = new MapView({
			map: map,
			container: mapRef.current,
			center: [260, 40],
			zoom: 5
		});

		return () => view && view.destroy();
	}, []);

	return (
		<div className="App">
			<div className='viewDiv' ref={mapRef}></div>
		</div>
	);
};

export default App;