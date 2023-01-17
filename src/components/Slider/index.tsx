import React from 'react';
import { EffectFade, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
	SliderContainer,
	SliderContent,
	SliderContentName,
	PowersList,
	SliderText,
} from './styles';
import { mockData } from './mock';
import { Chip } from '@mui/material';
import 'swiper/css/effect-fade';

const Slider: React.FC = () => {
	console.log(process.env.PUBLIC_URL);
	return (
		<Swiper
			effect={'fade'}
			navigation={true}
			loop={true}
			modules={[EffectFade, Navigation]}
		>
			{mockData.map(({ id, name, photo, powers }: any) => (
				<SwiperSlide key={id}>
					<SliderContainer imgUrl={photo.url}>
						<SliderContent>
							<SliderContentName>{name}</SliderContentName>
							<PowersList>
								{powers.map((power: string) => (
									<Chip
										key={id + power}
										label={power}
										component="a"
										href="#basic-chip"
										clickable
									/>
								))}
							</PowersList>
							<SliderText>
								This mechanical fighter monster is powered by a water turbine
								that is located on his back
							</SliderText>
						</SliderContent>
					</SliderContainer>
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default Slider;
