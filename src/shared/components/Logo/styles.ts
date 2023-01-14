import styled from 'styled-components';

export const ImageContainer = styled.img<{ width?: number }>`
	width: ${({ width }) => (width ? `${width}px` : '72px')};
	cursor: pointer;
`;
