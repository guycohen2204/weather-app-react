import React, { useContext, useEffect, useState } from 'react';
import { HourlyType } from '../../models/WeatherType';
import { AppContext } from '../../context/AppProvider';
import getHourlyForecastByCityName from '../../api/getHourlyForcast';
import DailyCard from '../DailyCard/DailyCard';

import styles from './HourlyForecast.module.css';
import moment from 'moment';
import { roundString } from '../../utils/roundString';

const HourlyForecast = () => {
	const [data, setData] = useState<HourlyType[]>();

	const context = useContext(AppContext);
	if (!context) {
		throw new Error('AppContext must be used within an AppProvider');
	}

	const { city } = context;

	useEffect(() => {
		const fetchHourlyData = async () => {
			try {
				if (city) {
					const hourlyData = await getHourlyForecastByCityName(city);
					setData(hourlyData);
				}
			} catch (error) {
				console.error('Error fetching weather data:', error);
			}
		};

		fetchHourlyData();
	}, [city]);

	return (
		<div className={styles.container}>
			{data ? (
				// data.slice(moment().hour(),moment().hour() + 7).map((hourObj: HourlyType) => (
				data
					.slice(10, 17)
					.map((hourObj: HourlyType) => (
						<DailyCard
							key={hourObj.time}
							title={moment(hourObj.time).format('HH:mm')}
							imageUrl={hourObj.imageUrl}
							degrees={[roundString(hourObj.temp)]}
						/>
					))
			) : (
				<></>
			)}
		</div>
	);
};

export default HourlyForecast;
