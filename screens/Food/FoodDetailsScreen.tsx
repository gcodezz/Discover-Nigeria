import { 
  StyleSheet,
  Text, 
  View,
  ScrollView 
} from 'react-native';
import React, { useEffect } from 'react'
import { useTheme } from '@react-navigation/native'

import { FoodDetailsScreenProps } from '../../types/props'
import { foods, Food } from '../../data/foods'
import Icon from '../../components/UI/Logo'
import BigImage from '../../components/UI/BigImage';

const FoodDetailsScreen = ({ route, navigation }: FoodDetailsScreenProps) => {
  const { id, title } = route.params
  const selectedFood : Food | undefined = foods.find(food => food.id == id)

  const { colors } = useTheme()
  
  useEffect(() => {
    navigation.setOptions({
      headerTitle: title,
    })
  }, [navigation])

  return (
    <ScrollView 
      showsVerticalScrollIndicator={false}
      style={styles.container}
    >
      <View style={{ marginHorizontal: '5%' }}>
        <BigImage uri={selectedFood!.image} />
        <Text style={{...styles.textStyle, color: colors.text }}>Ingredients</Text>
        {selectedFood?.ingredients.map((ing, index) => (
          <View key={index} style={{ flexDirection: 'row' }}>
            <Icon iconName="dot-single" />
            <Text style={{ ...styles.miniText, color: colors.text }}>{ing}</Text>
          </View>
        ))}
        <Text style={{...styles.textStyle, color: colors.text }}>Directions</Text>
        {selectedFood?.directions.map((step, index) => (
          <View key={index} style={{ flexDirection: 'row' }}>
            <Icon iconName="dot-single" />
            <Text style={{ ...styles.miniText, color: colors.text, marginBottom: 5}}>{step}</Text>
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
    fontSize: 22
  },
  miniText: {
    flex: 1,
    fontSize: 18,
    fontFamily: 'KarlaRegular',
    marginBottom: 2,
    flexWrap: 'wrap'
  }
});
