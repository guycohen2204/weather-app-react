import React from 'react';

import styles from './WeeklyForecast.module.css';
import DailyCard from '../DailyCard/DailyCard';

const WeeklyForecast = () => {
	return (
		<div className={styles.container}>
			<DailyCard />
			<DailyCard />
			<DailyCard />
			<DailyCard />
			<DailyCard />
			<DailyCard />
			<DailyCard />
		</div>
	);
};

export default WeeklyForecast;
