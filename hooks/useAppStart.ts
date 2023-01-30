import { useFonts } from 'expo-font';

export function useAppStart() {
  const [loaded] = useFonts({
    KarlaBold: require('../assets/fonts/Karla-Bold.ttf'),
    KarlaMedium: require('../assets/fonts/Karla-Medium.ttf'),
    KarlaRegular: require('../assets/fonts/Karla-Regular.ttf'),
    KarlaLight: require('../assets/fonts/Karla-Light.ttf'),
  });

  if (!loaded) {
    return null;
  }
  return loaded;
}
