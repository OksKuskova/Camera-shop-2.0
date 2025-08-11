export const CameraType = {
  collection: 'Коллекционная',
  snapshot: 'Моментальная',
  digital: 'Цифровая',
  film: 'Плёночная',
} as const;

export const CameraCategory = {
  videocamera: 'Видеокамера',
  photocamera: 'Фотоаппарат',
} as const;

export const CameraLevel = {
  zero: 'Нулевой',
  'non-professional': 'Любительский',
  professional: 'Профессиональный',
} as const;
