import { Camera } from '../../types/camera.types';
import { ClassNameWithImageSize } from '../../types/class-name.type';
import { getImageSize } from './product-image.utils';

type ProductImageProps = Pick<Camera, 'name' | 'previewImg' | 'previewImg2x' | 'previewImgWebp' | 'previewImgWebp2x'> & {
  className: ClassNameWithImageSize;
}
function ProductImage({ className, name, previewImg, previewImg2x, previewImgWebp, previewImgWebp2x }: ProductImageProps): JSX.Element {
  const { width, height } = getImageSize(className);

  return (
    <picture>
      <source type="image/webp" srcSet={`/${previewImgWebp}, /${previewImgWebp2x} 2x`} />
      <img src={`/${previewImg}`} srcSet={`/${previewImg2x} 2x`} width={width} height={height} alt={name} />
    </picture>
  );
}

export default ProductImage;

