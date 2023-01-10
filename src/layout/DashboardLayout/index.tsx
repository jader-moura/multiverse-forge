import React from 'react';
import Body from '../../containers/Body';
import ErrorBoundary from '../../containers/ErrorBoundary';
import Footer from '../../containers/Footer';
import Header from '../../containers/Header';
import { Wrapper } from './styles';
import { Outlet } from 'react-router-dom';

const DashboardLayout: React.FC = () => {
	return (
		<ErrorBoundary>
			<Wrapper>
				<Header />
				<Body>
					<Outlet />
				</Body>
				<Footer />
			</Wrapper>
		</ErrorBoundary>
	);
};

export default DashboardLayout;
