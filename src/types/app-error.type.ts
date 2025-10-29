import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";

export type AppErrorKind = 'network' | 'client' | 'validation' | 'notFound' | 'server' | 'unknown';

export type AppError = {
  kind: AppErrorKind;
} & (
    | FetchBaseQueryError
    | SerializedError
  );
