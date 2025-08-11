import { CameraCategory, CameraLevel, CameraType } from '../constants/camera.const';

type CameraTypeKey = keyof typeof CameraType;
type CameraTypeValue = typeof CameraType[CameraTypeKey];

type CameraCategoryKey = keyof typeof CameraCategory;
type CameraCategoryValue = typeof CameraCategory[CameraCategoryKey];

type CameraLevelKey = keyof typeof CameraLevel;
type CameraLevelValue = typeof CameraLevel[CameraLevelKey];

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


