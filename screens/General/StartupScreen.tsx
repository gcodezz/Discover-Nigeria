import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AppNavigator from '../../navigation/AppNavigation';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';

import { RootState } from '../../App';
import { fetchFoods, fetchPlaces, fetchMode } from '../../store/actions';
import { CustomDarkTheme, CustomDefaultTheme } from '../../themes/themes';

const StartupScreen = () => {
  const isDarkMode: boolean = useSelector((state: RootState) => state.isDarkMode.isDarkMode);
  const themeValue = isDarkMode ? CustomDarkTheme : CustomDefaultTheme;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFoods());
    dispatch(fetchPlaces());
    dispatch(fetchMode());
  }, []);

  return (
    <PaperProvider theme={themeValue}>
      <NavigationContainer theme={themeValue}>
        <AppNavigator />
      </NavigationContainer>
    </PaperProvider>
  );
};

export default StartupScreen;
