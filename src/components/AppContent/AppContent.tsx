import React, { useContext, useState } from 'react';

import styles from './AppContent.module.css';
import WeeklyForecast from '../WeeklyForecast/WeeklyForecast';
import TodaysHighlights from '../TodaysHighlights/TodaysHighlights';
import HourlyForecast from '../HourlyForecast/HourlyForecast';
import ToggleThemeMode from '../ToggleThemeMode/ToggleThemeMode';
import { AppContext } from '../../context/AppProvider';

const AppContent = () => {
	const [isHourly, setIsHourly] = useState<boolean>(true);

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setIsHourly(event.currentTarget.value === 'Today');
	};

	const context = useContext(AppContext);
	if (!context) {
		throw new Error('no context');
	}

	const { theme } = context;

	return (
		<div
			className={`${styles.container} ${
				theme === 'light' ? 'light' : styles.dark
			}`}
		>
			<div className={styles.cardsContainer}>
				<div className={styles.buttonsContainer}>
					<div>
						<button
							className={`${styles.periodTitle} ${
								isHourly && styles.active
							}
								${theme === 'dark' && styles.dark}
							`}
							value='Today'
							onClick={handleClick}
						>
							Today
						</button>
						<button
							className={`${styles.periodTitle} ${
								!isHourly && styles.active
							}
							${theme === 'dark' && styles.dark}`}
							value='Week'
							onClick={handleClick}
						>
							Week
						</button>
					</div>
					<ToggleThemeMode />
				</div>
				{isHourly ? <HourlyForecast /> : <WeeklyForecast />}
			</div>
			<TodaysHighlights />
		</div>
	);
};

export default AppContent;
