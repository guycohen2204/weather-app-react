import React, { useContext, useEffect, useState } from 'react';

import styles from './TodaysHighlights.module.css';
import HighlightCard from '../HighlightCard/HighlightCard';
import { AppContext } from '../../context/AppProvider';
import getCurrentWeatherByCity from '../../api/getCurrentWeatherByCity';
import { WeatherType } from '../../models/WeatherType';
import MapComponent from '../MapComponent/MapComponent';
import Loader from '../Loader/Loader';

const TodaysHighlights = () => {
	const [data, setData] = useState<WeatherType>();
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const context = useContext(AppContext);

	if (!context) {
		throw new Error('AppContext must be used within an AppProvider');
	}

	const { city } = context;

	useEffect(() => {
		const fetchWeatherData = async () => {
			setIsLoading(true);
			try {
				if (city) {
					const weatherData = await getCurrentWeatherByCity(city);
					setData(weatherData);
				}
			} catch (error) {
				console.error('Error fetching weather data:', error);
			} finally {
				setIsLoading(false);
			}
		};

		fetchWeatherData();
	}, [city]);

	return isLoading ? (
		<Loader />
	) : (
		<div className={styles.container}>
			<h3 style={{ paddingLeft: '10px' }}>Today's Highlights</h3>
			<div className={styles.gridContainer}>
				<HighlightCard
					title='UV Index'
					value={data?.current?.uvIndex}
				/>
				<HighlightCard
					title='Wind Status'
					value={data?.current?.windStatus}
					symbol='km/h'
				/>
				<HighlightCard
					title='Humidity'
					value={data?.current?.humidity}
					symbol='%'
				/>
				<HighlightCard
					title='Visibility'
					value={data?.current?.visibility}
					symbol='km'
				/>
				<HighlightCard
					title='Air Quality'
					value={data?.current?.air_quality}
				/>
				<MapComponent
					coords={
						data
							? [+data?.location?.lon, +data?.location?.lat]
							: [0, 0]
					}
				/>
			</div>
		</div>
	);
};

export default TodaysHighlights;
