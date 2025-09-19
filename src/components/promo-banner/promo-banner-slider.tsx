import { Pagination, Autoplay } from "swiper/modules";
import { Promo } from "./promo-banner.type";
import { getPromo } from "../../mocks/promo";

import SliderSwiper from "../slider-swiper/slider-swiper";
import PromoBanner from "./promo-banner";

function PromoBannerSlider(): JSX.Element {
  const promoCards = getPromo();

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
      }}
      slides={promoCards}
      renderSlide={(item: Promo) => <PromoBanner id={item.id} name={item.name} previewImg={item.previewImg} previewImg2x={item.previewImg2x} previewImgWebp={item.previewImgWebp} previewImgWebp2x={item.previewImgWebp2x} />}
    />
  )
}

export default PromoBannerSlider;
