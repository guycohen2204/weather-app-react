import React from 'react';

import styles from './WeeklyForecast.module.css';
import DailyCard from '../DailyCard/DailyCard';

const WeeklyForecast = () => {
	return (
		<div className={styles.container}>
			<DailyCard title='Sun' imageUrl='' degrees={[0, 10]} />
			<DailyCard title='Mon' imageUrl='' degrees={[0, 10]} />
			<DailyCard title='Tue' imageUrl='' degrees={[0, 10]} />
			<DailyCard title='Wed' imageUrl='' degrees={[0, 10]} />
			<DailyCard title='Thu' imageUrl='' degrees={[0, 10]} />
			<DailyCard title='Fri' imageUrl='' degrees={[0, 10]} />
			<DailyCard title='Sat' imageUrl='' degrees={[0, 10]} />
		</div>
	);
};

export default WeeklyForecast;
