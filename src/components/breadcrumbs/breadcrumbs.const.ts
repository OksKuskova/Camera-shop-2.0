import { AppRoute } from "../../constants/router";

export const MULTIPLE_SLASHES_REGEX = /\/{2,}/g;

export const BREADCRUMB_DEFAULT = {
  route: AppRoute.Root,
  name: 'Главная',
};

export const breadcrumbsConfig = [
  { path: AppRoute.Root, breadcrumb: 'Каталог' },
  { path: AppRoute.Product, breadcrumb: (name?: string) => name ?? "Товар" },
  { path: AppRoute.Basket, breadcrumb: 'Корзина' },
];
