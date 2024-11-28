import React, { useContext, useEffect, useState } from 'react';

import moment from 'moment';
import styles from './TodaysWeather.module.css';
import { AppContext } from '../../context/AppProvider';
import getCurrentWeatherByCity from '../../api/getCurrentWeatherByCity';
import { WeatherType } from '../../models/WeatherType';
import { roundString } from '../../utils/roundString';

const TodaysWeather = () => {
    const [data, setData] = useState<WeatherType>();

    const context = useContext(AppContext);

    if (!context) {
		throw new Error('AppContext must be used in an AppProvider');
	}

    const { city } = context;

    useEffect(() => {
		const fetchWeatherData = async () => {
			try {
				if (city) {
					const weatherData = await getCurrentWeatherByCity(city);
					setData(weatherData);
				}
			} catch (error) {
				console.error('Error fetching weather data:', error);
			}
		};

		fetchWeatherData();		
	}, [city]);

	return (
		<div className={styles.container}>
			<img src={data?.current.conditionIcon} alt='condition logo' />
			<p className={styles.Degree}>{data?.current.temp ? roundString(data?.current.temp)+'°C' : 'N/A'}</p>
			<p>{data ? moment(data?.location.localTime).format('dddd, HH:mm') : 'N/A'}</p>
			<p>{data?.current.condition}</p>
		</div>
	);
};

export default TodaysWeather;
