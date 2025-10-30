import { createApi } from '@reduxjs/toolkit/query/react';
import { Camera } from '../../types/camera.types';
import { ApiRoute, ApiConfig } from './api.const';
import { baseQueryWithErrorHandling } from './api.base-query-with-error-handling';

const { PATH_NAME } = ApiConfig;
const { Cameras, Similar } = ApiRoute;

export const api = createApi({
  reducerPath: PATH_NAME,
  baseQuery: baseQueryWithErrorHandling,
  endpoints: (build) => ({
    getCameras: build.query<Camera[], void>({
      query: () => Cameras,
    }),
    getCameraById: build.query<Camera, number>({
      query: (id) => `${Cameras}/${id}`
    }),
    getSimilarProducts: build.query<Camera[], number>({
      query: (id) => `${Cameras}/${id}${Similar}`
    }),
  }),

})

export const { useGetCamerasQuery, useGetCameraByIdQuery, useGetSimilarProductsQuery } = api;
