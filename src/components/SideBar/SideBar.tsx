import React, { useState } from 'react';

import styles from './SideBar.module.css';
import Search from '../Search/Search';
import CitiesContainer from '../CitiesContainer/CitiesContainer';
import TodaysWeather from '../TodaysWeather/TodaysWeather';

const SideBar = () => {
	const [cities, setCities] = useState<string[]>(['london', 'tel aviv']);

	return (
		<div className={styles.sideBar}>
			<Search setCities={setCities} />
			<CitiesContainer cities={cities} />
			<TodaysWeather />
		</div>
	);
};

export default SideBar;
