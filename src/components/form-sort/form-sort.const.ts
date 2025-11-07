export const SortType = {
  Price: 'price',
  Rating: 'rating',
} as const;

export const SortOrder = {
  Up: 'up',
  Down: 'down',
} as const;

export const SORT_LABELS = {
  [SortType.Price]: 'по цене',
  [SortType.Rating]: 'по популярности',
  [SortOrder.Up]: 'по возрастанию',
  [SortOrder.Down]: 'по убыванию',
} as const;

export const SORT_TYPE_DEFAULT = SortType.Price;
export const SORT_ORDER_DEFAULT = SortOrder.Up;
