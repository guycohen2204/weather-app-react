import React from 'react';

import styles from './TodaysHighlights.module.css';
import HighlightCard from '../HighlightCard/HighlightCard';

const TodaysHighlights = () => {
    return (
        <div>
            <h3 style={{ paddingLeft: '10px' }}>Today's Highlights</h3>
            <div className={styles.gridContainer}>
                <HighlightCard />
                <HighlightCard />
                <HighlightCard />
                <HighlightCard />
                <HighlightCard />
                <HighlightCard />
            </div>
        </div>
    );
};

export default TodaysHighlights;
