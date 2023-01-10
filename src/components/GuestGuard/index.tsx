import React, { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../store/hooks';
import { selectUserAuthStatus } from '../../store/user';

interface GuestGuardProps {
	children: ReactNode;
}
const GuestGuard: React.FC<GuestGuardProps> = ({ children }) => {
	const userIsAuthenticated = useAppSelector(selectUserAuthStatus);

	if (userIsAuthenticated) {
		return <Navigate to="/dashboard/account" />;
	}

	return <>{children}</>;
};

export default GuestGuard;
