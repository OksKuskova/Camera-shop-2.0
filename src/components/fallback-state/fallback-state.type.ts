import { AppError } from "../../types/app-error.type";

export type FallbackSource = { type: 'error', error: AppError, refetch?: () => void } | { type: 'empty', refetch?: () => void };
