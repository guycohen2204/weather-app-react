import React, { useContext, useEffect, useState } from 'react';

import styles from './TodaysHighlights.module.css';
import HighlightCard from '../HighlightCard/HighlightCard';
import { AppContext } from '../../context/AppProvider';
import getCurrentWeatherByCity from '../../api/getCurrentWeatherByCity';
import { CurrentType } from '../../models/WeatherType';

const TodaysHighlights = () => {
	const [data, setData] = useState<CurrentType>();

	const context = useContext(AppContext);

	if (!context) {
		throw new Error('AppContext must be used within an AppProvider');
	}

	const { city } = context;

	useEffect(() => {
		const fetchWeatherData = async () => {
			try {
				if (city) {
					const weatherData = await getCurrentWeatherByCity(city);
					setData(weatherData.current);
				}
			} catch (error) {
				console.error('Error fetching weather data:', error);
			}
		};

		fetchWeatherData();		
	}, [city]);

	return (
		<div>
			<h3 style={{ paddingLeft: '10px' }}>Today's Highlights</h3>
			<div className={styles.gridContainer}>
				<HighlightCard title='UV Index' value={data?.uvIndex} />
				<HighlightCard title='Wind Status' value={data?.windStatus} symbol='km/h' />
				{/* <HighlightCard title='Sunrise & Sunset' value={data?.} /> */}
				<HighlightCard title='Humidity' value={data?.humidity} symbol='%' />
				<HighlightCard title='Visibility' value={data?.visibility} symbol='km' />
				<HighlightCard title='Air Quality' value={data?.air_quality} />
			</div>
		</div>
	);
};

export default TodaysHighlights;
