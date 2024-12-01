import React, { useContext, useEffect, useState } from 'react';

import styles from './CitiesContainer.module.css';
import CityButton from '../CityButton/CityButton';
import { AppContext } from '../../context/AppProvider';
import { getCitiesList } from '../../utils/localStorageFuncs';

type Props = {
	cities: string[];
	setCities: React.Dispatch<React.SetStateAction<string[]>>;
};

const CitiesContainer = ({ cities, setCities }: Props) => {
	const [selectedCity, setSelectedCity] = useState<string>(() => {
		const savedCities = getCitiesList();
		return savedCities?.[0] || '';
	})

	const context = useContext(AppContext);
	if (!context) {
		throw new Error('AppContext must be used in an AppProvider')
	}

	const { city } = context;

	useEffect(() => {
		setSelectedCity(city);
	}, [city])
	
	return (
		<div className={styles.container}>
			{cities.map((city: string, index: number) => (
				<CityButton
					key={`${city}-${index}`}
					city={city}
					setCities={setCities}
					cities={cities}
					selected={city === selectedCity}
				/>
			))}
		</div>
	);
};

export default CitiesContainer;
