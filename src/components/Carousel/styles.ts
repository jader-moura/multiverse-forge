import styled from 'styled-components';

export const CarouselItem = styled.div`
	display: flex;
	flex-direction: column;
	cursor: pointer;
`;

export const CarouselItemImage = styled.img`
	box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
	border-radius: 4px;
`;

export const CarouselItemTitle = styled.h4`
	color: ${({ theme }) => theme.mainLight};
`;
