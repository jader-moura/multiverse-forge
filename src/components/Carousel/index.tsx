import React from 'react';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { CarouselItem, CarouselItemImage, CarouselItemTitle } from './styles';
import { mockData } from './mock';

const Carousel: React.FC = () => {
	return (
		<Swiper
			slidesPerView={6}
			spaceBetween={30}
			navigation={true}
			modules={[Navigation]}
		>
			{mockData.map(({ id, title, imageUrl }) => (
				<SwiperSlide key={id}>
					<CarouselItem>
						<CarouselItemImage src={imageUrl} />
						<CarouselItemTitle>{title}</CarouselItemTitle>
					</CarouselItem>
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default Carousel;
