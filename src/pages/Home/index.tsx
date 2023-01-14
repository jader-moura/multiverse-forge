import { Box, Tab, Tabs } from '@mui/material';
import React from 'react';
import Slider from '../../components/Slider';

import { Wrapper } from './styles';

const Home: React.FC = () => {
	const [value, setValue] = React.useState(0);

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};

	return (
		<Wrapper>
			<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
				<Tabs value={value} onChange={handleChange}>
					<Tab label="Human" />
					<Tab label="Robot" />
					<Tab label="Zombie" />
					<Tab label="Demon" />
				</Tabs>
			</Box>
			<Slider />
		</Wrapper>
	);
};

export default Home;
