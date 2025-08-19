import { ClassName } from "../../constants/class-name";

const ImageSize = {
  CARD: { width: 280, height: 240 },
  PRODUCT: { width: 560, height: 480 },
} as const;

export const ImageSizeByClassName = {
  [ClassName.ProductCard]: ImageSize.CARD,
  [ClassName.Product]: ImageSize.PRODUCT,
} as const;
