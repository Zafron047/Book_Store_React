import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checkCategoryStatus: (state) => ({
      ...state,
      categories: 'Under Construction',
    }),
  },
});

export const categoriesReducer = categoriesSlice.reducer;
export const { checkCategoryStatus } = categoriesSlice.actions;
