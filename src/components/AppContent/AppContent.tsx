import React from 'react'

import styles from './AppContainer.module.css';
import WeeklyForecast from '../WeeklyForecast/WeeklyForecast';
import TodaysHighlights from '../TodaysHighlights/TodaysHighlights';

const AppContent = () => {
  return (
    <div className={styles.container}>
        <WeeklyForecast />
        <TodaysHighlights />
    </div>
  )
}

export default AppContent