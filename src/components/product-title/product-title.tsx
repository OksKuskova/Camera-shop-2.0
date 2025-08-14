import { Camera } from '../../types/camera.types';
import { ClassNameValue } from '../../types/class-name.type';

type ProductTitleProps = Pick<Camera, 'name'> & {
  className: ClassNameValue;
}

function ProductTitle({ className, name }: ProductTitleProps): JSX.Element {
  return <p className={`${className}__title`}>{name}</p>;
}

export default ProductTitle;
