import React, { useContext, useEffect, useState } from 'react';

import styles from './WeeklyForecast.module.css';
import DailyCard from '../DailyCard/DailyCard';
import { DailyType } from '../../models/WeatherType';
import getDailyForecastByCityName from '../../api/getDailyForecast';
import { AppContext } from '../../context/AppProvider';
import moment from 'moment';

const WeeklyForecast = () => {
	const [data, setData] = useState<DailyType[]>([]);

	const context = useContext(AppContext);

	if (!context) {
		throw new Error('AppContext must be used within an AppProvider');
	}

	const { city } = context;

	useEffect(() => {
		const fetchDailyWeatherData = async () => {
			try {
				if (city) {
					const weatherData = await getDailyForecastByCityName(city);
					setData(weatherData);
				}
			} catch (error) {
				console.error('Error fetching weather data:', error);
			}
		};

		fetchDailyWeatherData();
	}, [city]);

	return (
		<div className={styles.container}>
			{data.map((dailyObj: DailyType, index: number) => (
				<DailyCard
					key={index}
					title={moment(dailyObj?.date).format('ddd')}
					imageUrl={dailyObj?.imageUrl}
					degrees={
						dailyObj && [dailyObj?.min_temp, dailyObj?.max_temp]
					}
				/>
			))}
		</div>
	);
};

export default WeeklyForecast;
