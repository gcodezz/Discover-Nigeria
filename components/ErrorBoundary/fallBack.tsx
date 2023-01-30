import { Text, Button, View, StyleSheet } from 'react-native';
import * as Updates from 'expo-updates';
import React from 'react';
import { strings } from '../../constants/strings';

/**
 * Restarts the app on press
 */
const handleRestart = async () => {
  Updates.reloadAsync();
};

/**
 * Fallback Screen for ErrorBoundary, this screen is displayed when the app crashes
 * due to an error in our component tree.
 */
export function FallBack() {
  return (
    <View style={styles.container}>
      <Text>{strings.error.errorTitle}</Text>
      <Text>{strings.error.errorMessage}</Text>
      <Button title='Restart the app' onPress={handleRestart} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});
