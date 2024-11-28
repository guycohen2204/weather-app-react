import React, { useContext } from 'react';

import styles from './CityButton.module.css';
import { AppContext } from '../../context/AppProvider';

type Props = {
	city: string;
};

const CityButton = ({ city }: Props) => {
	const context = useContext(AppContext);

	if (!context) {
		throw new Error('AppContext must be used in an AppProvider');
	}

	const { setCity } = context;

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		const selectedCity = event.currentTarget.value;
		setCity(selectedCity);
	};

	return (
		<button
			className={styles.buttonContainer}
			value={city}
			onClick={handleClick}
		>
			{city}
		</button>
	);
};

export default CityButton;
