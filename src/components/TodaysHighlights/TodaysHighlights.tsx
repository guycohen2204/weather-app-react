import React, { useContext, useEffect, useState } from 'react';

import styles from './TodaysHighlights.module.css';
import HighlightCard from '../HighlightCard/HighlightCard';
import { Context } from '../../App';
import getCurrentWeatherByCity from '../../api/getCurrentWeatherByCity';

const TodaysHighlights = () => {

    const [data, setData] = useState();

    const context = useContext(Context);

    useEffect(() => {

        const fetchWeatherData = async () => {
            const weatherData = await getCurrentWeatherByCity(context.city);
            setData(weatherData.current);
        }

        try {
            fetchWeatherData()
        } catch (error) {
            console.error(error);
        }
    }, [context.city])

    return (
        <div>
            <h3 style={{ paddingLeft: '10px' }}>Today's Highlights</h3>
            <div className={styles.gridContainer}>
                <HighlightCard title="UV Index" value={10}/>
                <HighlightCard title="Wind Status" value={10} />
                <HighlightCard title="Sunrise & Sunset" value={10} />
                <HighlightCard title="Humidity" value={10} />
                <HighlightCard title="Visibility" value={10} />
                <HighlightCard title="Air Quality" value={10} />
            </div>
        </div>
    );
};

export default TodaysHighlights;
