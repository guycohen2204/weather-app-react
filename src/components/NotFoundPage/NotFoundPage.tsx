import React from 'react';
import { Link } from 'react-router-dom';

import styles from './NotFoundPage.module.css';

const NotFoundPage = () => {
	return (
		<div className={styles.container}>
			<h1>404 Page Not Found</h1>
			<h2>GO AWAY!</h2>
			<Link to='/' style={{ textDecoration: 'none' }}>
				<button className={styles.button}>Click Here</button>
			</Link>
		</div>
	);
};

export default NotFoundPage;
