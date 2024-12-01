import React from 'react';

import styles from './DailyCard.module.css';
import { roundString } from '../../utils/roundString';

type Props = {
	title?: string;
	imageUrl?: string;
	degrees?: string[];
};

const DailyCard = ({ title, imageUrl, degrees }: Props) => {
	return (
		<div className={styles.container}>
			<h5>{title}</h5>
			<img src={imageUrl} alt={`${title} img`} />
			<div className={styles.degreesContainer}>
				<p>{`${degrees?.[0] ? roundString(degrees[0]) : 'N/A'}°`}</p>
				{degrees && degrees?.length >= 2 && (
					<p style={{ color: 'gray' }}>{`${roundString(degrees[1])}°`}</p>
				)}
			</div>
		</div>
	);
};

export default DailyCard;
