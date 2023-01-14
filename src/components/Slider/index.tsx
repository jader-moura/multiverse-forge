import React from 'react';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
	SliderContainer,
	// SliderImage,
	SliderContent,
	SliderContentName,
} from './styles';
import { mockData } from './mock';

const Slider: React.FC = () => {
	console.log(process.env.PUBLIC_URL);
	return (
		<Swiper navigation={true} modules={[Navigation]} className="mySwiper">
			{mockData.map(({ id, name, photo }: any) => (
				<SwiperSlide key={id}>
					<SliderContainer imgUrl={photo.url}>
						<SliderContent>
							<SliderContentName>{name}</SliderContentName>
						</SliderContent>
					</SliderContainer>
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default Slider;
