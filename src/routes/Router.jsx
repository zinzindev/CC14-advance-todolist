// import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { publicRoutes } from './publicRoutes';
import { privateRoutes } from './privateRoutes';

function Router({ isAuthenticate = false }) {
	let appRoutes = isAuthenticate ? privateRoutes : publicRoutes;

	// Ex: Array of Router Object
	// const mockedRoutes = [
	// 	{
	// 		path: '/',
	// 		element: <h1>Home</h1>,
	// 	},
	// 	{
	// 		path: '/profile',
	// 		element: <h1>profile</h1>,
	// 	},
	// 	{
	// 		path: '/profile/:id',
	// 		element: <h1>profile-friend</h1>,
	// 	},
	// 	{
	// 		path: '/about',
	// 		element: <h1>about</h1>,
	// 	},
	// 	{
	// 		path: '*',
	// 		element: <Navigate to='/' />,
	// 	},
	// ];
	// const router = createBrowserRouter(mockedRoutes);

	const router = createBrowserRouter(appRoutes);
	return <RouterProvider router={router} />;
}

export default Router;
