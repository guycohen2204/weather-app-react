import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
	return (
        <div>
            <h1>404 Page Not Found</h1>
            <h2>GO AWAY!</h2>
            <Link to='/'>Click Here</Link>
        </div>
    ) 
};

export default NotFoundPage;
