import { Link } from "react-router-dom";
import { ClassName } from "../../constants/class-name";
import { Promo } from "./promo-banner.type"
import { getRoute } from "../../utils/utils.router";

import ProductImage from "../product-image/product-image"

type PromoBannerProps = Promo;

function PromoBanner({ id, name, previewImg, previewImg2x, previewImgWebp, previewImgWebp2x }: PromoBannerProps): JSX.Element {

  return (
    <div className="banner">
      <ProductImage className={ClassName.PromoBanner} name={name} previewImg={previewImg} previewImg2x={previewImg2x} previewImgWebp={previewImgWebp} previewImgWebp2x={previewImgWebp2x} />
      <p className="banner__info">
        <span className="banner__message">Новинка!</span>
        <span className="title title--h1">{name}</span>
        <span className="banner__text">Профессиональная камера от известного производителя</span>
        <Link className="btn" to={getRoute(id)}>Подробнее</Link>
      </p>
    </div>
  )
}

export default PromoBanner;
