import { Camera } from '../../types/camera.types';
import { ClassNameValue } from '../../types/class-name.type';

type ProductImageProps = Pick<Camera, 'name' | 'previewImg' | 'previewImg2x' | 'previewImgWebp' | 'previewImgWebp2x'> & {
  className: ClassNameValue;
}
function ProductImage({ className, name, previewImg, previewImg2x, previewImgWebp, previewImgWebp2x }: ProductImageProps): JSX.Element {
  return (
    <div className={`${className}__img`}>
      <picture>
        <source type="image/webp" srcSet={`${previewImgWebp}, ${previewImgWebp2x} 2x`} />
        <img src={previewImg} srcSet={`${previewImg2x} 2x`} width="280" height="240" alt={name} />
      </picture>
    </div>
  );
}

export default ProductImage;

