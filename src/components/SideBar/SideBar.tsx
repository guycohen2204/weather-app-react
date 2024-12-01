import React, { useState } from 'react';

import styles from './SideBar.module.css';
import Search from '../Search/Search';
import CitiesContainer from '../CitiesContainer/CitiesContainer';
import TodaysWeather from '../TodaysWeather/TodaysWeather';
import { getCitiesList } from '../../utils/localStorageFuncs';

const SideBar = () => {
	const [cities, setCities] = useState<string[]>(() => getCitiesList());

	return (
		<div className={styles.sideBar}>
			<Search cities={cities} setCities={setCities} />
			<CitiesContainer cities={cities} setCities={setCities} />
			<TodaysWeather />
		</div>
	);
};

export default SideBar;
