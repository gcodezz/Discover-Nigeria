import { FlatList, StatusBar, StyleSheet } from 'react-native';
import React, { useEffect } from 'react';
import { useTheme } from '@react-navigation/native';
import { useSelector } from 'react-redux';

import { FoodItem, Food } from '../../data/foods';
import FoodGridTile from '../../components/Food/FoodGridTile';
import Icon from '../../components/UI/Icon';
import { FoodListScreenProps } from '../../types/props';
import TouchableCmp from '../../components/UI/TouchableBtn';
import { RootState } from '../../store/configureStore';

const FoodListScreen = ({ navigation }: FoodListScreenProps) => {
  const theme = useTheme();
  const availableFoods: Food[] = useSelector((state: RootState) => state.foods.availableFoods);

  useEffect(() => {
    navigation.setOptions({
      // eslint-disable-next-line react/no-unstable-nested-components
      headerLeft: () => (
        <TouchableCmp style={styles.header} onPress={() => navigation.toggleDrawer()}>
          <Icon iconName='menu' />
        </TouchableCmp>
      ),
    });
  }, [navigation]);

  const renderGridItem = ({ item }: FoodItem) => {
    return (
      <FoodGridTile
        title={item.title}
        image={item.image}
        onSelect={() => {
          navigation.navigate('FoodDetails', {
            id: item.id,
            title: item.title,
          });
        }}
      />
    );
  };

  return (
    <>
      <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'} />
      <FlatList
        data={availableFoods}
        renderItem={renderGridItem}
        numColumns={2}
        keyExtractor={({ id }) => id}
      />
    </>
  );
};

export const screenOptions = () => {
  return {
    headerTitle: 'Foods',
  };
};

export default FoodListScreen;

const styles = StyleSheet.create({
  header: {
    marginLeft: 5,
  },
});
