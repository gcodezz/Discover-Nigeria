import AsyncStorage from '@react-native-async-storage/async-storage';

export const editStorage = async (id: string, cat: string) => {
  const favData = await AsyncStorage.getItem(`${cat}`);
  const favs = JSON.parse(favData);
  if (favs == null) {
    AsyncStorage.setItem(`${cat}`, JSON.stringify([id]));
  } else {
    const existingIndex = favs.findIndex((dataId: string) => dataId === id);
    if (existingIndex >= 0) {
      favs.splice(existingIndex, 1);
    } else {
      favs.push(id);
    }
    AsyncStorage.setItem(`${cat}`, JSON.stringify(favs));
  }
};
