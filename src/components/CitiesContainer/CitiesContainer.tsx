import React from 'react';

import styles from './CitiesContainer.module.css';
import CityButton from '../CityButton/CityButton';

type Props = {
	cities: string[]
}

const CitiesContainer = ({ cities }: Props) => {
	return (
		<div className={styles.container}>
			{
				cities.map(city => <CityButton title={city}/>)
			}
		</div>
	);
};

export default CitiesContainer;
