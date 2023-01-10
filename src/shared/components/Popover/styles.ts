import styled from 'styled-components';
import { Popover } from '@mui/material';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
`;

export const PopoverController = styled.button`
	display: flex;
	justify-content: flex-end;
	cursor: pointer;
	border: none;
	background-color: transparent;

	svg {
		color: ${({ theme }) => theme.mainLight};
	}
`;

export const MaterialPopover = styled(Popover)`
	.MuiPaper-root {
		background: rgba(35, 35, 35, 0.918051);
		border: none;
		box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.1), 0px 2px 10px rgba(0, 0, 0, 0.1),
			0px 10px 20px rgba(0, 0, 0, 0.1), 0px 10px 50px rgba(0, 0, 0, 0.1);
		backdrop-filter: blur(13.5914px);
		border-radius: 4px;
		min-width: 190px;
	}
`;
