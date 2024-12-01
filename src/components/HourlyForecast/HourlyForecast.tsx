import React, { useContext, useEffect, useState } from 'react';
import { HourlyType, HourlyWeatherType } from '../../models/WeatherType';
import { AppContext } from '../../context/AppProvider';
import getHourlyForecastByCityName from '../../api/getHourlyForcast';
import DailyCard from '../DailyCard/DailyCard';

import styles from './HourlyForecast.module.css';
import moment from 'moment';
import { roundString } from '../../utils/roundString';
import getTomorrowForecastByCityName from '../../api/getTomorrowForecast';
import Loader from '../Loader/Loader';

const HourlyForecast = () => {
	const [data, setData] = useState<HourlyWeatherType>();
	const [tomorrowsData, setTomorrowsData] = useState<HourlyWeatherType>();
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const context = useContext(AppContext);
	if (!context) {
		throw new Error('AppContext must be used within an AppProvider');
	}

	const { city } = context;

	useEffect(() => {
		const fetchHourlyData = async () => {
			setIsLoading(true);
			try {
				if (city) {
					const hourlyData = await getHourlyForecastByCityName(city);
					setData(hourlyData);
					if (moment(hourlyData.location.localTime).hour() > 17) {
						const tomorrowData =
							await getTomorrowForecastByCityName(city);
						setTomorrowsData(tomorrowData);
					}
				}
			} catch (error) {
				console.error('Error fetching weather data:', error);
			} finally {
				setIsLoading(false);
			}
		};

		fetchHourlyData();
	}, [city]);

	return isLoading ? (
		<Loader />
	) : (
		<div className={styles.container}>
			{data ? (
				[
					...data.hourlyForecast,
					...(tomorrowsData?.hourlyForecast ?? []),
				]
					.slice(moment(data.location.localTime).hour())
					.map((hourObj: HourlyType) => (
						<DailyCard
							key={hourObj?.time}
							title={moment(hourObj?.time).format('HH:mm')}
							imageUrl={hourObj?.imageUrl}
							degrees={[roundString(hourObj?.temp)]}
						/>
					))
			) : (
				<></>
			)}
		</div>
	);
};

export default HourlyForecast;
