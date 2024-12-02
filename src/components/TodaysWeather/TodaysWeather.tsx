import React, { useContext, useEffect, useState } from 'react';

import moment from 'moment';
import styles from './TodaysWeather.module.css';
import { AppContext } from '../../context/AppProvider';
import getCurrentWeatherByCity from '../../api/getCurrentWeatherByCity';
import { WeatherType } from '../../models/WeatherType';
import { roundString } from '../../utils/roundString';
import Loader from '../Loader/Loader';

const TodaysWeather = () => {
	const [data, setData] = useState<WeatherType>();
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const context = useContext(AppContext);

	if (!context) {
		throw new Error('AppContext must be used in an AppProvider');
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
			<img src={data?.current.conditionIcon} alt='condition logo' width={'150px'} />
			<div className={styles.Degree} style={{ padding: '10px' }}>
				{data?.current.temp
					? roundString(data?.current.temp) + '°C'
					: 'N/A'}
			</div>
			<div style={{ padding: '10px' }}>{data?.current.condition}</div>
			<div style={{ padding: '10px' }}>
				{data
					? moment(data?.location.localTime).format('dddd, HH:mm')
					: 'N/A'}
			</div>
		</div>
	);
};

export default TodaysWeather;
