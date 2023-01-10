import styled from 'styled-components';
import { Box } from '@mui/material';
import IconButton from '@mui/material/IconButton';

export const ModalContainer = styled(Box)`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	min-width: 45vw;
	background: #232323;
	box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.1), 0px 2px 10px rgba(0, 0, 0, 0.07),
		0px 10px 20px rgba(0, 0, 0, 0.05), 0px 10px 50px rgba(0, 0, 0, 0.05);
	padding: 60px;
	border: none;
	max-height: 90vh;
	overflow-y: auto;
	display: flex;
	flex-direction: column;
`;

export const ModalTitle = styled.h2`
	letter-spacing: 1px;
	text-transform: uppercase;
	color: #ffffff;
	font-weight: 300;
	font-size: 40px;
	line-height: 49px;
`;

export const CloseButton = styled(IconButton)`
	position: absolute !important;
	top: 1.5rem;
	right: 1.5rem;

	svg {
		color: #ffffff;
	}
`;
