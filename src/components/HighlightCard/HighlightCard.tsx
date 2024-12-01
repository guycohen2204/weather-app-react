import React from 'react';

import styles from './HighlightCard.module.css';
import { roundString } from '../../utils/roundString';

type Props = {
	title: string;
	value?: string;
	symbol?: string;
};

const HighlightCard = ({ title, value, symbol }: Props) => {
	return (
		<div className={styles.container}>
			<h5 className={styles.title}>{title}</h5>
			<p>
				{roundString(value)} {symbol}
			</p>
		</div>
	);
};

export default HighlightCard;
