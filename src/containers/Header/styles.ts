import styled from 'styled-components';

export const Wrapper = styled.div`
	background-color: ${({ theme }) => theme.mainDark};
	border-bottom: 1px solid ${({ theme }) => theme.lightGrey};
`;
