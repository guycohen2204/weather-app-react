import React, { useEffect, useRef } from 'react';
import 'ol/ol.css';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';

import styles from './MapComponent.module.css';
import { fromLonLat } from 'ol/proj';

type Props = {
	coords: number[];
};

const MapComponent = ({ coords }: Props) => {
	const mapRef = useRef<HTMLDivElement | null>(null);
	const mapInstanceRef = useRef<Map | null>(null);

	useEffect(() => {
		if (mapRef.current) {
			const map = new Map({
				target: mapRef.current,
				layers: [new TileLayer({ source: new OSM() })],
				view: new View({ center: [0, 0], zoom: 7 }),
			});

			mapInstanceRef.current = map;

			return () => map.setTarget(undefined);
		}
	}, []);

	useEffect(() => {
		if (mapInstanceRef.current) {
			mapInstanceRef.current.getView().setCenter(fromLonLat(coords));
		}
	}, [coords]);

	return (
		<div className={styles.mapContainer}>
			<div
				ref={mapRef}
				className={styles.map}
			/>
		</div>
	);
};

export default MapComponent;
