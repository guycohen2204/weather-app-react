import React from 'react';

import styles from './CityButton.module.css';

type Props = {
    title: string;
}

const CityButton = ({ title }: Props) => {
  return (
    <button className={styles.buttonContainer}>
        {title}
    </button>
  )
}

export default CityButton