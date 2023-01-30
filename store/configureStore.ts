import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import modeReducer from './modeSlice';
import placeReducer from './placeSlice';
import foodReducer from './foodSlice';

export const makeStore = configureStore({
  reducer: {
    foods: foodReducer,
    places: placeReducer,
    isDarkMode: modeReducer,
  },
});

export type RootState = ReturnType<typeof makeStore.getState>;
export type AppDispatch = typeof makeStore.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
