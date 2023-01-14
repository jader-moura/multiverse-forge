import styled from 'styled-components';
// import backgroundUrl from '../../assets/background/background-1.png';

export const SliderContainer = styled.div<{ imgUrl: string }>`
	width: 100%;
	height: 450px;
	display: flex;
	flex-wrap: wrap;
	box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);

	background-image: url(${({ imgUrl }) => imgUrl});
	background-position: center -180px;
	background-repeat: no-repeat;
	background-size: cover;
`;

export const SliderContent = styled.div`
	-webkit-backdrop-filter: blur(15px);
	backdrop-filter: blur(15px);
	background-color: ${({ theme }) => theme.darkGrey}99;

	min-width: calc(35% - 4rem);
	height: 100%;
	padding: 2rem;

	display: flex;
	flex-direction: column;
`;

export const SliderContentName = styled.h3`
	font-family: 'Creepster', cursive;
	color: ${({ theme }) => theme.mainLight};
	font-weight: lighter;
	font-size: 32px;
`;
