import React from 'react';

import styles from './HighlightCard.module.css';

type Props = {
    title: string;
    value?: string;
    symbol?: string;
}

const HighlightCard = ({ title, value, symbol }: Props) => {
    return (
        <div className={styles.container}>
            <h5 className={styles.title}>{title}</h5>
            <p>{value ?? 'N/A'} {symbol}</p>
        </div>
    );
};

export default HighlightCard;
