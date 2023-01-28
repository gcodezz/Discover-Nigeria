import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React, { useEffect } from 'react';
import { useTheme } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';

import { FoodDetailsScreenProps } from '../../types/props';
import { foods, Food } from '../../data/foods';
import Icon from '../../components/UI/Icon';
import BigImage from '../../components/UI/BigImage';
import TouchableCmp from '../../components/UI/TouchableBtn';
import { AppDispatch, RootState } from '../../App';
import { toggleFoodFavorite } from '../../store/foodSlice';

const FoodDetailsScreen = ({ route, navigation }: FoodDetailsScreenProps) => {
  const { id, title } = route.params;
  const selectedFood: Food | undefined = foods.find((food) => food.id === id);
  const favFoods: Food[] = useSelector((state: RootState) => state.foods.favFoods);

  const currentFoodIsFav = favFoods.some((food) => food.id.toString() === id.toString());

  const dispatch: AppDispatch = useDispatch();

  const { colors } = useTheme();

  useEffect(() => {
    navigation.setOptions({
      headerTitle: title,
      // eslint-disable-next-line react/no-unstable-nested-components
      headerRight: () => (
        <TouchableCmp
          style={{ marginRight: 10 }}
          onPress={() => {
            dispatch(toggleFoodFavorite(id));
          }}
        >
          <Icon iconName={currentFoodIsFav ? 'heart' : 'heart-outlined'} />
        </TouchableCmp>
      ),
    });
  }, [selectedFood, currentFoodIsFav, navigation, title, dispatch, id]);

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <View style={{ marginHorizontal: '5%' }}>
        <BigImage uri={selectedFood.image} />
        <Text style={{ ...styles.textStyle, color: colors.text }}>Ingredients</Text>
        {selectedFood?.ingredients.map((ing, index) => (
          <View key={index} style={{ flexDirection: 'row' }}>
            <Icon iconName='dot-single' />
            <Text style={{ ...styles.miniText, color: colors.text }}>{ing}</Text>
          </View>
        ))}
        <Text style={{ ...styles.textStyle, color: colors.text }}>Directions</Text>
        {selectedFood?.directions.map((step, index) => (
          <View key={index} style={{ flexDirection: 'row' }}>
            <Icon iconName='dot-single' />
            <Text
              style={{
                ...styles.miniText,
                color: colors.text,
                marginBottom: 5,
              }}
            >
              {step}
            </Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default FoodDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textStyle: {
    marginVertical: 10,
    fontFamily: 'KarlaBold',
    fontSize: 22,
  },
  miniText: {
    flex: 1,
    fontSize: 18,
    fontFamily: 'KarlaRegular',
    marginBottom: 2,
    flexWrap: 'wrap',
  },
});
