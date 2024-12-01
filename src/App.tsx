import React from 'react';

import styles from './App.module.css';
import SideBar from './components/SideBar/SideBar';
import AppContent from './components/AppContent/AppContent';
import AppProvider from './context/AppProvider';

function App() {
	return (
		<AppProvider>
			<div className={styles.App}>
				<SideBar />
				<AppContent />
			</div>
		</AppProvider>
	);
}

export default App;
