import React from 'react';
import ReactDOM from 'react-dom/client';
// import { BrowserRouter } from 'react-router-dom';

import App from './app/App';
// import AuthContextProvider from './contexts/AuthContext';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
// 	<AuthContextProvider>
// 		<App />
// 	</AuthContextProvider>
// );
root.render(
	// <BrowserRouter>
	<App />
	// </BrowserRouter>
);
