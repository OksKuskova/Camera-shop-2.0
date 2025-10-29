import { createApi } from '@reduxjs/toolkit/query/react';
import { Camera } from '../../types/camera.types';
import { ApiRoute, ApiConfig } from './api.const';
import { baseQueryWithErrorHandling } from './api.base-query-with-error-handling';

const { PATH_NAME } = ApiConfig;

export const api = createApi({
  reducerPath: PATH_NAME,
  baseQuery: baseQueryWithErrorHandling,
  endpoints: (build) => ({
    getCameras: build.query<Camera[], void>({
      query: () => ApiRoute.Cameras,
    }),
    getCameraById: build.query<Camera, number>({
      query: (id) => `${ApiRoute.Cameras}/${id}`
    })
  }),

})

export const { useGetCamerasQuery, useGetCameraByIdQuery } = api;
