import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';
import { ToastContainer } from 'react-toastify';
import AppProvider from './context/AppProvider';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <NotFoundPage />,
	},
]);

root.render(
	<React.StrictMode>
		<AppProvider>
			<RouterProvider router={router} />
			<ToastContainer autoClose={3000} />
		</AppProvider>
	</React.StrictMode>
);
