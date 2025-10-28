import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Camera } from '../../types/camera.types';
import { ApiRoute, ApiConfig } from './api.const';

const { PATH_NAME, BASE_URL } = ApiConfig;

export const api = createApi({
  reducerPath: PATH_NAME,
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (build) => ({
    getCameras: build.query<Camera[], void>({
      query: () => ApiRoute.Cameras,
    }),
  }),
})

export const { useGetCamerasQuery } = api;
