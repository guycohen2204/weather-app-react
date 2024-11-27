import React from 'react';

import styles from './HighlightCard.module.css';

type Props = {
    title: string;
    value: number;
}

const HighlightCard = ({ title, value }: Props) => {
    return (
        <div className={styles.container}>
            <h5 className={styles.title}>{title}</h5>
            <p>{value}</p>
        </div>
    );
};

export default HighlightCard;
