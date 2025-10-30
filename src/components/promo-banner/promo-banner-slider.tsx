import { Pagination, Autoplay } from "swiper/modules";
import { Promo } from "./promo-banner.type";
import { useModal } from "../../store/hooks/useModal";
import { useSliderAutoplay } from "../../hooks/use-slider-autoplay";
import { useGetPromoQuery } from "../../store/api/api";

import SliderSwiper from "../slider-swiper/slider-swiper";
import PromoBanner from "./promo-banner";

function PromoBannerSlider(): JSX.Element | null {
  const { isOpen: isAutoplayStopped } = useModal();
  const { setSwiper } = useSliderAutoplay(isAutoplayStopped);

  const { data: promoCards, isError } = useGetPromoQuery();

  if (!promoCards || promoCards.length === 0 || isError) {
    return null;
  }

  return (
    <SliderSwiper<Promo>
      className="banner-slider"
      modules={[Pagination, Autoplay]}
      sliderParams={{
        slidesPerView: 1,
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        pagination: {
          clickable: true,
        },
        onSwiper: setSwiper,
      }}
      slides={promoCards}
      renderSlide={(item: Promo) => <PromoBanner id={item.id} name={item.name} previewImg={item.previewImg} previewImg2x={item.previewImg2x} previewImgWebp={item.previewImgWebp} previewImgWebp2x={item.previewImgWebp2x} />}
    />
  )
}

export default PromoBannerSlider;
