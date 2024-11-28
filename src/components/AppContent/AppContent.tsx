import React, { useState } from 'react';

import styles from './AppContent.module.css';
import WeeklyForecast from '../WeeklyForecast/WeeklyForecast';
import TodaysHighlights from '../TodaysHighlights/TodaysHighlights';
import HourlyForecast from '../HourlyForecast/HourlyForecast';

const AppContent = () => {
	const [isHourly, setIsHourly] = useState<boolean>(true);

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setIsHourly(event.currentTarget.value === 'Today');
	};

	return (
		<div className={styles.container}>
			<div>
				<div className={styles.buttonsContainer}>
					<button
						className={`${styles.periodTitle} ${isHourly && styles.active}`}
						value='Today'
						onClick={handleClick}
					>
						Today
					</button>
					<button
						className={`${styles.periodTitle} ${!isHourly && styles.active}`}
						value='Week'
						onClick={handleClick}
					>
						Week
					</button>
				</div>
				{isHourly ? <HourlyForecast /> : <WeeklyForecast />}
			</div>
			<TodaysHighlights />
		</div>
	);
};

export default AppContent;
