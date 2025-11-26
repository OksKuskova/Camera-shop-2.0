import { CameraType } from "../../constants/camera.const";
import { CameraTypeValue } from "../../types/camera.types";

export const CAMEL_TO_KEBAB = {
  regex: /([a-z])([A-Z])/g,
  replace: '$1-$2'
} as const;

export const FilterTitle = {
  Category: 'Категория',
  Type: 'Тип камеры',
  Level: 'Уровень',
  Price: 'Цена, ₽',
} as const;

export const VIDEOCAMERA_DISABLED_TYPES: CameraTypeValue[] = [CameraType.Snapshot, CameraType.Film];

export const PRICE_FIELDS = {
  min: {
    name: 'min',
    placeholder: 'от',
  },
  max: {
    name: 'max',
    placeholder: 'до',
  }
} as const;

