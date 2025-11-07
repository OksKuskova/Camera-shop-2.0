import { AppError } from "../../types/app-error.type";
import { Camera } from "../../types/camera.types";

export type FallbackSource = { type: 'error', error: AppError, refetch?: () => void } | { type: 'empty', refetch?: () => void };

export type Resolution = { type: 'fallback', source: FallbackSource } | { type: 'success', products: Camera[] };
