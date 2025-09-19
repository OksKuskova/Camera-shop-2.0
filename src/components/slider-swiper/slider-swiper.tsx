import 'swiper/css/bundle';
import './slider-swiper.style/product-similar-slider.style.css';

import { ReactNode } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { SwiperProps } from 'swiper/react';
import type { SwiperModule } from 'swiper/types';

type SliderSwiperProps<T> = {
  sliderParams?: SwiperProps,
  modules?: SwiperModule[],
  slides: T[];
  renderSlide: (item: T, index: number) => ReactNode;
}

function SliderSwiper<T>({ sliderParams = {}, modules = [], slides, renderSlide }: SliderSwiperProps<T>): JSX.Element {

  return (
    < Swiper modules={modules} {...sliderParams} >
      {slides.map((item: T, index: number) => <SwiperSlide key={index}>{renderSlide(item, index)} </SwiperSlide>)}
    </ Swiper >
  )
}
export default SliderSwiper;
