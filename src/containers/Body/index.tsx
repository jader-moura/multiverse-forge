import React from 'react';
import { Container } from '@mui/system';
import { Wrapper } from './styles';

interface BodyProps {
	children: any;
}

const Body: React.FC<BodyProps> = ({ children }) => {
	return (
		<Wrapper>
			<Container>{children}</Container>
		</Wrapper>
	);
};

export default Body;
