import React, { useContext, useEffect, useState } from 'react';

import styles from './AppContainer.module.css';
import WeeklyForecast from '../WeeklyForecast/WeeklyForecast';
import TodaysHighlights from '../TodaysHighlights/TodaysHighlights';
import { AppContext } from '../../context/AppProvider';
import getCurrentWeatherByCity from '../../api/getCurrentWeatherByCity';

const AppContent = () => {

    const [weatherData, setWeatherData] = useState();

    // const { city } = useContext(AppContext);

    // useEffect(() => {

    //     const fetchData = async () => {
    //         // const data = await getCurrentWeatherByCity(city);
    //         // setWeatherData(data);
    //     }

    //     fetchData();

    // }, [city])

	return (
		<div className={styles.container}>
			<WeeklyForecast />
			<TodaysHighlights />
		</div>
	);
};

export default AppContent;
