import React from 'react';
import { Button, Grid } from '@mui/material';
import { Container } from '@mui/system';
import { Wrapper } from './styles';
import Logo from '../../shared/components/Logo';

const Header: React.FC = () => {
	return (
		<Wrapper>
			<Container>
				<Grid
					container
					justifyContent="space-between"
					alignItems="center"
					pt={2}
				>
					<Grid item>
						<Logo />
					</Grid>
					<Grid item>
						<Button>New character</Button>
					</Grid>
				</Grid>
			</Container>
		</Wrapper>
	);
};

export default Header;
