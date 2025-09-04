import { ClassName } from "../../constants/class-name";
import { ClassNameWithImageSize } from "../../types/class-name.type";

const ImageSize = {
  CARD: { width: 280, height: 240 },
  PRODUCT: { width: 560, height: 480 },
  BANNER: { width: 1280, height: 280 },
} as const;

export const ImageSizeByClassName: Record<ClassNameWithImageSize, typeof ImageSize[keyof typeof ImageSize]> = {
  [ClassName.ProductCard]: ImageSize.CARD,
  [ClassName.Product]: ImageSize.PRODUCT,
  [ClassName.PromoBanner]: ImageSize.BANNER,
};
