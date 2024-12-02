import React, { useContext, useState } from 'react';

import styles from './SideBar.module.css';
import Search from '../Search/Search';
import CitiesContainer from '../CitiesContainer/CitiesContainer';
import TodaysWeather from '../TodaysWeather/TodaysWeather';
import { getCitiesList } from '../../utils/localStorageFuncs';
import { AppContext } from '../../context/AppProvider';

const SideBar = () => {
	const [cities, setCities] = useState<string[]>(() => getCitiesList());

	const context = useContext(AppContext);
	if (!context) {
		throw new Error('no context');
	}

	const { theme } = context;

	return (
		<div className={`${styles.sideBar}  ${theme === 'light' ? 'light' : styles.dark}`}>
			<Search cities={cities} setCities={setCities} />
			<CitiesContainer cities={cities} setCities={setCities} />
			<TodaysWeather />
		</div>
	);
};

export default SideBar;
