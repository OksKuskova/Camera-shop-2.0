import { useEffect, useRef } from 'react';
import type { Swiper as SwiperClass } from 'swiper';

export function useSliderAutoplay(isAutoplayStopped: boolean) {
  const swiperRef = useRef<SwiperClass | null>(null);

  const setSwiper = (swiper: SwiperClass) => swiperRef.current = swiper;

  useEffect(() => {
    const slider = swiperRef.current;

    if (!slider) return;

    if (isAutoplayStopped) {
      slider.autoplay.stop();
    } else {
      slider.autoplay.start();
    }
  }, [isAutoplayStopped]);

  return { setSwiper };
};
