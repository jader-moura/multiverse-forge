import React from 'react';
import Body from '../../containers/Body';
import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import ErrorBoundary from '../../containers/ErrorBoundary';
import Footer from '../../containers/Footer';
import Header from '../../containers/Header';
import { Wrapper } from './styles';
import LoadingScreen from '../../components/LoadingScreen';
import GuestGuard from '../../components/GuestGuard';
import AuthGuard from '../../components/AuthGuard';

export const routePath = {
	home: '/',
	new: '/new',
	login: '/login',
	register: '/register',
	single: '/single/:singleId',
	invalid: '*',
};

const Loadable = (Component: any) => (props: any) =>
	(
		<Suspense fallback={<LoadingScreen />}>
			<Component {...props} />
		</Suspense>
	);

// Authentication pages
const Login = Loadable(lazy(() => import('../../pages/Login')));
const Register = Loadable(lazy(() => import('../../pages/Register')));

// Dashboard pages
const Home = Loadable(lazy(() => import('../../pages/Home')));
const New = Loadable(lazy(() => import('../../pages/New')));
const Single = Loadable(lazy(() => import('../../pages/Single')));

// Error pages
const NotFound = Loadable(lazy(() => import('../../pages/NotFound')));

const DashboardLayout: React.FC = () => {
	return (
		<ErrorBoundary>
			<Wrapper>
				<Header />
				<Body>
					<Routes>
						<Route
							path={routePath.login}
							element={
								<GuestGuard>
									<Login />
								</GuestGuard>
							}
						/>
						<Route path={routePath.register} element={<Register />} />
						<Route path={routePath.home} element={<Home />} />
						<Route path={routePath.single} element={<Single />} />
						<Route
							path={routePath.new}
							element={
								<AuthGuard>
									<New />
								</AuthGuard>
							}
						/>

						<Route path={routePath.invalid} element={<NotFound />} />
					</Routes>
				</Body>
				<Footer />
			</Wrapper>
		</ErrorBoundary>
	);
};

export default DashboardLayout;
