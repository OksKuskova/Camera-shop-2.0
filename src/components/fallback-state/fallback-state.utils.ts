import { AppRoute } from "../../constants/router";
import { AppError } from "../../types/app-error.type";
import { Camera } from "../../types/camera.types";
import { FallbackStateProps } from "./fallback-state";
import { FallbackSource, Resolution } from "./fallback-state.type";

export const sourceToFallbackProps = (source: FallbackSource): FallbackStateProps => {
  const refetchProps = source.refetch ? { actionLabel: 'Повторить', onAction: source.refetch } : {};

  if (source.type === 'empty') {
    return {
      title: 'Нет данных',
      message: 'Здесь пока ничего нет.',
      ...refetchProps,
    }
  }

  const error = source.error;

  switch (error.kind) {
    case 'network':
      return {
        title: 'Нет подключения',
        message: 'Проверьте интернет и попробуйте снова.',
        ...refetchProps,
      };

    case 'notFound':
      return {
        title: 'Товар не найден',
        message: 'Мы не смогли найти запрашиваемый товар.',
        actionLabel: 'Вернуться на главную',
        actionHref: AppRoute.Root,
      };

    case 'validation':
      return {
        title: 'Ошибка в данных',
        message: 'Исправьте ошибки и попробуйте снова.',
      };

    case 'client':
      return {
        title: 'Ошибка',
        message: 'Что-то пошло не так.',
        ...refetchProps,
      };

    case 'server':
      return {
        title: 'Сервер недоступен',
        message: 'На сервере произошла ошибка. Попробуйте позже.',
        ...refetchProps,
      };

    default:
      return {
        title: 'Что-то пошло не так',
        message: 'Попробуйте повторить.',
        ...refetchProps,
      };
  }
}

export const resolveCatalogData = (data: Camera[] | undefined, isError: boolean, error: unknown, refetch: () => void): Resolution => {
  if (isError) {
    return { type: "fallback", source: { type: 'error', error: error as AppError, refetch } };
  }

  if (!data || data.length === 0) {
    return { type: "fallback", source: { type: 'empty', refetch } };
  }

  return { type: 'success', source: data };
}
