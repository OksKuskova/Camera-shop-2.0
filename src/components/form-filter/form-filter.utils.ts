import { CameraCategory } from "../../constants/camera.const";
import { CameraCategoryValue, CameraTypeValue } from "../../types/camera.types";
import { CAMEL_TO_KEBAB, VIDEOCAMERA_DISABLED_TYPES } from "./form-filter.const";

export const toKebabCase = (data: string) => data.replace(CAMEL_TO_KEBAB.regex, CAMEL_TO_KEBAB.replace).toLowerCase();

export const isTypeDisabled = (type: CameraTypeValue, currentCategory: CameraCategoryValue | null) => (
  currentCategory === CameraCategory.Videocamera ? VIDEOCAMERA_DISABLED_TYPES.includes(type) : false
)

