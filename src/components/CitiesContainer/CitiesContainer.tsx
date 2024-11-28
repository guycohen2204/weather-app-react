import React from 'react';

import styles from './CitiesContainer.module.css';
import CityButton from '../CityButton/CityButton';

type Props = {
	cities: string[];
	setCities: React.Dispatch<React.SetStateAction<string[]>>;
};

const CitiesContainer = ({ cities, setCities }: Props) => {
	return (
		<div className={styles.container}>
			{cities.map((city: string, index: number) => (
				<CityButton
					key={`${city}-${index}`}
					city={city}
					setCities={setCities}
					cities={cities}
				/>
			))}
		</div>
	);
};

export default CitiesContainer;
