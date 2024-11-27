import React, { useContext, useEffect, useState } from 'react';

import styles from './TodaysHighlights.module.css';
import HighlightCard from '../HighlightCard/HighlightCard';
import { AppContext } from '../../context/AppProvider';
import getCurrentWeatherByCity from '../../api/getCurrentWeatherByCity';

const TodaysHighlights = () => {
	const [data, setData] = useState();

	const cityContext: string = useContext(AppContext).city;

	useEffect(() => {
		const fetchWeatherData = async () => {
			console.log('cityContext is --- ' + cityContext);

			if (cityContext) {
				const weatherData = await getCurrentWeatherByCity(cityContext);
				setData(weatherData.current);
			}
		};

		try {
			fetchWeatherData();
		} catch (error) {
			console.error(error);
		}
	}, [cityContext]);

	return (
		<div>
			<h3 style={{ paddingLeft: '10px' }}>Today's Highlights</h3>
			<div className={styles.gridContainer}>
				<HighlightCard title='UV Index' value={10} />
				<HighlightCard title='Wind Status' value={10} />
				<HighlightCard title='Sunrise & Sunset' value={10} />
				<HighlightCard title='Humidity' value={10} />
				<HighlightCard title='Visibility' value={10} />
				<HighlightCard title='Air Quality' value={10} />
			</div>
		</div>
	);
};

export default TodaysHighlights;
