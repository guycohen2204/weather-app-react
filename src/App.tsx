import React from 'react';

import styles from './App.module.css';
import SideBar from './components/SideBar/SideBar';
import AppContent from './components/AppContent/AppContent';

function App() {
    return (
        <div className={styles.App}>
            <SideBar />
            <AppContent />
        </div>
    );
}

export default App;
