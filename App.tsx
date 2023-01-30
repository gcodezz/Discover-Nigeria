import React from 'react';
import { enableScreens } from 'react-native-screens';
import { Provider as ReduxProvider } from 'react-redux';

import StartupScreen from './screens/General/StartupScreen';
import { useAppStart } from './hooks/useAppStart';
import { makeStore } from './store/configureStore';
import { ErrorBoundary } from './components/ErrorBoundary/ErrorBoundary';

enableScreens();

export default function App() {
  const hasAppLoaded = useAppStart();
  if (!hasAppLoaded) {
    return null;
  }
  return (
    <ErrorBoundary>
      <ReduxProvider store={makeStore}>
        <StartupScreen />
      </ReduxProvider>
    </ErrorBoundary>
  );
}
