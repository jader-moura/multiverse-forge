import styled from 'styled-components';

export const Wrapper = styled.div`
	border-top: solid 10px #888888;
	background-color: ${({ theme }) => theme.mainDark};
	flex: 1;
	height: 100px;
`;
