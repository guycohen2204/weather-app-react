import React, { useContext } from 'react';

import styles from './App.module.css';
import SideBar from './components/SideBar/SideBar';
import AppContent from './components/AppContent/AppContent';
import { AppContext } from './context/AppProvider';

function App() {
	const context = useContext(AppContext);
	if (!context) {
		throw new Error('no context');
	}

	const { theme } = context;

	return (
		<div
			className={`${styles.App}  ${theme === 'light' ? 'light' : 'dark'}`}
		>
			<SideBar />
			<AppContent />
		</div>
	);
}

export default App;
