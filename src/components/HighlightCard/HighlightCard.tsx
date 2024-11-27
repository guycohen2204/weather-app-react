import React from 'react';

import styles from './HighlightCard.module.css';

type Props = {
    title: string;
    value?: string;
}

const HighlightCard = ({ title, value }: Props) => {
    return (
        <div className={styles.container}>
            <h5 className={styles.title}>{title}</h5>
            <p>{value || 'N/A'}</p>
        </div>
    );
};

export default HighlightCard;
