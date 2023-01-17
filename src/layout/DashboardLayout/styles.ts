import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 100vh;
	max-width: 100vw;
	overflow-x: hidden;

	/* Styles that will be shared between differents components */
	.swiper-button-prev,
	.swiper-rtl .swiper-button-next {
		left: 4px;
		z-index: 2;
	}
	.swiper-button-next,
	.swiper-rtl .swiper-button-prev {
		right: 4px;
	}

	.swiper-button-next,
	.swiper-button-prev {
		background-color: ${({ theme }) => theme.mainDark};
		color: ${({ theme }) => theme.mainLight};
		width: 0.75rem;
		height: 0.75rem;
		padding: 0.35rem;
		border-radius: 50%;
	}
	.swiper-button-next:after,
	.swiper-button-prev:after {
		font-size: 12px;
	}
`;
