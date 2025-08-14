import { ClassNameValue } from '../../types/class-name.type';
import { Camera } from '../../types/camera.types';
import { DEFAULT_LOCALE, PRICE_FORMAT_OPTIONS } from './product-price.config';

type ProductPriceProps = Pick<Camera, 'price'> & {
  className: ClassNameValue;
  locale?: string;
  currency?: string;
}

function ProductPrice({ className, price, locale = DEFAULT_LOCALE, currency = PRICE_FORMAT_OPTIONS.currency as string }: ProductPriceProps): JSX.Element {
  return (
    <p className={`${className}__price`}>
      <span className="visually-hidden">Цена:</span>{price.toLocaleString(locale, {...PRICE_FORMAT_OPTIONS, currency})}
    </p>
  );
}

export default ProductPrice;
