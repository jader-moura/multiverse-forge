import React, { useEffect } from 'react';
import { Button, Grid } from '@mui/material';
import { Container } from '@mui/system';
import { Wrapper } from './styles';
import Logo from '../../shared/components/Logo';

const Header: React.FC = () => {
	useEffect(() => {
		const fetchData = async () => {
			const result = await fetch('http://localhost:1337/api/characters').then(
				async (data) => await data.json()
			);
			console.log(result);
		};

		void fetchData();
	}, []);

	return (
		<Wrapper>
			<Container>
				<Grid
					container
					justifyContent="space-between"
					alignItems="center"
					py={1}
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
