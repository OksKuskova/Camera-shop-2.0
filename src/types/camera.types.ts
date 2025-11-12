import { CameraCategory, CameraLevel, CameraType } from '../constants/camera.const';

export type CameraTypeKey = keyof typeof CameraType;
export type CameraTypeValue = typeof CameraType[CameraTypeKey];

export type CameraCategoryKey = keyof typeof CameraCategory;
export type CameraCategoryValue = typeof CameraCategory[CameraCategoryKey];

export type CameraLevelKey = keyof typeof CameraLevel;
export type CameraLevelValue = typeof CameraLevel[CameraLevelKey];

export type Camera = {
  id: number;
  name: string;
  vendorCode: string;
  type: CameraTypeValue;
  category: CameraCategoryValue;
  description: string;
  level: CameraLevelValue;
  price: number;
  rating: number;
  reviewCount: number;
  previewImg: string;
  previewImg2x: string;
  previewImgWebp: string;
  previewImgWebp2x: string;
};


