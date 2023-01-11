import React from 'react';
import { enableScreens } from 'react-native-screens';
import { useFonts } from 'expo-font';
import { configureStore } from '@reduxjs/toolkit';
import { Provider as ReduxProvider } from 'react-redux';

import modeReducer from './store/modeSlice';
import placeReducer from './store/placeSlice';
import foodReducer from './store/foodSlice';
import StartupScreen from './screens/General/StartupScreen';

enableScreens();

const store = configureStore({
  reducer: {
    foods: foodReducer,
    places: placeReducer,
    isDarkMode: modeReducer,
  },
});

export default function App() {
  const [loaded] = useFonts({
    KarlaBold: require('./assets/fonts/Karla-Bold.ttf'),
    KarlaMedium: require('./assets/fonts/Karla-Medium.ttf'),
    KarlaRegular: require('./assets/fonts/Karla-Regular.ttf'),
    KarlaLight: require('./assets/fonts/Karla-Light.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <ReduxProvider store={store}>
      <StartupScreen />
    </ReduxProvider>
  );
}
