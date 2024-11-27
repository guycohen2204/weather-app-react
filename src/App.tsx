import React, { useState } from 'react';

import styles from './App.module.css';
import SideBar from './components/SideBar/SideBar';
import AppContent from './components/AppContent/AppContent';
import { createContext } from 'react';

type Theme = 'light' | 'dark';

export const Context = createContext({ theme: 'light', city: 'London' });

function App() {
	const [theme, setTheme] = useState<Theme>('light');
	const [city, setCity] = useState<string>('London');

	return (
		<Context.Provider value={{ theme, city }}>
			<div className={styles.App}>
				<SideBar />
				<AppContent />
			</div>
		</Context.Provider>
	);
}

export default App;
