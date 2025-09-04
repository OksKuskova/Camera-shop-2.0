import { ClassNameWithImageSize } from "../../types/class-name.type";
import { ImageSizeByClassName } from "./product-image.const";

export const getImageSize = (className: ClassNameWithImageSize) => ImageSizeByClassName[className];
