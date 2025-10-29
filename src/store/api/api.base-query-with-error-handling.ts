import { FetchArgs, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { AppError, AppErrorKind } from "../../types/app-error.type";
import { ApiConfig } from "./api.const";
import { StatusCodes } from "http-status-codes";
import { BaseQueryFn } from "@reduxjs/toolkit/dist/query";

const { BASE_URL } = ApiConfig;
const { BAD_REQUEST, NOT_FOUND, INTERNAL_SERVER_ERROR } = StatusCodes;

const rawBaseQuery = fetchBaseQuery({ baseUrl: BASE_URL });

export const baseQueryWithErrorHandling: BaseQueryFn<string | FetchArgs, unknown, AppError> = async (args, api, extraOptions) => {
  const result = await rawBaseQuery(args, api, extraOptions);

  if (!result.error) {
    return result;
  }

  const baseError = result.error;
  let kind: AppErrorKind = 'unknown';

  if ('status' in baseError) {
    const { status } = baseError;

    if (status === 'FETCH_ERROR' || status === 'PARSING_ERROR' || status === 'TIMEOUT_ERROR') {
      kind = 'network';
    } else if (typeof status === 'number') {
      if (status === BAD_REQUEST) kind = 'validation';
      else if (status === NOT_FOUND) kind = 'notFound';
      else if (status === INTERNAL_SERVER_ERROR) kind = 'server';
      else if (status >= BAD_REQUEST && status < INTERNAL_SERVER_ERROR) kind = 'client';
    }
  } else {
    kind = 'network';
  }

  return {
    error: {
      ...result.error,
      kind,
    } as AppError
  }
}
