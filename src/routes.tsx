import { Suspense, lazy } from 'react';
import { Navigate } from 'react-router';
import AuthGuard from './components/AuthGuard';
import GuestGuard from './components/GuestGuard';
import DashboardLayout from './layout/DashboardLayout';
import LoadingScreen from './components/LoadingScreen';

const Loadable = (Component: any) => (props: any) =>
	(
		<Suspense fallback={<LoadingScreen />}>
			<Component {...props} />
		</Suspense>
	);

// Authentication pages
const Login = Loadable(lazy(() => import('./pages/Login')));

// Dashboard pages
const Home = Loadable(lazy(() => import('./pages/Home')));

// Error pages
const NotFound = Loadable(lazy(() => import('./pages/NotFound')));

const routes = [
	{
		path: 'authentication',
		children: [
			{
				path: 'login',
				element: (
					<GuestGuard>
						<Login />
					</GuestGuard>
				),
			},
		],
	},
	{
		path: '*',
		element: (
			<AuthGuard>
				<DashboardLayout />
			</AuthGuard>
		),
		children: [
			{
				path: '/',
				children: [
					{
						path: '/',
						element: <Navigate to="/home" replace />,
					},
					{
						path: '/home',
						element: <Home />,
					},
				],
			},
			{
				path: '401',
				element: <NotFound />,
			},
			{
				path: '404',
				element: <NotFound />,
			},
			{
				path: '500',
				element: <NotFound />,
			},
			{
				path: '*',
				element: <NotFound />,
			},
		],
	},
];

export default routes;
