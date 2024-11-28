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

	const Cards = data.map((dailyObj: DailyType) => (
		<DailyCard
			title={moment(dailyObj?.date).format('ddd')}
			imageUrl={dailyObj?.imageUrl}
			degrees={dailyObj && [dailyObj?.min_temp, dailyObj?.max_temp]}
		/>
	))

	return (
		<div className={styles.container}>
			{
				Cards
			}
			{
				Cards
			}
			{Cards[0]}
			{/* <DailyCard title='Mon' imageUrl='' degrees={[0, 10]} />
			<DailyCard title='Tue' imageUrl='' degrees={[0, 10]} />
			<DailyCard title='Wed' imageUrl='' degrees={[0, 10]} />
			<DailyCard title='Thu' imageUrl='' degrees={[0, 10]} />
			<DailyCard title='Fri' imageUrl='' degrees={[0, 10]} />
			<DailyCard title='Sat' imageUrl='' degrees={[0, 10]} /> */}
		</div>
	);
};

export default WeeklyForecast;
