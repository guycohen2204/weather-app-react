import React from 'react';

import styles from './DailyCard.module.css';

type Props = {
	title: string;
	imageUrl: string;
	degrees: [number, number];
};

const DailyCard = ({ title, imageUrl, degrees }: Props) => {
	return (
		<div className={styles.container}>
			<h5>{title}</h5>
			<img src={imageUrl} alt={`${title} image`} />
			<div className={styles.degreesContainer}>
				<p>{`${degrees[0]}°`}</p>
				<p style={{ color: 'gray' }}>{`${degrees[1]}°`}</p>
			</div>
		</div>
	);
};

export default DailyCard;
