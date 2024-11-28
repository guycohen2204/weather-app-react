import React, { useContext } from 'react';

import styles from './CityButton.module.css';
import { AppContext } from '../../context/AppProvider';

type Props = {
	city: string;
	setCities: React.Dispatch<React.SetStateAction<string[]>>;
	cities: string[];
};

const CityButton = ({ city, setCities, cities }: Props) => {
	const context = useContext(AppContext);

	if (!context) {
		throw new Error('AppContext must be used in an AppProvider');
	}

	const { city: currentCity, setCity } = context;

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		const selectedCity = event.currentTarget.value;
		setCity(selectedCity);
	};

	const handleRemove = (event: React.MouseEvent<HTMLButtonElement>) => {
		const seletedCity = event.currentTarget.value;
		setCities((prev) => [...prev].filter((city) => city !== seletedCity));

		if (seletedCity === currentCity) {
			setCity(cities.filter(city => city !== seletedCity)[0]);
		}
	};

	return (
		<div className={styles.container}>
			<button
				className={styles.buttonContainer}
				value={city}
				onClick={handleClick}
			>
				{city}
			</button>
			<button
				className={styles.removeButton}
				value={city}
				onClick={handleRemove}
			>
				X
			</button>
		</div>
	);
};

export default CityButton;
