import type { Swiper as SwiperClass } from 'swiper';

import { useCallback, useEffect, useRef, useState } from "react";
import { Camera } from "../../types/camera.types";
import { getProductSimilar } from "../../mocks/product-similar";

import ProductCard from "../product-card/product-card";
import SliderSwiper from "../slider-swiper/slider-swiper";

function ProductSimilar(): JSX.Element {
  const swiperRef = useRef<SwiperClass | null>(null);

  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  const [canPrevSwipe, setCanPrevSwipe] = useState(true);
  const [canNextSwipe, setCanNextSwipe] = useState(true);

  const productSimilar = getProductSimilar();

  const updateNavState = useCallback((swiper: SwiperClass) => {
    setCanPrevSwipe(!swiper.isBeginning);
    setCanNextSwipe(!swiper.isEnd);
  }, []);

  const handlePrev = useCallback(() => swiperRef.current?.slidePrev(), []);
  const handleNext = useCallback(() => swiperRef.current?.slideNext(), []);

  useEffect(() => {
    const prev = prevRef.current;
    const next = nextRef.current;

    if (!prev || !next) return;

    prev.addEventListener('mousedown', handlePrev);
    next.addEventListener('mousedown', handleNext);

    return () => {
      prev.removeEventListener('mousedown', handlePrev);
      next.removeEventListener('mousedown', handleNext);
    };
  }, [handlePrev, handleNext]);

  return (
    <section className="product-similar">
      <div className="container">
        <h2 className="title title--h3">Похожие товары</h2>
        <div className="product-similar__slider">

          <SliderSwiper<Camera>
            sliderParams={{
              slidesPerView: 3,
              spaceBetween: 32,
              slidesOffsetBefore: -16,
              preventClicks: false,
              preventClicksPropagation: false,
              onSwiper: (swiper: SwiperClass) => {
                swiperRef.current = swiper;
                updateNavState(swiper);
              },
              onSlideChange: (swiper: SwiperClass) => updateNavState(swiper),
            }}
            slides={productSimilar}
            renderSlide={(item: Camera) => <ProductCard product={item} />}
          />

          <button
            className="slider-controls slider-controls--prev"
            type="button"
            aria-label="Предыдущий слайд"
            disabled={!canPrevSwipe}
            ref={prevRef}
          >
            <svg width="7" height="12" aria-hidden="true">
              <use xlinkHref="#icon-arrow"></use>
            </svg>
          </button>
          <button
            className="slider-controls slider-controls--next"
            type="button"
            aria-label="Следующий слайд"
            disabled={!canNextSwipe}
            ref={nextRef}>
            <svg width="7" height="12" aria-hidden="true">
              <use xlinkHref="#icon-arrow"></use>
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

export default ProductSimilar;
