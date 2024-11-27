import React from 'react'

import styles from './TodaysWeather.module.css'

const TodaysWeather = () => {
  return (
    <div className={styles.container}>
        <img src="cdn.weatherapi.com/weather/64x64/day/116.png" alt="" />
        <p>degs</p>
        <p>Today, Time</p>
    </div>
  )
}

export default TodaysWeather