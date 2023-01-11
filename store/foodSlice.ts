import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favFoods: [],
  availableFoods: [],
};

const foodSlice = createSlice({
  name: 'foods',
  initialState,
  reducers: {
    fetchFoods: (state, action) => {
      state.availableFoods = action.payload;
    },
  },
});

export const { fetchFoods } = foodSlice.actions;

export default foodSlice.reducer;
