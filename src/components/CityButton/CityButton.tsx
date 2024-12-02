import React, { useContext } from 'react';

import styles from './CityButton.module.css';
import { AppContext } from '../../context/AppProvider';
import { setCitiesList } from '../../utils/localStorageFuncs';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

type Props = {
	city: string;
	setCities: React.Dispatch<React.SetStateAction<string[]>>;
	cities: string[];
	selected: boolean;
};

const notify = () => toast.error("Cannot delete first and only element", { position: 'bottom-left' });

const CityButton = ({ city, setCities, cities, selected }: Props) => {
	const context = useContext(AppContext);

	if (!context) {
		throw new Error('AppContext must be used in an AppProvider');
	}

	const { city: currentCity, setCity, theme } = context;

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		const selectedCity = event.currentTarget.value;
		setCity(selectedCity);
	};

	const handleRemove = (event: React.MouseEvent<HTMLButtonElement>) => {
		if (cities.length === 1) {
			notify();
			return;
		}
		
		const seletedCity = event.currentTarget.value;
		setCities((prev) =>
			[...prev].filter((city: string) => city !== seletedCity)
		);
		setCitiesList(
			[...cities].filter((city: string) => city !== seletedCity)
		);

		if (seletedCity === currentCity) {
			setCity(cities.filter((city) => city !== seletedCity)[0]);
		}
	};

	return (
		<div className={`${styles.container} ${selected && styles.selected}`}>
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
				-
			</button>
		</div>
	);
};

export default CityButton;
