import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CameraCategoryValue, CameraTypeValue, CameraLevelValue } from "../../../types/camera.types";
import { SliceName } from "../slices.const";
import { State } from "../../store.type";
import { VIDEOCAMERA_DISABLED_TYPES } from "../../../components/form-filter/form-filter.const";

type FilterState = {
  category: CameraCategoryValue | null,
  types: CameraTypeValue[],
  levels: CameraLevelValue[],
};

const initialState: FilterState = {
  category: null,
  types: [],
  levels: [],
};

const filterSlice = createSlice({
  name: SliceName.Filter,
  initialState,
  reducers: {
    setCategory: (state: FilterState, action: PayloadAction<CameraCategoryValue | null>) => {
      state.category = action.payload;
    },
    setTypes: (state: FilterState, action: PayloadAction<CameraTypeValue>) => {
      if (state.types.includes(action.payload)) {
        state.types = state.types.filter((type) => type !== action.payload)
      } else {
        state.types.push(action.payload);
      }
    },
    setLevels: (state: FilterState, action: PayloadAction<CameraLevelValue>) => {
      if (state.levels.includes(action.payload)) {
        state.levels = state.levels.filter((level) => level !== action.payload)
      } else {
        state.levels.push(action.payload);
      }
    },
    resetUnavailableTypes: (state: FilterState) => {
      state.types = state.types.filter((type) => !VIDEOCAMERA_DISABLED_TYPES.includes(type))
    }
  }
})

export const getCategory = (state: State) => state.filter.category;
export const getTypes = (state: State) => state.filter.types;
export const getLevels = (state: State) => state.filter.levels;

export const { setCategory, setTypes, setLevels, resetUnavailableTypes } = filterSlice.actions;

export default filterSlice;
