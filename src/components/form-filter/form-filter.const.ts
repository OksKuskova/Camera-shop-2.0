export const CAMEL_TO_KEBAB = {
  regex: /([a-z])([A-Z])/g,
  replace: '$1-$2'
} as const;

export const FilterTitle = {
  Category: 'Категория',
  Type: 'Тип камеры',
  Level: 'Уровень',
} as const;


