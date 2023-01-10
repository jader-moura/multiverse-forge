import { ReactNode, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useAppSelector } from '../../store/hooks';
import { selectUserAuthStatus } from '../../store/user';
import Login from '../../pages/Login';

interface AuthGuardProps {
	children: ReactNode;
}
const AuthGuard: React.FC<AuthGuardProps> = ({ children }) => {
	const userIsAuthenticated = useAppSelector(selectUserAuthStatus);

	const location = useLocation();
	const [requestedLocation, setRequestedLocation] = useState('');

	if (!userIsAuthenticated) {
		if (location.pathname !== requestedLocation) {
			setRequestedLocation(location.pathname);
		}

		return <Login />;
	}

	// This is done so that in case the route changes by any chance through other
	// means between the moment of request and the render we navigate to the initially
	// requested route.
	if (requestedLocation && location.pathname !== requestedLocation) {
		setRequestedLocation('');
		return <Navigate to={requestedLocation} />;
	}

	return <>{children}</>;
};

AuthGuard.propTypes = {
	children: PropTypes.node,
};

export default AuthGuard;
