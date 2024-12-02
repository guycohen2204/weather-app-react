import React, { useContext } from 'react';
import { AppContext } from '../../context/AppProvider';

import { MdOutlineLightMode } from 'react-icons/md';
import { MdDarkMode } from 'react-icons/md';

import styles from './ToggleThemeMode.module.css';

const ToggleThemeMode = () => {
	const context = useContext(AppContext);
	if (!context) {
		throw new Error('AppContext must be used in an AppProvider');
	}

	const { theme, setTheme } = context;

	const handleClick = () => {
		setTheme(theme === 'light' ? 'dark' : 'light');
	};

	return (
		<button className={styles.container} onClick={handleClick}>
			{theme === 'light' ? <MdDarkMode size={20} /> : <MdOutlineLightMode size={20} color='white' />}
		</button>
	);
};

export default ToggleThemeMode;
